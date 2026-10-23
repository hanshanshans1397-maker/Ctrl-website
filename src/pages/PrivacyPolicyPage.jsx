import { Link } from 'react-router-dom';
import { PRIVACY_POLICY } from '../data/privacyPolicy';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

function linkifyEmailsAndUrls(text) {
  const parts = text.split(/(ctrleurope@seznam\.cz|www\.uoou\.cz|ctrleurope\.com)/g);
  return parts.map((part, index) => {
    if (part === 'ctrleurope@seznam.cz') {
      return (
        <a key={index} href="mailto:ctrleurope@seznam.cz" className="privacy-inline-link">
          {part}
        </a>
      );
    }
    if (part === 'www.uoou.cz') {
      return (
        <a
          key={index}
          href="https://www.uoou.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="privacy-inline-link"
        >
          {part}
        </a>
      );
    }
    if (part === 'ctrleurope.com') {
      return (
        <Link key={index} to="/" className="privacy-inline-link">
          {part}
        </Link>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function PolicyBlock({ block, controller }) {
  if (block.type === 'p') {
    return <p className="privacy-p">{linkifyEmailsAndUrls(block.text)}</p>;
  }

  if (block.type === 'h3') {
    return <h3 className="privacy-h3">{block.text}</h3>;
  }

  if (block.type === 'ul') {
    return (
      <ul className="privacy-ul">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'dl') {
    return (
      <dl className="privacy-dl">
        {block.items.map((item) => (
          <div key={item.label} className="privacy-dl__row">
            <dt>{item.label}</dt>
            <dd>{linkifyEmailsAndUrls(item.text)}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (block.type === 'controller') {
    return (
      <address className="privacy-controller not-italic">
        <div className="font-semibold text-dark">{controller.name}</div>
        <div>Sídlo: {controller.address}</div>
        <div>IČO: {controller.ico}</div>
        <div>Zápis: {controller.registration}</div>
      </address>
    );
  }

  return null;
}

export default function PrivacyPolicyPage() {
  usePageHeroEntrance({ splitText: false });
  usePageMeta('privacy');

  const { title, intro, controller, sections, effectiveFrom } = PRIVACY_POLICY;

  return (
    <>
      <div
        className="page-hero relative overflow-hidden bg-dark flex min-h-[50vh] flex-col justify-end px-[52px] pt-40 pb-[80px] max-lg:px-6 max-lg:pb-16 max-sm:justify-center max-sm:px-5"
        id="hero"
      >
        <div className="inner mx-auto max-w-[1300px] max-sm:max-w-full relative z-[2]">
          <div className="section-head">
            <span className="page-label cs">Právní informace</span>
            <span className="page-label en">Legal</span>
            <h1 className="page-title cs text-bg max-w-[18ch]">
              Zásady ochrany osobních údajů
            </h1>
            <h1 className="page-title en text-bg max-w-[18ch]">Privacy Policy</h1>
          </div>
          <p className="page-sub cs mt-4 max-w-[520px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            Jak zpracováváme osobní údaje na webu a při našich projektech. Platné od{' '}
            {effectiveFrom}.
          </p>
          <p className="page-sub en mt-4 max-w-[520px] text-lg leading-[1.65] font-light text-[rgba(245,245,243,0.65)] max-sm:text-[15px]">
            How we process personal data on the website and in our projects. Effective from{' '}
            {effectiveFrom}. The binding text below is in Czech.
          </p>
        </div>
      </div>

      <section className="bg-bg px-[52px] py-16 max-lg:px-6 max-lg:py-12 max-sm:px-5 max-sm:py-10">
        <style>{`
          .privacy-doc {
            max-width: 720px;
            margin: 0 auto;
            color: rgba(13, 17, 23, 0.78);
            font-size: 15.5px;
            font-weight: 300;
            line-height: 1.7;
          }
          .privacy-doc h2 {
            margin: 2.4em 0 0.75em;
            font-size: clamp(20px, 2.2vw, 26px);
            font-weight: 700;
            letter-spacing: -0.4px;
            line-height: 1.25;
            color: #0d1117;
          }
          .privacy-doc h2:first-of-type { margin-top: 1.5em; }
          .privacy-lead {
            margin: 0 0 0.5em;
            font-size: 16.5px;
            line-height: 1.7;
            color: rgba(13, 17, 23, 0.72);
          }
          .privacy-h3 {
            margin: 1.6em 0 0.55em;
            font-size: 15px;
            font-weight: 650;
            letter-spacing: -0.2px;
            color: #0d1117;
          }
          .privacy-p { margin: 0 0 0.9em; }
          .privacy-controller {
            display: block;
            margin: 0 0 1.1em;
            padding: 1rem 1.1rem;
            border: 1px solid rgba(13, 17, 23, 0.08);
            background: rgba(13, 17, 23, 0.02);
            font-size: 14.5px;
            line-height: 1.65;
            color: rgba(13, 17, 23, 0.75);
          }
          .privacy-controller div + div { margin-top: 0.15em; }
          .privacy-dl { margin: 0 0 1em; }
          .privacy-dl__row { margin: 0 0 0.85em; }
          .privacy-dl__row dt {
            margin: 0 0 0.2em;
            font-family: var(--mono, ui-monospace, monospace);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: rgba(13, 17, 23, 0.45);
          }
          .privacy-dl__row dd { margin: 0; }
          .privacy-ul {
            margin: 0 0 1em;
            padding-left: 1.15em;
          }
          .privacy-ul li { margin: 0.25em 0; }
          .privacy-inline-link {
            color: #0d1117;
            font-weight: 500;
            text-decoration: underline;
            text-underline-offset: 2px;
            text-decoration-color: rgba(13, 17, 23, 0.28);
            transition: text-decoration-color 0.15s ease;
          }
          .privacy-inline-link:hover {
            text-decoration-color: rgba(13, 17, 23, 0.7);
          }
          .privacy-note {
            margin-top: 2.5em;
            padding-top: 1.25em;
            border-top: 1px solid rgba(13, 17, 23, 0.08);
            font-family: var(--mono, ui-monospace, monospace);
            font-size: 11px;
            letter-spacing: 0.4px;
            color: rgba(13, 17, 23, 0.4);
          }
        `}</style>

        <article className="privacy-doc">
          <p className="privacy-lead">{linkifyEmailsAndUrls(intro)}</p>

          {sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`privacy-${section.id}`}>
              <h2 id={`privacy-${section.id}`}>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <PolicyBlock
                  key={`${section.id}-${index}`}
                  block={block}
                  controller={controller}
                />
              ))}
            </section>
          ))}

          <p className="privacy-note">
            {title} · účinné od {effectiveFrom}
          </p>
        </article>
      </section>
    </>
  );
}
