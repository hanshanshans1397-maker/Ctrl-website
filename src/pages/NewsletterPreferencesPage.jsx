import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { NewsletterStatusIcon } from '../components/NewsletterStatusIcon';
import { NewsletterTopicPicker } from '../components/NewsletterTopicPicker';
import { NEWSLETTER_PREFERENCE_OPTIONS } from '../hooks/useNewsletterForm';
import { usePageMeta } from '../hooks/usePageMeta';

const PREFERENCES_API_URL = '/api/newsletter/preferences';

export default function NewsletterPreferencesPage() {
  usePageMeta('newsletterPreferences');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const [preferences, setPreferences] = useState([]);
  const [status, setStatus] = useState('idle');
  const [errorCode, setErrorCode] = useState(null);

  const allSelected = preferences.length === NEWSLETTER_PREFERENCE_OPTIONS.length;
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  function togglePreference(value) {
    setPreferences((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
    setErrorCode((current) => (current === 'preferences' ? null : current));
  }

  function toggleAll() {
    setPreferences((prev) =>
      prev.length === NEWSLETTER_PREFERENCE_OPTIONS.length
        ? []
        : NEWSLETTER_PREFERENCE_OPTIONS.map((option) => option.value),
    );
    setErrorCode((current) => (current === 'preferences' ? null : current));
  }

  async function submit(event) {
    event.preventDefault();
    if (isLoading) return;

    if (!token) {
      setErrorCode('token');
      return;
    }

    if (preferences.length === 0) {
      setErrorCode('preferences');
      document.getElementById('newsletter-topic-workshops')?.focus();
      return;
    }

    setStatus('loading');
    setErrorCode(null);

    try {
      const res = await fetch(PREFERENCES_API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, preferences }),
      });

      if (res.ok) {
        setStatus('success');
        return;
      }

      const data = await res.json().catch(() => ({}));
      setStatus('idle');
      if (res.status === 400 && Array.isArray(data.fields) && data.fields.includes('preferences')) {
        setErrorCode('preferences');
      } else if (res.status === 400 && Array.isArray(data.fields) && data.fields.includes('token')) {
        setErrorCode('token');
      } else {
        setErrorCode('save');
      }
    } catch {
      setStatus('idle');
      setErrorCode('save');
    }
  }

  return (
    <>
      <div
        className="newsletter-hero page-hero relative overflow-hidden bg-dark flex min-h-[50vh] flex-col justify-end px-[52px] pt-40 pb-[80px] max-lg:px-6 max-lg:pb-16 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">Newsletter</span>
            <span className="page-label en">Newsletter</span>
            <h1 className="page-title cs text-bg">Změnit předvolby</h1>
            <h1 className="page-title en text-bg">Change preferences</h1>
          </div>
          <p className="page-sub cs max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Vyberte témata, o kterých vám máme psát. Ostatní už posílat nebudeme.
          </p>
          <p className="page-sub en max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Pick the topics we should write to you about. We will stop sending the rest.
          </p>
        </div>
      </div>

      <div className="apply-page apply-page--below-hero newsletter-page">
        <div
          className={`unsub-card prefs-card${isSuccess ? ' prefs-card--done' : ''}`}
          data-phase={isSuccess ? 'done' : 'form'}
        >
          <span className="unsub-card__glow" aria-hidden="true" />
          {isSuccess ? (
            <>
              <NewsletterStatusIcon phase="done" />
              <div className="unsub-body" role="status">
                <h2 className="unsub-title">
                  <span className="cs">Předvolby uloženy.</span>
                  <span className="en">Preferences saved.</span>
                </h2>
                <p className="unsub-text">
                  <span className="cs">Od teď vám budeme psát jen o tématech, která máte vybraná.</span>
                  <span className="en">From now on we will only write about the topics you selected.</span>
                </p>
                <ul className="newsletter-success__topics">
                  {NEWSLETTER_PREFERENCE_OPTIONS.filter((option) =>
                    preferences.includes(option.value),
                  ).map((option) => (
                    <li key={option.value}>
                      <span className="cs">{option.cs}</span>
                      <span className="en">{option.en}</span>
                    </li>
                  ))}
                </ul>
                <div className="unsub-actions">
                  <Link to="/" className="newsletter-success__link newsletter-success__link--primary">
                    <span className="cs">Zpět na web</span>
                    <span className="en">Back to the website</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <form className="form-live relative prefs-form" onSubmit={submit} noValidate>
              <div className="field">
                <div className="newsletter-groups__head">
                  <span
                    id="newsletter-prefs-label"
                    className="block font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase"
                  >
                    <span className="cs">Co vám máme posílat</span>
                    <span className="en">What should we send you</span>
                  </span>
                  <span className="newsletter-groups__tools">
                    <span className="newsletter-groups__count" aria-hidden="true">
                      {preferences.length}/{NEWSLETTER_PREFERENCE_OPTIONS.length}
                    </span>
                    <button
                      type="button"
                      className="newsletter-groups__all"
                      aria-pressed={allSelected}
                      onClick={toggleAll}
                    >
                      <span className="cs">{allSelected ? 'Zrušit vše' : 'Vybrat vše'}</span>
                      <span className="en">{allSelected ? 'Clear all' : 'Select all'}</span>
                    </button>
                  </span>
                </div>
                <div
                  className="prefs-meter"
                  aria-hidden="true"
                  style={{ '--prefs-progress': preferences.length / NEWSLETTER_PREFERENCE_OPTIONS.length }}
                >
                  <span className="prefs-meter__fill" />
                </div>
                <NewsletterTopicPicker
                  options={NEWSLETTER_PREFERENCE_OPTIONS}
                  preferences={preferences}
                  onToggle={togglePreference}
                  labelledBy="newsletter-prefs-label"
                  describedBy={errorCode === 'preferences' ? 'newsletter-prefs-error' : undefined}
                  invalid={errorCode === 'preferences'}
                />
                {errorCode === 'preferences' ? (
                  <p id="newsletter-prefs-error" className="newsletter-error" role="alert">
                    <span className="cs">Vyberte alespoň jedno téma.</span>
                    <span className="en">Pick at least one topic.</span>
                  </p>
                ) : null}
              </div>

              {errorCode === 'token' ? (
                <p className="newsletter-error" role="alert">
                  <span className="cs">
                    Odkaz není platný. Otevřete znovu tlačítko Změnit předvolby z e-mailu.
                  </span>
                  <span className="en">
                    This link is not valid. Open the Change preferences button from your email
                    again.
                  </span>
                </p>
              ) : null}

              {errorCode === 'save' ? (
                <p className="newsletter-error" role="alert">
                  <span className="cs">Nepodařilo se uložit. Zkuste to znovu.</span>
                  <span className="en">Could not save. Please try again.</span>
                </p>
              ) : null}

              <button
                type="submit"
                className="submit-btn newsletter-submit"
                disabled={isLoading}
                aria-busy={isLoading}
              >
                <span className="cs">{isLoading ? 'Ukládám…' : 'Uložit předvolby'}</span>
                <span className="en">{isLoading ? 'Saving…' : 'Save preferences'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
