import { Fragment } from "react";
import { PARTNER_ORGS } from "../data/partners";

const ITEM =
  "ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12";

const LOGO_ITEM =
  "ticker-item px-12 max-sm:px-5 shrink-0 flex items-center gap-12";

const LOGO_IMG = "grayscale opacity-70";

// Fak(e)ticky artwork is a short wordmark inside a tall canvas. Scale it
// inside a clipped slot so it reads at the same height as the other marks.
const LOGO_SCALE = {
  faketicky: "h-[6.75rem] w-auto max-w-none",
};

// The partner mark is only the symbol. The ticker keeps the wordmark that
// spells out the school name, so Čichnova does not appear twice.
const TICKER_LOGO = {
  "cichnova-brno": "/cichnovabrnofull.png",
};

const TICKER_LABEL = {
  "den-hejtmanem": "Den hejtmanem",
};

const PHRASES = [
  ["CTRL Europe"],
  [
    ["cs", "Digitální odolnost"],
    ["en", "Digital Resilience"],
  ],
  ["jihomoravský kraj"],
  ["CTRL Summit 2026"],
  [
    ["cs", "Mediální gramotnost"],
    ["en", "Media Literacy"],
  ],
  [
    ["cs", "AI povědomí"],
    ["en", "AI Awareness"],
  ],
];

function Phrase({ parts }) {
  if (typeof parts[0] === "string") {
    return <div className={ITEM}>{parts[0]}</div>;
  }

  return parts.map(([lang, text]) => (
    <div key={lang} className={`${lang} ${ITEM}`}>
      {text}
    </div>
  ));
}

function OrgLogo({ org }) {
  const scaled = LOGO_SCALE[org.id];
  const label = TICKER_LABEL[org.id];

  return (
    <div className={LOGO_ITEM}>
      <span className="flex items-center gap-3">
        <span className={`flex h-8 items-center ${scaled ? "overflow-hidden" : ""}`}>
          <img
            src={TICKER_LOGO[org.id] || org.logo}
            alt={label ? "" : org.name}
            className={`${LOGO_IMG} ${scaled || "h-8 w-auto max-w-[11rem] object-contain"}`}
            loading="lazy"
            decoding="async"
          />
        </span>
        {label ? (
          <span className="font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid">
            {label}
          </span>
        ) : null}
      </span>
    </div>
  );
}

export function TickerBar({ wrapId = "ticker" }) {
  return (
    <div className="ticker border-t border-b border-separator overflow-hidden py-3.5 bg-bg">
      <div className="ticker-wrap flex" id={wrapId}>
        {PHRASES.map((parts, index) => (
          <Fragment key={PARTNER_ORGS[index]?.id ?? index}>
            <Phrase parts={parts} />
            {PARTNER_ORGS[index] ? <OrgLogo org={PARTNER_ORGS[index]} /> : null}
          </Fragment>
        ))}
        {PARTNER_ORGS.slice(PHRASES.length).map((org) => (
          <OrgLogo key={org.id} org={org} />
        ))}
      </div>
    </div>
  );
}
