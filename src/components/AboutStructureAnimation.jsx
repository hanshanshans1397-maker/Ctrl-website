const VIEW_WIDTH = 400;
const VIEW_HEIGHT = 336;
const CENTER_X = 200;

const BOARD = { x: 36, y: 10, w: 328, h: 78 };
const BOARD_NODES = [
  { x: 86, y: 46, name: "Jan" },
  { x: 146, y: 46, name: "Jakub" },
  { x: 206, y: 46, name: "Bety" },
  { x: 266, y: 46, name: "Alena" },
];

const COUNCIL_Y = 120;
const BRANCH_Y = 136;

const COLS = 3;
const CARD_W = 88;
const CARD_H = 46;
const GAP_X = 10;
const GAP_Y = 8;
const GRID_X = (VIEW_WIDTH - (COLS * CARD_W + (COLS - 1) * GAP_X)) / 2;
const ROW_Y = [154, 154 + CARD_H + GAP_Y, 154 + 2 * (CARD_H + GAP_Y)];

const CELLS = [
  { id: "01", icon: "pr" },
  { id: "02", icon: "social" },
  { id: "03", icon: "podcast" },
  { id: "04", icon: "research" },
  { id: "05", icon: "graphics" },
  { id: "06", icon: "video" },
  { id: "07", icon: "intl" },
  { id: "08", icon: "events" },
  { id: "09", icon: "it" },
].map((cell, index) => {
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  const x = GRID_X + col * (CARD_W + GAP_X);
  const y = ROW_Y[row];
  return {
    ...cell,
    index,
    x,
    y,
    cx: x + CARD_W / 2,
  };
});

const HORIZ_LEFT = GRID_X + CARD_W / 2;
const HORIZ_RIGHT = GRID_X + (COLS - 1) * (CARD_W + GAP_X) + CARD_W / 2;

const BRANCH_PATHS = CELLS.map(
  ({ cx, y }) => `M ${cx} ${BRANCH_Y} L ${cx} ${y}`,
);

function MiniSilhouette() {
  return (
    <g>
      <circle
        cx="0"
        cy="-4"
        r="4"
        fill="rgba(74,123,255,0.18)"
        stroke="rgba(74,123,255,0.42)"
        strokeWidth="1"
      />
      <path
        d="M -5.5 1.5 C -5.5 7, 5.5 7, 5.5 1.5 L 4.5 9 Q 0 10.5 -4.5 9 Z"
        fill="rgba(74,123,255,0.14)"
        stroke="rgba(74,123,255,0.38)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </g>
  );
}

function CellIcon({ type }) {
  const stroke = "rgba(11,16,32,0.42)";
  const accent = "#4a7bff";

  switch (type) {
    case "pr":
      return (
        <>
          <path
            d="M 3 16 L 3 5 L 13 5 L 18 10 L 18 16 Z"
            fill="rgba(74,123,255,0.12)"
            stroke={accent}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M 18 10 L 22 8 L 22 14 L 18 16"
            fill="rgba(74,123,255,0.16)"
            stroke={accent}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </>
      );
    case "social":
      return (
        <>
          <circle cx="8" cy="11" r="3.5" stroke={accent} strokeWidth="1.1" fill="rgba(74,123,255,0.14)" />
          <circle cx="19" cy="8" r="2.5" stroke={stroke} strokeWidth="1" fill="none" />
          <circle cx="21" cy="17" r="2.5" stroke={stroke} strokeWidth="1" fill="none" />
          <line x1="10.5" y1="12.5" x2="16.8" y2="10" stroke={stroke} strokeWidth="0.9" />
          <line x1="11" y1="13.5" x2="19" y2="16" stroke={stroke} strokeWidth="0.9" />
        </>
      );
    case "podcast":
      return (
        <>
          <rect x="7" y="4" width="10" height="14" rx="5" fill="rgba(74,123,255,0.14)" stroke={accent} strokeWidth="1.1" />
          <line x1="12" y1="18" x2="12" y2="22" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
          <line x1="7" y1="22" x2="17" y2="22" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
        </>
      );
    case "research":
      return (
        <>
          <circle cx="12" cy="12" r="7.5" stroke={accent} strokeWidth="1.3" fill="rgba(74,123,255,0.12)" />
          <line x1="17" y1="17" x2="22" y2="22" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        </>
      );
    case "graphics":
      return (
        <>
          <circle cx="9" cy="10" r="3" fill="rgba(74,123,255,0.22)" stroke={accent} strokeWidth="1.1" />
          <circle cx="18" cy="8" r="2.5" fill="rgba(74,123,255,0.16)" stroke={accent} strokeWidth="1.1" />
          <circle cx="19" cy="17" r="2" fill="rgba(74,123,255,0.1)" stroke={stroke} strokeWidth="1" />
        </>
      );
    case "video":
      return (
        <>
          <rect x="3" y="6" width="20" height="13" rx="1.5" stroke={stroke} strokeWidth="1.1" fill="rgba(74,123,255,0.1)" />
          <path d="M 10 9 L 16 12.5 L 10 16 Z" fill={accent} />
        </>
      );
    case "intl":
      return (
        <>
          <circle cx="12" cy="12" r="8" stroke={accent} strokeWidth="1.2" fill="rgba(74,123,255,0.1)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8" stroke={stroke} strokeWidth="0.9" fill="none" />
          <line x1="4" y1="12" x2="20" y2="12" stroke={stroke} strokeWidth="0.9" />
        </>
      );
    case "events":
      return (
        <>
          <rect x="5" y="6" width="16" height="14" rx="1.5" stroke={stroke} strokeWidth="1.1" fill="rgba(74,123,255,0.1)" />
          <line x1="5" y1="11" x2="21" y2="11" stroke={stroke} strokeWidth="0.9" />
          <line x1="9" y1="4" x2="9" y2="8" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
          <line x1="17" y1="4" x2="17" y2="8" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
        </>
      );
    case "it":
      return (
        <>
          <rect x="3" y="5" width="18" height="13" rx="1.5" stroke={accent} strokeWidth="1.1" fill="rgba(74,123,255,0.1)" />
          <path d="M 6 10 L 9 13 L 12 9" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="15" x2="18" y2="15" stroke={stroke} strokeWidth="0.9" strokeLinecap="round" />
        </>
      );
    default:
      return null;
  }
}

