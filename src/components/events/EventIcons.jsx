function Glyph({ children }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="what-icon relative z-[2] mb-7 h-11 w-11 text-accent max-sm:mb-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function IconRun() {
  return (
    <Glyph>
      <circle cx="33" cy="10" r="2.75" />
      <path d="M29.2 15.8 21 23.2l6.8 2.2" />
      <path d="M21 23.2 13.5 21" />
      <path d="M26.4 25 33.5 36.5" />
      <path d="M25.2 27.2 16.5 37" />
      <path d="M8 41.5h32" opacity="0.35" />
    </Glyph>
  );
}

function IconChallenge() {
  return (
    <Glyph>
      <rect x="7" y="8" width="22" height="28" rx="2" />
      <path d="M13 16h10M13 22h10M13 28h6" opacity="0.45" />
      <circle cx="33" cy="30" r="6" />
      <path d="M37.2 34.4 42 39.5" />
    </Glyph>
  );
}

function IconDay() {
  return (
    <Glyph>
      <rect x="8" y="10" width="32" height="28" rx="2.5" />
      <path d="M8 18h32" opacity="0.45" />
      <path d="M16 7v6M32 7v6" />
      <path d="M16 26h6M16 31h10" opacity="0.45" />
      <circle cx="33" cy="30" r="2.2" fill="currentColor" stroke="none" />
    </Glyph>
  );
}

function IconExchange() {
  return (
    <Glyph>
      <circle cx="24" cy="24" r="14" />
      <path d="M10 24h28" opacity="0.45" />
      <path d="M24 10c3.6 3.4 5.5 8.2 5.5 14S27.6 34.6 24 38c-3.6-3.4-5.5-8.2-5.5-14S20.4 13.4 24 10z" />
    </Glyph>
  );
}

function IconWorkshopDay() {
  return (
    <Glyph>
      <circle cx="24" cy="13" r="3" />
      <circle cx="12.5" cy="16.5" r="2.4" />
      <circle cx="35.5" cy="16.5" r="2.4" />
      <path d="M16.5 36c.5-5.4 3.4-8.2 7.5-8.2s7 2.8 7.5 8.2" />
      <path d="M6.5 37.5c.7-4.2 2.8-6.4 6.2-6.4 1.3 0 2.4.3 3.4.9" />
      <path d="M41.5 37.5c-.7-4.2-2.8-6.4-6.2-6.4-1.3 0-2.4.3-3.4.9" />
    </Glyph>
  );
}

function IconDebate() {
  return (
    <Glyph>
      <path d="M6 10h18v12H14l-5 4v-4H6V10z" />
      <path d="M24 20h18v12H34l-5 4v-4h-5" />
      <path d="M11 15h8M29 25h8" opacity="0.45" />
    </Glyph>
  );
}

function IconAcademy() {
  return (
    <Glyph>
      <path d="M6 16c5.2-2.6 9.2-2.6 18 0v20c-8.8-2.6-12.8-2.6-18 0V16z" />
      <path d="M42 16c-5.2-2.6-9.2-2.6-18 0v20c8.8-2.6 12.8-2.6 18 0V16z" />
      <path d="M24 16v20" />
    </Glyph>
  );
}

function IconFactCheck() {
  return (
    <Glyph>
      <path d="M26 11.5A11 11 0 1 0 33 26 9 9 0 1 1 26 11.5z" />
      <path d="M24 30.5 28.2 35 38 24" />
    </Glyph>
  );
}

function IconAwards() {
  return (
    <Glyph>
      <path d="M16 8h16v8.5a8 8 0 0 1-16 0V8z" />
      <path d="M16 13H10.5A6.5 6.5 0 0 0 16 21" />
      <path d="M32 13h5.5A6.5 6.5 0 0 1 32 21" />
      <path d="M24 24.5V31" />
      <path d="M18.5 31h11v3.5h-11z" />
      <path d="M16 39.5h16" />
    </Glyph>
  );
}

export const EVENT_ICONS = {
  run: IconRun,
  challenge: IconChallenge,
  day: IconDay,
  exchange: IconExchange,
  "workshop-day": IconWorkshopDay,
  debate: IconDebate,
  academy: IconAcademy,
  "fact-check": IconFactCheck,
  awards: IconAwards,
};
