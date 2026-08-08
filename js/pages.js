/* ─── Page Renderers ────────────────────────────────────────
   Each function renders into #app.
   All user-facing strings come from t() / pt() in i18n.js.
   ─────────────────────────────────────────────────────────── */

/* ══ Shared helpers ══════════════════════════════════════════ */

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatPrice(n) { return '€' + n; }

/* Product image with placeholder fallback */
function productImg(src, alt, cls) {
  cls = cls || 'product-tile-img';
  return [
    '<img class="' + cls + '"',
    '  src="' + escHtml(src) + '"',
    '  alt="' + escHtml(alt) + '"',
    '  loading="lazy"',
    '  onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"',
    '>',
    '<div class="img-placeholder" style="display:none">',
    '  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">',
    '    <circle cx="16" cy="16" r="12" stroke="#ccc" stroke-width="1.5"/>',
    '    <circle cx="16" cy="16" r="4" fill="#e0e0e0"/>',
    '  </svg>',
    '  <span>' + escHtml(alt) + '</span>',
    '</div>'
  ].join('\n');
}

/* Footer (shared) */
function footerHtml() {
  return [
    '<footer class="site-footer">',
    '  <div class="footer-inner">',
    '    <div class="footer-top">',
    '      <div class="footer-signup">',
    '        <h3>' + escHtml(t('footer_signup_h3')) + '</h3>',
    '        <p>' + escHtml(t('footer_signup_p')) + '</p>',
    '        <form class="footer-email-form" onsubmit="handleEmailSignup(event)">',
    '          <input class="footer-email-input" type="email" placeholder="' + escHtml(t('footer_email_placeholder')) + '" required>',
    '          <button type="submit" class="footer-email-btn">' + escHtml(t('footer_subscribe')) + '</button>',
    '        </form>',
    '      </div>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <span>' + escHtml(t('footer_rights')) + '</span>',
    '      <a href="https://instagram.com/sicc.jewelry" target="_blank" rel="noopener">@sicc.jewelry</a>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');
}

function handleEmailSignup(e) {
  e.preventDefault();
  var form = e.target;
  form.innerHTML = '<p style="color:#aaa;font-size:13px;padding:12px 0">' + escHtml(t('cart_signup_done')) + '</p>';
}

/* Reveal on scroll */
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) { obs.observe(el); });
}

/* Symbol watermarks */
function symbolWatermarks() {
  return [
    '<div class="watermark-symbols">',
    '  <img src="images/symbol-black.png" alt="">',
    '  <img src="images/symbol-black.png" alt="">',
    '  <img src="images/symbol-black.png" alt="">',
    '</div>'
  ].join('');
}

/* Product tile */
function productTileHtml(product) {
  return [
    '<div class="product-tile" data-product-id="' + escHtml(product.id) + '" role="button" tabindex="0"',
    '     aria-label="View ' + escHtml(pt(product, 'name')) + '">',
    '  <div class="product-tile-img-wrap">',
    productImg(product.images[0], escHtml(pt(product, 'altText'))),
    '  </div>',
    '  <div class="product-tile-info">',
    '    <div class="product-tile-name">' + escHtml(pt(product, 'name')) + '</div>',
    '    <div class="product-tile-price">' + formatPrice(product.price) + '</div>',
    '    <div class="product-tile-symbol">' + escHtml(pt(product, 'symbolMeaning')) + '</div>',
    '  </div>',
    '</div>'
  ].join('\n');
}

/* Bind tile clicks → navigate to product page */
function bindTileClicks(container) {
  container.querySelectorAll('[data-product-id]').forEach(function(tile) {
    function activate() {
      window.location.hash = '#/product/' + tile.dataset.productId;
    }
    tile.addEventListener('click', activate);
    tile.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });
}


