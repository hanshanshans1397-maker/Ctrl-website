import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EASE_PREMIUM, prefersReducedMotion, shouldUseLiteMotion } from '../utils/motion';
import { addScrambleTween } from '../utils/scramble';

gsap.registerPlugin(ScrollTrigger);

function splitQuoteWords(quote) {
  if (quote.dataset.split) return;
  quote.dataset.split = '1';
  quote.querySelectorAll(':scope > span').forEach((langSpan) => {
    const words = langSpan.textContent.trim().split(/\s+/);
    langSpan.innerHTML = words.map((w) => `<span class="q-word">${w}</span>`).join(' ');
  });
}

function showHeroImmediately() {
  document
    .querySelectorAll(
      '.hero-title .word span, .hero-meta, .hero-sub, .hero-ctas, #hero .hero-mobile-head, #hero .hero-mobile-body',
    )
    .forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
}

export function useHomeEffects() {
  useLayoutEffect(() => {
    // On lite devices, force the hero visible before paint — never pre-hide
    // wrappers (a failed/delayed entrance tween used to leave a blank hero).
    if (shouldUseLiteMotion()) {
      showHeroImmediately();
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || shouldUseLiteMotion()) {
      showHeroImmediately();
      return undefined;
    }

    const tl = gsap.timeline({
      defaults: { ease: EASE_PREMIUM },
      // Never leave the title clipped at translateY(110%) if the tween is
      // interrupted (Safari / React Strict Mode / tab backgrounding).
      onInterrupt: showHeroImmediately,
    });
    const words = document.querySelectorAll('.hero-title .word span');

    tl.fromTo(words, { y: '110%', opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, stagger: 0.11 }, 0.15);
    tl.to('.hero-meta', { opacity: 1, duration: 0.6 }, 0.2);
    // "BRNO · 2026" decodes from random glyphs — on-brand terminal feel.
    const metaSpan = document.querySelector('.hero-meta span');
    if (metaSpan) addScrambleTween(tl, metaSpan, 0.3, { duration: 1 });
    tl.fromTo('.hero-sub, .hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.28);

    return () => {
      tl.kill();
      showHeroImmediately();
    };
  }, []);

  // Scroll-driven motion (desktop / capable devices only): hero depth,
  // word-by-word quote reveal, photo parallax, velocity-reactive ticker.
  useEffect(() => {
    if (prefersReducedMotion() || shouldUseLiteMotion()) return undefined;

    const cleanups = [];

    const ctx = gsap.context(() => {
      // 1) Hero content drifts down slightly and dims as it scrolls away,
      //    creating depth against the sections sliding over it.
      const heroBody = document.querySelector('#hero .hero-mobile-body');
      if (heroBody) {
        gsap.to(heroBody, {
          yPercent: 16,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      // 2) Founder quote: words brighten one by one as the reader scrolls.
      const quote = document.querySelector('#why blockquote[data-scrub-words]');
      if (quote) {
        splitQuoteWords(quote);
        const words = quote.querySelectorAll('.q-word');
        if (words.length) {
          gsap.fromTo(
            words,
            { opacity: 0.15 },
            {
              opacity: 1,
              duration: 1,
              stagger: 0.12,
              ease: 'none',
              scrollTrigger: { trigger: '#why', start: 'top 78%', end: 'top 22%', scrub: 0.4 },
            },
          );
        }
      }

      // 3) Gentle parallax inside the photo strip cells.
      document.querySelectorAll('.photo-strip .strip-img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      // 4) Join CTA heading rises character by character.
      const joinHeadings = document.querySelectorAll('#join h2');
      joinHeadings.forEach((h2) => {
        if (!h2.dataset.chars) {
          h2.dataset.chars = '1';
          const text = h2.textContent;
          h2.setAttribute('aria-label', text);
          h2.innerHTML = [...text]
            .map((c) => (c === ' ' ? ' ' : `<span class="join-char" aria-hidden="true">${c}</span>`))
            .join('');
        }
        h2.classList.add('anim-gsap');
      });
      const joinChars = document.querySelectorAll('#join h2 .join-char');
      if (joinChars.length) {
        gsap.set(joinHeadings, { opacity: 1, y: 0 });
        gsap.fromTo(
          joinChars,
          { yPercent: 115, rotate: 6, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.024,
            ease: EASE_PREMIUM,
            scrollTrigger: { trigger: '#join', start: 'top 74%', once: true },
          },
        );
      }

      // 5) Spotlight follows the cursor over the "what" cards.
      document.querySelectorAll('.what-card').forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        };
        card.addEventListener('pointermove', onMove);
        cleanups.push(() => card.removeEventListener('pointermove', onMove));
      });

      // 6) Ticker speeds up with scroll velocity, then settles back.
      const tickerWrap = document.getElementById('tickerWrap');
      if (tickerWrap) {
        tickerWrap.style.animation = 'none';
        const marquee = gsap.to(tickerWrap, { xPercent: -50, duration: 32, ease: 'none', repeat: -1 });

        let targetSpeed = 1;
        ScrollTrigger.create({
          onUpdate: (self) => {
            const boost = Math.min(Math.abs(self.getVelocity()) / 800, 3);
            targetSpeed = Math.max(targetSpeed, 1 + boost);
          },
        });

        // Pause the marquee entirely while the ticker is off-screen.
        ScrollTrigger.create({
          trigger: tickerWrap.parentElement || tickerWrap,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => (self.isActive ? marquee.play() : marquee.pause()),
        });

        const easeSpeed = () => {
          targetSpeed += (1 - targetSpeed) * 0.05;
          marquee.timeScale(targetSpeed);
        };
        gsap.ticker.add(easeSpeed);
        cleanups.push(() => {
          gsap.ticker.remove(easeSpeed);
          tickerWrap.style.animation = '';
        });
      }
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);
}
