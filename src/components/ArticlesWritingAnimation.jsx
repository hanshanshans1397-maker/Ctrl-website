const RULED_LINES = [78, 108, 138, 168, 198, 228];

function PaperContent({ inkClassName = "" }) {
  return (
    <>
      <rect
        x="64"
        y="44"
        width="268"
        height="208"
        rx="2"
        fill="#f5f5f3"
        stroke="rgba(11,16,32,0.12)"
        strokeWidth="1"
      />

      {RULED_LINES.map((y) => (
        <line
          key={y}
          x1="84"
          y1={y}
          x2="312"
          y2={y}
          stroke="rgba(74,123,255,0.12)"
          strokeWidth="1"
        />
      ))}

      <line
        x1="108"
        y1="56"
        x2="108"
        y2="240"
        stroke="rgba(74,123,255,0.18)"
        strokeWidth="1"
      />

      <rect
        x="120"
        y="58"
        width="72"
        height="8"
        rx="1"
        fill="rgba(11,16,32,0.06)"
      />

      <g
        className={inkClassName}
        stroke="#0b1020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path
          className="articles-writing__line articles-writing__line--1"
          pathLength="100"
          d="M 118 88 C 148 85, 178 91, 208 87 C 238 83, 268 89, 298 86 C 312 84, 322 87, 328 85"
        />
        <path
          className="articles-writing__line articles-writing__line--2"
          pathLength="100"
          d="M 118 118 C 152 115, 186 121, 216 117 C 246 113, 276 119, 300 116 C 314 114, 326 117, 334 115"
        />
        <path
          className="articles-writing__line articles-writing__line--3"
          pathLength="100"
          d="M 118 148 C 142 145, 176 151, 210 147 C 244 143, 272 149, 298 146 C 310 144, 320 147, 326 145"
        />
        <path
          className="articles-writing__line articles-writing__line--4"
          pathLength="100"
          d="M 118 178 C 156 175, 194 181, 224 177 C 254 173, 282 179, 304 176"
        />
      </g>
    </>
  );
}

function AiWritingSource() {
  return (
    <g className="articles-writing__ai">
      {/* neuronová síť */}
      <g
        stroke="rgba(74,123,255,0.22)"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <line x1="48" y1="-6" x2="72" y2="-24" />
        <line x1="48" y1="-6" x2="80" y2="8" />
        <line x1="48" y1="-6" x2="30" y2="-28" />
        <line x1="48" y1="-6" x2="56" y2="-36" />
        <line x1="72" y1="-24" x2="80" y2="8" />
        <line x1="30" y1="-28" x2="56" y2="-36" />
        <line x1="72" y1="-24" x2="56" y2="-36" />
      </g>

      {/* datový proud k peru */}
      <path
        className="articles-writing__ai-stream"
        d="M 48 -6 C 32 -18, 14 -32, 0 -42"
        stroke="rgba(74,123,255,0.45)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* uzly */}
      <circle
        className="articles-writing__ai-node articles-writing__ai-node--hub"
        cx="48"
        cy="-6"
        r="5"
        fill="rgba(74,123,255,0.28)"
        stroke="#4a7bff"
        strokeWidth="1.2"
      />
      <circle
        className="articles-writing__ai-node articles-writing__ai-node--2"
        cx="72"
        cy="-24"
        r="3"
        fill="rgba(74,123,255,0.16)"
        stroke="rgba(74,123,255,0.55)"
        strokeWidth="1"
      />
      <circle
        className="articles-writing__ai-node articles-writing__ai-node--3"
        cx="80"
        cy="8"
        r="3"
        fill="rgba(74,123,255,0.16)"
        stroke="rgba(74,123,255,0.55)"
        strokeWidth="1"
      />
      <circle
        className="articles-writing__ai-node articles-writing__ai-node--4"
        cx="30"
        cy="-28"
        r="2.5"
        fill="rgba(74,123,255,0.12)"
        stroke="rgba(74,123,255,0.45)"
        strokeWidth="1"
      />
      <circle
        className="articles-writing__ai-node articles-writing__ai-node--5"
        cx="56"
        cy="-36"
        r="2.5"
        fill="rgba(74,123,255,0.12)"
        stroke="rgba(74,123,255,0.45)"
        strokeWidth="1"
      />

      {/* jiskry – tokeny generovaného textu */}
      <circle
        className="articles-writing__ai-spark articles-writing__ai-spark--1"
        cx="24"
        cy="-20"
        r="1.2"
        fill="#4a7bff"
      />
      <circle
        className="articles-writing__ai-spark articles-writing__ai-spark--2"
        cx="18"
        cy="-32"
        r="1"
        fill="#4a7bff"
      />
      <circle
        className="articles-writing__ai-spark articles-writing__ai-spark--3"
        cx="10"
        cy="-38"
        r="0.8"
        fill="#2d5fe8"
      />
    </g>
  );
}