/* ══ HOME PAGE ══════════════════════════════════════════════ */
function renderHome() {
  var featured = getFeaturedProducts();
  var app = document.getElementById('app');

  app.innerHTML = [
    '<section class="hero">',
    '  <video class="hero-video hero-video--desktop" autoplay muted loop playsinline aria-hidden="true"><source src="images/hero.mp4?v=12" type="video/mp4"></video>',
    '  <img src="images/header.jpg" class="hero-video hero-video--mobile" alt="" aria-hidden="true">',
    '  <div class="hero-overlay"></div>',
    '</section>',

    '<div class="home-content home-dark">',

    '  <img src="images/mountain-bg.png" class="home-mountain-bg" aria-hidden="true" alt="">',

    '  <div class="page-deco page-deco--back" aria-hidden="true">',
    '    <img class="page-deco-item" src="images/deco/pendant-prazni.png" alt="" style="right:-220px;top:16%;--r:7deg;--flip:-1">',
    '    <img class="page-deco-item" src="images/deco/pendant-puni.png" alt="" style="left:-220px;top:7%;--r:-8deg">',
    '  </div>',
    '  <div class="page-deco" aria-hidden="true">',
    '    <img class="page-deco-item" src="images/deco/trokut.png" alt="" style="left:-90px;top:45%;--r:11deg;--flip:-1;width:304px">',
    '    <img class="page-deco-item" src="images/deco/ogrlica-mreza.png" alt="" style="right:-248px;top:58%;--r:9deg;opacity:1">',
    '  </div>',
    '  <div class="page-deco page-deco--overflow" aria-hidden="true">',
    '    <img class="page-deco-item" src="images/deco/kuglice.png" alt="" style="left:-200px;top:82%;--r:7deg;width:608px">',
    '  </div>',

    '  <section class="brand-statement reveal">',
    '    <p>' + t('home_brand1_html') + '</p>',
    '    <p>' + escHtml(t('home_brand2')) + '</p>',
    '  </section>',

    '  <div class="symbol-divider">',
    '    <div class="symbol-divider-line"></div>',
    '    <img src="images/symbol-black.png" alt="">',
    '    <div class="symbol-divider-line"></div>',
    '  </div>',

    '  <section class="featured-section">',
    '    <p class="section-label">' + escHtml(t('home_featured')) + '</p>',
    '    <div class="featured-grid" id="featured-grid">',
    featured.map(productTileHtml).join('\n'),
    '    </div>',
    '  </section>',

    '  <section class="copy-interlude">',
    symbolWatermarks(),
    '    <div class="copy-interlude-inner">',
    '      <div class="copy-interlude-text reveal">',
    '        <p>' + t('home_interlude2_html') + '</p>',
    '      </div>',
    '      <div class="copy-interlude-symbol">',
    '        <img src="images/symbol-black.png" alt="" aria-hidden="true">',
    '      </div>',
    '    </div>',
    '  </section>',

    '  <section class="shop-cta-section reveal">',
    '    <h2>' + t('home_cta_h2_html') + '</h2>',
    '    <p>' + escHtml(t('home_cta_p')) + '</p>',
    '    <a href="#/shop" class="btn btn--large">' + escHtml(t('home_cta_btn')) + '</a>',
    '  </section>',

    '  <div class="symbol-divider">',
    '    <div class="symbol-divider-line"></div>',
    '    <img src="images/symbol-black.png" alt="">',
    '    <div class="symbol-divider-line"></div>',
    '  </div>',

    '</div>',

    footerHtml()

  ].join('\n');

  bindTileClicks(app);
  initReveal();
}


/* ══ SHOP PAGE ══════════════════════════════════════════════ */
function renderShop() {
  var app = document.getElementById('app');

  app.innerHTML = [
    '<div class="shop-page">',
    '  <div class="shop-header">',
    '    <h1>' + escHtml(t('shop_h1')) + '</h1>',
    '    <p class="shop-sub">' + escHtml(t('shop_sub')) + '</p>',
    '  </div>',

    '  <div class="shop-grid" id="shop-grid">',
    SICC_PRODUCTS.map(productTileHtml).join('\n'),
    '  </div>',
    '</div>',

    footerHtml()

  ].join('\n');

  bindTileClicks(app);
  initReveal();
}


