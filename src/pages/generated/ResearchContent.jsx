export function ResearchPageContent() {
  return (
    <>
      <div className="page-hero relative overflow-hidden bg-dark" id="hero">
        {/* PŮVODNÍ HERO POZADÍ (desktop) — odkomentuj pro návrat k fotce:
        <img src="/photos/vyzkum.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0 max-sm:hidden" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.92)_0%,rgba(11,16,32,0.58)_50%,rgba(11,16,32,0.2)_100%)] max-sm:hidden" aria-hidden="true" />
        */}

        {/* Mobile split: title overlay (bez fotky v pozadí) */}
        <div className="hero-mobile-head hero-mobile-head--solo hidden max-sm:block relative w-full shrink-0 bg-dark">
          {/* PŮVODNÍ MOBILE POZADÍ — odkomentuj spolu s h-[50vh] na rodiči:
          <img src="/photos/vyzkum.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)]" aria-hidden="true" />
          */}
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-2">CTRL</span>
            <div className="flex flex-col text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span className="cs">Výzkum</span>
              <span className="en">Research</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-body hidden max-sm:block relative z-[2] px-5">
          <p className="page-sub cs text-[rgba(245,245,243,0.65)]">
            Analyzujeme digitální hrozby v kontextu střední Evropy.
          </p>
          <p className="page-sub en text-[rgba(245,245,243,0.65)]">
            We analyze digital threats in the context of Central Europe.
          </p>
        </div>

        <div className="inner relative z-[2] max-sm:hidden">
          <div className="section-head">
            <span className="page-label cs max-sm:hidden">CTRL</span>
            <span className="page-label en max-sm:hidden">CTRL</span>
            <h1 className="page-title cs text-bg max-sm:hidden">Výzkum</h1>
            <h1 className="page-title en text-bg max-sm:hidden">Research</h1>
          </div>
          <p className="page-sub cs text-[rgba(245,245,243,0.65)]">
            Analyzujeme digitální hrozby v kontextu střední Evropy.
          </p>
          <p className="page-sub en text-[rgba(245,245,243,0.65)]">
            We analyze digital threats in the context of Central Europe.
          </p>
        </div>
      </div>

      <section className="sec bg-bg">
        <div className="inner">
          <div className="about-2col grid grid-cols-[1fr_2fr] items-start gap-[100px] max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <h2 className="sec-title mb-8 text-[clamp(32px,3.5vw,52px)] italic">
                <span className="cs">
                  Výzkum, který <em>mění diskuzi.</em>
                </span>
                <span className="en">
                  Research that <em>changes the conversation.</em>
                </span>
              </h2>
              <p className="cs text-[15px] leading-[1.85] font-light text-mid">
                Analyzujeme digitální hrozby v kontextu střední Evropy. Naše
                výstupy jsou určeny pro školy, média, thinktanky a evropské
                instituce.
              </p>
              <p className="en text-[15px] leading-[1.85] font-light text-mid">
                We analyze digital threats in the context of Central Europe. Our
                outputs are designed for schools, media, think tanks and
                European institutions.
              </p>
            </div>
            <div className="flex flex-col sep-stack">
              <div className="rev d1 flex items-start justify-between gap-6 bg-bg px-9 py-10 max-sm:flex-col max-sm:gap-4">
                <div className="flex-1">
                  <div className="cs mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Výzkumné téma
                  </div>
                  <div className="en mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Research topic
                  </div>
                  <div className="cs mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Deepfaky a ovlivnění voleb v CEE
                  </div>
                  <div className="en mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Deepfakes and election influence in CEE
                  </div>
                  <div className="cs text-[13px] font-light text-mid">
                    Analýza vlivu syntetického obsahu na voleby v regionu.
                  </div>
                  <div className="en text-[13px] font-light text-mid">
                    Analysis of synthetic content influence on elections in the
                    region.
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 border border-accent/35 bg-accent/[0.06] px-3 py-1.5 self-start mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="cs font-mono text-[9px] tracking-[2px] uppercase text-accent">
                    Probíhá
                  </span>
                  <span className="en font-mono text-[9px] tracking-[2px] uppercase text-accent">
                    Ongoing
                  </span>
                </div>
              </div>
              <div className="rev d2 flex items-start justify-between gap-6 bg-bg px-9 py-10 max-sm:flex-col max-sm:gap-4">
                <div className="flex-1">
                  <div className="cs mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Výzkumné téma
                  </div>
                  <div className="en mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Research topic
                  </div>
                  <div className="cs mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Digitální gramotnost na středních školách CEE
                  </div>
                  <div className="en mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Digital literacy in CEE secondary schools
                  </div>
                  <div className="cs text-[13px] font-light text-mid">
                    Mapování stavu výuky digitální gramotnosti v regionu.
                  </div>
                  <div className="en text-[13px] font-light text-mid">
                    Mapping the state of digital literacy education in the
                    region.
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 border border-separator bg-bg2 px-3 py-1.5 self-start mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-mid opacity-50" />
                  <span className="cs font-mono text-[9px] tracking-[2px] uppercase text-mid">
                    Plánováno 2026
                  </span>
                  <span className="en font-mono text-[9px] tracking-[2px] uppercase text-mid">
                    Planned 2026
                  </span>
                </div>
              </div>
              <div className="rev d3 flex items-start justify-between gap-6 bg-bg px-9 py-10 max-sm:flex-col max-sm:gap-4">
                <div className="flex-1">
                  <div className="cs mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Výzkumné téma
                  </div>
                  <div className="en mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
                    Research topic
                  </div>
                  <div className="cs mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Algoritmická manipulace a mládež
                  </div>
                  <div className="en mb-2 text-lg font-semibold tracking-[-0.3px]">
                    Algorithmic manipulation and youth
                  </div>
                  <div className="cs text-[13px] font-light text-mid">
                    Jak algoritmy ovlivňují politické názory mládeže.
                  </div>
                  <div className="en text-[13px] font-light text-mid">
                    How algorithms influence the political views of young
                    people.
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 border border-separator bg-bg2 px-3 py-1.5 self-start mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-mid opacity-50" />
                  <span className="cs font-mono text-[9px] tracking-[2px] uppercase text-mid">
                    Plánováno 2026
                  </span>
                  <span className="en font-mono text-[9px] tracking-[2px] uppercase text-mid">
                    Planned 2026
                  </span>
                </div>
              </div>
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
