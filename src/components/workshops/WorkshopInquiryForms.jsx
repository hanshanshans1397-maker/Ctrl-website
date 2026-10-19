import { useRef, useState } from "react";
import { useLang } from "../../context/LangContext";
import {
  INQUIRY_AUDIENCES,
  INQUIRY_FORMATS,
  INQUIRY_TOPICS,
} from "../../../shared/workshopInquiry";
import { CONTACT_EMAIL } from "../../utils/socialLinks";

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
  type = "text",
  labelCs,
  labelEn,
  value,
  onChange,
  required,
  autoComplete,
  placeholderCs,
  placeholderEn,
  isEn,
  min,
  max,
}) {
  return (
    <div className="field">
      <FieldLabel htmlFor={id} cs={labelCs} en={labelEn} />
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        autoComplete={autoComplete}
        placeholder={isEn ? placeholderEn : placeholderCs}
        min={min}
        max={max}
        inputMode={type === "number" ? "numeric" : undefined}
      />
    </div>
  );
}

function AreaField({
  id,
  labelCs,
  labelEn,
  value,
  onChange,
  required,
  placeholderCs,
  placeholderEn,
  isEn,
  rows = 4,
}) {
  return (
    <div className="field">
      <FieldLabel htmlFor={id} cs={labelCs} en={labelEn} />
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={isEn ? placeholderEn : placeholderCs}
      />
    </div>
  );
}

function SelectField({ id, labelCs, labelEn, value, onChange, options, required, isEn }) {
  return (
    <div className="field">
      <FieldLabel htmlFor={id} cs={labelCs} en={labelEn} />
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      >
        <option value="">{isEn ? "Select…" : "Vyberte…"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {isEn ? option.en : option.cs}
          </option>
        ))}
      </select>
    </div>
  );
}

function InquiryShell({
  id,
  surface = "bg-bg",
  eyebrowCs,
  eyebrowEn,
  titleCs,
  titleEn,
  ledeCs,
  ledeEn,
  children,
}) {
  return (
    <section id={id} className={`sec scroll-mt-28 ${surface}`}>
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">{eyebrowCs}</span>
            <span className="en">{eyebrowEn}</span>
          </span>
          <h2 className="section-title">
            <span className="cs">{titleCs}</span>
            <span className="en">{titleEn}</span>
          </h2>
          <p className="max-w-[560px] text-pretty text-[15px] leading-[1.7] font-light text-mid">
            <span className="cs">{ledeCs}</span>
            <span className="en">{ledeEn}</span>
          </p>
        </div>
        <div className="rev d1 apply-page inquiry-embed max-w-[760px]">{children}</div>
      </div>
    </section>
  );
}

function Success({ cs, en }) {
  return (
    <div role="status">
      <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase">
        <span className="cs">Odesláno</span>
        <span className="en">Sent</span>
      </div>
      <p className="mt-4 max-w-[28ch] text-balance text-[clamp(28px,3vw,40px)] leading-[1.15] font-semibold tracking-[-0.8px] text-dark">
        <span className="cs">{cs}</span>
        <span className="en">{en}</span>
      </p>
    </div>
  );
}

function useInquirySubmit(buildBody) {
  const startedAt = useRef(Date.now());
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState("idle");
  const [consent, setConsent] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/workshop-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...buildBody(),
          consent,
          _gotcha: gotcha,
          startedAt: startedAt.current,
        }),
      });
      if (!response.ok) throw new Error("send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return { gotcha, setGotcha, status, consent, setConsent, onSubmit };
}

