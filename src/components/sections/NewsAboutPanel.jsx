import { Link } from "react-router-dom";

export function NewsAboutPanel({ filledCount }) {
  if (filledCount >= 3) return null;

  const wide = filledCount === 1;

  return (
    <div className={`rev d1 ${wide ? "lg:col-span-2 lg:self-center" : ""}`}>
      <Link
        to="/about"
        className={`news-about-aside group w-full text-inherit no-underline max-md:border-t max-md:border-separator max-md:pt-8 md:border-l md:border-accent md:pl-8 lg:pl-12${wide ? " news-about-aside--wide" : ""}`}
      >
        <div className="news-about-aside__top">
          <span className="news-about-aside__label mb-3 font-mono text-[10px] tracking-[2px] text-accent uppercase">
            <span className="cs">O spolku</span>
            <span className="en">About the organisation</span>
          </span>
          <h2 className="news-about-aside__title mb-3 mt-0 font-extrabold leading-[1.08] tracking-[-1.5px] text-dark">
            <span className="cs">Kdo stojí za CTRL</span>
            <span className="en">Who&apos;s behind CTRL</span>
          </h2>
          <div className="news-about-aside__body">
            <p className="news-about-aside__copy mb-5 mt-0 text-[15px] font-light leading-[1.8] text-mid">
              <span className="cs">
                Nezávislá youth platforma pro střední Evropu. Vzděláváme,
                propojujeme a budujeme digitální odolnost nové generace.
              </span>
              <span className="en">
                An independent youth platform for Central Europe. We educate,
                connect and build digital resilience for the next generation.
              </span>
            </p>
            <span className="news-about-aside__cta inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[1.5px] text-dark uppercase">
              <span className="cs">Přejít na O nás</span>
              <span className="en">Go to About</span>
              <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </div>
        <ul className="news-about-aside__facts m-0 mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-3">
          <li>
            <div className="font-extrabold tracking-[-0.5px] text-dark">Brno</div>
            <div className="mt-1 font-mono text-[10px] tracking-[1.5px] text-mid uppercase">
              <span className="cs">Sídlo spolku</span>
              <span className="en">Based in</span>
            </div>
          </li>
          <li>
            <div className="font-extrabold tracking-[-0.5px] text-dark">CEE</div>
            <div className="mt-1 font-mono text-[10px] tracking-[1.5px] text-mid uppercase">
              <span className="cs">Youth platform</span>
              <span className="en">Youth platform</span>
            </div>
          </li>
          <li>
            <div className="font-extrabold tracking-[-0.5px] text-dark">
              <span className="cs">Odolnost</span>
              <span className="en">Resilience</span>
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[1.5px] text-mid uppercase">
              <span className="cs">Digitální generace</span>
              <span className="en">Digital generation</span>
            </div>
          </li>
        </ul>
      </Link>
    </div>
  );
}
