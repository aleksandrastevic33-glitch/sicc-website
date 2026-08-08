/* ─── Navigation ────────────────────────────────────────────
   Handles: menu open/close, scroll effects, active link
   ─────────────────────────────────────────────────────────── */

var SiccNav = (function() {

  var menuOverlay = null;
  var menuBtn = null;
  var menuClose = null;
  var siteNav = null;
  var menuLinks = null;
  var isOpen = false;

  function init() {
    menuOverlay = document.getElementById('menu-overlay');
    menuBtn     = document.getElementById('menu-btn');
    menuClose   = document.getElementById('menu-close');
    siteNav     = document.getElementById('site-nav');
    menuLinks   = document.querySelectorAll('.menu-link');

    menuBtn.addEventListener('click', open);
    menuClose.addEventListener('click', close);

    /* Close on backdrop click */
    menuOverlay.addEventListener('click', function(e) {
      if (e.target === menuOverlay) close();
    });

    /* Close on menu link click */
    menuLinks.forEach(function(link) {
      link.addEventListener('click', close);
    });

    /* Close on Escape */
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) close();
    });

    /* Scroll effect on nav */
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function open() {
    isOpen = true;
    menuOverlay.classList.add('open');
    menuOverlay.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    /* Stagger menu items */
    var items = menuOverlay.querySelectorAll('.menu-link');
    items.forEach(function(item, i) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.4s ' + (0.1 + i * 0.06) + 's ease, transform 0.4s ' + (0.1 + i * 0.06) + 's ease';
      setTimeout(function() {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 10);
    });
  }

  function close() {
    isOpen = false;
    menuOverlay.classList.remove('open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function onScroll() {
    if (window.scrollY > 10) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }

  /* Call after route changes to highlight active link */
  function setActiveLink(hash) {
    if (!menuLinks) return;
    menuLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      link.classList.toggle('active', href === hash || (hash === '#/' && href === '#/'));
    });
  }

  return { init: init, close: close, setActiveLink: setActiveLink };

})();
