import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { shouldUseLiteMotion } from '../utils/motion';

/**
 * Route transition: a dark curtain covers the swap (set before paint, so the
 * old→new switch is never visible) and sweeps upward to unveil the new page,
 * while the content settles up underneath it.
 */
export function PageTransition({ children }) {
  const el = useRef(null);
  const curtainRef = useRef(null);
  const hasMounted = useRef(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const node = el.current;
    const curtain = curtainRef.current;
    if (!node) return undefined;

    gsap.set(node, { opacity: 1, y: 0, filter: 'none', clearProps: 'scale,transform' });

    if (shouldUseLiteMotion() || !hasMounted.current) {
      hasMounted.current = true;
      if (curtain) gsap.set(curtain, { yPercent: -101, visibility: 'hidden' });
      return undefined;
    }

    const tl = gsap.timeline();

    if (curtain) {
      gsap.set(curtain, { yPercent: 0, visibility: 'visible' });
      tl.to(curtain, { yPercent: -101, duration: 0.7, ease: 'power3.inOut' }, 0.06);
      tl.set(curtain, { visibility: 'hidden' });
    }

    tl.fromTo(
      node,
      { opacity: 0.85, y: 26 },
      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
      curtain ? 0.22 : 0,
    );

    return () => {
      tl.kill();
      if (curtain) gsap.set(curtain, { yPercent: -101, visibility: 'hidden' });
      gsap.set(node, { opacity: 1, y: 0 });
    };
  }, [pathname]);

  return (
    <div className="page-transition-wrap relative">
      <div ref={curtainRef} className="page-curtain" aria-hidden="true" />
      <div ref={el} className="page-transition-content">
        {children}
      </div>
    </div>
  );
}
