import { useState } from 'react';
import { isEmailFormat } from '../../shared/email.js';
import { useLang } from '../context/LangContext';

const NEWSLETTER_API_URL = '/api/newsletter/subscribe';

const PREFERENCE_OPTIONS = [
  { value: 'workshops', cs: 'Workshopy', en: 'Workshops' },
  { value: 'summit', cs: 'Summit', en: 'Summit' },
  { value: 'run', cs: 'Sportovní akce', en: 'Sports events' },
  { value: 'partners', cs: 'Spolupráce', en: 'Partnerships' },
  { value: 'media', cs: 'Média a podcasty', en: 'Media and podcasts' },
];

export function useNewsletterForm() {
  const { isEn } = useLang();
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorCode, setErrorCode] = useState(null);

  function togglePreference(value) {
    setPreferences((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  }

  function toggleAll() {
    setPreferences((prev) =>
      prev.length === PREFERENCE_OPTIONS.length
        ? []
        : PREFERENCE_OPTIONS.map((option) => option.value),
    );
  }

  function updateEmail(value) {
    setEmail(value);
    setErrorCode((current) => (current === 'email' ? null : current));
  }

  async function submit(event) {
    event.preventDefault();
    setErrorCode(null);

    if (!isEmailFormat(email)) {
      setErrorCode('email');
      return;
    }

    if (preferences.length === 0 || !consent) {
      setErrorCode('save');
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

      const data = await res.json().catch(() => ({}));
      setStatus('idle');
      setErrorCode(
        res.status === 400 && Array.isArray(data.fields) && data.fields.includes('email')
          ? 'email'
          : 'save',
      );
    } catch {
      setStatus('idle');
      setErrorCode('save');
    }
  }

  return {
    isEn,
    email,
    setEmail: updateEmail,
    preferences,
    togglePreference,
    toggleAll,
    allSelected: preferences.length === PREFERENCE_OPTIONS.length,
    consent,
    setConsent,
    honeypot,
    setHoneypot,
    status,
    errorCode,
    preferenceOptions: PREFERENCE_OPTIONS,
    submit,
  };
}
