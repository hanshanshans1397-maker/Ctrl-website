import { Link } from 'react-router-dom';

export function ArticleTemplatePageContent() {
  return (
    <>
      <section className="sec bg-bg !py-0">
        <div className="article-body">

          <h2 className="cs">První nadpis sekce</h2>
          <h2 className="en">First section heading</h2>
          <p className="cs">Text první sekce. Zde napište obsah článku.</p>
          <p className="en">First section text. Write the article content here.</p>

          <blockquote><p className="cs">&bdquo;Klíčový citát z článku, který chcete zdůraznit.&ldquo;</p><p className="en">&ldquo;Key quote from the article you want to highlight.&rdquo;</p></blockquote>

          <h2 className="cs">Druhá sekce</h2>
          <h2 className="en">Second section</h2>
          <p className="cs">Další text článku...</p>
          <p className="en">More article text...</p>

          <h3 className="cs">Podsekce</h3>
          <h3 className="en">Subsection</h3>
          <p className="cs">Text podsekce...</p>
          <p className="en">Subsection text...</p>

        </div>
      </section>

      <section className="sec bg-bg2 py-[60px]">
        <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-5">
          <div>
            <div className="cs mb-2 font-mono text-[11px] tracking-[2px] text-mid uppercase">Další aktuality</div>
            <div className="en mb-2 font-mono text-[11px] tracking-[2px] text-mid uppercase">More news</div>
          </div>
          <Link to="/news" className="btn-g"><span className="cs">← Všechny aktuality</span><span className="en">← All news</span></Link>
        </div>
      </section>
    </>
  );
}
