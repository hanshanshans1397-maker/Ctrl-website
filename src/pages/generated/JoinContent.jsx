import { Link } from 'react-router-dom';

export function JoinPageContent() {
  return (
    <>
      <div className="page-hero relative overflow-hidden bg-dark flex min-h-[60vh] flex-col justify-end px-[52px] pt-40 pb-[100px] max-lg:px-6 max-lg:pb-20 max-sm:px-5 max-sm:pb-[52px]">
        <img src="/photos/stage.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0"  fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(11,16,32,0.92)_0%,rgba(11,16,32,0.58)_50%,rgba(11,16,32,0.2)_100%)]" aria-hidden="true" />
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <span className="page-label cs mb-6 block font-mono text-[11px] leading-[1.5] font-normal tracking-[3px] text-accent uppercase">
            Spolupráce
          </span>
          <span className="page-label en mb-6 block font-mono text-[11px] leading-[1.5] font-normal tracking-[3px] text-accent uppercase">
            Cooperate
          </span>
          <h1 className="page-title cs mb-6 text-[clamp(52px,7vw,110px)] leading-none font-extrabold tracking-[-3px] text-bg max-sm:text-[clamp(34px,9vw,52px)] max-sm:tracking-[-1.5px]">
            Zapojte se.
          </h1>
          <h1 className="page-title en mb-6 text-[clamp(52px,7vw,110px)] leading-none font-extrabold tracking-[-3px] text-bg max-sm:text-[clamp(34px,9vw,52px)] max-sm:tracking-[-1.5px]">
            Get involved.
          </h1>
          <p className="page-sub cs max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Hledáme partnerské školy, organizace a instituce. Napište nám.
          </p>
          <p className="page-sub en max-w-[560px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            We are looking for partner schools, organizations and institutions. Write to us.
          </p>
        </div>
      </div>

      <section className="sec bg-bg px-[52px] py-[120px] max-lg:px-6 max-lg:py-20 max-md:px-6 max-md:py-[72px] max-sm:px-5 max-sm:py-16">
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full">
          <div className="grid grid-cols-2 items-start gap-[100px] max-md:grid-cols-1 max-md:gap-10">

            <div className="rev">
              <h2 className="sec-title mb-8 text-[clamp(32px,3.5vw,52px)] leading-[1.1] font-bold tracking-[-2px] text-dark max-sm:text-[clamp(26px,7vw,40px)] max-sm:tracking-[-1px]">
                <span className="cs">Budujte s námi.</span>
                <span className="en">Build with us.</span>
              </h2>
              <p className="cs mb-4 text-base leading-[1.85] font-light text-mid">
                Nepřipravenost není možnost. Hledáme partnery, kteří to ví taky.
              </p>
              <p className="en mb-4 text-base leading-[1.85] font-light text-mid">
                Not being prepared is not an option. We are looking for partners who know that too.
              </p>

              <div className="mt-12 border-t border-light">
                <div className="flex items-center gap-4 border-b border-light py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Partnerská škola: CTRL Workshop zdarma</span>
                  <span className="en">Partner school: CTRL Workshop for free</span>
                </div>
                <div className="flex items-center gap-4 border-b border-light py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Partnerská organizace: společné projekty</span>
                  <span className="en">Partner organization: joint projects</span>
                </div>
                <div className="flex items-center gap-4 border-b border-light py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="cs">Mediální partnerstí: rozhovory, reporty</span>
                  <span className="en">Media partnership: interviews, coverage</span>
                </div>
                <div className="flex items-center gap-4 border-b border-light py-5 text-sm font-light text-mid transition-[color,padding-left] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2.5 hover:text-dark">
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

            <div className="join-form-panel rev d2 border border-light bg-white p-12 max-md:p-9 max-sm:p-7">
              <div
                className="form-success hidden border border-light bg-bg2 px-10 py-12 text-center [&.show]:block max-sm:px-7 max-sm:py-9"
                id="formSuccess"
              >
                <div className="form-success-icon mb-5 text-[40px]">✓</div>
                <h3 className="cs mb-3 text-2xl font-bold tracking-[-0.5px] text-dark">Zpráva odeslána.</h3>
                <h3 className="en mb-3 text-2xl font-bold tracking-[-0.5px] text-dark">Message sent.</h3>
                <p className="cs text-[15px] font-light text-mid">Děkujeme za zprávu. Ozveme se vám co nejdříve.</p>
                <p className="en text-[15px] font-light text-mid">Thank you for your message. We will get back to you as soon as possible.</p>
              </div>

              <form
                id="contactForm"
                action="https://formspree.io/f/mqejkdwe"
                method="POST"
                className="form-block flex flex-col gap-5"
              >
                <input type="text" name="_gotcha" className="hidden" />

                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">
                    <span className="cs">Jméno nebo organizace</span>
                    <span className="en">Name or organization</span>
                  </label>
                  <input
                    className="fi w-full rounded-none border border-light bg-bg px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background-color] duration-[250ms] focus:border-dark focus:bg-white"
                    type="text"
                    name="name"
                    data-ph-cs="Jan Novák / ZŠ Brno"
                    data-ph-en="John Smith / Example School"
                    required
                  />
                </div>

                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">Email</label>
                  <input
                    className="fi w-full rounded-none border border-light bg-bg px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background-color] duration-[250ms] focus:border-dark focus:bg-white"
                    type="email"
                    name="email"
                    data-ph-cs="vas@email.cz"
                    data-ph-en="you@email.com"
                    required
                  />
                </div>

                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">
                    <span className="cs">Typ spolupráce</span>
                    <span className="en">Type of cooperation</span>
                  </label>
                  <select
                    className="fs w-full cursor-pointer rounded-none border border-light bg-bg px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background-color] duration-[250ms] focus:border-dark focus:bg-white"
                    name="type"
                    required
                  >
                    <option value="" disabled selected>
                      Vyberte...
                    </option>
                    <option value="Partnerská škola" className="cs">
                      Partnerská škola
                    </option>
                    <option value="Partner school" className="en">
                      Partner school
                    </option>
                    <option value="Workshop">Workshop</option>
                    <option value="Partnerská organizace" className="cs">
                      Partnerská organizace
                    </option>
                    <option value="Partner organization" className="en">
                      Partner organization
                    </option>
                    <option value="Mediální partnerstí" className="cs">
                      Mediální partnerstí
                    </option>
                    <option value="Media partnership" className="en">
                      Media partnership
                    </option>
                    <option value="CTRL Summit 2026">CTRL Summit 2026</option>
                    <option value="Jiné" className="cs">
                      Jiné
                    </option>
                    <option value="Other" className="en">
                      Other
                    </option>
                  </select>
                </div>

                <div className="fl flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-normal tracking-[2px] text-mid uppercase">
                    <span className="cs">Zpráva</span>
                    <span className="en">Message</span>
                  </label>
                  <textarea
                    className="fta min-h-20 w-full resize-none rounded-none border border-light bg-bg px-4 py-3.5 text-sm font-light text-dark outline-none transition-[border-color,background-color] duration-[250ms] focus:border-dark focus:bg-white"
                    name="message"
                    data-ph-cs="Napište nám..."
                    data-ph-en="Write to us..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="fsub mt-2 self-start border-none bg-dark px-9 py-4 text-xs font-semibold tracking-[2px] text-bg uppercase transition-colors duration-[250ms] hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                  id="submitBtn"
                >
                  <span id="submitText">
                    <span className="cs">Odeslat zprávu</span>
                    <span className="en">Send message</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-wrap-outer overflow-hidden border-t border-b border-light bg-bg py-[13px]">
        <div className="ticker-inner flex animate-ticker whitespace-nowrap" id="ticker">
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
