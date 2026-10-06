import { usePageMeta } from '../hooks/usePageMeta';
import { useNewsletterForm } from '../hooks/useNewsletterForm';
import { NewsletterSignalAnimation } from '../components/NewsletterSignalAnimation';
import { NewsletterTopicPicker } from '../components/NewsletterTopicPicker';

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
    errorCode,
    preferenceOptions,
    submit,
  } = useNewsletterForm();

  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

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
          <p className="page-sub cs max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Přihlaste k odběru svůj e-mail a dostávejte zprávy jen z toho, co si zvolíte.
          </p>
          <p className="page-sub en max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Subscribe with your email and get messages only from what you pick.
          </p>
        </div>
      </div>

      <div className="apply-page apply-page--below-hero newsletter-page">
        <div className="newsletter-intro rev">
          <h2 className="sec-title mb-4 text-[clamp(32px,3.5vw,52px)] leading-[1.1] font-bold tracking-[-2px] text-dark max-sm:text-[clamp(26px,7vw,40px)] max-sm:tracking-[-1px]">
            <span className="cs">Jen to, co si vyberete.</span>
            <span className="en">Only what you choose.</span>
          </h2>
          <p className="cs text-base leading-[1.85] font-light text-mid">
            Pět skupin, jeden e-mail. Signál se rozsvítí podle toho, co
            zaškrtnete.
          </p>
          <p className="en text-base leading-[1.85] font-light text-mid">
            Five groups, one email. The signal lights up according to what
            you tick.
          </p>
        </div>
        <div className="apply-layout">
          <NewsletterSignalAnimation
            preferences={preferences}
            isSuccess={isSuccess}
          />

          <div className="apply-wrap rev d2">
            {isSuccess ? (
              <div className="success show" role="status">
                <div className="success-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-accent"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="cs">Hotovo</h2>
                <h2 className="en">Done</h2>
                <p className="cs">Až bude něco nového, ozveme se.</p>
                <p className="en">We will be in touch when there is something new.</p>
              </div>
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
                    <span className="cs">E-mail</span>
                    <span className="en">Email</span>
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder={isEn ? 'name@domain.com' : 'jmeno@domena.cz'}
                    value={email}
                    aria-invalid={errorCode === 'email'}
                    aria-describedby={errorCode === 'email' ? 'newsletter-email-error' : undefined}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errorCode === 'email' ? (
                    <p
                      id="newsletter-email-error"
                      className="mt-2 text-[14px] font-light text-red-700"
                      role="alert"
                    >
                      <span className="cs">Zadejte e-mail ve tvaru jmeno@domena.cz.</span>
                      <span className="en">Enter an email like name@domain.com.</span>
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <div className="newsletter-groups__head">
                    <span className="block font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">
                      <span className="cs">Skupiny</span>
                      <span className="en">Topics</span>
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
                  </div>
                  <NewsletterTopicPicker
                    options={preferenceOptions}
                    preferences={preferences}
                    onToggle={togglePreference}
                  />
                  <div className="chip-group" role="group">
                    <button
                      type="button"
                      className={`chip${allSelected ? ' selected' : ''}`}
                      aria-pressed={allSelected}
                      onClick={toggleAll}
                    >
                      <span className="cs">Vše</span>
                      <span className="en">All</span>
                    </button>
                    {preferenceOptions.map((option) => {
                      const selected = preferences.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          className={`chip${selected ? ' selected' : ''}`}
                          aria-pressed={selected}
                          onClick={() => togglePreference(option.value)}
                        >
                          <span className="cs">{option.cs}</span>
                          <span className="en">{option.en}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="field">
                  <label className="newsletter-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      className="newsletter-consent__input"
                    />
                    <span className="newsletter-consent__box" aria-hidden="true" />
                    <span className="newsletter-consent__text">
                      <span className="cs">
                        Souhlasím se zasíláním newsletteru na tento e-mail. Odhlásit se
                        můžu kdykoli odkazem v mailu.
                      </span>
                      <span className="en">
                        I agree to receive the newsletter at this email. I can unsubscribe
                        anytime from a link in the email.
                      </span>
                    </span>
                  </label>
                </div>

                {errorCode === 'save' ? (
                  <p className="mb-5 text-[14px] font-light text-red-700" role="alert">
                    <span className="cs">Nepodařilo se uložit. Zkuste to znovu.</span>
                    <span className="en">Could not save. Please try again.</span>
                  </p>
                ) : null}

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  <span className="cs">{isLoading ? '…' : 'Přihlásit se do newsletteru'}</span>
                  <span className="en">{isLoading ? '…' : 'Subscribe to the newsletter'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
