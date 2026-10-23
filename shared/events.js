export const EVENTS = [
  {
    id: "run",
    name: "CTRL RUN",
    categoryCs: "Komunitní akce",
    categoryEn: "Community event",
    descCs:
      "Charitativní běh „Odlož ten telefon“. Sportujeme, seznamujeme se na trati i po doběhu a výtěžek posíláme na dobrou věc. Jde o to dostat lidi od obrazovek ven, mezi ostatní.",
    descEn:
      "A charity run called “Put the phone down.” We exercise, meet on the course and after the finish, and send the proceeds to a good cause. The point is to get people away from screens and out among other people.",
  },
  {
    id: "challenge",
    name: "CTRL CHALLENGE",
    categoryCs: "Soutěž",
    categoryEn: "Competition",
    descCs:
      "Soutěž pro týmy ze základních, středních i vysokých škol. Pokaždé v jiné podobě: jednou vyšetřujete případ dezinformační kampaně, jindy u soudu obhajujete nebo žalujete. Téma je vždy stejné. Manipulace, dezinformace a digitální svět.",
    descEn:
      "A competition for teams from primary schools, secondary schools and universities. Each edition takes a different shape: one time you investigate a disinformation campaign, another time you defend or prosecute in court. The subject stays the same: manipulation, disinformation and the digital world.",
  },
  {
    id: "day",
    name: "CTRL DAY",
    categoryCs: "Konference",
    categoryEn: "Conference",
    descCs:
      "Studentská konference s přednáškami, odborníky a organizacemi z oblasti digitálního světa. Studenti se tu potkají s lidmi, kteří ta témata dělají v praxi, ne jen na slidu.",
    descEn:
      "A student conference with talks, experts and organisations from the digital world. Students meet the people who do this work in practice, not only on a slide.",
  },
  {
    id: "exchange",
    name: "CTRL EXCHANGE",
    categoryCs: "Výjezdy",
    categoryEn: "Exchanges",
    descCs:
      "Mezinárodní výměny pro naše členy a spolupracující školy. Studenti jedou na společný program a školy z různých zemí, které dělají podobnou práci, se propojí mezi sebou.",
    descEn:
      "International exchanges for our members and partner schools. Students travel for a shared programme, and schools in different countries doing similar work get connected with each other.",
  },
  {
    id: "workshop-day",
    name: "CTRL WORKSHOP DAY",
    categoryCs: "Pro veřejnost",
    categoryEn: "For the public",
    descCs:
      "Den workshopů, přednášek a debat pro rodiče a veřejnost. Odborníci mluví srozumitelně o telefonech, sítích a dezinformacích a o tom, co s tím doma i ve škole.",
    descEn:
      "A day of workshops, talks and discussions for parents and the public. Experts speak plainly about phones, social networks and disinformation, and about what to do at home and at school.",
  },
  {
    id: "debate",
    name: "CTRL DEBATE",
    categoryCs: "Soutěž",
    categoryEn: "Competition",
    descCs:
      "Debatní soutěž o digitálních tématech. Týmy argumentují třeba o umělé inteligenci ve škole, regulaci sítí nebo svobodě slova online. Počítá se argument, ne hlasitost.",
    descEn:
      "A debate competition on digital topics. Teams argue about artificial intelligence in school, regulation of networks, or freedom of speech online. The argument counts, not the volume.",
  },
  {
    id: "academy",
    name: "CTRL ACADEMY",
    categoryCs: "Vzdělávání",
    categoryEn: "Education",
    descCs:
      "Odborný program o tématech CTRL: dezinformace, manipulace a digitální návyky. Kromě obsahu se na něm naučíte, jak workshop sami vést pro spolužáky nebo pro školu.",
    descEn:
      "A training programme on CTRL topics: disinformation, manipulation and digital habits. Alongside the content, you learn how to lead a workshop yourself for classmates or for a school.",
  },
  {
    id: "fact-check",
    name: "CTRL FACT-CHECK NIGHT",
    categoryCs: "Komunitní akce",
    categoryEn: "Community event",
    descCs:
      "Večer během voleb nebo jiné velké události. Studenti naživo ověřují, co zaznívá v debatách a na sítích, a ještě ten večer ukazují, co se dá dohledat a co ne.",
    descEn:
      "An evening during elections or another major event. Students check live what is said in debates and on social networks, and show the same evening what can be verified and what cannot.",
  },
  {
    id: "awards",
    name: "CTRL AWARDS",
    categoryCs: "Ocenění",
    categoryEn: "Awards",
    descCs:
      "Ocenění pro studentské projekty a pro učitele, kteří digitální gramotnost ve škole dělají nejlíp. Veřejné poděkování práci, která jinak zůstává v lavicích a kabinetech.",
    descEn:
      "Awards for student projects and for teachers who do digital literacy best at school. A public thank-you for work that otherwise stays in classrooms and staff rooms.",
  },
];

export const EVENT_INQUIRY_TYPES = [
  ...EVENTS.map((event) => ({
    value: event.id,
    cs: event.name,
    en: event.name,
    hintCs: event.categoryCs,
    hintEn: event.categoryEn,
  })),
  { value: "other", cs: "Jiná akce", en: "Another event", hintCs: "", hintEn: "" },
];

export function eventInquiryLabel(value) {
  return EVENT_INQUIRY_TYPES.find((item) => item.value === value)?.cs ?? "";
}
