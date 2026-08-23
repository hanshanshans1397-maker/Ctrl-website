import { useEffect } from 'react';

/**
 * Infinite CSS animations (tickers, SVG illustrations, hero glow) keep the
 * main thread / compositor busy even when scrolled out of view. This pauses
 * them via the `.anim-idle` class whenever their container leaves the viewport.
 */
const ANIMATED_CONTAINERS = [
  '.ticker-wrap',
  '.ticker-inner',
  '.topics-track',
  '.partner-track',
  '.aktuality-info',
  '.about-structure',
  '.join-partnership',
  '.apply-people',
  '#hero',
  '.page-hero.bg-dark',
].join(', ');

export function usePauseOffscreenAnimations(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll(ANIMATED_CONTAINERS);
    if (!els.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('anim-idle', !entry.isIntersecting);
        });
      },
      // Small margin so animations resume just before they scroll into view.
      { rootMargin: '96px 0px' },
    );

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      els.forEach((el) => el.classList.remove('anim-idle'));
    };
  }, [pathname]);
}
