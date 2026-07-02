import { useEffect } from 'react';
import gsap from 'gsap';
import { EASE_PREMIUM, prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

export function usePageHeroEntrance({ splitText = false } = {}) {
  useEffect(() => {
    const meta = document.getElementById('heroMeta');
    const title = document.getElementById('heroTitle');
    const bottom = document.getElementById('heroBottom');
    const splitEls = document.querySelectorAll('.split-text');

    if (prefersReducedMotion()) {
      if (meta) {
        meta.style.opacity = '1';
        meta.style.transform = 'none';
      }
      if (title) {
        title.style.opacity = '1';
        title.style.transform = 'none';
      }
      if (bottom) {
        bottom.style.opacity = '1';
        bottom.style.transform = 'none';
      }
      splitEls.forEach((el) => {
        el.classList.add('in');
        el.querySelectorAll('.word span').forEach((span) => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
      });
      return undefined;
    }

    const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
    const lite = shouldUseLiteMotion();
    const heroParts = [meta, title, bottom].filter(Boolean);

    if (lite) {
      if (splitText && splitEls.length) {
        splitEls.forEach((el) => el.classList.add('in'));
      }
      tl.fromTo(heroParts, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 }, 0.05);
      return () => tl.kill();
    }

    if (meta) {
      tl.fromTo(meta, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65 }, 0.1);
    }

    if (splitText && splitEls.length) {
      splitEls.forEach((el) => el.classList.add('in'));
      const words = document.querySelectorAll('.split-text .word span');
      tl.fromTo(
        words,
        { y: '110%', opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.09 },
        0.15,
      );
    } else if (title) {
      tl.fromTo(title, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.85 }, 0.18);
    }

    if (bottom) {
      tl.fromTo(
        bottom,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75 },
        splitText ? 0.35 : 0.32,
      );
    }

    return () => tl.kill();
  }, [splitText]);
}