export function ArticlesWritingAnimation() {
  return (
    <div
      className="articles-writing"
      role="img"
      aria-label="Ilustrace psaní článku umělou inteligencí"
    >
      <svg
        className="articles-writing__svg"
        viewBox="0 0 480 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="articles-paper-shadow"
            x="-10%"
            y="-10%"
            width="120%"
            height="130%"
          >
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="10"
              floodColor="#0b1020"
              floodOpacity="0.07"
            />
          </filter>
          <clipPath id="articles-desk-clip">
            <rect x="0" y="0" width="480" height="252" />
          </clipPath>
        </defs>

        {/* ztmavené logo v pravém horním rohu */}
        <image
          className="articles-writing__logo"
          href="/ctrl_logo_bez_pozadi.png"
          x="372"
          y="8"
          width="96"
          height="66"
          preserveAspectRatio="xMidYMid meet"
        />

        <rect
          x="24"
          y="248"
          width="432"
          height="4"
          rx="1"
          fill="rgba(11,16,32,0.06)"
        />

        <g clipPath="url(#articles-desk-clip)">
          <g className="articles-writing__paper-back" filter="url(#articles-paper-shadow)">
            <PaperContent />
          </g>

          <g
            className="articles-writing__paper"
            filter="url(#articles-paper-shadow)"
          >
            <PaperContent inkClassName="articles-writing__ink" />
          </g>
        </g>

        <g className="articles-writing__pen">
          <g transform="translate(268 138) rotate(-38)">
            <AiWritingSource />

            {/* pero – řízené AI */}
            <rect x="-3" y="-64" width="6" height="44" rx="1" fill="#1c2440" />
            <rect
              x="-2.5"
              y="-68"
              width="5"
              height="8"
              rx="0.5"
              fill="#1c2440"
            />
            {/* digitální objímka */}
            <path d="M -3 -20 L 3 -20 L 2 -8 L -2 -8 Z" fill="#4a7bff" opacity="0.35" />

            {/* modrý hrot – špička na (0,0) */}
            <path d="M -2.5 -8 L 2.5 -8 L 0 0 Z" fill="#4a7bff" />
            <circle
              className="articles-writing__pen-tip"
              cx="0"
              cy="0"
              r="2"
              fill="#2d5fe8"
            />
          </g>
        </g>

        <g opacity="0.7">
          <ellipse
            cx="388"
            cy="236"
            rx="18"
            ry="5"
            fill="rgba(11,16,32,0.06)"
          />
          <path
            d="M 370 236 L 372 210 C 372 204 378 200 388 200 C 398 200 404 204 404 210 L 406 236 Z"
            fill="#eeecea"
            stroke="rgba(11,16,32,0.14)"
            strokeWidth="1"
          />
          <path
            d="M 406 218 C 416 218, 420 222, 420 228 C 420 234, 414 238, 404 238"
            stroke="rgba(11,16,32,0.14)"
            strokeWidth="1"
            fill="none"
          />
          <path
            className="articles-writing__steam articles-writing__steam--1"
            d="M 382 194 C 380 188, 384 182, 382 176"
            stroke="rgba(11,16,32,0.18)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            className="articles-writing__steam articles-writing__steam--2"
            d="M 392 192 C 394 186, 390 180, 392 174"
            stroke="rgba(11,16,32,0.14)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
