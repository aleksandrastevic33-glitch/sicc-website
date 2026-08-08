/* ─── Cart ───────────────────────────────────────────────────
   State persisted to localStorage. Sidebar open/close.
   ─────────────────────────────────────────────────────────── */

var SiccCart = (function() {

  var KEY = 'sicc_cart';
  var items = [];

  var sidebar    = null;
  var overlay    = null;
  var cartBtn    = null;
  var closeBtn   = null;
  var itemsEl    = null;
  var footerEl   = null;
  var totalEl    = null;
  var countEl    = null;
  var isOpen     = false;

  /* ── Init ─────────────────────────────────── */
  function init() {
    sidebar  = document.getElementById('cart-sidebar');
    overlay  = document.getElementById('cart-overlay');
    cartBtn  = document.getElementById('cart-btn');
    closeBtn = document.getElementById('cart-close');
    itemsEl  = document.getElementById('cart-items');
    footerEl = document.getElementById('cart-footer');
    totalEl  = document.getElementById('cart-total');
    countEl  = document.getElementById('cart-count');

    load();

    cartBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) close();
    });

    render();
  }

  /* ── Persistence ─────────────────────────── */
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      items = raw ? JSON.parse(raw) : [];
    } catch(e) {
      items = [];
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch(e) {}
  }

  /* ── Public API ──────────────────────────── */
  function addItem(product) {
    var existing = items.find(function(i) { return i.id === product.id; });
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({
        id:    product.id,
        name:  product.name,
        price: product.price,
        image: product.images && product.images[0] ? product.images[0] : '',
        qty:   1
      });
    }
    save();
    render();
    open();
  }

  function removeItem(id) {
    items = items.filter(function(i) { return i.id !== id; });
    save();
    render();
  }

  function getCount() {
    return items.reduce(function(sum, i) { return sum + i.qty; }, 0);
  }

  function getTotal() {
    return items.reduce(function(sum, i) { return sum + i.price * i.qty; }, 0);
  }

  function getItems() { return items.slice(); }

  function clear() {
    items = [];
    save();
    render();
  }

  /* ── Render ───────────────────────────────── */
  function render() {
    /* Count badge */
    var count = getCount();
    countEl.textContent = count;
    countEl.hidden = count === 0;

    /* Items */
    if (items.length === 0) {
      var tFn = (typeof t === 'function') ? t : function(k) { return k; };
      itemsEl.innerHTML = [
        '<div class="cart-empty-msg">',
        '  <strong>' + tFn('cart_empty') + '</strong>',
        '  ' + tFn('cart_empty_sub'),
        '  <br><a href="#/shop">' + tFn('cart_fill') + '</a>',
        '</div>'
      ].join('');
      footerEl.hidden = true;
      return;
    }

    footerEl.hidden = false;
    totalEl.textContent = formatPrice(getTotal());

    var html = items.map(function(item) {
      return [
        '<div class="cart-item">',
        '  <div class="img-placeholder" style="min-height:64px;width:64px">',
        '    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">',
        '      <circle cx="10" cy="10" r="8" stroke="#ccc" stroke-width="1.5"/>',
        '    </svg>',
        '  </div>',
        '  <div>',
        '    <div class="cart-item-name">' + escHtml(item.name) + '</div>',
        '    <div class="cart-item-price">' + formatPrice(item.price) + (item.qty > 1 ? ' × ' + item.qty : '') + '</div>',
        '  </div>',
        '  <button class="cart-item-remove" data-id="' + escHtml(item.id) + '" aria-label="Remove ' + escHtml(item.name) + '">×</button>',
        '</div>'
      ].join('');
    }).join('');

    itemsEl.innerHTML = html;

    itemsEl.querySelectorAll('.cart-item-remove').forEach(function(btn) {
      btn.addEventListener('click', function() {
        removeItem(btn.dataset.id);
      });
    });
  }

  /* ── Open / Close ─────────────────────────── */
  function open() {
    isOpen = true;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    isOpen = false;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ── Helpers ──────────────────────────────── */
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    init:       init,
    addItem:    addItem,
    removeItem: removeItem,
    getCount:   getCount,
    getTotal:   getTotal,
    getItems:   getItems,
    clear:      clear,
    open:       open,
    close:      close,
    render:     render   /* exposed for language refresh */
  };

})();
