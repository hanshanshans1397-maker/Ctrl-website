import { useEffect } from 'react';
import { useLang } from '../context/LangContext';

export function useJoinForm(formId = 'contactForm') {
  const { isEn } = useLang();

  useEffect(() => {
    const form = document.getElementById(formId);
    const success = document.getElementById('formSuccess');
    const btn = document.getElementById('submitBtn');
    if (!form) return undefined;

    const onSubmit = async (e) => {
      e.preventDefault();
      if (btn) {
        btn.disabled = true;
        btn.textContent = '...';
      }

      const data = new FormData(form);
      try {
        const res = await fetch('https://formspree.io/f/mqejkdwe', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.style.display = 'none';
          if (success) success.classList.add('show');
        } else {
          alert(isEn ? 'Could not send. Please try again.' : 'Nepodařilo se odeslat. Zkuste to znovu.');
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<span id="submitText"><span class="cs">Odeslat zprávu</span><span class="en">Send message</span></span>';
          }
        }
      } catch {
        alert(isEn ? 'Could not send. Please try again or email us.' : 'Nepodařilo se odeslat. Zkuste to znovu nebo nám napište e-mail.');
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span id="submitText"><span class="cs">Odeslat zprávu</span><span class="en">Send message</span></span>';
        }
      }
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, [formId, isEn]);
}
