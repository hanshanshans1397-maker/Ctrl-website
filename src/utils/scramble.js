const CHARS = '#/\\<>[]{}=+*_0123456789';

/**
 * Decode/scramble text effect: characters resolve left-to-right from random
 * glyphs to the original text. Added into an existing GSAP timeline.
 */
export function addScrambleTween(tl, el, position, { duration = 0.7 } = {}) {
  const original = el.dataset.scrambleText ?? (el.dataset.scrambleText = el.textContent);
  if (!original.trim()) return;

  const proxy = { p: 0 };
  tl.to(
    proxy,
    {
      p: 1,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        const n = original.length;
        const reveal = Math.round(proxy.p * n);
        let out = original.slice(0, reveal);
        for (let i = reveal; i < n; i += 1) {
          const ch = original[i];
          out += /\s/.test(ch) ? ch : CHARS[(Math.random() * CHARS.length) | 0];
        }
        el.textContent = out;
      },
      onComplete: () => {
        el.textContent = original;
      },
    },
    position,
  );
}
