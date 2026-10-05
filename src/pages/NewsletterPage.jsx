import { usePageMeta } from '../hooks/usePageMeta';
import { useNewsletterForm } from '../hooks/useNewsletterForm';

export default function NewsletterPage() {
  usePageMeta('newsletter');

  const {
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
    preferenceOptions,
    submit,
  } = useNewsletterForm();

  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  return (
    <div className="apply-page">
      <div className="apply-wrap">
        <div className="section-head">
          <span className="section-label">
            <span className="cs">Newsletter</span>
            <span className="en">Newsletter</span>
          </span>
          <h1 className="cs">Zůstaňte v obraze.</h1>
          <h1 className="en">Stay in the loop.</h1>
        </div>

        <p className="lede cs">
          Napíšeme, když bude nový summit, workshop, běh nebo zpráva.
        </p>
        <p className="lede en">
          We will write when there is a new summit, workshop, run, or update.
        </p>

        {isSuccess ? (
          <div className="success show" role="status">
            <p className="cs text-[16px] font-light leading-relaxed text-[var(--apply-muted)]">
              Hotovo. Až bude něco nového, ozveme se.
            </p>
            <p className="en text-[16px] font-light leading-relaxed text-[var(--apply-muted)]">
              Done. We will be in touch when there is something new.
            </p>
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="field">
              <span className="mb-2 block font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">
                <span className="cs">Skupiny</span>
                <span className="en">Topics</span>
              </span>
              <div className="chip-group" role="group">
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
              <label className="flex cursor-pointer items-start gap-3 !normal-case !tracking-normal !font-sans !text-[14px] !text-[var(--apply-ink)]">
                <input
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1 size-4 shrink-0 accent-[var(--apply-blue)]"
                />
                <span>
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

            {errorVisible ? (
              <p className="mb-5 text-[14px] font-light text-red-700" role="alert">
                <span className="cs">Nepodařilo se uložit. Zkuste to znovu.</span>
                <span className="en">Could not save. Please try again.</span>
              </p>
            ) : null}

            <button type="submit" className="submit-btn" disabled={isLoading}>
              <span className="cs">{isLoading ? '…' : 'Přihlásit se'}</span>
              <span className="en">{isLoading ? '…' : 'Subscribe'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
