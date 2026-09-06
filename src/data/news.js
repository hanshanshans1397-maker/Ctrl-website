export const NEWS_INVITE = {
  width: 1024,
  height: 723,
};

const PODANE_RUCE = 'https://podaneruce.cz/';

export const NEWS = [
  {
    slug: 'charitativni-beh',
    date: '2026-10-03',
    invite: '/photos/charitativni-beh.webp',
    inviteWidth: NEWS_INVITE.width,
    inviteHeight: NEWS_INVITE.height,
    category: { cs: 'Akce', en: 'Event' },
    title: { cs: 'Charitativní běh', en: 'Charity run' },
    excerpt: {
      cs: 'V sobotu 3. října pořádáme u sportovního areálu Komec charitativní běh. Výtěžek půjde Podané ruce Brno, které pomáhají dětem a mladým lidem bojujícím se závislostmi.',
      en: 'On Saturday 3 October we are hosting a charity run at the Komec sports complex. Proceeds will go to Podané ruce Brno, who help children and young people struggling with addiction.',
    },
    meta: {
      cs: {
        title: 'Charitativní běh | CTRL Europe',
        description:
          'Charitativní běh CTRL Europe 3. října 2026 u areálu Komec. 5 a půl km, afterparty Odlož ten telefon, rezervace od 19. září. Výtěžek pro Podané ruce Brno.',
        image: '/photos/charitativni-beh.webp',
      },
      en: {
        title: 'Charity run | CTRL Europe',
        description:
          'CTRL Europe charity run on 3 October 2026 at Komec. Five and a half km, Put the phone down afterparty, reservations from 19 September. Proceeds go to Podané ruce Brno.',
        image: '/photos/charitativni-beh.webp',
      },
    },
    sections: [
      {
        type: 'p',
        cs: 'Nejde jen o odpoledne na dráze. Chceme dát dohromady lidi z naší sítě, otevřít akci i veřejnosti a zároveň něco reálného poslat dál. Proto CTRL Europe v sobotu 3. října 2026 pořádá charitativní běh u sportovního areálu Komec v Brně-Komárově.',
        en: 'This is not just an afternoon on the track. We want to bring people from our network together, open the event to the public, and send something real onward. That is why CTRL Europe is hosting a charity run on Saturday 3 October 2026 at the Komec sports complex in Brno-Komárov.',
      },
      {
        type: 'p',
        cs: [
          'Celý výtěžek jde ',
          { text: 'Podané ruce Brno', href: PODANE_RUCE },
          ' — organizaci, která pomáhá dětem a mladým lidem bojujícím se závislostmi. Dělají to s respektem a bez předsudků, často v situacích, kdy je kolem těžké najít klidnou oporu. Běh je náš způsob, jak k tomu přispět.',
        ],
        en: [
          'All proceeds go to ',
          { text: 'Podané ruce Brno', href: PODANE_RUCE },
          ' — an organisation that helps children and young people struggling with addiction. They do it with respect and without judgement, often in situations where calm support is hard to find. The run is our way of contributing.',
        ],
      },
      {
        type: 'quote',
        cs: 'Neběžíme proto, abychom měli hezkou fotku. Běžíme proto, aby pomoc dorazila k těm, kteří ji opravdu potřebují.',
        en: 'We are not running for a nice photo. We are running so that help actually reaches the people who need it.',
      },
      {
        type: 'h2',
        cs: 'Jak bude vypadat odpoledne',
        en: 'How the afternoon will look',
      },
      {
        type: 'p',
        cs: 'Od 15:00 začíná zhruba hodinový program. Není to jen rozcvička před startem — chceme, aby se lidé potkali ještě před během, pochopili, kam peníze jdou, a měli čas se rozdýchat. V 16:00 se vyráží na charitativní běh. Trať měří 5 a půl kilometru a vede po okruhu u sportovního areálu Komec. Doběh plánujeme kolem 17:00.',
        en: 'From 15:00 there will be about an hour of programme. It is not just a warm-up before the start — we want people to meet before the run, understand where the money goes, and have time to settle in. At 16:00 the charity run begins. The course is five and a half kilometres and follows the circuit at the Komec sports complex. We expect to finish around 17:00.',
      },
      {
        type: 'p',
        cs: 'Vstupné je 200 Kč, studenti mají slevu 15 %. Nejde o závod, ve kterém se počítají vteřiny. Jde o to dorazit, doběhnout a být u toho. Tempo si každý volí sám — důležité je, že se běží společně a s jasným důvodem.',
        en: 'Entry is 200 CZK, students get 15% off. This is not a race measured in seconds. It is about showing up, finishing, and being part of it. Everyone sets their own pace — what matters is that we run together, with a clear reason.',
      },
      {
        type: 'h2',
        cs: 'Rezervace',
        en: 'Reservations',
      },
      {
        type: 'p',
        cs: 'Kapacita není bezedná, proto se na akci hlásí dopředu. Rezervace se otevírá 19. září 2026 a probíhá online. Termín si klidně poznamenejte — jakmile se přihlášky spustí, dáme vědět i tady a na našich sítích.',
        en: 'Capacity is limited, so you need to sign up in advance. Reservations open on 19 September 2026 and will be online. Note the date — once registration goes live, we will also post it here and on our social channels.',
      },
      {
        type: 'h2',
        cs: 'Afterparty Odlož ten telefon',
        en: 'Put the phone down afterparty',
      },
      {
        type: 'p',
        cs: 'Po doběhu se večer nechceme jen rozuteč. Od 18:30 navazuje studentská afterparty v duchu naší iniciativy Odlož ten telefon. Telefony se odloží — ne proto, abychom někoho trestali, ale aby se lidé opravdu potkali. Místo scrollování budou soutěže, hry a společné aktivity.',
        en: 'After the run we do not want the evening to scatter. From 18:30 a student afterparty follows, in the spirit of our Put the phone down initiative. Phones are put away — not as a punishment, but so people actually meet. Instead of scrolling there will be contests, games and shared activities.',
      },
      {
        type: 'p',
        cs: 'Na zápěstí dostanete náramky single, taken nebo one night. Kdo chce, může si vzít ještě další barevný náramek jako signál, že hledá partnera stejného pohlaví. Je to jednoduchá, čitelná hra — a zároveň způsob, jak seznamování nechat na místě, ne v chatu.',
        en: 'You will get a wristband: single, taken or one night. Anyone who wants can add another coloured band as a signal that they are looking for a same-sex partner. It is a simple, readable game — and a way to keep meeting people in the room, not in a chat.',
      },
      {
        type: 'p',
        cs: 'Afterparty může trvat zhruba do 21:00. Přijít můžete na běh, na večer, nebo na obojí. Podstatné je, že výtěžek z odpoledne zůstane u dětí a mladých lidí, kterým Podané ruce v Brně pomáhají ze závislosti ven.',
        en: 'The afterparty may run until around 21:00. You can come for the run, for the evening, or for both. What matters is that the afternoon’s proceeds stay with the children and young people in Brno whom Podané ruce are helping out of addiction.',
      },
    ],
  },
];

export function getNewsBySlug(slug) {
  return NEWS.find((item) => item.slug === slug) ?? null;
}

export function formatNewsDate(iso, isEn) {
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(isEn ? 'en-GB' : 'cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
