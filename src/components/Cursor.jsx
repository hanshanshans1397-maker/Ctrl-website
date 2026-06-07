import { useEffect, useRef } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

export function Cursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || !window.matchMedia?.(FINE_POINTER).matches) return;

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || !window.matchMedia?.(FINE_POINTER).matches) return;

    const onEnter = () => dot.classList.add('big');
    const onLeave = () => dot.classList.remove('big');

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) onEnter();
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) onLeave();
    });

    return () => dot.classList.remove('big');
  }, []);

  return (
    <div id="cur">
      <div className="cur-dot" ref={dotRef} />
    </div>
  );
}
