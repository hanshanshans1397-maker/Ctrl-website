const ROWS = [
  {
    labelCs: "Škola, třída do 30 osob, 90–120 min",
    labelEn: "School, a class of up to 30 people, 90–120 min",
    priceCs: "4 500 Kč",
    priceEn: "CZK 4,500",
  },
  {
    labelCs: "Větší skupina (31–50 osob)",
    labelEn: "Larger group (31–50 people)",
    priceCs: "+1 000 Kč",
    priceEn: "+ CZK 1,000",
  },
  {
    labelCs: "Veřejnost, přednáška 90 min",
    labelEn: "Public, 90-minute lecture",
    priceCs: "4 000–6 000 Kč",
    priceEn: "CZK 4,000–6,000",
  },
  {
    labelCs: "Veřejnost, delší program nebo workshop",
    labelEn: "Public, a longer programme or workshop",
    priceCs: "6 000–8 000 Kč",
    priceEn: "CZK 6,000–8,000",
  },
  {
    labelCs: "Firmy, team building (půlden až celý den)",
    labelEn: "Companies, team building (half day to full day)",
    priceCs: "30 000–50 000 Kč",
    priceEn: "CZK 30,000–50,000",
  },
];

export function PricingSection() {
  return (
    <section className="sec bg-bg2" id="cenik">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Ceník</span>
            <span className="en">Pricing</span>
          </span>
          <h2 className="section-title">
            <span className="cs">
              Orientační <em>ceny.</em>
            </span>
            <span className="en">
              Indicative <em>prices.</em>
            </span>
          </h2>
        </div>
        <div className="rev d1">
          <table className="price-table">
            <caption className="sr-only">
              <span className="cs">Ceník workshopů CTRL Europe</span>
              <span className="en">CTRL Europe workshop prices</span>
            </caption>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.labelCs}>
                  <th scope="row">
                    <span className="cs block text-[16px] leading-snug font-medium tracking-[-0.2px] text-dark sm:text-[18px]">
                      {row.labelCs}
                    </span>
                    <span className="en block text-[16px] leading-snug font-medium tracking-[-0.2px] text-dark sm:text-[18px]">
                      {row.labelEn}
                    </span>
                  </th>
                  <td>
                    <span className="cs font-mono text-[18px] font-medium tracking-[-0.3px] text-dark sm:text-[22px]">
                      {row.priceCs}
                    </span>
                    <span className="en font-mono text-[18px] font-medium tracking-[-0.3px] text-dark sm:text-[22px]">
                      {row.priceEn}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 max-w-[640px] text-pretty text-[13px] leading-[1.65] font-light text-mid">
            <span className="cs">
              Ceny jsou orientační, přesnou nabídku připravíme podle rozsahu.
              Mimo Brno účtujeme cestovné. Nejsme plátci DPH.
            </span>
            <span className="en">
              Prices are indicative. We prepare an exact quote based on the
              scope. Outside Brno we charge travel costs. We are not VAT
              payers.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
