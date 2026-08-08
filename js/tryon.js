/* ─── Try-On Camera Feature ─────────────────────────────────
   Click anywhere on the camera view to place the jewelry.
   Scroll / pinch to resize. Camera requires localhost / HTTPS.
   ─────────────────────────────────────────────────────────── */

var SiccTryon = (function() {

  var overlay     = null;
  var closeBtn    = null;
  var videoEl     = null;
  var jewelryWrap = null;
  var flipBtn     = null;
  var captureBtn  = null;
  var errorEl     = null;

  var stream      = null;
  var facingMode  = 'user';
  var currentImg  = null;

  var resize      = { currentSize: 120 };
  var lastPinchDist = 0;
  var pinching    = false;

  /* ── Init ─────────────────────────────────── */
  function init() {
    overlay     = document.getElementById('tryon-overlay');
    closeBtn    = document.getElementById('tryon-close');
    videoEl     = document.getElementById('tryon-video');
    jewelryWrap = document.getElementById('tryon-jewelry');
    flipBtn     = document.getElementById('tryon-flip');
    captureBtn  = document.getElementById('tryon-capture');
    errorEl     = document.getElementById('tryon-error');

    closeBtn.addEventListener('click', closeTryon);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeTryon();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeTryon();
    });

    flipBtn.addEventListener('click', flipCamera);
    captureBtn.addEventListener('click', capturePhoto);
  }

  /* ── Open ────────────────────────────────── */
  function open(product) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    showError('');
    injectJewelryImg(product);
    startCamera();
  }

  function closeTryon() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopCamera();
  }

  /* ── Camera ───────────────────────────────── */
  function startCamera() {
    stopCamera();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showError('Your browser doesn\'t support camera access.');
      return;
    }
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    }).then(function(s) {
      stream = s;
      videoEl.srcObject = s;
      videoEl.play().catch(function() {});
      showError('');
    }).catch(function(err) {
      var msg = 'Camera access denied.';
      if (err.name === 'NotFoundError')    msg = 'No camera found on this device.';
      if (err.name === 'NotAllowedError')  msg = 'Camera permission denied. Allow access in your browser settings.';
      if (err.name === 'NotReadableError') msg = 'Camera is already in use by another app.';
      showError(msg + ' You can still see the jewelry overlay without camera.');
    });
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(function(t) { t.stop(); });
      stream = null;
    }
    videoEl.srcObject = null;
  }

  function flipCamera() {
    facingMode = facingMode === 'user' ? 'environment' : 'user';
    startCamera();
  }

  /* ── Jewelry overlay ─────────────────────── */
  function injectJewelryImg(product) {
    jewelryWrap.innerHTML = '';
    resize.currentSize = 120;
    pinching = false;
    lastPinchDist = 0;

    var img = document.createElement('img');
    img.className = 'tryon-jewelry-img';
    img.alt = product.name;
    img.src = product.tryOnSrc || (product.images && product.images[0]) || 'images/symbol-black.png';
    img.onerror = function() { img.src = 'images/symbol-black.png'; };
    img.style.width = resize.currentSize + 'px';
    img.style.display = 'none';        /* hidden until user taps */
    img.style.pointerEvents = 'none';  /* clicks pass through to wrap */
    jewelryWrap.appendChild(img);
    currentImg = img;

    /* ── Click / tap to place ─────────────── */
    function placeAt(clientX, clientY) {
      var rect = jewelryWrap.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var w = currentImg.offsetWidth  || resize.currentSize;
      var h = currentImg.offsetHeight || resize.currentSize;
      currentImg.style.left    = clamp(x - w / 2, 0, rect.width  - w) + 'px';
      currentImg.style.top     = clamp(y - h / 2, 0, rect.height - h) + 'px';
      currentImg.style.display = 'block';
    }

    jewelryWrap.addEventListener('click', function(e) {
      placeAt(e.clientX, e.clientY);
    });

    /* ── Touch: tap to place, pinch to resize  */
    jewelryWrap.addEventListener('touchstart', function(e) {
      if (e.touches.length === 2) {
        pinching = true;
        lastPinchDist = pinchDist(e.touches);
      }
    }, { passive: true });

    jewelryWrap.addEventListener('touchmove', function(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        pinching = true;
        var dist = pinchDist(e.touches);
        if (lastPinchDist > 0) {
          var scale = dist / lastPinchDist;
          resize.currentSize = clamp(resize.currentSize * scale, 30, 500);
          if (currentImg) currentImg.style.width = resize.currentSize + 'px';
        }
        lastPinchDist = dist;
      }
    }, { passive: false });

    jewelryWrap.addEventListener('touchend', function(e) {
      if (pinching) { pinching = false; lastPinchDist = 0; return; }
      /* Single-finger tap = place */
      if (e.changedTouches.length === 1) {
        var touch = e.changedTouches[0];
        placeAt(touch.clientX, touch.clientY);
      }
    });

    /* ── Scroll to resize (desktop) ─────────── */
    jewelryWrap.addEventListener('wheel', function(e) {
      e.preventDefault();
      var delta = e.deltaY < 0 ? 1.08 : 0.92;
      resize.currentSize = clamp(resize.currentSize * delta, 30, 500);
      if (currentImg) currentImg.style.width = resize.currentSize + 'px';
    }, { passive: false });
  }

  /* ── Capture photo ───────────────────────── */
  function capturePhoto() {
    var canvas = document.getElementById('tryon-canvas');
    var w = videoEl.videoWidth  || 640;
    var h = videoEl.videoHeight || 480;
    canvas.width  = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(videoEl, 0, 0, w, h);

    if (currentImg && currentImg.style.display !== 'none') {
      var videoRect = videoEl.getBoundingClientRect();
      var scaleX = w / videoRect.width;
      var scaleY = h / videoRect.height;
      var imgLeft = parseFloat(currentImg.style.left) || 0;
      var imgTop  = parseFloat(currentImg.style.top)  || 0;
      ctx.drawImage(currentImg,
        imgLeft * scaleX,
        imgTop  * scaleY,
        currentImg.offsetWidth  * scaleX,
        currentImg.offsetHeight * scaleY
      );
    }

    var link = document.createElement('a');
    link.download = 'sicc-tryon.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  /* ── Utils ───────────────────────────────── */
  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.hidden = !msg;
  }
  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }
  function pinchDist(touches) {
    var dx = touches[0].clientX - touches[1].clientX;
    var dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  return { init: init, open: open };

})();
