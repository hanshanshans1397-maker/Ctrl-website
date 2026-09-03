const LETTERS = ['C', 'T', 'R', 'L'];

/**
 * Scroll-only interstitial. Nothing remains after it passes.
 * Motion is wired in usePremiumAnimations via `[data-fly]`.
 */
export function Flythrough({ variant = 'logo' }) {
  return (
    <section className={`flythrough flythrough--${variant}`} data-fly={variant} aria-hidden="true">
      <div className="flythrough__stage">
        {variant === 'logo' ? (
          <img
            className="flythrough__mark"
            src="/ctrl_logo_cropped.png"
            alt=""
            width={833}
            height={340}
            decoding="async"
          />
        ) : null}
        {variant === 'letters' ? (
          <div className="flythrough__letters">
            {LETTERS.map((letter) => (
              <span key={letter} className="flythrough__letter">
                {letter}
              </span>
            ))}
          </div>
        ) : null}
        {variant === 'slash' ? <span className="flythrough__slash" /> : null}
        {variant === 'word' ? <span className="flythrough__word">2026</span> : null}
        {variant === 'ring' ? <span className="flythrough__ring" /> : null}
      </div>
    </section>
  );
}
