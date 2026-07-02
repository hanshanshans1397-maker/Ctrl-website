import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function scrollPageToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo(0, 0);
}

export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      stopInertiaOnNavigate: true,
    });

    lenisInstance = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      gsap.ticker.remove(onTick);
      document.removeEventListener('click', onAnchorClick);
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);
}
