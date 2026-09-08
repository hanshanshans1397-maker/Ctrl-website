import { useEffect, useRef } from 'react';
import { useLang } from '../../context/LangContext';
import { prefersReducedMotion } from '../../utils/motion';

const SETS = 2;
const REPEATS = 4;
const SCROLL_TO_X = 0.65;

function Phrase({ cs, en }) {
  return (
    <span className="news-phrase">
      <span className="cs">{cs}</span>
      <span className="en">{en}</span>
      <span className="news-phrase-dot" aria-hidden="true" />
    </span>
  );
}

function PhraseSet({ phrases }) {
  return (
    <div className="news-phrase-set">
      {Array.from({ length: REPEATS }, (_, repeat) =>
        phrases.cs.map((cs, index) => (
          <Phrase key={`${repeat}-${index}`} cs={cs} en={phrases.en[index]} />
        )),
      )}
    </div>
  );
}

export function NewsPhraseMarquee({ phrases }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const { isEn } = useLang();
  const labelCs = phrases.cs.join(' ');
  const labelEn = phrases.en.join(' ');

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return undefined;

    if (prefersReducedMotion()) {
      wrap.classList.add('is-static');
      track.style.transform = '';
      return undefined;
    }

    wrap.classList.remove('is-static');

    let offset = 0;
    let lastY = window.scrollY;
    let inView = true;

    const loopWidth = () => track.scrollWidth / SETS;

    const applyX = () => {
      const width = loopWidth();
      if (width <= 0) return;
      let x = offset % width;
      if (x < 0) x += width;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!inView) {
        lastY = window.scrollY;
        return;
      }
      const y = window.scrollY;
      offset += (y - lastY) * SCROLL_TO_X;
      lastY = y;
      applyX();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        lastY = window.scrollY;
      },
      { rootMargin: '80px 0px' },
    );
    io.observe(wrap);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', applyX);
    applyX();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', applyX);
      track.style.transform = '';
    };
  }, [isEn, phrases]);

  return (
    <div className="news-phrase-marquee" ref={wrapRef}>
      <p className="sr-only">
        <span className="cs">{labelCs}</span>
        <span className="en">{labelEn}</span>
      </p>
      <div ref={trackRef} className="news-phrase-track" aria-hidden="true">
        {Array.from({ length: SETS }, (_, index) => (
          <PhraseSet key={index} phrases={phrases} />
        ))}
      </div>
    </div>
  );
}
