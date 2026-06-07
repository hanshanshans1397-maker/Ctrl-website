import { useEffect } from 'react';
import gsap from 'gsap';
import { useLang } from '../context/LangContext';

export function useHomeEffects() {
  const { isEn } = useLang();

  useEffect(() => {
    const words = document.querySelectorAll('.hero-title .word span');
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.2,
    });
    gsap.to('.hero-meta', { opacity: 1, duration: 0.6, delay: 0.2 });
    gsap.to('.hero-sub, .hero-ctas', {
      y: 0,
      opacity: 1,
      duration: 0.65,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    const counterTargets = [621, 1112, 9, 8];
    const counterIds = ['c1', 'c2', 'c3', 'c4'];
    const numSection = document.getElementById('numbers');
    if (!numSection) return undefined;

    const cIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counterIds.forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;
            const target = counterTargets[i];
            const dur = 1800;
            const start = Date.now();
            const tick = () => {
              const p = Math.min((Date.now() - start) / dur, 1);
              const ease = 1 - (1 - p) ** 3;
              el.textContent = Math.round(ease * target);
              if (p < 1) requestAnimationFrame(tick);
            };
            tick();
          });
          cIO.disconnect();
        });
      },
      { threshold: 0.3 },
    );

    cIO.observe(numSection);
    return () => cIO.disconnect();
  }, []);

  useEffect(() => {
    const form = document.getElementById('indexForm');
    const success = document.getElementById('formSuccess');
    const btn = document.getElementById('indexSubmitBtn');
    if (!form) return undefined;

    const onSubmit = async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = '...';
      const data = new FormData(form);
      try {
        const res = await fetch('https://formspree.io/f/mqejkdwe', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          alert(isEn ? 'Could not send. Please try again.' : 'Nepodařilo se odeslat. Zkuste to znovu.');
          btn.disabled = false;
          btn.innerHTML = '<span class="cs">Odeslat zprávu</span><span class="en">Send message</span>';
        }
      } catch {
        alert(isEn ? 'Network error. Please try again.' : 'Chyba sítě. Zkuste to znovu.');
        btn.disabled = false;
        btn.innerHTML = '<span class="cs">Odeslat zprávu</span><span class="en">Send message</span>';
      }
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, [isEn]);
}
