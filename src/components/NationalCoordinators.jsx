import { useId, useState } from 'react';
import { NATIONAL_COORDINATORS } from '../data/leadership';

export function NationalCoordinators() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const count = NATIONAL_COORDINATORS.reduce(
    (sum, team) => sum + (team.people?.length || 0),
    0,
  );

  return (
    <div className="coord-accordion" data-open={open ? 'true' : 'false'}>
      <button
        type="button"
        className="coord-accordion__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="coord-accordion__copy">
          <span className="coord-accordion__kicker">
            <span className="cs">National Teams</span>
            <span className="en">National Teams</span>
          </span>
          <span className="coord-accordion__title">
            <span className="cs">Národní koordinátoři</span>
            <span className="en">National coordinators</span>
          </span>
        </span>
        <span className="coord-accordion__meta">
          <span className="coord-accordion__count">{count || '—'}</span>
          <span className="coord-accordion__chevron" aria-hidden="true" />
        </span>
      </button>
      <div className="coord-accordion__panel" id={panelId}>
        <div className="coord-accordion__inner">
          {NATIONAL_COORDINATORS.length > 0 ? (
            NATIONAL_COORDINATORS.map((team) => (
              <div key={team.id || team.countryEn} className="coord-team">
                <div className="coord-team__country">
                  <span className="cs">{team.countryCs}</span>
                  <span className="en">{team.countryEn}</span>
                </div>
                {(team.people || []).map((person) => (
                  <div key={person.name} className="coord-team__row">
                    <span className="coord-team__name">{person.name}</span>
                    {person.roleCs || person.roleEn ? (
                      <span className="coord-team__role">
                        <span className="cs">{person.roleCs}</span>
                        <span className="en">{person.roleEn}</span>
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="coord-accordion__empty">
              <span className="cs">
                Seznam národních koordinátorů se právě doplňuje. Síť National
                Teams se rozšiřuje napříč střední Evropou.
              </span>
              <span className="en">
                The list of national coordinators is being completed. The
                National Teams network is expanding across Central Europe.
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