/* ══ PRODUCT PAGE ════════════════════════════════════════════ */
function renderProduct(productId) {
  var product = getProduct(productId);
  if (!product) { renderNotFound(); return; }

  var app = document.getElementById('app');

  var descHtml = pt(product, 'description').map(function(p) {
    return '<p>' + escHtml(p) + '</p>';
  }).join('');

  var thumbsHtml = product.images.map(function(src, i) {
    return [
      '<button class="gallery-thumb' + (i === 0 ? ' active' : '') + '" data-img="' + escHtml(src) + '" aria-label="Image ' + (i + 1) + '">',
      productImg(src, pt(product, 'altText'), 'gallery-thumb-img'),
      '</button>'
    ].join('');
  }).join('');

  app.innerHTML = [
    '<div class="product-page">',
    '  <div class="product-page-nav">',
    '    <a href="#/shop" class="product-back-btn">← ' + escHtml(t('back_to_shop')) + '</a>',
    '  </div>',

    '  <div class="product-page-inner">',

    '    <div class="product-page-gallery">',
    '      <div class="product-gallery-main" id="pp-gallery-main">',
    productImg(product.images[0], pt(product, 'altText'), 'gallery-main-img'),
    '      </div>',
    '      <div class="product-gallery-thumbs">',
    thumbsHtml,
    '      </div>',
    '    </div>',

    '    <div class="product-page-details">',
    '      <div class="pp-header">',
    '        <p class="product-details-cat">' + escHtml(product.category) + '</p>',
    '        <h1>' + escHtml(pt(product, 'name')) + '</h1>',
    '        <p class="product-details-price">' + formatPrice(product.price) + '</p>',
    '      </div>',

    '      <div class="pp-symbol">',
    '        <p class="product-details-symbol">' + escHtml(product.symbolName) + '</p>',
    '        <p class="product-details-meaning">' + escHtml(pt(product, 'symbolMeaning')) + '</p>',
    '      </div>',

    '      <div class="product-details-desc">' + descHtml + '</div>',

    '      <div class="product-meta-grid">',
    '        <div class="product-meta-item">',
    '          <div class="product-meta-label">' + escHtml(t('product_materials')) + '</div>',
    '          <div class="product-meta-value">' + escHtml(pt(product, 'materials')) + '</div>',
    '        </div>',
    '        <div class="product-meta-item">',
    '          <div class="product-meta-label">' + escHtml(t('product_size')) + '</div>',
    '          <div class="product-meta-value">' + escHtml(pt(product, 'size')) + '</div>',
    '        </div>',
    '      </div>',

    '      <div class="product-tactile">',
    '        <div class="product-tactile-label">' + escHtml(t('product_tactile')) + '</div>',
    '        <div class="product-tactile-text">' + escHtml(pt(product, 'tactile')) + '</div>',
    '      </div>',

    '      <div class="product-actions">',
    '        <button class="btn btn--full" id="pp-add-btn">' + escHtml(t('product_add')) + '</button>',
    '        <button class="btn btn--ghost btn--full" id="pp-tryon-btn">' + escHtml(t('product_tryon')) + '</button>',
    '        <p class="product-actions-note">' + escHtml(t('product_leave')) + '</p>',
    '      </div>',
    '    </div>',

    '  </div>',
    '</div>',
    footerHtml()
  ].join('\n');

  /* Gallery thumbs */
  var thumbBtns = app.querySelectorAll('.gallery-thumb');
  var mainWrap  = app.querySelector('#pp-gallery-main');
  thumbBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      thumbBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var mainImg = mainWrap.querySelector('img');
      if (mainImg) mainImg.src = btn.dataset.img;
    });
  });

  /* Add to cart */
  document.getElementById('pp-add-btn').addEventListener('click', function() {
    SiccCart.addItem(product);
  });

  /* Try on */
  document.getElementById('pp-tryon-btn').addEventListener('click', function() {
    SiccTryon.open(product);
  });
}


