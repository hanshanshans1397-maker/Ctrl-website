import { AnimatedCounter } from "./AnimatedCounter";

const FACTS = [
  {
    id: "duration",
    count: 90,
    leadCs: " min",
    leadEn: " min",
    restCs: "programu",
    restEn: "program",
  },
  {
    id: "topics",
    count: 8,
    restCs: "hlavních témat",
    restEn: "main topics",
  },
  {
    id: "price",
    textCs: "Zdarma",
    textEn: "Free",
    restCs: "pro partnerské školy",
    restEn: "for partner schools",
  },
  {
    id: "age",
    count: 26,
    leadCs: " let",
    leadEn: " years",
    restCs: "maximální věk",
    restEn: "maximum age",
  },
];

function FactLead({ fact }) {
  if (fact.count != null) {
    return (
      <>
        <AnimatedCounter value={fact.count} />
        {fact.leadCs ? <span className="cs">{fact.leadCs}</span> : null}
        {fact.leadEn ? <span className="en">{fact.leadEn}</span> : null}
      </>
    );
  }

  return (
    <>
      <span className="cs">{fact.textCs}</span>
      <span className="en">{fact.textEn}</span>
    </>
  );
}

export function WorkshopFacts() {
  return (
    <div className="workshop-facts rev d2">
      <div
        className="workshop-facts-grain hero-grain"
        aria-hidden="true"
      />
      <div className="workshop-facts-grid">
        {FACTS.map((fact) => (
          <article key={fact.id} className="workshop-fact">
            <div className="workshop-fact-lead">
              <FactLead fact={fact} />
            </div>
            <div className="workshop-fact-rest cs">{fact.restCs}</div>
            <div className="workshop-fact-rest en">{fact.restEn}</div>
          </article>
        ))}
      </div>
      <p className="workshop-spec-note cs">
        Workshop probíhá přímo na vaší škole. Žádné cestování, žádné
        komplikace.
      </p>
      <p className="workshop-spec-note en">
        The workshop takes place directly at your school. No travel, no
        complications.
      </p>
    </div>
  );
}
