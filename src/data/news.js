export const NEWS_INVITE = {
  width: 1024,
  height: 723,
};

const PODANE_RUCE = "https://podaneruce.cz/";

export const NEWS = [
  {
    slug: "charitativni-beh",
    date: "2026-10-03",
    invite: "/photos/charitativni-beh.webp",
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    category: { cs: "Akce", en: "Event" },
    title: {
      cs: 'Charitativní běh pro Podané ruce',
      en: 'Charity run for Podané ruce',
    },
    excerpt: {
      cs: "V sobotu 3. října 2026 u sportovního areálu Komec. Veškerý výtěžek věnujeme Společnosti Podané ruce, která pomáhá dětem a mladým lidem bojujícím se závislostmi.",
      en: "On Saturday 3 October 2026 at the Komec sports complex. All proceeds go to Společnost Podané ruce, which helps children and young people struggling with addiction.",
    },
    meta: {
      cs: {
        title: 'Charitativní běh pro Podané ruce | CTRL Europe',
        description:
          "Charitativní běh CTRL Europe 3. října 2026 u areálu Komec. 5,5 km, začátek 15:00, běh od 16:00, párty od 18:30 do cca 22:00. Výtěžek pro Podané ruce Brno.",
        image: "/photos/charitativni-beh.webp",
      },
      en: {
        title: 'Charity run for Podané ruce | CTRL Europe',
        description:
          "CTRL Europe charity run on 3 October 2026 at Komec. 5.5 km, start 15:00, run from 16:00, party from 18:30 until around 22:00. Proceeds go to Podané ruce Brno.",
        image: "/photos/charitativni-beh.webp",
      },
    },
    sections: [
      {
        type: "p",
        cs: [
          "V sobotu 3. října 2026 pořádá organizace CTRL Europe charitativní běh u sportovního areálu Komec v Brně-Komárově. Veškerý výtěžek z akce věnujeme organizaci ",
          { text: "Společnost Podané ruce", href: PODANE_RUCE },
          ", která poskytuje odbornou pomoc a zázemí dětem a mladým lidem bojujícím se závislostmi.",
        ],
        en: [
          "On Saturday 3 October 2026, CTRL Europe is hosting a charity run at the Komec sports complex in Brno-Komárov. All proceeds from the event will go to ",
          { text: "Společnost Podané ruce", href: PODANE_RUCE },
          ", which provides professional support and a safe setting for children and young people struggling with addiction.",
        ],
      },
      {
        type: "p",
        cs: "Cílem akce je propojit naši komunitu s veřejností a vybrat finanční prostředky pro projekt, který má reálný dopad.",
        en: "The aim is to connect our community with the public and raise funds for a project with a real impact.",
      },
      {
        type: "h2",
        cs: "Harmonogram a organizace",
        en: "Schedule and organisation",
      },
      {
        type: "table",
        rows: [
          {
            cs: ["Místo konání", "Sportovní areál Komec, Brno-Komárov"],
            en: ["Venue", "Komec sports complex, Brno-Komárov"],
          },
          {
            cs: ["Délka trasy", "5,5 km (okruh v okolí areálu)"],
            en: ["Distance", "5.5 km (circuit around the grounds)"],
          },
          {
            cs: [
              "Zahájení programu",
              "15:00 — registrace na místě, informace o podpořeném projektu, rozcvička",
            ],
            en: [
              "Programme start",
              "15:00 — on-site registration, information about the supported project, warm-up",
            ],
          },
          {
            cs: ["Start běhu", "16:00 až 16:20 (čas podle situace)"],
            en: [
              "Run start",
              "16:00 to 16:20 (timing depends on the situation)",
            ],
          },
          {
            cs: ["Konec běhu", "17:00 až 17:20"],
            en: ["Run finish", "17:00 to 17:20"],
          },
          {
            cs: ["Večerní program a párty", "od 18:30"],
            en: ["Evening programme and party", "from 18:30"],
          },
          {
            cs: ["Odhadovaný konec párty", "22:00"],
            en: ["Estimated end of the party", "22:00"],
          },
        ],
      },
      {
        type: "p",
        cs: "Běh nemá soutěžní charakter — neměří se čas a tempo si určuje každý účastník sám.",
        en: "The run is not a race — times are not recorded and each participant sets their own pace.",
      },
      {
        type: "h2",
        cs: "Registrace a vstupné",
        en: "Registration and entry",
      },
      {
        type: "table",
        head: {
          cs: ["Typ vstupného", "Cena"],
          en: ["Ticket", "Price"],
        },
        rows: [
          {
            cs: ["Základní vstupné", "200 Kč"],
            en: ["Standard entry", "200 CZK"],
          },
          {
            cs: ["Studentské vstupné", "170 Kč (sleva 15 %)"],
            en: ["Student entry", "170 CZK (15% off)"],
          },
        ],
      },
      {
        type: "p",
        cs: "Spuštění online rezervací: 19. září 2026. Kapacita akce je omezená. Odkaz na online rezervační formulář zveřejníme 19. září na tomto webu a na našich sociálních sítích.",
        en: "Online reservations open on 19 September 2026. Capacity is limited. The link to the online reservation form will be published on 19 September on this website and on our social media.",
      },
      {
        type: "h2",
        cs: "Večerní program: Seznamovací party „ODLOŽ TEN TELEFON“",
        en: "Evening programme: “Put the phone down” mixer",
      },
      {
        type: "p",
        cs: "Od 18:30 navazuje v areálu večerní program a seznamovací párty zaměřená na osobní setkávání bez mobilních telefonů. Odhadovaný konec je ve 22:00. Součástí jsou společenské hry a soutěže.",
        en: "From 18:30 an evening programme and mixer follows on site, focused on meeting in person without mobile phones. The estimated end is 22:00. It includes social games and contests.",
      },
      {
        type: "p",
        cs: "Součástí večera je i dobrovolná seznamovací hra pomocí barevných náramků:",
        en: "The evening also includes an optional mixer game with coloured wristbands:",
      },
      {
        type: "table",
        head: {
          cs: ["Náramek", "Význam"],
          en: ["Wristband", "Meaning"],
        },
        rows: [
          {
            cs: ["Single / Taken / One night", "rozlišení stavu účastníka"],
            en: [
              "Single / Taken / One night",
              "indicates the participant’s status",
            ],
          },
          {
            cs: [
              "Doplňkový barevný náramek",
              "označení pro zájemce o seznamování s osobou stejného pohlaví",
            ],
            en: [
              "Extra coloured wristband",
              "for those interested in meeting someone of the same sex",
            ],
          },
        ],
      },
      {
        type: "p",
        cs: [
          "Zúčastnit se můžete běžecké části, večerního programu nebo obou aktivit. Veškeré vybrané prostředky ze vstupného budou předány organizaci ",
          { text: "Podané ruce Brno", href: PODANE_RUCE },
          ".",
        ],
        en: [
          "You can take part in the run, the evening programme, or both. All entry fees collected will be given to ",
          { text: "Podané ruce Brno", href: PODANE_RUCE },
          ".",
        ],
      },
    ],
  },
];

export function getNewsBySlug(slug) {
  return NEWS.find((item) => item.slug === slug) ?? null;
}

export function formatNewsDate(iso, isEn) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(isEn ? "en-GB" : "cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
