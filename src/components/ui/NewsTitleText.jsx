const ACCENT = 'Podané ruce';

export function NewsTitleText({ text }) {
  const index = text.indexOf(ACCENT);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className="news-title-accent">{ACCENT}</span>
      {text.slice(index + ACCENT.length)}
    </>
  );
}
