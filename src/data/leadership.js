export const FOUNDER = {
  id: "jan",
  name: "Jan Krejčí",
  firstName: "Jan",
  initials: "JK",
  photo: "/IMG_4222.webp",
  photoAlt: "Jan Krejčí",
  roleCs: "Prezident & Zakladatel",
  roleEn: "President & Founder",
  age: "17",
  base: "Brno, CZ",
};

export const ADVISOR = {
  id: "michaela",
  name: "Ing. Michaela Oslejšková",
  firstName: "Michaela",
  initials: "MO",
  photo: null,
  photoAlt: "Ing. Michaela Oslejšková",
  roleCs: "Odborná garantka",
  roleEn: "Academic Advisor",
  base: "Česko",
  bioCs: ["Ing. Michaela Oslejšková je ...", "..."],
  bioEn: ["Ing. Michaela Oslejšková is ...", "..."],
};

export const BOARD_REST = [
  {
    id: "laura",
    name: "Laura Trunečková",
    firstName: "Laura",
    initials: "LT",
    photo: null,
    roleCs: "Vedoucí kanceláře",
    roleEn: "Chief of Staff",
    enter: "rotate-left",
  },
  {
    id: "dominik",
    name: "Dominik Ševela",
    firstName: "Dominik",
    initials: "DŠ",
    photo: null,
    roleCs: "Předseda hlavní rady",
    roleEn: "Chairman of Main Council",
    enter: "pop",
  },
  {
    id: "jakub",
    name: "Jakub Rašovský",
    firstName: "Jakub",
    initials: "JR",
    photo: null,
    roleCs: "Místopředseda",
    roleEn: "Deputy Chair",
    enter: "rotate-up",
  },
  {
    id: "alzbeta",
    name: "Alžběta Fritzová",
    firstName: "Alžběta",
    initials: "AF",
    photo: null,
    roleCs: "Tajemnice",
    roleEn: "Secretary",
    enter: "rotate-left",
  },
];

/** Jan + Michaela first — the two lead figures, always kept together. */
export const BOARD_LEADERS = [
  { ...FOUNDER, enter: "photo" },
  { ...ADVISOR, enter: "pop" },
];

export const BOARD_MEMBERS = [...BOARD_LEADERS, ...BOARD_REST];

export const NATIONAL_COORDINATORS = [];
