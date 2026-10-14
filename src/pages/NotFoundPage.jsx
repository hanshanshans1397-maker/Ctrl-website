import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('notFound');

  return (
    <>
      <div
        className="page-hero relative overflow-hidden bg-dark flex min-h-[50vh] flex-col justify-end px-[52px] pt-40 pb-[80px] max-lg:px-6 max-lg:pb-16 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">Chyba</span>
            <span className="page-label en">Error</span>
            <h1 className="page-title cs text-bg">404</h1>
            <h1 className="page-title en text-bg">404</h1>
          </div>
          <p className="page-sub cs max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Tady nic není. Stránka neexistuje, nebo odkaz už není platný.
          </p>
          <p className="page-sub en max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Nothing here. The page does not exist, or the link is no longer valid.
          </p>
        </div>
      </div>

      <section className="unsub-section bg-bg">
        <div className="unsub-card" data-phase="done">
          <span className="unsub-card__glow" aria-hidden="true" />
          <div className="unsub-body" role="status">
            <h2 className="unsub-title">
              <span className="cs">Stránka nenalezena.</span>
              <span className="en">Page not found.</span>
            </h2>
            <p className="unsub-text">
              <span className="cs">
                Zkontrolujte adresu, nebo se vraťte na úvod. Pokud jste přišli z e-mailu, otevřete
                odkaz znovu přímo z něj.
              </span>
              <span className="en">
                Check the address, or go back home. If you came from an email, open the link again
                from there.
              </span>
            </p>
            <div className="unsub-actions">
              <Link to="/" className="newsletter-success__link newsletter-success__link--primary">
                <span className="cs">Zpět na web</span>
                <span className="en">Back to the website</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
