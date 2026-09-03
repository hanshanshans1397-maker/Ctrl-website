import { Link } from "react-router-dom";
import { AboutStructureAnimation } from "../../components/AboutStructureAnimation";
import { AlgorithmFeed } from "../../components/AlgorithmFeed";
import { BoardMemberCard } from "../../components/BoardMemberCard";
import { DisinfoGapChart } from "../../components/DisinfoGapChart";
import { FakeNewsQuiz } from "../../components/FakeNewsQuiz";
import { Flythrough } from "../../components/Flythrough";
import { NationalCoordinators } from "../../components/NationalCoordinators";
import { PartnersSection } from "../../components/PartnersSection";
import { TickerBar } from "../../components/TickerBar";
import {
  ADVISOR,
  BOARD_MEMBERS,
  BOARD_REST,
} from "../../data/leadership";

const CORE_VALUES = [
  {
    id: "01",
    titleCs: "Kritické myšlení",
    titleEn: "Critical thinking",
    descCs: "Klademe otázky. Ověřujeme zdroje. Nepřijímáme zjednodušení.",
    descEn:
      "We ask questions. We verify sources. We don't accept oversimplification.",
    delay: "d1",
  },
  {
    id: "02",
    titleCs: "Odpovědnost",
    titleEn: "Responsibility",
    descCs: "Za naše výstupy, za naše závazky, za organizaci jako celek.",
    descEn: "For our outputs, our commitments, the organization as a whole.",
    delay: "d2",
  },
  {
    id: "03",
    titleCs: "Mezinárodní spolupráce",
    titleEn: "International cooperation",
    descCs:
      "Problémy digitální doby nemají hranice. Ani naše odpověď by je mít neměla.",
    descEn:
      "Problems of the digital age have no borders. Neither should our response.",
    delay: "d3",
  },
  {
    id: "04",
    titleCs: "Mediální gramotnost",
    titleEn: "Media literacy",
    descCs: "Rozumět médiím znamená číst je s vědomím jak fungují.",
    descEn:
      "Understanding media means reading them with awareness of how they work.",
    delay: "d1",
  },
  {
    id: "05",
    titleCs: "Vedení mladých",
    titleEn: "Youth leadership",
    descCs: "Zodpovědnost nezávisí na věku. Závisí na odhodlání.",
    descEn: "Responsibility doesn't depend on age. It depends on commitment.",
    delay: "d2",
  },
  {
    id: "06",
    titleCs: "Preciznost",
    titleEn: "Precision",
    descCs: "Děláme méně věcí, ale děláme je dobře.",
    descEn: "We do fewer things, but we do them well.",
    delay: "d3",
  },
];

function StructureDirectoryRow({
  id,
  name,
  nameCs,
  nameEn,
  labelCs,
  labelEn,
}) {
  return (
    <div className="org-dir__row">
      {id ? <span className="org-dir__id">{id}</span> : null}
      <span className="org-dir__name">
        {nameCs || nameEn ? (
          <>
            <span className="cs">{nameCs || name}</span>
            <span className="en">{nameEn || name}</span>
          </>
        ) : (
          name
        )}
      </span>
      <span className="org-dir__role">
        <span className="cs">{labelCs}</span>
        <span className="en">{labelEn}</span>
      </span>
    </div>
  );
}

function BoardStructureBlock({ className = "" }) {
  return (
    <div className={`org-dir ${className}`}>
      <div className="org-dir__head">
        <span className="cs">Předsednictvo</span>
        <span className="en">Executive Board</span>
        <span className="org-dir__count">{BOARD_MEMBERS.length}</span>
      </div>
      {BOARD_MEMBERS.map((member) => (
        <StructureDirectoryRow
          key={member.id}
          name={member.name}
          labelCs={member.roleCs}
          labelEn={member.roleEn}
        />
      ))}
    </div>
  );
}

function LayersStructureBlock({ className = "" }) {
  return (
    <div className={`org-dir ${className}`}>
      <div className="org-dir__head">
        <span className="cs">Struktura</span>
        <span className="en">Structure</span>
        <span className="org-dir__count">3</span>
      </div>
      <StructureDirectoryRow
        id="01"
        nameCs="Předsednictvo"
        nameEn="Executive Board"
        labelCs="Strategie"
        labelEn="Strategy"
      />
      <StructureDirectoryRow
        id="02"
        name="Main Council"
        labelCs="Dominik Ševela"
        labelEn="Dominik Ševela"
      />
      <StructureDirectoryRow
        id="03"
        name="National Teams"
        labelCs="Koordinátoři"
        labelEn="Coordinators"
      />
    </div>
  );
}

