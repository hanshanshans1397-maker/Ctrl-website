const PERKS = [
  {
    id: "free",
    featured: true,
    labelCs: "Zdarma",
    labelEn: "Free",
    descCs: "Workshopy zdarma pro partnerské školy",
    descEn: "Free workshops for partner schools",
    delay: "d1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="rgba(74,123,255,0.12)" stroke="#4a7bff" strokeWidth="1.4" />
        <path
          d="M7.5 12.4l3 3 6-6.5"
          stroke="#4a7bff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "adapt",
    labelCs: "Přizpůsobený",
    labelEn: "Adapted",
    descCs: "Obsah na míru každému věku",
    descEn: "Content tailored to every age group",
    delay: "d2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2.5" fill="rgba(74,123,255,0.08)" stroke="#4a7bff" strokeWidth="1.4" />
        <path d="M7 10h4M13 10h4M7 14h7" stroke="#4a7bff" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="17.5" cy="14" r="1.3" fill="#4a7bff" />
      </svg>
    ),
  },
  {
    id: "flex",
    labelCs: "Flexibilní",
    labelEn: "Flexible",
    descCs: "Časový formát podle vašich možností",
    descEn: "A time format that fits your schedule",
    delay: "d3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" fill="rgba(74,123,255,0.08)" stroke="#4a7bff" strokeWidth="1.4" />
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="#4a7bff" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 13h3.5M13.5 13h3M8 16.5h6" stroke="#4a7bff" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      </svg>
    ),
  },
  {
    id: "onsite",
    labelCs: "U vás",
    labelEn: "On-site",
    descCs: "Přímo na vaší škole",
    descEn: "Directly at your school",
    delay: "d2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"
          fill="rgba(74,123,255,0.12)"
          stroke="#4a7bff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" stroke="#4a7bff" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "partner",
    labelCs: "Partnerství",
    labelEn: "Partnership",
    descCs: "Dlouhodobá spolupráce, ne jednorázová akce",
    descEn: "A long-term partnership, not a one-off event",
    delay: "d3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="3" fill="rgba(74,123,255,0.1)" stroke="#4a7bff" strokeWidth="1.4" />
        <circle cx="16" cy="9" r="3" fill="rgba(74,123,255,0.1)" stroke="#4a7bff" strokeWidth="1.4" />
        <path d="M11 9h2" stroke="#4a7bff" strokeWidth="1.4" strokeLinecap="round" />
        <path
          d="M4.5 18c.4-2.4 2.4-4 4.8-4h1.4M19.5 18c-.4-2.4-2.4-4-4.8-4h-1.4"
          stroke="#4a7bff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function VisitMark() {
  return (
    <svg className="perk-visit" viewBox="0 0 140 92" fill="none" aria-hidden="true">
      <path
        d="M18 78h104"
        stroke="rgba(11,16,32,0.12)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M36 78 V42 L70 18 L104 42 V78"
        fill="rgba(74,123,255,0.06)"
        stroke="#4a7bff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M36 42h68" stroke="#4a7bff" strokeWidth="1.2" opacity="0.45" />
      <rect x="62" y="56" width="16" height="22" fill="rgba(74,123,255,0.1)" stroke="#4a7bff" strokeWidth="1.2" />
      <rect x="44" y="50" width="10" height="10" stroke="#4a7bff" strokeWidth="1" opacity="0.45" />
      <rect x="86" y="50" width="10" height="10" stroke="#4a7bff" strokeWidth="1" opacity="0.45" />
      <g className="perk-pin">
        <path
          d="M70 8c-5.2 0-9.4 4-9.4 9 0 6.2 9.4 14.5 9.4 14.5S79.4 23.2 79.4 17c0-5-4.2-9-9.4-9z"
          fill="#4a7bff"
        />
        <circle cx="70" cy="16.5" r="2.4" fill="#e4dfd8" />
      </g>
    </svg>
  );
}

export function WorkshopPerks() {
  return (
    <div className="perk-grid">
      {PERKS.map((perk) => (
        <article
          key={perk.id}
          className={`perk-card rev ${perk.delay}${perk.featured ? " perk-card--featured" : ""}`}
          data-cursor-hover
        >
          {perk.featured ? <VisitMark /> : null}
          <div className="perk-icon">{perk.icon}</div>
          <div className="perk-label">
            <span className="cs">{perk.labelCs}</span>
            <span className="en">{perk.labelEn}</span>
          </div>
          <p className="perk-desc">
            <span className="cs">{perk.descCs}</span>
            <span className="en">{perk.descEn}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
