import { CONTACT_DIRECTORY, ORGANIZATION_CONTACT } from "../../data/contacts";

function telHref(phone) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.2" />
      <path d="M2 4.5 8 9l6-4.5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M3.2 2.8h2.1l1.1 2.6-1.3 1.1a8.2 8.2 0 0 0 4.4 4.4l1.1-1.3 2.6 1.1v2.1c0 .5-.4 1-1 1A11.2 11.2 0 0 1 2.2 3.8c0-.6.5-1 1-1Z" />
    </svg>
  );
}

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-start gap-2.5 rounded-sm text-[14px] font-medium leading-snug tracking-[-0.2px] text-dark no-underline transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}

function PersonContact({ person, delay }) {
  return (
    <article className={`rev ${delay} h-full`}>
      <div className="contact-card flex h-full flex-col border border-[rgba(11,16,32,0.08)] bg-card px-6 py-7 sm:px-7 sm:py-8">
        <div className="mb-5 flex items-center gap-3">
          {person.photo ? (
            <img
              src={person.photo}
              alt=""
              className="h-11 w-11 shrink-0 rounded-full object-cover object-[center_18%] outline outline-1 outline-[oklch(0_0_0/0.1)]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light font-mono text-[12px] font-bold tracking-[0.5px] text-mid">
              {person.initials}
            </span>
          )}
          <div className="min-w-0 font-mono text-[10px] leading-[1.45] tracking-[1.6px] text-accent uppercase">
            <span className="cs">{person.roleCs}</span>
            <span className="en">{person.roleEn}</span>
          </div>
        </div>
        <h3 className="text-balance text-[22px] leading-[1.15] font-semibold tracking-[-0.4px] text-dark">
          {person.name}
        </h3>
        <p className="cs mt-3 text-pretty text-[14px] leading-[1.7] font-light text-mid">
          {person.scopeCs}
        </p>
        <p className="en mt-3 text-pretty text-[14px] leading-[1.7] font-light text-mid">
          {person.scopeEn}
        </p>
        <div className="mt-6 flex flex-1 flex-col justify-end">
          <div className="flex flex-col gap-2.5 border-t border-separator pt-5">
            <ContactLink href={`mailto:${person.email}`}>
              <IconMail />
              <span className="min-w-0 break-all">{person.email}</span>
            </ContactLink>
            <ContactLink href={telHref(person.phone)}>
              <IconPhone />
              <span className="tabular-nums tracking-[0.2px]">{person.phone}</span>
            </ContactLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ContactDirectory() {
  return (
    <section
      id="contacts"
      className="sec layer-band layer-band--contacts scroll-mt-24 border-b border-separator bg-bg py-[120px] px-[52px] max-lg:py-20 max-lg:px-6 max-[480px]:py-16 max-[480px]:px-5"
    >
      <div className="inner mx-auto max-w-[1300px]">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Kontakt</span>
            <span className="en">Contact</span>
          </span>
          <h2 className="section-title text-balance">
            <span className="cs">
              Napište tomu, <em>koho hledáte.</em>
            </span>
            <span className="en">
              Write to the <em>right person.</em>
            </span>
          </h2>
        </div>

        <div className="rev d1 mb-3">
          <a
            href={`mailto:${ORGANIZATION_CONTACT.email}`}
            className="contact-card group flex flex-col gap-6 border border-[rgba(11,16,32,0.08)] bg-card px-6 py-7 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-8 sm:py-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-[520px]">
              <div className="mb-3 font-mono text-[10px] tracking-[1.8px] text-accent uppercase">
                <span className="cs">{ORGANIZATION_CONTACT.roleCs}</span>
                <span className="en">{ORGANIZATION_CONTACT.roleEn}</span>
              </div>
              <p className="cs text-pretty text-[15px] leading-[1.7] font-light text-mid">
                {ORGANIZATION_CONTACT.scopeCs}
              </p>
              <p className="en text-pretty text-[15px] leading-[1.7] font-light text-mid">
                {ORGANIZATION_CONTACT.scopeEn}
              </p>
            </div>
            <div className="inline-flex items-center gap-2.5 text-[clamp(16px,1.6vw,22px)] leading-snug font-semibold tracking-[-0.4px] text-dark transition-colors duration-200 group-hover:text-accent">
              <IconMail />
              <span className="break-all">{ORGANIZATION_CONTACT.email}</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
          {CONTACT_DIRECTORY.map((person, index) => (
            <PersonContact
              key={person.id}
              person={person}
              delay={`d${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
