import { useId } from 'react';

function ArticleVideo({ item }) {
  const captionId = useId();

  return (
    <figure>
      <video
        controls
        playsInline
        preload="metadata"
        poster={item.poster}
        width={item.width}
        height={item.height}
        aria-labelledby={captionId}
      >
        <source src={item.src} type="video/mp4" />
      </video>
      <figcaption id={captionId}>
        <span className="cs">{item.caption.cs}</span>
        <span className="en">{item.caption.en}</span>
      </figcaption>
    </figure>
  );
}

export function ArticleVideos({ items }) {
  return (
    <div className="article-videos">
      {items.map((item) => (
        <ArticleVideo key={item.src} item={item} />
      ))}
    </div>
  );
}