/* ══ ABOUT PAGE ═════════════════════════════════════════════ */
function renderAbout() {
  var app = document.getElementById('app');

  var symbols = t('about_symbols');
  var symbolRows = symbols.map(function(s) {
    return [
      '<div class="symbol-entry">',
      '  <span class="symbol-entry-name">' + escHtml(s.name) + '</span>',
      '  <span class="symbol-entry-meaning">' + escHtml(s.meaning) + '</span>',
      '</div>'
    ].join('');
  }).join('');

  app.innerHTML = [
    '<div class="about-page about-dark">',

    '  <div class="page-deco" aria-hidden="true">',
    '    <img class="page-deco-item" src="images/deco/kuglice.png" alt="" style="left:-232px;top:30%;--r:-10deg">',
    '    <img class="page-deco-item" src="images/deco/zenski-prsten.png" alt="" style="left:-168px;top:58%;--r:18deg;width:432px">',
    '    <img class="page-deco-item" src="images/deco/trokut.png" alt="" style="right:-192px;top:42%;--r:8deg;width:608px">',
    '    <img class="page-deco-item" src="images/deco/ogrlica-mreza.png" alt="" style="right:-168px;top:72%;--r:-7deg">',
    '  </div>',

    '  <div class="about-crosses" aria-hidden="true">',
    '    <img src="images/symbol-black.png" style="width:180px;top:12%;left:6%;--cr:17deg">',
    '    <img src="images/symbol-black.png" style="width:90px;top:28%;left:55%;--cr:-33deg">',
    '    <img src="images/symbol-black.png" style="width:260px;top:41%;left:78%;--cr:8deg">',
    '    <img src="images/symbol-black.png" style="width:120px;top:55%;left:22%;--cr:-20deg">',
    '    <img src="images/symbol-black.png" style="width:200px;top:68%;left:42%;--cr:44deg">',
    '    <img src="images/symbol-black.png" style="width:70px;top:80%;left:8%;--cr:-12deg">',
    '    <img src="images/symbol-black.png" style="width:150px;top:88%;left:70%;--cr:29deg">',
    '  </div>',

    '  <div class="sicanje-full">',
    '    <img src="images/sicanje 1.jpg" alt="">',
    '  </div>',

    '  <div class="about-hero">',
    '    <h1 class="reveal">' + escHtml(t('about_h1')) + '</h1>',
    '  </div>',

    '  <div class="about-body">',

    '    <div class="about-section reveal">',
    '      <h2>' + escHtml(t('about_s1_h2')) + '</h2>',
    '      <p>' + escHtml(t('about_s1_p1')) + '</p>',
    '      <p>' + escHtml(t('about_s1_p2')) + '</p>',
    '    </div>',

    '    <div class="sicanje-pair reveal">',
    '      <img src="images/sicanje 2.jpg" alt="">',
    '      <img src="images/sicanje 3.jpg" alt="">',
    '    </div>',

    '    <div class="about-section reveal">',
    '      <h2>' + escHtml(t('about_s2_h2')) + '</h2>',
    '      <p>' + escHtml(t('about_s2_p')) + '</p>',
    '    </div>',

    '    <div class="about-section reveal">',
    '      <h2>' + escHtml(t('about_s3_h2')) + '</h2>',
    '      <p>' + escHtml(t('about_s3_p1')) + '</p>',
    '      <p>' + escHtml(t('about_s3_p2')) + '</p>',
    '    </div>',

    '    <div class="sicanje-offset reveal">',
    '      <img src="images/sicanje 4.jpg" alt="">',
    '    </div>',

    '    <div class="about-section reveal">',
    '      <h2>' + escHtml(t('about_s4_h2')) + '</h2>',
    '      <p>' + escHtml(t('about_s4_p1')) + '</p>',
    '      <p>' + escHtml(t('about_s4_p2')) + '</p>',
    '    </div>',

    '    <div class="about-section reveal">',
    '      <h2>' + escHtml(t('about_s5_h2')) + '</h2>',
    '      <p>' + escHtml(t('about_s5_p1')) + '</p>',
    '      <p>' + escHtml(t('about_s5_p2')) + '</p>',
    '    </div>',

    '    <div class="sicanje-full reveal">',
    '      <img src="images/sicanje 5.jpg" alt="">',
    '    </div>',

    '    <div class="symbols-glossary reveal">',
    '      <h2>' + escHtml(t('about_symbols_h2')) + '</h2>',
    symbolRows,
    '      <p class="about-end-note">' + escHtml(t('about_symbols_note')) + '</p>',
    '    </div>',

    '  </div>',


    footerHtml(),
    '</div>'
  ].join('\n');

  initReveal();
}


