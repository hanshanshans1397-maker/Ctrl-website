import { CONTACT_EMAIL } from "../utils/socialLinks";

export const NEWS_INVITE = {
  width: 1024,
  height: 723,
};

const STRAVA_ROUTE_ID = "3531339168018099800";
const STRAVA_ROUTE = `https://www.strava.com/routes/${STRAVA_ROUTE_ID}`;
const MAPY_ROUTE = "https://mapy.com/s/jojavusaro";
const MAPY_EMBED = "https://mapy.com/s/nedasuvaza";
const PODANE_RUCE = "https://podaneruce.cz";

const CTRL_RUN_PHOTOS = [
  {
    src: "/photos/news/ctrl-run/start.webp",
    width: 1024,
    height: 768,
    alt: {
      cs: "Dav pod nafukovacím obloukem Armády České republiky na CTRL Run 2026",
      en: "Crowd under the Czech Army inflatable arch at CTRL Run 2026",
    },
  },
  {
    src: "/photos/news/ctrl-run/rozhovor.webp",
    width: 1024,
    height: 768,
    alt: {
      cs: "Rozhovor u banneru partnera JUKO během CTRL Run",
      en: "An interview in front of the JUKO partner banner during CTRL Run",
    },
  },
  {
    src: "/photos/news/ctrl-run/vyhlidka.webp",
    width: 768,
    height: 1024,
    alt: {
      cs: "Pohled z pódia na areál CTRL Run a oblouk Do armády",
      en: "View from the stage over the CTRL Run site and the army arch",
    },
  },
  {
    src: "/photos/news/ctrl-run/beh.webp",
    width: 775,
    height: 1024,
    alt: {
      cs: "Běžkyně se startovním číslem CTRL Run při rozcvičce",
      en: "A runner with a CTRL Run bib warming up",
    },
  },
  {
    src: "/photos/news/ctrl-run/startovni-cislo.webp",
    width: 775,
    height: 1024,
    alt: {
      cs: "Běžkyně se startovním číslem CTRL Run",
      en: "A runner wearing a CTRL Run bib",
    },
  },
  {
    src: "/photos/news/ctrl-run/v-cili.webp",
    width: 775,
    height: 1024,
    alt: {
      cs: "Běžkyně po doběhu odpočívá opřená o kolena",
      en: "A runner catching her breath after the finish, hands on her knees",
    },
  },
  {
    src: "/photos/news/ctrl-run/detsky-ucastnik.webp",
    width: 775,
    height: 1024,
    alt: {
      cs: "Dětský účastník se startovním číslem CTRL Run",
      en: "A young participant with a CTRL Run bib",
    },
  },
  {
    src: "/photos/news/ctrl-run/predavani.webp",
    width: 751,
    height: 1001,
    alt: {
      cs: "Předávání ceny z tomboly na CTRL Run",
      en: "A raffle prize being handed over at CTRL Run",
    },
  },
  {
    src: "/photos/news/ctrl-run/obcerstveni.webp",
    width: 1024,
    height: 775,
    alt: {
      cs: "Dobrovolník předává občerstvení účastnicím běhu",
      en: "A volunteer handing out refreshments to runners",
    },
  },
  {
    src: "/photos/news/ctrl-run/balicky.webp",
    width: 1024,
    height: 775,
    alt: {
      cs: "Startovní balíčky a nápoje Birell pro účastníky",
      en: "Starter packs and Birell drinks for participants",
    },
  },
  {
    src: "/photos/news/ctrl-run/setkani.webp",
    width: 1024,
    height: 775,
    alt: {
      cs: "Účastníci CTRL Run s nápoji Birell",
      en: "CTRL Run participants with Birell drinks",
    },
  },
  {
    src: "/photos/news/ctrl-run/organizace.webp",
    width: 1024,
    height: 768,
    alt: {
      cs: "Organizátorka CTRL Europe u cedule Take control before someone else does",
      en: "A CTRL Europe organiser by the sign Take control before someone else does",
    },
  },
  {
    src: "/photos/news/ctrl-run/birell.webp",
    width: 775,
    height: 1024,
    alt: {
      cs: "Dobrovolník s plechovkami Birell",
      en: "A volunteer holding cans of Birell",
    },
  },
];

