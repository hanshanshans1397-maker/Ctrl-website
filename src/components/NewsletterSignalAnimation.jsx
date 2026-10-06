const HUB = { x: 250, y: 250 };
const NODE_R = 52;
const HUB_R = 64;
const ORBIT = 168;

const GROUPS = [
  { id: 'workshops', cs: 'Workshopy', en: 'Workshops', angle: -90 },
  { id: 'summit', cs: 'Summit', en: 'Summit', angle: -18 },
  { id: 'run', cs: 'Sportovní akce', en: 'Sports events', angle: 54 },
  { id: 'partners', cs: 'Spolupráce', en: 'Partnerships', angle: 126 },
  {
    id: 'media',
    cs: 'Média a',
    cs2: 'podcasty',
    en: 'Media and',
    en2: 'podcasts',
    angle: 198,
  },
];

function round(value) {
  return Math.round(value * 10) / 10;
}

const LINKS = GROUPS.map((group) => {
  const rad = (group.angle * Math.PI) / 180;
  const x = HUB.x + ORBIT * Math.cos(rad);
  const y = HUB.y + ORBIT * Math.sin(rad);
  const dx = HUB.x - x;
  const dy = HUB.y - y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const startX = x + ux * (NODE_R + 8);
  const startY = y + uy * (NODE_R + 8);
  const endX = HUB.x - ux * (HUB_R + 12);
  const endY = HUB.y - uy * (HUB_R + 12);
  const midX = (startX + endX) / 2 - uy * 14;
  const midY = (startY + endY) / 2 + ux * 14;

  return {
    ...group,
    x: round(x),
    y: round(y),
    d: `M ${round(startX)} ${round(startY)} Q ${round(midX)} ${round(midY)} ${round(endX)} ${round(endY)}`,
  };
});

function copyFor(count, isSuccess) {
  if (isSuccess) {
    return {
      captionCs: 'Až bude něco nového, ozveme se.',
      captionEn: 'We will write when there is something new.',
    };
  }
  if (count === 0) {
    return {
      captionCs: 'Zaškrtněte skupiny. Rozsvítí se jen ty, které chcete.',
      captionEn: 'Tick the groups. Only the ones you want will light up.',
    };
  }
  return {
    captionCs: 'Pošleme zprávy jen k vybraným skupinám.',
    captionEn: 'We only send updates for the groups you picked.',
  };
}

const GLYPH_TRANSFORM = 'translate(0 -7) scale(1.42) translate(-8 -8)';

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

function PartnersGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <circle cx="5" cy="4.6" r="1.7" fill="none" />
      <path d="M1.6 12.6c.35-2.15 1.6-3.2 3.4-3.2s3.05 1.05 3.4 3.2" strokeLinecap="round" />
      <circle cx="11" cy="4.6" r="1.7" fill="none" />
      <path d="M7.6 12.6c.35-2.15 1.6-3.2 3.4-3.2s3.05 1.05 3.4 3.2" strokeLinecap="round" />
    </g>
  );
}

function MediaGlyph() {
  return (
    <g className="newsletter-signal__glyph" transform={GLYPH_TRANSFORM}>
      <rect x="6" y="1.4" width="4" height="6.6" rx="2" />
      <path d="M4.1 7.1a3.9 3.9 0 0 0 7.8 0" strokeLinecap="round" />
      <path d="M8 11v2.6M5.8 13.6h4.4" strokeLinecap="round" />
    </g>
  );
}

const GLYPHS = {
  workshops: WorkshopsGlyph,
  summit: SummitGlyph,
  run: RunGlyph,
  partners: PartnersGlyph,
  media: MediaGlyph,
};

function NodeName({ link, lang }) {
  const line1 = lang === 'cs' ? link.cs : link.en;
  const line2 = lang === 'cs' ? link.cs2 : link.en2;
  const className = `newsletter-signal__name ${lang}`;

  if (!line2) {
    return (
      <text className={className} y="18" textAnchor="middle">
        {line1}
      </text>
    );
  }

  return (
    <text className={className} textAnchor="middle">
      <tspan x="0" y="11">{line1}</tspan>
      <tspan x="0" y="24">{line2}</tspan>
    </text>
  );
}

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
      <svg
        className="newsletter-signal__svg"
        viewBox="0 0 500 500"
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
          r="120"
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
                <NodeName link={link} lang="cs" />
                <NodeName link={link} lang="en" />
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
