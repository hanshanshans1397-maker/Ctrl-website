import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../context/LangContext';
import { usePageHeroEntrance } from './usePageHeroEntrance';

gsap.registerPlugin(ScrollTrigger);

const NARRATIVE_LINES = [
  { cs: 'Algoritmy <em>formují názory.</em>', en: 'Algorithms <em>shape opinions.</em>' },
  { cs: 'Informace se šíří <span>okamžitě.</span>', en: 'Information spreads <span>instantly.</span>' },
  { cs: 'Deepfakes jsou <em>nerozeznatelné od reality.</em>', en: 'Deepfakes are <em>indistinguishable from reality.</em>' },
  { cs: 'Digitální gramotnost <span>už není volitelná.</span>', en: 'Digital literacy <span>is no longer optional.</span>' },
  { cs: '<span>Vzdělávání musí</span> reagovat.', en: '<span>Education must</span> evolve.' },
];

export function useWorkshopsEffects() {
  const { isEn } = useLang();
  usePageHeroEntrance({ splitText: false });

  useEffect(() => {
    const targets = [
      { id: 'c-min', val: 180 },
      { id: 'c-top', val: 8 },
      { id: 'c-age', val: 20 },
    ];
    const first = document.getElementById('c-min');
    if (!first) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          targets.forEach(({ id, val }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const dur = 1400;
            const start = Date.now();
            const tick = () => {
              const p = Math.min((Date.now() - start) / dur, 1);
              const ease = 1 - (1 - p) ** 3;
              el.textContent = Math.round(ease * val);
              if (p < 1) requestAnimationFrame(tick);
            };
            tick();
          });
          io.disconnect();
        });
      },
      { threshold: 0.3 },
    );

    io.observe(first.closest('.inner') || first);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const narrativeSection = document.getElementById('narrative');
    const narrativeSticky = document.getElementById('narrativeSticky');
    const textEl = document.getElementById('narrativeText');
    const scrollHint = document.getElementById('scrollHint');
    if (!narrativeSection || !narrativeSticky || !textEl) return undefined;

    let current = -1;
    let narrativeST = null;

    const isMobileHint = () => window.matchMedia('(max-width: 768px)').matches;

    const placeScrollHint = (show) => {
      if (!scrollHint) return;
      if (isMobileHint() && show) {
        if (scrollHint.parentElement !== document.body) document.body.appendChild(scrollHint);
        scrollHint.classList.add('is-portal');
      } else {
        if (scrollHint.parentElement !== narrativeSticky) narrativeSticky.appendChild(scrollHint);
        scrollHint.classList.remove('is-portal');
      }
    };

    const updateScrollHint = (idx) => {
      if (!scrollHint) return;
      const lineIdx = typeof idx === 'number' && idx >= 0 ? idx : (current >= 0 ? current : 0);
      const st = narrativeST;
      const active = st && (st.isActive || (st.progress > 0.01 && st.progress < 0.99));
      const show = active && lineIdx >= 0 && lineIdx < NARRATIVE_LINES.length - 1;
      narrativeSection.classList.toggle('is-pinned', !!active);
      scrollHint.classList.toggle('is-visible', show);
      placeScrollHint(show);
    };

    const viewportH = () => Math.round(window.visualViewport?.height ?? window.innerHeight);

    const setStickyHeight = () => {
      narrativeSticky.style.height = `${viewportH()}px`;
    };

    const setLine = (idx) => {
      if (idx === current || idx < 0 || idx >= NARRATIVE_LINES.length) return;
      current = idx;
      const line = NARRATIVE_LINES[idx];
      const html = isEn ? line.en : line.cs;
      textEl.innerHTML = `<span class="narrative-line"><span class="${isEn ? 'en' : 'cs'}">${html}</span></span>`;
      const inner = textEl.querySelector('.narrative-line > span');
      if (inner) {
        requestAnimationFrame(() => {
          inner.classList.add('is-in');
        });
      }
      updateScrollHint(idx);
    };

    setStickyHeight();
    setLine(0);

    narrativeST = ScrollTrigger.create({
      trigger: narrativeSection,
      start: 'top top',
      end: `+=${NARRATIVE_LINES.length * 100}%`,
      pin: narrativeSticky,
      scrub: 0.5,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const idx = Math.min(NARRATIVE_LINES.length - 1, Math.floor(self.progress * NARRATIVE_LINES.length));
        setLine(idx);
        updateScrollHint(idx);
      },
      onEnter: () => updateScrollHint(current),
      onLeave: () => updateScrollHint(-1),
      onEnterBack: () => updateScrollHint(current),
      onLeaveBack: () => updateScrollHint(-1),
    });

    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setStickyHeight();
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.visualViewport?.addEventListener('resize', onResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      narrativeST?.kill();
      window.removeEventListener('resize', onResize);
      window.visualViewport?.removeEventListener('resize', onResize);
      narrativeSection.classList.remove('is-pinned');
      if (scrollHint?.parentElement === document.body) {
        narrativeSticky.appendChild(scrollHint);
        scrollHint.classList.remove('is-portal', 'is-visible');
      }
    };
  }, [isEn]);
}
