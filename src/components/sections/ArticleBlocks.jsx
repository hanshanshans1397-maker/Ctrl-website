function CharityLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function ArticleFacts({ block }) {
  return (
    <dl className="article-facts">
      {block.items.map((item, index) => (
        <div key={index} className="article-facts__item">
          <dt className="article-facts__label">
            <span className="cs">{item.label.cs}</span>
            <span className="en">{item.label.en}</span>
          </dt>
          <dd className="article-facts__value">
            <span className="cs">{item.value.cs}</span>
            <span className="en">{item.value.en}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ArticleTimeline({ block }) {
  return (
    <ol className="article-timeline">
      {block.items.map((item, index) => (
        <li key={index} className="article-timeline__item">
          <time className="article-timeline__time">{item.time}</time>
          <span className="article-timeline__copy">
            <span className="cs">{item.cs}</span>
            <span className="en">{item.en}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function ArticleOrgs({ block }) {
  return (
    <div className="article-orgs">
      <div className="article-orgs__grid">
        {block.items.map((item, index) => {
          const isPlaceholder = Boolean(item.placeholder);
          const monogram = isPlaceholder
            ? '—'
            : (item.cs || item.en || '?').trim().charAt(0).toUpperCase();

          const inner = (
            <>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt=""
                  className="article-orgs__logo"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="article-orgs__mark" aria-hidden="true">
                  {monogram}
                </span>
              )}
              <span className="article-orgs__name">
                <span className="cs">{item.cs}</span>
                <span className="en">{item.en}</span>
              </span>
            </>
          );

          const className = `article-orgs__card${
            isPlaceholder ? ' article-orgs__card--placeholder' : ''
          }`;

          if (item.href) {
            return (
              <CharityLink key={index} href={item.href} className={className}>
                {inner}
              </CharityLink>
            );
          }

          return (
            <div key={index} className={className}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
