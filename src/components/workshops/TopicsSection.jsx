const CARD =
  "what-card rev group relative flex h-full min-w-0 flex-col overflow-hidden bg-card px-7 py-8 transition-colors duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 after:content-[''] hover:bg-bg2 hover:after:scale-x-100 max-sm:px-5 max-sm:py-7";

const TOPICS = [
  {
    n: "01",
    delay: "d1",
    titleCs: "Dezinformace, manipulace a deepfaky",
    titleEn: "Disinformation, manipulation and deepfakes",
    descCs:
      "Jak poznat, že video, fotka nebo zpráva nejsou tím, čím se zdají, a jak si informace rychle ověřit.",
    descEn:
      "How to tell that a video, photo or message is not what it seems, and how to check information quickly.",
  },
  {
    n: "02",
    delay: "d2",
    titleCs: "Digitální závislosti, manipulace a AI",
    titleEn: "Digital addiction, manipulation and AI",
    descCs:
      "Proč je těžké odložit telefon, jak aplikace pracují s naší pozorností a co s tím dělá umělá inteligence.",
    descEn:
      "Why it is hard to put the phone down, how apps work with our attention, and what artificial intelligence does with that.",
  },
  {
    n: "03",
    delay: "d3",
    titleCs: "AI a dezinformace",
    titleEn: "AI and disinformation",
    descCs:
      "Jak AI vytváří přesvědčivý falešný obsah a jak se mu bránit.",
    descEn:
      "How AI creates convincing false content, and how to resist it.",
  },
  {
    n: "04",
    delay: "d1",
    titleCs: "Digitální závislosti",
    titleEn: "Digital addiction",
    descCs:
      "Zdravý vztah k telefonu, sociálním sítím a hrám. Bez strašení, s praktickými kroky.",
    descEn:
      "A healthy relationship with the phone, social networks and games. No scaremongering, with practical steps.",
  },
];

export function TopicsSection() {
  return (
    <section className="sec bg-bg2" id="temata">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Témata</span>
            <span className="en">Topics</span>
          </span>
          <h2 className="section-title">
            <span className="cs">
              O čem workshopy <em>jsou.</em>
            </span>
            <span className="en">
              What the workshops <em>cover.</em>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2">
          {TOPICS.map((topic) => (
            <article key={topic.n} className={`${CARD} ${topic.delay}`}>
              <div className="relative z-[2] font-mono text-[11px] tracking-[2px] text-accent">
                {topic.n}
              </div>
              <h3 className="relative z-[2] mt-6 text-balance text-[22px] leading-[1.25] font-semibold tracking-[-0.4px] text-dark max-sm:text-xl">
                <span className="cs">{topic.titleCs}</span>
                <span className="en">{topic.titleEn}</span>
              </h3>
              <p className="relative z-[2] mt-3 text-pretty text-[15px] leading-[1.7] font-light text-mid">
                <span className="cs">{topic.descCs}</span>
                <span className="en">{topic.descEn}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