export function AboutPageContent() {
  return (
    <>
      <section
        className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start"
        id="hero"
      >
        {/* PŮVODNÍ HERO POZADÍ (desktop) — odkomentuj pro návrat k fotce:
        <img src="/photos/ClenskyProjektClenove.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0 max-sm:hidden" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.92)_0%,rgba(11,16,32,0.58)_50%,rgba(11,16,32,0.2)_100%)] max-sm:hidden" aria-hidden="true" />
        */}

        {/* Mobile split: title overlay (bez fotky v pozadí) */}
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          {/* PŮVODNÍ MOBILE POZADÍ — odkomentuj spolu s h-[50vh] na rodiči:
          <img src="/photos/ClenskyProjektClenove.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" decoding="async" />
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
          <div
            className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden"
            id="heroMeta"
          >
            <span className="text-xl text-accent">Kdo jsme</span>
          </div>

          <h1
            className="mb-12 text-[clamp(72px,10vw,160px)] leading-[0.92] font-extrabold tracking-[-5px] text-bg opacity-0 translate-y-6 max-lg:text-[clamp(52px,8vw,100px)] max-lg:tracking-[-2px] max-[640px]:mb-8 max-[640px]:text-[clamp(44px,10vw,72px)] max-[640px]:tracking-[-1.5px] max-[480px]:text-[clamp(40px,11vw,60px)] max-[480px]:tracking-[-1px] max-sm:hidden"
            id="heroTitle"
          >
            <span className="cs block">O nás</span>
            <span className="en block">About us</span>
          </h1>

          <div
            className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5"
            id="heroBottom"
          >
            <p className="cs max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">
              Nezávislá youth platforma pro střední Evropu. Vzděláváme,
              propojujeme a budujeme digitální odolnost nové generace.
            </p>
            <p className="en max-w-[480px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.7)] max-sm:text-[15px]">
              An independent youth platform for Central Europe. We educate,
              connect and build digital resilience for the next generation.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full max-[480px]:gap-2">
              <Link
                to="/apply"
                className="btn-p cs inline-flex items-center gap-2 border-none bg-bg px-7 py-3.5 text-[13px] font-semibold tracking-wide text-dark no-underline transition-[background-color,color] duration-250 hover:bg-accent hover:text-bg max-sm:px-5 max-sm:py-3 max-sm:text-xs"
              >
                Zapojit se &rarr;
              </Link>
              <Link
                to="/apply"
                className="btn-p en inline-flex items-center gap-2 border-none bg-bg px-7 py-3.5 text-[13px] font-semibold tracking-wide text-dark no-underline transition-[background-color,color] duration-250 hover:bg-accent hover:text-bg max-sm:px-5 max-sm:py-3 max-sm:text-xs"
              >
                Get involved &rarr;
              </Link>
              <a
                href="#about-team"
                className="btn-g light cs inline-flex items-center gap-2 border border-[rgba(245,245,243,0.35)] bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-wide text-bg no-underline transition-[background-color,border-color] duration-250 hover:border-[rgba(245,245,243,0.7)] hover:bg-[rgba(245,245,243,0.08)] max-sm:px-5 max-sm:py-3 max-sm:text-xs"
              >
                Náš tým
              </a>
              <a
                href="#about-team"
                className="btn-g light en inline-flex items-center gap-2 border border-[rgba(245,245,243,0.35)] bg-transparent px-7 py-3.5 text-[13px] font-medium tracking-wide text-bg no-underline transition-[background-color,border-color] duration-250 hover:border-[rgba(245,245,243,0.7)] hover:bg-[rgba(245,245,243,0.08)] max-sm:px-5 max-sm:py-3 max-sm:text-xs"
              >
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
              <span className="cs">
                Technologie mění společnost rychleji než ji umíme vysvětlit.
              </span>
              <span className="en">
                Technology is changing society faster than we can explain it.
              </span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Umělá inteligence, deepfakes, dezinformace a algoritmická
                  manipulace. To nejsou vzdálené problémy. Jsou součástí
                  každodenního života každého studenta, každé školy, každé
                  rodiny.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  Artificial intelligence, deepfakes, disinformation and
                  algorithmic manipulation. These are not distant problems. They
                  are part of the everyday life of every student, every school,
                  every family.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Vzdělávací systémy na tuto změnu nestíhají reagovat. Osnovy
                  vznikají roky dopředu. Technologie se mění každý měsíc. Mezi
                  tím, co školy učí a tím, co mladí lidé skutečně potřebují
                  vědět, roste propast.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  Education systems are not keeping up with this change.
                  Curricula are developed years in advance. Technology changes
                  every month. The gap between what schools teach and what young
                  people actually need to know is growing.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  <strong className="text-dark font-medium">
                    CTRL Europe tuto propast překlenžuje. Ne akademicky.
                    Prakticky. Přímo tam, kde mladí lidé jsou.
                  </strong>
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  <strong className="text-dark font-medium">
                    CTRL Europe bridges this gap. Not academically. Practically.
                    Directly where young people are.
                  </strong>
                </p>
              </div>
            </div>
            <div className="rev d2 flex flex-col sep-stack">
              <div className="py-8 px-9 border-b border-separator bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">
                  Založeno
                </div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">
                  Founded
                </div>
                <div className="text-xl font-semibold text-dark">
                  2025, Brno
                </div>
              </div>
              <div className="py-8 px-9 border-b border-separator bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">
                  Studentů v CEE
                </div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">
                  Students in CEE
                </div>
                <div className="text-xl font-semibold text-accent">621+</div>
              </div>
              <div className="py-8 px-9 border-b border-separator bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">
                  Jazyků v týmu
                </div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">
                  Languages in team
                </div>
                <div className="text-xl font-semibold text-dark">9+</div>
              </div>
              <div className="py-8 px-9 bg-bg">
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 cs">
                  Region
                </div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-mid mb-2.5 en">
                  Region
                </div>
                <div className="text-xl font-semibold text-dark">
                  <span className="cs">Střední Evropa</span>
                  <span className="en">Central Europe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2"
        id="about-literacy"
      >
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev mb-14 max-lg:mb-10">
            <span className="section-label">
              <span className="cs">Vyzkoušejte si to</span>
              <span className="en">Try it yourself</span>
            </span>
            <h2 className="section-title italic">
              <span className="cs">
                Ta propast <em>není abstraktní.</em>
              </span>
              <span className="en">
                That gap <em>is not abstract.</em>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            <div className="rev d1">
              <p className="mb-8 max-w-[400px] text-[15px] leading-[1.8] font-light text-mid">
                <span className="cs">
                  Tohle je přesně ten typ zprávy, který na workshopech
                  rozebíráme se studenty. Zkuste si sami, jestli poznáte, co je
                  smyšlené — a proč.
                </span>
                <span className="en">
                  This is exactly the kind of message we take apart with
                  students in our workshops. See for yourself whether you can
                  tell what is fabricated — and why.
                </span>
              </p>
              <FakeNewsQuiz />
            </div>
            <div className="rev d2 lg:pt-[4.75rem]">
              <p className="mb-8 max-w-[440px] text-[15px] leading-[1.8] font-light text-mid">
                <span className="cs">
                  76&nbsp;% mladých Evropanů se s dezinformacemi setkalo jen
                  za poslední týden. Takhle často — a přesně tady začínají naše
                  workshopy.
                </span>
                <span className="en">
                  76% of young Europeans encountered disinformation in the past
                  week alone. This is how often — and this is where our
                  workshops start.
                </span>
              </p>
              <DisinfoGapChart />
            </div>
          </div>
          <div className="rev d3 mt-20 border-t border-separator pt-16 max-lg:mt-14 max-lg:pt-12">
            <p className="mb-8 max-w-[540px] text-[15px] leading-[1.8] font-light text-mid">
              <span className="cs">
                A pak je tu ještě něco, co se ve škole skoro neučí: doporučovací
                algoritmus. Tři kliknutí. Podívejte se, co udělají s feedem.
              </span>
              <span className="en">
                And then there is something schools barely teach: the
                recommendation algorithm. Three taps. Watch what they do to a
                feed.
              </span>
            </p>
            <AlgorithmFeed />
          </div>
        </div>
      </section>

      <Flythrough variant="signal" />

      <section className="sec py-16 px-[52px] max-lg:py-14 max-lg:px-6 max-[480px]:py-12 max-[480px]:px-5 bg-dark">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev mb-10 max-lg:mb-8">
            <span className="section-label">
              <span className="cs">V akci</span>
              <span className="en">In action</span>
            </span>
            <h2 className="section-title italic !text-bg [&_em]:!text-[rgba(245,245,243,0.45)]">
              <span className="cs">
                Přímo tam, <em>kde mladí lidé jsou.</em>
              </span>
              <span className="en">
                Directly where <em>young people are.</em>
              </span>
            </h2>
          </div>
          <div className="photo-strip grid grid-cols-3 gap-3 max-lg:grid-cols-1 max-[640px]:gap-2">
            <div className="relative h-[380px] max-[640px]:h-[280px] overflow-hidden group">
              <img
                src="/photos/Seminar.webp"
                alt="Členové studentského projektu CTRL"
                className="absolute left-0 top-[-7%] w-full h-[114%] object-cover object-[center_25%] transition-[scale] duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative h-[380px] max-[640px]:h-[280px] overflow-hidden group">
              <img
                src="/photos/workshopy.webp"
                alt="Účastníci workshopu CTRL"
                className="absolute left-0 top-[-7%] w-full h-[114%] object-cover object-center transition-[scale] duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative h-[380px] max-[640px]:h-[280px] overflow-hidden group">
              <img
                src="/photos/vyzkum.webp"
                alt="Výzkum CTRL Europe"
                className="absolute left-0 top-[-7%] w-full h-[114%] object-cover object-center transition-[scale] duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
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
            <h2 className="section-title italic">
              <span className="cs">
                Nezávislá, <em>student-led</em> organizace.
              </span>
              <span className="en">
                An independent, <em>student-led</em> organization.
              </span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-2 gap-[100px] max-lg:grid-cols-1 max-lg:gap-12">
            <div className="rev">
              <div className="prose">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  CTRL Europe je nezávislá studentská organizace a youth
                  platforma se sídlem v Brně. Vznikla v roce 2025 z iniciativy
                  studentů ve věku 16–19 let ze střední Evropy.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  CTRL Europe is an independent student organization and youth
                  platform based in Brno. It was founded in 2025 on the
                  initiative of students aged 16–19 from Central Europe.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Jsme student-led organizace. To znamená, že rozhodujeme,
                  organizujeme a realizujeme sami. Bez čekání na instituce nebo
                  granty.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  We are a student-led organization. That means we decide,
                  organize and execute ourselves. Without waiting for
                  institutions or grants.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Zaměřujeme se na střední a východní Evropu. Jde o region se
                  specifickým historickým kontextem, vlastními výzvami a
                  vlastními příležitostmi. Věříme, že digitální gramotnost a
                  kritické myšlení jsou pro tuto část Evropy obzvlášť důležité.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  We focus on Central and Eastern Europe. It is a region with a
                  specific historical context, its own challenges and its own
                  opportunities. We believe digital literacy and critical
                  thinking are especially important for this part of Europe.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Nejsme aktivistická organizace. Nejsme politická platforma.
                  Jsme vzdělávací a výzkumná youth organizace s mezinárodními
                  ambicemi.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  We are not an activist organization. We are not a political
                  platform. We are an educational and research youth
                  organization with international ambitions.
                </p>
              </div>
            </div>
            <div className="rev d2">
              <div className="flex flex-col sep-stack">
                <div className="bg-card py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">
                    Nezávislá studentská organizace
                  </span>
                  <span className="text-[15px] font-normal text-dark en">
                    Independent student organization
                  </span>
                </div>
                <div className="bg-card py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">
                    Vícejázyčný tým ze CEE
                  </span>
                  <span className="text-[15px] font-normal text-dark en">
                    Multilingual team from CEE
                  </span>
                </div>
                <div className="bg-card py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">
                    Vzdělávací a výzkumná orientace
                  </span>
                  <span className="text-[15px] font-normal text-dark en">
                    Educational and research focus
                  </span>
                </div>
                <div className="bg-card py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">
                    Mezinárodní ambice
                  </span>
                  <span className="text-[15px] font-normal text-dark en">
                    International ambitions
                  </span>
                </div>
                <div className="bg-card py-7 px-8 flex items-center gap-4 transition-[padding-left] duration-300 hover:pl-11">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="text-[15px] font-normal text-dark cs">
                    Registrovaný spolek v ČR
                  </span>
                  <span className="text-[15px] font-normal text-dark en">
                    Registered association in CZ
                  </span>
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
            <h2 className="section-title italic">
              <span className="cs">
                Pět oblastí. <em>Jeden cíl.</em>
              </span>
              <span className="en">
                Five areas. <em>One goal.</em>
              </span>
            </h2>
          </div>
          <div className="area-stack mt-10 flex flex-col max-lg:mt-8">
            <div className="area-item rev d1 py-10 px-8 grid grid-cols-[132px_1fr] gap-10 items-start max-lg:grid-cols-1 max-lg:gap-4 max-lg:py-8 max-lg:px-5">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1 max-lg:hidden">
                <span className="cs">01 Výzkum</span>
                <span className="en">01 Research</span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    01
                  </span>
                  Výzkum
                </h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    01
                  </span>
                  Research
                </h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  Analyzujeme digitální hrozby v kontextu střední Evropy.
                  Zkoumáme vliv dezinformací na mladé voliče, šíření deepfakes v
                  mediálním prostoru a dopady algoritmické manipulace na
                  politické názory. Naše výstupy jsou určeny pro školy, média,
                  think tanky a evropské instituce.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  We analyze digital threats in the context of Central Europe.
                  We study the influence of disinformation on young voters, the
                  spread of deepfakes in the media and the impact of algorithmic
                  manipulation on political views. Our outputs are intended for
                  schools, media, think tanks and European institutions.
                </p>
              </div>
            </div>
            <div className="area-item rev d2 py-10 px-8 grid grid-cols-[132px_1fr] gap-10 items-start max-lg:grid-cols-1 max-lg:gap-4 max-lg:py-8 max-lg:px-5">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1 max-lg:hidden">
                <span className="cs">02 Vzdělávání</span>
                <span className="en">02 Edu</span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    02
                  </span>
                  Workshopy
                </h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    02
                  </span>
                  Workshops
                </h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  Přijíždíme na střední školy s 90minutovým interaktivním
                  programem. Učíme studenty jak poznat deepfake, jak fungují
                  doporučovací algoritmy, jak se šíří dezinformace a jak si
                  udržet kritický pohled na digitální obsah. Program je zdarma
                  pro všechny partnerské školy.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  We come to secondary schools with a 90-minute interactive
                  program. We teach students how to detect deepfakes, how
                  recommendation algorithms work, how disinformation spreads and
                  how to maintain a critical perspective on digital content. The
                  program is free for all partner schools.
                </p>
              </div>
            </div>
            <div className="area-item rev d3 py-10 px-8 grid grid-cols-[132px_1fr] gap-10 items-start max-lg:grid-cols-1 max-lg:gap-4 max-lg:py-8 max-lg:px-5">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1 max-lg:hidden">
                <span className="cs">03 Média</span>
                <span className="en">03 Media</span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    03
                  </span>
                  Média a podcasty
                </h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    03
                  </span>
                  Media and podcasts
                </h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  Podcast CTRL+ALT přináší rozhovory s experty, novináři a lidmi
                  z evropských institucí. Témata: AI, mediální gramotnost,
                  svoboda slova online, dezinformace a budoucnost demokracie.
                  Tvoříme obsah který skutečně vzdělává. Na platformách kde
                  mladí lidé jsou.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  The CTRL+ALT podcast brings conversations with experts,
                  journalists and people from European institutions. Topics: AI,
                  media literacy, online freedom of speech, disinformation and
                  the future of democracy. We create content that truly
                  educates. On platforms where young people actually are.
                </p>
              </div>
            </div>
            <div className="area-item rev d4 py-10 px-8 grid grid-cols-[132px_1fr] gap-10 items-start max-lg:grid-cols-1 max-lg:gap-4 max-lg:py-8 max-lg:px-5">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1 max-lg:hidden">
                <span className="cs">04 Mezinárodní</span>
                <span className="en">04 Intl</span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    04
                  </span>
                  Mezinárodní spolupráce
                </h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    04
                  </span>
                  International cooperation
                </h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  Budujeme partnerství se školami, organizacemi a institucemi v
                  celém regionu CEE. Připravujeme youth exchange programy,
                  mezinárodní stáže a společné výzkumné projekty. Naším cílem je
                  propojit mladou generaci střední Evropy kolem sdílených
                  hodnot.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  We are building partnerships with schools, organizations and
                  institutions throughout the CEE region. We are preparing youth
                  exchange programs, international internships and joint
                  research projects. Our goal is to connect the young generation
                  of Central Europe around shared values.
                </p>
              </div>
            </div>
            <div className="area-item rev d5 py-10 px-8 grid grid-cols-[132px_1fr] gap-10 items-start max-lg:grid-cols-1 max-lg:gap-4 max-lg:py-8 max-lg:px-5">
              <div className="font-mono text-[11px] tracking-[2px] uppercase text-accent pt-1 max-lg:hidden">
                <span className="cs">05 Akce</span>
                <span className="en">05 Events</span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark cs max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    05
                  </span>
                  Konference a summity
                </h3>
                <h3 className="text-[22px] font-semibold tracking-[-0.5px] mb-4 text-dark en max-lg:flex max-lg:items-baseline max-lg:gap-3 max-lg:text-xl max-lg:mb-3">
                  <span className="hidden max-lg:inline font-mono text-accent text-lg font-bold tracking-normal">
                    05
                  </span>
                  Conferences and summits
                </h3>
                <p className="text-[15px] font-light leading-[1.8] text-mid cs max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  CTRL Summit 2026 bude první mezinárodní konferencí CTRL
                  Europe. Brno, jaro 2026. Keynotes, panelové diskuze,
                  workshopy. Místo kde se setkává mladá středoevropská generace
                  a buduje společnou odpověď na digitální výzvy současnosti.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-mid en max-lg:text-base max-lg:font-normal max-lg:leading-[1.7] max-lg:text-dark/75">
                  CTRL Summit 2026 will be the first international CTRL Europe
                  conference. Brno, spring 2026. Keynotes, panel discussions,
                  workshops. Where the young Central European generation meets
                  and builds a common response to today's digital challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Flythrough variant="network" />

      <section
        className="sec layer-band layer-band--founder py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg"
        id="about-team"
      >
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
                <img
                  src="/IMG_4222.webp"
                  alt="Jan Krejčí"
                  data-plx=""
                  className="absolute left-0 top-[-6%] w-full h-[112%] object-cover object-[center_8%] block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-0 left-0 right-0 py-3 px-5 bg-[rgba(245,245,243,0.85)]">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid">
                    Jan Krejčí, 2025
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between py-3 border-b border-separator">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">
                    Role
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">
                    Role
                  </div>
                  <div className="text-[13px] font-medium text-dark cs">
                    Prezident & Zakladatel
                  </div>
                  <div className="text-[13px] font-medium text-dark en">
                    President & Founder
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b border-separator">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">
                    Věk
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">
                    Age
                  </div>
                  <div className="text-[13px] font-medium text-dark">17</div>
                </div>
                <div className="flex justify-between py-3 border-b border-separator">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">
                    Působiště
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">
                    Base
                  </div>
                  <div className="text-[13px] font-medium text-dark">
                    Brno, CZ
                  </div>
                </div>
              </div>
            </div>
            <div className="rev d2">
              <div className="text-xl text-accent mb-10 cs" data-scramble-role="">
                Prezident & Zakladatel CTRL Europe
              </div>
              <div className="text-xl text-accent mb-10 en" data-scramble-role="">
                President & Founder of CTRL Europe
              </div>
              <div className="prose">
                <div data-scrub-words="">
                  <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                    CTRL Europe jsem nezaložil jako školní projekt. Založil jsem
                    ho protože vidím skutečný problém a věřím, že naše generace ho
                    musí řešit sama.
                  </p>
                  <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                    I didn't start CTRL Europe as a school project. I started it
                    because I see a real problem, and because I believe our
                    generation has to solve it ourselves.
                  </p>
                </div>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Jsem sedmnáctiletý student IT na Střední škole informatiky,
                  poštovnictví a finančnictví v Brně. Od mládí mě zajímá
                  průsečík technologií, politiky a společnosti. Vidím jak
                  digitální manipulace ovlivňuje demokratické procesy. A jak
                  málo se o tom mluví tam, kde by se mluvit mělo.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  I am a seventeen-year-old IT student at the Secondary School
                  of Informatics, Posts and Finance in Brno. Since childhood I
                  have been interested in the intersection of technology,
                  politics and society. I see how digital manipulation
                  influences democratic processes. And how little is said about
                  it where it should be said.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Věřím, že digitální gramotnost není volitelný předmět. Je to
                  základní kompetence pro život ve svobodné společnosti. A
                  věřím, že první generace, která vyrůstá plně uvnitř
                  digitálních systémů. Naše generace má unikátní perspektivu a
                  odpovědnost tuto situaci změnit.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  I believe digital literacy is not an optional subject. It is a
                  fundamental competence for life in a free society. And I
                  believe that the first generation growing up fully inside
                  digital systems. Our generation has a unique perspective and
                  responsibility to change this situation.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  <strong className="text-dark font-medium">
                    CTRL Europe není můj jediný projekt. Ale je nejdůležitější.
                    Protože záleží na více než jen na mně.
                  </strong>
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  <strong className="text-dark font-medium">
                    CTRL Europe is not my only project. But it is the most
                    important one. Because it matters beyond just me.
                  </strong>
                </p>
              </div>
              <div className="mt-12 pt-10 border-t border-separator">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-5 cs">
                  Ocenění a projekty
                </div>
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid mb-5 en">
                  Awards and projects
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">
                      Absolvent kurzu v oblasti AI, phishingu a kybernetických
                      hrozeb
                    </span>
                    <span className="en">
                      Graduate of a course on AI, phishing and cyber threats
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">
                      Účastník mezinárodních studentských politických debat a
                      projektů
                    </span>
                    <span className="en">
                      Participant in international students' political debates
                      and projects
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">
                      Účastník česko-tchajwanského projektu zaměřeného na
                      vzdělávání starší generace v oblasti digitálních hrozeb
                    </span>
                    <span className="en">
                      Participant in the Czech-Taiwanese project aimed at
                      educating the older generation in the field of digital
                      threats
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">
                      Vítěz soutěže Den hejtmanem JMK 2025/2026
                    </span>
                    <span className="en">
                      Winner of Day as Governor, South Moravian Region 2025/2026
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">
                      Vítěz krajského kola ENERSOL 2024
                    </span>
                    <span className="en">
                      Regional round ENERSOL 2024 winner
                    </span>
                  </div>
                  <div className="flex items-start gap-3.5 text-sm font-light text-mid">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-[7px]"></div>
                    <span className="cs">Vítěz soutěže 35 let demokracie</span>
                    <span className="en">
                      35 Years of Democracy competition winner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec layer-band layer-band--advisor py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2"
        id="about-advisor"
      >
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Odborná garantka</span>
              <span className="en">Academic Advisor</span>
            </span>
            <h2 className="section-title">{ADVISOR.name}</h2>
          </div>
          <div className="about-2col about-2col--reverse grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-12 lg:grid-cols-[1fr_400px]">
            <div className="max-lg:order-2" data-slide-from="left">
              <div className="text-xl text-accent mb-10 cs" data-scramble-role="">
                {ADVISOR.roleCs} CTRL Europe
              </div>
              <div className="text-xl text-accent mb-10 en" data-scramble-role="">
                {ADVISOR.roleEn} of CTRL Europe
              </div>
              <div className="prose">
                {ADVISOR.bioCs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="cs text-base font-light leading-[1.85] text-mid mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
                {ADVISOR.bioEn.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="en text-base font-light leading-[1.85] text-mid mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="max-lg:order-1" data-slide-from="right">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-card">
                {ADVISOR.photo ? (
                  <img
                    src={ADVISOR.photo}
                    alt={ADVISOR.photoAlt}
                    data-rotate-scrub=""
                    className="absolute left-0 top-[-4%] w-full h-[108%] object-cover origin-center"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    data-rotate-scrub=""
                    className="absolute inset-0 flex items-center justify-center origin-center bg-[linear-gradient(160deg,rgba(74,123,255,0.16),rgba(11,16,32,0.06))]"
                  >
                    <span className="font-mono text-[56px] font-bold tracking-[4px] text-accent/70">
                      {ADVISOR.initials}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 py-3 px-5 bg-[rgba(245,245,243,0.85)]">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid">
                    {ADVISOR.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between py-3 border-b border-separator">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">
                    Role
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">
                    Role
                  </div>
                  <div className="text-[13px] font-medium text-dark cs">
                    {ADVISOR.roleCs}
                  </div>
                  <div className="text-[13px] font-medium text-dark en">
                    {ADVISOR.roleEn}
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b border-separator">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid cs">
                    Působiště
                  </div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-mid en">
                    Base
                  </div>
                  <div className="text-[13px] font-medium text-dark">
                    {ADVISOR.base}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec layer-band layer-band--board py-[100px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg"
        id="about-board"
      >
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Předsednictvo</span>
              <span className="en">Executive Board</span>
            </span>
            <h2 className="section-title">
              <span className="cs">Zbytek vedení.</span>
              <span className="en">The rest of the board.</span>
            </h2>
          </div>
          <div className="board-mini mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1 lg:mt-14">
            {BOARD_REST.map((member) => (
              <BoardMemberCard key={member.id} member={member} variant="about" />
            ))}
          </div>
        </div>
      </section>

      <section
        className="sec layer-band layer-band--structure py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2"
        id="about-structure"
      >
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev">
            <span className="section-label">
              <span className="cs">Organizace</span>
              <span className="en">Structure</span>
            </span>
            <h2 className="section-title italic">
              <span className="cs">
                Předsednictvo. Main Council. <em>National Teams.</em>
              </span>
              <span className="en">
                Executive Board. Main Council. <em>National Teams.</em>
              </span>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
            <div className="rev d1">
              <div className="prose max-w-[520px]">
                <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    Předsednictvo
                  </strong>{" "}
                  tvoří zakladatel a výkonné vedení: prezident, místopředseda,
                  vedoucí kanceláře a předseda Main Council. Rozhoduje o
                  strategickém směřování organizace.
                </p>
                <p className="en mb-5 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    The Executive Board
                  </strong>{" "}
                  is the founder and operational leadership: president, deputy
                  chair, chief of staff and the chairman of the Main Council.
                  The board decides on the strategic direction of the
                  organization.
                </p>
                <p className="cs mb-5 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    Main Council
                  </strong>{" "}
                  propojuje předsednictvo s národními týmy. Předsedá mu Dominik
                  Ševela. Council drží společný směr napříč zeměmi, aniž by
                  stíral místní kontext.
                </p>
                <p className="en mb-5 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    The Main Council
                  </strong>{" "}
                  connects the board with national teams. It is chaired by
                  Dominik Ševela. The Council keeps a shared direction across
                  countries without flattening local context.
                </p>
                <p className="cs mb-8 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    National Teams
                  </strong>{" "}
                  vedou národní koordinátoři. Každý tým má vlastní agendu a
                  přímé napojení na Main Council.
                </p>
                <p className="en mb-8 text-base leading-[1.85] font-light text-mid">
                  <strong className="font-medium text-dark">
                    National Teams
                  </strong>{" "}
                  are led by national coordinators. Each team has its own agenda
                  and a direct line to the Main Council.
                </p>
              </div>
              <div className="org-chart-frame">
                <AboutStructureAnimation />
              </div>
            </div>
            <div className="rev d2 flex flex-col gap-4">
              <BoardStructureBlock />
              <LayersStructureBlock />
            </div>
          </div>
        </div>
      </section>

      <Flythrough variant="ticker" />

      <section
        className="sec layer-band layer-band--council py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg"
        id="about-council"
      >
        <div className="inner max-w-[1300px] mx-auto">
          <div className="council-pin lg:grid lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
            <div className="council-pin__head lg:sticky lg:top-28">
              <div className="section-head rev">
                <span className="section-label">
                  <span className="cs">Main Council</span>
                  <span className="en">Main Council</span>
                </span>
                <h2 className="section-title">
                  <span className="cs">
                    Most mezi vedením a <em>národními týmy.</em>
                  </span>
                  <span className="en">
                    The bridge between leadership and <em>national teams.</em>
                  </span>
                </h2>
              </div>
            </div>
            <div className="council-pin__body mt-10 space-y-8 lg:mt-4">
              <div className="council-rail bg-card px-8 py-10 max-sm:px-6" data-enter="rotate-left">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-4">
                  Chairman
                </div>
                <div className="text-2xl font-semibold tracking-[-0.4px] text-dark mb-2">
                  Dominik Ševela
                </div>
                <p className="cs text-[15px] font-light leading-[1.8] text-mid">
                  Předseda Main Council. Drží agendu rady a napojení na
                  předsednictvo.
                </p>
                <p className="en text-[15px] font-light leading-[1.8] text-mid">
                  Chairman of the Main Council. He holds the council agenda and
                  the link to the executive board.
                </p>
              </div>
              <div className="council-rail bg-bg2 px-8 py-10 max-sm:px-6" data-enter="rotate-up">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-4">
                  <span className="cs">Mandát</span>
                  <span className="en">Mandate</span>
                </div>
                <p className="cs text-[15px] font-light leading-[1.8] text-mid">
                  Council sjednocuje priority National Teams, hlídá kvalitu
                  výstupů a přenáší rozhodnutí předsednictva do jednotlivých
                  zemí.
                </p>
                <p className="en text-[15px] font-light leading-[1.8] text-mid">
                  The Council aligns National Teams priorities, guards output
                  quality and carries board decisions into each country.
                </p>
              </div>
              <NationalCoordinators />
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg">
        <div className="inner max-w-[1300px] mx-auto">
          <div className="section-head rev mb-12 max-lg:mb-10 max-sm:mb-8">
            <span className="section-label">
              <span className="cs">Dlouhodobá vize</span>
              <span className="en">Long-term vision</span>
            </span>
            <h2 className="section-title italic">
              <span className="cs">
                Budujeme něco co <em>přetrvá.</em>
              </span>
              <span className="en">
                Building something <em>that lasts.</em>
              </span>
            </h2>
          </div>
          <div className="about-2col grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(560px,1.15fr)] lg:gap-16 xl:grid-cols-[minmax(0,0.9fr)_minmax(680px,1.1fr)] xl:gap-[90px]">
            <div className="rev">
              <div className="prose max-w-[540px]">
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  Naším cílem je vybudovat udržitelnou evropskou youth platformu
                  zaměřenou na digitální gramotnost, výzkum a mezinárodní
                  spolupráci.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  Our goal is to build a sustainable European youth platform
                  focused on digital literacy, research and international
                  cooperation.
                </p>
                <p className="cs text-base font-light leading-[1.85] text-mid mb-5">
                  V horizontu pěti let chceme být přítomni ve více zemích
                  střední Evropy, mít funkční síť partnerských škol a
                  organizací, produkovat výzkum který je citován a používán, a
                  organizovat každoroční mezinárodní summit který je relevantní
                  pro tvůrce politik i pro studenty.
                </p>
                <p className="en text-base font-light leading-[1.85] text-mid mb-5">
                  Within five years we want to be present in multiple Central
                  European countries, have a functioning network of partner
                  schools and organizations, produce research that is cited and
                  used, and organize an annual international summit relevant to
                  both policymakers and students.
                </p>
              </div>
              <blockquote className="mt-8 max-w-[540px] border-l-[3px] border-l-accent pl-6 sm:pl-7">
                <p className="cs text-[15px] font-medium leading-[1.75] text-dark">
                  Neslibujeme revoluci. Slibujeme poctivé práci na problému
                  který je skutečný a který dlouhodobě záleží.
                </p>
                <p className="en text-[15px] font-medium leading-[1.75] text-dark">
                  We don't promise revolution. We promise honest work on a
                  problem that is real and that matters in the long term.
                </p>
              </blockquote>
            </div>
            <div className="rev d2 w-full lg:max-w-none">
              <div className="mb-5 font-mono text-[11px] tracking-[2px] uppercase text-accent">
                <span className="cs">Naše hodnoty</span>
                <span className="en">Our values</span>
              </div>
              <div className="val-grid grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-2 xl:gap-4">
                {CORE_VALUES.map((value) => (
                  <div
                    key={value.id}
                    className={`val-card rev ${value.delay} group flex flex-col bg-card px-5 py-6 transition-colors duration-300 hover:border-accent/25 sm:px-6 sm:py-7 lg:px-7 lg:py-8`}
                  >
                    <div className="mb-3 font-mono text-[11px] tracking-[2px] text-accent uppercase">
                      {value.id}
                    </div>
                    <div className="val-title cs">{value.titleCs}</div>
                    <div className="val-title en">{value.titleEn}</div>
                    <p className="val-desc cs">{value.descCs}</p>
                    <p className="val-desc en">{value.descEn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg text-center">
        <div className="inner max-w-[700px] mx-auto">
          <h2 className="rev cs text-[clamp(36px,5vw,72px)] font-extrabold leading-none tracking-[-2.5px] text-dark mb-6">
            Zapojte se.
          </h2>
          <h2 className="rev en text-[clamp(36px,5vw,72px)] font-extrabold leading-none tracking-[-2.5px] text-dark mb-6">
            Get involved.
          </h2>
          <p className="rev d1 cs text-[17px] font-light leading-[1.8] text-mid mb-10 max-w-[540px] mx-auto">
            Hledáme partnerské školy, organizace a instituce které chtějí být
            součástí toho co budujeme. Jsme tady.
          </p>
          <p className="rev d1 en text-[17px] font-light leading-[1.8] text-mid mb-10 max-w-[540px] mx-auto">
            We are looking for partner schools, organizations and institutions
            that want to be part of what we are building. We are here.
          </p>
          <div className="rev d2 flex gap-3 justify-center flex-wrap">
            <Link to="/join" className="btn-p cs">
              Spolupráce &rarr;
            </Link>
            <Link to="/join" className="btn-p en">
              Cooperate &rarr;
            </Link>
            <Link to="/apply" className="btn-g cs">
              Přihláška
            </Link>
            <Link to="/apply" className="btn-g en">
              Application
            </Link>
            <a href="mailto:ctrleurope@seznam.cz" className="btn-g cs">
              Napište nám
            </a>
            <a href="mailto:ctrleurope@seznam.cz" className="btn-g en">
              Write to us
            </a>
          </div>
        </div>
      </section>
      <TickerBar />
    </>
  );
}
