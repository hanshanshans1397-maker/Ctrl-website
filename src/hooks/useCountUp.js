import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';

function isInViewport(el, ratio = 0.15) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  return visibleHeight >= rect.height * ratio || (rect.top < vh * 0.85 && rect.bottom > 0);
}

export function useCountUp(target, { duration = 1800 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    startedRef.current = false;
    setValue(0);

    const el = ref.current;
    if (!el || target == null) return undefined;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (prefersReducedMotion() || shouldUseLiteMotion()) {
        setValue(target);
        return;
      }

      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - (1 - p) ** 3;
        setValue(Math.round(ease * target));
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const tryStart = () => {
      if (startedRef.current || !ref.current) return;
      if (isInViewport(ref.current)) run();
    };

    tryStart();

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: [0, 0.1, 0.25, 0.4], rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);

    const onScroll = () => tryStart();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    const fallback = window.setTimeout(tryStart, 2000);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(fallback);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return { ref, value };
}
