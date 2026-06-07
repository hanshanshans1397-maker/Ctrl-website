import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export function PageTransition({ children }) {
  const el = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!el.current) return;
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.52, ease: 'power3.out', clearProps: 'all' },
    );
  }, [pathname]);

  return <div ref={el}>{children}</div>;
}
