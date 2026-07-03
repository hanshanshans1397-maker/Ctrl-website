import { useState, useRef } from "react";
import { useLang } from "../../context/LangContext";

const APPLY_API_URL = "/api/apply";
const TOTAL_STEPS = 5;

const INVOLVEMENT_LABELS = {
  lokalni: { cs: "Lokální buňka", en: "Local cell" },
  online: { cs: "Online příspěvek", en: "Online contribution" },
  event: { cs: "Jen velké akce", en: "Major events only" },
};

const COUNTRY_LABELS = {
  cz: { cs: "Česká republika", en: "Czech Republic" },
  sk: { cs: "Slovensko", en: "Slovakia" },
  at: { cs: "Rakousko", en: "Austria" },
  pl: { cs: "Polsko", en: "Poland" },
  si: { cs: "Slovinsko", en: "Slovenia" },
  hu: { cs: "Maďarsko", en: "Hungary" },
  other: { cs: "Jiná", en: "Other" },
};

const HEAR_ABOUT_LABELS = {
  social: { cs: "Instagram / TikTok", en: "Instagram / TikTok" },
  friend: { cs: "Od kamaráda", en: "From a friend" },
  school: { cs: "Na škole / workshopu", en: "At school / workshop" },
  summit: { cs: "CTRL Summit", en: "CTRL Summit" },
  web: { cs: "Web ctrleurope.com", en: "Website ctrleurope.com" },
  other: { cs: "Jinde", en: "Elsewhere" },
};

const CELLS = [
  ["pr", "PR a komunikace", "PR and communications"],
  ["social", "Sociální sítě", "Social media"],
  ["podcast", "Podcast", "Podcast"],
  ["research", "Research", "Research"],
  ["design", "Grafika a design", "Graphics and design"],
  ["video", "Video", "Video"],
  ["intl", "Mezinárodní vztahy", "International relations"],
  ["events", "Eventy", "Events"],
  ["nevim", "Ještě nevím", "Not sure yet"],
];

const SKILLS = [
  ["psani", "Psaní a copywriting", "Writing and copywriting"],
  ["grafika", "Grafický design", "Graphic design"],
  ["video2", "Střih videa", "Video editing"],
  ["prog", "Programování", "Programming"],
  ["reci", "Veřejné vystupování", "Public speaking"],
  ["jazyky", "Cizí jazyky", "Foreign languages"],
  ["organizace", "Organizace eventů", "Event organization"],
  ["data", "Analýza dat", "Data analysis"],
];

const INVOLVEMENT = [
  [
    "lokalni",
    "Lokální buňka",
    "Local cell",
    "Chci aktivně budovat CTRL Europe na své škole nebo ve svém městě.",
    "I want to actively build CTRL Europe at my school or in my city.",
  ],
  [
    "online",
    "Online příspěvek",
    "Online contribution",
    "Pomůžu s obsahem, researchem nebo komunikací na dálku.",
    "I will help with content, research or communication remotely.",
  ],
  [
    "event",
    "Jen velké akce",
    "Major events only",
    "Rád se zapojím do CTRL Summit a podobných eventů.",
    "I am happy to get involved in CTRL Summit and similar events.",
  ],
];

function formatHours(value, isEn) {
  const unit = isEn ? "hrs" : "hod";
  return Number(value) === 15 ? `15+ ${unit}` : `${value} ${unit}`;
}

function labelFromMap(map, value, isEn) {
  if (!value) return "";
  const entry = map[value];
  if (!entry) return String(value);
  return isEn ? entry.en : entry.cs;
}

function getChipLabels(data, sel, isEn) {
  return [...sel]
    .map((val) => {
      const item = data.find(([v]) => v === val);
      return item ? (isEn ? item[2] : item[1]) : val;
    })
    .join(", ");
}

function toggleSet(prev, val) {
  const next = new Set(prev);
  if (next.has(val)) next.delete(val);
  else next.add(val);
  return next;
}

