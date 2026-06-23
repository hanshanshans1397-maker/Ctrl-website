import { Link } from "react-router-dom";

export function SummitPageContent() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark px-[52px] pb-[100px] max-lg:px-6 max-lg:pb-20 max-md:px-7 max-md:pb-16 max-sm:px-0 max-sm:pb-0 max-sm:pt-0 max-sm:min-h-0 max-sm:justify-start"
      >
        {/* PŮVODNÍ HERO POZADÍ (desktop) — odkomentuj pro návrat k fotce:
        <img
          src="/photos/Seminar.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 max-sm:hidden"
          fetchpriority="high" decoding="async"
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.88)_0%,rgba(11,16,32,0.52)_50%,rgba(11,16,32,0.18)_100%)] max-sm:hidden"
          aria-hidden="true"
        />
        */}

        {/* Mobile split: title overlay (bez fotky v pozadí) */}
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          {/* PŮVODNÍ MOBILE POZADÍ — odkomentuj spolu s h-[50vh] na rodiči:
          <img src="/photos/Seminar.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-[center_35%]" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)]" aria-hidden="true" />
          */}
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-3">
              <span className="cs">Jaro 2026</span>
              <span className="en">Spring 2026</span>
            </span>
            <div className="flex items-baseline gap-[0.15em] text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span>Summit</span>
              <img
                src="/2026.png"
                alt="2026"
                className="h-[0.85em] w-auto inline-block align-middle opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:px-5 max-sm:max-w-full">
          <div
            id="heroMeta"
            className="mb-10 flex translate-y-4 items-center gap-5 opacity-0 max-sm:hidden"
          >
            <span className="text-xl text-accent">
              <span className="cs">Jaro 2026</span>
              <span className="en">Spring 2026</span>
            </span>
          </div>

          <h1 className="split-text mb-12 text-[clamp(72px,10vw,160px)] leading-[0.92] font-extrabold tracking-[-5px] text-bg max-[380px]:text-[clamp(40px,11vw,62px)] max-[380px]:leading-none max-[380px]:tracking-[-2px] max-sm:hidden">
            <div className="word">
              <span>Summit</span>
            </div>
            <div className="word">
              <span>
                <img
                  src="/2026.png"
                  alt="2026"
                  className="h-[1em] w-auto inline-block align-middle opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </div>
          </h1>

          <div
            id="heroBottom"
            className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-sm:flex-col max-sm:items-start max-sm:gap-7 max-[480px]:gap-6"
          >
            <p className="cs max-w-[500px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.75)]">
              Mezinárodní youth summit zaměřený na digitální budoucnost Evropy.
              AI, média, dezinformace, youth leadership a diskuze, které mají
              smysl.
            </p>
            <p className="en max-w-[500px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.75)]">
              International youth summit focused on Europe&apos;s digital
              future. AI, media, disinformation, youth leadership and
              conversations that matter.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/join"
                className="btn-p cs inline-flex items-center gap-2 border-none bg-dark px-7 py-3.5 text-[13px] font-semibold tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:bg-accent"
              >
                Registrovat se &rarr;
              </Link>
              <Link
                to="/join"
                className="btn-p en inline-flex items-center gap-2 border-none bg-dark px-7 py-3.5 text-[13px] font-semibold tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:bg-accent"
              >
                Register &rarr;
              </Link>
              <a
                href="#about"
                className="btn-g light cs inline-flex items-center gap-2 border border-[rgba(245,245,243,0.15)] bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:border-[rgba(245,245,243,0.4)]"
              >
                Více informací
              </a>
              <a
                href="#about"
                className="btn-g light en inline-flex items-center gap-2 border border-[rgba(245,245,243,0.15)] bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:border-[rgba(245,245,243,0.4)]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="deco-year pointer-events-none absolute z-[1] right-[52px] bottom-[60px] text-[clamp(120px,16vw,220px)] leading-none font-black tracking-[-8px] text-[rgba(245,245,243,0.03)] select-none max-sm:left-1/2 max-sm:right-auto max-sm:bottom-6 max-sm:-translate-x-1/2 max-sm:text-[clamp(56px,18vw,88px)] max-sm:tracking-[-3px]">
          2026
        </div>
      </section>

      <div className="bg-accent p-0">
        <div className="summit-stats-bar mx-auto grid max-w-[1300px] grid-cols-4 gap-0 max-sm:grid-cols-2">
          <div className="border-r border-[rgba(255,255,255,0.15)] px-9 py-7 max-sm:px-4 max-sm:py-[18px]">
            <div className="font-mono text-[28px] font-bold text-white">1.</div>
            <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              ročník
            </div>
            <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              edition
            </div>
          </div>
          <div className="border-r border-[rgba(255,255,255,0.15)] px-9 py-7 max-sm:px-4 max-sm:py-[18px]">
            <div className="font-mono text-[28px] font-bold text-white">
              CEE
            </div>
            <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              region
            </div>
            <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              region
            </div>
          </div>
          <div className="border-r border-[rgba(255,255,255,0.15)] px-9 py-7 max-sm:px-4 max-sm:py-[18px]">
            <div className="font-mono text-[28px] font-bold text-white">
              Brno
            </div>
            <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              místo konání
            </div>
            <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              venue city
            </div>
          </div>
          <div className="px-9 py-7 max-sm:px-4 max-sm:py-[18px]">
            <div className="cs font-mono text-[28px] font-bold text-white">
              Jaro
            </div>
            <div className="en font-mono text-[28px] font-bold text-white">
              Spring
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[2px] text-[rgba(255,255,255,0.6)] uppercase">
              2026
            </div>
          </div>
        </div>
      </div>

      <section
        className="sec bg-bg px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16"
        id="about"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">O summitu</span>
              <span className="en">About the summit</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Nejde o běžnou školní konferenci.</span>
              <span className="en">
                This is not a typical school conference.
              </span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 items-start gap-[100px] max-md:grid-cols-1 max-md:gap-12 max-sm:gap-10">
            <div className="rev">
              <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">
                CTRL Summit vzniká protože mladá generace potřebuje vlastní
                prostor pro diskuzi o technologiích, AI a médiích. Ne jako
                diváka. Jako aktivní účastník.
              </p>
              <p className="en mb-5 text-base leading-[1.85] font-light text-mid">
                CTRL Summit exists because the young generation needs its own
                space to discuss technology, AI and media. Not as a spectator.
                As an active participant.
              </p>
              <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">
                Digitální gramotnost, mediální odolnost a kritické myšlení
                nejsou volitelnou nadstavbou. Jsou základní kompetencí pro život
                v moderní Evropě. A mladí lidé by měli mít místo kde se o nich
                mluví a kde spolurozhodují.
              </p>
              <p className="en mb-5 text-base leading-[1.85] font-light text-mid">
                Digital literacy, media resilience and critical thinking are not
                optional extras. They are fundamental competencies for life in
                modern Europe. And young people should have a place where these
                are discussed and where they co-decide.
              </p>
              <p className="cs text-base leading-[1.85] font-light text-mid">
                CTRL Summit je takové místo.
              </p>
              <p className="en text-base leading-[1.85] font-light text-mid">
                CTRL Summit is that place.
              </p>
            </div>
            <div className="rev d2 about-side flex flex-col gap-4 pt-2 max-md:pt-0">
              <blockquote className="border-l-[3px] border-accent bg-bg2 px-7 py-6 max-sm:px-[18px] max-sm:py-5">
                <p className="cs text-lg leading-normal font-normal text-dark italic">
                  &ldquo;Digitální výzvy dneška řeší instituce. My chceme aby je
                  řešila také mladá generace.&rdquo;
                </p>
                <p className="en text-lg leading-normal font-normal text-dark italic">
                  &ldquo;Today&apos;s digital challenges are being solved by
                  institutions. We want the young generation to solve them
                  too.&rdquo;
                </p>
                <cite className="mt-4 block font-mono text-[11px] tracking-[2px] text-mid uppercase not-italic">
                  Jan Krejčí, <span className="cs">Zakladatel CTRL Europe</span>
                  <span className="en">Founder, CTRL Europe</span>
                </cite>
              </blockquote>
              <div className="about-stats grid grid-cols-2 gap-px bg-light max-sm:[&>div]:px-3 max-sm:[&>div]:py-[18px] max-sm:[&>div>div:first-child]:text-[32px]">
                <div className="bg-bg2 px-6 py-6 text-center">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-accent">
                    1
                  </div>
                  <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Den programu
                  </div>
                  <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Day of program
                  </div>
                </div>
                <div className="bg-bg2 px-6 py-6 text-center">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-accent">
                    3+
                  </div>
                  <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Hlavní témata
                  </div>
                  <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Main themes
                  </div>
                </div>
                <div className="bg-bg2 px-6 py-6 text-center">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-accent">
                    CEE
                  </div>
                  <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Region
                  </div>
                  <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Region
                  </div>
                </div>
                <div className="bg-bg2 px-6 py-6 text-center">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-accent">
                    0
                  </div>
                  <div className="cs mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Kc vstup
                  </div>
                  <div className="en mt-1 font-mono text-[10px] tracking-[2px] text-mid uppercase">
                    Entry fee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-bg px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Hlavní témata</span>
              <span className="en">Main themes</span>
            </span>
            <h2 className="section-title">
              <span className="cs">
                Témata která <em>dnes záleží.</em>
              </span>
              <span className="en">
                Themes that <em>matter today.</em>
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-px bg-light">
            <div className="rev d1 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
                  <path
                    d="M4.5 6.5H2M4.5 8H2M4.5 9.5H2M11.5 6.5H14M11.5 8H14M11.5 9.5H14M6.5 4.5V2M8 4.5V2M9.5 4.5V2M6.5 11.5V14M8 11.5V14M9.5 11.5V14"
                    strokeLinecap="round"
                    strokeWidth="0.85"
                    opacity="0.4"
                  />
                  <path
                    d="M6 6.5c.4 0 .4.8.9.8s.4-.8.9-.8 .4.8.9.8"
                    strokeLinecap="round"
                    strokeWidth="0.95"
                    opacity="0.75"
                  />
                  <path
                    d="M6 9c.4 0 .4-.8.9-.8s.4.8.9.8"
                    strokeLinecap="round"
                    strokeWidth="0.95"
                    opacity="0.55"
                  />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Umělá inteligence a společnost
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Artificial Intelligence and Society
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Jak AI mění práci, vzdělávání a demokratické procesy. Co to
                  znamená pro mladé lidi kterí vyrůstají uvnitř těchto změn.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  How AI is changing work, education and democratic processes.
                  What this means for young people growing up inside these
                  changes.
                </p>
              </div>
            </div>
            <div className="rev d1 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path
                    d="M1.5 8c0 0 2.5-4 6.5-4s6.5 4 6.5 4-2.5 4-6.5 4-6.5-4-6.5-4z"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="8" r="2" />
                  <path
                    d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                    strokeLinecap="round"
                    strokeWidth="0.85"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Deepfakes a dezinformace
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Deepfakes and Disinformation
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Syntetický obsah a jeho dopad na důvěru veřejnosti. Jak
                  rozpoznat manipulaci a jak chránit demokratickou diskuzi.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  Synthetic content and its impact on public trust. How to
                  recognize manipulation and protect democratic discourse.
                </p>
              </div>
            </div>
            <div className="rev d1 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" />
                  <path
                    d="M3 8c0 2.76 2.24 5 5 5s5-2.24 5-5"
                    strokeLinecap="round"
                  />
                  <path d="M8 13v1.5M5.5 15h5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Média a demokracie
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Media and Democracy
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Algoritmy, echo chambers a filtráční bubliny. Jak digitální
                  média formují politické názory mladé generace.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  Algorithms, echo chambers and filter bubbles. How digital
                  media shape the political views of the young generation.
                </p>
              </div>
            </div>
            <div className="rev d2 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M8 13.5V3" strokeLinecap="round" />
                  <path d="M8 3C7 2.5 5 1.5 2 2v11c3-.5 5.5.5 6 1.5" />
                  <path d="M8 3C9 2.5 11 1.5 14 2v11c-3-.5-5.5.5-6 1.5" />
                  <path
                    d="M4.5 5.5h2M4.5 7.5h2.5"
                    strokeLinecap="round"
                    strokeWidth="0.85"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Digitální gramotnost
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Digital Literacy
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Proč digitální gramotnost není volitelný předmět. Jak ji
                  začlenit do vzdělávání a proč na ní záleží víc než kdykoli
                  dřív.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  Why digital literacy is not an optional subject. How to
                  integrate it into education and why it matters more than ever.
                </p>
              </div>
            </div>
            <div className="rev d2 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path
                    d="M8 1.5l1.8 3.8 4.2.6-3 2.9.7 4.2L8 10.8l-3.7 2.2.7-4.2-3-2.9 4.2-.6z"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Vedení mladých
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Youth Leadership
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Jak mladí lidé budují organizace, ovlivňují politiku a mění
                  nastavení své generace. Příklady z celé Evropy.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  How young people build organizations, influence policy and
                  change their generation&apos;s settings. Examples from across
                  Europe.
                </p>
              </div>
            </div>
            <div className="rev d3 grid grid-cols-[200px_1fr] items-start gap-12 bg-bg px-11 py-10 transition-colors duration-300 hover:bg-bg2 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-5 max-sm:py-7">
              <div className="pt-1">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="7" cy="8.5" r="5.5" />
                  <path
                    d="M7 3c-1.5 1.5-2.5 3.2-2.5 5.5s1 4 2.5 5.5M7 3c1.5 1.5 2.5 3.2 2.5 5.5s-1 4-2.5 5.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.5 8.5h11"
                    strokeLinecap="round"
                    strokeWidth="0.9"
                    opacity="0.4"
                  />
                  <circle
                    cx="13.5"
                    cy="3.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <path
                    d="M12.5 4.5l-2.5 2"
                    strokeLinecap="round"
                    strokeWidth="0.85"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="cs mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Evropa a technologie
                </h3>
                <h3 className="en mb-3 text-xl font-semibold tracking-[-0.4px] text-dark">
                  Europe and Technology
                </h3>
                <p className="cs text-sm leading-[1.8] font-light text-mid">
                  Evropská regulace AI, digitalizace veřejné správy a digitální
                  suverenita Evropy. Jak CEE region ovlivňuje a je ovlivňován
                  globálním technologickým vývojem.
                </p>
                <p className="en text-sm leading-[1.8] font-light text-mid">
                  European AI regulation, digitalization of public
                  administration and Europe&apos;s digital sovereignty. How the
                  CEE region influences and is influenced by global tech
                  developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-bg px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Program</span>
              <span className="en">Program</span>
            </span>
            <h2 className="section-title">
              <span className="cs">
                Co summit <em>nabídne.</em>
              </span>
              <span className="en">
                What the summit <em>offers.</em>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-px bg-light max-lg:grid-cols-2">
            <div className="offer-card rev d1 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                01
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" />
                  <path
                    d="M3 8c0 2.76 2.24 5 5 5s5-2.24 5-5"
                    strokeLinecap="round"
                  />
                  <path d="M8 13v1.5" strokeLinecap="round" />
                </svg>
                Hlavní přednášky
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" />
                  <path
                    d="M3 8c0 2.76 2.24 5 5 5s5-2.24 5-5"
                    strokeLinecap="round"
                  />
                  <path d="M8 13v1.5" strokeLinecap="round" />
                </svg>
                Keynotes
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Hlavní přednášky od expertů z evropských institucí, novinářů,
                vědců a představitelů technologického sektoru.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Main talks from experts from European institutions, journalists,
                scientists and technology sector representatives.
              </p>
            </div>
            <div className="offer-card rev d2 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                02
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="5" cy="5.5" r="2.5" />
                  <circle cx="11" cy="5.5" r="2.5" />
                  <path
                    d="M1.5 14c0-1.8 1.5-3 3.5-3s3.5 1.2 3.5 3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 13.5c.4-1.5 1.5-2.5 3-2.5s2.8 1 3.5 3"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
                Panelové diskuze
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="5" cy="5.5" r="2.5" />
                  <circle cx="11" cy="5.5" r="2.5" />
                  <path
                    d="M1.5 14c0-1.8 1.5-3 3.5-3s3.5 1.2 3.5 3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 13.5c.4-1.5 1.5-2.5 3-2.5s2.8 1 3.5 3"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
                Panel discussions
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Moderované diskuze na klíčová témata. Studenti a experti na
                stejné úrovni.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Moderated discussions on key topics. Students and experts on
                equal footing.
              </p>
            </div>
            <div className="offer-card rev d3 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                03
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="1" y="2" width="14" height="9" rx="1.5" />
                  <path d="M1 5h14" strokeWidth="0.9" opacity="0.35" />
                  <path
                    d="M3.5 7.5l2 1.5-2 1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                  />
                  <path d="M7.5 9h4" strokeLinecap="round" />
                  <path d="M5.5 13.5h5M8 11v2.5" strokeLinecap="round" />
                </svg>
                Workshopy
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="1" y="2" width="14" height="9" rx="1.5" />
                  <path d="M1 5h14" strokeWidth="0.9" opacity="0.35" />
                  <path
                    d="M3.5 7.5l2 1.5-2 1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                  />
                  <path d="M7.5 9h4" strokeLinecap="round" />
                  <path d="M5.5 13.5h5M8 11v2.5" strokeLinecap="round" />
                </svg>
                Workshops
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Praktické workshopy kde účastníci získávají konkrétní dovednosti
                a nástroje.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Practical workshops where participants acquire concrete skills
                and tools.
              </p>
            </div>
            <div className="offer-card rev d4 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                04
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle
                    cx="8"
                    cy="3"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <circle
                    cx="2.5"
                    cy="12.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <circle
                    cx="13.5"
                    cy="12.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <path
                    d="M8 4.5L2.5 11M8 4.5L13.5 11M3 12.5h10"
                    opacity="0.5"
                    strokeLinecap="round"
                  />
                </svg>
                Networking
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle
                    cx="8"
                    cy="3"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <circle
                    cx="2.5"
                    cy="12.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <circle
                    cx="13.5"
                    cy="12.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.8"
                  />
                  <path
                    d="M8 4.5L2.5 11M8 4.5L13.5 11M3 12.5h10"
                    opacity="0.5"
                    strokeLinecap="round"
                  />
                </svg>
                Networking
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Propojování studentů z celé střední Evropy. Sdílení projektů a
                budování spolupráce.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Connecting students from across Central Europe. Sharing projects
                and building cooperation.
              </p>
            </div>
            <div className="offer-card rev d1 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                05
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M3 1.5v13" strokeLinecap="round" />
                  <path d="M3 3h8l-2 2.5 2 2.5H3" strokeLinejoin="round" />
                </svg>
                Studentské delegace
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M3 1.5v13" strokeLinecap="round" />
                  <path d="M3 3h8l-2 2.5 2 2.5H3" strokeLinejoin="round" />
                </svg>
                Student delegations
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Školy přijíždějí se svými delegacemi. Mezinárodní zastoupení z
                celého regionu.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Schools arrive with their delegations. International
                representation from across the region.
              </p>
            </div>
            <div className="offer-card rev d2 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                06
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M8 2v12M5 14h6" strokeLinecap="round" />
                  <path d="M4 4h8" strokeLinecap="round" />
                  <path
                    d="M4 4L2.5 8.5h3z"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                  <path
                    d="M12 4l-1.5 4.5h3z"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </svg>
                Simulace debat
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M8 2v12M5 14h6" strokeLinecap="round" />
                  <path d="M4 4h8" strokeLinecap="round" />
                  <path
                    d="M4 4L2.5 8.5h3z"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                  <path
                    d="M12 4l-1.5 4.5h3z"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </svg>
                Debate simulations
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Simulace parlamentních a evropských debat. Studenti jako tvůrci
                politiky.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Simulations of parliamentary and European debates. Students as
                policymakers.
              </p>
            </div>
            <div className="offer-card rev d3 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                07
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="5.5" cy="8" r="2.5" />
                  <circle
                    cx="5.5"
                    cy="8"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.7"
                  />
                  <path
                    d="M10 5.5c1 .9 1.5 1.5 1.5 2.5S11 10.5 10 11"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 3.5c1.5 1.5 2 3 2 4.5S14 11 12.5 12.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
                Média a podcast
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="5.5" cy="8" r="2.5" />
                  <circle
                    cx="5.5"
                    cy="8"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                    opacity="0.7"
                  />
                  <path
                    d="M10 5.5c1 .9 1.5 1.5 1.5 2.5S11 10.5 10 11"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 3.5c1.5 1.5 2 3 2 4.5S14 11 12.5 12.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
                Media &amp; Podcast
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Mediální zóna, live podcast a výroba obsahu přímo během akce.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Media zone, live podcast and content creation directly during
                the event.
              </p>
            </div>
            <div className="offer-card rev d4 relative overflow-hidden border border-light bg-bg2 px-9 py-11 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,16,32,0.08)] hover:before:scale-x-100 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                08
              </div>
              <h3 className="cs mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path
                    d="M8 2c-1.5 1.5-2.5 3.5-2.5 6s1 4.5 2.5 6M8 2c1.5 1.5 2.5 3.5 2.5 6s-1 4.5-2.5 6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 8h12"
                    strokeLinecap="round"
                    strokeWidth="0.9"
                    opacity="0.4"
                  />
                </svg>
                Mezinárodní spolupráce
              </h3>
              <h3 className="en mb-3 flex items-center gap-2 text-lg font-semibold tracking-[-0.3px] text-dark">
                <svg
                  className="w-4 h-4 text-mid shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path
                    d="M8 2c-1.5 1.5-2.5 3.5-2.5 6s1 4.5 2.5 6M8 2c1.5 1.5 2.5 3.5 2.5 6s-1 4.5-2.5 6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 8h12"
                    strokeLinecap="round"
                    strokeWidth="0.9"
                    opacity="0.4"
                  />
                </svg>
                International cooperation
              </h3>
              <p className="cs text-[13px] leading-[1.75] font-light text-mid">
                Navazování partnerství mezi školami a organizacemi z různých
                zemí CEE.
              </p>
              <p className="en text-[13px] leading-[1.75] font-light text-mid">
                Building partnerships between schools and organizations from
                different CEE countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-bg2 px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="section-head rev mb-16 max-sm:mb-12">
            <span className="sec-label">
              <span className="cs">Pro koho</span>
              <span className="en">Who it&apos;s for</span>
            </span>
            <h2 className="sec-title text-[clamp(36px,4vw,64px)] leading-[1.1] font-bold tracking-[-2px] text-dark max-sm:text-[clamp(26px,7vw,40px)] max-sm:tracking-[-1px] [&_em]:font-light [&_em]:text-mid [&_em]:italic">
              <span className="cs">
                Summit je otevřený <em>pro všechny.</em>
              </span>
              <span className="en">
                The summit is open <em>to everyone.</em>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-px bg-light max-md:grid-cols-1">
            <div className="for-card rev d1 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Studenti
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Students
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Středoškoláci a vysokoškoláci ze střední Evropy které zajímají
                digitální technologie, média nebo politika.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Secondary and university students from Central Europe interested
                in digital technology, media or politics.
              </p>
            </div>
            <div className="for-card rev d2 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Školy a učitelé
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Schools and teachers
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Vzdělávací instituce které chtějí své studenty propojit s
                mezinárodním prostředím.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Educational institutions that want to connect their students
                with an international environment.
              </p>
            </div>
            <div className="for-card rev d3 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Mládežnické organizace
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Youth organizations
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Studentské organizace a youth platformy které chtějí navázat
                spolupráci a sdílet zkusenosti.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Student organizations and youth platforms that want to build
                cooperation and share experiences.
              </p>
            </div>
            <div className="for-card rev d1 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Experti a řečníci
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Experts and speakers
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Odborníci na AI, média, právo a společnost kterí chtějí sdílet
                své zkušenosti s mladými.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Specialists in AI, media, law and society who want to share
                their expertise with young people.
              </p>
            </div>
            <div className="for-card rev d2 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Partneři a sponzoři
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Partners and sponsors
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Organizace a instituce které sdílejí naše hodnoty a chtějí
                podpořit vznik nové generace leadershipu.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Organizations and institutions that share our values and want to
                support the emergence of a new generation of leadership.
              </p>
            </div>
            <div className="for-card rev d3 border border-light bg-bg p-8 transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-accent max-sm:p-5">
              <div className="for-title cs mb-2 text-base font-semibold text-dark">
                Média
              </div>
              <div className="for-title en mb-2 text-base font-semibold text-dark">
                Media
              </div>
              <p className="for-desc cs text-[13px] leading-[1.7] font-light text-mid">
                Novináři a redakce které se zajímají o youth aktivismus,
                digitální společnost a středoevropskou perspektivu.
              </p>
              <p className="for-desc en text-[13px] leading-[1.7] font-light text-mid">
                Journalists and newsrooms interested in youth activism, digital
                society and the Central European perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-bg2 px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[900px] text-center max-sm:max-w-full">
          <div className="section-head rev mb-8">
            <span className="sec-label">
              <span className="cs">Dlouhodobá vize</span>
              <span className="en">Long-term vision</span>
            </span>
            <h2 className="rev cs text-[clamp(40px,5.5vw,80px)] leading-none font-extrabold tracking-[-3px] text-dark">
              Každoroční evropský youth summit.
            </h2>
            <h2 className="rev en text-[clamp(40px,5.5vw,80px)] leading-none font-extrabold tracking-[-3px] text-dark">
              An annual European youth summit.
            </h2>
          </div>
          <p className="rev d1 cs mx-auto mb-5 max-w-[640px] text-[17px] leading-[1.85] font-light text-mid">
            Naším cílem je vybudovat každoroční mezinárodní summit který
            propojuje mladé lidé z celé Evropy kolem sdílených výzev digitální
            doby.
          </p>
          <p className="rev d1 en mx-auto mb-5 max-w-[640px] text-[17px] leading-[1.85] font-light text-mid">
            Our goal is to build an annual international summit that connects
            young people from across Europe around the shared challenges of the
            digital age.
          </p>
          <p className="rev d2 cs mx-auto max-w-[640px] text-[17px] leading-[1.85] font-light text-mid">
            Nezaznamenáváme si v tom žádné velké sliby. Stavíme to krok po
            kroku. Rok 2026 je tím prvním.
          </p>
          <p className="rev d2 en mx-auto max-w-[640px] text-[17px] leading-[1.85] font-light text-mid">
            We are not making grand promises. We are building this step by step.
            And 2026 is just the beginning.
          </p>
        </div>
      </section>

      <section className="sec bg-bg px-[52px] py-[120px] text-center max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[680px] max-sm:max-w-full">
          <h2 className="rev cs mb-6 text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-2.5px] text-dark">
            Chceš být součástí?
          </h2>
          <h2 className="rev en mb-6 text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-2.5px] text-dark">
            Want to be part of it?
          </h2>
          <p className="rev d1 cs mb-10 text-[17px] leading-[1.8] font-light text-mid">
            Registrace otevřena brzy. Ozvěte se předem. Místa jsou omezená.
          </p>
          <p className="rev d1 en mb-10 text-[17px] leading-[1.8] font-light text-mid">
            Registration opening soon. Get in touch early. Places are limited.
          </p>
          <div className="rev d2 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              className="btn-p cs inline-flex items-center gap-2 border-none bg-dark px-7 py-3.5 text-[13px] font-semibold tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:bg-accent"
            >
              Mám zájem &rarr;
            </Link>
            <Link
              to="/join"
              className="btn-p en inline-flex items-center gap-2 border-none bg-dark px-7 py-3.5 text-[13px] font-semibold tracking-[0.3px] text-bg no-underline transition-all duration-[250ms] hover:bg-accent"
            >
              I&apos;m interested &rarr;
            </Link>
            <a
              href="mailto:"
              className="btn-g cs inline-flex items-center gap-2 border border-light bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-[0.3px] text-dark no-underline transition-all duration-[250ms] hover:border-dark"
            >
              Napište nám
            </a>
            <a
              href="mailto:"
              className="btn-g en inline-flex items-center gap-2 border border-light bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-[0.3px] text-dark no-underline transition-all duration-[250ms] hover:border-dark"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <div className="ticker-wrap-outer overflow-hidden border-t border-b border-light bg-bg py-[13px]">
        <div
          className="ticker-inner flex animate-ticker whitespace-nowrap"
          id="ticker"
        >
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            CTRL Summit 2026
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Brno
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            CEE Youth Platform
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            AI a společnost
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            AI & Society
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Mediální gramotnost
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Media Literacy
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Vedení mladých
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Youth Leadership
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Digitální odolnost
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Digital Resilience
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Jaro 2026
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Spring 2026
          </div>
        </div>
      </div>
    </>
  );
}
