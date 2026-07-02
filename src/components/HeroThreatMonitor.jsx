const THREATS = [
  { id: "deepfake", label: "DEEPFAKE", level: 62, delayClass: "hero-threat__row--0" },
  { id: "disinfo", label: "DISINFO", level: 78, delayClass: "hero-threat__row--1" },
  { id: "algo", label: "ALGO", level: 41, delayClass: "hero-threat__row--2" },
];

const TRACK_WIDTH = 132;
const BAR_HEIGHT = 5;

function ThreatRow({ label, level, delayClass }) {
  const fill = Math.round((level / 100) * TRACK_WIDTH);

  return (
    <div className={`hero-threat__row ${delayClass}`}>
      <span className="hero-threat__row-label">{label}</span>
      <span className="hero-threat__track" aria-hidden="true">
        <span
          className="hero-threat__track-fill"
          style={{ width: `${fill}px`, height: `${BAR_HEIGHT}px` }}
        />
      </span>
      <span className="hero-threat__row-value">{level}%</span>
    </div>
  );
}

export function HeroThreatMonitor() {
  return (
    <div
      className="hero-threat max-lg:hidden"
      role="img"
      aria-label="Monitor digitálních hrozeb: deepfaky, dezinformace a algoritmická manipulace"
    >
      <div className="hero-threat__panel">
        <div className="hero-threat__scan" aria-hidden="true" />

        <div className="hero-threat__head">
          <span className="hero-threat__title cs">Digitální hrozby</span>
          <span className="hero-threat__title en">Digital threats</span>
          <span className="hero-threat__status">
            <span className="hero-threat__dot" aria-hidden="true" />
            <span className="cs">Sledujeme</span>
            <span className="en">Monitoring</span>
          </span>
        </div>

        <div className="hero-threat__rows">
          {THREATS.map((threat) => (
            <ThreatRow key={threat.id} {...threat} />
          ))}
        </div>

        <div className="hero-threat__foot">
          <span className="hero-threat__foot-tag">CEE</span>
          <span className="hero-threat__foot-sep" aria-hidden="true" />
          <span className="cs">Analýza v reálném čase</span>
          <span className="en">Real-time analysis</span>
        </div>
      </div>
    </div>
  );
}