function Honeypot({ id, value, onChange }) {
  return (
    <label className="apply-honeypot" htmlFor={id}>
      Website
      <input
        id={id}
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function Consent({ id, checked, onChange }) {
  return (
    <label className="inquiry-consent" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        required
      />
      <span>
        <span className="cs">Souhlasím se zpracováním osobních údajů za účelem vyřízení této poptávky. *</span>
        <span className="en">
          I agree to the processing of my personal data so this request can be handled. *
        </span>
      </span>
    </label>
  );
}

function FormError() {
  return (
    <p className="mb-5 text-[14px] leading-[1.5] font-medium text-dark" role="alert">
      <span className="cs">
        Nepodařilo se odeslat. Zkuste to znovu, nebo napište na {CONTACT_EMAIL}.
      </span>
      <span className="en">
        Could not send. Try again, or email {CONTACT_EMAIL}.
      </span>
    </p>
  );
}

function SubmitButton({ status, idleCs, idleEn }) {
  const sending = status === "sending";
  return (
    <button type="submit" className="btn-p disabled:cursor-wait disabled:opacity-60" disabled={sending}>
      <span className="cs">{sending ? "Odesíláme…" : idleCs}</span>
      <span className="en">{sending ? "Sending…" : idleEn}</span>
    </button>
  );
}

export function RequestWorkshopSection() {
  const { isEn } = useLang();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState("");
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("");
  const [participants, setParticipants] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [note, setNote] = useState("");
  const form = useInquirySubmit(() => ({
    type: "request",
    lang: isEn ? "en" : "cs",
    name,
    organization,
    email,
    phone,
    audience,
    topic,
    format,
    participants,
    date,
    place,
    note,
  }));

  return (
    <InquiryShell
      id="poptavka"
      eyebrowCs="Poptávka"
      eyebrowEn="Request"
      titleCs="Poptat workshop."
      titleEn="Request a workshop."
      ledeCs="Napište nám základní údaje. Ozveme se do 3 pracovních dnů."
      ledeEn="Send us the basics. We will get back to you within 3 business days."
    >
      {form.status === "success" ? (
        <Success
          cs="Děkujeme! Ozveme se do 3 pracovních dnů."
          en="Thank you! We will get back to you within 3 business days."
        />
      ) : (
        <form onSubmit={form.onSubmit}>
          <Honeypot id="request-gotcha" value={form.gotcha} onChange={form.setGotcha} />
          <div className="field-row">
            <TextField
              id="request-name"
              labelCs="Jméno a příjmení *"
              labelEn="Full name *"
              value={name}
              onChange={setName}
              required
              autoComplete="name"
              isEn={isEn}
            />
            <TextField
              id="request-org"
              labelCs="Organizace / škola *"
              labelEn="Organization / school *"
              value={organization}
              onChange={setOrganization}
              required
              autoComplete="organization"
              isEn={isEn}
            />
          </div>
          <div className="field-row">
            <TextField
              id="request-email"
              type="email"
              labelCs="E-mail *"
              labelEn="Email *"
              value={email}
              onChange={setEmail}
              required
              autoComplete="email"
              isEn={isEn}
            />
            <TextField
              id="request-phone"
              type="tel"
              labelCs="Telefon"
              labelEn="Phone"
              value={phone}
              onChange={setPhone}
              autoComplete="tel"
              isEn={isEn}
            />
          </div>
          <div className="field-row">
            <SelectField
              id="request-audience"
              labelCs="Cílová skupina *"
              labelEn="Audience *"
              value={audience}
              onChange={setAudience}
              options={INQUIRY_AUDIENCES}
              required
              isEn={isEn}
            />
            <SelectField
              id="request-topic"
              labelCs="Téma *"
              labelEn="Topic *"
              value={topic}
              onChange={setTopic}
              options={INQUIRY_TOPICS}
              required
              isEn={isEn}
            />
          </div>
          <div className="field-row">
            <SelectField
              id="request-format"
              labelCs="Forma"
              labelEn="Format"
              value={format}
              onChange={setFormat}
              options={INQUIRY_FORMATS}
              isEn={isEn}
            />
            <TextField
              id="request-count"
              type="number"
              labelCs="Počet účastníků"
              labelEn="Number of participants"
              value={participants}
              onChange={setParticipants}
              placeholderCs="např. 28"
              placeholderEn="e.g. 28"
              min={1}
              max={500}
              isEn={isEn}
            />
          </div>
          <div className="field-row">
            <TextField
              id="request-date"
              labelCs="Preferovaný termín"
              labelEn="Preferred date"
              value={date}
              onChange={setDate}
              placeholderCs="např. březen 2026"
              placeholderEn="e.g. March 2026"
              isEn={isEn}
            />
            <TextField
              id="request-place"
              labelCs="Místo konání"
              labelEn="Venue"
              value={place}
              onChange={setPlace}
              autoComplete="address-level2"
              isEn={isEn}
            />
          </div>
          <AreaField
            id="request-note"
            labelCs="Poznámka"
            labelEn="Note"
            value={note}
            onChange={setNote}
            placeholderCs="Cokoli, co bychom měli vědět."
            placeholderEn="Anything we should know."
            isEn={isEn}
          />
          {form.status === "error" ? <FormError /> : null}
          <Consent id="request-consent" checked={form.consent} onChange={form.setConsent} />
          <SubmitButton status={form.status} idleCs="Odeslat poptávku" idleEn="Send request" />
        </form>
      )}
    </InquiryShell>
  );
}

export function PartnerSchoolSection() {
  const { isEn } = useLang();
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("");
  const [topics, setTopics] = useState("");
  const [note, setNote] = useState("");
  const form = useInquirySubmit(() => ({
    type: "partner",
    lang: isEn ? "en" : "cs",
    school,
    address,
    contact,
    email,
    phone,
    size,
    topics,
    note,
  }));

  return (
    <InquiryShell
      id="partnerska-skola"
      surface="bg-bg2"
      eyebrowCs="Partnerská škola"
      eyebrowEn="Partner school"
      titleCs="Chci být partnerskou školou."
      titleEn="I want to be a partner school."
      ledeCs="Napište nám o škole. Ozveme se, jakmile najdeme financování."
      ledeEn="Tell us about the school. We will get in touch once we find funding."
    >
      {form.status === "success" ? (
        <Success
          cs="Děkujeme! Ozveme se, jakmile pro vaši školu najdeme financování."
          en="Thank you! We will get in touch once we find funding for your school."
        />
      ) : (
        <form onSubmit={form.onSubmit}>
          <Honeypot id="partner-gotcha" value={form.gotcha} onChange={form.setGotcha} />
          <TextField
            id="partner-school"
            labelCs="Název školy *"
            labelEn="School name *"
            value={school}
            onChange={setSchool}
            required
            autoComplete="organization"
            isEn={isEn}
          />
          <AreaField
            id="partner-address"
            labelCs="Adresa *"
            labelEn="Address *"
            value={address}
            onChange={setAddress}
            required
            rows={3}
            isEn={isEn}
          />
          <div className="field-row">
            <TextField
              id="partner-contact"
              labelCs="Kontaktní osoba a funkce *"
              labelEn="Contact person and role *"
              value={contact}
              onChange={setContact}
              required
              autoComplete="name"
              placeholderCs="Jana Nováková, zástupkyně ředitele"
              placeholderEn="Jane Novak, deputy head"
              isEn={isEn}
            />
            <TextField
              id="partner-email"
              type="email"
              labelCs="E-mail *"
              labelEn="Email *"
              value={email}
              onChange={setEmail}
              required
              autoComplete="email"
              isEn={isEn}
            />
          </div>
          <div className="field-row">
            <TextField
              id="partner-phone"
              type="tel"
              labelCs="Telefon"
              labelEn="Phone"
              value={phone}
              onChange={setPhone}
              autoComplete="tel"
              isEn={isEn}
            />
            <TextField
              id="partner-size"
              labelCs="Počet tříd / studentů"
              labelEn="Number of classes / students"
              value={size}
              onChange={setSize}
              placeholderCs="např. 12 tříd / 280 studentů"
              placeholderEn="e.g. 12 classes / 280 students"
              isEn={isEn}
            />
          </div>
          <AreaField
            id="partner-topics"
            labelCs="O jaká témata máte zájem"
            labelEn="Which topics interest you"
            value={topics}
            onChange={setTopics}
            rows={3}
            isEn={isEn}
          />
          <AreaField
            id="partner-note"
            labelCs="Poznámka"
            labelEn="Note"
            value={note}
            onChange={setNote}
            isEn={isEn}
          />
          {form.status === "error" ? <FormError /> : null}
          <Consent id="partner-consent" checked={form.consent} onChange={form.setConsent} />
          <SubmitButton status={form.status} idleCs="Odeslat zájem" idleEn="Send interest" />
        </form>
      )}
    </InquiryShell>
  );
}
