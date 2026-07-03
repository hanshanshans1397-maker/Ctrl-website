const VIEW_BOX = "48 42 464 392";
const HUB = { x: 280, y: 208 };

const MEMBERS = [
  { id: 0, x: 280, y: 114, s: 40 },
  { id: 1, x: 190, y: 152, s: 36 },
  { id: 2, x: 370, y: 146, s: 38 },
  { id: 3, x: 160, y: 224, s: 34 },
  { id: 4, x: 400, y: 218, s: 36 },
  { id: 5, x: 206, y: 294, s: 32 },
  { id: 6, x: 354, y: 290, s: 34 },
];

const YOU = { x: 280, y: 312, s: 34 };

// Oblouk z levého dolního rohu do volného místa ve skupině
const APPROACH_PATH =
  "M 62 396 C 138 412, 214 358, 280 312";
const APPROACH_TRAIL =
  "M 62 418 C 138 434, 214 380, 280 336";

const STEP_COPY = [
  {
    labelCs: "Připojuješ se",
    labelEn: "Joining in",
    captionCs: "621 lidí tě čeká. Začni vyplňovat přihlášku.",
    captionEn: "621 people are waiting. Start your application.",
  },
  {
    labelCs: "Hledáš svou buňku",
    labelEn: "Finding your cell",
    captionCs: "Každý v skupině přispívá jinak — najdeš si své místo.",
    captionEn: "Everyone in the group contributes differently — you'll find your place.",
  },
  {
    labelCs: "Přidáváš dovednosti",
    labelEn: "Adding skills",
    captionCs: "Skupina roste díky tomu, co každý přináší.",
    captionEn: "The group grows through what each person brings.",
  },
  {
    labelCs: "Plánuješ čas",
    labelEn: "Planning your time",
    captionCs: "I pár hodin týdně stačí. Důležité je být součástí.",
    captionEn: "Even a few hours a week is enough. Being part of it matters.",
  },
  {
    labelCs: "Skoro u cíle",
    labelEn: "Almost there",
    captionCs: "Poslední krok — a přibydeš do skupiny.",
    captionEn: "One last step — and you'll join the group.",
  },
];

const SUCCESS_COPY = {
  labelCs: "Jsi uvnitř",
  labelEn: "You're in",
  captionCs: "Vítej mezi námi. Brzy se ozveme.",
  captionEn: "Welcome among us. We'll be in touch soon.",
};

function Silhouette({ size, accent = false }) {
  const fill = accent ? "rgba(74,123,255,0.24)" : "rgba(74,123,255,0.13)";
  const stroke = accent ? "#4a7bff" : "rgba(74,123,255,0.38)";

  return (
    <g className="apply-people__silhouette">
      <circle
        cx="0"
        cy={-size * 0.36}
        r={size * 0.32}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.3"
      />
      <path
        d={`M ${-size * 0.52} ${size * 0.02} C ${-size * 0.52} ${size * 0.38}, ${size * 0.52} ${size * 0.38}, ${size * 0.52} ${size * 0.02} L ${size * 0.4} ${size * 0.5} Q 0 ${size * 0.6} ${-size * 0.4} ${size * 0.5} Z`}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Member({ id, x, y, s }) {
  return (
    <g className={`apply-people__member apply-people__member--${id}`}>
      <g transform={`translate(${x} ${y})`}>
        <Silhouette size={s} />
      </g>
    </g>
  );
}

export function ApplyNetworkAnimation({
  step = 0,
  isSuccess = false,
  showCountBump = false,
}) {
  const safeStep = Math.min(Math.max(step, 0), 4);
  const copy = isSuccess ? SUCCESS_COPY : STEP_COPY[safeStep];
  const youAccent = isSuccess || safeStep >= 4;

  return (
    <div
      className="apply-people"
      data-step={safeStep}
      data-success={isSuccess ? "true" : undefined}
      data-bump={showCountBump ? "true" : undefined}
      role="img"
      aria-label="Ilustrace skupiny 621 lidí v síti CTRL Europe"
    >
      <div className="apply-people__header">
        <span className="apply-people__label cs">{copy.labelCs}</span>
        <span className="apply-people__label en">{copy.labelEn}</span>
      </div>

      <svg
        className="apply-people__svg"
        viewBox={VIEW_BOX}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          className="apply-people__ground"
          cx={HUB.x}
          cy="322"
          rx="188"
          ry="32"
          fill="rgba(74,123,255,0.05)"
        />

        <path
          className="apply-people__approach-path"
          d={APPROACH_TRAIL}
          stroke="rgba(74,123,255,0.16)"
          strokeWidth="1.2"
          strokeDasharray="5 6"
          strokeLinecap="round"
          fill="none"
        />

        {MEMBERS.map((member) => (
          <Member key={member.id} {...member} />
        ))}

        <g className="apply-people__hub">
            <circle
              className="apply-people__hub-bg"
              cx={HUB.x}
              cy={HUB.y}
              r="58"
              fill="rgba(74,123,255,0.06)"
              stroke="rgba(74,123,255,0.14)"
              strokeWidth="1"
            />
            <text
              className="apply-people__hub-count apply-people__hub-count--base"
              x={HUB.x}
              y={HUB.y + 12}
              textAnchor="middle"
              fill="#4a7bff"
              fontSize="42"
              fontWeight="700"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="-1"
            >
              621+
            </text>
            <text
              className="apply-people__hub-count apply-people__hub-count--bump"
              x={HUB.x}
              y={HUB.y + 12}
              textAnchor="middle"
              fill="#4a7bff"
              fontSize="42"
              fontWeight="700"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="-1"
            >
              622+
            </text>
          </g>

        <g className="apply-people__member apply-people__member--you">
          <g
            className="apply-people__travel apply-people__travel--you"
            style={{ offsetPath: `path('${APPROACH_PATH}')` }}
          >
            <g className="apply-people__you-scale">
              <g className="apply-people__you-body">
                <Silhouette size={YOU.s} accent={youAccent} />
              </g>
            </g>
          </g>
        </g>

        <g className="apply-people__arrive" transform={`translate(${YOU.x} ${YOU.y})`}>
            <circle
              className="apply-people__arrive-ripple apply-people__arrive-ripple--1"
              r={YOU.s * 0.4}
              fill="none"
              stroke="#4a7bff"
              strokeWidth="1.2"
            />
            <circle
              className="apply-people__arrive-ripple apply-people__arrive-ripple--2"
              r={YOU.s * 0.4}
              fill="none"
              stroke="rgba(74,123,255,0.45)"
              strokeWidth="1"
            />
          </g>

          <circle
            className="apply-people__welcome-ring"
            cx={YOU.x}
            cy={YOU.y}
            r={YOU.s * 0.85}
            fill="none"
          stroke="#4a7bff"
          strokeWidth="1.5"
        />
      </svg>

      <p className="apply-people__caption cs">{copy.captionCs}</p>
      <p className="apply-people__caption en">{copy.captionEn}</p>
    </div>
  );
}
