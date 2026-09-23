import { createContext, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../../context/LangContext';
import {
  FAMILY_MAX_ADULTS,
  FAMILY_MAX_CHILDREN,
  MAX_PEOPLE,
  familyExceedsMax,
} from '../../../shared/runRegister.js';

const API_URL = '/api/run-register';

const TICKETS = [
  {
    value: 'Základní',
    cs: 'Základní',
    en: 'Standard',
    priceCs: '240 Kč',
    priceEn: '240 CZK',
  },
  {
    value: 'Studentské',
    cs: 'Studentské',
    en: 'Student',
    priceCs: '190 Kč',
    priceEn: '190 CZK',
    noteCs: '−20 %',
    noteEn: '−20%',
  },
  {
    value: 'Rodinné',
    cs: 'Rodinné',
    en: 'Family',
    priceCs: '600 Kč',
    priceEn: '600 CZK',
    noteCs: `max. ${FAMILY_MAX_ADULTS}+${FAMILY_MAX_CHILDREN}`,
    noteEn: `max. ${FAMILY_MAX_ADULTS}+${FAMILY_MAX_CHILDREN}`,
  },
];

let personSeq = 0;

function createPerson() {
  personSeq += 1;
  return {
    id: `person-${personSeq}`,
    name: '',
    ticket: '',
    adults: 1,
    children: 0,
  };
}

function CountField({ id, labelCs, labelEn, value, min, max, onChange, invalid }) {
  const setValue = (next) => onChange(Math.max(min, Math.min(max, next)));

  return (
    <div className={`run-register-count${invalid ? ' is-invalid' : ''}`}>
      <label htmlFor={id}>
        <span className="cs">{labelCs}</span>
        <span className="en">{labelEn}</span>
      </label>
      <div className="run-register-count__row">
        <button
          type="button"
          className="run-register-count__btn"
          onClick={() => setValue(value - 1)}
          disabled={value <= min}
          aria-label="−"
        >
          −
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isNaN(next)) return;
            setValue(next);
          }}
        />
        <button
          type="button"
          className="run-register-count__btn"
          onClick={() => setValue(value + 1)}
          disabled={value >= max}
          aria-label="+"
        >
          +
        </button>
      </div>
    </div>
  );
}

