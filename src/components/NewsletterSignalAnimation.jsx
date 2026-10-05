const HUB = { x: 240, y: 170 };

const LINKS = [
  {
    id: 'news',
    x: 108,
    y: 72,
    n: '01',
    cs: 'Aktuality',
    en: 'News',
    d: 'M 108 72 C 158 72, 196 118, 240 170',
  },
  {
    id: 'workshops',
    x: 372,
    y: 72,
    n: '02',
    cs: 'Workshopy',
    en: 'Workshops',
    d: 'M 372 72 C 322 72, 284 118, 240 170',
  },
  {
    id: 'summit',
    x: 108,
    y: 268,
    n: '03',
    cs: 'Summit',
    en: 'Summit',
    d: 'M 108 268 C 158 268, 196 222, 240 170',
  },
  {
    id: 'run',
    x: 372,
    y: 268,
    n: '04',
    cs: 'CTRL Run',
    en: 'CTRL Run',
    d: 'M 372 268 C 322 268, 284 222, 240 170',
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

export function NewsletterSignalAnimation({ preferences = [], isSuccess = false }) {
  const active = new Set(preferences);
  const copy = copyFor(active.size, isSuccess);

  return (
    <figure
      className="newsletter-signal"
      data-success={isSuccess ? 'true' : undefined}
      data-count={isSuccess ? LINKS.length : active.size}
    >
      <figcaption className="newsletter-signal__header">
        <span className="newsletter-signal__label cs">{copy.labelCs}</span>
        <span className="newsletter-signal__label en">{copy.labelEn}</span>
      </figcaption>

      <svg
        className="newsletter-signal__svg"
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx={HUB.x} cy="286" rx="150" ry="18" fill="rgba(74,123,255,0.05)" />

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
                r="3.4"
                style={{ offsetPath: `path('${link.d}')` }}
              />
            </g>
          );
        })}

        {LINKS.map((link) => {
          const on = isSuccess || active.has(link.id);
          const labelY = link.y < HUB.y ? link.y - 40 : link.y + 46;
          return (
            <g key={link.id} className={on ? 'is-on' : undefined}>
              <g
                className="newsletter-signal__node"
                transform={`translate(${link.x} ${link.y})`}
              >
                <circle r="26" />
                <text className="newsletter-signal__index">{link.n}</text>
              </g>
              <text
                className="newsletter-signal__name cs"
                x={link.x}
                y={labelY}
                textAnchor="middle"
              >
                {link.cs}
              </text>
              <text
                className="newsletter-signal__name en"
                x={link.x}
                y={labelY}
                textAnchor="middle"
              >
                {link.en}
              </text>
            </g>
          );
        })}

        <g className="newsletter-signal__hub" transform={`translate(${HUB.x} ${HUB.y})`}>
          <circle className="newsletter-signal__hub-ring" r="46" />
          <circle className="newsletter-signal__hub-bg" r="34" />
          <g className="newsletter-signal__mail">
            <rect x="-15" y="-10" width="30" height="20" />
            <path d="M -15 -10 L 0 2 L 15 -10" />
          </g>
          <path className="newsletter-signal__check" d="M -7 1.5 L -2 6.5 L 8 -5" />
        </g>
      </svg>

      <p className="newsletter-signal__caption cs">{copy.captionCs}</p>
      <p className="newsletter-signal__caption en">{copy.captionEn}</p>
    </figure>
  );
}
