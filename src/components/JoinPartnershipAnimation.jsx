const VIEW_W = 480;
const VIEW_H = 300;

const ACCENT = "#4a7bff";
const INK = "rgba(11,16,32,0.55)";

const R = 78;
const LEFT_C = { x: 184, y: 128 };
const RIGHT_C = { x: 296, y: 128 };

/* Průnik kružnic (spočteno pro R=78, středy 184/296): čočka mezi (240,73.7) a (240,182.3) */
const LENS_PATH =
  "M 240 73.7 A 78 78 0 0 1 240 182.3 A 78 78 0 0 1 240 73.7 Z";

const CHIPS = [
  { x: 42, w: 104, cs: "Workshop", en: "Workshop" },
  { x: 160, w: 104, cs: "Erasmus+", en: "Erasmus+" },
  { x: 278, w: 160, cs: "Společný projekt", en: "Joint project" },
];

function SchoolGlyph() {
  return (
    <g transform={`translate(${LEFT_C.x - 30} 84)`}>
      <path
        d="M 0 18 L 30 2 L 60 18"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="18"
        width="50"
        height="28"
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="25"
        y="32"
        width="10"
        height="14"
        fill="none"
        stroke="rgba(11,16,32,0.4)"
        strokeWidth="1.2"
      />
      <rect
        x="11"
        y="24"
        width="8"
        height="8"
        fill="none"
        stroke="rgba(11,16,32,0.32)"
        strokeWidth="1"
      />
      <rect
        x="41"
        y="24"
        width="8"
        height="8"
        fill="none"
        stroke="rgba(11,16,32,0.32)"
        strokeWidth="1"
      />
    </g>
  );
}

function Spark({ className, x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className}>
        <path
          d="M 0 -6 L 1.6 -1.6 L 6 0 L 1.6 1.6 L 0 6 L -1.6 1.6 L -6 0 L -1.6 -1.6 Z"
          fill={ACCENT}
        />
      </g>
    </g>
  );
}

function Chip({ index, x, w, cs, en }) {
  return (
    <g transform={`translate(${x} 246)`}>
      <g className={`join-partnership__chip join-partnership__chip--${index}`}>
        <rect
          width={w}
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="rgba(74,123,255,0.35)"
          strokeWidth="1.2"
        />
        <circle cx="17" cy="16" r="8" fill="rgba(74,123,255,0.14)" />
        <path
          d="M 13.5 16 L 16 18.5 L 21 13.5"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          className="join-partnership__t cs"
          x="32"
          y="20.5"
          fill="rgba(11,16,32,0.7)"
          fontSize="12"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="0.2"
        >
          {cs}
        </text>
        <text
          className="join-partnership__t en"
          x="32"
          y="20.5"
          fill="rgba(11,16,32,0.7)"
          fontSize="12"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="0.2"
        >
          {en}
        </text>
      </g>
    </g>
  );
}

export function JoinPartnershipAnimation({ step = 0, isSuccess = false }) {
  const safeStep = Math.min(Math.max(step, 0), 2);

  return (
    <div
      className="join-partnership"
      data-step={safeStep}
      data-success={isSuccess ? "true" : undefined}
      role="img"
      aria-label="Ilustrace partnerství školy a CTRL Europe"
    >
      <svg
        className="join-partnership__svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="join-venn-lens" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="rgba(74,123,255,0.3)" />
            <stop offset="100%" stopColor="rgba(74,123,255,0.08)" />
          </radialGradient>
          <filter id="join-venn-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="join-partnership__scene">
          {/* rotující orbit kolem celé kompozice */}
          <g className="join-partnership__orbit">
            <g className="join-partnership__orbit-spin">
              <circle
                cx="240"
                cy="128"
                r="116"
                fill="none"
                stroke="rgba(74,123,255,0.3)"
                strokeWidth="1"
                strokeDasharray="2 7"
                strokeLinecap="round"
              />
              <circle cx="240" cy="12" r="3" fill={ACCENT} opacity="0.55" />
            </g>
          </g>

          {/* tečkovaná linka „hledáme spojení" — viditelná jen v kroku 0 */}
          <line
            className="join-partnership__seek"
            x1="222"
            y1="128"
            x2="258"
            y2="128"
            stroke="rgba(74,123,255,0.6)"
            strokeWidth="1.4"
            strokeDasharray="3 6"
            strokeLinecap="round"
          />

          {/* levý kruh — partner */}
          <g className="join-partnership__half join-partnership__half--partner">
            <g className="join-partnership__half-inner">
              <circle
                cx={LEFT_C.x}
                cy={LEFT_C.y}
                r={R}
                fill="#ffffff"
                stroke="rgba(11,16,32,0.16)"
                strokeWidth="1.4"
              />
              <SchoolGlyph />
              <text
                x={LEFT_C.x}
                y="164"
                textAnchor="middle"
                fill="rgba(11,16,32,0.5)"
                fontSize="10"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="2.4"
              >
                PARTNER
              </text>
            </g>
          </g>

          {/* pravý kruh — CTRL */}
          <g className="join-partnership__half join-partnership__half--ctrl">
            <g className="join-partnership__half-inner">
              <circle
                cx={RIGHT_C.x}
                cy={RIGHT_C.y}
                r={R}
                fill="#ffffff"
                stroke="rgba(74,123,255,0.5)"
                strokeWidth="1.4"
              />
              <image
                href="/ctrl_logo_bez_pozadi.png"
                x="260"
                y="94"
                width="72"
                height="42"
                preserveAspectRatio="xMidYMid meet"
              />
              <text
                x={RIGHT_C.x}
                y="164"
                textAnchor="middle"
                fill={ACCENT}
                fontSize="10"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="2.4"
              >
                CTRL EUROPE
              </text>
            </g>
          </g>

          {/* průnik — místo, kde partnerství žije */}
          <path
            className="join-partnership__lens"
            d={LENS_PATH}
            fill="url(#join-venn-lens)"
            stroke="rgba(74,123,255,0.45)"
            strokeWidth="1.2"
          />

          {/* symbol synergie */}
          <g className="join-partnership__plus" filter="url(#join-venn-glow)">
            <line
              x1="232"
              y1="128"
              x2="248"
              y2="128"
              stroke={ACCENT}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <line
              x1="240"
              y1="120"
              x2="240"
              y2="136"
              stroke={ACCENT}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>

          {/* pulzní vlny ze spojení */}
          <circle
            className="join-partnership__ring join-partnership__ring--1"
            cx="240"
            cy="128"
            r="34"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.4"
          />
          <circle
            className="join-partnership__ring join-partnership__ring--2"
            cx="240"
            cy="128"
            r="34"
            fill="none"
            stroke="rgba(74,123,255,0.5)"
            strokeWidth="1.1"
          />

          {/* jiskry — oslava po odeslání */}
          <Spark className="join-partnership__spark join-partnership__spark--1" x={240} y={60} />
          <Spark className="join-partnership__spark join-partnership__spark--2" x={264} y={182} s={0.75} />

          {/* výstupy spolupráce */}
          {CHIPS.map((chip, i) => (
            <Chip key={chip.cs} index={i + 1} {...chip} />
          ))}
        </g>
      </svg>
    </div>
  );
}
