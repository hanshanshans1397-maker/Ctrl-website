import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    window.scrollTo(0, 0);
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
      if (!cancelled) window.scrollTo(0, 0);
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
}

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.rev').forEach((el) => io.observe(el));
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

export function useTickerClone() {
  const { pathname } = useLocation();

  useEffect(() => {
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
