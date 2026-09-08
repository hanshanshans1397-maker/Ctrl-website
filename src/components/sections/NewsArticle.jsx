import { Link } from 'react-router-dom';
import { formatNewsDate } from '../../data/news';
import { ArticleRouteMap } from '../ui/ArticleRouteMap';
import { NewsInvite } from '../ui/NewsInvite';
import { NewsTitleText } from '../ui/NewsTitleText';

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

function LocalePair({ cs, en, as: Tag = 'span' }) {
  return (
    <Tag>
      <span className="cs">{cs}</span>
      <span className="en">{en}</span>
    </Tag>
  );
}

function ArticleTable({ block }) {
  const colCount = block.head?.cs.length ?? block.rows[0]?.cs.length ?? 0;

  return (
    <div className="article-table-wrap">
      <table className="article-table">
        {block.head ? (
          <thead>
            <tr>
              {block.head.cs.map((label, index) => (
                <th key={index} scope="col">
                  <span className="cs">{label}</span>
                  <span className="en">{block.head.en[index]}</span>
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: colCount }, (_, index) => {
                const isLabel = index === 0;
                const Tag = isLabel ? 'th' : 'td';
                return (
                  <Tag key={index} {...(isLabel ? { scope: 'row' } : {})}>
                    <span className="cs">{row.cs[index]}</span>
                    <span className="en">{row.en[index]}</span>
                  </Tag>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleBlock({ block }) {
  if (block.type === 'h2') {
    return <LocalePair as="h2" cs={block.cs} en={block.en} />;
  }

  if (block.type === 'h3') {
    return <LocalePair as="h3" cs={block.cs} en={block.en} />;
  }

  if (block.type === 'table') {
    return <ArticleTable block={block} />;
  }

  if (block.type === 'route') {
    return <ArticleRouteMap platforms={block.platforms} />;
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
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-mono text-[13px] tracking-[2px] text-accent uppercase">
                <span className="cs">{article.category.cs}</span>
                <span className="en">{article.category.en}</span>
              </span>
              <span className="font-mono text-[13px] text-mid">
                <span className="cs">{formatNewsDate(article.date, false)}</span>
                <span className="en">{formatNewsDate(article.date, true)}</span>
              </span>
            </div>
            <h1 className="mb-12 text-[clamp(44px,6vw,80px)] font-extrabold leading-[1.05] tracking-[-2px] text-dark">
              <span className="cs">
                <NewsTitleText text={article.title.cs} />
              </span>
              <span className="en">
                <NewsTitleText text={article.title.en} />
              </span>
            </h1>
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
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-5 px-16 max-lg:px-6 max-sm:px-5">
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
