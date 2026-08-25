const HUB = { x: 280, y: 210 };
const HUB_RADIUS = 24;
const OUTER_RADIUS = 156;
const INNER_RADIUS = 118;
const BOX = 48;
const HALF = BOX / 2;
const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 420;

const SPOKES = [
  { id: 0, angle: -90, radius: OUTER_RADIUS, infected: true },
  { id: 1, angle: -18, radius: INNER_RADIUS, infected: false },
  { id: 2, angle: 54, radius: OUTER_RADIUS, infected: true },
  { id: 3, angle: 126, radius: INNER_RADIUS, infected: false },
  { id: 4, angle: 198, radius: OUTER_RADIUS, infected: true },
];

function polar(cx, cy, radius, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

const COMPUTERS = SPOKES.map(({ id, angle, radius, infected }) => {
  const { x, y } = polar(HUB.x, HUB.y, radius, angle);
  return { id, cx: x, cy: y, infected };
});

function makeRoutePath(angleDeg, targetRadius, index) {
  const start = polar(HUB.x, HUB.y, HUB_RADIUS + 6, angleDeg);
  const end = polar(HUB.x, HUB.y, targetRadius - HALF, angleDeg);
  const mid = polar(
    HUB.x,
    HUB.y,
    (HUB_RADIUS + targetRadius) / 2,
    angleDeg,
  );
  const bow = index % 2 === 0 ? 14 : -14;
  const perpRad = ((angleDeg + 90) * Math.PI) / 180;
  const cpx = mid.x + bow * Math.cos(perpRad);
  const cpy = mid.y + bow * Math.sin(perpRad);

  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

const PATHS = SPOKES.map(({ angle, radius }, index) =>
  makeRoutePath(angle, radius, index),
);

function MonitorIcon() {
  return (
    <>
      <rect
        x="14"
        y="12"
        width="20"
        height="15"
        rx="1.5"
        fill="none"
        stroke="rgba(11,16,32,0.45)"
        strokeWidth="1.5"
      />
      <line
        x1="24"
        y1="27"
        x2="24"
        y2="33"
        stroke="rgba(11,16,32,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="33"
        x2="31"
        y2="33"
        stroke="rgba(11,16,32,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  );
}

function DisinfoIcon({ boxSize = BOX }) {
  const scale = 1.35;
  const iconCenterX = 20;
  const iconCenterY = 16;

  return (
    <g
      transform={`translate(${boxSize / 2} ${boxSize / 2}) scale(${scale}) translate(${-iconCenterX} ${-iconCenterY})`}
    >
      <path
        d="M 12 14 C 12 10, 16 8, 20 10 C 24 8, 28 10, 28 14 C 28 18, 22 24, 22 24 C 22 24, 16 18, 12 14 Z"
        fill="rgba(180,60,60,0.2)"
        stroke="rgba(180,60,60,0.55)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="12.5"
        x2="22"
        y2="17.5"
        stroke="rgba(180,60,60,0.75)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="22" cy="19.5" r="0.9" fill="rgba(180,60,60,0.75)" />
    </g>
  );
}

function InternetSource() {
  return (
    <g className="aktuality-info__internet">
      <circle
        className="aktuality-info__pulse aktuality-info__pulse--2"
        cx={HUB.x}
        cy={HUB.y}
        r="42"
        fill="none"
        stroke="rgba(74,123,255,0.18)"
        strokeWidth="1"
      />
      <circle
        className="aktuality-info__pulse aktuality-info__pulse--1"
        cx={HUB.x}
        cy={HUB.y}
        r="30"
        fill="none"
        stroke="rgba(74,123,255,0.28)"
        strokeWidth="1"
      />

      <g stroke="rgba(74,123,255,0.22)" strokeWidth="1" strokeLinecap="round">
        {SPOKES.map(({ angle }) => {
          const inner = polar(HUB.x, HUB.y, HUB_RADIUS + 2, angle);
          const outer = polar(HUB.x, HUB.y, HUB_RADIUS + 14, angle);
          return (
            <line
              key={angle}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
            />
          );
        })}
      </g>

      <circle
        cx={HUB.x}
        cy={HUB.y}
        r={HUB_RADIUS}
        fill="rgba(74,123,255,0.14)"
        stroke="#4a7bff"
        strokeWidth="1.5"
      />
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="6"
        fill="rgba(74,123,255,0.35)"
      />
    </g>
  );
}

function Computer({ id, cx, cy, infected }) {
  const stateClass = infected
    ? "aktuality-info__computer--infected"
    : "aktuality-info__computer--protected";
  const bodyClass = infected
    ? "aktuality-info__computer-body--infected"
    : "aktuality-info__computer-body--protected";

  return (
    <g transform={`translate(${cx - HALF} ${cy - HALF})`}>
      <g
        className={`aktuality-info__computer aktuality-info__computer--${id} ${stateClass} ${bodyClass}`}
      >
        <rect
          className="aktuality-info__computer-box"
          width={BOX}
          height={BOX}
          rx="4"
        />
        <g className="aktuality-info__computer-icon">
          <MonitorIcon />
        </g>
        {!infected && (
          <g className="aktuality-info__reject-badge" aria-hidden="true">
            <circle cx="36" cy="12" r="8" />
            <line x1="32.5" y1="8.5" x2="39.5" y2="15.5" />
            <line x1="39.5" y1="8.5" x2="32.5" y2="15.5" />
          </g>
        )}
      </g>
    </g>
  );
}

export function AktualityInfoAnimation() {
  return (
    <div
      className="aktuality-info"
      role="img"
      aria-label="Ilustrace šíření dezinformací po internetu"
    >
      <svg
        className="aktuality-info__svg"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="aktuality-info-clip">
            <rect x="0" y="0" width={VIEW_WIDTH} height={VIEW_HEIGHT} />
          </clipPath>
        </defs>

        <image
          className="aktuality-info__logo"
          href="/ctrl_logo_bez_pozadi.png"
          x="448"
          y="10"
          width="96"
          height="66"
          preserveAspectRatio="xMidYMid meet"
        />

        <g clipPath="url(#aktuality-info-clip)">
          {PATHS.map((d, index) => (
            <path
              key={d}
              className="aktuality-info__route"
              d={d}
              stroke="rgba(11,16,32,0.12)"
              strokeWidth="1.4"
              strokeDasharray="6 5"
              fill="none"
            />
          ))}

          <InternetSource />

          {COMPUTERS.map((computer) => (
            <Computer key={computer.id} {...computer} />
          ))}

          {PATHS.map((d, index) => {
            const isProtected = !SPOKES[index].infected;

            return (
              <g
                key={`packet-${index}`}
                className={`aktuality-info__packet aktuality-info__packet--${index}${isProtected ? " aktuality-info__packet--reject" : ""}`}
                style={{ offsetPath: `path('${d}')` }}
              >
                <g
                  className={`aktuality-info__packet-body${isProtected ? ` aktuality-info__packet-body--reject-${index}` : ""}`}
                >
                  <rect
                    className="aktuality-info__packet-box"
                    x={-HALF}
                    y={-HALF}
                    width={BOX}
                    height={BOX}
                    rx="4"
                    fill="var(--color-card)"
                    stroke="rgba(180,60,60,0.45)"
                    strokeWidth="1.2"
                  />
                  <g transform={`translate(${-HALF} ${-HALF})`}>
                    <DisinfoIcon />
                  </g>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
