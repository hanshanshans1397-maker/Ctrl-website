import { useRef, useState } from "react";
import { EVENT_INQUIRY_TYPES } from "../../../shared/events";
import { useLang } from "../../context/LangContext";
import { CONTACT_EMAIL } from "../../utils/socialLinks";
import { FormSelect } from "../ui/FormSelect";

function FieldLabel({ htmlFor, cs, en }) {
  return (
    <label htmlFor={htmlFor}>
      <span className="cs">{cs}</span>
      <span className="en">{en}</span>
    </label>
  );
}

export function EventInquiryForm() {
  const { isEn } = useLang();
  const startedAt = useRef(Date.now());
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [typeInvalid, setTypeInvalid] = useState(false);
  const typeRef = useRef(null);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    if (!eventType) {
      setTypeInvalid(true);
      typeRef.current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/event-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          lang: isEn ? "en" : "cs",
          name,
          organization,
          email,
          eventType,
          message,
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

  return (
    <section id="spoluprace" className="sec scroll-mt-28 bg-bg">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Spolupráce</span>
            <span className="en">Partnership</span>
          </span>
          <h2 className="section-title section-title--plain text-balance">
            <span className="cs">Chcete s námi akci uspořádat?</span>
            <span className="en">Want to organize an event with us?</span>
          </h2>
          <p className="max-w-[560px] text-pretty text-[15px] leading-[1.7] font-light text-mid">
            <span className="cs">
              Hledáme školy, města a firmy, se kterými můžeme připravit soutěž,
              konferenci nebo komunitní akci.
            </span>
            <span className="en">
              We are looking for schools, cities and companies to prepare a
              competition, conference or community event with.
            </span>
          </p>
        </div>

        <div className="rev d1 apply-page inquiry-embed max-w-[760px]">
          {status === "success" ? (
            <div role="status">
              <div className="font-mono text-[11px] tracking-[2px] text-accent uppercase">
                <span className="cs">Odesláno</span>
                <span className="en">Sent</span>
              </div>
              <p className="mt-4 max-w-[16em] text-balance text-[clamp(28px,3vw,40px)] leading-[1.15] font-semibold tracking-[-0.8px] text-dark">
                <span className="cs">Děkujeme. Ozveme se k vaší akci.</span>
                <span className="en">Thank you. We will get back to you about the event.</span>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label className="apply-honeypot" htmlFor="event-gotcha">
                Website
                <input
                  id="event-gotcha"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={gotcha}
                  onChange={(event) => setGotcha(event.target.value)}
                />
              </label>

              <div className="field-row">
                <div className="field">
                  <FieldLabel htmlFor="event-name" cs="Jméno *" en="Name *" />
                  <input
                    id="event-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <FieldLabel htmlFor="event-org" cs="Organizace *" en="Organization *" />
                  <input
                    id="event-org"
                    name="organization"
                    type="text"
                    value={organization}
                    onChange={(event) => setOrganization(event.target.value)}
                    required
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <FieldLabel htmlFor="event-email" cs="E-mail *" en="Email *" />
                  <input
                    id="event-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <FieldLabel htmlFor="event-type" cs="Typ akce *" en="Event type *" />
                  <FormSelect
                    id="event-type"
                    value={eventType}
                    onChange={(value) => {
                      setEventType(value);
                      setTypeInvalid(false);
                    }}
                    options={EVENT_INQUIRY_TYPES.map((option) => ({
                      value: option.value,
                      label: isEn ? option.en : option.cs,
                      hint: isEn ? option.hintEn : option.hintCs,
                    }))}
                    placeholder={isEn ? "Select…" : "Vyberte…"}
                    invalid={typeInvalid}
                    triggerRef={typeRef}
                  />
                  {typeInvalid ? (
                    <p className="mt-2 text-[13px] leading-[1.4] font-medium text-dark" role="alert">
                      <span className="cs">Vyberte typ akce.</span>
                      <span className="en">Select an event type.</span>
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <FieldLabel htmlFor="event-message" cs="Zpráva *" en="Message *" />
                <textarea
                  id="event-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  placeholder={
                    isEn
                      ? "What you have in mind, and roughly when and where."
                      : "O jakou akci jde a zhruba kdy a kde."
                  }
                />
              </div>

              {status === "error" ? (
                <p className="mb-5 text-[14px] leading-[1.5] font-medium text-dark" role="alert">
                  <span className="cs">
                    Nepodařilo se odeslat. Zkuste to znovu, nebo napište na {CONTACT_EMAIL}.
                  </span>
                  <span className="en">
                    Could not send. Try again, or email {CONTACT_EMAIL}.
                  </span>
                </p>
              ) : null}

              <label className="inquiry-consent" htmlFor="event-consent">
                <input
                  id="event-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                />
                <span>
                  <span className="cs">
                    Souhlasím se zpracováním osobních údajů za účelem vyřízení této zprávy. *
                  </span>
                  <span className="en">
                    I agree to the processing of my personal data so this message can be handled. *
                  </span>
                </span>
              </label>

              <button
                type="submit"
                className="btn-p disabled:cursor-wait disabled:opacity-60"
                disabled={status === "sending"}
              >
                <span className="cs">{status === "sending" ? "Odesíláme…" : "Napište nám"}</span>
                <span className="en">{status === "sending" ? "Sending…" : "Write to us"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
