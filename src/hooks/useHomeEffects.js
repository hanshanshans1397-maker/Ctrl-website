import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EASE_PREMIUM, prefersReducedMotion, shouldUseLiteMotion, shouldUseScrollMotion } from '../utils/motion';
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
      // Tailwind v4 uses the `translate` property (not only `transform`).
      // Clearing transform alone reverts to translate-y-[110%] and clips
      // "Europe" inside overflow:hidden — leaving only blue logo fragments.
      el.style.translate = 'none';
      el.style.transform = 'none';
      el.style.opacity = '1';
      gsap.set(el, { x: 0, y: 0, yPercent: 0, opacity: 1 });
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
    const logoWord = document.querySelector('.hero-title .word--logo span');
    const textWords = document.querySelectorAll('.hero-title .word:not(.word--logo) span');

    // Logo PNG sits in overflow:visible — use a softer rise so it can't clip.
    if (logoWord) {
      tl.fromTo(
        logoWord,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05 },
        0.15,
      );
    }
    if (textWords.length) {
      tl.fromTo(
        textWords,
        { y: '110%', opacity: 0 },
        { y: 0, opacity: 1, duration: 1.05, stagger: 0.11 },
        0.26,
      );
    }
    tl.to('.hero-meta', { opacity: 1, duration: 0.6 }, 0.2);
    // "BRNO · 2026" decodes from random glyphs — on-brand terminal feel.
    const metaSpan = document.querySelector('.hero-meta span');
    if (metaSpan) addScrambleTween(tl, metaSpan, 0.3, { duration: 1 });
    tl.fromTo('.hero-sub, .hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.28);

    // Hard fallback: never leave the logo/title stuck mid-clip on flaky GPUs.
    const failSafe = window.setTimeout(showHeroImmediately, 2200);

    return () => {
      window.clearTimeout(failSafe);
      tl.kill();
      showHeroImmediately();
    };
  }, []);

  // Scroll-driven motion (desktop / capable devices only): hero depth,
  // word-by-word quote reveal, photo parallax, velocity-reactive ticker.
  useEffect(() => {
    if (prefersReducedMotion() || !shouldUseScrollMotion()) return undefined;

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

      // (photo-strip parallax now lives in usePremiumAnimations — sitewide)

      // 4) Join CTA heading rises character by character.
      const joinHeadings = document.querySelectorAll('#join h2');
      joinHeadings.forEach((h2) => {
        // Capture the heading exactly once, while React's markup is still
        // untouched. Re-reading a heading we already split loses the spaces
        // between the character spans, and a second pass then re-emitted the
        // whole run of them at the front ("Wan tt ob epar to fit?").
        const alreadySplit = Boolean(h2.querySelector('.join-char'));
        if (!h2.dataset.text && !alreadySplit) {
          h2.dataset.text = h2.textContent.trim();
        }
        const source = h2.dataset.text;
        if (!source) return;

        // Spaces get their own span, so textContent round-trips exactly and
        // this comparison is a reliable self-heal if the DOM ever drifts.
        if (!alreadySplit || h2.textContent !== source) {
          h2.setAttribute('aria-label', source);
          // Keep each word (including trailing "?") as one unbreakable unit so
          // punctuation cannot wrap onto its own line after the char split.
          h2.innerHTML = source
            .split(/(\s+)/)
            .map((token) => {
              if (!token) return '';
              if (/^\s+$/.test(token)) {
                return '<span class="join-char join-char--space" aria-hidden="true"> </span>';
              }
              const chars = [...token]
                .map(
                  (c) =>
                    `<span class="join-char" aria-hidden="true">${c}</span>`,
                )
                .join('');
              return `<span class="join-word">${chars}</span>`;
            })
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

      // 8) Ticker speeds up with scroll velocity, then settles back.
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
