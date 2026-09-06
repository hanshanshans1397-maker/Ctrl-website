import { Link } from 'react-router-dom';
import { formatNewsDate } from '../../data/news';

export function NewsCard({ article }) {
  const href = `/news/${article.slug}`;

  return (
    <Link
      to={href}
      className="news-card group flex h-full flex-col overflow-hidden bg-card no-underline transition-colors duration-300 hover:bg-bg2"
    >
      <div
        className="news-card-banner relative overflow-hidden bg-dark"
        style={{ aspectRatio: `${article.inviteWidth} / ${article.inviteHeight}` }}
      >
        <img
          src={article.invite}
          alt=""
          width={article.inviteWidth}
          height={article.inviteHeight}
          className="news-card-banner__media absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] tracking-[2px] text-accent uppercase">
            <span className="cs">{article.category.cs}</span>
            <span className="en">{article.category.en}</span>
          </span>
          <span className="font-mono text-[10px] text-mid">
            <span className="cs">{formatNewsDate(article.date, false)}</span>
            <span className="en">{formatNewsDate(article.date, true)}</span>
          </span>
        </div>
        <h2 className="mb-3 text-[clamp(22px,1.8vw,28px)] font-extrabold leading-[1.12] tracking-[-0.8px] text-dark">
          <span className="cs">{article.title.cs}</span>
          <span className="en">{article.title.en}</span>
        </h2>
        <p className="mb-5 line-clamp-3 text-[14px] font-light leading-[1.75] text-mid">
          <span className="cs">{article.excerpt.cs}</span>
          <span className="en">{article.excerpt.en}</span>
        </p>
        <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[1.5px] text-dark uppercase">
          <span className="cs">Číst dál</span>
          <span className="en">Read more</span>
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
