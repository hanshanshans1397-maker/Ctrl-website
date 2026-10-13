export function NewsletterTopicPicker({
  options,
  preferences,
  onToggle,
  labelledBy,
  describedBy,
  invalid = false,
}) {
  return (
    <ul
      className="newsletter-topics"
      role="group"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      data-invalid={invalid ? 'true' : undefined}
    >
      {options.map((option) => {
        const selected = preferences.includes(option.value);
        const id = `newsletter-topic-${option.value}`;
        return (
          <li key={option.value} className="newsletter-topics__item">
            <label
              htmlFor={id}
              className={`newsletter-topics__option${selected ? ' is-on' : ''}`}
            >
              <input
                id={id}
                type="checkbox"
                name="preferences"
                value={option.value}
                checked={selected}
                onChange={() => onToggle(option.value)}
                className="newsletter-topics__input"
              />
              <span className="newsletter-topics__box" aria-hidden="true" />
              <span className="newsletter-topics__text">
                <span className="newsletter-topics__label">
                  <span className="cs">{option.cs}</span>
                  <span className="en">{option.en}</span>
                </span>
                <span className="newsletter-topics__desc">
                  <span className="cs">{option.descCs}</span>
                  <span className="en">{option.descEn}</span>
                </span>
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
