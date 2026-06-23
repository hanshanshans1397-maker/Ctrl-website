import { Link } from 'react-router-dom';

export function AboutPageContent() {
  return (
    <>
      <section className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start" id="hero">
        {/* PŮVODNÍ HERO POZADÍ (desktop) — odkomentuj pro návrat k fotce:
        <img src="/photos/ClenskyProjektClenove.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0 max-sm:hidden" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.92)_0%,rgba(11,16,32,0.58)_50%,rgba(11,16,32,0.2)_100%)] max-sm:hidden" aria-hidden="true" />
        */}

        {/* Mobile split: title overlay (bez fotky v pozadí) */}
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          {/* PŮVODNÍ MOBILE POZADÍ — odkomentuj spolu s h-[50vh] na rodiči:
          <img src="/photos/ClenskyProjektClenove.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.96)_0%,rgba(11,16,32,0.72)_45%,rgba(11,16,32,0.38)_100%)]" aria-hidden="true" />
          */}
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-2">Kdo jsme</span>
            <div className="flex flex-col text-[clamp(42px,11vw,58px)] font-extrabold leading-[0.95] tracking-[-2px] text-bg">
              <span className="cs">O nás</span>
              <span className="en">About us</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:px-5 max-sm:max-w-full">
          <div className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden" id="heroMeta">
            <span className="text-xl text-accent">Kdo jsme</span>
          </div>

          <h1 className="mb-12 text-[clamp(72px,10vw,160px)] leading-[0.92] font-extrabold tracking-[-5px] text-bg opacity-0 translate-y-6 max-lg:text-[clamp(52px,8vw,100px)] max-lg:tracking-[-2px] max-[640px]:mb-8 max-[640px]:text-[clamp(44px,10vw,72px)] max-[640px]:tracking-[-1.5px] max-[480px]:text-[clamp(40px,11vw,60px)] max-[480px]:tracking-[-1px] max-sm:hidden" id="heroTitle">
            <span className="cs block">O nás</span>
            <span className="en block">About us</span>
          </h1>

          <div className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5" id="heroBottom">
            <p className="cs max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">Nezávislá youth platforma pro střední Evropu. Vzděláváme, propojujeme a budujeme digitální odolnost nové generace.</p>
            <p className="en max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">An independent youth platform for Central Europe. We educate, connect and build digital resilience for the next generation.</p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full max-[480px]:gap-2">
              <Link to="/apply" className="btn-p cs">
                Zapojit se &rarr;
              </Link>
              <Link to="/apply" className="btn-p en">
                Get involved &rarr;
              </Link>
              <a href="#about-team" className="btn-g light cs">
                Náš tým
              </a>
              <a href="#about-team" className="btn-g light en">
                Our team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Proč CTRL existuje</span>
              <span className="en">Why CTRL exists</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Technologie mění společnost rychleji než ji umíme vysvětlit.</span>
              <span className="en">Technology is changing society faster than we can explain it.</span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Umělá inteligence, deepfakes, dezinformace a algoritmická manipulace. To nejsou vzdálené problémy. Jsou součástí každodenního života každého studenta, každé školy, každé rodiny.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">Artificial intelligence, deepfakes, disinformation and algorithmic manipulation. These are not distant problems. They are part of the everyday life of every student, every school, every family.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Vzdělávací systémy na tuto změnu nestíhají reagovat. Osnovy vznikají roky dopředu. Technologie se mění každý měsíc. Mezi tím, co školy učí a tím, co mladí lidé skutečně potřebují vědět, roste propast.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">Education systems are not keeping up with this change. Curricula are developed years in advance. Technology changes every month. The gap between what schools teach and what young people actually need to know is growing.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">CTRL Europe tuto propast překlenžuje. Ne akademicky. Prakticky. Přímo tam, kde mladí lidé jsou.</strong></p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">CTRL Europe bridges this gap. Not academically. Practically. Directly where young people are.</strong></p>
              </div>
            </div>
            <div className="rev d2 flex flex-col gap-px bg-light">
              <div className="py-8 px-9 border-b border-light bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">Založeno</div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">Founded</div>
                <div className="text-xl font-semibold text-dark">2025, Brno</div>
              </div>
              <div className="py-8 px-9 border-b border-light bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">Aktivních členů</div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">Active members</div>
                <div className="text-xl font-semibold text-accent">621+</div>
              </div>
              <div className="py-8 px-9 border-b border-light bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">Jazyků v týmu</div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">Languages in team</div>
                <div className="text-xl font-semibold text-dark">9+</div>
              </div>
              <div className="py-8 px-9 bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">Region</div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">Region</div>
                <div className="text-xl font-semibold text-dark">CEE</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Kdo jsme</span>
              <span className="en">Who we are</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Nezávislá, <em>student-led</em> organizace.</span>
              <span className="en">An independent, <em>student-led</em> organization.</span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">CTRL Europe je nezávislá studentská organizace a youth platforma se sídlem v Brně. Vznikla v roce 2025 z iniciativy studentů ve věku 16–19 let ze střední Evropy.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">CTRL Europe is an independent student organization and youth platform based in Brno. It was founded in 2025 on the initiative of students aged 16–19 from Central Europe.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Jsme student-led organizace. To znamená, že rozhodujeme, organizujeme a realizujeme sami. Bez čekání na instituce nebo granty.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">We are a student-led organization. That means we decide, organize and execute ourselves. Without waiting for institutions or grants.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Zaměřujeme se na střední a východní Evropu. Jde o region se specifickým historickým kontextem, vlastními výzvami a vlastními příležitostmi. Věříme, že digitální gramotnost a kritické myšlení jsou pro tuto část Evropy obzvlášť důležité.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">We focus on Central and Eastern Europe. It is a region with a specific historical context, its own challenges and its own opportunities. We believe digital literacy and critical thinking are especially important for this part of Europe.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Nejsme aktivistická organizace. Nejsme politická platforma. Jsme vzdělávací a výzkumná youth organizace s mezinárodními ambicemi.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">We are not an activist organization. We are not a political platform. We are an educational and research youth organization with international ambitions.</p>
              </div>
            </div>
            <div className="rev d2">
              <div className="flex flex-col gap-px bg-light">
                <div className="bg-bg2 py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">Nezávislá studentská organizace</span>
                  <span className="text-[15px] font-normal text-dark en">Independent student organization</span>
                </div>
                <div className="bg-bg2 py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">Vícejázyčný tým ze CEE</span>
                  <span className="text-[15px] font-normal text-dark en">Multilingual team from CEE</span>
                </div>
                <div className="bg-bg2 py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">Vzdělávací a výzkumná orientace</span>
                  <span className="text-[15px] font-normal text-dark en">Educational and research focus</span>
                </div>
                <div className="bg-bg2 py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">Mezinárodní ambice</span>
                  <span className="text-[15px] font-normal text-dark en">International ambitions</span>
                </div>
                <div className="bg-bg2 py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">Registrovaný spolek v ČR</span>
                  <span className="text-[15px] font-normal text-dark en">Registered association in CZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Co děláme</span>
              <span className="en">What we do</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Pět oblastí. <em>Jeden cíl.</em></span>
              <span className="en">Five areas. <em>One goal.</em></span>
            </h2>
          </div>
          <div className="flex flex-col gap-px bg-light">
            <div className="rev d1 bg-bg2 py-[52px] px-11 grid grid-cols-[120px_1fr] gap-12 items-start max-[480px]:grid-cols-1 max-[480px]:gap-6">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1"><span className="cs">01 Výzkum</span><span className="en">01 Research</span></div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs">Výzkum</h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en">Research</h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs">Analyzujeme digitální hrozby v kontextu střední Evropy. Zkoumáme vliv dezinformací na mladé voliče, šíření deepfakes v mediálním prostoru a dopady algoritmické manipulace na politické názory. Naše výstupy jsou určeny pro školy, média, think tanky a evropské instituce.</p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en">We analyze digital threats in the context of Central Europe. We study the influence of disinformation on young voters, the spread of deepfakes in the media and the impact of algorithmic manipulation on political views. Our outputs are intended for schools, media, think tanks and European institutions.</p>
              </div>
            </div>
            <div className="rev d1 bg-bg py-[52px] px-11 grid grid-cols-[120px_1fr] gap-12 items-start max-[480px]:grid-cols-1 max-[480px]:gap-6">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1"><span className="cs">02 Vzdělávání</span><span className="en">02 Edu</span></div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs">Workshopy</h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en">Workshops</h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs">Přijíždíme na střední školy s 90minutovým interaktivním programem. Učíme studenty jak poznat deepfake, jak fungují doporučovací algoritmy, jak se šíří dezinformace a jak si udržet kritický pohled na digitální obsah. Program je zdarma pro všechny partnerské školy.</p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en">We come to secondary schools with a 90-minute interactive program. We teach students how to detect deepfakes, how recommendation algorithms work, how disinformation spreads and how to maintain a critical perspective on digital content. The program is free for all partner schools.</p>
              </div>
            </div>
            <div className="rev d1 bg-bg2 py-[52px] px-11 grid grid-cols-[120px_1fr] gap-12 items-start max-[480px]:grid-cols-1 max-[480px]:gap-6">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1"><span className="cs">03 Média</span><span className="en">03 Media</span></div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs">Média a podcasty</h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en">Media and podcasts</h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs">Podcast CTRL+ALT přináší rozhovory s experty, novináři a lidmi z evropských institucí. Témata: AI, mediální gramotnost, svoboda slova online, dezinformace a budoucnost demokracie. Tvoříme obsah který skutečně vzdělává. Na platformách kde mladí lidé jsou.</p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en">The CTRL+ALT podcast brings conversations with experts, journalists and people from European institutions. Topics: AI, media literacy, online freedom of speech, disinformation and the future of democracy. We create content that truly educates. On platforms where young people actually are.</p>
              </div>
            </div>
            <div className="rev d1 bg-bg py-[52px] px-11 grid grid-cols-[120px_1fr] gap-12 items-start max-[480px]:grid-cols-1 max-[480px]:gap-6">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1"><span className="cs">04 Mezinárodní</span><span className="en">04 Intl</span></div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs">Mezinárodní spolupráce</h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en">International cooperation</h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs">Budujeme partnerství se školami, organizacemi a institucemi v celém regionu CEE. Připravujeme youth exchange programy, mezinárodní stáže a společné výzkumné projekty. Naším cílem je propojit mladou generaci střední Evropy kolem sdílených hodnot.</p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en">We are building partnerships with schools, organizations and institutions throughout the CEE region. We are preparing youth exchange programs, international internships and joint research projects. Our goal is to connect the young generation of Central Europe around shared values.</p>
              </div>
            </div>
            <div className="rev d1 bg-bg2 py-[52px] px-11 grid grid-cols-[120px_1fr] gap-12 items-start max-[480px]:grid-cols-1 max-[480px]:gap-6">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1"><span className="cs">05 Akce</span><span className="en">05 Events</span></div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs">Konference a summity</h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en">Conferences and summits</h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs">CTRL Summit 2026 bude první mezinárodní konferencí CTRL Europe. Brno, jaro 2026. Keynotes, panelové diskuze, workshopy. Místo kde se setkává mladá středoevropská generace a buduje společnou odpověď na digitální výzvy současnosti.</p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en">CTRL Summit 2026 will be the first international CTRL Europe conference. Brno, spring 2026. Keynotes, panel discussions, workshops. Where the young Central European generation meets and builds a common response to today's digital challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg" id="about-team">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Zakladatel</span>
              <span className="en">Founder</span>
            </span>
            <h2 className="section-title">Jan Krejčí</h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-12 lg:grid-cols-[400px_1fr]">
            <div className="rev">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img src="/IMG_4222.jpeg" alt="Jan Krejčí" className="w-full h-full object-cover object-[center_8%] block"  loading="lazy" decoding="async" />
                <div className="absolute bottom-0 left-0 right-0 py-3 px-5 bg-[rgba(245,245,243,0.85)]">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid">Jan Krejčí, 2025</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between py-3 border-b border-light">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">Role</div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">Role</div>
                  <div className="text-[13px] font-medium text-dark cs">Prezident & Zakladatel</div>
                  <div className="text-[13px] font-medium text-dark en">President & Founder</div>
                </div>
                <div className="flex justify-between py-3 border-b border-light">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">Věk</div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">Age</div>
                  <div className="text-[13px] font-medium text-dark">17</div>
                </div>
                <div className="flex justify-between py-3 border-b border-light">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">Působiště</div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">Base</div>
                  <div className="text-[13px] font-medium text-dark">Brno, CZ</div>
                </div>
              </div>
            </div>
            <div className="rev d2">
              <div className="text-xl text-accent mb-10 cs">Prezident & Zakladatel CTRL Europe</div>
              <div className="text-xl text-accent mb-10 en">President & Founder of CTRL Europe</div>
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">CTRL Europe jsem nezaložil jako školní projekt. Založil jsem ho protože vidím skutečný problém a věřím, že naše generace ho musí řešit sama.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">I didn't start CTRL Europe as a school project. I started it because I see a real problem, and because I believe our generation has to solve it ourselves.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Jsem sedmnáctiletý student IT na Střední škole informatiky, poštovnictví a finančnictví v Brně. Od málí mě zajímá průsečík technologií, politiky a společnosti. Vidím jak digitální manipulace ovlivňuje demokratické procesy. A jak málo se o tom mluví tam, kde by se mluvit mělo.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">I am a seventeen-year-old IT student at the Secondary School of Informatics, Posts and Finance in Brno. Since childhood I have been interested in the intersection of technology, politics and society. I see how digital manipulation influences democratic processes. And how little is said about it where it should be said.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Věřím, že digitální gramotnost není volitelný předmět. Je to základní kompetence pro život ve svobodné společnosti. A věřím, že první generace, která vyrůstá plně uvnitř digitálních systémů. Naše generace má unikátní perspektivu a odpovědnost tuto situaci změnit.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">I believe digital literacy is not an optional subject. It is a fundamental competence for life in a free society. And I believe that the first generation growing up fully inside digital systems. Our generation has a unique perspective and responsibility to change this situation.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">CTRL Europe není můj jediný projekt. Ale je nejdůležitější. Protože záleží na více než jen na mně.</strong></p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">CTRL Europe is not my only project. But it is the most important one. Because it matters beyond just me.</strong></p>
              </div>
              <div className="mt-12 pt-10 border-t border-light">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-5 cs">Ocenění a projekty</div>
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-5 en">Awards and projects</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Absolvent kurzu v oblasti AI, phishingu a kybernetických hrozeb</span><span className="en">Graduate of a course on AI, phishing and cyber threats</span></div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Účastník mezinárodních studentských politických debat a projektů</span><span className="en">Participant in international students' political debates and projects</span></div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Účastník česko-tchajwanského projektu zaměřeného na vzdělávání starší generace v oblasti digitálních hrozeb</span><span className="en">Participant in the Czech-Taiwanese project aimed at educating the older generation in the field of digital threats</span></div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Vítěz soutěže Den hejtmanem JMK 2025/2026</span><span className="en">Winner of Day as Governor, South Moravian Region 2025/2026</span></div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Vítěz krajského kola ENERSOL 2024</span><span className="en">Regional round ENERSOL 2024 winner</span></div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid"><div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div><span className="cs">Vítěz soutěže 35 let demokracie</span><span className="en">35 Years of Democracy competition winner</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Organizace</span>
              <span className="en">Structure</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Profesionální struktura. <em>Youth perspektiva.</em></span>
              <span className="en">Professional structure. <em>Youth perspective.</em></span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev d1">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">Předsednictvo</strong> tvoří čtyři členové: předseda, místopředseda, tajemnice a zástupce předsednictva. Předsednictvo rozhoduje o strategickém směřování organizace.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">The Executive Board</strong> consists of four members: president, vice president, secretary and board representative. The board decides on the strategic direction of the organization.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">Rada zástupců</strong> sdružuje vedoucí všech buněk. Každá buňka má vlastní agendu, vlastní projekty a přímé napojení na předsednictvo.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5"><strong className="text-dark font-medium">The Council of Representatives</strong> brings together the leaders of all cells. Each cell has its own agenda, its own projects and a direct connection to the board.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Celkem 41 aktivních členů. Vícejázyčný tým. Střední Evropa jako výchozí bod. Evropa jako cíl.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">41 active members in total. Multilingual team. Central Europe as the starting point. Europe as the goal.</p>
              </div>
            </div>
            <div className="rev d2 flex flex-col gap-px bg-light">
              <div className="py-5 px-7 bg-accent/[0.08] border-l-[3px] border-accent">
                <div className="text-sm font-semibold text-dark cs">Předsednictvo</div>
                <div className="text-sm font-semibold text-dark en">Executive Board</div>
                <div className="text-xs font-light text-mid mt-[3px]">Jan Krejčí &bull; Jakub Rašovský &bull; Alena Marková &bull; Bety Fritzová</div>
              </div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">PR a komunikace: Jakub Rašovský</div><div className="text-[13px] font-normal text-mid en">PR & Communications: Jakub Rašovský</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Sociální sítě: Jiří Vítek</div><div className="text-[13px] font-normal text-mid en">Social Media: Jiří Vítek</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Podcast: Marek Roušar</div><div className="text-[13px] font-normal text-mid en">Podcast: Marek Roušar</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Výzkum: Pavel Klusák</div><div className="text-[13px] font-normal text-mid en">Research: Pavel Klusák</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Grafika: Zdeněk Frőmel</div><div className="text-[13px] font-normal text-mid en">Graphics: Zdeněk Frőmel</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Video: Lukáš Holec</div><div className="text-[13px] font-normal text-mid en">Video: Lukáš Holec</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Mezinárodní: Laith Awad</div><div className="text-[13px] font-normal text-mid en">International: Laith Awad</div></div>
              <div className="py-[18px] px-7 bg-bg"><div className="text-[13px] font-normal text-mid cs">Eventy: Vojtěch Kubín</div><div className="text-[13px] font-normal text-mid en">Events: Vojtěch Kubín</div></div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Dlouhodobá vize</span>
              <span className="en">Long-term vision</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Budujeme něco co <em>přetrvá.</em></span>
              <span className="en">Building something <em>that lasts.</em></span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Naším cílem je vybudovat udržitelnou evropskou youth platformu zaměřenou na digitální gramotnost, výzkum a mezinárodní spolupráci.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">Our goal is to build a sustainable European youth platform focused on digital literacy, research and international cooperation.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">V horizontu pěti let chceme být přítomni ve více zemích střední Evropy, mít funkční síť partnerských škol a organizací, produkovat výzkum který je citován a používán, a organizovat každoroční mezinárodní summit který je relevantní pro tvůrce politik i pro studenty.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">Within five years we want to be present in multiple Central European countries, have a functioning network of partner schools and organizations, produce research that is cited and used, and organize an annual international summit relevant to both policymakers and students.</p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">Neslibujeme revoluci. Slibujeme poctivé práci na problému který je skutečný a který dlouhodobě záleží.</p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">We don't promise revolution. We promise honest work on a problem that is real and that matters in the long term.</p>
              </div>
            </div>
            <div className="val-grid grid grid-cols-3 gap-px bg-light mt-0 self-start max-lg:grid-cols-2 max-[480px]:grid-cols-1">
              <div className="val-card rev d1 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Kritické myšlení</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Critical thinking</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Klademe otázky. Ověřujeme zdroje. Nepřijímáme zjednodušení.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">We ask questions. We verify sources. We don't accept oversimplification.</p>
              </div>
              <div className="val-card rev d2 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Odpovědnost</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Responsibility</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Za naše výstupy, za naše závazky, za organizaci jako celek.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">For our outputs, our commitments, the organization as a whole.</p>
              </div>
              <div className="val-card rev d3 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Mezinárodní spolupráce</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">International cooperation</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Problémy digitální doby nemájí hranice. Ani naše odpověď by je mít neměla.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">Problems of the digital age have no borders. Neither should our response.</p>
              </div>
              <div className="val-card rev d1 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Mediální gramotnost</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Media literacy</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Rozumět médiím znamená číst je s vědomím jak fungují.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">Understanding media means reading them with awareness of how they work.</p>
              </div>
              <div className="val-card rev d2 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Vedení mladých</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Youth leadership</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Zodpovědnost nezávisí na věku. Závisí na odhodlání.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">Responsibility doesn't depend on age. It depends on commitment.</p>
              </div>
              <div className="val-card rev d3 bg-bg2 py-11 px-9">
                <div className="val-title cs text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Preciznost</div>
                <div className="val-title en text-[17px] font-semibold tracking-[-0.3px] mb-3 text-dark">Precision</div>
                <p className="val-desc cs text-sm font-light leading-[1.75] text-mid">Děláme méně věcí, ale děláme je dobře.</p>
                <p className="val-desc en text-sm font-light leading-[1.75] text-mid">We do fewer things, but we do them well.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Rada zástupců</span>
              <span className="en">Council of Representatives</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Vedoucí <em>buněk.</em></span>
              <span className="en">Cell <em>leaders.</em></span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-px bg-light max-lg:grid-cols-2 max-[480px]:grid-cols-1">
            <div className="rev d1 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">PR a komunikace</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">PR & Communications</div>
              <div className="text-[15px] font-semibold mb-1">Jakub Rašovský</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d1 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Sociální sítě</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Social Media</div>
              <div className="text-[15px] font-semibold mb-1">Jiří Vítek</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d2 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Podcast</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Podcast</div>
              <div className="text-[15px] font-semibold mb-1">Marek Roušar</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d2 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Výzkum</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Research</div>
              <div className="text-[15px] font-semibold mb-1">Pavel Klusák</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d3 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Grafika</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Graphics</div>
              <div className="text-[15px] font-semibold mb-1">Zdeněk Frőmel</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d3 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Video</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Video</div>
              <div className="text-[15px] font-semibold mb-1">Lukáš Holec</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d4 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Mezinárodní</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">International</div>
              <div className="text-[15px] font-semibold mb-1">Laith Awad</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
            <div className="rev d4 bg-bg2 py-8 px-7">
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 cs">Eventy</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-3 en">Events</div>
              <div className="text-[15px] font-semibold mb-1">Vojtěch Kubín</div>
              <div className="text-xs font-light text-mid cs">Vedoucí</div>
              <div className="text-xs font-light text-mid en">Lead</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2 text-center">
        <div className="inner max-w-[700px] mx-auto">
          <h2 className="rev cs text-[clamp(36px,5vw,72px)] font-extrabold leading-none tracking-[-2.5px] text-dark mb-6">Zapojte se.</h2>
          <h2 className="rev en text-[clamp(36px,5vw,72px)] font-extrabold leading-none tracking-[-2.5px] text-dark mb-6">Get involved.</h2>
          <p className="rev d1 cs text-[17px] font-light leading-[1.8] text-mid mb-10 max-w-[540px] mx-auto">Hledáme partnerské školy, organizace a instituce které chtějí být součástí toho co budujeme. Jsme tady.</p>
          <p className="rev d1 en text-[17px] font-light leading-[1.8] text-mid mb-10 max-w-[540px] mx-auto">We are looking for partner schools, organizations and institutions that want to be part of what we are building. We are here.</p>
          <div className="rev d2 flex gap-3 justify-center flex-wrap">
            <Link to="/join" className="btn-p cs">Napšte nám &rarr;</Link>
            <Link to="/join" className="btn-p en">Write to us &rarr;</Link>
          </div>
        </div>
      </section>
      <div className="ticker-wrap-outer border-t border-b border-light overflow-hidden py-[13px] bg-bg">
        <div className="ticker-inner flex animate-ticker whitespace-nowrap" id="ticker">
        <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">CTRL Europe</div><div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">CEE Youth Platform</div>
        <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Digitální odolnost</div><div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Digital Resilience</div>
        <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">CTRL Summit 2026</div>
        <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Erasmus+</div>
        <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">AI povědomí</div><div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">AI Awareness</div>
        <div className="ticker-item cs font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Mediální gramotnost</div><div className="ticker-item en font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Media Literacy</div>
        <div className="ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-11 whitespace-nowrap shrink-0 flex items-center gap-11">Brno</div>
      </div></div>
    </>
  );
}
