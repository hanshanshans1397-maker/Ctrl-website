import { Link } from 'react-router-dom';
import { NewsletterStatusIcon } from './NewsletterStatusIcon';

export function NewsletterUnsubscribeStatus({ phase, onRetry }) {
  return (
    <div className="unsub-card" data-phase={phase}>
      <span className="unsub-card__glow" aria-hidden="true" />

      <NewsletterStatusIcon phase={phase} />

      {/* key přehraje vstupní animaci při každé změně stavu */}
      <div key={phase} className="unsub-body" role={phase === 'error' ? 'alert' : 'status'}>
        {phase === 'loading' ? (
          <>
            <h2 className="unsub-title">
              <span className="cs">Odhlašuji…</span>
              <span className="en">Unsubscribing…</span>
            </h2>
            <p className="unsub-text">
              <span className="cs">Chvilku strpení, ukončujeme váš odběr.</span>
              <span className="en">One moment, we are cancelling your subscription.</span>
            </p>
          </>
        ) : null}

        {phase === 'done' ? (
          <>
            <h2 className="unsub-title">
              <span className="cs">Odhlášeno.</span>
              <span className="en">You&apos;re unsubscribed.</span>
            </h2>
            <p className="unsub-text">
              <span className="cs">
                Pokud byl odkaz platný, odběr newsletteru je ukončený. Další e-maily vám už
                nepošleme.
              </span>
              <span className="en">
                If the link was valid, the newsletter subscription is cancelled. We won&apos;t send
                you any more emails.
              </span>
            </p>
            <p className="unsub-hint">
              <span className="cs">Rozmyslíte-li si to, vrátit se můžete kdykoli.</span>
              <span className="en">Change your mind? You can come back anytime.</span>
            </p>
            <div className="unsub-actions">
              <Link to="/" className="newsletter-success__link newsletter-success__link--primary">
                <span className="cs">Zpět na web</span>
                <span className="en">Back to the website</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/newsletter" className="newsletter-success__link">
                <span className="cs">Přihlásit se znovu</span>
                <span className="en">Subscribe again</span>
              </Link>
            </div>
          </>
        ) : null}

        {phase === 'error' ? (
          <>
            <h2 className="unsub-title">
              <span className="cs">Něco se nepovedlo.</span>
              <span className="en">Something went wrong.</span>
            </h2>
            <p className="unsub-text">
              <span className="cs">
                Nepodařilo se odhlásit. Otevři odkaz z mailu ještě jednou.
              </span>
              <span className="en">Could not unsubscribe. Open the link from the email again.</span>
            </p>
            <div className="unsub-actions">
              <button
                type="button"
                className="newsletter-success__link newsletter-success__link--primary"
                onClick={onRetry}
              >
                <span className="cs">Zkusit znovu</span>
                <span className="en">Try again</span>
              </button>
              <Link to="/" className="newsletter-success__link">
                <span className="cs">Zpět na web</span>
                <span className="en">Back to the website</span>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
