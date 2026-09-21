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
      {block.items.map((item, index) => {
        const timeCs = typeof item.time === 'string' ? item.time : item.time.cs;
        const timeEn = typeof item.time === 'string' ? item.time : item.time.en;

        return (
          <li key={index} className="article-timeline__item">
            <time className="article-timeline__time">
              <span className="cs">{timeCs}</span>
              <span className="en">{timeEn}</span>
            </time>
            <span className="article-timeline__copy">
              <span className="cs">{item.cs}</span>
              <span className="en">{item.en}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function OrgCard({ item }) {
  const isPlaceholder = Boolean(item.placeholder);
  const monogram = item.mark
    || (isPlaceholder
      ? '—'
      : (item.cs || item.en || '?').trim().charAt(0).toUpperCase());

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
        <span className={`article-orgs__mark${monogram.length > 1 ? ' article-orgs__mark--wide' : ''}`} aria-hidden="true">
          {monogram}
        </span>
      )}
      <span className="article-orgs__copy">
        <span className="article-orgs__name">
          <span className="cs">{item.cs}</span>
          <span className="en">{item.en}</span>
        </span>
        {item.detail ? (
          <span className="article-orgs__detail">
            <span className="cs">{item.detail.cs}</span>
            <span className="en">{item.detail.en}</span>
          </span>
        ) : null}
      </span>
    </>
  );

  const className = `article-orgs__card${
    isPlaceholder ? ' article-orgs__card--placeholder' : ''
  }`;

  if (item.href) {
    return (
      <CharityLink href={item.href} className={className}>
        {inner}
      </CharityLink>
    );
  }

  return (
    <div className={className}>
      {inner}
    </div>
  );
}

function OrgGroup({ group }) {
  return (
    <div className="article-orgs__group">
      {group.label ? (
        <div className="article-orgs__label">
          <span className="cs">{group.label.cs}</span>
          <span className="en">{group.label.en}</span>
        </div>
      ) : null}
      <div className="article-orgs__grid">
        {group.items.map((item, index) => (
          <OrgCard key={item.id || `${item.cs}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function ArticleOrgs({ block }) {
  const groups = block.groups ?? [{ id: 'default', items: block.items ?? [] }];

  return (
    <div className="article-orgs">
      {groups.map((group, index) => (
        <OrgGroup key={group.id || index} group={group} />
      ))}
    </div>
  );
}
