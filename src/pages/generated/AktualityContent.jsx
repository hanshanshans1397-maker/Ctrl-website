import { NEWS } from "../../data/news";
import { NewsCard } from "../../components/sections/NewsCard";

export function AktualityPageContent() {
  return (
    <>
      <div className="page-hero relative overflow-hidden bg-dark" id="hero">
        <div className="hero-mobile-head hero-mobile-head--solo hidden max-sm:block relative w-full shrink-0 bg-dark">
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-2">
              <span className="cs">Co se děje</span>
              <span className="en">What&apos;s happening</span>
            </span>
            <div className="flex flex-col text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span className="cs">Aktuality</span>
              <span className="en">News</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-body hidden max-sm:block relative z-[2] px-5">
          <p className="page-sub cs text-[rgba(245,245,243,0.65)]">
            Novinky, články, výzkum a oznámení od spolku CTRL Europe pro
            veřejnost.
          </p>
          <p className="page-sub en text-[rgba(245,245,243,0.65)]">
            News, articles, research and announcements from CTRL Europe for
            the public.
          </p>
        </div>

        <div className="inner relative z-[2] max-sm:hidden">
          <div className="section-head">
            <span className="page-label cs max-sm:hidden">Co se děje</span>
            <span className="page-label en max-sm:hidden">
              What&apos;s happening
            </span>
            <h1 className="page-title cs text-bg max-sm:hidden">Aktuality</h1>
            <h1 className="page-title en text-bg max-sm:hidden">News</h1>
          </div>
          <p className="page-sub cs text-[rgba(245,245,243,0.65)]">
            Novinky, články, výzkum a oznámení od spolku CTRL Europe pro
            veřejnost.
          </p>
          <p className="page-sub en text-[rgba(245,245,243,0.65)]">
            News, articles, research and announcements from CTRL Europe for
            the public.
          </p>
        </div>
      </div>

      <section className="sec bg-bg" id="aktuality-list">
        <div className="inner">
          <div className="news-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((article, index) => (
              <div key={article.slug} className={`rev${index > 0 ? ` d${Math.min(index, 5)}` : ''}`}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker-wrap-outer">
        <div className="ticker-inner" id="ticker">
          <div className="ticker-item">CTRL Europe</div>
          <div className="ticker-item">CEE Youth Platform</div>
          <div className="ticker-item cs">Digitální odolnost</div>
          <div className="ticker-item en">Digital Resilience</div>
          <div className="ticker-item">CTRL Summit 2026</div>
          <div className="ticker-item">Erasmus+</div>
          <div className="ticker-item cs">AI povědomí</div>
          <div className="ticker-item en">AI Awareness</div>
          <div className="ticker-item cs">Mediální gramotnost</div>
          <div className="ticker-item en">Media Literacy</div>
          <div className="ticker-item">Brno</div>
        </div>
      </div>
    </>
  );
}
