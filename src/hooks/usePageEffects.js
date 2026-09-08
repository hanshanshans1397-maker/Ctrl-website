import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollPageToTop } from './useLenis';
import { GSAP_REVEAL, prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

function isModifiedClick(event) {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function getChromeNavLink(event) {
  return event.target.closest('#nav a[href], footer a[href], [data-mobile-menu] a[href]');
}

function getSamePageInternalUrl(link) {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return null;
  }
  if (/^https?:/i.test(href) || href.startsWith('//')) return null;

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    if (url.hash) return null;
    if (normalizePath(url.pathname) !== normalizePath(window.location.pathname)) return null;
    return url;
  } catch {
    return null;
  }
}

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  // Before child page useEffects (e.g. GSAP pin on /workshops) so ScrollTrigger
  // is not initialized at the previous route's scroll offset.
  useLayoutEffect(() => {
    if (hash) return;

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    ScrollTrigger.clearScrollMemory();
    scrollPageToTop();
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return undefined;
      }
    }

    let cancelled = false;
    const scrollToTop = () => {
      if (!cancelled) scrollPageToTop();
    };

    scrollToTop();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.clearScrollMemory();
      scrollToTop();
      ScrollTrigger.refresh();
      requestAnimationFrame(scrollToTop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, [pathname, hash]);

  // Same-route navbar/footer clicks do not change location, so the effects
  // above never run — scroll back to the top of the already-loaded page.
  useEffect(() => {
    const onClick = (event) => {
      if (isModifiedClick(event)) return;
      const link = getChromeNavLink(event);
      if (!link || !getSamePageInternalUrl(link)) return;

      window.setTimeout(() => {
        scrollPageToTop({ immediate: prefersReducedMotion() });
      }, 0);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

function isGsapContentColumn(el) {
  return el.classList.contains('rev') && el.querySelector(':scope > .section-head');
}

function matchesGsapReveal(el) {
  return GSAP_REVEAL.split(',').some((sel) => el.matches(sel.trim()));
}

function shouldSkipReveal(el) {
  if (prefersReducedMotion()) return true;

  if (shouldUseLiteMotion()) {
    // GSAP timelines are disabled on lite devices, so the IO-driven CSS
    // reveal handles everything except hero heads (animated by the hero
    // entrance timeline).
    const head = el.closest('.section-head');
    if (head?.querySelector('.page-title')) return true;
    return false;
  }

  if (matchesGsapReveal(el)) return true;
  if (el.classList.contains('section-head')) return true;
  if (isGsapContentColumn(el)) return true;
  if (el.closest('.section-head') && !el.classList.contains('section-head')) {
    const head = el.closest('.section-head');
    if (head?.querySelector('.section-title, .sec-title, .page-title')) return true;
  }
  return false;
}

export function useScrollReveal(deps = []) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document.querySelectorAll('.rev').forEach((el) => el.classList.add('in'));
      return undefined;
    }

    const rootMargin = shouldUseLiteMotion() ? '0px 0px -20px 0px' : '0px 0px -40px 0px';

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            e.target.querySelectorAll('.rev:not(.anim-gsap)').forEach((child) => {
              child.classList.add('in');
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin },
    );

    document.querySelectorAll('.rev').forEach((el) => {
      if (!shouldSkipReveal(el)) io.observe(el);
    });
    return () => io.disconnect();
  }, deps);
}

export function useNavSolid(navRef) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        setIsSolid(window.scrollY > 40);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [navRef]);

  return isSolid;
}

function cloneTickers() {
  document.querySelectorAll('.ticker-inner, .ticker-wrap').forEach((t) => {
    if (t.dataset.cloned) return;

    const parent = t.parentNode;
    if (parent) {
      [...parent.children]
        .filter(
          (el) =>
            el !== t &&
            (el.classList.contains('ticker-inner') || el.classList.contains('ticker-wrap')),
        )
        .forEach((el) => el.remove());
    }

    [...t.children].forEach((child) => t.appendChild(child.cloneNode(true)));
    t.dataset.cloned = '1';
  });
}

export function useTickerClone() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (shouldUseLiteMotion()) {
      const run = () => cloneTickers();
      if ('requestIdleCallback' in window) {
        const id = requestIdleCallback(run, { timeout: 1500 });
        return () => cancelIdleCallback(id);
      }
      const id = window.setTimeout(run, 300);
      return () => window.clearTimeout(id);
    }

    cloneTickers();
    return undefined;
  }, [pathname]);
}

export function useFormI18n(isEn) {
  useEffect(() => {
    document.querySelectorAll('[data-ph-cs]').forEach((el) => {
      el.placeholder = isEn ? el.getAttribute('data-ph-en') : el.getAttribute('data-ph-cs');
    });

    document.querySelectorAll('select[name="type"]').forEach((sel) => {
      sel.querySelectorAll('option').forEach((opt) => {
        if (opt.classList.contains('cs')) opt.hidden = isEn;
        if (opt.classList.contains('en')) opt.hidden = !isEn;
      });
      const emptyOpt = sel.querySelector('option[value=""]');
      if (emptyOpt) emptyOpt.textContent = isEn ? 'Select...' : 'Vyberte...';
    });
  }, [isEn]);
}
