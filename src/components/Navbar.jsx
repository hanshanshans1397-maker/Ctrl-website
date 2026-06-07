import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const NAV_ITEMS = [
  {
    to: '/about', cs: 'O nás', en: 'About', keep: true,
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
        <circle cx="5.5" cy="7" r="1.5" />
        <path d="M2.5 11.5c0-1.7 1.3-2.5 3-2.5s3 .8 3 2.5" strokeLinecap="round" />
        <path d="M10.5 7h3M10.5 9h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/articles', cs: 'Články', en: 'Articles', keep: true,
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
        <path d="M4 5.5l2 1.5-2 1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8.5h4" strokeLinecap="round" />
        <path d="M4 11.5h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/summit', label: 'Summit',
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <circle cx="8" cy="3" r="1.5" fill="currentColor" stroke="none" opacity="0.8" />
        <circle cx="2.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" opacity="0.8" />
        <circle cx="13.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" opacity="0.8" />
        <path d="M8 4.5L2.5 11M8 4.5L13.5 11M2.5 12.5h11" opacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/workshops', cs: 'Workshopy', en: 'Workshops',
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <rect x="1" y="1.5" width="14" height="10" rx="1.5" />
        <path d="M1 5h14" strokeWidth="0.9" opacity="0.35" />
        <path d="M3.5 7.5l2.5 2-2.5 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M8 9.5h4" strokeLinecap="round" strokeWidth="1.1" opacity="0.6" />
        <path d="M5.5 14.5h5M8 11.5v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/research', cs: 'Výzkum', en: 'Research',
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <rect x="1.5" y="1.5" width="7" height="7" rx="1" />
        <path d="M3 1.5V0M5.5 1.5V0M8 1.5V0M3 8.5V10M5.5 8.5V10M8 8.5V10M1.5 3H0M1.5 5.5H0M1.5 8H0M8.5 3H10M8.5 5.5H10M8.5 8H10" strokeLinecap="round" strokeWidth="1" opacity="0.4" />
        <circle cx="12" cy="12" r="3" />
        <path d="M14.5 14.5L16 16" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function NavLabel({ item }) {
  if (item.label) return item.label;
  return (
    <>
      <span className="cs">{item.cs}</span>
      <span className="en">{item.en}</span>
    </>
  );
}

export function Navbar({ navRef, menuOpen, darkNav, isSolid, onToggleMenu, onCloseMenu }) {
  const { pathname } = useLocation();
  const { langLabel, toggleLang } = useLang();

  const isActive = (to) => pathname === to || (to !== '/' && pathname.startsWith(to));

  const navLinkClass = (item) => {
    const active = isActive(item.to);
    const base =
      'nav-link-u text-[13px] font-normal no-underline transition-colors duration-200 tracking-wide max-lg:hidden';
    if (darkNav) {
      return `${base} ${active ? 'text-bg font-medium nav-active' : 'text-[rgba(245,245,243,0.6)] hover:text-bg'}`;
    }
    return `${base} ${active ? 'text-dark font-medium nav-active' : 'text-[rgba(11,16,32,0.55)] hover:text-dark'}`;
  };

  return (
    <>
      <nav
        id="nav"
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] flex h-16 items-center justify-between border-b px-[52px] transition-[background,border-color] duration-400 max-lg:px-6 max-lg:bg-[rgba(245,245,243,0.97)] max-lg:backdrop-blur-[20px] max-lg:border-light max-[480px]:h-14 max-[480px]:px-4 ${
          isSolid
            ? 'border-light bg-[rgba(245,245,243,0.94)] backdrop-blur-[20px]'
            : 'lg:border-transparent'
        }`}
      >
        <Link
          to="/"
          className="flex items-center no-underline"
          onClick={onCloseMenu}
        >
          <img
            src="/ctrl-logo.png"
            alt="CTRL Europe"
            className={`h-7 w-auto max-[480px]:h-6 transition-[filter] duration-300 ${darkNav ? 'lg:brightness-0 lg:invert' : ''}`}
          />
        </Link>
        <div className="flex items-center gap-7 max-[480px]:gap-3">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={navLinkClass(item)} onClick={onCloseMenu}>
              <NavLabel item={item} />
            </Link>
          ))}
          <button
            type="button"
            className={`border px-2.5 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[1.5px] transition-all duration-200 max-[480px]:px-2 max-[480px]:py-1 max-[480px]:text-[10px] ${
              darkNav
                ? 'border-[rgba(245,245,243,0.2)] text-[rgba(245,245,243,0.6)] hover:border-[rgba(245,245,243,0.4)] lg:border-[rgba(245,245,243,0.2)] max-lg:border-light max-lg:text-mid max-lg:hover:border-[rgba(11,16,32,0.2)] max-lg:hover:text-dark'
                : 'border-light text-mid hover:border-[rgba(11,16,32,0.2)] hover:text-dark'
            }`}
            onClick={toggleLang}
          >
            {langLabel}
          </button>
          <Link
            to="/join"
            className={`bg-dark px-[18px] py-2 text-[12px] font-semibold tracking-wide text-bg no-underline transition-colors duration-200 hover:bg-accent max-lg:hidden max-[480px]:px-3.5 max-[480px]:text-[10px] ${
              isActive('/join') ? 'ring-1 ring-accent/30' : ''
            }`}
          >
            <span className="cs">Zapojit se</span>
            <span className="en">Join us</span>
          </Link>
          <button
            type="button"
            className={`relative z-[1001] ml-2 flex flex-col gap-[5px] border-none bg-transparent p-2 lg:hidden max-[480px]:ml-0 max-[480px]:p-2.5 ${menuOpen ? 'open' : ''}`}
            aria-label="Menu"
            onClick={onToggleMenu}
          >
            <span className={`block h-0.5 w-[22px] origin-center transition-all duration-300 bg-dark ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-[22px] origin-center transition-all duration-300 bg-dark ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`block h-0.5 w-[22px] origin-center transition-all duration-300 bg-dark ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] flex w-screen flex-col justify-center bg-bg px-8 py-[52px] transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] lg:hidden ${
          menuOpen ? 'pointer-events-auto translate-y-0' : 'pointer-events-none -translate-y-full'
        }`}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-[1001] flex h-9 w-9 items-center justify-center border-none bg-transparent p-0 text-[22px] leading-none text-dark opacity-50 transition-opacity duration-200 hover:opacity-100"
          aria-label="Close menu"
          onClick={onCloseMenu}
        >
          ✕
        </button>
        <Link
          to="/"
          className={`flex items-center gap-3 border-b border-light py-3 text-[clamp(28px,8vw,48px)] font-extrabold tracking-[-1.5px] no-underline transition-[color,padding-left] duration-300 hover:pl-2.5 hover:text-accent ${isActive('/') ? 'text-accent' : 'text-dark'}`}
          onClick={onCloseMenu}
        >
          <span className="cs">Domů</span>
          <span className="en">Home</span>
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 border-b border-light py-3 text-[clamp(28px,8vw,48px)] font-extrabold tracking-[-1.5px] no-underline transition-[color,padding-left] duration-300 hover:pl-2.5 hover:text-accent ${isActive(item.to) ? 'text-accent' : 'text-dark'}`}
            onClick={onCloseMenu}
          >
            {item.icon('w-7 h-7 shrink-0 opacity-50')}
            <NavLabel item={item} />
          </Link>
        ))}
        <Link
          to="/join"
          className={`menu-cta${isActive('/join') ? ' is-active' : ''}`}
          onClick={onCloseMenu}
        >
          <span className="cs">Zapojit se →</span>
          <span className="en">Join us →</span>
        </Link>
      </div>
    </>
  );
}
