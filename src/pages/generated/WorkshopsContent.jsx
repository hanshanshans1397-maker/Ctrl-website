import { AudienceSection } from "../../components/workshops/AudienceSection";
import { FormatsSection } from "../../components/workshops/FormatsSection";
import { PartnerSchoolsSection } from "../../components/workshops/PartnerSchoolsSection";
import { PricingSection } from "../../components/workshops/PricingSection";
import { TopicsSection } from "../../components/workshops/TopicsSection";
import {
  PartnerSchoolSection,
  RequestWorkshopSection,
} from "../../components/workshops/WorkshopInquiryForms";

const HERO_BTN =
  "btn-p inline-flex items-center gap-2 border-none bg-bg px-7 py-3.5 text-[13px] font-semibold tracking-wide text-dark no-underline transition-[background-color,color] duration-250 hover:bg-accent hover:text-bg max-sm:px-5 max-sm:py-3 max-sm:text-xs";

export function WorkshopsPageContent() {
  return (
    <>
      <section
        className="hero-full relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark max-sm:min-h-0 max-sm:justify-start"
        id="hero"
      >
        <div className="hero-mobile-head hidden max-sm:block relative w-full shrink-0 bg-dark">
          <div className="px-5 z-[3]">
            <span className="block text-xl text-accent mb-2">
              <span className="cs">Vzdělávání</span>
              <span className="en">Education</span>
            </span>
            <h1 className="text-balance text-[clamp(36px,10vw,52px)] font-extrabold leading-[0.95] tracking-[-1.5px] text-bg">
              <span className="cs">
                Workshopy,
                <br />
                které se dají zažít
              </span>
              <span className="en">
                Workshops
                <br />
                you can experience
              </span>
            </h1>
          </div>
        </div>

        <div className="hero-mobile-body relative z-[3] max-w-[1100px] max-sm:px-5 max-sm:max-w-full">
          <div
            className="mb-9 flex translate-y-4 flex-wrap items-center gap-5 opacity-0 max-[640px]:mb-6 max-[480px]:gap-2 max-sm:hidden"
            id="heroMeta"
          >
            <span className="text-xl text-accent">
              <span className="cs">Vzdělávání</span>
              <span className="en">Education</span>
            </span>
          </div>

          <h1
            className="mb-10 max-w-[12em] text-balance text-[clamp(52px,6.2vw,104px)] leading-[0.92] font-extrabold tracking-[-2.5px] text-bg opacity-0 translate-y-6 max-lg:tracking-[-2px] max-[640px]:mb-8 max-sm:hidden"
            id="heroTitle"
          >
            <span className="cs block">
              Workshopy,
              <br />
              které se dají zažít
            </span>
            <span className="en block">
              Workshops
              <br />
              you can experience
            </span>
          </h1>

          <div
            className="flex translate-y-4 flex-wrap items-end justify-between gap-10 opacity-0 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-8 max-[480px]:gap-5"
            id="heroBottom"
          >
            <p className="cs max-w-[540px] text-pretty text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.72)] max-sm:text-[15px]">
              Učíme mladé i dospělé poznat manipulaci, dezinformace a deepfaky a
              zdravě zacházet s technologiemi. Interaktivně, srozumitelně a od
              lidí, kteří ty samé aplikace používají každý den.
            </p>
            <p className="en max-w-[540px] text-pretty text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.72)] max-sm:text-[15px]">
              We teach young people and adults to recognize manipulation,
              disinformation and deepfakes, and to use technology in a healthy
              way. Interactive, clear, and led by people who use the same apps
              every day.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 max-[640px]:w-full">
              <a href="#poptavka" className={`${HERO_BTN} cs`}>
                Poptat workshop
              </a>
              <a href="#poptavka" className={`${HERO_BTN} en`}>
                Request a workshop
              </a>
            </div>
          </div>
        </div>
      </section>

      <AudienceSection />
      <TopicsSection />
      <FormatsSection />
      <PricingSection />
      <PartnerSchoolsSection />
      <RequestWorkshopSection />
      <PartnerSchoolSection />
    </>
  );
}
