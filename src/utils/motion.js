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

/** iPad/tablet even with a mouse/trackpad — hover becomes "hover" but touch remains. */
export function isTouchDevice() {
  return (navigator.maxTouchPoints ?? 0) > 1;
}

export function isLowEndDevice() {
  if (navigator.connection?.saveData) return true;

  const cores = navigator.hardwareConcurrency;
  const mem = navigator.deviceMemory;

  // Avoid flagging typical 4-core desktops — they can handle premium motion.
  // Only treat clearly constrained devices as low-end.
  if (cores && cores <= 2) return true;
  if (mem && mem <= 2) return true;
  if (cores && cores <= 4 && mem && mem <= 4) return true;

  return false;
}

/** Lighter animations for touch, mobile, or low-end hardware (not accessibility reduced-motion). */
export function shouldUseLiteMotion() {
  if (prefersReducedMotion()) return true;
  return isMobileViewport() || isCoarsePointer() || isTouchDevice() || isLowEndDevice();
}

/**
 * Scroll-linked movement (rotate / drift) is the marketing-page motion.
 * Run it on any desktop-width screen, including touch laptops — lite-motion
 * used to skip GSAP entirely there and left only CSS fades.
 */
export function shouldUseScrollMotion() {
  if (prefersReducedMotion()) return false;
  return !isMobileViewport();
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
  '.section-head, .what-card, .number-card, .photo-strip > *, .board-grid > *, .join-grid > *, .join-criterion, .offer-card, .for-card, .val-grid > *, .sep-stack > .rev, .perk-card';
