import { useRunRegister } from '../ui/RunRegisterCta';

const facts = [
  {
    labelCs: 'Datum',
    labelEn: 'Date',
    valueCs: '3. 10. 2026',
    valueEn: '3 Oct 2026',
  },
  {
    labelCs: 'Místo',
    labelEn: 'Venue',
    valueCs: 'Komec',
    valueEn: 'Komec',
  },
  {
    labelCs: 'Trasa',
    labelEn: 'Distance',
    valueCs: '5 km',
    valueEn: '5 km',
  },
  {
    labelCs: 'Start',
    labelEn: 'Start',
    valueCs: '16:00',
    valueEn: '16:00',
  },
];

export function RunRegisterHomeLure() {
  const { openRegister, dialogOpen } = useRunRegister();

  return (
    <button
      type="button"
      className="run-register-home"
      onClick={openRegister}
      aria-haspopup="dialog"
      aria-expanded={dialogOpen}
      aria-controls="run-register-dialog"
    >
      <span className="run-register-home__eyebrow">
        <span className="cs">CTRL Run · registrace</span>
        <span className="en">CTRL Run · registration</span>
      </span>
      <span className="run-register-home__title">
        <span className="cs">Přihlaste se na charitativní běh</span>
        <span className="en">Register for the charity run</span>
      </span>
      <span className="run-register-home__lede">
        <span className="cs">
          Sobota 3. října u Komecu. Výtěžek jde na prevenci digitálních
          závislostí. Kapacita je omezená.
        </span>
        <span className="en">
          Saturday 3 October at Komec. Proceeds support the prevention of
          digital addictions. Capacity is limited.
        </span>
      </span>
      <span className="run-register-home__facts">
        {facts.map((fact) => (
          <span key={fact.labelCs} className="run-register-home__fact">
            <span className="run-register-home__fact-label">
              <span className="cs">{fact.labelCs}</span>
              <span className="en">{fact.labelEn}</span>
            </span>
            <span className="run-register-home__fact-value">
              <span className="cs">{fact.valueCs}</span>
              <span className="en">{fact.valueEn}</span>
            </span>
          </span>
        ))}
      </span>
      <span className="run-register-btn run-register-home__cta">
        <span className="cs">Registrovat se</span>
        <span className="en">Register</span>
        <span className="run-register-btn__arrow" aria-hidden="true">
          →
        </span>
      </span>
    </button>
  );
}
