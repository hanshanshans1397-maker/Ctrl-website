import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageHeroEntrance } from './usePageHeroEntrance';

gsap.registerPlugin(ScrollTrigger);

export function useSummitEffects() {
  usePageHeroEntrance({ splitText: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.offer-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.offer-card', start: 'top 80%' },
        },
      );
    });

    return () => ctx.revert();
  }, []);
}
