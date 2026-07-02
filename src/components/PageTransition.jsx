import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { EASE_PREMIUM, prefersReducedMotion } from '../utils/motion';

export function PageTransition({ children }) {
  const el = useRef(null);
  const overlayRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const node = el.current;
    const overlay = overlayRef.current;
    if (!node) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(node, { opacity: 1, y: 0, filter: 'none' });
      if (overlay) gsap.set(overlay, { opacity: 0 });
      return undefined;
    }

    const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });

    if (overlay) {
      tl.fromTo(overlay, { opacity: 0.35 }, { opacity: 0, duration: 0.45 }, 0);
    }

    tl.fromTo(
      node,
      { opacity: 0, y: 20, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.62, clearProps: 'filter' },
      0.04,
    );

    return () => tl.kill();
  }, [pathname]);

  return (
    <div className="page-transition-wrap relative">
      <div
        ref={overlayRef}
        className="page-transition-overlay pointer-events-none fixed inset-0 z-[90] bg-bg"
        aria-hidden="true"
      />
      <div ref={el}>{children}</div>
    </div>
  );
}
