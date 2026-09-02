import { PARTNER_ORGS, SPONSORS } from '../data/partners';

function PartnerCard({ item, index }) {
  const nameEn = item.nameEn || item.name;
  const inner = (
    <>
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className="partner-card__logo"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="partner-card__mark" aria-hidden="true">
          {item.placeholder ? '—' : item.name.slice(0, 1)}
        </span>
      )}
      <span className="partner-card__name cs">{item.name}</span>
      <span className="partner-card__name en">{nameEn}</span>
    </>
  );

  const className = `partner-card ${index % 2 === 0 ? 'partner-card--left' : 'partner-card--right'}${item.placeholder ? ' partner-card--placeholder' : ''}`;

  if (item.href) {
    return (
      <a
        className={className}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        data-enter={index % 2 === 0 ? 'rotate-left' : 'rotate-up'}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={className} data-enter={index % 2 === 0 ? 'rotate-left' : 'rotate-up'}>
      {inner}
    </div>
  );
}

function PartnerGroup({ id, labelCs, labelEn, items }) {
  return (
    <div className="partner-group" data-partner-group={id}>
      <div className="partner-group__label">
        <span className="cs">{labelCs}</span>
        <span className="en">{labelEn}</span>
      </div>
      <div className="partner-group__grid">
        {items.map((item, index) => (
          <PartnerCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="sec layer-band layer-band--partners py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5 bg-bg2"
    >
      <div className="inner max-w-[1300px] mx-auto">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Partneři</span>
            <span className="en">Partners</span>
          </span>
          <h2 className="section-title">
            <span className="cs">
              Sponzoři a <em>spolupracující organizace.</em>
            </span>
            <span className="en">
              Sponsors and <em>cooperating organizations.</em>
            </span>
          </h2>
          <p className="section-lede mt-5 max-w-[520px] text-[15px] font-light leading-[1.8] text-mid">
            <span className="cs">
              Jména a loga doplníme, jakmile budou partnerství potvrzená.
            </span>
            <span className="en">
              Names and logos will be added once partnerships are confirmed.
            </span>
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          <PartnerGroup
            id="sponsors"
            labelCs="Sponzoři"
            labelEn="Sponsors"
            items={SPONSORS}
          />
          <PartnerGroup
            id="orgs"
            labelCs="Spolupracující organizace"
            labelEn="Cooperating organizations"
            items={PARTNER_ORGS}
          />
        </div>
      </div>
    </section>
  );
}
