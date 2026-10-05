import { PARTNER_ORGS, PAST_PARTNERS, SPONSORS } from '../data/partners';

function PartnerCard({ item }) {
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

  const className = `partner-card${item.placeholder ? ' partner-card--placeholder' : ''}`;

  if (item.href) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

const GROUPS = [
  {
    id: 'sponsors',
    labelCs: 'Sponzoři',
    labelEn: 'Sponsors',
    items: SPONSORS,
  },
  {
    id: 'orgs',
    labelCs: 'Spolupracující organizace',
    labelEn: 'Cooperating organizations',
    items: PARTNER_ORGS,
  },
  {
    id: 'past',
    labelCs: 'Organizace, se kterými jsme spolupracovali',
    labelEn: 'Organizations we have collaborated with',
    items: PAST_PARTNERS,
  },
].filter((group) => group.items.length > 0);

function PartnerGroup({ id, labelCs, labelEn, items, showLabel }) {
  return (
    <div className="partner-group" data-partner-group={id}>
      {showLabel ? (
        <div className="partner-group__label">
          <span className="cs">{labelCs}</span>
          <span className="en">{labelEn}</span>
        </div>
      ) : null}
      <div className={`partner-group__grid${showLabel ? '' : ' partner-group__grid--row'}`}>
        {items.map((item) => (
          <PartnerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  const hasSponsors = SPONSORS.length > 0;
  const hasOrgs = PARTNER_ORGS.length > 0;
  const showLabels = GROUPS.length > 1;

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
            {hasSponsors && hasOrgs ? (
              <>
                <span className="cs">
                  Sponzoři a <em>spolupracující organizace.</em>
                </span>
                <span className="en">
                  Sponsors and <em>cooperating organizations.</em>
                </span>
              </>
            ) : hasSponsors ? (
              <>
                <span className="cs">
                  Naši <em>sponzoři.</em>
                </span>
                <span className="en">
                  Our <em>sponsors.</em>
                </span>
              </>
            ) : (
              <>
                <span className="cs">
                  Spolupracující <em>organizace.</em>
                </span>
                <span className="en">
                  Cooperating <em>organizations.</em>
                </span>
              </>
            )}
          </h2>
          <p className="section-lede mt-5 max-w-[520px] text-[15px] font-light leading-[1.8] text-mid">
            <span className="cs">Organizace, se kterými spolupracujeme.</span>
            <span className="en">Organizations we work with.</span>
          </p>
        </div>
        <div className={`mt-12 lg:mt-16${showLabels ? ' grid gap-10 lg:grid-cols-2 lg:gap-14' : ''}`}>
          {GROUPS.map((group) => (
            <PartnerGroup
              key={group.id}
              id={group.id}
              labelCs={group.labelCs}
              labelEn={group.labelEn}
              items={group.items}
              showLabel={showLabels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
