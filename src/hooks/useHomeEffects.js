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
    }
  }, []);

  useEffect(() => {
    if (shouldUseLiteMotion()) return undefined;

    const heroEls = document.querySelectorAll('.hero-title .word span, .hero-meta, .hero-sub, .hero-ctas');

    if (prefersReducedMotion()) {
      showHeroImmediately();
      return undefined;
    }

    const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
    const words = document.querySelectorAll('.hero-title .word span');

    tl.fromTo(words, { y: '110%', opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, stagger: 0.11 }, 0.15);
    tl.to('.hero-meta', { opacity: 1, duration: 0.6 }, 0.2);
    tl.fromTo('.hero-sub, .hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.28);

    return () => tl.kill();
  }, []);

}
