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
  name: "Ing. Michaela Ošlejšková",
  firstName: "Michaela",
  initials: "MO",
  photo: null,
  photoAlt: "Ing. Michaela Ošlejšková",
  roleCs: "Předseda",
  roleEn: "Chair",
  base: "Česko",
  bioCs: [
    "Jsem pedagog s praxí od roku 2015. Prošla jsem celým vzdělávacím systémem — od školní družiny přes základní školu až po výuku odborných předmětů na střední škole. Vím jak vzdělávání funguje zevnitř. A vím kde selhává.",
    "Vystudovala jsem ekonomickou fakultu v Praze, doplnila o pedagogické vzdělání a průběžně prohlubuju své znalosti v oblasti pedagogiky, komunikace a inovativních metod výuky. Jako koordinátor Podnikavosti a lektorka finanční gramotnosti se zaměřuju na jedno: aby studenti dokázali převést teorii do praxe.",
    "Věřím, že organizace jako CTRL Europe potřebuje pevný základ. Právní, organizační i hodnotový. To je moje role.",
  ],
  bioEn: [
    "I have been a teacher since 2015. I have worked through the entire education system — from after-school care through primary school to teaching vocational subjects at secondary school. I know how education works from the inside. And I know where it fails.",
    "I graduated from the Faculty of Economics in Prague, added pedagogical training, and I continually deepen my knowledge of pedagogy, communication and innovative teaching methods. As an Entrepreneurship Coordinator and financial literacy lecturer, I focus on one thing: that students can turn theory into practice.",
    "I believe an organization like CTRL Europe needs a solid foundation. Legal, organizational and values-based. That is my role.",
  ],
  credentials: [
    {
      cs: "Magisterský program, ekonomická fakulta, Praha",
      en: "Master's programme, Faculty of Economics, Prague",
    },
    {
      cs: "Pedagogické studium",
      en: "Pedagogical studies",
    },
    {
      cs: "Goethe Zertifikat B2 — němčina",
      en: "Goethe-Zertifikat B2 — German",
    },
    {
      cs: "Koordinátor Podnikavosti",
      en: "Entrepreneurship Coordinator",
    },
    {
      cs: "Školení: komunikace s rodiči, mezinárodní mobilita, NLP, kreativita, inkluzivní výuka, čtenářská gramotnost a další",
      en: "Training: parent communication, international mobility, NLP, creativity, inclusive teaching, reading literacy, and more",
    },
  ],
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
