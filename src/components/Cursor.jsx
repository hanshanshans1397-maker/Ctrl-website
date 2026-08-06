import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isTouchDevice, prefersReducedMotion } from '../utils/motion';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

export function Cursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    // iPad + trackpad reports fine pointer / hover, but custom cursor fights
    // system cursor and wastes work — skip on any touch-capable device.
    if (!dot || isTouchDevice() || !window.matchMedia?.(FINE_POINTER).matches || prefersReducedMotion()) {
      return undefined;
    }

    gsap.set(dot, { xPercent: -50, yPercent: -50, x: 0, y: 0 });

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      gsap.to(dot, { x: pos.current.x, y: pos.current.y, duration: 0.35, ease: 'power3.out', overwrite: true });
    };

    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || isTouchDevice() || !window.matchMedia?.(FINE_POINTER).matches || prefersReducedMotion()) {
      return undefined;
    }

    const onEnter = () => {
      dot.classList.add('big');
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power3.out' });
    };
    const onLeave = () => {
      dot.classList.remove('big');
      gsap.to(dot, { scale: 1, duration: 0.35, ease: 'power3.out' });
    };

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], .what-card, .number-card, .offer-card')) onEnter();
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], .what-card, .number-card, .offer-card')) onLeave();
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      dot.classList.remove('big');
    };
  }, []);

  return (
    <div id="cur">
      <div className="cur-dot" ref={dotRef} />
    </div>
  );
}
