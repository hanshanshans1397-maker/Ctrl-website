const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const MOBILE_VIEWPORT = '(max-width: 768px)';

export function prefersReducedMotion() {
  return window.matchMedia?.(REDUCED_MOTION)?.matches ?? false;
}

export function isMobileViewport() {
  return window.matchMedia?.(MOBILE_VIEWPORT)?.matches ?? false;
}

export function isCoarsePointer() {
  return window.matchMedia?.('(hover: none)').matches ?? false;
}

export function isLowEndDevice() {
  const cores = navigator.hardwareConcurrency;
  if (cores && cores <= 4) return true;

  const mem = navigator.deviceMemory;
  if (mem && mem <= 4) return true;

  return Boolean(navigator.connection?.saveData);
}

/** Lighter animations for touch, mobile, or low-end hardware (not accessibility reduced-motion). */
export function shouldUseLiteMotion() {
  if (prefersReducedMotion()) return true;
  return isMobileViewport() || isCoarsePointer() || isLowEndDevice();
}

export function shouldDisableSmoothScroll() {
  return shouldUseLiteMotion();
}

export function revealGsapElements() {
  document.querySelectorAll(GSAP_REVEAL).forEach((el) => el.classList.add('in'));
  document.querySelectorAll('.rev').forEach((el) => {
    if (el.querySelector(':scope > .section-head')) {
      el.classList.add('in');
    }
  });
  document
    .querySelectorAll('.section-head .section-label, .section-head .page-label, .section-head .sec-label')
    .forEach((el) => el.classList.add('is-visible'));
}

export function applyMotionBodyClass() {
  const reduced = prefersReducedMotion();
  const lite = shouldUseLiteMotion() && !reduced;

  document.body.classList.toggle('reduced-motion', reduced);
  document.body.classList.toggle('lite-motion', lite);
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