function CellCard({ cell }) {
  return (
    <g transform={`translate(${cell.x} ${cell.y})`}>
      <g className={`about-structure__cell about-structure__cell--${cell.index}`}>
        <rect
          className="about-structure__cell-box"
          width={CARD_W}
          height={CARD_H}
          rx="3"
          fill="#ffffff"
          stroke="rgba(11,16,32,0.1)"
          strokeWidth="1.1"
        />
        <text
          x="8"
          y="14"
          fill="rgba(11,16,32,0.28)"
          fontSize="8"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="1.2"
        >
          {cell.id}
        </text>
        <g transform={`translate(${CARD_W / 2 - 12} ${CARD_H / 2 - 8})`}>
          <CellIcon type={cell.icon} />
        </g>
      </g>
    </g>
  );
}

export function AboutStructureAnimation() {
  return (
    <div
      className="about-structure"
      role="img"
      aria-label="Ilustrace organizační struktury CTRL Europe"
    >
      <svg
        className="about-structure__svg"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="about-structure__board">
          <rect
            x={BOARD.x}
            y={BOARD.y}
            width={BOARD.w}
            height={BOARD.h}
            fill="#ffffff"
            stroke="rgba(11,16,32,0.09)"
            strokeWidth="1"
          />
          <rect
            x={BOARD.x}
            y={BOARD.y}
            width="3"
            height={BOARD.h}
            fill="#4a7bff"
          />
          <text
            className="about-structure__label cs"
            x={BOARD.x + 14}
            y={BOARD.y + 16}
            fill="#4a7bff"
            fontSize="8"
            fontFamily="var(--font-mono, monospace)"
            letterSpacing="2"
          >
            PŘEDSEDNICTVO
          </text>
          <text
            className="about-structure__label en"
            x={BOARD.x + 14}
            y={BOARD.y + 16}
            fill="#4a7bff"
            fontSize="8"
            fontFamily="var(--font-mono, monospace)"
            letterSpacing="2"
          >
            EXECUTIVE BOARD
          </text>

          {BOARD_NODES.map((node, index) => (
            <g key={node.x} transform={`translate(${node.x} ${node.y})`}>
              <g
                className={`about-structure__board-node about-structure__board-node--${index}`}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="11"
                  fill="rgba(74,123,255,0.06)"
                  stroke="rgba(74,123,255,0.2)"
                  strokeWidth="1"
                />
                <MiniSilhouette />
                <text
                  x="0"
                  y="24"
                  textAnchor="middle"
                  fill="rgba(11,16,32,0.55)"
                  fontSize="8"
                  fontFamily="var(--font-mono, monospace)"
                  letterSpacing="0.3"
                >
                  {node.name}
                </text>
              </g>
            </g>
          ))}
        </g>

        <path
          className="about-structure__line about-structure__line--vert"
          pathLength="100"
          d={`M ${CENTER_X} ${BOARD.y + BOARD.h} L ${CENTER_X} ${COUNCIL_Y}`}
          stroke="rgba(74,123,255,0.4)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        <g className="about-structure__council">
          <g className="about-structure__council-labels">
            <rect
              className="about-structure__council-label-bg"
              x={CENTER_X - 100}
              y={94}
              width="200"
              height="12"
              rx="2"
              fill="#f5f5f3"
            />
            <text
              className="about-structure__label cs"
              x={CENTER_X}
              y={103}
              textAnchor="middle"
              fill="#4a7bff"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="2"
            >
              RADA ZÁSTUPCŮ
            </text>
            <text
              className="about-structure__label en"
              x={CENTER_X}
              y={103}
              textAnchor="middle"
              fill="#4a7bff"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="2"
            >
              COUNCIL OF REPRESENTATIVES
            </text>
          </g>

          <g transform={`translate(${CENTER_X} ${COUNCIL_Y})`}>
            <g className="about-structure__council-node">
              <circle
                cx="0"
                cy="0"
                r="7"
                fill="rgba(74,123,255,0.16)"
                stroke="#4a7bff"
                strokeWidth="1.4"
              />
              <circle cx="0" cy="0" r="2.5" fill="#4a7bff" opacity="0.6" />
            </g>
          </g>

          <path
            className="about-structure__line about-structure__line--horiz"
            pathLength="100"
            d={`M ${HORIZ_LEFT} ${BRANCH_Y} L ${HORIZ_RIGHT} ${BRANCH_Y}`}
            stroke="rgba(74,123,255,0.4)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </g>

        {BRANCH_PATHS.map((d, index) => (
          <path
            key={d}
            className={`about-structure__line about-structure__branch about-structure__branch--${index}`}
            pathLength="100"
            d={d}
            stroke="rgba(74,123,255,0.28)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        ))}

        {CELLS.map((cell) => (
          <CellCard key={cell.id} cell={cell} />
        ))}

      </svg>
    </div>
  );
}
