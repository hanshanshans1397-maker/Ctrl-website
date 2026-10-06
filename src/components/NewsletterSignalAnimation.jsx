const HUB = { x: 220, y: 220 };
const NODE_R = 52;

const LINKS = [
  {
    id: 'news',
    x: 68,
    y: 62,
    cs: 'Aktuality',
    en: 'News',
    d: 'M 106.8 102.4 Q 126.9 146.3 170.1 168.1',
  },
  {
    id: 'workshops',
    x: 372,
    y: 62,
    cs: 'Workshopy',
    en: 'Workshops',
    d: 'M 333.2 102.4 Q 313.1 146.3 269.9 168.1',
  },
  {
    id: 'summit',
    x: 68,
    y: 378,
    cs: 'Summit',
    en: 'Summit',
    d: 'M 106.8 337.6 Q 126.9 293.7 170.1 271.9',
  },
  {
    id: 'run',
    x: 372,
    y: 378,
    cs: 'CTRL Run',
    en: 'CTRL Run',
    d: 'M 333.2 337.6 Q 313.1 293.7 269.9 271.9',
  },
];

function copyFor(count, isSuccess) {
  if (isSuccess) {
    return {
      labelCs: 'Přihlášeno',
      labelEn: 'Subscribed',
      captionCs: 'Až bude něco nového, ozveme se.',
      captionEn: 'We will write when there is something new.',
    };
  }
  if (count === 0) {
    return {
      labelCs: 'Ticho',
      labelEn: 'Quiet',
      captionCs: 'Zaškrtněte skupiny. Rozsvítí se jen ty, které chcete.',
      captionEn: 'Tick the groups. Only the ones you want will light up.',
    };
  }
  return {
    labelCs: 'Signál',
    labelEn: 'Signal',
    captionCs: 'Pošleme zprávy jen k vybraným skupinám.',
    captionEn: 'We only send updates for the groups you picked.',
  };
}

const GLYPH_TRANSFORM = 'translate(0 -13) scale(1.42) translate(-8 -8)';

function NewsGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <path d="M2 3.5h8.5l3 3V13.5H2V3.5z" strokeLinejoin="round" />
      <path d="M10.5 3.5V6.5H13.5" strokeLinejoin="round" />
      <path d="M5 9h6M5 11h4" strokeLinecap="round" />
    </g>
  );
}

function WorkshopsGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <rect x="1" y="1.5" width="14" height="10" rx="1.5" />
      <path d="M1 5h14" strokeWidth="0.9" opacity="0.45" />
      <path d="M3.5 7.5l2.5 2-2.5 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9.5h4" strokeLinecap="round" />
      <path d="M5.5 14.5h5M8 11.5v3" strokeLinecap="round" />
    </g>
  );
}

function SummitGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <circle cx="8" cy="3" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="2.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8 4.5L2.5 11M8 4.5L13.5 11M2.5 12.5h11" strokeLinecap="round" />
    </g>
  );
}

function RunGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <circle cx="10.2" cy="2.5" r="1.35" fill="none" />
      <path d="M9.3 4.1 7.4 7.5" strokeLinecap="round" />
      <path d="M7.4 7.5 4.3 6.2" strokeLinecap="round" />
      <path d="M7.4 7.5 10.2 8.1 12.7 5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.4 7.5 5.1 12.5" strokeLinecap="round" />
      <path d="M7.4 7.5 10.5 12.7" strokeLinecap="round" />
    </g>
  );
}

const GLYPHS = {
  news: NewsGlyph,
  workshops: WorkshopsGlyph,
  summit: SummitGlyph,
  run: RunGlyph,
};

export function NewsletterSignalAnimation({ preferences = [], isSuccess = false }) {
  const active = new Set(preferences);
  const copy = copyFor(active.size, isSuccess);
  const count = isSuccess ? LINKS.length : active.size;

  return (
    <figure
      className="newsletter-signal"
      data-success={isSuccess ? 'true' : undefined}
      data-count={count}
    >
      <figcaption className="newsletter-signal__header">
        <span className="newsletter-signal__label cs">{copy.labelCs}</span>
        <span className="newsletter-signal__label en">{copy.labelEn}</span>
      </figcaption>

      <svg
        className="newsletter-signal__svg"
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="newsletter-signal-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,123,255,0.18)" />
            <stop offset="68%" stopColor="rgba(74,123,255,0)" />
          </radialGradient>
        </defs>

        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="150"
          fill="url(#newsletter-signal-glow)"
        />

        <g className="newsletter-signal__halos" transform={`translate(${HUB.x} ${HUB.y})`}>
          <circle className="newsletter-signal__halo" r="78" />
          <circle className="newsletter-signal__halo newsletter-signal__halo--2" r="94" />
        </g>

        {LINKS.map((link, index) => {
          const on = isSuccess || active.has(link.id);
          return (
            <g
              key={link.id}
              className={`newsletter-signal__link${on ? ' is-on' : ''}`}
              style={{ '--pulse-delay': `${index * 0.35}s` }}
            >
              <path className="newsletter-signal__line" d={link.d} />
              <circle
                className="newsletter-signal__pulse"
                r="3.2"
                style={{ offsetPath: `path('${link.d}')` }}
              />
            </g>
          );
        })}

        {LINKS.map((link) => {
          const on = isSuccess || active.has(link.id);
          const Glyph = GLYPHS[link.id];
          return (
            <g key={link.id} className={on ? 'is-on' : undefined}>
              <g
                className="newsletter-signal__node"
                transform={`translate(${link.x} ${link.y})`}
              >
                <circle className="newsletter-signal__disc" r={NODE_R} />
                <Glyph />
                <text className="newsletter-signal__name cs" y="32" textAnchor="middle">
                  {link.cs}
                </text>
                <text className="newsletter-signal__name en" y="32" textAnchor="middle">
                  {link.en}
                </text>
              </g>
            </g>
          );
        })}

        <g className="newsletter-signal__hub" transform={`translate(${HUB.x} ${HUB.y})`}>
          <circle className="newsletter-signal__hub-bg" r="64" />
          <image
            href="/ctrl_logo_bez_pozadi.png"
            x="-40"
            y="-32"
            width="80"
            height="44"
            preserveAspectRatio="xMidYMid meet"
          />
          <g className="newsletter-signal__mail" transform="translate(0 28)">
            <rect x="-10" y="-6.5" width="20" height="13" rx="1.4" />
            <path d="M -10 -6.5 L 0 2 L 10 -6.5" />
          </g>
          <path className="newsletter-signal__check" d="M -8 24 L -2.5 29.5 L 9 17" />
        </g>
      </svg>

      <p className="newsletter-signal__caption cs">{copy.captionCs}</p>
      <p className="newsletter-signal__caption en">{copy.captionEn}</p>
    </figure>
  );
}
