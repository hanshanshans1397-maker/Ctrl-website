import { Link } from "react-router-dom";
import { ArticlesWritingAnimation } from "../../components/ArticlesWritingAnimation";

export function ArticlesPageContent() {
  return (
    <>
      <section
        className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start"
        id="hero"
      >
        {/* Mobile split: title overlay */}
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-2">
              <span className="cs">Obsah</span>
              <span className="en">Content</span>
            </span>
            <div className="flex flex-col text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span className="cs">Články</span>
              <span className="en">Articles</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:px-5 max-sm:max-w-full">
          <div
            className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden"
            id="heroMeta"
          >
            <span className="text-xl text-accent">
              <span className="cs">Obsah</span>
              <span className="en">Content</span>
            </span>
          </div>

          <h1
            className="mb-12 text-[clamp(72px,10vw,160px)] leading-[0.92] font-extrabold tracking-[-5px] text-bg opacity-0 translate-y-6 max-lg:text-[clamp(52px,8vw,100px)] max-lg:tracking-[-2px] max-[640px]:mb-8 max-[640px]:text-[clamp(44px,10vw,72px)] max-[640px]:tracking-[-1.5px] max-[480px]:text-[clamp(40px,11vw,60px)] max-[480px]:tracking-[-1px] max-sm:hidden"
            id="heroTitle"
          >
            <span className="cs block">Články</span>
            <span className="en block">Articles</span>
          </h1>

          <div
            className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5"
            id="heroBottom"
          >
            <p className="cs max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">
              Naše analýzy, reporty a výzkumné články o digitálních hrozbách a
              odolnosti.
            </p>
            <p className="en max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">
              Our analyses, reports and research articles on digital threats and
              resilience.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full max-[480px]:gap-2">
              <a href="#articles-list" className="btn-p cs">
                Přejít na články &rarr;
              </a>
              <a href="#articles-list" className="btn-p en">
                Browse articles &rarr;
              </a>
              <Link to="/research" className="btn-g light cs">
                Výzkum
              </Link>
              <Link to="/research" className="btn-g light en">
                Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-bg" id="articles-list">
        <div className="inner">
          <div className="rev mx-auto max-w-[720px] text-center">
            <p className="mb-3 font-mono text-[11px] tracking-[3px] text-accent uppercase cs">
              Připravujeme
            </p>
            <p className="mb-3 font-mono text-[11px] tracking-[3px] text-accent uppercase en">
              Coming soon
            </p>

            <div className="rev d1 my-10 flex justify-center">
              <ArticlesWritingAnimation />
            </div>

            <h2 className="mb-5 text-[clamp(28px,3.5vw,44px)] leading-[1.1] font-bold tracking-[-1.5px] text-dark cs">
              Články se právě píší
            </h2>
            <h2 className="mb-5 text-[clamp(28px,3.5vw,44px)] leading-[1.1] font-bold tracking-[-1.5px] text-dark en">
              Articles in the making
            </h2>

            <p className="mx-auto mb-4 max-w-[520px] text-lg leading-[1.65] font-light text-mid cs">
              Brzy vyjde první článek. Analýzy, reporty a výzkumné texty
              připravujeme právě teď.
            </p>
            <p className="mx-auto mb-8 max-w-[520px] text-lg leading-[1.65] font-light text-mid en">
              The first article will be out soon. We are currently preparing
              analyses, reports and research pieces.
            </p>

            <Link to="/research" className="btn-g">
              <span className="cs">Mezitím prozkoumejte výzkum &rarr;</span>
              <span className="en">
                Explore our research in the meantime &rarr;
              </span>
            </Link>
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
