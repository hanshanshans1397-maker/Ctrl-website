import { useEffect, useRef } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useNewsletterForm } from '../hooks/useNewsletterForm';
import { NewsletterSignalAnimation } from '../components/NewsletterSignalAnimation';
import { NewsletterSuccess } from '../components/NewsletterSuccess';
import { NewsletterTopicPicker } from '../components/NewsletterTopicPicker';

const HERO_PROMISES = [
  { cs: 'Žádný spam', en: 'No spam' },
  { cs: 'Jen témata, která si vyberete', en: 'Only the topics you pick' },
  { cs: 'Odhlášení jedním klikem', en: 'Unsubscribe in one click' },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3.2 3.2L13 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldError({ id, children }) {
  return (
    <p id={id} className="newsletter-error" role="alert">
      {children}
    </p>
  );
}

export default function NewsletterPage() {
  usePageMeta('newsletter');

  const {
    isEn,
    email,
    setEmail,
    preferences,
    togglePreference,
    toggleAll,
    allSelected,
    consent,
    setConsent,
    honeypot,
    setHoneypot,
    status,
    errors,
    preferenceOptions,
    submit,
    reset,
  } = useNewsletterForm();

  const layoutRef = useRef(null);
  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  useEffect(() => {
    if (!isSuccess) return;
    layoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [isSuccess]);

  function scrollToForm() {
    layoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div
        className="newsletter-hero page-hero relative overflow-hidden bg-dark flex min-h-[60vh] flex-col justify-end px-[52px] pt-40 pb-[100px] max-lg:px-6 max-lg:pb-20 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">Newsletter</span>
            <span className="page-label en">Newsletter</span>
            <h1 className="page-title cs text-bg">Váš výběr ve schránce.</h1>
            <h1 className="page-title en text-bg">Your pick, in your inbox.</h1>
          </div>
          <p className="page-sub cs max-w-[600px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Summit v Brně, workshopy na školách, charitativní běhy, podcast CTRL+ALT. Napíšeme vám
            jen o tom, co vás opravdu zajímá.
          </p>
          <p className="page-sub en max-w-[600px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            The summit in Brno, workshops in schools, charity runs, the CTRL+ALT podcast. We will
            write to you only about what you actually care about.
          </p>

          <ul className="newsletter-promises rev d2">
            {HERO_PROMISES.map((item) => (
              <li key={item.cs}>
                <CheckIcon />
                <span className="cs">{item.cs}</span>
                <span className="en">{item.en}</span>
              </li>
            ))}
          </ul>

          <div className="rev d3">
            <button type="button" className="newsletter-hero__cta" onClick={scrollToForm}>
              <span className="cs">Vybrat témata</span>
              <span className="en">Pick your topics</span>
              <span aria-hidden="true">&darr;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="apply-page apply-page--below-hero newsletter-page">
        <div className="newsletter-intro rev">
          <h2 className="sec-title newsletter-intro__title mb-4 text-[clamp(32px,3.5vw,52px)] leading-[1.1] font-bold tracking-[-2px] text-dark max-sm:text-[clamp(26px,7vw,40px)] max-sm:tracking-[-1px]">
            <span className="newsletter-intro__rise">
              <span className="cs">Vyberte si, co chcete číst.</span>
              <span className="en">Choose what you want to read.</span>
            </span>
          </h2>
          <p className="cs text-base leading-[1.85] font-light text-mid">
            Pět témat, jeden e-mail. Zaškrtněte, co vás zajímá, a my pošleme jen to.
          </p>
          <p className="en text-base leading-[1.85] font-light text-mid">
            Five topics, one email. Tick what interests you and we will send only that.
          </p>
        </div>

        <div className="apply-layout" ref={layoutRef}>
          <NewsletterSignalAnimation preferences={preferences} isSuccess={isSuccess} />

          <div className="apply-wrap rev d2">
            {isSuccess ? (
              <NewsletterSuccess
                email={email}
                preferences={preferences}
                options={preferenceOptions}
                onReset={reset}
              />
            ) : (
              <form className="form-live relative" onSubmit={submit} noValidate>
                <label className="apply-honeypot">
                  <span>Company</span>
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </label>

                <div className="field">
                  <label htmlFor="newsletter-email">
                    <span className="cs">Váš e-mail</span>
                    <span className="en">Your email</span>
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    inputMode="email"
                    enterKeyHint="next"
                    placeholder={isEn ? 'name@domain.com' : 'jmeno@domena.cz'}
                    value={email}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={
                      errors.email
                        ? 'newsletter-email-error'
                        : errors.already
                          ? 'newsletter-already-notice'
                          : undefined
                    }
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errors.email ? (
                    <FieldError id="newsletter-email-error">
                      <span className="cs">Zadejte e-mail ve tvaru jmeno@domena.cz.</span>
                      <span className="en">Enter an email like name@domain.com.</span>
                    </FieldError>
                  ) : null}
                  {errors.already ? (
                    <p
                      id="newsletter-already-notice"
                      className="newsletter-already"
                      role="status"
                    >
                      <span className="cs">
                        Tento e-mail už je přihlášený. Právě jsme vám poslali e-mail s tlačítkem{' '}
                        <strong>Změnit předvolby</strong> — tam si vyberete nová témata. Nic
                        nevidíte? Zkontrolujte spam.
                      </span>
                      <span className="en">
                        This email is already subscribed. We just sent you an email with a{' '}
                        <strong>Change preferences</strong> button — pick your new topics there.
                        Nothing there? Check your spam folder.
                      </span>
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <div className="newsletter-groups__head">
                    <span
                      id="newsletter-topics-label"
                      className="block font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase"
                    >
                      <span className="cs">Co vám máme posílat</span>
                      <span className="en">What should we send you</span>
                    </span>
                    <span className="newsletter-groups__tools">
                      <span className="newsletter-groups__count" aria-hidden="true">
                        {preferences.length}/{preferenceOptions.length}
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
                  <NewsletterTopicPicker
                    options={preferenceOptions}
                    preferences={preferences}
                    onToggle={togglePreference}
                    labelledBy="newsletter-topics-label"
                    describedBy={errors.preferences ? 'newsletter-topics-error' : undefined}
                    invalid={Boolean(errors.preferences)}
                  />
                  {errors.preferences ? (
                    <FieldError id="newsletter-topics-error">
                      <span className="cs">Vyberte alespoň jedno téma.</span>
                      <span className="en">Pick at least one topic.</span>
                    </FieldError>
                  ) : null}
                </div>

                <div className="field">
                  <label className="newsletter-consent" data-invalid={errors.consent ? 'true' : undefined}>
                    <input
                      id="newsletter-consent"
                      type="checkbox"
                      name="consent"
                      checked={consent}
                      aria-invalid={errors.consent ? 'true' : undefined}
                      aria-describedby={errors.consent ? 'newsletter-consent-error' : undefined}
                      onChange={(event) => setConsent(event.target.checked)}
                      className="newsletter-consent__input"
                    />
                    <span className="newsletter-consent__box" aria-hidden="true" />
                    <span className="newsletter-consent__text">
                      <span className="cs">
                        Souhlasím se zasíláním newsletteru na tento e-mail. Odhlásit se můžu
                        kdykoli odkazem v e-mailu.
                      </span>
                      <span className="en">
                        I agree to receive the newsletter at this email. I can unsubscribe
                        anytime from a link in the email.
                      </span>
                    </span>
                  </label>
                  {errors.consent ? (
                    <FieldError id="newsletter-consent-error">
                      <span className="cs">Bez vašeho souhlasu newsletter poslat nemůžeme.</span>
                      <span className="en">We can&apos;t send the newsletter without your consent.</span>
                    </FieldError>
                  ) : null}
                </div>

                {errors.save ? (
                  <FieldError id="newsletter-save-error">
                    <span className="cs">Nepodařilo se uložit. Zkuste to znovu.</span>
                    <span className="en">Could not save. Please try again.</span>
                  </FieldError>
                ) : null}

                <button
                  type="submit"
                  className="submit-btn newsletter-submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  <span className="cs">{isLoading ? 'Odesílám…' : 'Přihlásit se do newsletteru'}</span>
                  <span className="en">{isLoading ? 'Sending…' : 'Subscribe to the newsletter'}</span>
                  {isLoading ? null : (
                    <span className="newsletter-submit__arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </button>

                <p className="submit-note">
                  <span className="cs">
                    Píšeme jen, když je o čem. Témata později změníte tlačítkem v e-mailu.
                    Odhlásit se můžete kdykoli.
                  </span>
                  <span className="en">
                    We write only when there is something to say. Change your topics later with
                    the button in the email. Unsubscribe anytime.
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