function SuccessMark() {
  return (
    <div className="run-register-success__mark" aria-hidden="true">
      <span className="run-register-success__ripple run-register-success__ripple--1" />
      <span className="run-register-success__ripple run-register-success__ripple--2" />
      <svg viewBox="0 0 56 56" fill="none">
        <circle className="run-register-success__ring" cx="28" cy="28" r="26" />
        <path
          className="run-register-success__check"
          d="M16 28.5l8 8 16-17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const RunRegisterContext = createContext(null);

export function useRunRegister() {
  const value = useContext(RunRegisterContext);
  if (!value) {
    throw new Error('Run registration is rendered outside RunRegisterFrame');
  }
  return value;
}

export function RunRegisterFrame({ enabled, dock = true, children }) {
  const openRef = useRef(() => {});
  const [dialogOpen, setDialogOpen] = useState(false);
  const value = useMemo(
    () => ({
      openRegister: () => openRef.current(),
      bindOpen: (open) => {
        openRef.current = open;
      },
      dialogOpen,
      setDialogOpen,
    }),
    [dialogOpen],
  );

  if (!enabled) return children;

  return (
    <RunRegisterContext.Provider value={value}>
      {children}
      {dock ? <RunRegisterDock /> : null}
    </RunRegisterContext.Provider>
  );
}

export function RunRegisterButton({ className = '' }) {
  const { openRegister, dialogOpen } = useRunRegister();

  return (
    <button
      type="button"
      className={`run-register-btn${className ? ` ${className}` : ''}`}
      onClick={openRegister}
      aria-haspopup="dialog"
      aria-expanded={dialogOpen}
      aria-controls="run-register-dialog"
    >
      <span className="cs">Registrovat se</span>
      <span className="en">Register</span>
      <span className="run-register-btn__arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

export function RunRegisterInline() {
  return (
    <div className="run-register-inline">
      <p className="run-register-inline__copy">
        <span className="cs">Rezervujte si místo. Kapacita je omezená.</span>
        <span className="en">Reserve your place. Capacity is limited.</span>
      </p>
      <RunRegisterButton />
    </div>
  );
}

function RunRegisterDock() {
  const { dialogOpen } = useRunRegister();
  const [passedBand, setPassedBand] = useState(false);
  const shown = passedBand && !dialogOpen;

  useEffect(() => {
    const band = document.getElementById('registrace');
    if (!band) return undefined;

    const update = () => {
      setPassedBand(band.getBoundingClientRect().bottom < 72);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('run-register-dock-on', shown);
    return () => document.body.classList.remove('run-register-dock-on');
  }, [shown]);

  return createPortal(
    <div
      className={`run-register-dock${shown ? ' is-visible' : ''}`}
      aria-hidden={shown ? undefined : true}
      inert={shown ? undefined : true}
    >
      <div className="run-register-dock__inner">
        <p className="run-register-dock__label">
          <span className="cs">CTRL Run · 3. října · Komec</span>
          <span className="en">CTRL Run · 3 October · Komec</span>
        </p>
        <RunRegisterButton />
      </div>
    </div>,
    document.body,
  );
}

export function RunRegisterCta({ band = true }) {
  const { isEn } = useLang();
  const dialogRef = useRef(null);
  const nameRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState(() => [createPerson()]);
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const titleId = useId();
  const register = useRunRegister();

  useEffect(() => {
    register.bindOpen(() => setOpen(true));
    return () => register.bindOpen(() => {});
  }, [register]);

  useEffect(() => {
    register.setDialogOpen(open);
  }, [open, register]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open) {
      if (!dialog.open) dialog.showModal();
      if (!submitted) {
        const frame = window.requestAnimationFrame(() => {
          nameRef.current?.focus();
        });
        return () => window.cancelAnimationFrame(frame);
      }
      return undefined;
    }

    if (dialog.open) dialog.close();
    return undefined;
  }, [open, submitted]);

  const familyLimitHit = people.some(
    (person) =>
      person.ticket === 'Rodinné' && familyExceedsMax(person.adults, person.children),
  );

  const resetForm = () => {
    setEmail('');
    setPeople([createPerson()]);
    setHoneypot('');
    setSubmitting(false);
    setSubmitted(false);
    setError('');
  };

  const close = () => {
    setOpen(false);
    window.setTimeout(resetForm, 220);
  };

  const updatePerson = (id, patch) => {
    setPeople((list) => list.map((person) => (person.id === id ? { ...person, ...patch } : person)));
    setError('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    if (familyLimitHit) {
      setError('family');
      return;
    }

    const missingFamily = people.some(
      (person) =>
        person.ticket === 'Rodinné' && (person.adults < 1 || person.children < 0),
    );
    if (missingFamily) {
      setError('family');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lang: isEn ? 'en' : 'cs',
          email,
          people: people.map((person) => ({
            name: person.name,
            ticket: person.ticket,
            adults: person.adults,
            children: person.children,
          })),
          _gotcha: honeypot,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        const familyRejected = payload?.fields?.some((field) => field.endsWith('.family'));
        throw new Error(familyRejected ? 'family' : 'submit');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error && err.message === 'family' ? 'family' : 'submit');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {band ? (
        <div className="run-register" id="registrace">
          <button
            type="button"
            className="run-register-band"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="run-register-dialog"
          >
        <span className="run-register-band__copy">
          <span className="run-register-band__eyebrow">
            <span className="cs">CTRL Run · 3. října 2026 · Komec</span>
            <span className="en">CTRL Run · 3 October 2026 · Komec</span>
          </span>
          <span className="run-register-band__title">
            <span className="cs">Přihlaste se na charitativní běh</span>
            <span className="en">Register for the charity run</span>
          </span>
          <span className="run-register-band__lede">
            <span className="cs">
              Kapacita je omezená. Stačí e-mail, jméno a typ vstupného — v jednom
              formuláři můžete přihlásit víc lidí.
            </span>
            <span className="en">
              Capacity is limited. Just e-mail, name and ticket type — you can
              register several people in one form.
            </span>
          </span>
        </span>
        <span className="run-register-band__cta">
          <span className="cs">Registrovat se</span>
          <span className="en">Register</span>
          <span className="run-register-band__arrow" aria-hidden="true">
            →
          </span>
        </span>
      </button>
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        id="run-register-dialog"
        className={`run-register-dialog${submitted ? ' is-success' : ''}`}
        aria-labelledby={titleId}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="run-register-dialog__panel">
          <button type="button" className="run-register-dialog__close" onClick={close}>
            <span className="cs">Zavřít</span>
            <span className="en">Close</span>
          </button>

          {submitted ? (
            <div className="run-register-success" role="status">
              <SuccessMark />
              <p id={titleId} className="run-register-success__title">
                <span className="cs">Jste na seznamu</span>
                <span className="en">You’re on the list</span>
              </p>
              <p className="run-register-success__lede">
                <span className="cs">
                  Registraci jsme přijali. Uvidíme se 3. října u Komecu.
                </span>
                <span className="en">
                  Your registration is in. See you on 3 October at Komec.
                </span>
              </p>
              <button type="button" className="btn-g run-register-success__btn" onClick={close}>
                <span className="cs">Hotovo</span>
                <span className="en">Done</span>
              </button>
            </div>
          ) : (
            <form className="run-register-form" onSubmit={onSubmit}>
              <header className="run-register-dialog__head">
                <p className="run-register-dialog__eyebrow">CTRL Run</p>
                <p id={titleId} className="run-register-dialog__title">
                  <span className="cs">Registrace</span>
                  <span className="en">Registration</span>
                </p>
                <p className="run-register-dialog__lede">
                  <span className="cs">
                    Jedním formulářem můžete přihlásit víc lidí. U rodiny max.{' '}
                    {FAMILY_MAX_ADULTS} dospělí a {FAMILY_MAX_CHILDREN} děti.
                  </span>
                  <span className="en">
                    Register several people in one go. Family tickets: max.{' '}
                    {FAMILY_MAX_ADULTS} adults and {FAMILY_MAX_CHILDREN} children.
                  </span>
                </p>
              </header>

              <label className="run-register-form__honeypot">
                <span>Company</span>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>

              <div className="run-register-field">
                <label htmlFor="run-register-email">E-mail</label>
                <input
                  id="run-register-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={isEn ? 'jane@email.com' : 'jana@email.cz'}
                />
              </div>

              {people.map((person, index) => {
                const familyInvalid =
                  person.ticket === 'Rodinné' &&
                  familyExceedsMax(person.adults, person.children);

                return (
                  <fieldset key={person.id} className="run-register-person">
                    <legend>
                      <span className="cs">Osoba {index + 1}</span>
                      <span className="en">Person {index + 1}</span>
                    </legend>
                    {people.length > 1 ? (
                      <button
                        type="button"
                        className="run-register-person__remove"
                        onClick={() =>
                          setPeople((list) => list.filter((item) => item.id !== person.id))
                        }
                      >
                        <span className="cs">Odebrat</span>
                        <span className="en">Remove</span>
                      </button>
                    ) : null}

                    <div className="run-register-field">
                      <label htmlFor={`${person.id}-name`}>
                        <span className="cs">Jméno</span>
                        <span className="en">Name</span>
                      </label>
                      <input
                        ref={index === 0 ? nameRef : undefined}
                        id={`${person.id}-name`}
                        name={`${person.id}-name`}
                        type="text"
                        required
                        autoComplete={index === 0 ? 'name' : 'off'}
                        value={person.name}
                        onChange={(event) => updatePerson(person.id, { name: event.target.value })}
                        placeholder={isEn ? 'Jane Doe' : 'Jana Nováková'}
                      />
                    </div>

                    <fieldset className="run-register-tickets">
                      <legend>
                        <span className="cs">Typ vstupného</span>
                        <span className="en">Ticket type</span>
                      </legend>
                      <div className="run-register-tickets__grid">
                        {TICKETS.map((option) => (
                          <label
                            key={option.value}
                            className={`run-register-ticket${person.ticket === option.value ? ' is-selected' : ''}`}
                          >
                            <input
                              type="radio"
                              name={`${person.id}-ticket`}
                              value={option.value}
                              required
                              checked={person.ticket === option.value}
                              onChange={() => updatePerson(person.id, { ticket: option.value })}
                            />
                            <span className="run-register-ticket__price">
                              <span className="cs">{option.priceCs}</span>
                              <span className="en">{option.priceEn}</span>
                            </span>
                            <span className="run-register-ticket__name">
                              <span className="cs">{option.cs}</span>
                              <span className="en">{option.en}</span>
                            </span>
                            {option.noteCs ? (
                              <span className="run-register-ticket__note">
                                <span className="cs">{option.noteCs}</span>
                                <span className="en">{option.noteEn}</span>
                              </span>
                            ) : (
                              <span className="run-register-ticket__note run-register-ticket__note--empty">
                                &nbsp;
                              </span>
                            )}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {person.ticket === 'Rodinné' ? (
                      <div className="run-register-family">
                        <CountField
                          id={`${person.id}-adults`}
                          labelCs="Dospělí"
                          labelEn="Adults"
                          value={person.adults}
                          min={1}
                          max={FAMILY_MAX_ADULTS}
                          invalid={person.adults > FAMILY_MAX_ADULTS}
                          onChange={(adults) => updatePerson(person.id, { adults })}
                        />
                        <CountField
                          id={`${person.id}-children`}
                          labelCs="Děti"
                          labelEn="Children"
                          value={person.children}
                          min={0}
                          max={FAMILY_MAX_CHILDREN}
                          invalid={person.children > FAMILY_MAX_CHILDREN}
                          onChange={(children) => updatePerson(person.id, { children })}
                        />
                        {familyInvalid ? (
                          <p className="run-register-form__error" role="alert">
                            <span className="cs">
                              Rodinné vstupné je max. {FAMILY_MAX_ADULTS} dospělí a{' '}
                              {FAMILY_MAX_CHILDREN} děti.
                            </span>
                            <span className="en">
                              Family entry is max. {FAMILY_MAX_ADULTS} adults and{' '}
                              {FAMILY_MAX_CHILDREN} children.
                            </span>
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </fieldset>
                );
              })}

              {people.length < MAX_PEOPLE ? (
                <button
                  type="button"
                  className="run-register-add"
                  onClick={() => setPeople((list) => [...list, createPerson()])}
                >
                  <span className="cs">+ Přidat další osobu</span>
                  <span className="en">+ Add another person</span>
                </button>
              ) : null}

              {error === 'family' ? (
                <p className="run-register-form__error" role="alert">
                  <span className="cs">
                    U rodinného vstupného zadejte 1–{FAMILY_MAX_ADULTS} dospělé a 0–
                    {FAMILY_MAX_CHILDREN} děti. Víc odeslat nelze.
                  </span>
                  <span className="en">
                    For a family ticket enter 1–{FAMILY_MAX_ADULTS} adults and 0–
                    {FAMILY_MAX_CHILDREN} children. More than that cannot be submitted.
                  </span>
                </p>
              ) : null}

              {error === 'submit' ? (
                <p className="run-register-form__error" role="alert">
                  <span className="cs">Nepodařilo se odeslat. Zkuste to znovu.</span>
                  <span className="en">Could not send. Please try again.</span>
                </p>
              ) : null}

              <button
                type="submit"
                className="btn-p run-register-submit"
                disabled={submitting || familyLimitHit}
              >
                {submitting ? (
                  <span className="run-register-submit__wait">
                    <span className="run-register-submit__dot" />
                    <span className="cs">Odesílám</span>
                    <span className="en">Sending</span>
                  </span>
                ) : (
                  <>
                    <span className="cs">Odeslat registraci</span>
                    <span className="en">Submit registration</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
