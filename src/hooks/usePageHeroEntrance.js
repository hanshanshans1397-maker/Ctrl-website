import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EASE_PREMIUM, prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

function showPageHeroImmediately() {
  ['heroMeta', 'heroTitle', 'heroBottom'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  document.querySelectorAll('.split-text').forEach((el) => {
    el.classList.add('in');
    el.querySelectorAll('.word span').forEach((span) => {
      span.style.transform = 'none';
      span.style.opacity = '1';
    });
  });

  const mobileHead = document.querySelector('.hero-mobile-head');
  if (mobileHead) {
    mobileHead.style.opacity = '1';
    mobileHead.style.transform = 'none';
  }
}

export function usePageHeroEntrance({ splitText = false } = {}) {
  useLayoutEffect(() => {
    if (shouldUseLiteMotion() || prefersReducedMotion()) {
      showPageHeroImmediately();
    }
  }, [splitText]);

  useEffect(() => {
    if (prefersReducedMotion() || shouldUseLiteMotion()) {
      showPageHeroImmediately();
      return undefined;
    }

    const meta = document.getElementById('heroMeta');
    const title = document.getElementById('heroTitle');
    const bottom = document.getElementById('heroBottom');
    const splitEls = document.querySelectorAll('.split-text');

    const tl = gsap.timeline({
      defaults: { ease: EASE_PREMIUM },
      onInterrupt: showPageHeroImmediately,
    });

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

    return () => {
      tl.kill();
      showPageHeroImmediately();
    };
  }, [splitText]);
}
