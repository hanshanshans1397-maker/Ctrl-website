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

    const bindings = [];
    const bind = () => {
      bindings.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      bindings.length = 0;

      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        const onEnter = () => dot.classList.add('big');
        const onLeave = () => dot.classList.remove('big');
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        bindings.push({ el, onEnter, onLeave });
      });
    };

    bind();
    const t = window.setTimeout(bind, 100);
    return () => {
      window.clearTimeout(t);
      bindings.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      dot.classList.remove('big');
    };
  });

  return (
    <div id="cur">
      <div className="cur-dot" ref={dotRef} />
    </div>
  );
}
