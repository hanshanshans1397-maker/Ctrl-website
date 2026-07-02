import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { shouldUseLiteMotion } from '../utils/motion';

export function PageTransition({ children }) {
  const el = useRef(null);
  const hasMounted = useRef(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const node = el.current;
    if (!node) return undefined;

    gsap.set(node, { opacity: 1, y: 0, filter: 'none', clearProps: 'scale,transform' });

    if (shouldUseLiteMotion() || !hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    const tl = gsap.timeline();
    tl.fromTo(
      node,
      { opacity: 0.94, y: 8 },
      { opacity: 1, y: 0, duration: 0.34, ease: 'power2.out' },
    );

    return () => tl.kill();
  }, [pathname]);

  return (
    <div className="page-transition-wrap relative">
      <div ref={el} className="page-transition-content">
        {children}
      </div>
    </div>
  );
}