/* ══ CONTACT PAGE ═══════════════════════════════════════════ */
function renderContact() {
  var app = document.getElementById('app');

  app.innerHTML = [
    '<div class="contact-page">',

    '  <div class="page-deco" aria-hidden="true">',
    '    <img class="page-deco-item" src="images/deco/ogrlica-mreza.png" alt="" style="left:-232px;top:8%;--r:-7deg">',
    '    <img class="page-deco-item" src="images/deco/pendant-puni.png" alt="" style="right:-220px;top:15%;--r:8deg">',
    '  </div>',

    '  <div class="contact-inner">',
    '    <h1>' + escHtml(t('contact_h1')) + '</h1>',
    '    <p class="sub">' + escHtml(t('contact_sub')) + '</p>',

    '    <form class="contact-form" id="contact-form">',
    '      <div class="form-group">',
    '        <label for="cf-name">' + escHtml(t('contact_name_label')) + ' <span style="opacity:.4">' + escHtml(t('contact_name_opt')) + '</span></label>',
    '        <input type="text" id="cf-name" name="name" placeholder="' + escHtml(t('contact_name_placeholder')) + '">',
    '      </div>',
    '      <div class="form-group">',
    '        <label for="cf-email">' + escHtml(t('contact_email_label')) + '</label>',
    '        <input type="email" id="cf-email" name="email" placeholder="' + escHtml(t('contact_email_placeholder')) + '" required>',
    '      </div>',
    '      <div class="form-group">',
    '        <label for="cf-message">' + escHtml(t('contact_message_label')) + '</label>',
    '        <textarea id="cf-message" name="message" placeholder="' + escHtml(t('contact_message_placeholder')) + '"></textarea>',
    '      </div>',
    '      <div class="form-submit">',
    '        <button type="submit" class="btn btn--large">' + escHtml(t('contact_send')) + '</button>',
    '      </div>',
    '      <p class="form-note">' + escHtml(t('contact_note')) + '</p>',
    '    </form>',

    '    <div class="contact-direct">',
    '      <p>' + escHtml(t('contact_or_email')) + ' <a href="mailto:hello@sicc.com">hello@sicc.com</a></p>',
    '      <p>' + escHtml(t('contact_instagram')) + ' <a href="https://instagram.com/sicc.jewelry" target="_blank" rel="noopener">@sicc.jewelry</a></p>',
    '    </div>',
    '  </div>',

    footerHtml(),
    '</div>'
  ].join('\n');

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    e.target.outerHTML = [
      '<div class="form-success">',
      '  <strong>' + escHtml(t('contact_success')) + '</strong>',
      '  ' + escHtml(t('contact_success_sub')),
      '</div>'
    ].join('');
  });
}


/* ══ 404 PAGE ════════════════════════════════════════════════ */
function renderNotFound() {
  var app = document.getElementById('app');
  app.innerHTML = [
    '<div class="not-found-page">',
    '  <h1 aria-hidden="true">404</h1>',
    '  <div class="not-found-content">',
    '    <h2>' + escHtml(t('notfound_h2')) + '</h2>',
    '    <p>' + escHtml(t('notfound_p')) + '</p>',
    '    <div class="not-found-links">',
    '      <a href="#/shop" class="btn">' + escHtml(t('notfound_shop')) + '</a>',
    '      <a href="#/" class="btn btn--ghost">' + escHtml(t('notfound_home')) + '</a>',
    '    </div>',
    '  </div>',
    '  <span class="not-found-bottom">' + escHtml(t('notfound_tagline')) + '</span>',
    '</div>',
    footerHtml()
  ].join('\n');
}


