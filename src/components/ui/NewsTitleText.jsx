const ACCENTS = [
  "digitálních závislostí",
  "digital addictions",
  "Gymnázium Vídeňská",
  "digitálním vyšetřovatelem",
  "digital investigator",
  "Dny AI",
  "AI Days",
  "Slovensko",
  "Slovakia",
  "CTRL Day",
];

export function NewsTitleText({ text }) {
  const accent = ACCENTS.find((phrase) => text.includes(phrase));
  if (!accent) return text;

  const index = text.indexOf(accent);

  return (
    <>
      {text.slice(0, index)}
      <span className="news-title-accent">{accent}</span>
      {text.slice(index + accent.length)}
    </>
  );
}
