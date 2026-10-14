export function NewsletterStatusIcon({ phase }) {
  return (
    <div className="unsub-icon" aria-hidden="true">
      <span className="unsub-icon__pulse" />
      <span className="unsub-icon__pulse unsub-icon__pulse--late" />

      {phase === 'loading' ? (
        <svg viewBox="0 0 64 64" fill="none" className="unsub-icon__svg">
          <circle className="unsub-icon__track" cx="32" cy="32" r="28" />
          <circle className="unsub-icon__spinner" cx="32" cy="32" r="28" />
        </svg>
      ) : null}

      {phase === 'error' ? (
        <svg viewBox="0 0 64 64" fill="none" className="unsub-icon__svg">
          <circle className="unsub-icon__ring" cx="32" cy="32" r="28" />
          <path className="unsub-icon__mark unsub-icon__mark--error" d="M23 23l18 18M41 23L23 41" />
        </svg>
      ) : null}

      {phase === 'done' ? (
        <svg viewBox="0 0 64 64" fill="none" className="unsub-icon__svg">
          <circle className="unsub-icon__ring" cx="32" cy="32" r="28" />
          <path className="unsub-icon__mark" d="M20 33.5l8.5 8.5L44.5 23" />
        </svg>
      ) : null}
    </div>
  );
}
