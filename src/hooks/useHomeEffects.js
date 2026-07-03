import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EASE_PREMIUM, prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

function showHeroImmediately() {
  document.querySelectorAll('.hero-title .word span, .hero-meta, .hero-sub, .hero-ctas').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

export function useHomeEffects() {
  useLayoutEffect(() => {
    if (shouldUseLiteMotion()) {
      showHeroImmediately();
      if (!prefersReducedMotion()) {
        // Hidden before first paint; the entrance tween below reveals them.
        gsap.set('#hero .hero-mobile-head, #hero .hero-mobile-body', { opacity: 0 });
      }
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      showHeroImmediately();
      return undefined;
    }

    if (shouldUseLiteMotion()) {
      // Lightweight entrance for mobile/low-end: animate the two hero
      // wrappers (their children are force-shown by the lite-motion CSS).
      const parts = document.querySelectorAll('#hero .hero-mobile-head, #hero .hero-mobile-body');
      if (!parts.length) return undefined;
      const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
      tl.fromTo(
        parts,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, clearProps: 'opacity,transform' },
        0.05,
      );
      return () => tl.kill();
    }

    const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
    const words = document.querySelectorAll('.hero-title .word span');

    tl.fromTo(words, { y: '110%', opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, stagger: 0.11 }, 0.15);
    tl.to('.hero-meta', { opacity: 1, duration: 0.6 }, 0.2);
    tl.fromTo('.hero-sub, .hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.28);

    return () => tl.kill();
  }, []);

}
