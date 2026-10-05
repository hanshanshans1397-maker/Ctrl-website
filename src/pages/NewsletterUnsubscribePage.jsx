import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const UNSUBSCRIBE_API_URL = '/api/newsletter/unsubscribe';

export default function NewsletterUnsubscribePage() {
  usePageMeta('newsletterUnsubscribe');
  const [searchParams] = useSearchParams();
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const token = searchParams.get('token') ?? '';
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch(UNSUBSCRIBE_API_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (cancelled) return;
        setPhase(res.ok ? 'done' : 'error');
      } catch {
        if (!cancelled) setPhase('error');
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  return (
    <div className="apply-page">
      <div className="apply-wrap">
        <div className="section-head">
          <span className="section-label">
            <span className="cs">Newsletter</span>
            <span className="en">Newsletter</span>
          </span>
          <h1 className="cs">Odhlášení</h1>
          <h1 className="en">Unsubscribe</h1>
        </div>

        {phase === 'loading' ? (
          <p className="lede">
            <span className="cs">Odhlašuji…</span>
            <span className="en">Unsubscribing…</span>
          </p>
        ) : null}

        {phase === 'done' ? (
          <p className="lede" role="status">
            <span className="cs">
              Pokud byl odkaz platný, odběr newsletteru je ukončený.
            </span>
            <span className="en">
              If the link was valid, the newsletter subscription is cancelled.
            </span>
          </p>
        ) : null}

        {phase === 'error' ? (
          <p className="lede" role="alert">
            <span className="cs">
              Nepodařilo se odhlásit. Otevři odkaz z mailu ještě jednou.
            </span>
            <span className="en">
              Could not unsubscribe. Open the link from the email again.
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
