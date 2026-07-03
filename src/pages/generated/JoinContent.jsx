import { useState } from 'react';
import { useLang } from '../../context/LangContext';
import { JoinPartnershipAnimation } from '../../components/JoinPartnershipAnimation';

const FORMSPREE_URL = 'https://formspree.io/f/mqejkdwe';
const TOTAL_STEPS = 3;

const COOP_TYPES = [
  [
    'partner-school',
    'Partnerská škola', 'Partner school',
    'Bezplatný CTRL Workshop pro vaše žáky a studenty.',
    'Free CTRL Workshop for your pupils and students.',
  ],
  [
    'workshop',
    'Workshop', 'Workshop',
    'Uspořádáme vzdělávací workshop na vaší škole nebo akci.',
    'We will run an educational workshop at your school or event.',
  ],
  [
    'partner-org',
    'Partnerská organizace', 'Partner organization',
    'Společné projekty, kampaně a vzdělávací programy.',
    'Joint projects, campaigns and educational programmes.',
  ],
  [
    'media',
    'Mediální partnerství', 'Media partnership',
    'Rozhovory, reportáže a společný obsah.',
    'Interviews, coverage and shared content.',
  ],
  [
    'summit',
    'CTRL Summit 2026', 'CTRL Summit 2026',
    'Institucionální registrace nebo sponzorství summitu.',
    'Institutional registration or summit sponsorship.',
  ],
  [
    'other',
    'Jiné', 'Other',
    'Máte jiný nápad? Napište nám.',
    'Have a different idea? Write to us.',
  ],
];

