(function() {
  'use strict';

  var LANG_KEY = 'ctrl_lang';

  function saveLang() {
    sessionStorage.setItem(LANG_KEY, document.body.classList.contains('EN') ? 'en' : 'cs');
  }

  function injectI18nStyles() {
    if (document.getElementById('ctrl-i18n')) return;
    var s = document.createElement('style');
    s.id = 'ctrl-i18n';
    s.textContent =
      '.ticker-item.en,.topics-tag.en{display:none!important}' +
      'body.EN .ticker-item.cs,body.EN .topics-tag.cs{display:none!important}' +
      'body.EN .ticker-item.en,body.EN .topics-tag.en{display:flex!important}';
    document.head.appendChild(s);
  }

  function applyFormI18n() {
    var isEn = document.body.classList.contains('EN');
    document.querySelectorAll('[data-ph-cs]').forEach(function(el) {
      el.placeholder = isEn ? el.getAttribute('data-ph-en') : el.getAttribute('data-ph-cs');
    });
    document.querySelectorAll('select[name="type"]').forEach(function(sel) {
      sel.querySelectorAll('option').forEach(function(opt) {
        if (opt.classList.contains('cs')) opt.hidden = isEn;
        if (opt.classList.contains('en')) opt.hidden = !isEn;
      });
      var emptyOpt = sel.querySelector('option[value=""]');
      if (emptyOpt) emptyOpt.textContent = isEn ? 'Select...' : 'Vyberte...';
    });
  }

  function restoreLang() {
    if (sessionStorage.getItem(LANG_KEY) === 'en') {
      document.body.classList.add('EN');
      var lb = document.getElementById('langBtn');
      var mlb = document.getElementById('mobileLangBtn');
      if (lb) lb.textContent = 'CS';
      if (mlb) mlb.textContent = 'CS';
      document.querySelectorAll('.en.rev').forEach(function(e) { e.classList.add('in'); });
    }
    applyFormI18n();
  }

  function bindLangExtras() {
    document.addEventListener('click', function(e) {
      if (e.target.id === 'langBtn' || e.target.id === 'mobileLangBtn') {
        setTimeout(applyFormI18n, 0);
      }
    });
  }

  function cleanPath(path) {
    path = path.replace(/\.html$/i, '');
    if (path === '' || path === '/') return '/';
    return path.replace(/\/$/, '');
  }

  function fileFromPath(path) {
    var p = cleanPath(path);
    if (p === '/') return 'index.html';
    return p.replace(/^\//, '') + '.html';
  }

  function isSamePage(p1, p2) {
    return cleanPath(p1) === cleanPath(p2);
  }

  function isRouterLink(link) {
    var href = link.getAttribute('href');
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      try {
        var url = new URL(href);
        return url.hostname === location.hostname && url.port === location.port;
      } catch(e) { return false; }
    }
    return true;
  }

  function execPageScripts(doc) {
    doc.querySelectorAll('script:not([src])').forEach(function(s) {
      var ns = document.createElement('script');
      ns.textContent = 'try{' + s.textContent + '}catch(scr_err){console.error("Page script:",scr_err)}';
      document.body.appendChild(ns);
    });
  }

  function updateHead(doc) {
    document.querySelectorAll('style').forEach(function(s) { s.remove(); });
    doc.querySelectorAll('style').forEach(function(s) {
      document.head.appendChild(s.cloneNode(true));
    });
    var oldDesc = document.querySelector('meta[name="description"]');
    var newDesc = doc.querySelector('meta[name="description"]');
    if (oldDesc) oldDesc.remove();
    if (newDesc) document.head.appendChild(newDesc.cloneNode(true));
  }

  function scrollToHash() {
    var hash = location.hash;
    if (hash) {
      setTimeout(function() {
        var el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }

  function killGSAP() {
    if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
      ScrollTrigger.getAll().forEach(function(st) { st.kill(); });
    }
  }

  var FINE_POINTER = '(hover: hover) and (pointer: fine)';
  var cursorMoveHandler = null;
  var cursorHoverBindings = [];

  function unbindCursor() {
    if (cursorMoveHandler) {
      document.removeEventListener('pointermove', cursorMoveHandler);
      cursorMoveHandler = null;
    }
    cursorHoverBindings.forEach(function(b) {
      b.el.removeEventListener('mouseenter', b.onEnter);
      b.el.removeEventListener('mouseleave', b.onLeave);
    });
    cursorHoverBindings = [];
    var dot = document.getElementById('curDot');
    if (dot) dot.classList.remove('big');
  }

  function initCursor() {
    unbindCursor();
    var dot = document.getElementById('curDot');
    if (!dot || !window.matchMedia || !window.matchMedia(FINE_POINTER).matches) return;

    cursorMoveHandler = function(e) {
      if (e.pointerType !== 'mouse') return;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };
    document.addEventListener('pointermove', cursorMoveHandler);

    document.querySelectorAll('a, button, .card-hover, .what-card, .number-card, .org-row').forEach(function(el) {
      var onEnter = function() { dot.classList.add('big'); };
      var onLeave = function() { dot.classList.remove('big'); };
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      cursorHoverBindings.push({ el: el, onEnter: onEnter, onLeave: onLeave });
    });
  }

  async function loadPage(path) {
    saveLang();
    killGSAP();
    var file = fileFromPath(path);

    try {
      var resp = await fetch(file);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      var html = await resp.text();
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      document.title = doc.title;
      updateHead(doc);

      document.body.className = doc.body.className;
      document.body.innerHTML = doc.body.innerHTML;

      injectI18nStyles();
      restoreLang();
      try { execPageScripts(doc); } catch(e) { console.error('Page scripts error:', e); }
      initCursor();

      if (location.hash) {
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
          setTimeout(function() {
            ScrollTrigger.refresh();
            scrollToHash();
          }, 150);
        } else {
          scrollToHash();
        }
      } else {
        scrollToTop();
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
          setTimeout(function() {
            ScrollTrigger.refresh();
            scrollToTop();
          }, 150);
        }
      }
    } catch (err) {
      console.error('Router:', err);
      window.location.href = file;
    }
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function initRouter() {
    injectI18nStyles();
    bindLangExtras();
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    var cur = cleanPath(location.pathname);
    if (location.pathname.endsWith('.html') && cur !== '/') {
      history.replaceState(null, '', cur);
    }
    restoreLang();
    initCursor();
    if (window.matchMedia) {
      window.matchMedia(FINE_POINTER).addEventListener('change', initCursor);
    }
    if (location.hash) {
      scrollToHash();
    } else {
      scrollToTop();
    }
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;
    if (!isRouterLink(link)) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (link.getAttribute('href').startsWith('#')) return;

    e.preventDefault();

    var target = cleanPath(link.pathname || link.getAttribute('href'));
    var current = cleanPath(location.pathname);

    if (isSamePage(target, current)) return;

    history.pushState(null, '', target);
    scrollToTop();
    loadPage(target);
  });

  window.addEventListener('popstate', function() {
    loadPage(cleanPath(location.pathname));
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }
})();
