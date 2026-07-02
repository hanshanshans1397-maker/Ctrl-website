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

  useEffect(() => {
    const counterTargets = [621, 1112, 9, 8];
    const counterIds = ['c1', 'c2', 'c3', 'c4'];
    const numSection = document.getElementById('numbers');
    if (!numSection) return undefined;

    const cIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counterIds.forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;
            const target = counterTargets[i];
            if (prefersReducedMotion() || shouldUseLiteMotion()) {
              el.textContent = String(target);
              return;
            }
            const dur = 1800;
            const start = Date.now();
            const tick = () => {
              const p = Math.min((Date.now() - start) / dur, 1);
              const ease = 1 - (1 - p) ** 3;
              el.textContent = Math.round(ease * target);
              if (p < 1) requestAnimationFrame(tick);
            };
            tick();
          });
          cIO.disconnect();
        });
      },
      { threshold: 0.3 },
    );

    cIO.observe(numSection);
    return () => cIO.disconnect();
  }, []);
}
