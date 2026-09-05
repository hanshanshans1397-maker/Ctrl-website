import { useLang } from '../context/LangContext';

const VIEW_WIDTH = 400;
const VIEW_HEIGHT = 330;
const CENTER_X = 200;

const BOARD = { x: 28, y: 8, w: 344, h: 108 };
const BOARD_NODES = [
  { x: 140, y: 42, name: 'Jan' },
  { x: 260, y: 42, name: 'Michaela' },
  { x: 70, y: 90, name: 'Laura' },
  { x: 156, y: 90, name: 'Dominik' },
  { x: 244, y: 90, name: 'Jakub' },
  { x: 330, y: 90, name: 'Alžběta' },
];

const COUNCIL = { x: 70, y: 144, w: 260, h: 48 };
const TEAMS = [
  { id: '01', x: 28, labelCs: 'TÝMY', labelEn: 'TEAMS' },
  { id: '02', x: 156, labelCs: 'ZEMĚ', labelEn: 'COUNTRIES' },
  { id: '03', x: 284, labelCs: 'SÍŤ', labelEn: 'NETWORK' },
];
const TEAM_Y = 228;
const TEAM_W = 88;
const TEAM_H = 62;

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

export function AboutStructureAnimation() {
  const { isEn } = useLang();

  return (
    <div
      className="about-structure"
      role="img"
      aria-label={
        isEn
          ? 'Illustration of CTRL Europe organizational structure: Executive Board, Main Council, National Teams'
          : 'Ilustrace organizační struktury CTRL Europe: předsednictvo, hlavní rada, národní týmy'
      }
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
            fill="var(--color-card)"
            stroke="rgba(11,16,32,0.09)"
            strokeWidth="1"
          />
          <rect x={BOARD.x} y={BOARD.y} width="3" height={BOARD.h} fill="#4a7bff" />
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
            <g key={node.name} transform={`translate(${node.x} ${node.y})`}>
              <g className={`about-structure__board-node about-structure__board-node--${index}`}>
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
          d={`M ${CENTER_X} ${BOARD.y + BOARD.h} L ${CENTER_X} ${COUNCIL.y}`}
          stroke="rgba(74,123,255,0.4)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        <g className="about-structure__council">
          <g className="about-structure__council-labels">
            <rect
              x={COUNCIL.x}
              y={COUNCIL.y}
              width={COUNCIL.w}
              height={COUNCIL.h}
              fill="var(--color-card)"
              stroke="rgba(11,16,32,0.09)"
              strokeWidth="1"
            />
            <rect x={COUNCIL.x} y={COUNCIL.y} width="3" height={COUNCIL.h} fill="#4a7bff" />
            <text
              className="about-structure__label cs"
              x={COUNCIL.x + 16}
              y={COUNCIL.y + 20}
              fill="#4a7bff"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="2"
            >
              HLAVNÍ RADA
            </text>
            <text
              className="about-structure__label en"
              x={COUNCIL.x + 16}
              y={COUNCIL.y + 20}
              fill="#4a7bff"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="2"
            >
              MAIN COUNCIL
            </text>
            <text
              className="about-structure__label cs"
              x={COUNCIL.x + 16}
              y={COUNCIL.y + 36}
              fill="rgba(11,16,32,0.45)"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="0.4"
            >
              Dominik Ševela
            </text>
            <text
              className="about-structure__label en"
              x={COUNCIL.x + 16}
              y={COUNCIL.y + 36}
              fill="rgba(11,16,32,0.45)"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="0.4"
            >
              Dominik Ševela
            </text>
          </g>
          <g transform={`translate(${COUNCIL.x + COUNCIL.w - 28} ${COUNCIL.y + 24})`}>
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
        </g>

        <path
          className="about-structure__line about-structure__line--horiz"
          pathLength="100"
          d={`M ${CENTER_X} ${COUNCIL.y + COUNCIL.h} L ${CENTER_X} ${TEAM_Y}`}
          stroke="rgba(74,123,255,0.4)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {TEAMS.map((team, index) => (
          <g key={team.id} transform={`translate(${team.x} ${TEAM_Y})`}>
            <g className={`about-structure__cell about-structure__cell--${index}`}>
              <rect
                className="about-structure__cell-box"
                width={TEAM_W}
                height={TEAM_H}
                rx="0"
                fill="var(--color-card)"
                stroke="rgba(11,16,32,0.1)"
                strokeWidth="1.1"
              />
              <text
                x="8"
                y="16"
                fill="rgba(11,16,32,0.28)"
                fontSize="8"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="1.2"
              >
                {team.id}
              </text>
              <text
                className="about-structure__label cs"
                x="8"
                y="40"
                fill="rgba(11,16,32,0.62)"
                fontSize="9"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="1.4"
              >
                {team.labelCs}
              </text>
              <text
                className="about-structure__label en"
                x="8"
                y="40"
                fill="rgba(11,16,32,0.62)"
                fontSize="9"
                fontFamily="var(--font-mono, monospace)"
                letterSpacing="1.4"
              >
                {team.labelEn}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