/* ══ CHECKOUT PAGE ═══════════════════════════════════════════ */
function renderCheckout() {
  var app   = document.getElementById('app');
  var items = SiccCart.getItems();
  var total = SiccCart.getTotal();

  var summaryRows = items.length === 0
    ? '<div class="checkout-summary-item"><span>' + escHtml(t('checkout_nothing')) + '</span></div>'
    : items.map(function(item) {
        /* Show localised product name if available */
        var prod = getProduct(item.id);
        var displayName = prod ? pt(prod, 'name') : item.name;
        return '<div class="checkout-summary-item"><span>' + escHtml(displayName) + (item.qty > 1 ? ' × ' + item.qty : '') + '</span><span>' + formatPrice(item.price * item.qty) + '</span></div>';
      }).join('');

  app.innerHTML = [
    '<div class="checkout-page">',
    '  <div class="checkout-inner">',
    '    <h1>' + escHtml(t('checkout_h1')) + '</h1>',

    '    <div class="checkout-summary">',
    '      <h2>' + escHtml(t('checkout_order_h2')) + '</h2>',
    summaryRows,
    '      <div class="checkout-total"><span>' + escHtml(t('cart_total') || 'Total') + '</span><span>' + formatPrice(total) + '</span></div>',
    '    </div>',

    '    <form class="checkout-form" id="checkout-form">',

    '      <h2>' + escHtml(t('checkout_contact_h2')) + '</h2>',
    '      <div class="form-group"><label>' + escHtml(t('checkout_email_label')) + '</label><input type="email" required placeholder="' + escHtml(t('contact_email_placeholder')) + '"></div>',

    '      <h2>' + escHtml(t('checkout_shipping_h2')) + '</h2>',
    '      <div class="form-group"><label>' + escHtml(t('checkout_name_label')) + '</label><input type="text" required placeholder="Your Name"></div>',
    '      <div class="form-group"><label>' + escHtml(t('checkout_address_label')) + '</label><input type="text" required placeholder="Street address"></div>',
    '      <div class="checkout-row">',
    '        <div class="form-group"><label>' + escHtml(t('checkout_city_label')) + '</label><input type="text" required placeholder="City"></div>',
    '        <div class="form-group"><label>' + escHtml(t('checkout_postal_label')) + '</label><input type="text" required placeholder="10000"></div>',
    '      </div>',
    '      <div class="form-group"><label>' + escHtml(t('checkout_country_label')) + '</label><input type="text" required placeholder="' + escHtml(t('checkout_country_placeholder')) + '"></div>',

    '      <h2>' + escHtml(t('checkout_payment_h2')) + '</h2>',
    '      <p style="font-size:13px;color:#888;font-weight:300;padding:8px 0">' + t('checkout_payment_note') + '</p>',

    '      <div class="form-submit" style="margin-top:16px">',
    '        <button type="submit" class="btn btn--large btn--full">' + escHtml(t('checkout_btn')) + '</button>',
    '      </div>',
    '    </form>',

    '  </div>',
    footerHtml(),
    '</div>'
  ].join('\n');

  document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    SiccCart.clear();
    document.querySelector('.checkout-inner').innerHTML = [
      '<div style="text-align:center;padding:80px 0">',
      '  <h1 style="font-size:48px;font-weight:900;letter-spacing:-0.03em;margin-bottom:16px">' + escHtml(t('checkout_success_h1')) + '</h1>',
      '  <p style="font-size:16px;font-weight:300;color:#666;margin-bottom:32px">' + escHtml(t('checkout_success_p')) + '</p>',
      '  <a href="#/" class="btn">' + escHtml(t('checkout_success_btn')) + '</a>',
      '</div>'
    ].join('');
  });
}