export const NEWS = [
  {
    slug: "ctrl-run-2026",
    date: "2026-10-03",
    published: "2026-10-24",
    cover: "/photos/news/ctrl-run/start.webp",
    coverWidth: 1024,
    coverHeight: 768,
    category: { cs: "Proběhlá akce", en: "Past event" },
    title: {
      cs: "CTRL Run 2026: Sto běžců, pět kilometrů a společný cíl pomáhat",
      en: "CTRL Run 2026: A hundred runners, five kilometres and a shared goal to help",
    },
    excerpt: {
      cs: "Přibližně sto běžců se zapojilo do charitativního běhu CTRL Run 2026. Po odečtení nákladů se podařilo získat 10 031 Kč pro organizaci Podané ruce.",
      en: "About a hundred runners joined the CTRL Run 2026 charity run. After costs, it raised 10,031 CZK for Podané ruce.",
    },
    meta: {
      cs: {
        title: "CTRL Run 2026: sto běžců a 10 031 Kč pro Podané ruce | CTRL Europe",
        description:
          "Charitativní běh CTRL Run 2026 v brněnském Komárově. Asi sto běžců, pět kilometrů a čistý výtěžek 10 031 Kč pro organizaci Podané ruce.",
        image: "/photos/news/ctrl-run/start.webp",
      },
      en: {
        title: "CTRL Run 2026: a hundred runners and 10,031 CZK for Podané ruce | CTRL Europe",
        description:
          "The CTRL Run 2026 charity run in Brno-Komárov. About a hundred runners, five kilometres, and net proceeds of 10,031 CZK for Podané ruce.",
        image: "/photos/news/ctrl-run/start.webp",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["Sto běžců.", "Pět kilometrů.", "10 031 Kč."],
          en: ["A hundred runners.", "Five kilometres.", "10,031 CZK."],
        },
      },
      {
        type: "p",
        cs: [
          "Brno, 3. října 2026 — Přibližně sto běžců se zapojilo do charitativního běhu CTRL Run 2026, který uspořádala studentská nezisková organizace CTRL Europe. Akce spojila sport, komunitu a podporu prevence digitálních závislostí. Po odečtení organizačních nákladů se podařilo získat 10 031 Kč, které budou předány organizaci ",
          { text: "Podané ruce", href: PODANE_RUCE },
          ".",
        ],
        en: [
          "Brno, 3 October 2026 — About a hundred runners took part in CTRL Run 2026, a charity run organised by the student non-profit CTRL Europe. The event brought together sport, community and support for the prevention of digital addictions. After organisational costs, it raised 10,031 CZK, which will be given to ",
          { text: "Podané ruce", href: PODANE_RUCE },
          ".",
        ],
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Běžci", en: "Runners" },
            value: { cs: "asi 100", en: "about 100" },
          },
          {
            label: { cs: "Trasa", en: "Distance" },
            value: { cs: "5 km", en: "5 km" },
          },
          {
            label: { cs: "Za akci darujeme", en: "We are donating" },
            value: { cs: "10 031 Kč", en: "10,031 CZK" },
          },
          {
            label: { cs: "Podpora", en: "For" },
            value: { cs: "Podané ruce", en: "Podané ruce" },
          },
        ],
      },
      {
        type: "h2",
        id: "kilometry",
        cs: "Pět kilometrů pro dobrou věc",
        en: "Five kilometres for a good cause",
      },
      {
        type: "p",
        cs: "Za slunečného počasí se v brněnském Komárově sešli běžci, dobrovolníci a podporovatelé, aby společně absolvovali pětikilometrovou trasu a přispěli na dobrou věc.",
        en: "On a sunny day in Brno's Komárov, runners, volunteers and supporters came together to cover a five-kilometre course and contribute to a good cause.",
      },
      {
        type: "p",
        cs: "CTRL Run nebyl pouze sportovní událostí. Jeho hlavní myšlenkou bylo upozornit na problematiku digitálních závislostí a připomenout význam osobních setkání, pohybu a aktivit mimo digitální prostředí.",
        en: "CTRL Run was not only a sporting event. Its main idea was to draw attention to digital addictions and to the value of meeting in person, moving, and spending time away from screens.",
      },
      {
        type: "p",
        cs: "Na průběhu akce se podílela řada dobrovolníků, kteří pomáhali s organizací i zajištěním trasy. Ta vedla mimo jiné přes pozemní komunikaci, kde členové organizačního týmu koordinovali pohyb běžců.",
        en: "A number of volunteers helped run the day and look after the course. The route crossed a public road, where members of the organising team coordinated the runners.",
      },
      {
        type: "h2",
        id: "fotky",
        cs: "Z průběhu akce",
        en: "From the day",
      },
      {
        type: "gallery",
        items: CTRL_RUN_PHOTOS,
      },
      {
        type: "videos",
        items: [
          {
            src: "/photos/news/ctrl-run/start-beh.mp4",
            poster: "/photos/news/ctrl-run/start-beh.webp",
            width: 720,
            height: 1280,
            caption: {
              cs: "Start pod obloukem",
              en: "The start under the arch",
            },
          },
          {
            src: "/photos/news/ctrl-run/prubeh.mp4",
            poster: "/photos/news/ctrl-run/prubeh.webp",
            width: 720,
            height: 1280,
            caption: {
              cs: "Stánek, občerstvení a večer",
              en: "The stand, refreshments and the evening",
            },
          },
        ],
      },
      {
        type: "h2",
        id: "program",
        cs: "Více než jen běh",
        en: "More than a run",
      },
      {
        type: "p",
        cs: "Program zdaleka nekončil v cíli pětikilometrové trasy. Účastníci se mohli zapojit do tomboly, setkat se se zástupci organizace Podané ruce a užít si doprovodný program, jehož součástí byla také účast Armády České republiky.",
        en: "The programme did not end at the finish of the five-kilometre course. Participants could join a raffle, meet people from Podané ruce and enjoy a side programme that included the Army of the Czech Republic.",
      },
      {
        type: "p",
        cs: "Akci doplnila společenská party, která nabídla prostor pro neformální setkávání a navazování nových kontaktů.",
        en: "A party alongside the run left room for informal conversations and new contacts.",
      },
      {
        type: "p",
        cs: "Celý den tak nebyl jen o sportovních výkonech, ale především o společném zážitku, spolupráci a ochotě pomáhat.",
        en: "The whole day was less about sporting results and more about a shared experience, cooperation and a willingness to help.",
      },
      {
        type: "h2",
        id: "vytezek",
        cs: "10 031 Kč na podporu prevence digitálních závislostí",
        en: "10,031 CZK for the prevention of digital addictions",
      },
      {
        type: "p",
        cs: "Díky běžcům, partnerům a všem, kteří akci podpořili, se podařilo získat čistý výtěžek 10 031 Kč po odečtení nákladů na organizaci.",
        en: "Thanks to the runners, partners and everyone who supported the event, the net proceeds came to 10,031 CZK after organisational costs.",
      },
      {
        type: "p",
        cs: [
          "Tato částka bude předána organizaci ",
          { text: "Podané ruce", href: PODANE_RUCE },
          ", která se dlouhodobě věnuje prevenci a pomoci lidem potýkajícím se se závislostmi.",
        ],
        en: [
          "The sum will be given to ",
          { text: "Podané ruce", href: PODANE_RUCE },
          ", which has long worked on prevention and on helping people living with addiction.",
        ],
      },
      {
        type: "p",
        cs: "Pro CTRL Europe představuje výsledek nejen finanční příspěvek na dobrou věc, ale také důkaz, že mladí lidé dokážou proměnit vlastní iniciativu v konkrétní pomoc druhým.",
        en: "For CTRL Europe, the result is a financial contribution to a good cause, and proof that young people can turn their own initiative into concrete help for others.",
      },
      {
        type: "h2",
        id: "tym",
        cs: "Za úspěchem stál společný tým",
        en: "A shared team behind the result",
      },
      {
        type: "p",
        cs: "Přípravu a realizaci CTRL Run 2026 zajišťoval event management tým CTRL Europe ve spolupráci s dalšími členy organizace a dobrovolníky.",
        en: "CTRL Run 2026 was prepared and run by the CTRL Europe event management team, together with other members of the organisation and volunteers.",
      },
      {
        type: "p",
        cs: "Organizace podobné události vyžaduje mnoho práce, která často zůstává v pozadí — od plánování a komunikace s partnery přes přípravu programu až po zajištění samotného průběhu běhu.",
        en: "An event like this takes a lot of work that often stays in the background — from planning and talking to partners, through building the programme, to keeping the run itself on track.",
      },
      {
        type: "p",
        cs: "Velké poděkování proto patří všem členům CTRL Europe a dobrovolníkům, kteří věnovali svůj čas, energii a úsilí tomu, aby se akce mohla uskutečnit.",
        en: "Thank you to every member of CTRL Europe and to the volunteers who gave their time, energy and effort so the event could happen.",
      },
      {
        type: "p",
        cs: "Stejně důležitou roli sehráli sponzoři a partneři, zejména Birell, JUKO Petfood a HUDY, jejichž podpora pomohla při realizaci akce a zajištění doprovodného programu. Poděkování patří také organizaci Podané ruce a Armádě České republiky za jejich účast a spolupráci.",
        en: "Sponsors and partners played an equally important part, especially Birell, JUKO Petfood and HUDY, whose support helped make the event and the side programme possible. Thanks also to Podané ruce and the Army of the Czech Republic for taking part.",
      },
      {
        type: "p",
        cs: "A především děkujeme všem přibližně sto běžcům, kteří se rozhodli věnovat svůj čas, energii a sportovní výkon dobré věci. Právě jejich účast dala celé události skutečný smysl.",
        en: "And above all, thank you to the hundred or so runners who chose to give their time, energy and a sporting effort to a good cause. Their taking part is what gave the day its meaning.",
      },
      {
        type: "h2",
        id: "krok",
        cs: "Jeden běh, společný krok vpřed",
        en: "One run, a shared step forward",
      },
      {
        type: "p",
        cs: "CTRL Run 2026 ukázal, že charitativní akce nemusí být jen o získávání finančních prostředků. Může být také příležitostí k setkávání, budování komunity a otevírání důležitých společenských témat.",
        en: "CTRL Run 2026 showed that a charity event can be more than a way to raise money. It can also be a chance to meet, to build a community and to open important social topics.",
      },
      {
        type: "p",
        cs: "Pět kilometrů, přibližně sto běžců a 10 031 Kč určených na pomoc druhým — to jsou konkrétní výsledky dne, za kterým stálo úsilí mladých organizátorů, dobrovolníků a podporovatelů.",
        en: "Five kilometres, about a hundred runners and 10,031 CZK for helping others — those are the concrete results of a day built by young organisers, volunteers and supporters.",
      },
      {
        type: "quote",
        cs: "Protože někdy stačí odložit telefon, nazout běžecké boty a udělat společně první krok.",
        en: "Because sometimes all it takes is putting the phone down, lacing up your running shoes and taking the first step together.",
      },
    ],
  },
  {
    slug: "erasmus-slovensko",
    date: "2026-10-23",
    published: "2026-09-27",
    invite: {
      cs: "/photos/news/slovensko-cs.webp",
      en: "/photos/news/slovensko-en.webp",
    },
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    banner: {
      variant: "split",
      date: { cs: "23.–29. října", en: "23–29 October" },
      points: {
        cs: ["Slovensko", "Fak(e)ticky", "3–4 studenti"],
        en: ["Slovakia", "Fak(e)ticky", "3–4 students"],
      },
    },
    category: { cs: "Spolupráce", en: "Cooperation" },
    title: {
      cs: "Naši lidé jedou na Slovensko",
      en: "Our people are going to Slovakia",
    },
    excerpt: {
      cs: "Ve spolupráci s Fak(e)ticky vysíláme koncem října 3–4 studenty na týdenní mezinárodní výměnu o digitální a mediální gramotnosti.",
      en: "With Fak(e)ticky, we are sending 3–4 students at the end of October on a week-long international exchange on digital and media literacy.",
    },
    meta: {
      cs: {
        title: "Naši lidé jedou na Slovensko | CTRL Europe",
        description:
          "23.–29. října 2026 vyráží 3–4 studenti CTRL Europe na Slovensko na výměnu s organizací Fak(e)ticky. Týden workshopů o mediální gramotnosti a fact-checkingu.",
      },
      en: {
        title: "Our people are going to Slovakia | CTRL Europe",
        description:
          "From 23 to 29 October 2026, 3–4 CTRL Europe students travel to Slovakia for an exchange with Fak(e)ticky. A week of workshops on media literacy and fact-checking.",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["23.–29. října.", "Slovensko.", "Fak(e)ticky."],
          en: ["23–29 October.", "Slovakia.", "Fak(e)ticky."],
        },
      },
      {
        type: "p",
        cs: "Ve spolupráci s Fak(e)ticky vysíláme koncem října 3–4 naše studenty na týdenní mezinárodní výměnu zaměřenou na digitální gramotnost a mediální vzdělávání.",
        en: "With Fak(e)ticky, we are sending 3–4 of our students at the end of October on a week-long international exchange focused on digital literacy and media education.",
      },
      {
        type: "h2",
        id: "vymena",
        cs: "Výměna zkušeností napříč hranicemi",
        en: "An exchange of experience across borders",
      },
      {
        type: "p",
        cs: "Od 23. do 29. října 2026 vyrážíme na Slovensko na mezinárodní výměnu pořádanou ve spolupráci s organizací Fak(e)ticky — naším dlouholetým partnerem v mediální gramotnosti a fact-checkingu.",
        en: "From 23 to 29 October 2026 we are heading to Slovakia for an international exchange organised with Fak(e)ticky — our long-standing partner in media literacy and fact-checking.",
      },
      {
        type: "p",
        cs: "Cílem je propojit mladé lidi ze středoevropského regionu, kteří se stejně jako my zajímají o digitální gramotnost, kritické myšlení a boj proti dezinformacím — a naučit se navzájem věci, které v naší práci skutečně používáme.",
        en: "The aim is to connect young people from Central Europe who, like us, care about digital literacy, critical thinking and pushing back against disinformation — and to teach each other things we actually use in our work.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Kdy", en: "When" },
            value: { cs: "23.–29. 10. 2026", en: "23–29 Oct 2026" },
          },
          {
            label: { cs: "Kde", en: "Where" },
            value: { cs: "Slovensko", en: "Slovakia" },
          },
          {
            label: { cs: "Účastníci", en: "Participants" },
            value: { cs: "3–4 studenti", en: "3–4 students" },
          },
          {
            label: { cs: "Délka", en: "Length" },
            value: { cs: "7 dní", en: "7 days" },
          },
        ],
      },
      {
        type: "h2",
        id: "partner",
        cs: "Kdo je Fak(e)ticky",
        en: "Who Fak(e)ticky is",
      },
      {
        type: "p",
        cs: "Fak(e)ticky je organizace zaměřená na mediální gramotnost, fact-checking a kritické myšlení — dělají přesně to co my, jen z jiného úhlu. Tam, kde my učíme rozpoznávat manipulaci a deepfakes, oni učí, jak ověřovat fakta a pracovat se zdroji.",
        en: "Fak(e)ticky works on media literacy, fact-checking and critical thinking — the same field as us, from another angle. Where we teach people to spot manipulation and deepfakes, they teach how to verify facts and work with sources.",
      },
      {
        type: "p",
        cs: "Je to partner CTRL Europe pro společné workshopy, výzkum a mezinárodní výměny.",
        en: "They are a CTRL Europe partner for joint workshops, research and international exchanges.",
      },
      {
        type: "h2",
        id: "tyden",
        cs: "Týden na Slovensku",
        en: "A week in Slovakia",
      },
      {
        type: "p",
        cs: "Přesný program má na starosti Fak(e)ticky. Čekat můžete mix workshopů, výměny zkušeností a poznávání, jak podobná práce vypadá v jiné zemi.",
        en: "Fak(e)ticky is in charge of the exact programme. Expect a mix of workshops, shared experience and a look at how similar work is done in another country.",
      },
      {
        type: "timeline",
        items: [
          {
            time: { cs: "Den 1", en: "Day 1" },
            cs: "Příjezd a seznámení s hostitelskou organizací a ostatními účastníky výměny.",
            en: "Arrival, and meeting the host organisation and the other people on the exchange.",
          },
          {
            time: { cs: "Dny 2–5", en: "Days 2–5" },
            cs: "Workshopy a sdílení metodik. Společná práce na mediální gramotnosti a digitální bezpečnosti.",
            en: "Workshops and shared methods. Working together on media literacy and digital safety.",
          },
          {
            time: { cs: "Dny 6–7", en: "Days 6–7" },
            cs: "Reflexe, plánování další spolupráce a cesta domů.",
            en: "Reflection, planning further cooperation, and the journey home.",
          },
        ],
      },
      {
        type: "h2",
        id: "proc",
        cs: "Sami se neučíme nejlíp",
        en: "We don't learn best on our own",
      },
      {
        type: "p",
        cs: "CTRL Europe roste rychle, ale růst neznamená dělat vše sami od nuly. V jiných zemích jsou organizace, které řeší podobné problémy jinými metodami. Tahle výměna je o tom vzít to, co jinde funguje, a přinést to zpátky do práce ve školách po celé střední Evropě.",
        en: "CTRL Europe is growing fast, but growth does not mean building everything from scratch. In other countries, organisations tackle similar problems with different methods. This exchange is about taking what works elsewhere and bringing it back into our work in schools across Central Europe.",
      },
      {
        type: "p",
        cs: "Je to taky první krok k dlouhodobější spolupráci s Fak(e)ticky — společné workshopy, výzkum a možná i společná účast na CTRL Summitu příští rok.",
        en: "It is also the first step toward a longer cooperation with Fak(e)ticky — joint workshops, research, and possibly a shared presence at CTRL Summit next year.",
      },
      {
        type: "h2",
        cs: "Chceš se zapojit příště?",
        en: "Want to join next time?",
      },
      {
        type: "p",
        cs: [
          "Mezinárodní výměny jsou jedna z příležitostí, které členům CTRL Europe nabízíme. ",
          { text: "Přidej se k nám", href: "/apply" },
          ".",
        ],
        en: [
          "International exchanges are one of the opportunities we offer CTRL Europe members. ",
          { text: "Join us", href: "/apply" },
          ".",
        ],
      },
    ],
  },
  {
    slug: "dny-ai",
    date: "2026-11-01",
    published: "2026-09-27",
    invite: {
      cs: "/photos/news/dny-ai-cs.webp",
      en: "/photos/news/dny-ai-en.webp",
    },
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    banner: {
      variant: "orb",
      date: { cs: "1.–3. listopadu", en: "1–3 November" },
      points: {
        cs: ["Dezinformace", "Deepfakes", "Manipulace"],
        en: ["Disinformation", "Deepfakes", "Manipulation"],
      },
    },
    category: { cs: "Vzdělávání", en: "Education" },
    title: {
      cs: "Vyrážíme na Dny AI",
      en: "We're heading to AI Days",
    },
    excerpt: {
      cs: "1.–3. listopadu jedeme na Dny AI s workshopem o dezinformacích, deepfakes a manipulaci.",
      en: "On 1–3 November we are going to AI Days with a workshop on disinformation, deepfakes and manipulation.",
    },
    meta: {
      cs: {
        title: "Vyrážíme na Dny AI | CTRL Europe",
        description:
          "1.–3. listopadu 2026 jedeme na Dny AI s workshopem o dezinformacích, deepfakes a manipulaci.",
      },
      en: {
        title: "We're heading to AI Days | CTRL Europe",
        description:
          "On 1–3 November 2026 we are going to AI Days with a workshop on disinformation, deepfakes and manipulation.",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["1.–3. listopadu.", "Dny AI.", "Dezinformace, deepfakes, manipulace."],
          en: ["1–3 November.", "AI Days.", "Disinformation, deepfakes, manipulation."],
        },
      },
      {
        type: "p",
        cs: "1.–3. listopadu vyrážíme na Dny AI. Bereme s sebou workshop o dezinformacích, deepfakes a manipulaci.",
        en: "On 1–3 November we are heading to AI Days. We are bringing a workshop on disinformation, deepfakes and manipulation.",
      },
      {
        type: "h2",
        id: "workshop",
        cs: "O čem je workshop",
        en: "What the workshop is about",
      },
      {
        type: "p",
        cs: "Dezinformace. Deepfakes. Manipulace. Tři věci, které studenti potkávají každý den a které se ve škole skoro neučí.",
        en: "Disinformation. Deepfakes. Manipulation. Three things students run into every day, and that school barely teaches.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Kdy", en: "When" },
            value: { cs: "1.–3. 11. 2026", en: "1–3 Nov 2026" },
          },
          {
            label: { cs: "Kam", en: "Where" },
            value: { cs: "Dny AI", en: "AI Days" },
          },
          {
            label: { cs: "Workshop", en: "Workshop" },
            value: { cs: "Dezinformace, deepfakes, manipulace", en: "Disinformation, deepfakes, manipulation" },
          },
        ],
      },
      {
        type: "quote",
        cs: "Chceme, aby studenti poznali dezinformaci, deepfake i manipulaci dřív, než jim uvěří.",
        en: "We want students to recognise disinformation, a deepfake and manipulation before they believe them.",
        author: {
          cs: "Tým vedení CTRL Europe",
          en: "The CTRL Europe leadership team",
        },
      },
      {
        type: "h2",
        cs: "Chceš workshop na svou školu?",
        en: "Want the workshop at your school?",
      },
      {
        type: "p",
        cs: [
          "Workshop o dezinformacích, deepfakes a manipulaci bereme i na školy — zdarma. Napiš na ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
        en: [
          "We also bring the workshop on disinformation, deepfakes and manipulation into schools — free of charge. Write to ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
      },
    ],
  },
  {
    slug: "ctrl-challenge",
    date: "2026-12-08",
    published: "2026-09-27",
    invite: {
      cs: "/photos/news/challenge-cs.webp",
      en: "/photos/news/challenge-en.webp",
    },
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    banner: {
      variant: "rail",
      date: { cs: "8. prosince", en: "8 December" },
      points: {
        cs: ["Bez AI", "Týmy", "Střední školy"],
        en: ["No AI", "Teams", "Secondary schools"],
      },
    },
    category: { cs: "Soutěž", en: "Competition" },
    title: {
      cs: "Staňte se digitálním vyšetřovatelem",
      en: "Become a digital investigator",
    },
    excerpt: {
      cs: "8. prosince pořádáme CTRL Challenge — vyšetřovací kybernetickou soutěž pro středoškoláky, kde týmy řeší reálné případy manipulace a dezinformací.",
      en: "On 8 December we are holding CTRL Challenge — an investigative cybersecurity competition for secondary-school students, where teams work real cases of manipulation and disinformation.",
    },
    meta: {
      cs: {
        title: "CTRL Challenge: staňte se digitálním vyšetřovatelem | CTRL Europe",
        description:
          "8. prosince 2026 CTRL Challenge v Brně. Týmy středoškoláků vyšetřují reálné případy manipulace bez umělé inteligence. Registrace v listopadu.",
      },
      en: {
        title: "CTRL Challenge: become a digital investigator | CTRL Europe",
        description:
          "CTRL Challenge on 8 December 2026. Secondary-school teams investigate real cases of manipulation, without artificial intelligence. Registration opens in November.",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["8. prosince.", "Bez umělé inteligence.", "Jen důkazy."],
          en: ["8 December.", "No artificial intelligence.", "Just the evidence."],
        },
      },
      {
        type: "p",
        cs: "8. prosince pořádáme CTRL Challenge — vyšetřovací kybernetickou soutěž pro středoškoláky a gymnazisty. Týmy vyšetřují reálné případy manipulace a dezinformací.",
        en: "On 8 December we are holding CTRL Challenge — an investigative cybersecurity competition for secondary-school and grammar-school students. Teams investigate real cases of manipulation and disinformation.",
      },
      {
        type: "h2",
        id: "slozka",
        cs: "Vyšetřovací složka na stole",
        en: "A case file on the table",
      },
      {
        type: "p",
        cs: "CTRL Challenge podporuje kritické myšlení, argumentaci a přemýšlení v kybernetické bezpečnosti. Soutěžní týmy dostanou na místě vyšetřovací složku s reálnými případy manipulace, dezinformací, dezinformačních kanálů a útoků pomocí umělé inteligence.",
        en: "CTRL Challenge builds critical thinking, argumentation and reasoning about cybersecurity. On the day, teams receive a case file with real instances of manipulation, disinformation, disinformation channels and attacks that use artificial intelligence.",
      },
      {
        type: "p",
        cs: "Reálný případ digitální manipulace čeká na vyšetření. Žádná umělá inteligence nepomůže — na místě bude technicky zajištěno, že nebude dostupná. Jen vy, důkazy a váš úsudek.",
        en: "A real case of digital manipulation is waiting to be investigated. Artificial intelligence will not help — the room will be set up so it is not available. Just you, the evidence and your judgement.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Kdy", en: "When" },
            value: { cs: "8. 12. 2026", en: "8 Dec 2026" },
          },
          {
            label: { cs: "Pro koho", en: "Who" },
            value: { cs: "Střední školy", en: "Secondary schools" },
          },
          {
            label: { cs: "Formát", en: "Format" },
            value: { cs: "Týmové vyšetřování", en: "Team investigation" },
          },
          {
            label: { cs: "Registrace", en: "Registration" },
            value: { cs: "V listopadu", en: "In November" },
          },
        ],
      },
      {
        type: "h2",
        id: "pravidla",
        cs: "Vyšetřování krok za krokem",
        en: "The investigation, step by step",
      },
      {
        type: "timeline",
        items: [
          {
            time: "01",
            cs: "Bez umělé inteligence. Vyšetřování probíhá na technice, kde je AI záměrně nedostupná — rozhoduje vlastní úsudek.",
            en: "No artificial intelligence. The investigation runs on equipment where AI is deliberately unavailable — your own judgement decides.",
          },
          {
            time: "02",
            cs: "Přibývající indicie. Během dne dostávají týmy nové stopy a skládají případ postupně dohromady.",
            en: "Clues keep arriving. Through the day, teams receive new leads and piece the case together as they go.",
          },
          {
            time: "03",
            cs: "Obhajoba případu. Na konci dne musí tým svůj závěr obhájit před ostatními týmy, které mu oponují.",
            en: "Defending the case. At the end of the day the team has to defend its conclusion in front of the other teams, who argue back.",
          },
          {
            time: "04",
            cs: "Bez nutných znalostí. Zapojit se může kdokoliv ze střední školy nebo gymnázia — rozšířené znalosti kyberbezpečnosti nejsou potřeba.",
            en: "No specialist knowledge required. Anyone from a secondary school or grammar school can take part — you do not need an advanced background in cybersecurity.",
          },
        ],
      },
      {
        type: "h2",
        id: "ceny",
        cs: "Ceny pro nejlepší týmy",
        en: "Prizes for the best teams",
      },
      {
        type: "table",
        head: {
          cs: ["Místo", "Cena"],
          en: ["Place", "Prize"],
        },
        rows: [
          {
            cs: ["1. místo", "Hlavní cena a certifikát"],
            en: ["1st place", "Main prize and a certificate"],
          },
          {
            cs: ["2. místo", "Certifikát a odměna"],
            en: ["2nd place", "Certificate and a reward"],
          },
          {
            cs: ["3. místo", "Certifikát a merch"],
            en: ["3rd place", "Certificate and merch"],
          },
        ],
      },
      {
        type: "p",
        cs: "Všichni účastníci odcházejí s certifikátem účasti, který půjde ověřit online.",
        en: "Every participant leaves with a certificate of participation that can be verified online.",
      },
      {
        type: "quote",
        cs: "Bez AI, bez nápovědy — jen vlastní hlava a důkazy na stole.",
        en: "No AI, no hints — just your own head and the evidence on the table.",
        author: {
          cs: "CTRL Europe",
          en: "CTRL Europe",
        },
      },
      {
        type: "h2",
        cs: "Přihlas svůj tým",
        en: "Register your team",
      },
      {
        type: "p",
        cs: [
          "Registrace bude spuštěna v listopadu. Sleduj ",
          { text: "Instagram", href: "https://www.instagram.com/ctrleurope.cz/" },
          ", ať ti to neuteče.",
        ],
        en: [
          "Registration opens in November. Follow us on ",
          { text: "Instagram", href: "https://www.instagram.com/ctrleurope.eu/" },
          " so you don't miss it.",
        ],
      },
    ],
  },
  {
    slug: "ctrl-day",
    date: "2027-01-14",
    published: "2026-09-27",
    invite: {
      cs: "/photos/news/ctrl-day-cs.webp",
      en: "/photos/news/ctrl-day-en.webp",
    },
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    banner: {
      variant: "watermark",
      mark: { cs: "14", en: "14" },
      date: { cs: "14. ledna 2027", en: "14 January 2027" },
      lead: {
        cs: "První studentská konference pro celý Jihomoravský kraj",
        en: "The first student conference for the whole South Moravian Region",
      },
      points: {
        cs: ["Brno", "300–800 studentů", "Celý kraj"],
        en: ["Brno", "300–800 students", "The whole region"],
      },
    },
    category: { cs: "Konference", en: "Conference" },
    title: {
      cs: "CTRL Day",
      en: "CTRL Day",
    },
    excerpt: {
      cs: "14. ledna 2027 pořádáme v Brně první velkou studentskou konferenci CTRL Day pro celý Jihomoravský kraj.",
      en: "On 14 January 2027 we are holding CTRL Day in Brno — our first large student conference, for the whole South Moravian Region.",
    },
    meta: {
      cs: {
        title: "CTRL Day | CTRL Europe",
        description:
          "CTRL Day 14. ledna 2027 v Brně. Studentská konference pro Jihomoravský kraj, kapacita 300 až 800 studentů, přednášky, stánky partnerů a networking.",
      },
      en: {
        title: "CTRL Day | CTRL Europe",
        description:
          "CTRL Day on 14 January 2027 in Brno. A student conference for the South Moravian Region, capacity 300 to 800 students, talks, partner stands and networking.",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["14. ledna 2027.", "Brno.", "Celý kraj."],
          en: ["14 January 2027.", "Brno.", "The whole region."],
        },
      },
      {
        type: "p",
        cs: "CTRL Day je naše první velká studentská konference v Brně — pro celý Jihomoravský kraj. Termín je 14. ledna 2027.",
        en: "CTRL Day is our first large student conference in Brno — for the whole South Moravian Region. The date is 14 January 2027.",
      },
      {
        type: "h2",
        id: "den",
        cs: "Jeden den, celý kraj",
        en: "One day, the whole region",
      },
      {
        type: "p",
        cs: "Pořádáme ji pro střední školy a gymnázia z celého Jihomoravského kraje. Bude to místo, kde se potkají studenti, naši partneři a odborníci — s přednáškami, stánky a příležitostí k networkingu.",
        en: "We are organising it for secondary schools and grammar schools from across the South Moravian Region. It will be a place where students, our partners and practitioners meet — with talks, stands and time to network.",
      },
      {
        type: "p",
        cs: "Podle zájmu upravujeme prostory za pochodu. Zájem zatím roste rychle.",
        en: "We are adjusting the venue as interest comes in. So far, that interest is growing fast.",
      },
      {
        type: "h2",
        id: "kapacita",
        cs: "Od 300 do 800 studentů",
        en: "From 300 to 800 students",
      },
      {
        type: "p",
        cs: "Aktuální kapacita je nastavená na 300 studentů. Prostory jsme připraveni rozšířit až na 500–800 účastníků, pokud bude zájem větší. Záleží na tom, kolik škol se do CTRL Day zapojí.",
        en: "Capacity is currently set at 300 students. We are ready to expand the venue to 500–800 participants if interest is higher. It depends on how many schools join CTRL Day.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Kdy", en: "When" },
            value: { cs: "14. 1. 2027", en: "14 Jan 2027" },
          },
          {
            label: { cs: "Kde", en: "Where" },
            value: { cs: "Brno", en: "Brno" },
          },
          {
            label: { cs: "Kapacita", en: "Capacity" },
            value: { cs: "300–800", en: "300–800" },
          },
          {
            label: { cs: "Dosah", en: "Reach" },
            value: { cs: "Jihomoravský kraj", en: "South Moravia" },
          },
        ],
      },
      {
        type: "h2",
        id: "program-dne",
        cs: "Program pro všechny",
        en: "A programme for everyone",
      },
      {
        type: "h3",
        cs: "Přednášky odborníků",
        en: "Talks by practitioners",
      },
      {
        type: "p",
        cs: "Vystoupení expertů z partnerských organizací na témata digitální bezpečnosti a mediální gramotnosti.",
        en: "Talks by experts from partner organisations on digital safety and media literacy.",
      },
      {
        type: "h3",
        cs: "Stánky partnerů",
        en: "Partner stands",
      },
      {
        type: "p",
        cs: "Prostor pro spolupracující organizace, aby představily vlastní práci a projekty.",
        en: "Space for partner organisations to present their own work and projects.",
      },
      {
        type: "h3",
        cs: "Networking",
        en: "Networking",
      },
      {
        type: "p",
        cs: "Setkání studentů napříč školami z celého kraje na jednom místě.",
        en: "Students from schools across the region, meeting in one place.",
      },
      {
        type: "h3",
        cs: "Prostor pro vaši školu",
        en: "A slot for your school",
      },
      {
        type: "p",
        cs: "Otevřený slot i pro přednášku z vašich řad. Máte co říct? Ozvěte se.",
        en: "An open slot for a talk from your own ranks. Have something to say? Get in touch.",
      },
      {
        type: "quote",
        cs: "CTRL Day má být místo, kde se studenti z celého kraje poprvé potkají naživo — ne jen na sociálních sítích.",
        en: "CTRL Day should be a place where students from across the region meet in person for the first time — not only on social media.",
        author: {
          cs: "Jan Krejčí, Prezident & Zakladatel, CTRL Europe",
          en: "Jan Krejčí, President & Founder, CTRL Europe",
        },
      },
      {
        type: "h2",
        cs: "Přihlas svou školu",
        en: "Register your school",
      },
      {
        type: "p",
        cs: [
          "Zástupci organizací mohou žádat o vlastní stánek nebo přednáškový slot. Studenti a školy napište na ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
        en: [
          "Organisations can ask for their own stand or a talk slot. Students and schools, write to ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
      },
    ],
  },
  {
    slug: "gymnazium-videnska",
    date: "2026-10-27",
    published: "2026-09-27",
    invite: {
      cs: "/photos/news/videnska-cs.webp",
      en: "/photos/news/videnska-en.webp",
    },
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    banner: {
      variant: "band",
      date: { cs: "27. října", en: "27 October" },
      points: {
        cs: ["Brno", "Přednáška", "AI a manipulace"],
        en: ["Brno", "Talk", "AI and manipulation"],
      },
    },
    category: { cs: "Vzdělávání", en: "Education" },
    title: {
      cs: "Míříme na Gymnázium Vídeňská",
      en: "We're heading to Gymnázium Vídeňská",
    },
    excerpt: {
      cs: "27. října povede prezident CTRL Europe přednášku pro studenty jednoho z nejaktivnějších gymnázií v Brně.",
      en: "On 27 October, the President of CTRL Europe will give a talk for students at one of Brno's most active grammar schools.",
    },
    meta: {
      cs: {
        title: "Míříme na Gymnázium Vídeňská | CTRL Europe",
        description:
          "27. října 2026 povede prezident CTRL Europe přednášku na Gymnáziu Vídeňská v Brně. Tři bloky: AI podvody, manipulace v digitálním prostoru a digitální závislosti.",
      },
      en: {
        title: "We're heading to Gymnázium Vídeňská | CTRL Europe",
        description:
          "On 27 October 2026, the President of CTRL Europe will give a talk at Gymnázium Vídeňská in Brno. Three parts: AI cons, manipulation in digital space, and digital addictions.",
      },
    },
    sections: [
      {
        type: "marquee",
        phrases: {
          cs: ["27. října.", "Gymnázium Vídeňská.", "Konkrétní nástroje."],
          en: ["27 October.", "Gymnázium Vídeňská.", "Concrete tools."],
        },
      },
      {
        type: "p",
        cs: "27. října povede prezident CTRL Europe přednášku pro studenty jednoho z nejaktivnějších gymnázií v Brně.",
        en: "On 27 October, the President of CTRL Europe will give a talk for students at one of Brno's most active grammar schools.",
      },
      {
        type: "p",
        cs: "Chceme, aby studenti odešli s pocitem, že rozumí digitálnímu světu líp než ráno.",
        en: "We want students to leave feeling they understand the digital world better than they did that morning.",
      },
      {
        type: "h2",
        id: "skola",
        cs: "Škola, kde vznikají nápady",
        en: "A school where ideas start",
      },
      {
        type: "p",
        cs: "Gymnázium Vídeňská patří dlouhodobě mezi nejaktivnější střední školy v Brně — je zdrojem studentů, kteří stojí za soutěžemi jako Den hejtmanem JMK, se kterým CTRL Europe úzce spolupracuje.",
        en: "Gymnázium Vídeňská has long been one of the most active secondary schools in Brno — a source of the students behind competitions such as Den hejtmanem JMK, with which CTRL Europe works closely.",
      },
      {
        type: "p",
        cs: "Právě tady jsme poprvé navázali kontakt s panem Svobodou, díky kterému dnes připravujeme workshopy pro budoucí ročníky soutěže. Tahle přednáška je dalším krokem v prohlubování spolupráce.",
        en: "This is where we first made contact with Mr Svoboda, thanks to whom we are now preparing workshops for future editions of the competition. This talk is the next step in deepening that cooperation.",
      },
      {
        type: "h2",
        id: "v-cislech",
        cs: "Co přednáška obnáší",
        en: "What the talk involves",
      },
      {
        type: "p",
        cs: "Jeden den, jedna přednáška. Za CTRL Europe stojí 650 členů a zkušenosti ze šesti zemí.",
        en: "One day, one talk. CTRL Europe has 650 members behind it, and experience drawn from six countries.",
      },
      {
        type: "facts",
        items: [
          {
            label: { cs: "Kdy", en: "When" },
            value: { cs: "27. 10. 2026", en: "27 Oct 2026" },
          },
          {
            label: { cs: "Kde", en: "Where" },
            value: { cs: "Vídeňská, Brno", en: "Vídeňská, Brno" },
          },
          {
            label: { cs: "Tým", en: "Team" },
            value: { cs: "650 členů", en: "650 members" },
          },
          {
            label: { cs: "Zkušenosti", en: "Experience" },
            value: { cs: "6 zemí", en: "6 countries" },
          },
        ],
      },
      {
        type: "h2",
        id: "bloky",
        cs: "Tři bloky přednášky",
        en: "Three parts of the talk",
      },
      {
        type: "h3",
        cs: "01 — AI podvod: jak umělá inteligence vytváří lži, kterým věříš",
        en: "01 — The AI con: how artificial intelligence builds lies you believe",
      },
      {
        type: "p",
        cs: "Video politika, který nikdy nic takového neřekl. Fotka celebrity na místě, kde nikdy nebyla. Deepfakes jsou dnes dostupné každému — stačí pár kliknutí a pár minut. Ukážeme si na živých příkladech, jak vznikají, proč jim věří i chytří lidé a jak se dají, alespoň prozatím, rozpoznat. Odnesete si konkrétní nástroje a triky, jak rozeznat obsah generovaný umělou inteligencí od reality.",
        en: "A video of a politician who never said any of it. A photo of a celebrity in a place they never were. Deepfakes are available to anyone now — a few clicks and a few minutes. We'll show live examples of how they are made, why even smart people believe them, and how they can, for now, be spotted. You'll leave with concrete tools and tricks for telling AI-generated content from reality.",
      },
      {
        type: "h3",
        cs: "02 — Kdo tě ovládá? Manipulace na sociálních sítích a v digitálním prostoru",
        en: "02 — Who's in control of you? Manipulation on social media and in digital space",
      },
      {
        type: "p",
        cs: "Deepfakes, upravené fotky, cíleně zkreslené informace — manipulace v digitálním prostoru je dnes propracovanější než kdy dřív. Ukážeme si konkrétní techniky manipulace a naučíme se je rozpoznávat dřív, než nás ovlivní. Odnesete si pochopení, jak manipulace funguje a jak se jí bránit.",
        en: "Deepfakes, edited photos, deliberately distorted information — manipulation in digital space is more sophisticated than ever. We'll look at specific techniques and learn to recognise them before they shape us. You'll leave understanding how manipulation works and how to resist it.",
      },
      {
        type: "h3",
        cs: "03 — Proč nemůžeš přestat scrollovat: digitální závislosti a jak z toho ven",
        en: "03 — Why you can't stop scrolling: digital addictions and a way out",
      },
      {
        type: "p",
        cs: "Algoritmy sociálních sítí jsou navržené s jedním cílem — udržet tě u obrazovky co nejdéle. A funguje to. Ukážeme si, proč jsou aplikace navržené jako digitální pasti a co to dělá s naším mozkem a pozorností. Odnesete si konkrétní tipy na digitální hygienu a zdravější návyky.",
        en: "Social media algorithms are designed with one goal — to keep you at the screen for as long as possible. And it works. We'll show why apps are built as digital traps and what that does to the brain and to attention. You'll leave with concrete tips for digital hygiene and healthier habits.",
      },
      {
        type: "quote",
        cs: "Nechceme jen mluvit o problémech. Chceme dát studentům konkrétní nástroje, které použijí hned zítra.",
        en: "We don't want to only talk about the problems. We want to give students concrete tools they can use tomorrow.",
        author: {
          cs: "Jan Krejčí, Prezident & Zakladatel, CTRL Europe",
          en: "Jan Krejčí, President & Founder, CTRL Europe",
        },
      },
      {
        type: "h2",
        id: "dal",
        cs: "Jeden den, dlouhodobý vztah",
        en: "One day, a long-term relationship",
      },
      {
        type: "p",
        cs: "Tahle přednáška není jednorázová záležitost. Je součástí dlouhodobé spolupráce mezi CTRL Europe a středními školami v Jihomoravském kraji — a otevírá dveře k dalším workshopům, spolupráci na soutěžích a možná i nové školní buňce CTRL Europe přímo na Vídeňské.",
        en: "This talk is not a one-off. It is part of a long-term cooperation between CTRL Europe and secondary schools in the South Moravian Region — and it opens the door to further workshops, work on competitions, and possibly a new CTRL Europe school cell right at Vídeňská.",
      },
      {
        type: "h2",
        cs: "Chceš pozvat CTRL Europe na svou školu?",
        en: "Want to invite CTRL Europe to your school?",
      },
      {
        type: "p",
        cs: [
          "Naše workshopy a přednášky jsou zdarma pro všechny základní a střední školy. Napiš na ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
        en: [
          "Our workshops and talks are free for every primary and secondary school. Write to ",
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
      },
    ],
  },
  {
    slug: "charitativni-beh",
    date: "2026-10-03",
    published: "2026-09-24",
    invite: "/photos/charitativni-beh.jpg",
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    posters: [
      {
        src: "/photos/ctrl-run-plakat.png",
        width: 724,
        height: 1024,
        title: { cs: "Plakát CTRL Run", en: "CTRL Run poster" },
        caption: { cs: "Plakát", en: "Poster" },
      },
      {
        src: "/photos/ctrl-run-program.png",
        width: 720,
        height: 1024,
        title: { cs: "Program CTRL Run", en: "CTRL Run programme" },
        caption: { cs: "Program", en: "Programme" },
      },
    ],
    category: { cs: "Proběhlá akce", en: "Past event" },
    title: {
      cs: "Charitativní běh na podporu prevence digitálních závislostí dětí a mládeže",
      en: "Charity run in support of preventing digital addictions in children and young people",
    },
    excerpt: {
      cs: "Akce už proběhla. CTRL Europe uspořádal v sobotu 3. října 2026 charitativní běh u areálu Komec. Veškerý výtěžek z CTRL Run jde Společnosti Podané ruce na prevenci digitálních závislostí u dětí a mládeže.",
      en: "This event has already taken place. CTRL Europe held the charity run on Saturday 3 October 2026 at Komec. All proceeds from CTRL Run go to Společnost Podané ruce for preventing digital addictions in children and young people.",
    },
    meta: {
      cs: {
        title:
          "Charitativní běh na podporu prevence digitálních závislostí | CTRL Europe",
        description:
          "Charitativní běh CTRL Run už proběhl 3. října 2026 u areálu Komec. 5 km, začátek 15:00, běh od 16:00, tombola 17:20, přednáška 17:40, párty od 18:30. Výtěžek jde Podaným rukám.",
        image: "/photos/charitativni-beh.jpg",
      },
      en: {
        title:
          "Charity run for the prevention of digital addictions | CTRL Europe",
        description:
          "The CTRL Run charity run took place on 3 October 2026 at Komec. 5 km, start 15:00, run from 16:00, raffle 17:20, talk 17:40, party from 18:30. Proceeds go to Podané ruce.",
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
        cs: "Akce už proběhla. CTRL Europe uspořádal v sobotu 3. října 2026 charitativní běh CTRL Run u sportovního areálu Komec v Brně-Komárově. Bojujeme proti závislostem na digitálních technologiích — a proto jsme se rozhodli udělat něco jednoduchého a přímého: vylákat lidi od obrazovek ven, mezi lidi, do pohybu.",
        en: "This event has already taken place. CTRL Europe held the CTRL Run charity run on Saturday 3 October 2026 at the Komec sports complex in Brno-Komárov. We fight addiction to digital technology — so we decided to do something simple and direct: get people away from screens, out among people, and moving.",
      },
      {
        type: "p",
        cs: "Veškerý výtěžek z CTRL Run šel Společnosti Podané ruce na podporu prevence digitálních závislostí u dětí a mládeže.",
        en: "All proceeds from CTRL Run went to Společnost Podané ruce to support preventing digital addictions in children and young people.",
      },
      {
        type: "p",
        cs: [
          "Jak akce dopadla a fotografie z ní jsou v reportáži ",
          { text: "CTRL Run 2026", href: "/news/ctrl-run-2026" },
          ".",
        ],
        en: [
          "How the day turned out, with photographs, is in the ",
          { text: "CTRL Run 2026", href: "/news/ctrl-run-2026" },
          " report.",
        ],
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
            value: { cs: "5 km", en: "5 km" },
          },
          {
            label: { cs: "Start", en: "Start" },
            value: { cs: "16:00", en: "16:00" },
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
        cs: "Tombola",
        en: "Raffle",
      },
      {
        type: "p",
        cs: "Každý účastník je automaticky v tombole — ceny v hodnotě několika desítek tisíc korun od JUKO petfood, HUDY a dalších partnerů. Losování proběhne v 17:20.",
        en: "Every participant is automatically entered into the raffle — prizes worth several tens of thousands of crowns from JUKO petfood, HUDY and other partners. The draw takes place at 17:20.",
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
                cs: "Podané ruce",
                en: "Podané ruce",
                href: "https://podaneruce.cz",
                logo: "/partners/podane-ruce.svg",
              },
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
                logo: "/partners/obcerstveni-u-lampy.svg",
              },
              {
                cs: "HUDY",
                en: "HUDY",
                href: "https://www.hudy.cz",
                logo: "/partners/hudy.svg",
              },
              {
                cs: "Střední škola a vyšší odborná škola informatiky a financí Brno",
                en: "Secondary School and College of Informatics and Finance Brno",
                href: "https://www.cichnovabrno.cz/",
                logo: "/partners/cichnova-brno.png",
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
      {
        type: "h2",
        cs: "Vstupné",
        en: "Entry fees",
      },
      {
        type: "p",
        cs: "Kapacita je omezená. Běh nemá soutěžní charakter — čas se neměří a tempo si určuje každý sám. Výtěžek ze vstupného na běh jde Společnosti Podané ruce; vstupné jen na seznamovačku ne.",
        en: "Capacity is limited. The run is not a race — times are not recorded and each participant sets their own pace. Proceeds from run entry go to Společnost Podané ruce; mixer-only tickets do not.",
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
            cs: ["Studentské — jen afterparty", "90 Kč"],
            en: ["Student — afterparty only", "90 CZK"],
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
            time: "17:20",
            cs: "Tombola",
            en: "Raffle",
          },
          {
            time: "17:40",
            cs: "Přednáška pana Škerleho",
            en: "Talk by Mr Škerle",
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
        cs: "Na místě budou aktivity a stánky sponzorů i zúčastněných organizací. Zastavit se u nich můžete před během i po něm. Po běhu vás čeká tombola a přednáška pana Škerleho ze Společnosti Podané ruce.",
        en: "Sponsors and participating organisations will have activities and stands on site. You can stop by before the run and after it. After the run there will be a raffle and a talk by Mr Škerle from Společnost Podané ruce.",
      },
      {
        type: "h2",
        id: "trasa",
        cs: "Trasa",
        en: "The route",
      },
      {
        type: "p",
        cs: "Okruh měří 5 km a vede okolím sportovního areálu Komec. Trasou se můžete projít předem na Mapy.cz nebo na Stravě.",
        en: "The loop is 5 km and runs around the Komec sports complex. You can preview the course on Mapy.cz or Strava beforehand.",
      },
      {
        type: "route",
        platforms: [
          {
            id: "mapy",
            label: { cs: "Mapy.cz", en: "Mapy.cz" },
            open: { cs: "Otevřít na Mapy.cz", en: "Open in Mapy.cz" },
            title: {
              cs: "Brno-jih — 5 km",
              en: "Brno-jih — 5 km",
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
        cs: "Po běhu proběhla seznamovací akce určená především studentům. Bez scrollování, bez profilových fotek, bez matchování přes obrazovku — telefon stranou a setkání s novými lidmi.",
        en: "After the run there was a mixer aimed primarily at students. No scrolling, no profile photos, no matching through a screen — phones aside, and meeting new people.",
      },
      {
        type: "p",
        cs: "Aktivity a hry se odehrají na parníku. Dostaneš číslo, napíšeš kontakt a jméno, seznamuješ se — a na konci odevzdáš seznam. Při oboustranném MATCH dostanete kontakt po akci. Nikdo nedostane tvůj kontakt bez tvého vědomí.",
        en: "Activities and games take place on a steamboat. You receive a number, write your contact and name, socialize — and hand in the list at the end. On a mutual MATCH you both get the contact after the event. Nobody gets your details without you knowing.",
      },
      {
        type: "p",
        cs: "Dobrovolné náramky jen napovídají, s čím přicházíš. Tombola s cenami od partnerů je součástí programu (losování v 17:20) — detaily najdeš výše u startovního balíčku.",
        en: "Optional wristbands simply signal what you’re open to. The partner-prize raffle is part of the programme (draw at 17:20) — see details above under the starter pack.",
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
      }
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
