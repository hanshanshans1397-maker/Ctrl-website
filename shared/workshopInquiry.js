export const INQUIRY_AUDIENCES = [
  { value: "zs-67", cs: "6.–7. ZŠ", en: "Grades 6–7, primary school" },
  { value: "zs-89", cs: "8.–9. ZŠ", en: "Grades 8–9, primary school" },
  { value: "ss-12", cs: "1.–2. SŠ", en: "Years 1–2, secondary school" },
  { value: "ss-34", cs: "3.–4. SŠ", en: "Years 3–4, secondary school" },
  { value: "public", cs: "Veřejnost", en: "Public" },
  { value: "company", cs: "Firma", en: "Company" },
];

export const INQUIRY_TOPICS = [
  {
    value: "disinfo",
    cs: "Dezinformace, manipulace a deepfaky",
    en: "Disinformation, manipulation and deepfakes",
  },
  {
    value: "attention",
    cs: "Digitální závislosti, manipulace a AI",
    en: "Digital addiction, manipulation and AI",
  },
  {
    value: "ai-disinfo",
    cs: "AI a dezinformace",
    en: "AI and disinformation",
  },
  {
    value: "habits",
    cs: "Digitální závislosti",
    en: "Digital addiction",
  },
  {
    value: "unsure",
    cs: "Nevím, poraďte",
    en: "Not sure, please advise",
  },
];

export const INQUIRY_FORMATS = [
  { value: "game", cs: "Hra", en: "Game" },
  { value: "lecture", cs: "Přednáška", en: "Lecture" },
  { value: "expert", cs: "S odborníkem", en: "With an expert" },
  { value: "unsure", cs: "Nevím", en: "Not sure" },
];

export function inquiryLabel(list, value) {
  return list.find((item) => item.value === value)?.cs ?? "";
}
