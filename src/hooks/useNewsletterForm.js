import { useState } from 'react';
import { isEmailFormat } from '../../shared/email.js';
import { useLang } from '../context/LangContext';

const NEWSLETTER_API_URL = '/api/newsletter/subscribe';

export const NEWSLETTER_PREFERENCE_OPTIONS = [
  {
    value: 'workshops',
    cs: 'Workshopy',
    en: 'Workshops',
    descCs: 'Nové termíny workshopů pro školy: deepfaky, algoritmy, dezinformace.',
    descEn: 'New dates for school workshops on deepfakes, algorithms and disinformation.',
  },
  {
    value: 'summit',
    cs: 'Summit',
    en: 'Summit',
    descCs: 'Novinky k CTRL Summitu v Brně: program, hosté a registrace.',
    descEn: 'News on the CTRL Summit in Brno: programme, guests and registration.',
  },
  {
    value: 'run',
    cs: 'Sportovní akce',
    en: 'Sports events',
    descCs: 'Pozvánky na CTRL Run a další sportovní akce, jejichž výtěžek jde na dobrou věc.',
    descEn: 'Invitations to CTRL Run and other sports events that raise money for a good cause.',
  },
  {
    value: 'partners',
    cs: 'Spolupráce',
    en: 'Partnerships',
    descCs: 'Příležitosti pro školy, firmy a organizace, které chtějí spolupracovat.',
    descEn: 'Opportunities for schools, companies and organisations that want to collaborate.',
  },
  {
    value: 'media',
    cs: 'Média a podcasty',
    en: 'Media and podcasts',
    descCs: 'Nové epizody podcastu CTRL+ALT a další video obsah.',
    descEn: 'New episodes of the CTRL+ALT podcast and other video content.',
  },
];

const FIELD_FOCUS_TARGETS = {
  email: 'newsletter-email',
  preferences: 'newsletter-topic-workshops',
  consent: 'newsletter-consent',
};

const SERVER_FIELDS = ['email', 'preferences', 'consent'];

function focusField(field) {
  const id = FIELD_FOCUS_TARGETS[field];
  if (!id) return;
  window.requestAnimationFrame(() => document.getElementById(id)?.focus());
}

export function useNewsletterForm() {
  const { isEn } = useLang();
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  function clearError(field) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function togglePreference(value) {
    setPreferences((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
    clearError('preferences');
  }

  function toggleAll() {
    setPreferences((prev) =>
      prev.length === NEWSLETTER_PREFERENCE_OPTIONS.length
        ? []
        : NEWSLETTER_PREFERENCE_OPTIONS.map((option) => option.value),
    );
    clearError('preferences');
  }

  function updateEmail(value) {
    setEmail(value);
    clearError('email');
    clearError('already');
  }

  function updateConsent(value) {
    setConsent(value);
    clearError('consent');
  }

  function reset() {
    setStatus('idle');
    setErrors({});
  }

  async function submit(event) {
    event.preventDefault();
    if (status === 'loading') return;

    const nextErrors = {};
    if (!isEmailFormat(email)) nextErrors.email = true;
    if (preferences.length === 0) nextErrors.preferences = true;
    if (!consent) nextErrors.consent = true;

    setErrors(nextErrors);

    const firstInvalid = ['email', 'preferences', 'consent'].find((field) => nextErrors[field]);
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    setStatus('loading');

    const payload = {
      email: email.trim(),
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
        return;
      }

      const data = await res.json().catch(() => ({}));
      setStatus('idle');

      if (res.status === 409 && data.code === 'already_subscribed') {
        setErrors({ already: true });
        focusField('email');
        return;
      }

      const serverFields =
        res.status === 400 && Array.isArray(data.fields)
          ? data.fields.filter((field) => SERVER_FIELDS.includes(field))
          : [];

      if (serverFields.length > 0) {
        setErrors(Object.fromEntries(serverFields.map((field) => [field, true])));
        focusField(serverFields[0]);
      } else {
        setErrors({ save: true });
      }
    } catch {
      setStatus('idle');
      setErrors({ save: true });
    }
  }

  return {
    isEn,
    email,
    setEmail: updateEmail,
    preferences,
    togglePreference,
    toggleAll,
    allSelected: preferences.length === NEWSLETTER_PREFERENCE_OPTIONS.length,
    consent,
    setConsent: updateConsent,
    honeypot,
    setHoneypot,
    status,
    errors,
    preferenceOptions: NEWSLETTER_PREFERENCE_OPTIONS,
    submit,
    reset,
  };
}
