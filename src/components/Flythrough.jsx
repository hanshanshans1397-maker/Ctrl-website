const COUNTRIES = [
  { cs: 'Česká republika', en: 'Czech Republic' },
  { cs: 'Slovensko', en: 'Slovakia' },
  { cs: 'Rakousko', en: 'Austria' },
  { cs: 'Polsko', en: 'Poland' },
  { cs: 'Slovinsko', en: 'Slovenia' },
  { cs: 'Maďarsko', en: 'Hungary' },
];

const KEYS = ['CTRL', 'ALT', 'DEL'];
const SIGNAL_BARS = 56;
const REEL_DIGITS = Array.from({ length: 20 }, (_, i) => i % 10);
const YEAR = [2, 0, 2, 6];

const NODES = [
  [80, 120],
  [240, 60],
  [400, 140],
  [540, 70],
  [700, 130],
  [860, 60],
  [940, 150],
];

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [1, 3],
  [2, 4],
];

function Rail() {
  return (
    <>
      <span className="flythrough__rail" />
      <img
        className="flythrough__mark"
        src="/ctrl-logo-mark.png"
        alt=""
        width={833}
        height={340}
        decoding="async"
      />
      <span className="flythrough__tag">Take control before someone else does.</span>
    </>
  );
}

function Keys() {
  return (
    <>
      <div className="flythrough__keys">
        {KEYS.map((key, i) => (
          <span key={key} className="flythrough__keygroup">
            {i > 0 ? <span className="flythrough__plus">+</span> : null}
            <span className="flythrough__key">{key}</span>
          </span>
        ))}
      </div>
      <span className="flythrough__tag">
        <span className="cs">Restart začíná u tebe.</span>
        <span className="en">The reset starts with you.</span>
      </span>
    </>
  );
}

function Signal() {
  return (
    <div className="flythrough__signal">
      {Array.from({ length: SIGNAL_BARS }, (_, i) => (
        <span key={i} className="flythrough__bar" />
      ))}
    </div>
  );
}

function Network() {
  return (
    <svg className="flythrough__net" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
      {EDGES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          className="flythrough__edge"
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          pathLength="1"
        />
      ))}
      {NODES.map(([x, y], i) => (
        <g key={i} className="flythrough__node">
          <circle className="flythrough__halo" cx={x} cy={y} r="10" />
          <circle className="flythrough__dot" cx={x} cy={y} r="3.5" />
        </g>
      ))}
    </svg>
  );
}

function TickerRow({ className }) {
  const items = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES];
  return (
    <div className={`flythrough__row ${className}`}>
      {items.map((c, i) => (
        <span key={i} className="flythrough__rowitem">
          <span className="cs">{c.cs}</span>
          <span className="en">{c.en}</span>
          <span className="flythrough__sep">·</span>
        </span>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <div className="flythrough__ticker">
      <TickerRow className="flythrough__row--a" />
      <TickerRow className="flythrough__row--b" />
    </div>
  );
}

function Odometer() {
  return (
    <>
      <div className="flythrough__odo">
        {YEAR.map((d, i) => (
          <span key={i} className="flythrough__digit" data-digit={d}>
            <span className="flythrough__reel">
              {REEL_DIGITS.map((n, j) => (
                <span key={j}>{n}</span>
              ))}
            </span>
          </span>
        ))}
      </div>
      <span className="flythrough__tag">CTRL Summit · Brno</span>
    </>
  );
}

const SCAN_CELLS = 40;

function Scan() {
  return (
    <div className="flythrough__scan">
      <div className="flythrough__cells">
        {Array.from({ length: SCAN_CELLS }, (_, i) => (
          <span key={i} className="flythrough__cell" />
        ))}
      </div>
      <div className="flythrough__lenstrack">
        <span className="flythrough__lens" />
      </div>
    </div>
  );
}

const CHECK_COLS = 7;
const CHECK_ROWS = 5;
const CHECK_ON = new Set(['6,0', '5,1', '0,2', '4,2', '1,3', '3,3', '2,4']);

function Verify() {
  const cells = [];
  for (let y = 0; y < CHECK_ROWS; y += 1) {
    for (let x = 0; x < CHECK_COLS; x += 1) {
      cells.push(
        <span key={`${x},${y}`} className="flythrough__pix" data-on={CHECK_ON.has(`${x},${y}`) ? '' : undefined} />,
      );
    }
  }
  return <div className="flythrough__grid">{cells}</div>;
}

const GATHER_POINTS = 16;

function Gather() {
  return (
    <div className="flythrough__gather">
      <div className="flythrough__ringwrap">
        {Array.from({ length: GATHER_POINTS }, (_, i) => (
          <span key={i} className="flythrough__pt" />
        ))}
        <span className="flythrough__core" />
      </div>
    </div>
  );
}

const VARIANTS = {
  rail: Rail,
  keys: Keys,
  signal: Signal,
  network: Network,
  ticker: Ticker,
  odometer: Odometer,
  scan: Scan,
  verify: Verify,
  gather: Gather,
};

/**
 * Scroll-scrubbed interstitial in a reserved gap between sections.
 * Each variant carries a piece of the CTRL story; none leaves a trace.
 * Motion lives in utils/flythroughMotion.js, keyed by `data-fly`.
 */
export function Flythrough({ variant = 'rail' }) {
  const Content = VARIANTS[variant] ?? Rail;
  return (
    <section className={`flythrough flythrough--${variant}`} data-fly={variant} aria-hidden="true">
      <div className="flythrough__stage">
        <Content />
      </div>
    </section>
  );
}
