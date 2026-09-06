import { Link } from 'react-router-dom';
import { formatNewsDate } from '../../data/news';
import { NewsInvite } from '../ui/NewsInvite';

function CharityLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function RichText({ value }) {
  if (typeof value === 'string') return value;

  return value.map((part, index) => {
    if (typeof part === 'string') return <span key={index}>{part}</span>;
    if (part.href) {
      return (
        <CharityLink key={index} href={part.href}>
          {part.text}
        </CharityLink>
      );
    }
    return <span key={index}>{part.text}</span>;
  });
}

function ArticleBlock({ block }) {
  if (block.type === 'h2') {
    return (
      <h2>
        <span className="cs">{block.cs}</span>
        <span className="en">{block.en}</span>
      </h2>
    );
  }

  if (block.type === 'quote') {
    return (
      <blockquote>
        <p className="cs">&bdquo;<RichText value={block.cs} />&ldquo;</p>
        <p className="en">&ldquo;<RichText value={block.en} />&rdquo;</p>
      </blockquote>
    );
  }

  return (
    <p>
      <span className="cs">
        <RichText value={block.cs} />
      </span>
      <span className="en">
        <RichText value={block.en} />
      </span>
    </p>
  );
}

export function NewsArticle({ article }) {
  return (
    <>
      <section className="bg-bg pt-[140px] max-lg:pt-[120px] max-sm:pt-[100px]">
        <div className="article-body !pt-0">
          <header className="mb-2">
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-mono text-[10px] tracking-[2px] text-accent uppercase">
                <span className="cs">{article.category.cs}</span>
                <span className="en">{article.category.en}</span>
              </span>
              <span className="font-mono text-[10px] text-mid">
                <span className="cs">{formatNewsDate(article.date, false)}</span>
                <span className="en">{formatNewsDate(article.date, true)}</span>
              </span>
            </div>
            <h1 className="mb-5 text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-dark">
              <span className="cs">{article.title.cs}</span>
              <span className="en">{article.title.en}</span>
            </h1>
            <p className="page-sub mb-0 max-w-none">
              <span className="cs">{article.excerpt.cs}</span>
              <span className="en">{article.excerpt.en}</span>
            </p>
          </header>

          {article.sections.map((block, index) => (
            <ArticleBlock key={`${block.type}-${index}`} block={block} />
          ))}

          <h2>
            <span className="cs">Pozvánka</span>
            <span className="en">Invitation</span>
          </h2>
          <NewsInvite
            src={article.invite}
            width={article.inviteWidth}
            height={article.inviteHeight}
            title={article.title}
          />
        </div>
      </section>

      <section className="sec bg-bg2 py-[60px]">
        <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-5">
          <div>
            <div className="cs mb-2 font-mono text-[11px] tracking-[2px] text-mid uppercase">
              Další aktuality
            </div>
            <div className="en mb-2 font-mono text-[11px] tracking-[2px] text-mid uppercase">
              More news
            </div>
          </div>
          <Link to="/news" className="btn-g">
            <span className="cs">← Všechny aktuality</span>
            <span className="en">← All news</span>
          </Link>
        </div>
      </section>
    </>
  );
}
