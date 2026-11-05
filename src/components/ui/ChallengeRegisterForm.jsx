import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import {
  MAX_TEAM_MEMBERS,
  MIN_TEAM_MEMBERS,
} from '../../../shared/challengeRegister.js';
import { CONTACT_EMAIL } from '../../utils/socialLinks';

const API_URL = '/api/challenge-register';

function FieldLabel({ htmlFor, cs, en }) {
  return (
    <label htmlFor={htmlFor}>
      <span className="cs">{cs}</span>
      <span className="en">{en}</span>
    </label>
  );
}

function TextField({
  id,
  type = 'text',
  labelCs,
  labelEn,
  value,
  onChange,
  autoComplete,
  placeholder,
  invalid,
  inputMode,
}) {
  return (
    <div className={`field${invalid ? ' is-invalid' : ''}`}>
      <FieldLabel htmlFor={id} cs={labelCs} en={labelEn} />
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        aria-invalid={invalid || undefined}
        required
      />
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

export function ChallengeRegisterForm() {
  const { isEn } = useLang();
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [members, setMembers] = useState('');
  const [note, setNote] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [invalid, setInvalid] = useState([]);
  const [status, setStatus] = useState('idle');

  const isInvalid = (name) => invalid.includes(name);

  async function onSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setInvalid([]);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          school,
          city,
          contact,
          email,
          phone,
          members,
          note,
          consent,
          lang: isEn ? 'en' : 'cs',
          _gotcha: honeypot,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setInvalid(Array.isArray(data.fields) ? data.fields : []);
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        id="registrace"
        className="challenge-register challenge-register--success apply-page inquiry-embed"
        role="status"
      >
        <div className="run-register-success">
          <SuccessMark />
          <p className="run-register-success__title">
            <span className="cs">Tým je na seznamu</span>
            <span className="en">The team is on the list</span>
          </p>
          <p className="run-register-success__lede">
            <span className="cs">
              Přihlášku jsme přijali. Potvrzení přijde na e-mail kontaktu. Uvidíme se 8. prosince v KUMST.
            </span>
            <span className="en">
              The application is in. A confirmation is on its way to the contact email. See you on 8 December at KUMST.
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="registrace" className="challenge-register apply-page inquiry-embed">
      <p className="challenge-register__eyebrow">CTRL Challenge</p>
      <p className="challenge-register__title">
        <span className="cs">Přihlásit tým</span>
        <span className="en">Register a team</span>
      </p>
      <p className="challenge-register__lede">
        <span className="cs">
          Jedna přihláška = jeden tým, {MIN_TEAM_MEMBERS}–{MAX_TEAM_MEMBERS} studentů. Účast je
          zdarma. Volných je 17 týmů a bereme je podle pořadí.
        </span>
        <span className="en">
          One form is one team of {MIN_TEAM_MEMBERS}–{MAX_TEAM_MEMBERS} students. Entry is free.
          There are 17 teams and we take them in the order they arrive.
        </span>
      </p>

      <form onSubmit={onSubmit} noValidate>
        <label className="apply-honeypot">
          <span>Company</span>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>

        <div className="field-row">
          <TextField
            id="challenge-school"
            labelCs="Škola *"
            labelEn="School *"
            value={school}
            onChange={setSchool}
            autoComplete="organization"
            placeholder={isEn ? 'Gymnázium Brno, Vídeňská' : 'Gymnázium Brno, Vídeňská'}
            invalid={isInvalid('school')}
          />
          <TextField
            id="challenge-city"
            labelCs="Město *"
            labelEn="City *"
            value={city}
            onChange={setCity}
            autoComplete="address-level2"
            placeholder={isEn ? 'Brno' : 'Brno'}
            invalid={isInvalid('city')}
          />
        </div>

        <TextField
          id="challenge-contact"
          labelCs="Kontaktní osoba *"
          labelEn="Contact person *"
          value={contact}
          onChange={setContact}
          autoComplete="name"
          placeholder={isEn ? 'Jan Novák' : 'Jan Novák'}
          invalid={isInvalid('contact')}
        />

        <div className="field-row">
          <TextField
            id="challenge-email"
            type="email"
            labelCs="E-mail *"
            labelEn="Email *"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            placeholder={isEn ? 'jan@school.cz' : 'jan@skola.cz'}
            invalid={isInvalid('email')}
          />
          <TextField
            id="challenge-phone"
            type="tel"
            labelCs="Telefon *"
            labelEn="Phone *"
            value={phone}
            onChange={setPhone}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+420 777 000 000"
            invalid={isInvalid('phone')}
          />
        </div>

        <div className={`field${isInvalid('members') ? ' is-invalid' : ''}`}>
          <FieldLabel
            htmlFor="challenge-members"
            cs="Členové týmu *"
            en="Team members *"
          />
          <textarea
            id="challenge-members"
            name="members"
            rows={5}
            value={members}
            onChange={(event) => setMembers(event.target.value)}
            required
            aria-invalid={isInvalid('members') || undefined}
            placeholder={
              isEn
                ? 'Anna Nováková\nPetr Svoboda\nEva Dvořáková\nTomáš Černý'
                : 'Anna Nováková\nPetr Svoboda\nEva Dvořáková\nTomáš Černý'
            }
          />
          <p className="challenge-register__hint">
            <span className="cs">
              Každé jméno na samostatný řádek. Tým má {MIN_TEAM_MEMBERS} až {MAX_TEAM_MEMBERS}{' '}
              studentů.
            </span>
            <span className="en">
              One name per line. A team has {MIN_TEAM_MEMBERS} to {MAX_TEAM_MEMBERS} students.
            </span>
          </p>
        </div>

        <div className="field">
          <FieldLabel htmlFor="challenge-note" cs="Poznámka" en="Note" />
          <textarea
            id="challenge-note"
            name="note"
            rows={3}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={
              isEn
                ? 'Anything we should know — a teacher coming along, dietary needs…'
                : 'Cokoli, co máme vědět — přijede učitel, diety…'
            }
          />
        </div>

        <label className={`inquiry-consent${isInvalid('consent') ? ' is-invalid' : ''}`} htmlFor="challenge-consent">
          <input
            id="challenge-consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            required
          />
          <span>
            <span className="cs">
              Souhlasím se zpracováním údajů v přihlášce za účelem organizace CTRL Challenge podle{' '}
              <Link to="/privacy">Zásad ochrany osobních údajů</Link>. *
            </span>
            <span className="en">
              I agree to the processing of the details in this form so CTRL Challenge can be
              organised, as described in the <Link to="/privacy">Privacy Policy</Link>. *
            </span>
          </span>
        </label>

        {status === 'error' ? (
          <p className="challenge-register__error" role="alert">
            <span className="cs">
              {invalid.length
                ? 'Zkontrolujte červeně označená pole a zkuste to znovu.'
                : `Přihlášku se nepodařilo odeslat. Zkuste to znovu, nebo napište na ${CONTACT_EMAIL}.`}
            </span>
            <span className="en">
              {invalid.length
                ? 'Check the fields marked in red and try again.'
                : `The registration could not be sent. Try again, or email ${CONTACT_EMAIL}.`}
            </span>
          </p>
        ) : null}

        <button
          type="submit"
          className="btn-p disabled:cursor-wait disabled:opacity-60"
          disabled={status === 'sending'}
        >
          <span className="cs">{status === 'sending' ? 'Odesíláme…' : 'Přihlásit tým'}</span>
          <span className="en">{status === 'sending' ? 'Sending…' : 'Register the team'}</span>
        </button>
      </form>
    </div>
  );
}
