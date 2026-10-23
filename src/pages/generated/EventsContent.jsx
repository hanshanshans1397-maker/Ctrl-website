import { EventInquiryForm } from "../../components/events/EventInquiryForm";
import { EventsGrid } from "../../components/events/EventsGrid";

const HERO_BTN =
  "btn-p inline-flex items-center gap-2 border-none bg-bg px-7 py-3.5 text-[13px] font-semibold tracking-wide text-dark no-underline transition-[background-color,color] duration-250 hover:bg-accent hover:text-bg max-sm:px-5 max-sm:py-3 max-sm:text-xs";

export function EventsPageContent() {
  return (
    <>
      <section
        className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start"
        id="hero"
      >
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          <div className="z-[3] px-5">
            <span className="mb-2 block text-xl text-accent">
              <span className="cs">Program</span>
              <span className="en">Programme</span>
            </span>
            <h1 className="text-balance text-[clamp(36px,10vw,52px)] leading-[0.95] font-extrabold tracking-[-1.5px] text-bg">
              <span className="cs">Akce</span>
              <span className="en">Events</span>
            </h1>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:max-w-full max-sm:px-5">
          <div
            className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden"
            id="heroMeta"
          >
            <span className="text-xl text-accent">
              <span className="cs">Program</span>
              <span className="en">Programme</span>
            </span>
          </div>

          <h1
            className="mb-10 max-w-[12em] translate-y-6 text-balance text-[clamp(52px,6.2vw,104px)] leading-[0.92] font-extrabold tracking-[-2.5px] text-bg opacity-0 max-lg:tracking-[-2px] max-[640px]:mb-8 max-sm:hidden"
            id="heroTitle"
          >
            <span className="cs">Akce</span>
            <span className="en">Events</span>
          </h1>

          <div
            className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5"
            id="heroBottom"
          >
            <p className="max-w-[540px] text-pretty text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.72)] max-sm:text-[15px]">
              <span className="cs">
                Soutěže, konference a setkání, kde se mladí lidé učí, potkávají a
                mění věci kolem sebe.
              </span>
              <span className="en">
                Competitions, conferences and gatherings where young people learn,
                meet and change things around them.
              </span>
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full">
              <a href="#spoluprace" className={`${HERO_BTN} cs`}>
                Napište nám
              </a>
              <a href="#spoluprace" className={`${HERO_BTN} en`}>
                Write to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EventsGrid />
      <EventInquiryForm />
    </>
  );
}
