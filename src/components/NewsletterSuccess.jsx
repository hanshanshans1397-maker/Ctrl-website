import { Link } from 'react-router-dom';

export function NewsletterSuccess({ email, preferences, options, onReset }) {
  const chosen = options.filter((option) => preferences.includes(option.value));

  return (
    <div className="success show newsletter-success" role="status">
      <div className="success-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-accent">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="cs">Jste uvnitř.</h2>
      <h2 className="en">You&apos;re in.</h2>

      <p className="cs">
        Napíšeme vám na <strong className="newsletter-success__email">{email.trim()}</strong>, až
        bude něco nového z témat níže. Potvrzení by mělo dorazit do pár minut — v něm najdete
        tlačítko <strong>Změnit předvolby</strong>. Nic nevidíte? Zkontrolujte spam.
      </p>
      <p className="en">
        We&apos;ll write to <strong className="newsletter-success__email">{email.trim()}</strong>{' '}
        when there is something new in the topics below. A confirmation should arrive within a few
        minutes — look for the <strong>Change preferences</strong> button. Nothing there? Check
        your spam folder.
      </p>

      <ul className="newsletter-success__topics">
        {chosen.map((option) => (
          <li key={option.value}>
            <span className="cs">{option.cs}</span>
            <span className="en">{option.en}</span>
          </li>
        ))}
      </ul>

      <div className="newsletter-success__actions">
        <Link to="/news" className="newsletter-success__link newsletter-success__link--primary">
          <span className="cs">Přečíst aktuality</span>
          <span className="en">Read the news</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <button type="button" className="newsletter-success__link" onClick={onReset}>
          <span className="cs">Přihlásit jiný e-mail</span>
          <span className="en">Subscribe another email</span>
        </button>
      </div>
    </div>
  );
}
