import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const TILT_SELECTOR = '.what-card, .offer-card, .for-card, .val-card';
const TILT_DEG = 5;

/** Per-card hover lift (px) — mirrors what the CSS hover used to do, since
 * GSAP owns the card transform once tilt is active. */
function liftFor(card) {
  if (card.classList.contains('offer-card')) return -4;
  if (card.classList.contains('for-card')) return -3;
  return 0;
}

/**
 * Cards tilt gently in 3D toward the cursor. Desktop / fine pointer only;
 * quickTo keeps the motion interruptible without killing other tweens.
 */
export function useCardTilt(pathname) {
  useEffect(() => {
    if (prefersReducedMotion() || shouldUseLiteMotion()) return undefined;

    const cleanups = [];

    document.querySelectorAll(TILT_SELECTOR).forEach((card) => {
      const lift = liftFor(card);

      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, {
          rotationX: py * -TILT_DEG,
          rotationY: px * TILT_DEG,
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };
      const onEnter = () => {
        // Re-applied on every enter — the reveal's clearProps wipes it.
        gsap.set(card, { transformPerspective: 900 });
        if (lift) gsap.to(card, { y: lift, duration: 0.35, ease: 'power3.out', overwrite: 'auto' });
      };
      const onLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      card.addEventListener('pointerenter', onEnter);
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('pointerenter', onEnter);
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);
}

/** Thin accent line under the top edge that fills with reading progress. */
export function useScrollProgress(pathname) {
  useEffect(() => {
    if (prefersReducedMotion() || shouldUseLiteMotion()) return undefined;

    const bar = document.getElementById('scrollProgress');
    if (!bar) return undefined;

    const tween = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.4 },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(bar, { scaleX: 0 });
    };
  }, [pathname]);
}
