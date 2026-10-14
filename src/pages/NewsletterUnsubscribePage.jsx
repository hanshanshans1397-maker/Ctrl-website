import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { isValidUnsubscribeToken } from '../../shared/newsletterToken.js';
import { NewsletterUnsubscribeStatus } from '../components/NewsletterUnsubscribeStatus';
import { usePageMeta } from '../hooks/usePageMeta';
import NotFoundPage from './NotFoundPage';

const UNSUBSCRIBE_API_URL = '/api/newsletter/unsubscribe';
// Aby stav "Odhlašuji…" nebliknul na zlomek vteřiny, necháme animaci chvíli doběhnout.
const MIN_LOADING_MS = 900;

export default function NewsletterUnsubscribePage() {
  const [searchParams] = useSearchParams();
  const token = (searchParams.get('token') ?? '').trim();
  const hasValidToken = isValidUnsubscribeToken(token);

  if (!hasValidToken) {
    return <NotFoundPage />;
  }

  return <UnsubscribeFlow token={token} />;
}

function UnsubscribeFlow({ token }) {
  usePageMeta('newsletterUnsubscribe');
  const [phase, setPhase] = useState('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const startedAt = Date.now();
      let ok = false;

      try {
        const res = await fetch(UNSUBSCRIBE_API_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        ok = res.ok;
      } catch {
        ok = false;
      }

      const wait = Math.max(0, MIN_LOADING_MS - (Date.now() - startedAt));
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      if (!cancelled) setPhase(ok ? 'done' : 'error');
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [token, attempt]);

  function retry() {
    setPhase('loading');
    setAttempt((value) => value + 1);
  }

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

      <section className="unsub-section bg-bg">
        <NewsletterUnsubscribeStatus phase={phase} onRetry={retry} />
      </section>
    </>
  );
}
