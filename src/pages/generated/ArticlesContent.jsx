export function ArticlesPageContent() {
  return (
    <>
      <div className="page-hero max-sm:!pt-16 max-[480px]:!pt-14">
        <div className="inner max-sm:px-5 max-sm:pb-8">
          <span className="page-label cs">Obsah</span>
          <span className="page-label en">Content</span>
          <h1 className="page-title cs">Články a reporty</h1>
          <h1 className="page-title en">Articles &amp; Reports</h1>
          <p className="page-sub cs">Naše analýzy, reporty a výzkumné články.</p>
          <p className="page-sub en">Our analyses, reports and research articles.</p>
        </div>
      </div>

      <section className="sec bg-bg">
        <div className="inner">
          <div className="rev mb-10">
            <p className="font-mono text-[11px] tracking-[3px] uppercase text-mid cs">Články se chystají — brzy zde najdete naše analýzy, reporty a výzkumné texty.</p>
            <p className="font-mono text-[11px] tracking-[3px] uppercase text-mid en">Articles coming soon — our analyses, reports and research pieces will be published here shortly.</p>
          </div>
          <div className="grid grid-cols-3 gap-px bg-light max-lg:grid-cols-2 max-[480px]:grid-cols-1">

            <div className="rev d1 bg-bg2 flex flex-col">
              <div className="h-[200px] animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
              <div className="flex flex-col gap-4 p-7">
                <div className="h-2.5 w-16 animate-pulse bg-light"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-[22px] w-full animate-pulse bg-light"></div>
                  <div className="h-[22px] w-3/4 animate-pulse bg-light"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-5/6 animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-2/3 animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                </div>
                <div className="h-2.5 w-20 animate-pulse bg-[rgba(11,16,32,0.06)] mt-2"></div>
              </div>
            </div>

            <div className="rev d2 bg-bg2 flex flex-col">
              <div className="h-[200px] animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
              <div className="flex flex-col gap-4 p-7">
                <div className="h-2.5 w-20 animate-pulse bg-light"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-[22px] w-full animate-pulse bg-light"></div>
                  <div className="h-[22px] w-1/2 animate-pulse bg-light"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-4/5 animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-3/5 animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                </div>
                <div className="h-2.5 w-24 animate-pulse bg-[rgba(11,16,32,0.06)] mt-2"></div>
              </div>
            </div>

            <div className="rev d3 bg-bg2 flex flex-col">
              <div className="h-[200px] animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
              <div className="flex flex-col gap-4 p-7">
                <div className="h-2.5 w-14 animate-pulse bg-light"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-[22px] w-full animate-pulse bg-light"></div>
                  <div className="h-[22px] w-5/6 animate-pulse bg-light"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-full animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                  <div className="h-3 w-1/2 animate-pulse bg-[rgba(11,16,32,0.06)]"></div>
                </div>
                <div className="h-2.5 w-16 animate-pulse bg-[rgba(11,16,32,0.06)] mt-2"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="ticker-wrap-outer">
        <div className="ticker-inner" id="ticker">
          <div className="ticker-item">CTRL Europe</div>
          <div className="ticker-item">CEE Youth Platform</div>
          <div className="ticker-item cs">Digitální odolnost</div>
          <div className="ticker-item en">Digital Resilience</div>
          <div className="ticker-item">CTRL Summit 2026</div>
          <div className="ticker-item">Erasmus+</div>
          <div className="ticker-item cs">AI povědomí</div>
          <div className="ticker-item en">AI Awareness</div>
          <div className="ticker-item cs">Mediální gramotnost</div>
          <div className="ticker-item en">Media Literacy</div>
          <div className="ticker-item">Brno</div>
        </div>
      </div>
    </>
  );
}
