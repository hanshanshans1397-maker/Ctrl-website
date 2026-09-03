import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { getInstagramUrl, CONTACT_EMAIL } from "../utils/socialLinks";
import { ORGANIZATION } from "../utils/organizationInfo";

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[14px] h-[14px] shrink-0"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[14px] h-[14px] shrink-0"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.89a8.18 8.18 0 0 0 4.78 1.52V7c-.01 0-.4-.06-1.01-.31z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[14px] h-[14px] shrink-0"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const { isEn } = useLang();
  const instagramUrl = getInstagramUrl(isEn);

  return (
    <footer className="overflow-hidden border-t border-[rgba(245,245,243,0.06)] bg-dark px-[52px] pt-10 pb-7 max-lg:px-6 max-lg:pt-9 max-lg:pb-6 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-5">
      <div className="mx-auto max-w-[1300px]" data-footer-inner="">
        <div className="mb-8 flex items-start justify-between border-b border-[rgba(245,245,243,0.06)] pb-8 max-lg:mb-6 max-lg:flex-col max-lg:gap-7 max-lg:pb-6 max-[480px]:mb-5 max-[480px]:gap-5 max-[480px]:pb-5">
          <div>
            <Link
              to="/"
              className="flex items-baseline gap-[0.1em] no-underline text-[clamp(22px,2.5vw,30px)] font-extrabold leading-[0.95] tracking-[-1px] text-bg"
            >
              <img
                src="/ctrl_logo_cropped.png"
                alt="CTRL"
                className="h-[1cap] w-auto"
              />
              <span>Europe</span>
            </Link>
            <div className="mt-3 font-mono text-[11px] text-[rgba(245,245,243,0.5)] italic">
              "Take control before someone else does."
            </div>
          </div>
          <div className="flex gap-14 max-lg:flex-wrap max-lg:gap-8 max-[480px]:flex-col max-[480px]:gap-5">
            <div>
              <h4 className="cs mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Projekt
              </h4>
              <h4 className="en mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Project
              </h4>
              <Link
                to="/"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Domů</span>
                <span className="en">Home</span>
              </Link>
              <Link
                to="/about"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">O nás</span>
                <span className="en">About</span>
              </Link>
              <Link
                to="/about#partners"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Partneři</span>
                <span className="en">Partners</span>
              </Link>
              <Link
                to="/summit"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                Summit 2026
              </Link>
              <Link
                to="/workshops"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Workshopy</span>
                <span className="en">Workshops</span>
              </Link>
              <Link
                to="/news"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Aktuality</span>
                <span className="en">News</span>
              </Link>
            </div>
            <div>
              <h4 className="cs mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Kontakt
              </h4>
              <h4 className="en mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Contact
              </h4>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                to="/join"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Spolupráce</span>
                <span className="en">Collaborate With Us</span>
              </Link>
              <Link
                to="/apply"
                className="mb-2 block text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <span className="cs">Přidejte se k nám</span>
                <span className="en">Join Us</span>
              </Link>
            </div>
            <div>
              <h4 className="cs mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Sociální sítě
              </h4>
              <h4 className="en mb-3.5 font-mono text-[10px] font-bold tracking-[2px] text-[rgba(245,245,243,0.88)] uppercase">
                Social
              </h4>
              <a
                href={instagramUrl}
                className="mb-2 flex items-center gap-2 text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <IconInstagram />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@ctrleurope"
                className="mb-2 flex items-center gap-2 text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <IconTikTok />
                TikTok
              </a>
              {/*  
              <a
                href="#"
                className="mb-2 flex items-center gap-2 text-[13px] font-light text-[rgba(245,245,243,0.4)] no-underline transition-colors duration-200 hover:text-bg"
              >
                <IconLinkedIn />
                LinkedIn
              </a>
              */}
            </div>
          </div>
        </div>
        <div className="mb-6 font-mono text-[10px] font-light leading-relaxed text-[rgba(245,245,243,0.25)] max-[640px]:mb-4">
          <div>{ORGANIZATION.name}</div>
          <div>{ORGANIZATION.address}</div>
          <div>
            <span className="cs">IČO: {ORGANIZATION.ico}</span>
            <span className="en">Company ID (IČO): {ORGANIZATION.ico}</span>
          </div>
          <div className="cs mt-1 max-w-[720px]">
            {ORGANIZATION.registrationCs}
          </div>
          <div className="en mt-1 max-w-[720px]">
            {ORGANIZATION.registrationEn}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
          <div className="font-mono text-[11px] font-light text-[rgba(245,245,243,0.3)]">
            © 2026 {ORGANIZATION.name} | Website by{" "}
            <a
              href="https://hiro.dankoweby.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(245,245,243,0.55)] hover:text-bg transition-colors duration-200 no-underline"
            >
              Sebastián Danko
            </a>
            {" & "}
            <a
              href="https://nikola.weply.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(245,245,243,0.55)] hover:text-bg transition-colors duration-200 no-underline"
            >
              Nikola Crhák
            </a>
            {" (CTRL Team)"}
          </div>
          <div className="font-mono text-[10px] tracking-[2px] text-[rgba(245,245,243,0.45)] uppercase shrink-0">
            CEE Youth Platform
          </div>
        </div>
      </div>
    </footer>
  );
}
