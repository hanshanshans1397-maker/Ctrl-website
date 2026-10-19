const STEPS = [
  {
    n: "01",
    cs: "Krátký úvod do tématu",
    en: "A short introduction to the topic",
  },
  {
    n: "02",
    cs: "Hra, ve které si účastníci manipulaci vyzkouší na vlastní kůži",
    en: "A game in which participants experience manipulation firsthand",
  },
  {
    n: "03",
    cs: "Společný rozbor: co se dělo a jak to funguje ve skutečnosti",
    en: "A shared debrief: what happened and how it works in reality",
  },
  {
    n: "04",
    cs: "Krátký test a zpětná vazba",
    en: "A short test and feedback",
  },
];

function FormatMark({ children }) {
  return (
    <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase">
      {children}
    </div>
  );
}

export function FormatsSection() {
  return (
    <section className="sec bg-bg" id="prubeh">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Průběh</span>
            <span className="en">Format</span>
          </span>
          <h2 className="section-title">
            <span className="cs">
              Jak workshop <em>probíhá.</em>
            </span>
            <span className="en">
              How a workshop <em>runs.</em>
            </span>
          </h2>
        </div>

        <article className="rev d1 bg-card px-7 py-9 max-sm:px-5 max-sm:py-7 sm:px-9">
          <FormatMark>
            <span className="cs">A · Interaktivní hra · 90–120 min</span>
            <span className="en">A · Interactive game · 90–120 min</span>
          </FormatMark>
          <h3 className="mt-4 text-balance text-[26px] leading-[1.15] font-semibold tracking-[-0.5px] text-dark max-sm:text-[22px]">
            <span className="cs">Interaktivní hra</span>
            <span className="en">Interactive game</span>
          </h3>
          <ol className="mt-8 grid grid-cols-1 gap-px bg-separator sm:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-bg px-5 py-6">
                <div className="font-mono text-[13px] font-medium text-accent">
                  {step.n}
                </div>
                <p className="mt-2 text-pretty text-[15px] leading-[1.6] font-medium tracking-[-0.2px] text-dark">
                  <span className="cs">{step.cs}</span>
                  <span className="en">{step.en}</span>
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[760px] text-pretty text-sm leading-[1.7] font-light text-mid">
            <span className="cs">
              Ke každému tématu máme vlastní hru pro danou věkovou skupinu. Hry
              vytváří náš lektorský tým a konzultujeme je s pedagogy a
              výchovnými poradci.
            </span>
            <span className="en">
              Each topic has its own game for the age group. Our lecturer team
              creates the games and we consult them with teachers and school
              counselors.
            </span>
          </p>
        </article>

        <div className="mt-3 grid grid-cols-1 items-stretch gap-3 lg:grid-cols-2">
          <article className="rev d2 flex h-full flex-col bg-card px-7 py-9 max-sm:px-5 max-sm:py-7 sm:px-9">
            <FormatMark>
              <span className="cs">B · Přednáška</span>
              <span className="en">B · Lecture</span>
            </FormatMark>
            <h3 className="mt-4 text-balance text-[26px] leading-[1.15] font-semibold tracking-[-0.5px] text-dark max-sm:text-[22px]">
              <span className="cs">Přednáška</span>
              <span className="en">Lecture</span>
            </h3>
            <p className="mt-4 text-pretty text-[15px] leading-[1.75] font-light text-mid">
              <span className="cs">
                Interaktivní přednáška s proškoleným lektorem CTRL Europe, s
                ukázkami a prostorem na otázky.
              </span>
              <span className="en">
                An interactive lecture with a trained CTRL Europe lecturer,
                with examples and room for questions.
              </span>
            </p>
          </article>
          <article className="rev d3 flex h-full flex-col bg-card px-7 py-9 max-sm:px-5 max-sm:py-7 sm:px-9">
            <FormatMark>
              <span className="cs">C · Přednáška s odborníkem</span>
              <span className="en">C · Lecture with an expert</span>
            </FormatMark>
            <h3 className="mt-4 text-balance text-[26px] leading-[1.15] font-semibold tracking-[-0.5px] text-dark max-sm:text-[22px]">
              <span className="cs">Přednáška s odborníkem</span>
              <span className="en">Lecture with an expert</span>
            </h3>
            <p className="mt-4 text-pretty text-[15px] leading-[1.75] font-light text-mid">
              <span className="cs">
                Spolupracujeme s odborníky z praxe: psychology, psychiatry,
                neurology a pedagogy. Na přání přijedou s námi.
              </span>
              <span className="en">
                We work with practitioners: psychologists, psychiatrists,
                neurologists and teachers. On request, they come with us.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
