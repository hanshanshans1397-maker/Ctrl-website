import { useId, useState } from 'react';

export function ArticleRouteMap({ platforms }) {
  const [activeId, setActiveId] = useState(platforms[0]?.id);
  const tablistId = useId();
  const active = platforms.find((platform) => platform.id === activeId) ?? platforms[0];

  if (!active) return null;

  return (
    <figure className="article-route">
      <div
        className="article-route__tabs"
        role="tablist"
        aria-labelledby={tablistId}
      >
        <span id={tablistId} className="sr-only">
          <span className="cs">Zobrazení trasy</span>
          <span className="en">Route preview</span>
        </span>
        {platforms.map((platform) => {
          const selected = platform.id === active.id;
          return (
            <button
              key={platform.id}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className="article-route__tab"
              onClick={() => setActiveId(platform.id)}
            >
              <span className="cs">{platform.label.cs}</span>
              <span className="en">{platform.label.en}</span>
            </button>
          );
        })}
      </div>
      <div className="article-route__frame" role="tabpanel">
        <iframe
          key={active.id}
          src={active.embed}
          title={active.title?.cs ?? active.label.cs}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="fullscreen"
        />
      </div>
      <figcaption className="article-route__caption">
        {platforms.map((platform, index) => (
          <span key={platform.id}>
            {index > 0 ? <span aria-hidden="true"> · </span> : null}
            <a href={platform.href} target="_blank" rel="noopener noreferrer">
              <span className="cs">{platform.open.cs}</span>
              <span className="en">{platform.open.en}</span>
            </a>
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
