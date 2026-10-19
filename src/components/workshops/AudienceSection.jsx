const CARD =
  "what-card rev group relative flex h-full min-w-0 flex-col overflow-hidden bg-card px-7 py-8 transition-colors duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 after:content-[''] hover:bg-bg2 hover:after:scale-x-100 max-sm:px-5 max-sm:py-7";

const AUDIENCES = [
  { n: "01", cs: "6.–7. třída ZŠ", en: "Grades 6–7, primary school", delay: "d1" },
  { n: "02", cs: "8.–9. třída ZŠ", en: "Grades 8–9, primary school", delay: "d2" },
  { n: "03", cs: "1.–2. ročník SŠ", en: "Years 1–2, secondary school", delay: "d3" },
  { n: "04", cs: "3.–4. ročník SŠ", en: "Years 3–4, secondary school", delay: "d1" },
  {
    n: "05",
    cs: "Veřejnost a dospělí",
    en: "Public and adults",
    detailCs: "Rodiče, knihovny, obce, senioři",
    detailEn: "Parents, libraries, municipalities, seniors",
    delay: "d2",
  },
  {
    n: "06",
    cs: "Firmy",
    en: "Companies",
    detailCs: "Team building a vzdělávání zaměstnanců",
    detailEn: "Team building and staff training",
    delay: "d3",
  },
];

export function AudienceSection() {
  return (
    <section className="sec bg-bg" id="pro-koho">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Pro koho</span>
            <span className="en">Who it's for</span>
          </span>
          <h2 className="section-title">
            <span className="cs">
              Školy, veřejnost <em>i firmy.</em>
            </span>
            <span className="en">
              Schools, the public <em>and companies.</em>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item) => (
            <article key={item.n} className={`${CARD} ${item.delay}`}>
              <div className="relative z-[2] font-mono text-[11px] tracking-[2px] text-accent">
                {item.n}
              </div>
              <h3 className="relative z-[2] mt-6 text-balance text-[22px] leading-[1.2] font-semibold tracking-[-0.4px] text-dark max-sm:text-xl">
                <span className="cs">{item.cs}</span>
                <span className="en">{item.en}</span>
              </h3>
              {item.detailCs ? (
                <p className="relative z-[2] mt-3 text-pretty text-sm leading-[1.6] font-light text-mid">
                  <span className="cs">{item.detailCs}</span>
                  <span className="en">{item.detailEn}</span>
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <p className="rev d2 mt-8 max-w-[640px] text-pretty text-[15px] leading-[1.7] font-light text-mid">
          <span className="cs">
            Každý program přizpůsobujeme věku a zkušenostem skupiny.
          </span>
          <span className="en">
            We adapt every programme to the age and experience of the group.
          </span>
        </p>
      </div>
    </section>
  );
}
