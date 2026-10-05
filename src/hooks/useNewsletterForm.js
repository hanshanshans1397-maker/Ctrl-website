import { useState } from 'react';
import { useLang } from '../context/LangContext';

const NEWSLETTER_API_URL = '/api/newsletter/subscribe';

const PREFERENCE_OPTIONS = [
  { value: 'news', cs: 'Aktuality', en: 'News' },
  { value: 'workshops', cs: 'Workshopy', en: 'Workshops' },
  { value: 'summit', cs: 'Summit', en: 'Summit' },
  { value: 'run', cs: 'CTRL Run', en: 'CTRL Run' },
];

export function useNewsletterForm() {
  const { isEn } = useLang();
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorVisible, setErrorVisible] = useState(false);

  function togglePreference(value) {
    setPreferences((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  }

  async function submit(event) {
    event.preventDefault();
    setErrorVisible(false);

    if (preferences.length === 0 || !consent) {
      setErrorVisible(true);
      return;
    }

    setStatus('loading');

    const payload = {
      email,
      preferences,
      lang: isEn ? 'en' : 'cs',
      consent: true,
      _gotcha: honeypot,
    };

    try {
      const res = await fetch(NEWSLETTER_API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setStatus('idle');
      setErrorVisible(true);
    } catch {
      setStatus('idle');
      setErrorVisible(true);
    }
  }

  return {
    isEn,
    email,
    setEmail,
    preferences,
    togglePreference,
    consent,
    setConsent,
    honeypot,
    setHoneypot,
    status,
    errorVisible,
    preferenceOptions: PREFERENCE_OPTIONS,
    submit,
  };
}
