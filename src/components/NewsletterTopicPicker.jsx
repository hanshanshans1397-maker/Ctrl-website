export function NewsletterTopicPicker({ options, preferences, onToggle }) {
  return (
    <ul className="newsletter-topics" role="group">
      {options.map((option) => {
        const selected = preferences.includes(option.value);
        return (
          <li key={option.value} className="newsletter-topics__item">
            <button
              type="button"
              className={`newsletter-topics__option${selected ? ' is-on' : ''}`}
              aria-pressed={selected}
              onClick={() => onToggle(option.value)}
            >
              <span className="newsletter-topics__box" aria-hidden="true" />
              <span className="newsletter-topics__label">
                <span className="cs">{option.cs}</span>
                <span className="en">{option.en}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
