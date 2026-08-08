/* ─── Sicc SPA Router ────────────────────────────────────────
   Hash-based routing. Works without a server for most features.
   Camera (try-on) requires HTTPS or localhost — use VS Code
   Live Server (right-click index.html → Open with Live Server).
   ─────────────────────────────────────────────────────────── */

(function() {

  /* ── Routes map ─────────────────────────── */
  var routes = {
    '#/'         : renderHome,
    '#/shop'     : renderShop,
    '#/about'    : renderAbout,
    '#/contact'  : renderContact,
    '#/checkout' : renderCheckout
  };

  /* ── Router ─────────────────────────────── */
  function route() {
    var hash = window.location.hash || '#/';
    if (hash === '#') hash = '#/';

    var app = document.getElementById('app');
    app.style.opacity = '0';
    app.style.transform = 'translateY(8px)';

    setTimeout(function() {
      /* Product detail route: #/product/:id */
      if (hash.indexOf('#/product/') === 0) {
        var productId = hash.slice('#/product/'.length);
        renderProduct(productId);
        SiccNav.setActiveLink('#/shop');
      } else {
        var renderer = routes[hash] || renderNotFound;
        renderer();
        SiccNav.setActiveLink(hash);
      }

      app.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      app.style.opacity    = '1';
      app.style.transform  = 'translateY(0)';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 180);
  }

  /* ── Expose router for i18n refresh ─────── */
  window.SiccRouter = { refresh: route };

  /* ── Init ───────────────────────────────── */
  function init() {
    SiccNav.init();
    SiccCart.init();
    SiccTryon.init();

    /* Sync static text to stored language */
    if (typeof updateStaticText === 'function') updateStaticText();

    window.addEventListener('hashchange', route);

    /* Set default hash if none */
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    } else {
      route();
    }
  }

  /* Boot */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