export function ApplyPageContent() {
  const { isEn } = useLang();

  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 0 — required tracked fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  // Step 3 — required
  const [radioForma, setRadioForma] = useState("");

  // Step 4 — required
  const [motivation, setMotivation] = useState("");

  // Chip selections (no required, but tracked for submission)
  const [cellsSel, setCellsSel] = useState(new Set());
  const [skillsSel, setSkillsSel] = useState(new Set());

  // Slider (controlled for live display)
  const [hours, setHours] = useState(3);

  // Uncontrolled optional refs (read at submit time)
  const phoneRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const schoolRef = useRef(null);
  const languagesRef = useRef(null);
  const hearAboutRef = useRef(null);
  const honeypotRef = useRef(null);

  const isStepValid = () => {
    switch (step) {
      case 0:
        return (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          birthDate !== "" &&
          email.trim() !== ""
        );
      case 1:
        return true;
      case 2:
        return true;
      case 3:
        return radioForma !== "";
      case 4:
        return motivation.trim() !== "";
      default:
        return false;
    }
  };

  const valid = isStepValid();

  const goNext = () => {
    if (valid && step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (!valid || isSubmitting) return;

    setIsSubmitting(true);

    const payload = {
      lang: isEn ? "en" : "cs",
      firstName,
      lastName,
      birthDate,
      phone: phoneRef.current?.value ?? "",
      email,
      city: cityRef.current?.value ?? "",
      country: labelFromMap(COUNTRY_LABELS, countryRef.current?.value, isEn),
      school: schoolRef.current?.value ?? "",
      languages: languagesRef.current?.value ?? "",
      hoursPerWeek: formatHours(hours, isEn),
      motivation,
      hearAbout: labelFromMap(
        HEAR_ABOUT_LABELS,
        hearAboutRef.current?.value,
        isEn,
      ),
      cells: getChipLabels(CELLS, cellsSel, isEn),
      skills: getChipLabels(SKILLS, skillsSel, isEn),
      involvement: labelFromMap(INVOLVEMENT_LABELS, radioForma, isEn),
      _gotcha: honeypotRef.current?.value ?? "",
    };

    try {
      const res = await fetch(APPLY_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert(
          isEn
            ? "Could not send. Please try again."
            : "Nepodařilo se odeslat. Zkuste to znovu.",
        );
        setIsSubmitting(false);
      }
    } catch {
      alert(
        isEn
          ? "Could not send. Please try again or email us."
          : "Nepodařilo se odeslat. Zkuste to znovu nebo nám napište e-mail.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="page-hero relative overflow-hidden bg-dark flex min-h-[60vh] flex-col justify-end px-[52px] pt-40 pb-[100px] max-lg:px-6 max-lg:pb-20 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">CTRL Europe · Přihláška člena</span>
            <span className="page-label en">
              CTRL Europe · Member Application
            </span>
            <h1 className="page-title cs text-bg">Připoj se k síti.</h1>
            <h1 className="page-title en text-bg">Join the network.</h1>
          </div>
          <p className="page-sub cs max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            CTRL Europe roste díky lidem jako ty. Vyplň přihlášku a staneš se
            součástí{" "}
            <strong className="text-bg font-semibold">
              sítě 621+ mladých lidí
            </strong>{" "}
            napříč střední a východní Evropou, kteří se rozhodli nečekat až to
            vyřeší někdo jiný.
          </p>
          <p className="page-sub en max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            CTRL Europe grows thanks to people like you. Fill out the
            application and become part of a{" "}
            <strong className="text-bg font-semibold">
              network of 621+ young people
            </strong>{" "}
            across Central and Eastern Europe who decided not to wait for
            someone else to fix things.
          </p>
        </div>
      </div>

      <div className="apply-page apply-page--below-hero">
        <div className="apply-wrap">
          {/* Progress bar */}
          <div className="progress-track">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div key={i} className="progress-seg">
                <div
                  className="fill"
                  style={{ width: i <= step ? "100%" : "0%" }}
                />
              </div>
            ))}
          </div>

          {/* Success */}
          {isSuccess && (
            <div className="success show" id="applyFormSuccess">
              <div className="success-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-accent"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="cs">Přihláška odeslána</h2>
              <h2 className="en">Application sent</h2>
              <p className="cs">
                Děkujeme za zájem o CTRL Europe. Ozveme se ti na e-mail do
                několika dní s dalšími informacemi.
              </p>
              <p className="en">
                Thank you for your interest in CTRL Europe. We will email you
                within a few days with more information.
              </p>
            </div>
          )}

          {/* Multi-step form */}
          {!isSuccess && (
            <div className="form-live">
              <input
                type="text"
                name="_gotcha"
                className="apply-honeypot"
                tabIndex={-1}
                autoComplete="off"
                ref={honeypotRef}
              />

              {/* Sliding viewport */}
              <div className="apply-steps-viewport">
                <div
                  className="apply-steps-track"
                  style={{ transform: `translateX(-${step * 100}%)` }}
                >
                  {/* ── Step 0: Kdo jsi ── */}
                  <div className="apply-step">
                    <div className="section">
                      <div className="section-num">01</div>
                      <span className="section-label">
                        <span className="cs">Kdo jsi</span>
                        <span className="en">Who you are</span>
                      </span>
                      <p className="section-sub cs">
                        Základní údaje pro vedení členské evidence.
                      </p>
                      <p className="section-sub en">
                        Basic details for our member records.
                      </p>

                      <div className="field-row">
                        <div className="field">
                          <label>
                            <span className="cs">Jméno *</span>
                            <span className="en">First name *</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder={isEn ? "Jane" : "Jana"}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>
                            <span className="cs">Příjmení *</span>
                            <span className="en">Last name *</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder={isEn ? "Smith" : "Nováková"}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="field-row">
                        <div className="field">
                          <label>
                            <span className="cs">Datum narození *</span>
                            <span className="en">Date of birth *</span>
                          </label>
                          <input
                            type="date"
                            name="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>
                            <span className="cs">Telefon</span>
                            <span className="en">Phone</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+420 777 000 000"
                            ref={phoneRef}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label>E-mail *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder={
                            isEn ? "jane@email.com" : "jana@email.cz"
                          }
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="field-row">
                        <div className="field">
                          <label>
                            <span className="cs">Město</span>
                            <span className="en">City</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Brno"
                            ref={cityRef}
                          />
                        </div>
                        <div className="field">
                          <label>
                            <span className="cs">Země</span>
                            <span className="en">Country</span>
                          </label>
                          <select
                            name="country"
                            defaultValue="cz"
                            ref={countryRef}
                          >
                            {Object.entries(COUNTRY_LABELS).map(
                              ([val, labels]) => (
                                <option key={val} value={val}>
                                  {isEn ? labels.en : labels.cs}
                                </option>
                              ),
                            )}
                          </select>
                        </div>
                      </div>

                      <div className="field">
                        <label>
                          <span className="cs">
                            Škola nebo zaměstnání{" "}
                            <span className="opt">nepovinné</span>
                          </span>
                          <span className="en">
                            School or employment{" "}
                            <span className="opt">optional</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          name="school"
                          placeholder={
                            isEn
                              ? "Example High School, Brno"
                              : "Gymnázium Matyáše Lercha, Brno"
                          }
                          ref={schoolRef}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Step 1: Buňky ── */}
                  <div className="apply-step">
                    <div className="section">
                      <div className="section-num">02</div>
                      <span className="section-label">
                        <span className="cs">Kam chceš patřit</span>
                        <span className="en">Where you want to belong</span>
                      </span>
                      <p className="section-sub cs">
                        Buňky jsou specializované týmy v rámci CTRL Europe.
                        Vyber tu, která tě nejvíc zajímá — klidně víc než jednu.
                      </p>
                      <p className="section-sub en">
                        Cells are specialized teams within CTRL Europe. Pick the
                        one that interests you most — feel free to choose more
                        than one.
                      </p>

                      <div className="field">
                        <div className="chip-group">
                          {CELLS.map(([val, cs, en]) => (
                            <div
                              key={val}
                              className={`chip${cellsSel.has(val) ? " selected" : ""}`}
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                setCellsSel((prev) => toggleSet(prev, val))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ")
                                  setCellsSel((prev) => toggleSet(prev, val));
                              }}
                            >
                              <span className="cs">{cs}</span>
                              <span className="en">{en}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Step 2: Dovednosti ── */}
                  <div className="apply-step">
                    <div className="section">
                      <div className="section-num">03</div>
                      <span className="section-label">
                        <span className="cs">Co umíš</span>
                        <span className="en">What you can do</span>
                      </span>
                      <p className="section-sub cs">
                        Žádná zkušenost nevyžadována — chceme jen vědět, kde bys
                        mohl/a být užitečný/á.
                      </p>
                      <p className="section-sub en">
                        No experience required — we just want to know where you
                        could be useful.
                      </p>

                      <div className="field">
                        <div className="chip-group">
                          {SKILLS.map(([val, cs, en]) => (
                            <div
                              key={val}
                              className={`chip${skillsSel.has(val) ? " selected" : ""}`}
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                setSkillsSel((prev) => toggleSet(prev, val))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ")
                                  setSkillsSel((prev) => toggleSet(prev, val));
                              }}
                            >
                              <span className="cs">{cs}</span>
                              <span className="en">{en}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="field field-spaced">
                        <label>
                          <span className="cs">
                            Jazyky, kterými mluvíš{" "}
                            <span className="opt">nepovinné</span>
                          </span>
                          <span className="en">
                            Languages you speak{" "}
                            <span className="opt">optional</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          name="languages"
                          placeholder={
                            isEn
                              ? "Czech, English, German..."
                              : "čeština, angličtina, němčina..."
                          }
                          ref={languagesRef}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Step 3: Čas ── */}
                  <div className="apply-step">
                    <div className="section">
                      <div className="section-num">04</div>
                      <span className="section-label">
                        <span className="cs">Kolik času máš</span>
                        <span className="en">How much time you have</span>
                      </span>
                      <p className="section-sub cs">
                        Žádný závazek navíc — jen ať víme, s čím můžeme počítat.
                      </p>
                      <p className="section-sub en">
                        No extra commitment — we just need to know what to
                        expect.
                      </p>

                      <div className="field">
                        <label>
                          <span className="cs">
                            Hodin týdně, které bys věnoval/a CTRL Europe
                          </span>
                          <span className="en">
                            Hours per week you would dedicate to CTRL Europe
                          </span>
                        </label>
                        <div className="avail-row">
                          <input
                            type="range"
                            name="hoursPerWeek"
                            min="1"
                            max="15"
                            value={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                          />
                          <div className="avail-val">
                            {formatHours(hours, isEn)}
                          </div>
                        </div>
                      </div>

                      <div className="field field-tight">
                        <label>
                          <span className="cs">Forma zapojení *</span>
                          <span className="en">
                            How you want to get involved *
                          </span>
                        </label>
                        <div className="radio-cards">
                          {INVOLVEMENT.map(
                            ([val, titleCs, titleEn, descCs, descEn]) => (
                              <div
                                key={val}
                                className={`radio-card${radioForma === val ? " selected" : ""}`}
                                role="radio"
                                aria-checked={radioForma === val}
                                tabIndex={0}
                                onClick={() => setRadioForma(val)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ")
                                    setRadioForma(val);
                                }}
                              >
                                <div className="radio-dot" aria-hidden="true" />
                                <div className="radio-text">
                                  <strong>
                                    <span className="cs">{titleCs}</span>
                                    <span className="en">{titleEn}</span>
                                  </strong>
                                  <span>
                                    <span className="cs">{descCs}</span>
                                    <span className="en">{descEn}</span>
                                  </span>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Step 4: Proč CTRL Europe ── */}
                  <div className="apply-step">
                    <div className="section">
                      <div className="section-num">05</div>
                      <span className="section-label">
                        <span className="cs">Proč CTRL Europe</span>
                        <span className="en">Why CTRL Europe</span>
                      </span>
                      <p className="section-sub cs">
                        Pár vět stačí. Chceme slyšet tvůj vlastní hlas, ne
                        dokonalou esej.
                      </p>
                      <p className="section-sub en">
                        A few sentences is enough. We want to hear your own
                        voice, not a perfect essay.
                      </p>

                      <div className="field">
                        <label>
                          <span className="cs">
                            Co tě na CTRL Europe zaujalo? *
                          </span>
                          <span className="en">
                            What drew you to CTRL Europe? *
                          </span>
                        </label>
                        <textarea
                          name="motivation"
                          placeholder={
                            isEn
                              ? "Write a few sentences about why you want to get involved..."
                              : "Napiš pár vět o tom, proč se chceš zapojit..."
                          }
                          value={motivation}
                          onChange={(e) => setMotivation(e.target.value)}
                        />
                      </div>

                      <div className="field">
                        <label>
                          <span className="cs">
                            Kde jsi o nás slyšel/a?{" "}
                            <span className="opt">nepovinné</span>
                          </span>
                          <span className="en">
                            How did you hear about us?{" "}
                            <span className="opt">optional</span>
                          </span>
                        </label>
                        <select
                          name="hearAbout"
                          defaultValue=""
                          ref={hearAboutRef}
                        >
                          <option value="" disabled>
                            {isEn ? "Select..." : "Vyber..."}
                          </option>
                          {Object.entries(HEAR_ABOUT_LABELS).map(
                            ([val, labels]) => (
                              <option key={val} value={val}>
                                {isEn ? labels.en : labels.cs}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="apply-nav">
                {step > 0 && (
                  <button
                    type="button"
                    className="apply-btn-back"
                    onClick={goBack}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 2L4 7l5 5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="cs">Zpět</span>
                    <span className="en">Back</span>
                  </button>
                )}

                {step < TOTAL_STEPS - 1 ? (
                  <button
                    type="button"
                    className={`apply-btn-next${valid ? " apply-btn-next--active" : ""}`}
                    onClick={goNext}
                    disabled={!valid}
                  >
                    <span className="cs">Další</span>
                    <span className="en">Next</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`apply-btn-next${valid && !isSubmitting ? " apply-btn-next--active" : ""}`}
                    onClick={handleSubmit}
                    disabled={!valid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>...</span>
                    ) : (
                      <>
                        <span className="cs">Odeslat přihlášku</span>
                        <span className="en">Submit application</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {step === TOTAL_STEPS - 1 && (
                <div className="apply-nav-note">
                  <p className="submit-note cs">
                    Odpovíme do 5 pracovních dní. Pokud je ti méně než 15 let,
                    budeme potřebovat souhlas zákonného zástupce.
                  </p>
                  <p className="submit-note en">
                    We will respond within 5 business days. If you are under 15,
                    we will need consent from a legal guardian.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="ticker-wrap-outer overflow-hidden border-t border-b border-separator bg-bg py-[13px]">
        <div
          className="ticker-inner flex animate-ticker whitespace-nowrap"
          id="ticker"
        >
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            CTRL Europe
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            CEE Youth Platform
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Digitální odolnost
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Digital Resilience
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            CTRL Summit 2026
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Erasmus+
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            AI povědomí
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            AI Awareness
          </div>
          <div className="ticker-item cs flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Mediální gramotnost
          </div>
          <div className="ticker-item en flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Media Literacy
          </div>
          <div className="ticker-item flex shrink-0 items-center gap-11 px-11 font-mono text-[11px] font-normal tracking-[2px] text-mid uppercase">
            Brno
          </div>
        </div>
      </div>
    </>
  );
}
