import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './janKrejciCard.css';

const FORM_EMAIL = 'info@ctrleurope.com';
const PHONE = '+420777447605';
const PHONE_LABEL = '+420 777 447 605';
const MAIL_SUBJECT = 'Kontakt z vizitky CTRL Europe';
const SITE = 'https://www.ctrleurope.com';

const VCF = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Krejčí;Jan;;;',
  'FN:Jan Krejčí',
  'ORG:CTRL Europe, z. s.',
  'TITLE:Spoluzakladatel a prezident',
  `TEL;TYPE=CELL:${PHONE}`,
  `EMAIL:${FORM_EMAIL}`,
  `URL:${SITE}`,
  'END:VCARD',
].join('\r\n');

const INTERESTS = [
  'Workshop pro školu',
  'Program pro firmu',
  'Partnerství / podpora',
  'Přednáška',
  'Novinky a akce',
];

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function isMobileDevice() {
  return (
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && window.innerWidth < 900)
  );
}

function openLink(url) {
  try {
    if (window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch {
    /* stránka v cizím rámečku */
  }
  try {
    window.location.href = url;
  } catch {
    try {
      window.open(url, '_blank');
    } catch {
      /* prohlížeč odkaz zablokoval */
    }
  }
}

function loadQrLibrary() {
  if (window.QRCode) return Promise.resolve();
  const existing = document.querySelector('script[data-jk-qr]');
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('qr')), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.async = true;
    script.dataset.jkQr = '1';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('qr'));
    document.head.appendChild(script);
  });
}

function useCardDocument() {
  useLayoutEffect(() => {
    document.documentElement.classList.add('jk-card-route');
    return () => document.documentElement.classList.remove('jk-card-route');
  }, []);

  useEffect(() => {
    const fontId = 'jk-space-mono';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
      document.head.appendChild(link);
    }

    const theme = document.querySelector('meta[name="theme-color"]');
    const previous = theme?.getAttribute('content');
    theme?.setAttribute('content', '#0a0e1a');
    return () => {
      if (theme && previous) theme.setAttribute('content', previous);
    };
  }, []);
}

