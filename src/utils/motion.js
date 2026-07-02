const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion() {
  return window.matchMedia?.(REDUCED_MOTION)?.matches ?? false;
}

export function onReducedMotionChange(callback) {
  const mq = window.matchMedia?.(REDUCED_MOTION);
  if (!mq) return () => {};

  const handler = () => callback(mq.matches);
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
}

export const EASE_PREMIUM = 'power3.out';
export const EASE_SMOOTH = 'power2.inOut';

export const GSAP_REVEAL =
  '.section-head, .what-card, .number-card, .photo-strip > *, .board-grid > *, .join-grid > *, .join-criterion, .offer-card, .val-grid > *';
