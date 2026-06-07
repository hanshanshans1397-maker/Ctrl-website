import { Link } from 'react-router-dom';

export function HomePageContent() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-end px-[52px] pb-[100px] relative overflow-hidden bg-dark max-lg:px-6 max-lg:pb-20 max-[640px]:px-7 max-[640px]:pb-16 max-sm:px-0 max-sm:pb-0 max-sm:pt-0 max-sm:min-h-0 max-sm:justify-start max-[480px]:px-5 max-[480px]:pb-14 max-[480px]:pt-0"
      >
        <img
          src="/photos/hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] z-0 max-sm:hidden"
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)] max-sm:hidden"
          aria-hidden="true"
        />
        <div
          className="hero-grain absolute inset-0 z-[2] opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20512%20512%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.75%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] max-sm:hidden"
          aria-hidden="true"
        />

        {/* Mobile split: half-screen image with gradient + title overlay */}
        <div className="hidden max-sm:block relative w-full h-[50vh] shrink-0 bg-dark">
          <img src="/photos/hero.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-[center_25%]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 z-[3]">
            <span className="block font-mono text-[9px] tracking-[2.5px] uppercase text-accent mb-2">BRNO &middot; 2026</span>
            <div className="flex items-baseline gap-[0.1em] text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <img src="/ctrl_logo_cropped.png" alt="CTRL" className="h-[1cap] w-auto" />
              <span>Europe</span>
            </div>
          </div>
        </div>

        <div className="max-sm:px-5 max-sm:pt-7 max-sm:pb-10">
          <div className="hero-meta relative z-[3] flex items-center gap-5 mb-12 opacity-0 max-[640px]:justify-center max-[640px]:mb-8 max-[640px]:flex-wrap max-sm:hidden max-[480px]:gap-2">
            <span className="font-mono text-[10px] font-medium tracking-[3px] uppercase text-accent">BRNO &middot; 2026</span>
          </div>

          <h1 className="hero-title relative z-[3] flex items-baseline gap-[0.12em] text-[clamp(72px,10vw,160px)] font-extrabold leading-[0.95] tracking-[-4px] text-bg mb-10 max-w-[1100px] max-lg:text-[clamp(52px,8vw,100px)] max-lg:tracking-[-2px] max-[640px]:text-[clamp(44px,10vw,72px)] max-[640px]:tracking-[-1.5px] max-[640px]:mb-7 max-[640px]:mx-auto max-sm:hidden max-[480px]:text-[clamp(40px,11vw,60px)]">
            <div className="word"><span><img src="/ctrl_logo_cropped.png" alt="CTRL" className="h-[1cap] w-auto" /></span></div>
            <div className="word"><span>Europe</span></div>
          </h1>

          <div className="hero-bottom relative z-[3] flex items-end justify-between gap-10 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-8 max-sm:items-start max-[480px]:gap-5">
            <p className="hero-sub cs text-lg font-light leading-[1.65] text-bg max-w-[480px] opacity-0 translate-y-5 [&_strong]:text-bg [&_strong]:font-semibold max-[640px]:mx-auto max-sm:mx-0">Budujeme <strong>digitální odolnost</strong> pro novou evropskou generaci. Věříme, že připravená generace je <strong>první obranou demokracie.</strong></p>
            <p className="hero-sub en text-lg font-light leading-[1.65] text-bg max-w-[480px] opacity-0 translate-y-5 [&_strong]:text-bg [&_strong]:font-semibold max-[640px]:mx-auto max-sm:mx-0">Building <strong>digital resilience</strong> for the next European generation. We believe that a <strong>prepared generation is democracy&apos;s first line of defense.</strong></p>
            <div className="hero-ctas flex gap-3 opacity-0 translate-y-5 mr-[clamp(48px,8vw,140px)] max-[640px]:mr-0 max-[640px]:flex-wrap max-[640px]:justify-center max-sm:justify-start">
              <Link to="/join" className="btn-primary cs inline-flex items-center gap-2 text-[13px] font-semibold text-bg bg-dark px-7 py-3.5 tracking-wide transition-all duration-250 hover:bg-accent no-underline">Zapojit se &rarr;</Link>
              <Link to="/join" className="btn-primary en inline-flex items-center gap-2 text-[13px] font-semibold text-bg bg-dark px-7 py-3.5 tracking-wide transition-all duration-250 hover:bg-accent no-underline">Join us &rarr;</Link>
              <Link to="/about" className="btn-ghost cs text-[13px] font-medium text-bg border border-[rgba(245,245,243,0.25)] px-7 py-3.5 transition-all hover:bg-[rgba(245,245,243,0.08)] no-underline">Naše mise</Link>
              <Link to="/about" className="btn-ghost en text-[13px] font-medium text-bg border border-[rgba(245,245,243,0.25)] px-7 py-3.5 transition-all hover:bg-[rgba(245,245,243,0.08)] no-underline">Our mission</Link>
            </div>
          </div>
        </div>
      </section>


      <div className="ticker border-t border-b border-light overflow-hidden py-3.5 bg-bg">
        <div className="ticker-wrap flex" id="tickerWrap">
          <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">CTRL Europe</div>
          <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">Digitální odolnost</div>
          <div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">Digital Resilience</div>
          <div className="ticker-item px-12 max-sm:px-5 shrink-0 flex items-center gap-12">
            <img src="/jihomoravskykrajlogovelke.jpg" alt="Jihomoravský kraj" className="h-[28px] w-auto opacity-50 grayscale" />
          </div>
          <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">Erasmus+</div>
          <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">CTRL Summit 2026</div>
          <div className="ticker-item px-12 max-sm:px-5 shrink-0 flex items-center gap-12">
            <img src="/cichnovabrnofull.png" alt="Cichnova Brno" className="h-[28px] w-auto opacity-50 grayscale" />
          </div>
          <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">Mediální gramotnost</div>
          <div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">Media Literacy</div>
          <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">AI povědomí</div>
          <div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12">AI Awareness</div>
        </div>
      </div>


      <section id="what" className="py-40 px-[52px] bg-bg max-lg:py-[100px] max-lg:px-6 max-sm:py-16 max-sm:px-5">
        <div className="max-w-[1300px] mx-auto">
          <span className="section-label rev font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block">
            <span className="cs">Naše práce</span><span className="en">Our work</span>
          </span>
          <h2 className="section-title rev text-[clamp(40px,5vw,72px)] font-bold leading-[1.1] tracking-[-2px] text-dark max-w-[800px] mb-20 max-sm:mb-12 max-sm:text-[clamp(28px,7vw,40px)] max-sm:tracking-[-1px]">
            <span className="cs">Čtyři oblasti naší práce.</span>
            <span className="en">Four areas of our work.</span>
          </h2>
          <div className="what-grid grid grid-cols-4 gap-px bg-light max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-0.5">
            {/* 01 — Výzkum */}
            <div className="what-card rev d1 group min-w-0 bg-bg py-[52px] px-10 max-sm:py-10 max-sm:px-6 relative overflow-hidden transition-colors duration-300 hover:bg-bg2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100">
              <div className="what-num font-mono text-[11px] tracking-[2px] text-mid mb-8 max-sm:mb-5">01</div>
              {/* CPU chip + magnifying glass — digital threat research */}
              <svg className="what-icon w-12 h-12 mb-7 max-sm:mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="22" height="22" rx="2" fill="rgba(74,123,255,0.1)" stroke="#4a7bff" strokeWidth="1.5"/>
                <path d="M10 6V3M16 6V3M22 6V3M10 28v3M16 28v3M22 28v3M6 10H3M6 16H3M6 22H3M28 10h3M28 16h3M28 22h3" stroke="#4a7bff" strokeWidth="1.2" strokeLinecap="round" opacity="0.45"/>
                <rect x="12" y="12" width="10" height="10" rx="1" fill="#4a7bff" opacity="0.18" stroke="#4a7bff" strokeWidth="1"/>
                <path d="M15 17h4M15 19h2" stroke="#4a7bff" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <circle cx="36" cy="36" r="9" fill="rgba(74,123,255,0.08)" stroke="#4a7bff" strokeWidth="1.5"/>
                <path d="M30 36h12M36 30v12" stroke="#4a7bff" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
                <path d="M42.5 42.5L47 47" stroke="#4a7bff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <h3 className="what-name cs text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Výzkum</h3>
              <h3 className="what-name en text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Research</h3>
              <p className="what-desc cs text-sm font-light leading-[1.75] text-mid">Analyzujeme digitální hrozby, dezinformace a vliv AI na středoevropskou společnost. Produkujeme výzkumné zprávy pro školy, média a instituce.</p>
              <p className="what-desc en text-sm font-light leading-[1.75] text-mid">We analyze digital threats, disinformation and the impact of AI on Central European society. We produce research reports for schools, media and institutions.</p>
            </div>

            {/* 02 — Workshopy */}
            <div className="what-card rev d2 group min-w-0 bg-bg py-[52px] px-10 max-sm:py-10 max-sm:px-6 relative overflow-hidden transition-colors duration-300 hover:bg-bg2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100">
              <div className="what-num font-mono text-[11px] tracking-[2px] text-mid mb-8 max-sm:mb-5">02</div>
              {/* Terminal window >_ — hands-on digital education */}
              <svg className="what-icon w-12 h-12 mb-7 max-sm:mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="44" height="31" rx="3" fill="rgba(74,123,255,0.08)" stroke="#4a7bff" strokeWidth="1.5"/>
                <path d="M2 14h44" stroke="#4a7bff" strokeWidth="1" opacity="0.35"/>
                <circle cx="9" cy="10" r="1.5" fill="#4a7bff" opacity="0.35"/>
                <circle cx="15" cy="10" r="1.5" fill="#4a7bff" opacity="0.35"/>
                <circle cx="21" cy="10" r="1.5" fill="#4a7bff" opacity="0.35"/>
                <path d="M10 22l7 4.5-7 4.5" stroke="#4a7bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 27h14" stroke="#4a7bff" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
                <path d="M19 37v4M29 37v4" stroke="#4a7bff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                <path d="M14 44h20" stroke="#4a7bff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
              <h3 className="what-name cs text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Workshopy</h3>
              <h3 className="what-name en text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Workshops</h3>
              <p className="what-desc cs text-sm font-light leading-[1.75] text-mid">Přijíždíme na střední školy s praktickým vzděláváním. Jak rozpoznat deepfake. Jak fungují algoritmy. Jak se bránit manipulaci.</p>
              <p className="what-desc en text-sm font-light leading-[1.75] text-mid">We go to secondary schools with practical education. How to recognize deepfakes. How algorithms work. How to defend against manipulation.</p>
            </div>

            {/* 03 — Média */}
            <div className="what-card rev d3 group min-w-0 bg-bg py-[52px] px-10 max-sm:py-10 max-sm:px-6 relative overflow-hidden transition-colors duration-300 hover:bg-bg2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100">
              <div className="what-num font-mono text-[11px] tracking-[2px] text-mid mb-8 max-sm:mb-5">03</div>
              {/* Eye with viewfinder + scan lines — critical media literacy */}
              <svg className="what-icon w-12 h-12 mb-7 max-sm:mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24c5-9 11-14 20-14s15 5 20 14c-5 9-11 14-20 14S9 33 4 24z" fill="rgba(74,123,255,0.08)" stroke="#4a7bff" strokeWidth="1.5"/>
                <circle cx="24" cy="24" r="7" fill="rgba(74,123,255,0.15)" stroke="#4a7bff" strokeWidth="1.5"/>
                <circle cx="24" cy="24" r="3" fill="#4a7bff" opacity="0.55"/>
                <path d="M4 20h6M38 20h6M4 28h6M38 28h6" stroke="#4a7bff" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                <path d="M7 7v6M7 7h6" stroke="#4a7bff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                <path d="M41 7v6M41 7h-6" stroke="#4a7bff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                <path d="M7 41v-6M7 41h6" stroke="#4a7bff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                <path d="M41 41v-6M41 41h-6" stroke="#4a7bff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
              </svg>
              <h3 className="what-name cs text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Média</h3>
              <h3 className="what-name en text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Media</h3>
              <p className="what-desc cs text-sm font-light leading-[1.75] text-mid">Podcast CTRL+ALT, videokontent, digitální vzdělávání. Vytváříme obsah, který skutečně vzdělává. Na platformách, kde mladí lidé jsou.</p>
              <p className="what-desc en text-sm font-light leading-[1.75] text-mid">CTRL+ALT Podcast, video content, digital education. We create content that truly educates. On platforms where young people actually are.</p>
            </div>

            {/* 04 — Summit */}
            <div className="what-card rev d4 group min-w-0 bg-bg py-[52px] px-10 max-sm:py-10 max-sm:px-6 relative overflow-hidden transition-colors duration-300 hover:bg-bg2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100">
              <div className="what-num font-mono text-[11px] tracking-[2px] text-mid mb-8 max-sm:mb-5">04</div>
              {/* Globe + network triangle — international youth summit */}
              <svg className="what-icon w-12 h-12 mb-7 max-sm:mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="19" fill="rgba(74,123,255,0.07)" stroke="#4a7bff" strokeWidth="1.5"/>
                <ellipse cx="24" cy="24" rx="9" ry="19" stroke="#4a7bff" strokeWidth="1" strokeDasharray="3 2" opacity="0.3"/>
                <path d="M5 24h38M8 15h32M8 33h32" stroke="#4a7bff" strokeWidth="1" opacity="0.2"/>
                <circle cx="24" cy="7" r="4" fill="#4a7bff" opacity="0.7"/>
                <circle cx="38.5" cy="30" r="4" fill="#4a7bff" opacity="0.7"/>
                <circle cx="11.5" cy="35" r="4" fill="#4a7bff" opacity="0.7"/>
                <path d="M24 7L38.5 30M38.5 30L11.5 35M11.5 35L24 7" stroke="#4a7bff" strokeWidth="1.5" strokeLinejoin="round" opacity="0.55"/>
              </svg>
              <h3 className="what-name cs text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">Mezinárodní Summit</h3>
              <h3 className="what-name en text-[22px] max-sm:text-xl font-semibold tracking-[-0.5px] text-dark mb-4 leading-tight">International Summit</h3>
              <p className="what-desc cs text-sm font-light leading-[1.75] text-mid">CTRL Summit 2026 je první mezinárodní konference pro mladou středoevropskou generaci. Brno, jaro 2026.</p>
              <p className="what-desc en text-sm font-light leading-[1.75] text-mid">CTRL Summit 2026 is the first international conference for the young Central European generation. Brno, spring 2026.</p>
            </div>
          </div>
        </div>
      </section>


      <div className="grid grid-cols-3 border-b border-light max-[640px]:grid-cols-1">
        <div className="relative h-[300px] max-[640px]:h-[250px] overflow-hidden group border-r border-light max-[640px]:border-r-0 max-[640px]:border-b">
          <img src="/photos/team.jpg" alt="Členové CTRL Europe" className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="relative h-[300px] max-[640px]:h-[250px] overflow-hidden group border-r border-light max-[640px]:border-r-0 max-[640px]:border-b">
          <img src="/photos/hero.png" alt="Prezentace CTRL Europe" className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="relative h-[300px] max-[640px]:h-[250px] overflow-hidden group max-[640px]:border-b">
          <img src="/photos/member-heart.jpg" alt="Studentský projekt CTRL" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>


      <section id="numbers" className="py-40 px-[52px] bg-bg max-lg:py-[100px] max-lg:px-6 max-[480px]:py-[52px] max-[480px]:px-5">
        <div className="max-w-[1300px] mx-auto">
          <span className="section-label rev font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block">
            <span className="cs">Dopad</span><span className="en">Impact</span>
          </span>
          <h2 className="section-title rev text-[clamp(40px,5vw,72px)] font-bold leading-[1.1] tracking-[-2px] text-dark max-w-[800px] mb-20">
            <span className="cs">Náš dopad v číslech.</span>
            <span className="en">Real numbers. Real impact.</span>
          </h2>

          <div className="numbers-grid grid grid-cols-4 gap-px bg-light mt-20 max-lg:grid-cols-2 max-[640px]:gap-px">
            <div className="number-card rev d1 bg-bg py-[52px] px-11 transition-colors duration-300 hover:bg-bg2 max-[640px]:text-center max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:py-9 max-[640px]:px-5">
              <div className="number-val text-[clamp(52px,6vw,80px)] font-bold tracking-[-3px] leading-none text-dark mb-3 [&_span]:text-accent"><span id="c1">0</span>+</div>
              <div className="number-label cs font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Aktivních členů</div>
              <div className="number-label en font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Active members</div>
            </div>
            <div className="number-card rev d2 bg-bg py-[52px] px-11 transition-colors duration-300 hover:bg-bg2 max-[640px]:text-center max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:py-9 max-[640px]:px-5">
              <div className="number-val text-[clamp(52px,6vw,80px)] font-bold tracking-[-3px] leading-none text-dark mb-3 [&_span]:text-accent"><span id="c2">0</span>+</div>
              <div className="number-label cs font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Celkem přihlášek</div>
              <div className="number-label en font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Total applications</div>
            </div>
            <div className="number-card rev d3 bg-bg py-[52px] px-11 transition-colors duration-300 hover:bg-bg2 max-[640px]:text-center max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:py-9 max-[640px]:px-5">
              <div className="number-val text-[clamp(52px,6vw,80px)] font-bold tracking-[-3px] leading-none text-dark mb-3 [&_span]:text-accent"><span id="c3">0</span></div>
              <div className="number-label cs font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Jazyků v týmu</div>
              <div className="number-label en font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Languages in team</div>
            </div>
            <div className="number-card rev d4 bg-bg py-[52px] px-11 transition-colors duration-300 hover:bg-bg2 max-[640px]:text-center max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:py-9 max-[640px]:px-5">
              <div className="number-val text-[clamp(52px,6vw,80px)] font-bold tracking-[-3px] leading-none text-dark mb-3 [&_span]:text-accent"><span id="c4">0</span></div>
              <div className="number-label cs font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Zemí v týmu</div>
              <div className="number-label en font-mono text-[11px] font-light tracking-[2px] uppercase text-mid">Countries in team</div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec-board py-[120px] px-[52px] bg-bg2 max-lg:py-20 max-lg:px-6 max-[640px]:py-[52px] max-[640px]:px-5 max-[480px]:py-12 max-[480px]:px-5">
        <div className="max-w-[1300px] mx-auto">
          <div className="rev cs font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block leading-normal">Předsednictvo</div>
          <div className="rev en font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block leading-normal">Executive Board</div>
          <h2 className="rev text-[clamp(36px,4vw,64px)] font-bold leading-[1.1] tracking-[-2px] text-dark mb-16 mt-0">
            <span className="cs">Předsednictvo.</span>
            <span className="en">Executive Board.</span>
          </h2>
          <div className="board-grid grid grid-cols-4 gap-px bg-light max-lg:grid-cols-2 max-[480px]:grid-cols-2">
            <div className="rev d1 bg-bg2 py-10 px-8">
              <div className="w-[72px] h-[72px] rounded-full mb-5 overflow-hidden"><img src="/IMG_4222.jpeg" alt="Jan Krejčí" className="w-full h-full object-cover object-[center_5%]" /></div>
              <div className="text-base font-semibold mb-1">Jan Krejčí</div>
              <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-accent mb-1.5"><span className="cs">Předseda & Zakladatel</span><span className="en">President & Founder</span></div>
            </div>
            <div className="rev d2 bg-bg2 py-10 px-8">
              <div className="w-[72px] h-[72px] bg-light rounded-full mb-5 flex items-center justify-center text-xl font-bold text-mid font-mono">JR</div>
              <div className="text-base font-semibold mb-1">Jakub Rašovský</div>
              <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-accent mb-1.5"><span className="cs">Místopředseda</span><span className="en">Vice President</span></div>
            </div>
            <div className="rev d3 bg-bg2 py-10 px-8">
              <div className="w-[72px] h-[72px] bg-light rounded-full mb-5 flex items-center justify-center text-xl font-bold text-mid font-mono">BF</div>
              <div className="text-base font-semibold mb-1">Bety Fritzová</div>
              <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-accent mb-1.5"><span className="cs">Tajemnice</span><span className="en">Secretary</span></div>
            </div>
            <div className="rev d4 bg-bg2 py-10 px-8">
              <div className="w-[72px] h-[72px] bg-light rounded-full mb-5 flex items-center justify-center text-xl font-bold text-mid font-mono">AM</div>
              <div className="text-base font-semibold mb-1">Alena Marková</div>
              <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-accent mb-1.5"><span className="cs">Zástupce předsednictva</span><span className="en">Board Rep.</span></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/about" className="text-[13px] font-normal text-mid no-underline font-mono tracking-wide transition-colors duration-200 hover:text-dark">
              <span className="cs">Všichni členové → O nás</span>
              <span className="en">All members → About us</span>
            </Link>
          </div>
        </div>
      </section>


      <section id="join" className="py-40 px-[52px] bg-bg max-lg:py-[100px] max-lg:px-6 max-[480px]:py-[52px] max-[480px]:px-5">
        <div className="max-w-[1300px] mx-auto">
          <span className="section-label rev cs font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block">Zapojit se</span>
          <span className="section-label rev en font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 block">Join us</span>
          <h2 className="section-title rev text-[clamp(40px,5vw,72px)] font-bold leading-[1.1] tracking-[-2px] text-dark max-w-[800px] mb-20">
            <span className="cs">Chci se připojit.</span>
            <span className="en">I want to join.</span>
          </h2>
          <div className="join-grid grid grid-cols-2 gap-[100px] mt-20 items-start max-lg:grid-cols-1 max-lg:gap-[52px] max-[640px]:gap-10 max-[480px]:gap-8">
            <div className="rev d1">
              <p className="join-info cs text-[15px] font-light leading-[1.85] text-mid mb-4 [&_strong]:text-dark [&_strong]:font-medium"><strong>CTRL Europe</strong> hledá partnery, školy a organizace, které chtějí být součástí změny. Oslovte nás. Jsme tady.</p>
              <p className="join-info en text-[15px] font-light leading-[1.85] text-mid mb-4 [&_strong]:text-dark [&_strong]:font-medium"><strong>CTRL Europe</strong> is looking for partners, schools and organizations that want to be part of change. Contact us. We are here.</p>
              <div className="join-criteria mt-12 flex flex-col border-t border-light">
                <div className="join-criterion py-[18px] border-b border-light flex items-start gap-4 text-sm font-light text-mid transition-[color,padding-left] duration-300 hover:text-dark hover:pl-2">
                  <svg className="w-[15px] h-[15px] text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 14.5V8l6.5-5 6.5 5v6.5" /><path d="M5.5 14.5v-4.5h5v4.5" /><path d="M1.5 14.5h13" />
                  </svg>
                  <span className="cs">Partnerská škola: CTRL Workshop zdarma</span><span className="en">Partner school: CTRL Workshop for free</span>
                </div>
                <div className="join-criterion py-[18px] border-b border-light flex items-start gap-4 text-sm font-light text-mid transition-[color,padding-left] duration-300 hover:text-dark hover:pl-2">
                  <svg className="w-[15px] h-[15px] text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="5" r="2" /><path d="M1 14.5c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" /><circle cx="12.5" cy="5.5" r="1.5" strokeWidth="1.2" /><path d="M14.5 14.5c0-2-1.2-3.2-3-3.8" strokeWidth="1.2" />
                  </svg>
                  <span className="cs">Partnerská organizace: společné projekty</span><span className="en">Partner organization: joint projects</span>
                </div>
                <div className="join-criterion py-[18px] border-b border-light flex items-start gap-4 text-sm font-light text-mid transition-[color,padding-left] duration-300 hover:text-dark hover:pl-2">
                  <svg className="w-[15px] h-[15px] text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 12a7 7 0 0 1 0-8" /><path d="M5 10a4 4 0 0 1 0-4" /><circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" /><path d="M11 10a4 4 0 0 0 0-4" /><path d="M13.5 12a7 7 0 0 0 0-8" />
                  </svg>
                  <span className="cs">Mediální partnerství</span><span className="en">Media partnership</span>
                </div>
                <div className="join-criterion py-[18px] border-b border-light flex items-start gap-4 text-sm font-light text-mid transition-[color,padding-left] duration-300 hover:text-dark hover:pl-2">
                  <svg className="w-[15px] h-[15px] text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="1.5" width="11" height="13" rx="1" /><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" />
                  </svg>
                  <span className="cs">Institucionální spolupráce: Erasmus+ a granty</span><span className="en">Institutional cooperation: Erasmus+ and grants</span>
                </div>
              </div>
            </div>
            <div className="join-form-panel rev d2 bg-white border border-light p-12 px-10 max-lg:p-9 max-lg:px-7 max-[480px]:p-7 max-[480px]:px-5">
              <div id="formSuccess" className="hidden text-center">
                <div className="text-[32px] mb-4">✓</div>
                <h3 className="cs text-xl font-bold mb-2">Zpráva odeslána.</h3>
                <h3 className="en text-xl font-bold mb-2">Message sent.</h3>
                <p className="cs text-sm font-light text-mid">Děkujeme. Ozveme se co nejdříve.</p>
                <p className="en text-sm font-light text-mid">Thank you. We will get back to you soon.</p>
              </div>
              <form id="indexForm" className="form-block flex flex-col gap-5">
                <input type="text" name="_gotcha" className="hidden" />
                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] uppercase text-mid"><span className="cs">Jméno / Organizace</span><span className="en">Name / Organization</span></label>
                  <input className="fi w-full bg-bg border border-light rounded-none px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background] duration-250 focus:border-dark focus:bg-white" type="text" name="name" data-ph-cs="Jan Novák / ZŠ Brno" data-ph-en="John Smith / Example School" required />
                </div>
                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] uppercase text-mid">Email</label>
                  <input className="fi w-full bg-bg border border-light rounded-none px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background] duration-250 focus:border-dark focus:bg-white" type="email" name="email" data-ph-cs="vas@email.cz" data-ph-en="you@email.com" required />
                </div>
                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] uppercase text-mid"><span className="cs">Typ spolupráce</span><span className="en">Type of cooperation</span></label>
                  <select className="fs w-full cursor-pointer bg-bg border border-light rounded-none px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background] duration-250 focus:border-dark focus:bg-white" name="type">
                    <option value="">Vyberte...</option>
                    <option value="Partnerská škola" className="cs">Partnerská škola</option>
                    <option value="Partner school" className="en">Partner school</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Partnerská organizace" className="cs">Partnerská organizace</option>
                    <option value="Partner organization" className="en">Partner organization</option>
                    <option value="Mediální partnerstí" className="cs">Mediální partnerstí</option>
                    <option value="Media partnership" className="en">Media partnership</option>
                    <option value="Jiné" className="cs">Jiné</option>
                    <option value="Other" className="en">Other</option>
                  </select>
                </div>
                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] uppercase text-mid"><span className="cs">Zpráva</span><span className="en">Message</span></label>
                  <textarea className="fta w-full min-h-20 resize-none bg-bg border border-light rounded-none px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background] duration-250 focus:border-dark focus:bg-white placeholder:text-[rgba(11,16,32,0.25)]" name="message" data-ph-cs="Napište nám..." data-ph-en="Write to us..."></textarea>
                </div>
                <button className="fsub bg-dark text-bg border-none py-4 px-9 text-xs font-semibold tracking-[2px] uppercase transition-colors duration-250 hover:bg-accent self-start mt-2 max-[640px]:w-full max-[640px]:text-center" type="submit" id="indexSubmitBtn"><span className="cs">Odeslat zprávu</span><span className="en">Send message</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-bg py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[640px]:py-16 max-[640px]:px-5">
        <div className="max-w-[1300px] mx-auto grid grid-cols-[1fr_360px] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-14">
          <div className="rev">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-8 block">
              <span className="cs">Proč to děláme</span>
              <span className="en">Why we do this</span>
            </span>
            <blockquote className="text-[clamp(22px,3vw,36px)] font-light leading-[1.4] tracking-[-0.5px] text-dark mb-10 max-[640px]:text-[clamp(18px,5vw,24px)]">
              <span className="cs">&ldquo;CTRL Europe jsem nezaložil jako školní projekt. Vidím problém: dezinformace, deepfaky, algoritmická manipulace. Věřím, že naše generace ho musí řešit sama. Školy na to nestíhají. Proto jsme se rozhodli jednat.&rdquo;</span>
              <span className="en">&ldquo;I didn&apos;t start CTRL Europe as a school project. I see a clear problem: disinformation, deepfakes, algorithmic manipulation. I believe our generation has to solve it ourselves. Schools can&apos;t keep up. So we decided to act.&rdquo;</span>
            </blockquote>
            <div className="flex items-center gap-4 mb-14 max-[640px]:mb-10">
              <div className="w-8 h-px bg-accent shrink-0" />
              <div>
                <div className="text-[15px] font-semibold text-dark">Jan Krejčí</div>
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mt-0.5">
                  <span className="cs">Předseda &amp; Zakladatel · CTRL Europe</span>
                  <span className="en">President &amp; Founder · CTRL Europe</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-light max-[480px]:grid-cols-1">
              <div className="bg-bg py-6 px-6">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-2">
                  <span className="cs">Vznik</span><span className="en">Founded</span>
                </div>
                <div className="text-[15px] font-medium text-dark">2025 · Brno</div>
              </div>
              <div className="bg-bg py-6 px-6">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-2">
                  <span className="cs">Struktura</span><span className="en">Structure</span>
                </div>
                <div className="text-[15px] font-medium text-dark">Student-led</div>
              </div>
              <div className="bg-bg py-6 px-6">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-2">Region</div>
                <div className="text-[15px] font-medium text-dark">CEE</div>
              </div>
            </div>
          </div>
          <div className="rev d2 relative max-lg:hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/IMG_4222.jpeg" alt="Jan Krejčí, zakladatel CTRL Europe" className="w-full h-full object-cover object-[center_8%]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 py-3 px-5 bg-[rgba(11,16,32,0.8)]">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(245,245,243,0.5)]">Jan Krejčí · 2025</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
