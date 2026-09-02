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
  roleCs: "Role",
  roleEn: "Role",
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
    roleCs: "Předseda Main Council",
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
];

/** Homepage + directory: founder first, then the rest of the board. */
export const BOARD_MEMBERS = [{ ...FOUNDER, enter: "photo" }, ...BOARD_REST];

export const NATIONAL_COORDINATORS = [];
