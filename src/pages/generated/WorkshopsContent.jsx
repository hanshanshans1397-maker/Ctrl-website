import { Link } from 'react-router-dom';

export function WorkshopsPageContent() {
  return (
    <>
      <section className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start" id="hero">
        {/* PŮVODNÍ HERO POZADÍ (desktop) — odkomentuj pro návrat k fotce:
        <img src="/photos/workshopy.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0 max-sm:hidden" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.92)_0%,rgba(11,16,32,0.58)_50%,rgba(11,16,32,0.2)_100%)] max-sm:hidden" aria-hidden="true" />
        */}

        {/* Mobile split: title overlay (bez fotky v pozadí) */}
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          {/* PŮVODNÍ MOBILE POZADÍ — odkomentuj spolu s h-[50vh] na rodiči:
          <img src="/photos/workshopy.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)]" aria-hidden="true" />
          */}
          <div className="px-5 z-[3]">
            <span className="block font-mono text-[9px] tracking-[2.5px] uppercase text-accent mb-2">Education</span>
            <div className="flex flex-col text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span className="cs">Workshopy</span>
              <span className="en">Workshops</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:px-5 max-sm:max-w-full">
          <div className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden" id="heroMeta">
            <span className="font-mono text-[10px] tracking-[3px] text-accent uppercase">Education</span>
          </div>

          <h1 className="mb-12 text-[clamp(72px,10vw,160px)] leading-[0.92] font-extrabold tracking-[-5px] text-bg opacity-0 translate-y-6 max-lg:text-[clamp(52px,8vw,100px)] max-lg:tracking-[-2px] max-[640px]:mb-8 max-[640px]:text-[clamp(44px,10vw,72px)] max-[640px]:tracking-[-1.5px] max-[480px]:text-[clamp(40px,11vw,60px)] max-[480px]:tracking-[-1px] max-sm:hidden" id="heroTitle">
            <span className="cs block">Workshopy</span>
            <span className="en block">Workshops</span>
          </h1>

          <div className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5" id="heroBottom">
            <p className="cs max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">Moderní workshopy zaměřené na AI, média, digitální gramotnost a budoucnost vzdělávání. Přímo na vaší škole. Zdarma.</p>
            <p className="en max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">Modern workshops focused on AI, media, digital literacy and the future of education. Directly at your school. Free of charge.</p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full max-[480px]:gap-2">
              <Link to="/join" className="btn-p cs">Objednat workshop &rarr;</Link>
              <Link to="/join" className="btn-p en">Order workshop &rarr;</Link>
              <a href="#topics" className="btn-g light cs">Témata</a>
              <a href="#topics" className="btn-g light en">Topics</a>
            </div>
          </div>
        </div>
      </section>


      <div className="topics-marquee">
        <div className="topics-track" id="topicsTrack">
          <div className="topics-tag cs">AI a každodenní život</div>
          <div className="topics-tag en">AI & Everyday Life</div>
          <div className="topics-tag cs">Deepfaky</div>
          <div className="topics-tag en">Deepfakes</div>
          <div className="topics-tag cs">Mediální gramotnost</div>
          <div className="topics-tag en">Media Literacy</div>
          <div className="topics-tag cs">Algoritmy sociálních sítí</div>
          <div className="topics-tag en">Social Media Algorithms</div>
          <div className="topics-tag cs">Kritické myšlení</div>
          <div className="topics-tag en">Critical Thinking</div>
          <div className="topics-tag cs">Dezinformace</div>
          <div className="topics-tag en">Misinformation</div>
          <div className="topics-tag cs">Digitální bezpečnost</div>
          <div className="topics-tag en">Digital Safety</div>
          <div className="topics-tag cs">Budoucnost technologií</div>
          <div className="topics-tag en">Future of Technology</div>
          <div className="topics-tag cs">AI a každodenní život</div>
          <div className="topics-tag en">AI & Everyday Life</div>
          <div className="topics-tag cs">Deepfaky</div>
          <div className="topics-tag en">Deepfakes</div>
          <div className="topics-tag cs">Mediální gramotnost</div>
          <div className="topics-tag en">Media Literacy</div>
          <div className="topics-tag cs">Algoritmy sociálních sítí</div>
          <div className="topics-tag en">Social Media Algorithms</div>
          <div className="topics-tag cs">Kritické myšlení</div>
          <div className="topics-tag en">Critical Thinking</div>
          <div className="topics-tag cs">Dezinformace</div>
          <div className="topics-tag en">Misinformation</div>
          <div className="topics-tag cs">Digitální bezpečnost</div>
          <div className="topics-tag en">Digital Safety</div>
          <div className="topics-tag cs">Budoucnost technologií</div>
          <div className="topics-tag en">Future of Technology</div>
        </div>
      </div>



<section className="sec bg-bg">
        <div className="inner">
          <div className="about-2col grid grid-cols-2 items-start gap-[100px] max-lg:grid-cols-1 max-lg:gap-12 max-sm:gap-10">
            <div className="rev">
              <span className="sec-label cs">Proč workshopy</span>
              <span className="sec-label en">Why workshops</span>
              <h2 className="sec-title mb-8">
                <span className="cs">Školy neučí to nejdůležitější.</span>
                <span className="en">Schools don't teach what matters most.</span>
              </h2>
              <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">Algoritmy rozhodují co vidíme. Deepfaky nahrazují realitu. Dezinformace se šíří rychleji než fakty. A vzdělávací systém na to není připravený.</p>
              <p className="en mb-5 text-base leading-[1.85] font-light text-mid">Algorithms decide what we see. Deepfakes replace reality. Disinformation spreads faster than facts. And the education system is not prepared for this.</p>
              <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">Osnovy vznikají roky dopředu. Technologie se mění každý měsíc. CTRL Workshops tuto propast překlenuje. Prakticky, interaktivně, bez zbytečné teorie.</p>
              <p className="en mb-5 text-base leading-[1.85] font-light text-mid">Curricula are developed years in advance. Technology changes every month. CTRL Workshops bridges this gap. Practically, interactively, without unnecessary theory.</p>
              <p className="cs text-base leading-[1.85] font-light text-mid"><strong className="font-medium text-dark">Digitální gramotnost už není volitelná. Je to základní dovednost pro život v moderní společnosti.</strong></p>
              <p className="en text-base leading-[1.85] font-light text-mid"><strong className="font-medium text-dark">Digital literacy is no longer optional. It is a fundamental skill for life in modern society.</strong></p>
            </div>
            <div className="rev d2 grid grid-cols-2 gap-px bg-light">
              {/* 90 MIN */}
              <div className="bg-bg2 px-6 py-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent opacity-70">// MIN</span>
                  <svg className="w-[18px] h-[18px] text-mid opacity-50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="8" cy="8" r="6.5"/>
                    <path d="M8 4.5V8.2l2.2 1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="font-mono text-[40px] font-bold text-accent leading-none tracking-[-2px]">90</div>
                <div className="cs text-sm font-light text-mid mt-1">Délka programu</div>
                <div className="en text-sm font-light text-mid mt-1">Program duration</div>
              </div>
              {/* 0 Kč FREE */}
              <div className="bg-bg2 px-6 py-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent opacity-70">// FREE</span>
                  <svg className="w-[18px] h-[18px] text-mid opacity-50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="8" cy="8" r="6.5"/>
                    <path d="M5.5 8.5l1.8 1.8 3.5-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="font-mono text-[40px] font-bold text-accent leading-none tracking-[-2px]">0 Kč</div>
                <div className="cs text-sm font-light text-mid mt-1">Pro partnerské školy</div>
                <div className="en text-sm font-light text-mid mt-1">For partner schools</div>
              </div>
              {/* 8 TOPICS */}
              <div className="bg-bg2 px-6 py-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent opacity-70">// TOPICS</span>
                  <svg className="w-[18px] h-[18px] text-mid opacity-50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="1.5" y="1.5" width="5" height="5" rx="0.75"/>
                    <rect x="9.5" y="1.5" width="5" height="5" rx="0.75"/>
                    <rect x="1.5" y="9.5" width="5" height="5" rx="0.75"/>
                    <rect x="9.5" y="9.5" width="5" height="5" rx="0.75"/>
                  </svg>
                </div>
                <div className="font-mono text-[40px] font-bold text-accent leading-none tracking-[-2px]">8</div>
                <div className="cs text-sm font-light text-mid mt-1">Hlavních témat</div>
                <div className="en text-sm font-light text-mid mt-1">Main topics</div>
              </div>
              {/* –26 AGE */}
              <div className="bg-bg2 px-6 py-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent opacity-70">// AGE</span>
                  <svg className="w-[18px] h-[18px] text-mid opacity-50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="8" cy="5" r="2.5"/>
                    <path d="M2.5 14c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="font-mono text-[40px] font-bold text-accent leading-none tracking-[-2px]">–26</div>
                <div className="cs text-sm font-light text-mid mt-1">Věková hranice</div>
                <div className="en text-sm font-light text-mid mt-1">Age limit</div>
              </div>
              {/* note — full width */}
              <div className="col-span-2 flex items-start gap-4 bg-bg px-6 py-4 border-t border-light">
                <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M8 14s-5-4.5-5-8a5 5 0 0110 0c0 3.5-5 8-5 8z" strokeLinejoin="round"/>
                  <circle cx="8" cy="6" r="1.8" fill="currentColor" stroke="none" opacity="0.7"/>
                </svg>
                <p className="cs text-[13px] leading-[1.7] font-light text-mid">Workshop probíhá přímo na vaší škole. Žádné cestování, žádné komplikace.</p>
                <p className="en text-[13px] leading-[1.7] font-light text-mid">The workshop takes place directly at your school. No travel, no complications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="sec bg-bg" id="topics">
        <div className="inner">
          <span className="sec-label rev cs">Témata workshopu</span>
          <span className="sec-label rev en">Workshop topics</span>
          <h2 className="sec-title rev">
            <span className="cs">Osm témat. <em>Jeden cíl.</em></span>
            <span className="en">Eight topics. <em>One goal.</em></span>
          </h2>
          <div className="mt-[52px] max-sm:mt-8">
            <div className="topic-row rev d1">
              <div className="topic-row-num">01</div>
              <div>
                <div className="topic-row-title cs">AI a každodenní život</div>
                <div className="topic-row-title en">AI & Everyday Life</div>
                <div className="topic-row-desc cs">Jak umělá inteligence ovlivňuje každodenní rozhodování, vzdělávání a pracovní trh. Co AI umí, co neumí, a jak si udržet kritický pohled.</div>
                <div className="topic-row-desc en">How artificial intelligence influences everyday decision-making, education and the job market. What AI can do, what it can't, and how to maintain a critical perspective.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="4.5" y="4.5" width="7" height="7" rx="1"/>
                  <path d="M4.5 6.5H2M4.5 8H2M4.5 9.5H2M11.5 6.5H14M11.5 8H14M11.5 9.5H14M6.5 4.5V2M8 4.5V2M9.5 4.5V2M6.5 11.5V14M8 11.5V14M9.5 11.5V14" strokeLinecap="round" strokeWidth="0.85" opacity="0.4"/>
                  <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" opacity="0.65"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d1">
              <div className="topic-row-num">02</div>
              <div>
                <div className="topic-row-title cs">Deepfaky a manipulace</div>
                <div className="topic-row-title en">Deepfakes & Manipulation</div>
                <div className="topic-row-desc cs">Jak funguje syntetický obsah, jak ho rozpoznat a proč je to dnes zásadní dovednost. Praktická cvičení s reálnými příklady.</div>
                <div className="topic-row-desc en">How synthetic content works, how to detect it and why this is an essential skill today. Practical exercises with real-world examples.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M1.5 8c0 0 2.5-4 6.5-4s6.5 4 6.5 4-2.5 4-6.5 4-6.5-4-6.5-4z"/>
                  <circle cx="8" cy="8" r="1.8"/>
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" strokeLinecap="round" strokeWidth="0.85" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d2">
              <div className="topic-row-num">03</div>
              <div>
                <div className="topic-row-title cs">Algoritmy sociálních sítí</div>
                <div className="topic-row-title en">Social Media Algorithms</div>
                <div className="topic-row-desc cs">Jak sociální sítě rozhodují co vidíme, jak fungují echo chambers a filtrační bubliny a jak si udržet kontrolu nad informančním prostředím.</div>
                <div className="topic-row-desc en">How social networks decide what we see, how echo chambers and filter bubbles work and how to maintain control over your information environment.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="8" cy="2.5" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
                  <circle cx="3" cy="9" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
                  <circle cx="13" cy="9" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
                  <path d="M8 4L3 7.5M8 4L13 7.5" strokeLinecap="round" opacity="0.4"/>
                  <circle cx="5.5" cy="14" r="1.2" fill="currentColor" stroke="none" opacity="0.5"/>
                  <circle cx="10.5" cy="14" r="1.2" fill="currentColor" stroke="none" opacity="0.5"/>
                  <path d="M3 10.5L5 12.5M13 10.5L11 12.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d2">
              <div className="topic-row-num">04</div>
              <div>
                <div className="topic-row-title cs">Mediální gramotnost</div>
                <div className="topic-row-title en">Media Literacy</div>
                <div className="topic-row-desc cs">Jak číst média s pochopením jak fungují. Zdroje, redakční linie, media bias a metody ověřování informací, které fungují v praxi.</div>
                <div className="topic-row-desc en">How to read media with an understanding of how they work. Sources, editorial lines, media bias and practical information verification methods.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="3" y="1.5" width="10" height="13" rx="1.5"/>
                  <path d="M5.5 5.5h5M5.5 7.5h5M5.5 9.5h3" strokeLinecap="round" strokeWidth="0.9" opacity="0.45"/>
                  <path d="M5.5 12l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d3">
              <div className="topic-row-num">05</div>
              <div>
                <div className="topic-row-title cs">Dezinformace a důvěra</div>
                <div className="topic-row-title en">Misinformation & Trust</div>
                <div className="topic-row-desc cs">Jak se dezinformace tvoří, šíří a jak ovlivňují důvěru v instituce a věřejnou diskuzi. Metody fact-checkingu a kritického myšlení.</div>
                <div className="topic-row-desc en">How disinformation is created, spread and how it influences trust in institutions and public discourse. Methods of fact-checking and critical thinking.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M8 1.5L2.5 4v5c0 3 2.5 4.8 5.5 5.5 3-.7 5.5-2.5 5.5-5.5V4z" strokeLinejoin="round"/>
                  <path d="M5.5 8.5l1.5 1.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d3">
              <div className="topic-row-num">06</div>
              <div>
                <div className="topic-row-title cs">Digitální bezpečnost</div>
                <div className="topic-row-title en">Digital Safety</div>
                <div className="topic-row-desc cs">Osobní data, soukromí online, kyberbezpečnost. Co o nás platformy ví a jak chránit své digitální identity.</div>
                <div className="topic-row-desc en">Personal data, online privacy, cybersecurity. What platforms know about us and how to protect your digital identity.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="3" y="7" width="10" height="7.5" rx="1.5"/>
                  <path d="M5.5 7V5.5a2.5 2.5 0 015 0V7" strokeLinecap="round"/>
                  <circle cx="8" cy="11" r="1.3" fill="currentColor" stroke="none" opacity="0.65"/>
                  <path d="M8 11v1.5" strokeLinecap="round" strokeWidth="1.2"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d4">
              <div className="topic-row-num">07</div>
              <div>
                <div className="topic-row-title cs">Kritické myšlení online</div>
                <div className="topic-row-title en">Critical Thinking Online</div>
                <div className="topic-row-desc cs">Systematický přístup k hodnocení digitálního obsahu. Jak nepřijímat zjednodušení, jak ověřovat a jak si udržet autonomní myšlení v době informačního přehlcení.</div>
                <div className="topic-row-desc en">A systematic approach to evaluating digital content. How not to accept oversimplification, how to verify and how to maintain autonomous thinking in an age of information overload.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="6.5" cy="6.5" r="4.5"/>
                  <path d="M10 10l4.5 4.5" strokeLinecap="round" strokeWidth="1.5"/>
                  <path d="M4.5 6.5h4M6.5 4.5v4" strokeLinecap="round" strokeWidth="0.9" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <div className="topic-row rev d4">
              <div className="topic-row-num">08</div>
              <div>
                <div className="topic-row-title cs">Závislost na technologiích</div>
                <div className="topic-row-title en">Technology addiction</div>
                <div className="topic-row-desc cs">Věda za návykovými aplikacemi není náhoda. Je to záměrný design. Dopamin, notifikace, nekončící scroll. Jak funguje a jak získat kontrolu zpět.</div>
                <div className="topic-row-desc en">The science behind addictive apps is not an accident. It is intentional design. Dopamine, notifications, endless scroll. How it works and how to regain control.</div>
              </div>
              <div className="topic-row-tag">
                <svg className="w-5 h-5 text-mid" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="4.5" y="1" width="7" height="12" rx="1.5"/>
                  <path d="M7 2.5h2" strokeLinecap="round" strokeWidth="0.9" opacity="0.5"/>
                  <circle cx="8" cy="8.5" r="2.5"/>
                  <path d="M8 7V8.5l1 1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec bg-bg">
        <div className="inner">
          <span className="sec-label rev cs text-accent">Formát</span>
          <span className="sec-label rev en text-accent">Format</span>
          <h2 className="sec-title rev text-dark">
            <span className="cs">Jak workshop <em className="text-mid">funguje.</em></span>
            <span className="en">How the workshop <em className="text-mid">works.</em></span>
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12 max-sm:gap-8">
            <div className="rev d1">
              <div className="how-step">
                <div className="how-num">01</div>
                <div>
                  <div className="how-title cs">Interaktivní úvod</div>
                  <div className="how-title en">Interactive introduction</div>
                  <p className="how-desc cs">Workshop začíná kvízem nebo simulací. Ne přednáškou. Studenti jsou zapojení od první minuty.</p>
                  <p className="how-desc en">The workshop starts with a quiz or a simulation. Not a lecture. Students are engaged from the first minute.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">02</div>
                <div>
                  <div className="how-title cs">Reálné příklady</div>
                  <div className="how-title en">Real-world examples</div>
                  <p className="how-desc cs">Pracujeme s aktuálními případy z médií, sociálních sítí a technologického světa. Ne z učebnic.</p>
                  <p className="how-desc en">We work with current cases from media, social networks and the technology world. Not from textbooks.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">03</div>
                <div>
                  <div className="how-title cs">Skupinové aktivity</div>
                  <div className="how-title en">Group activities</div>
                  <p className="how-desc cs">Studenti pracují v týmech, diskutují, argumentují a společně řeší problémy. Žádné pasivní posízení.</p>
                  <p className="how-desc en">Students work in teams, discuss, argue and solve problems together. No passive sitting.</p>
                </div>
              </div>
            </div>
            <div className="rev d2">
              <div className="how-step">
                <div className="how-num">04</div>
                <div>
                  <div className="how-title cs">Multimediální prezentace</div>
                  <div className="how-title en">Multimedia presentation</div>
                  <p className="how-desc cs">Vizuální, dynamický, moderní. Workshop je navržen pro generaci která vyrůstala s chytrými telefony.</p>
                  <p className="how-desc en">Visual, dynamic, modern. The workshop is designed for the generation that grew up with smartphones.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">05</div>
                <div>
                  <div className="how-title cs">Simulace a deepfake test</div>
                  <div className="how-title en">Simulations and deepfake test</div>
                  <p className="how-desc cs">Studenti testují své schopnosti poznat syntetický obsah a manipulaci v reálných ukázkách.</p>
                  <p className="how-desc en">Students test their ability to recognize synthetic content and manipulation in real examples.</p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">06</div>
                <div>
                  <div className="how-title cs">Diskuze a závěr</div>
                  <div className="how-title en">Discussion and conclusion</div>
                  <p className="how-desc cs">Workshop končí řízenou diskuzí kde studenti sdílejí názory a lektor odpovídá na otázky.</p>
                  <p className="how-desc en">The workshop ends with a structured discussion where students share views and the lecturer answers questions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec bg-bg">
        <div className="inner">
          <div className="about-2col grid grid-cols-2 items-start gap-[100px] max-lg:grid-cols-1 max-lg:gap-12 max-sm:gap-10">
            <div className="rev">
              <span className="sec-label cs">Pro školy</span>
              <span className="sec-label en">For schools</span>
              <h2 className="sec-title mb-8">
                <span className="cs">Přijedeme přímo <em>k vám.</em></span>
                <span className="en">We come <em>directly to you.</em></span>
              </h2>
              <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">Workshop přizpůsobujeme věku studentů, tématu které školu zajímá a časovým možnostem. Jsme flexibilní. Funguje to pro třídy, skupiny i celé ročníky.</p>
              <p className="en mb-5 text-base leading-[1.85] font-light text-mid">We adapt the workshop to the age of students, the topic the school is interested in and time constraints. We are flexible. It works for classes, groups and entire year groups.</p>
              <p className="cs text-base leading-[1.85] font-light text-mid">Pro partnerské školy je workshop zcela zdarma. Dlouhodobá spolupráce vítaná.</p>
              <p className="en text-base leading-[1.85] font-light text-mid">For partner schools the workshop is completely free. Long-term cooperation is welcome.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/join" className="btn-p cs">Objednat workshop &rarr;</Link>
                <Link to="/join" className="btn-p en">Order workshop &rarr;</Link>
              </div>
            </div>
            <div className="rev d2 flex flex-col gap-px bg-light">
              {/* FREE */}
              <div className="flex items-center gap-5 bg-bg2 px-7 py-5 max-sm:px-5 max-sm:py-4">
                <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-light bg-bg text-mid">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <circle cx="8" cy="8" r="6.5"/>
                    <path d="M5.5 8.5l1.8 1.8 3.5-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent opacity-70 mb-0.5">// FREE</div>
                  <span className="cs text-[14px] font-normal text-dark">Workshopy zdarma pro partnerské školy</span>
                  <span className="en text-[14px] font-normal text-dark">Free workshops for partner schools</span>
                </div>
              </div>
              {/* ADAPT */}
              <div className="flex items-center gap-5 bg-bg2 px-7 py-5 max-sm:px-5 max-sm:py-4">
                <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-light bg-bg text-mid">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M2 5h3M9 5h5M5 3v4M2 11h5M11 11h3M7 9v4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent opacity-70 mb-0.5">// ADAPT</div>
                  <span className="cs text-[14px] font-normal text-dark">Přizpůsobený obsah pro každý věk</span>
                  <span className="en text-[14px] font-normal text-dark">Adapted content for every age group</span>
                </div>
              </div>
              {/* FLEX */}
              <div className="flex items-center gap-5 bg-bg2 px-7 py-5 max-sm:px-5 max-sm:py-4">
                <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-light bg-bg text-mid">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <rect x="2" y="2.5" width="12" height="11" rx="1.5"/>
                    <path d="M2 6.5h12M5.5 1v3M10.5 1v3" strokeLinecap="round"/>
                    <path d="M4.5 9.5h2M8 9.5h3.5M4.5 12h4" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent opacity-70 mb-0.5">// FLEX</div>
                  <span className="cs text-[14px] font-normal text-dark">Flexibilní časový formát</span>
                  <span className="en text-[14px] font-normal text-dark">Flexible time format</span>
                </div>
              </div>
              {/* ON-SITE */}
              <div className="flex items-center gap-5 bg-bg2 px-7 py-5 max-sm:px-5 max-sm:py-4">
                <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-light bg-bg text-mid">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M8 14.5S2.5 9.5 2.5 6a5.5 5.5 0 0111 0c0 3.5-5.5 8.5-5.5 8.5z" strokeLinejoin="round"/>
                    <circle cx="8" cy="6" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent opacity-70 mb-0.5">// ON-SITE</div>
                  <span className="cs text-[14px] font-normal text-dark">Přímo na vaší škole</span>
                  <span className="en text-[14px] font-normal text-dark">Directly at your school</span>
                </div>
              </div>
              {/* PARTNER */}
              <div className="flex items-center gap-5 bg-bg2 px-7 py-5 max-sm:px-5 max-sm:py-4">
                <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-light bg-bg text-mid">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <circle cx="3.5" cy="8" r="2"/>
                    <circle cx="12.5" cy="8" r="2"/>
                    <path d="M5.5 8h5" strokeLinecap="round"/>
                    <circle cx="3.5" cy="3" r="1.5"/>
                    <circle cx="12.5" cy="3" r="1.5"/>
                    <path d="M3.5 4.5v1.5M12.5 4.5v1.5" strokeLinecap="round" opacity="0.5"/>
                    <circle cx="3.5" cy="13" r="1.5"/>
                    <circle cx="12.5" cy="13" r="1.5"/>
                    <path d="M3.5 10v1.5M12.5 10v1.5" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent opacity-70 mb-0.5">// PARTNER</div>
                  <span className="cs text-[14px] font-normal text-dark">Dlouhodobá partnerská spolupráce</span>
                  <span className="en text-[14px] font-normal text-dark">Long-term partnership cooperation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec bg-bg2">
        <div className="inner">
          <span className="sec-label rev cs">Mezinárodní rozměr</span>
          <span className="sec-label rev en">International dimension</span>
          <h2 className="sec-title rev">
            <span className="cs">Střední Evropa jako <em>výchozí bod.</em></span>
            <span className="en">Central Europe as <em>the starting point.</em></span>
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-px bg-light max-lg:grid-cols-2 max-[480px]:grid-cols-1">
            <div className="rev d1 bg-bg2 px-10 py-12 max-sm:px-6 max-sm:py-8">
              <div className="mb-5">
                <svg viewBox="0 0 30 20" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="20" fill="#003399"/>
                  {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
                    const a = (deg-90)*Math.PI/180;
                    return <circle key={i} cx={15+5.5*Math.cos(a)} cy={10+5.5*Math.sin(a)} r="0.75" fill="#FFCC00"/>;
                  })}
                </svg>
              </div>
              <h3 className="cs mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">Region střední Evropy</h3>
              <h3 className="en mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">Central European region</h3>
              <p className="cs text-sm leading-[1.75] font-light text-mid">Workshopy jsou přizpůsobené kontextu střední Evropy: její historii, mediálnímu prostředí a digitálním výzvám regionu.</p>
              <p className="en text-sm leading-[1.75] font-light text-mid">Workshops are tailored to the Central European context: its history, media environment and digital challenges of the region.</p>
            </div>
            <div className="rev d2 bg-bg2 px-10 py-12 max-sm:px-6 max-sm:py-8">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">Exchange</div>
              <h3 className="cs mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">Mezinárodní výměna mládeže</h3>
              <h3 className="en mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">Youth exchange</h3>
              <p className="cs text-sm leading-[1.75] font-light text-mid">Propojujeme studenty a školy z různých zemí CEE. Sdílení zkusenosti a budování mezinárodních kontaktů.</p>
              <p className="en text-sm leading-[1.75] font-light text-mid">We connect students and schools from different CEE countries. Sharing experiences and building international contacts.</p>
            </div>
            <div className="rev d3 bg-bg2 px-10 py-12 max-sm:px-6 max-sm:py-8">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] text-accent uppercase">Vision</div>
              <h3 className="cs mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">Evropský dialog</h3>
              <h3 className="en mb-3.5 text-xl font-semibold tracking-[-0.4px] text-dark">European dialogue</h3>
              <p className="cs text-sm leading-[1.75] font-light text-mid">Cílem je síť škol a organizací, které sdílejí hodnoty digitální gramotnosti a kritického myšlení napříč Evropou.</p>
              <p className="en text-sm leading-[1.75] font-light text-mid">The goal is a network of schools and organizations that share the values of digital literacy and critical thinking across Europe.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="sec bg-bg2">
        <div className="inner about-2col grid grid-cols-2 items-center gap-[100px] max-lg:grid-cols-1 max-lg:gap-12 max-lg:items-start max-sm:gap-10">
          <div className="rev">
            <span className="sec-label cs text-accent">Dlouhodobá vize</span>
            <span className="sec-label en text-accent">Long-term vision</span>
            <h2 className="mt-4 mb-7 text-[clamp(36px,4.5vw,64px)] leading-[1.05] font-bold tracking-[-2px] text-dark">
              <span className="cs">Síť škol. <em className="italic font-light text-mid">Celá Evropa.</em></span>
              <span className="en">A network of schools. <em className="italic font-light text-mid">All of Europe.</em></span>
            </h2>
            <p className="cs mb-[18px] text-base leading-[1.85] font-light text-mid">Naším cílem je vybudovat dlouhodobý edukační program který propájčí školy, studenty a organizace napříč střední Evropou.</p>
            <p className="en mb-[18px] text-base leading-[1.85] font-light text-mid">Our goal is to build a long-term educational program that connects schools, students and organizations across Central Europe.</p>
            <p className="cs text-base leading-[1.85] font-light text-mid">Neslibujeme co nemůžeme dodržet. Stavíme program krok po kroku. Každý workshop je dalším krokem.</p>
            <p className="en text-base leading-[1.85] font-light text-mid">We don't promise what we can't deliver. We build it step by step. Every workshop is another step forward.</p>
          </div>
          <div className="rev d2 flex flex-col gap-2.5">
            {/* Cyber step badges — no hover, static */}
            <div className="flex items-start gap-5 border border-light bg-bg px-7 py-6 max-sm:px-5 max-sm:py-5">
              <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase mt-0.5 shrink-0">// 01</div>
              <span className="cs text-sm font-light text-dark">Síť partnerských škol v JMK a celé ČR</span>
              <span className="en text-sm font-light text-dark">Network of partner schools in JMK and across CZ</span>
            </div>
            <div className="flex items-start gap-5 border border-light bg-bg px-7 py-6 max-sm:px-5 max-sm:py-5">
              <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase mt-0.5 shrink-0">// 02</div>
              <span className="cs text-sm font-light text-dark">Rozsíření do zemí CEE: Slovensko, Polsko a dál</span>
              <span className="en text-sm font-light text-dark">Expansion to CEE countries: Slovakia, Poland and beyond</span>
            </div>
            <div className="flex items-start gap-5 border border-light bg-bg px-7 py-6 max-sm:px-5 max-sm:py-5">
              <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase mt-0.5 shrink-0">// 03</div>
              <span className="cs text-sm font-light text-dark">Vzdělávací materiály a online platforma</span>
              <span className="en text-sm font-light text-dark">Educational materials and online platform</span>
            </div>
          </div>
        </div>
      </section>


      <section className="sec bg-bg text-center">
        <div className="inner mx-auto max-w-[700px]">
          <h2 className="rev cs mb-6 text-[clamp(40px,5.5vw,80px)] leading-none font-extrabold tracking-[-3px] text-dark">Objednejte workshop.</h2>
          <h2 className="rev en mb-6 text-[clamp(40px,5.5vw,80px)] leading-none font-extrabold tracking-[-3px] text-dark">Order a workshop.</h2>
          <p className="rev d1 cs mb-10 text-[17px] leading-[1.8] font-light text-mid">Pro školy zdarma. Napište nám zprávu a domluvíme se na termínu.</p>
          <p className="rev d1 en mb-10 text-[17px] leading-[1.8] font-light text-mid">Free for schools. Send us a message and we'll arrange the dates.</p>
          <div className="rev d2 flex flex-wrap justify-center gap-3">
            <Link to="/join" className="btn-p cs">Objednat &rarr;</Link>
            <Link to="/join" className="btn-p en">Order &rarr;</Link>
            <a href="mailto:" className="btn-g cs">Napište nám</a>
            <a href="mailto:" className="btn-g en">Email us</a>
          </div>
        </div>
      </section>
      <div className="ticker-wrap-outer"><div className="ticker-inner" id="ticker">
        <div className="ticker-item cs">CTRL Workshopy</div><div className="ticker-item en">CTRL Workshops</div>
        <div className="ticker-item cs">AI a každodenní život</div><div className="ticker-item en">AI & Everyday Life</div>
        <div className="ticker-item cs">Mediální gramotnost</div><div className="ticker-item en">Media Literacy</div>
        <div className="ticker-item cs">Deepfaky</div><div className="ticker-item en">Deepfakes</div>
        <div className="ticker-item cs">Kritické myšlení</div><div className="ticker-item en">Critical Thinking</div>
        <div className="ticker-item cs">Digitální bezpečnost</div><div className="ticker-item en">Digital Safety</div>
        <div className="ticker-item cs">Zdarma pro školy</div><div className="ticker-item en">Free for schools</div>
        <div className="ticker-item">CTRL Europe</div>
      </div></div>

    </>
  );
}
