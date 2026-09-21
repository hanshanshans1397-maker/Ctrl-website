export const NEWS_INVITE = {
  width: 1024,
  height: 723,
};

const STRAVA_ROUTE_ID = "3531339168018099800";
const STRAVA_ROUTE = `https://www.strava.com/routes/${STRAVA_ROUTE_ID}`;
const MAPY_ROUTE = "https://mapy.com/s/casonadacu";
const MAPY_EMBED = "https://mapy.com/s/celuluralo";

export const NEWS = [
  {
    slug: "charitativni-beh",
    date: "2026-10-03",
    invite: "/photos/charitativni-beh.jpg",
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    category: { cs: "Akce", en: "Event" },
    title: {
      cs: "Charitativní běh na podporu prevence digitálních závislostí dětí a mládeže",
      en: "Charity run in support of preventing digital addictions in children and young people",
    },
    excerpt: {
      cs: "Telefon odlož. Tenisky obuj. Vyraž s námi. CTRL Europe plánuje na sobotu 3. října 2026 charitativní běh u areálu Komec. Veškerý výtěžek z CTRL Run věnujeme na podporu prevence digitálních závislostí u dětí a mládeže — v souladu s posláním CTRL Europe.",
      en: "Put the phone down. Lace up. Come with us. CTRL Europe is planning a charity run on Saturday 3 October 2026 at Komec. All proceeds from CTRL Run go towards preventing digital addictions in children and young people — in line with the mission of CTRL Europe.",
    },
    meta: {
      cs: {
        title:
          "Charitativní běh na podporu prevence digitálních závislostí | CTRL Europe",
        description:
          "CTRL Europe plánuje charitativní běh CTRL Run 3. října 2026 u areálu Komec. 5,7 km, začátek 15:00, běh od 16:00, párty od 18:30 do cca 22:00. Výtěžek na prevenci digitálních závislostí u dětí a mládeže.",
        image: "/photos/charitativni-beh.jpg",
      },
      en: {
        title:
          "Charity run for the prevention of digital addictions | CTRL Europe",
        description:
          "CTRL Europe is planning the CTRL Run charity run on 3 October 2026 at Komec. 5.7 km, start 15:00, run from 16:00, party from 18:30 until around 22:00. Proceeds support the prevention of digital addictions in children and young people.",
        image: "/photos/charitativni-beh.jpg",
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
        cs: "CTRL Europe plánuje na sobotu 3. října 2026 charitativní běh CTRL Run u sportovního areálu Komec v Brně-Komárově. Bojujeme proti závislostem na digitálních technologiích — a proto jsme se rozhodli udělat něco jednoduchého a přímého: vylákat lidi od obrazovek ven, mezi lidi, do pohybu.",
        en: "CTRL Europe is planning the CTRL Run charity run on Saturday 3 October 2026 at the Komec sports complex in Brno-Komárov. We fight addiction to digital technology — so we decided to do something simple and direct: get people away from screens, out among people, and moving.",
      },
      {
        type: "p",
        cs: "Veškerý výtěžek z CTRL Run věnujeme na podporu prevence digitálních závislostí u dětí a mládeže. Přijď běžet. Podpoř dobrý projekt. A nech telefon doma.",
        en: "All proceeds from CTRL Run go towards preventing digital addictions in children and young people. Come run. Support a good cause. And leave your phone at home.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Datum", en: "Date" },
            value: { cs: "3. 10. 2026", en: "3 Oct 2026" },
          },
          {
            label: { cs: "Místo", en: "Venue" },
            value: { cs: "Komec, Brno-Komárov", en: "Komec, Brno-Komárov" },
          },
          {
            label: { cs: "Trasa", en: "Distance" },
            value: { cs: "5,7 km", en: "5.7 km" },
          },
          {
            label: { cs: "Start", en: "Start" },
            value: { cs: "16:00", en: "16:00" },
          },
        ],
      },
      {
        type: "register",
      },
      {
        type: "h2",
        cs: "Vstupné",
        en: "Entry fees",
      },
      {
        type: "p",
        cs: "Kapacita je omezená. Běh nemá soutěžní charakter — čas se neměří a tempo si určuje každý sám. Výtěžek ze vstupného na běh jde na charitu; vstupné jen na seznamovačku ne.",
        en: "Capacity is limited. The run is not a race — times are not recorded and each participant sets their own pace. Proceeds from run entry go to charity; mixer-only tickets do not.",
      },
      {
        type: "table",
        head: {
          cs: ["Typ", "Cena"],
          en: ["Ticket", "Price"],
        },
        rows: [
          {
            cs: ["Základní (běh)", "240 Kč"],
            en: ["Standard (run)", "240 CZK"],
          },
          {
            cs: ["Studentské (běh)", "190 Kč (−20 %)"],
            en: ["Student (run)", "190 CZK (−20%)"],
          },
          {
            cs: ["Rodinné (běh)", "600 Kč · max. 2 dospělí a 3 děti"],
            en: ["Family (run)", "600 CZK · max. 2 adults and 3 children"],
          },
          {
            cs: ["Studentské — jen seznamovačka", "90 Kč"],
            en: ["Student — mixer only", "90 CZK"],
          },
        ],
      },
      {
        type: "h2",
        id: "harmonogram",
        cs: "Harmonogram",
        en: "Schedule",
      },
      {
        type: "timeline",
        items: [
          {
            time: "15:00",
            cs: "Registrace na místě, informace o projektu, rozcvička",
            en: "On-site registration, project briefing, warm-up",
          },
          {
            time: { cs: "od 15:00", en: "from 15:00" },
            cs: "Aktivity a stánky sponzorů a zúčastněných organizací",
            en: "Activities and stands from sponsors and participating organisations",
          },
          {
            time: "16:00",
            cs: "Start běhu (až 16:20 podle situace)",
            en: "Run start (as late as 16:20 depending on the situation)",
          },
          {
            time: "17:00",
            cs: "Konec běhu (až 17:20)",
            en: "Run finish (as late as 17:20)",
          },
          {
            time: "18:30",
            cs: "Večerní program a seznamovací akce",
            en: "Evening programme and mixer",
          },
          {
            time: "≈22:00",
            cs: "Konec párty",
            en: "End of the party",
          },
        ],
      },
      {
        type: "p",
        cs: "Na místě budou aktivity a stánky sponzorů i zúčastněných organizací. Zastavit se u nich můžete před během i po něm.",
        en: "Sponsors and participating organisations will have activities and stands on site. You can stop by before the run and after it.",
      },
      {
        type: "h2",
        id: "trasa",
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
        id: "vecer",
        cs: "Večer: Odlož ten telefon — a seznam se",
        en: "Evening: Put the phone down — and meet someone",
      },
      {
        type: "p",
        cs: "Po běhu plánujeme seznamovací akci určenou především studentům. Bez scrollování, bez profilových fotek, bez matchování přes obrazovku. Přijdeš, odložíš telefon a můžeš se opravdu potkat s novými lidmi.",
        en: "After the run we are planning a mixer aimed primarily at students. No scrolling, no profile photos, no matching through a screen. You show up, put the phone down and actually meet new people.",
      },
      {
        type: "p",
        cs: "Aktivity a hry se odehrají na trávníku. Dostaneš číslo, napíšeš kontakt a jméno, seznamuješ se — a na konci odevzdáš seznam. Při oboustranném MATCH dostanete kontakt po akci. Nikdo nedostane tvůj kontakt bez tvého vědomí.",
        en: "Activities and games take place on the lawn. You receive a number, write your contact and name, socialize — and hand in the list at the end. On a mutual MATCH you both get the contact after the event. Nobody gets your details without you knowing.",
      },
      {
        type: "p",
        cs: "Dobrovolné náramky jen napovídají, s čím přicházíš. Každý účastník je automaticky v tombole — ceny jsou od partnerů.",
        en: "Optional wristbands simply signal what you’re open to. Every participant is automatically in the raffle — prizes come from partners.",
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
            cs: ["Barevný (doplňkový)", "stejné pohlaví — přidáš k náramku výše"],
            en: ["Extra coloured band", "same sex — add it to one of the bands above"],
          },
        ],
      },
      {
        type: "h2",
        cs: "Startovní balíček",
        en: "Starter pack",
      },
      {
        type: "p",
        cs: "Účastníci běhu dostanou startovní balíček: Birell (18+), diplom / medaile, dárky od sponzorů a další drobnosti. Zúčastnit se můžete běhu, večera nebo obou.",
        en: "Run participants receive a starter pack: Birell (18+), a diploma / medal, gifts from sponsors, and other small items. You can take part in the run, the evening, or both.",
      },
      {
        type: "h2",
        id: "partneri",
        cs: "Partneři akce",
        en: "Event partners",
      },
      {
        type: "orgs",
        groups: [
          {
            id: "sponsors",
            items: [
              {
                cs: "JUKO petfood",
                en: "JUKO petfood",
                href: "https://www.juko-krmiva.cz/cz/",
                logo: "/partners/juko-petfood.svg",
              },
              {
                cs: "BIRELL",
                en: "BIRELL",
                href: "https://www.birell.cz",
                logo: "/partners/birell.svg",
              },
              {
                cs: "Občerstvení u lampy",
                en: "Občerstvení u lampy",
                href: "https://www.facebook.com/ObcerstveniULampy/",
                logo: "/partners/obcerstveni-u-lampy.png",
              },
              { cs: "a další", en: "and others", placeholder: true },
            ],
          },
          {
            id: "participants",
            label: { cs: "Účastní se", en: "Taking part" },
            items: [
              {
                id: "armada",
                mark: "AČR",
                cs: "Armáda",
                en: "Czech Army",
                detail: {
                  cs: "Armáda České republiky",
                  en: "Army of the Czech Republic",
                },
              },
            ],
          },
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
