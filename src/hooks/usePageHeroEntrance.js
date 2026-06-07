import { useEffect } from 'react';

export function usePageHeroEntrance({ splitText = false } = {}) {
  useEffect(() => {
    const timers = [];

    timers.push(
      window.setTimeout(() => {
        const meta = document.getElementById('heroMeta');
        if (!meta) return;
        meta.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        meta.style.opacity = '1';
        meta.style.transform = 'none';
      }, 80),
    );

    if (splitText) {
      timers.push(
        window.setTimeout(() => {
          document.querySelectorAll('.split-text').forEach((el) => {
            el.classList.add('in');
            el.querySelectorAll('.word span').forEach((span, i) => {
              span.style.transitionDelay = `${0.05 + i * 0.08}s`;
            });
          });
        }, 150),
      );
    } else {
      timers.push(
        window.setTimeout(() => {
          const title = document.getElementById('heroTitle');
          if (!title) return;
          title.style.transition = 'opacity 0.6s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)';
          title.style.opacity = '1';
          title.style.transform = 'none';
        }, 150),
      );
    }

    timers.push(
      window.setTimeout(() => {
        const bottom = document.getElementById('heroBottom');
        if (!bottom) return;
        bottom.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)';
        bottom.style.opacity = '1';
        bottom.style.transform = 'none';
      }, splitText ? 250 : 280),
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [splitText]);
}