export function JoinPageContent() {
  const { isEn } = useLang();

  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coopType, setCoopType] = useState('');
  const [message, setMessage] = useState('');

  const isStepValid = () => {
    switch (step) {
      case 0: return name.trim() !== '' && email.trim() !== '';
      case 1: return coopType !== '';
      case 2: return message.trim() !== '';
      default: return false;
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

    const selectedType = COOP_TYPES.find(([val]) => val === coopType);
    const typeLabel = selectedType
      ? isEn ? selectedType[2] : selectedType[1]
      : coopType;

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: JSON.stringify({ name, email, type: typeLabel, message }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(
          isEn
            ? 'Could not send. Please try again.'
            : 'Nepodařilo se odeslat. Zkuste to znovu.',
        );
        setIsSubmitting(false);
      }
    } catch {
      alert(
        isEn
          ? 'Could not send. Please try again or email us.'
          : 'Nepodařilo se odeslat. Zkuste to znovu nebo nám napište e-mail.',
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
            <span className="page-label cs">Spolupráce</span>
            <span className="page-label en">Cooperate</span>
            <h1 className="page-title cs text-bg">Zapojte se.</h1>
            <h1 className="page-title en text-bg">Get involved.</h1>
          </div>
          <p className="page-sub cs max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Hledáme partnerské školy, organizace a instituce. Napište nám.
          </p>
          <p className="page-sub en max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            We are looking for partner schools, organizations and institutions.
            Write to us.
          </p>
        </div>
      </div>

      <section className="sec bg-bg px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="grid grid-cols-2 items-start gap-[100px] max-md:grid-cols-1 max-md:gap-10">

            {/* Left — benefits */}
            <div className="rev">
              <h2 className="sec-title mb-8 text-[clamp(32px,3.5vw,52px)] leading-[1.1] font-bold tracking-[-2px] text-dark max-sm:text-[clamp(26px,7vw,40px)] max-sm:tracking-[-1px]">
                <span className="cs">Budujte s námi.</span>
                <span className="en">Build with us.</span>
              </h2>
              <p className="cs mb-4 text-base leading-[1.85] font-light text-mid">
                Nepřipravenost není možnost. Hledáme partnery, kteří to ví taky.
              </p>
              <p className="en mb-4 text-base leading-[1.85] font-light text-mid">
                Not being prepared is not an option. We are looking for partners
                who know that too.
              </p>

              <div className="my-10 w-full max-w-[520px]">
                <JoinPartnershipAnimation step={step} isSuccess={isSuccess} />
              </div>

              <div className="mt-12 border-t border-separator">
                <div className="flex items-center gap-4 border-b border-separator py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Partnerská škola: CTRL Workshop zdarma</span>
                  <span className="en">Partner school: CTRL Workshop for free</span>
                </div>
                <div className="flex items-center gap-4 border-b border-separator py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Partnerská organizace: společné projekty</span>
                  <span className="en">Partner organization: joint projects</span>
                </div>
                <div className="flex items-center gap-4 border-b border-separator py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Mediální partnerství: rozhovory, reporty</span>
                  <span className="en">Media partnership: interviews, coverage</span>
                </div>
                <div className="flex items-center gap-4 border-b border-separator py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Institucionální spolupráce: Erasmus+ a granty</span>
                  <span className="en">Institutional cooperation: Erasmus+ and grants</span>
                </div>
                <div className="flex items-center gap-4 py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">CTRL Summit 2026: registrace</span>
                  <span className="en">CTRL Summit 2026: registration</span>
                </div>
              </div>
            </div>

            {/* Right — wizard form panel using apply-page CSS */}
            <div className="join-form-panel rev d2 apply-page join-apply-panel">

              {/* Progress bar */}
              <div className="progress-track">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <div key={i} className="progress-seg">
                    <div
                      className="fill"
                      style={{ width: i <= step ? '100%' : '0%' }}
                    />
                  </div>
                ))}
              </div>

              {/* Success */}
              {isSuccess && (
                <div className="success show">
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
                  <h2 className="cs">Zpráva odeslána</h2>
                  <h2 className="en">Message sent</h2>
                  <p className="cs">
                    Děkujeme za zájem o spolupráci. Ozveme se vám co nejdříve.
                  </p>
                  <p className="en">
                    Thank you for your interest in cooperation. We will get back
                    to you as soon as possible.
                  </p>
                </div>
              )}

              {/* Form */}
              {!isSuccess && (
                <div className="form-live">
                  {/* Sliding viewport */}
                  <div className="apply-steps-viewport">
                    <div
                      className="apply-steps-track"
                      style={{ transform: `translateX(-${step * 100}%)` }}
                    >

                      {/* ── Step 0: Kdo jste ── */}
                      <div className="apply-step">
                        <div className="section">
                          <div className="section-num">01</div>
                          <span className="section-label">
                            <span className="cs">Kdo jste</span>
                            <span className="en">Who you are</span>
                          </span>
                          <p className="section-sub cs">
                            Základní kontaktní údaje.
                          </p>
                          <p className="section-sub en">
                            Basic contact information.
                          </p>

                          <div className="field">
                            <label>
                              <span className="cs">Jméno nebo organizace *</span>
                              <span className="en">Name or organization *</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder={
                                isEn
                                  ? 'John Smith / Example School'
                                  : 'Jan Novák / ZŠ Brno'
                              }
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          <div className="field">
                            <label>E-mail *</label>
                            <input
                              type="email"
                              name="email"
                              placeholder={
                                isEn ? 'you@email.com' : 'vas@email.cz'
                              }
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ── Step 1: Typ spolupráce ── */}
                      <div className="apply-step">
                        <div className="section">
                          <div className="section-num">02</div>
                          <span className="section-label">
                            <span className="cs">Typ spolupráce</span>
                            <span className="en">Type of cooperation</span>
                          </span>
                          <p className="section-sub cs">
                            Vyberte oblast, která vás zajímá nejvíc.
                          </p>
                          <p className="section-sub en">
                            Pick the area that interests you most.
                          </p>

                          <div className="field">
                            <div className="radio-cards">
                              {COOP_TYPES.map(
                                ([val, titleCs, titleEn, descCs, descEn]) => (
                                  <div
                                    key={val}
                                    className={`radio-card${coopType === val ? ' selected' : ''}`}
                                    role="radio"
                                    aria-checked={coopType === val}
                                    tabIndex={0}
                                    onClick={() => setCoopType(val)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' || e.key === ' ')
                                        setCoopType(val);
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

                      {/* ── Step 2: Zpráva ── */}
                      <div className="apply-step">
                        <div className="section">
                          <div className="section-num">03</div>
                          <span className="section-label">
                            <span className="cs">Vaše zpráva</span>
                            <span className="en">Your message</span>
                          </span>
                          <p className="section-sub cs">
                            Pár vět stačí. Rádi se dozvíme více.
                          </p>
                          <p className="section-sub en">
                            A few sentences is enough. We'd love to hear more.
                          </p>

                          <div className="field">
                            <label>
                              <span className="cs">Zpráva *</span>
                              <span className="en">Message *</span>
                            </label>
                            <textarea
                              name="message"
                              placeholder={
                                isEn ? 'Write to us...' : 'Napište nám...'
                              }
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
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
                        className={`apply-btn-next${valid ? ' apply-btn-next--active' : ''}`}
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
                        className={`apply-btn-next${valid && !isSubmitting ? ' apply-btn-next--active' : ''}`}
                        onClick={handleSubmit}
                        disabled={!valid || isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>...</span>
                        ) : (
                          <>
                            <span className="cs">Odeslat zprávu</span>
                            <span className="en">Send message</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

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
