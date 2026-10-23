import { EVENTS } from "../../../shared/events";
import { EVENT_ICONS } from "./EventIcons";

const CARD =
  "what-card rev group relative flex h-full min-w-0 flex-col overflow-hidden bg-card px-7 py-8 transition-colors duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-400 after:content-[''] hover:bg-bg2 hover:after:scale-x-100 max-sm:px-5 max-sm:py-7";

const DELAYS = ["d1", "d2", "d3"];

export function EventsGrid() {
  return (
    <section className="sec bg-bg2 scroll-mt-28" id="akce">
      <div className="inner">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Přehled</span>
            <span className="en">Overview</span>
          </span>
          <h2 className="section-title">
            <span className="cs">Naše akce.</span>
            <span className="en">Our events.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3">
          {EVENTS.map((event, index) => {
            const Icon = EVENT_ICONS[event.id];
            return (
              <article key={event.id} className={`${CARD} ${DELAYS[index % DELAYS.length]}`}>
                {Icon ? <Icon /> : null}
                <h3 className="relative z-[2] text-balance text-[clamp(18px,1.5vw,22px)] leading-[1.2] font-semibold tracking-[-0.4px] text-dark">
                  {event.name}
                </h3>
                <p className="relative z-[2] mt-3 font-mono text-[10px] font-medium tracking-[1.8px] text-accent uppercase">
                  <span className="cs">{event.categoryCs}</span>
                  <span className="en">{event.categoryEn}</span>
                </p>
                <p className="relative z-[2] mt-4 text-pretty text-[15px] leading-[1.7] font-light text-mid">
                  <span className="cs">{event.descCs}</span>
                  <span className="en">{event.descEn}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
