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
    <>
      <div
        className="page-hero relative overflow-hidden bg-dark flex min-h-[60vh] flex-col justify-end px-[52px] pt-40 pb-[100px] max-lg:px-6 max-lg:pb-20 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">Newsletter</span>
            <span className="page-label en">Newsletter</span>
            <h1 className="page-title cs text-bg">Odhlášení</h1>
            <h1 className="page-title en text-bg">Unsubscribe</h1>
          </div>
        </div>
      </div>

      <section className="sec bg-bg">
        <div className="inner max-w-[680px]">
          {phase === 'loading' ? (
            <p className="page-sub">
              <span className="cs">Odhlašuji…</span>
              <span className="en">Unsubscribing…</span>
            </p>
          ) : null}

          {phase === 'done' ? (
            <p className="page-sub" role="status">
              <span className="cs">
                Pokud byl odkaz platný, odběr newsletteru je ukončený.
              </span>
              <span className="en">
                If the link was valid, the newsletter subscription is cancelled.
              </span>
            </p>
          ) : null}

          {phase === 'error' ? (
            <p className="page-sub" role="alert">
              <span className="cs">
                Nepodařilo se odhlásit. Otevři odkaz z mailu ještě jednou.
              </span>
              <span className="en">
                Could not unsubscribe. Open the link from the email again.
              </span>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
