import { useLang } from "../../context/LangContext";
import { AktualityInfoAnimation } from "../../components/AktualityInfoAnimation";
import { getInstagramUrl } from "../../utils/socialLinks";

export function AktualityPageContent() {
  const { isEn } = useLang();
  const instagramUrl = getInstagramUrl(isEn);

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
              What's happening
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
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-16 xl:gap-20">
            <div className="rev order-2 max-w-[560px] lg:order-1 lg:max-w-none">
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-mid cs">
                Zatím tu nic není.
              </p>
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-mid en">
                Nothing here yet.
              </p>
              <h2 className="sec-title mt-6 mb-5 text-[clamp(28px,3vw,44px)] italic">
                <span className="cs">
                  Brzy sem přidáme <em>aktuální oznámení.</em>
                </span>
                <span className="en">
                  We&apos;ll post <em>updates here soon.</em>
                </span>
              </h2>
              <p className="cs text-[15px] leading-[1.85] font-light text-mid">
                Na této stránce budeme sdílet články, výzkum, soutěže, výzvy a
                další novinky pro veřejnost. Zatím sledujte náš Instagram.
              </p>
              <p className="en text-[15px] leading-[1.85] font-light text-mid">
                This page will feature articles, research, competitions, calls
                and other news for the public. For now, follow us on
                Instagram.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p mt-8 inline-flex"
              >
                <span className="cs">Sledujte nás na Instagramu &rarr;</span>
                <span className="en">Follow us on Instagram &rarr;</span>
              </a>
            </div>

            <div className="rev d1 order-1 flex justify-center lg:order-2">
              <AktualityInfoAnimation />
            </div>
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