export default function JanKrejciCardPage() {
  usePageMeta('janKrejci');
  useCardDocument();

  const mobile = useRef(false);
  const qrReady = useRef(false);
  const qrBox = useRef(null);
  const [callOpen, setCallOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const [callHint, setCallHint] = useState(
    'Naskenujte kód telefonem a hovor se rovnou připraví.',
  );
  const [showQr, setShowQr] = useState(true);

  useEffect(() => {
    mobile.current = isMobileDevice();
    loadQrLibrary().catch(() => {});
  }, []);

  function saveContact(event) {
    event.preventDefault();
    const blob = new Blob([VCF], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Jan-Krejci-CTRL-Europe.vcf';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 1000);
  }

  async function onCall(event) {
    event.preventDefault();
    if (mobile.current) {
      openLink(`tel:${PHONE}`);
      return;
    }
    if (!qrReady.current && qrBox.current) {
      try {
        await loadQrLibrary();
        if (window.QRCode && !qrReady.current) {
          new window.QRCode(qrBox.current, {
            text: `tel:${PHONE}`,
            width: 180,
            height: 180,
            colorDark: '#0a0e1a',
            colorLight: '#ffffff',
          });
          qrReady.current = true;
        }
      } catch {
        qrReady.current = false;
      }
    }
    if (qrReady.current) {
      setShowQr(true);
      setCallHint('Naskenujte kód telefonem a hovor se rovnou připraví.');
    } else {
      setShowQr(false);
      setCallHint('Zavolejte nám na číslo:');
    }
    setCallOpen(true);
  }

  function onMail(event) {
    event.preventDefault();
    if (mobile.current) {
      openLink(`mailto:${FORM_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`);
      return;
    }
    setMailOpen(true);
  }

  function closeOnBackdrop(event, close) {
    if (event.target === event.currentTarget || event.target.closest('[data-close]')) {
      close();
    }
  }

  return (
    <div className="jk-page">
      <div className="jk-wrap">
        <div className="jk-logo">
          <img src="/card/ctrl-wordmark.png" alt="ctrl" />
          <b>Europe</b>
        </div>
        <div className="jk-tag">Take control before someone else does.</div>

        <section className="jk-card">
          <h1>Jan Krejčí</h1>
          <div className="jk-role">Spoluzakladatel a prezident CTRL Europe</div>
          <div className="jk-btns">
            <a className="jk-btn jk-btn-pri" href="#" onClick={saveContact}>
              ＋ Uložit kontakt
            </a>
            <a className="jk-btn" href={`tel:${PHONE}`} onClick={onCall}>
              📞 Zavolat
            </a>
            <a className="jk-btn" href={`mailto:${FORM_EMAIL}`} onClick={onMail}>
              ✉️ Napsat
            </a>
            <a className="jk-btn jk-btn-wide" href={SITE} target="_blank" rel="noopener">
              🌐 ctrleurope.com
            </a>
          </div>
          <div className="jk-info">
            <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
            <br />
            <a href={`mailto:${FORM_EMAIL}`}>{FORM_EMAIL}</a>
            <br />
            <a href={SITE}>www.ctrleurope.com</a>
          </div>
        </section>

        <LeadForm />

        <footer className="jk-foot">
          CTRL Europe, z. s. · IČO 29750466 · Brno
          <br />
          <i>Studenti učí studenty.</i>
        </footer>
      </div>

      <div
        className="jk-modal"
        hidden={!callOpen}
        onClick={(event) => closeOnBackdrop(event, () => setCallOpen(false))}
      >
        <div className="jk-mbox">
          <button type="button" className="jk-x" data-close>
            ×
          </button>
          <h3>📞 Zavolejte nám</h3>
          <p>{callHint}</p>
          <div id="qr" className="jk-qr" ref={qrBox} hidden={!showQr} />
          <div className="jk-big">{PHONE_LABEL}</div>
        </div>
      </div>

      {mailOpen ? (
        <div className="jk-modal" onClick={(event) => closeOnBackdrop(event, () => setMailOpen(false))}>
          <div className="jk-mbox">
            <button type="button" className="jk-x" data-close>
              ×
            </button>
            <h3>✉️ Napište nám</h3>
            <p>Vyberte, kde chcete e-mail napsat.</p>
            <div className="jk-mlist">
              <a
                className="jk-btn jk-btn-pri"
                target="_blank"
                rel="noopener"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FORM_EMAIL}&su=${encodeURIComponent(MAIL_SUBJECT)}`}
              >
                Gmail
              </a>
              <a
                className="jk-btn"
                target="_blank"
                rel="noopener"
                href={`https://outlook.office.com/mail/deeplink/compose?to=${FORM_EMAIL}&subject=${encodeURIComponent(MAIL_SUBJECT)}`}
              >
                Outlook
              </a>
              <a
                className="jk-btn"
                href={`mailto:${FORM_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`}
                onClick={(event) => {
                  event.preventDefault();
                  openLink(event.currentTarget.href);
                }}
              >
                Poštovní aplikace
              </a>
            </div>
            <div className="jk-big jk-big-mail">{FORM_EMAIL}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function LeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [interests, setInterests] = useState([]);
  const [consent, setConsent] = useState(false);
  const [honey, setHoney] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function toggleInterest(value) {
    setInterests((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !EMAIL_RE.test(trimmedEmail)) {
      setError('Vyplňte prosím jméno a platný e-mail.');
      return;
    }
    if (!consent) {
      setError('Pro odeslání je potřeba souhlas se zpracováním údajů.');
      return;
    }
    if (honey) return;

    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Jméno: trimmedName,
          'E-mail': trimmedEmail,
          Organizace: organization.trim() || '—',
          Zájem: INTERESTS.filter((item) => interests.includes(item)).join(', ') || '—',
          Souhlas: 'ano',
          Zdroj: 'Online vizitka',
          _subject: `Nový kontakt z vizitky: ${trimmedName}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: trimmedEmail,
        }),
      });
      if (!response.ok) throw new Error('send');
      await response.json();
      setSent(true);
    } catch {
      setSending(false);
      setError(
        'Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na info@ctrleurope.com.',
      );
    }
  }

  return (
    <section className="jk-card">
      {sent ? (
        <div className="jk-msg">
          <div className="jk-msg-icon">✅</div>
          <h3>Díky, máme to!</h3>
          <p>
            Brzy se Vám ozveme. Mezitím můžete uložit kontakt nebo se podívat na ctrleurope.com.
          </p>
        </div>
      ) : (
        <>
          <h2>Zůstaňme v kontaktu</h2>
          <p className="jk-sub">
            Nechte nám jméno a e-mail. Ozveme se s nabídkou workshopu, spolupráce nebo pozvánkou na
            naše akce.
          </p>
          <form className="jk-form" noValidate onSubmit={onSubmit}>
            <label className="jk-field">
              JMÉNO A PŘÍJMENÍ
              <input
                type="text"
                name="jmeno"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className="jk-field">
              E-MAIL
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className="jk-field">
              ORGANIZACE / ŠKOLA (nepovinné)
              <input
                type="text"
                name="organizace"
                autoComplete="organization"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
              />
            </label>
            <div>
              <span className="jk-field">ZAJÍMÁ MĚ</span>
              <div className="jk-chips">
                {INTERESTS.map((interest) => (
                  <label className="jk-chip" key={interest}>
                    <input
                      type="checkbox"
                      name="zajem"
                      value={interest}
                      checked={interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            <input
              className="jk-hp"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(event) => setHoney(event.target.value)}
            />
            <label className="jk-gdpr">
              <input
                type="checkbox"
                name="souhlas"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                Souhlasím se zpracováním jména a e-mailu spolkem CTRL Europe, z. s. (IČO 29750466) za
                účelem kontaktu a zasílání informací o naší činnosti. Souhlas můžete kdykoli odvolat
                e-mailem na info@ctrleurope.com.
              </span>
            </label>
            {error ? <div className="jk-err">{error}</div> : null}
            <button className="jk-send" type="submit" disabled={sending}>
              {sending ? 'Odesílám…' : 'Odeslat'}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
