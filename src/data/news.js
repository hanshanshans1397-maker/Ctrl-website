export const NEWS_INVITE = {
  width: 2245,
  height: 1587,
};

const PODANE_RUCE = "https://podaneruce.cz/";
const STRAVA_ROUTE_ID = "3531339168018099800";
const STRAVA_ROUTE = `https://www.strava.com/routes/${STRAVA_ROUTE_ID}`;
const MAPY_ROUTE = "https://mapy.com/s/casonadacu";
const MAPY_EMBED = "https://mapy.com/s/celuluralo";

export const NEWS = [
  {
    slug: "charitativni-beh",
    date: "2026-10-03",
    invite: "/photos/charitativni-beh.png",
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    category: { cs: "Akce", en: "Event" },
    title: {
      cs: 'Charitativní běh pro Podané ruce',
      en: 'Charity run for Podané ruce',
    },
    excerpt: {
      cs: "Telefon odlož. Tenisky obuj. Vyraž s námi. CTRL Europe plánuje na sobotu 3. října 2026 charitativní běh u areálu Komec. Výtěžek poputuje Společnosti Podané ruce.",
      en: "Put the phone down. Lace up. Come with us. CTRL Europe is planning a charity run on Saturday 3 October 2026 at Komec. Proceeds go to Společnost Podané ruce.",
    },
    meta: {
      cs: {
        title: 'Charitativní běh pro Podané ruce | CTRL Europe',
        description:
          "CTRL Europe plánuje charitativní běh 3. října 2026 u areálu Komec. 5,7 km, začátek 15:00, běh od 16:00, párty od 18:30 do cca 22:00. Výtěžek pro Podané ruce Brno.",
        image: "/photos/charitativni-beh.png",
      },
      en: {
        title: 'Charity run for Podané ruce | CTRL Europe',
        description:
          "CTRL Europe is planning a charity run on 3 October 2026 at Komec. 5.7 km, start 15:00, run from 16:00, party from 18:30 until around 22:00. Proceeds go to Podané ruce Brno.",
        image: "/photos/charitativni-beh.png",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["Telefon odlož.", "Tenisky obuj.", "Vyraž s námi."],
          en: ["Put the phone down.", "Lace up.", "Come with us."],
        },
      },
      {
        type: "p",
        cs: "CTRL Europe plánuje na sobotu 3. října 2026 charitativní běh u sportovního areálu Komec v Brně-Komárově. Bojujeme proti závislostem na digitálních technologiích — a proto jsme se rozhodli udělat něco jednoduchého a přímého: vylákat lidi od obrazovek ven, mezi lidi, do pohybu.",
        en: "CTRL Europe is planning a charity run on Saturday 3 October 2026 at the Komec sports complex in Brno-Komárov. We fight addiction to digital technology — so we decided to do something simple and direct: get people away from screens, out among people, and moving.",
      },
      {
        type: "p",
        cs: [
          "Veškerý výtěžek poputuje ",
          { text: "Společnosti Podané ruce", href: PODANE_RUCE },
          ", která pomáhá mladým lidem bojujícím se závislostmi.",
        ],
        en: [
          "All proceeds will go to ",
          { text: "Společnost Podané ruce", href: PODANE_RUCE },
          ", which helps young people struggling with addiction.",
        ],
      },
      {
        type: "p",
        cs: "Přijď běžet. Podpoř dobrý projekt. A nech telefon doma.",
        en: "Come run. Support a good cause. And leave your phone at home.",
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
            cs: ["Délka trasy", "5,7 km (okruh v okolí areálu)"],
            en: ["Distance", "5.7 km (circuit around the grounds)"],
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
        cs: "Trasa",
        en: "The route",
      },
      {
        type: "p",
        cs: "Okruh měří 5,7 km a vede okolím sportovního areálu Komec. Trasou se můžete projít předem na Mapy.cz nebo na Stravě.",
        en: "The loop is 5.7 km and runs around the Komec sports complex. You can preview the course on Mapy.cz or Strava beforehand.",
      },
      {
        type: "route",
        platforms: [
          {
            id: "mapy",
            label: { cs: "Mapy.cz", en: "Mapy.cz" },
            open: { cs: "Otevřít na Mapy.cz", en: "Open in Mapy.cz" },
            title: {
              cs: "Trasa na Mapy.cz",
              en: "Route on Mapy.cz",
            },
            embed: MAPY_EMBED,
            href: MAPY_ROUTE,
          },
          {
            id: "strava",
            label: { cs: "Strava", en: "Strava" },
            open: { cs: "Otevřít na Stravě", en: "Open in Strava" },
            title: {
              cs: "Charitativní běh — CTRL Europe Run",
              en: "Charity run — CTRL Europe Run",
            },
            embed: `https://strava-embeds.com/route/${STRAVA_ROUTE_ID}`,
            href: STRAVA_ROUTE,
          },
        ],
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
            cs: ["Základní vstupné", "250 Kč"],
            en: ["Standard entry", "250 CZK"],
          },
          {
            cs: ["Studentské vstupné", "200 Kč (sleva 20 %)"],
            en: ["Student entry", "200 CZK (20% off)"],
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
        cs: "Večerní program: Odlož ten telefon — a seznam se",
        en: "Evening programme: Put the phone down — and meet someone",
      },
      {
        type: "p",
        cs: "Večer po běhu plánujeme seznamovací akci v rámci naší iniciativy Odlož ten telefon — a seznam se.",
        en: "After the run we are planning a mixer as part of our Put the phone down — and meet someone initiative.",
      },
      {
        type: "p",
        cs: "Bez scrollování, bez profilových fotek, bez matchování přes obrazovku. Přijdeš, vybereš si náramek, odložíš telefon a můžeš se opravdu potkat s novými lidmi — ať už hledáš nové přátele nebo něco víc.",
        en: "No scrolling, no profile photos, no matching through a screen. You show up, pick a wristband, put the phone down and actually meet new people — whether you’re looking for new friends or something more.",
      },
      {
        type: "p",
        cs: "Každý účastník dostane při registraci své číslo. Pokud tě někdo zaujme, zapíšeš jeho číslo na lístek u organizátora. Po akci zkontrolujeme oboustranný zájem a pošleme kontakt oběma stranám e-mailem — nikdo nedostane tvůj kontakt bez tvého vědomí.",
        en: "Each participant gets a number at registration. If someone catches your eye, you write their number on a slip with the organiser. After the event we check for mutual interest and email the contact to both sides — nobody gets your details without you knowing.",
      },
      {
        type: "p",
        cs: "V rámci večera proběhne mini party a další program. Vše osobně, tváří v tvář. Telefon nech v kapse.",
        en: "The evening includes a mini party and more programme. All of it in person, face to face. Keep your phone in your pocket.",
      },
      {
        type: "p",
        cs: "Součástí večera je dobrovolná seznamovací hra pomocí náramků:",
        en: "The evening also includes an optional mixer game with wristbands:",
      },
      {
        type: "table",
        head: {
          cs: ["Náramek", "Význam"],
          en: ["Wristband", "Meaning"],
        },
        rows: [
          {
            cs: ["Modrý", "single — one night / friend"],
            en: ["Blue", "single — one night / friend"],
          },
          {
            cs: ["Zelený", "single — něco vážného"],
            en: ["Green", "single — something serious"],
          },
          {
            cs: ["Červený", "taken / pouze doprovod"],
            en: ["Red", "taken / accompaniment only"],
          },
          {
            cs: [
              "Barevný (doplňkový)",
              "stejné pohlaví — přidáš k náramku výše",
            ],
            en: [
              "Extra coloured band",
              "same sex — add it to one of the bands above",
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
