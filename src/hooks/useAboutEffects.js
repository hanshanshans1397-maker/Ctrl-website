import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, shouldUseScrollMotion, EASE_PREMIUM } from '../utils/motion';
import { addScrambleTween } from '../utils/scramble';

gsap.registerPlugin(ScrollTrigger);

function literacyMotion() {
  const chart = document.querySelector('.disinfo-chart');
  if (chart) {
    gsap.fromTo(
      chart,
      { clipPath: 'inset(0 92% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.05,
        ease: EASE_PREMIUM,
        clearProps: 'clipPath',
        scrollTrigger: { trigger: chart, start: 'top 82%', once: true },
      },
    );
  }

  const feed = document.querySelector('.algo-feed__shell');
  if (feed) {
    gsap.fromTo(
      feed,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0%)',
        duration: 0.95,
        ease: EASE_PREMIUM,
        clearProps: 'clipPath',
        scrollTrigger: { trigger: feed, start: 'top 84%', once: true },
      },
    );
  }
}

function splitScrubWords(root) {
  if (root.dataset.split) return;
  root.dataset.split = '1';
  const targets = root.querySelectorAll(':scope > span, :scope > p');
  const nodes = targets.length ? targets : [root];
  nodes.forEach((node) => {
    const words = node.textContent.trim().split(/\s+/);
    node.innerHTML = words.map((w) => `<span class="q-word">${w}</span>`).join(' ');
  });
}

export function useAboutEffects() {
  useEffect(() => {
    if (prefersReducedMotion() || !shouldUseScrollMotion()) return undefined;

    const ctx = gsap.context(() => {
      document.querySelectorAll('[data-scrub-words]').forEach((root) => {
        splitScrubWords(root);
        const words = root.querySelectorAll('.q-word');
        if (!words.length) return;
        gsap.fromTo(
          words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.08,
            scrollTrigger: {
              trigger: root,
              start: 'top 78%',
              end: 'top 28%',
              scrub: 0.4,
            },
          },
        );
      });

      document.querySelectorAll('[data-scramble-role]').forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        });
        addScrambleTween(tl, el, 0, { duration: 0.8 });
      });

      literacyMotion();
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);
}
