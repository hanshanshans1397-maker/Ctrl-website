const ACCENTS = ["digitálních závislostí", "digital addictions"];

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
