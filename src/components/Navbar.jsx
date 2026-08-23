import { useEffect, useRef, useState } from 'react';
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
    to: '/news', cs: 'Aktuality', en: 'News',
    icon: (cls) => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={cls}>
        <path d="M2 3.5h8.5l3 3V13.5H2V3.5z" strokeLinejoin="round" />
        <path d="M10.5 3.5V6.5H13.5" strokeLinejoin="round" />
        <path d="M5 9h6M5 11h4" strokeLinecap="round" />
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
];

const JOIN_OPTIONS = [
  {
    to: '/join',
    cs: 'Škola nebo organizace',
    en: 'School or organization',
    descCs: 'Workshopy, partnerství a společné projekty pro vaši instituci',
    descEn: 'Workshops, partnerships and joint projects for your institution',
  },
  {
    to: '/apply',
    cs: 'Staň se členem',
    en: 'Become a member',
    descCs: 'Vyber si buňku a připoj se k síti 650+ mladých lidí',
    descEn: 'Pick a cell and join a network of 650+ young people',
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

function JoinOptionLabel({ option, variant = 'title' }) {
  if (variant === 'desc') {
    return (
      <>
        <span className="cs">{option.descCs}</span>
        <span className="en">{option.descEn}</span>
      </>
    );
  }
  return (
    <>
      <span className="cs">{option.cs}</span>
      <span className="en">{option.en}</span>
    </>
  );
}

export function Navbar({ navRef, menuOpen, darkNav, isSolid, onToggleMenu, onCloseMenu }) {
  const { pathname } = useLocation();
  const { langLabel, toggleLang } = useLang();
  const [joinOpen, setJoinOpen] = useState(false);
  const [mobileJoinOpen, setMobileJoinOpen] = useState(false);
  const joinRef = useRef(null);

  const isActive = (to) => pathname === to || (to !== '/' && pathname.startsWith(to));
  const isJoinActive = isActive('/join') || isActive('/apply');

  useEffect(() => {
    setJoinOpen(false);
    setMobileJoinOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!joinOpen) return undefined;

    const onPointerDown = (e) => {
      if (joinRef.current && !joinRef.current.contains(e.target)) {
        setJoinOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setJoinOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [joinOpen]);

  const closeAll = () => {
    setJoinOpen(false);
    setMobileJoinOpen(false);
    onCloseMenu();
  };

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
        className={`fixed top-0 left-0 right-0 z-[100] flex h-16 items-center justify-between border-b px-[52px] transition-[background,border-color] duration-400 max-lg:px-6 max-lg:bg-[rgba(245,245,243,0.98)] max-lg:border-separator max-[480px]:h-14 max-[480px]:px-4 ${
          isSolid
            ? 'border-separator lg:bg-[rgba(245,245,243,0.92)] lg:backdrop-blur-[20px]'
            : 'lg:border-transparent'
        }`}
      >
        <Link
          to="/"
          className="flex items-center no-underline"
          onClick={closeAll}
        >
          <img
            src="/ctrl-logo.png"
            alt="CTRL Europe"
            className={`h-7 w-auto max-[480px]:h-6 transition-[filter] duration-300 ${darkNav ? 'lg:brightness-0 lg:invert' : ''}`}
          />
        </Link>
        <div className="flex items-center gap-7 max-[480px]:gap-3">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={navLinkClass(item)} onClick={closeAll}>
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
          <div className="join-dropdown relative max-lg:hidden" ref={joinRef}>
            <button
              type="button"
              className={`join-dropdown-trigger bg-dark px-[18px] py-2 text-[12px] font-semibold tracking-wide text-bg transition-colors duration-200 hover:bg-accent max-[480px]:px-3.5 max-[480px]:text-[10px] ${
                isJoinActive ? 'ring-1 ring-accent/30' : ''
              }`}
              aria-expanded={joinOpen}
              aria-haspopup="true"
              onClick={() => setJoinOpen((v) => !v)}
            >
              <span className="cs">Zapojit se</span>
              <span className="en">Join us</span>
              <span className="join-dropdown-chevron" aria-hidden="true" />
            </button>
            {joinOpen && (
              <div className="join-dropdown-panel" role="menu">
                {JOIN_OPTIONS.map((option) => (
                  <Link
                    key={option.to}
                    to={option.to}
                    role="menuitem"
                    className={`join-dropdown-item${isActive(option.to) ? ' is-active' : ''}`}
                    onClick={() => setJoinOpen(false)}
                  >
                    <span className="join-dropdown-item-title">
                      <JoinOptionLabel option={option} />
                    </span>
                    <span className="join-dropdown-item-desc">
                      <JoinOptionLabel option={option} variant="desc" />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          menuOpen ? 'mobile-menu-open pointer-events-auto translate-y-0' : 'pointer-events-none -translate-y-full'
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
          className={`mobile-menu-link flex items-center gap-3 border-b border-separator py-3 text-[clamp(28px,8vw,48px)] font-extrabold tracking-[-1.5px] no-underline transition-[color,padding-left] duration-300 hover:pl-2.5 hover:text-accent ${isActive('/') ? 'text-accent' : 'text-dark'}`}
          style={{ animationDelay: '0.05s' }}
          onClick={closeAll}
        >
          <span className="cs">Domů</span>
          <span className="en">Home</span>
        </Link>
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            className={`mobile-menu-link flex items-center gap-3 border-b border-separator py-3 text-[clamp(28px,8vw,48px)] font-extrabold tracking-[-1.5px] no-underline transition-[color,padding-left] duration-300 hover:pl-2.5 hover:text-accent ${isActive(item.to) ? 'text-accent' : 'text-dark'}`}
            style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            onClick={closeAll}
          >
            {item.icon('w-7 h-7 shrink-0 opacity-50')}
            <NavLabel item={item} />
          </Link>
        ))}
        <div className="mt-7">
          <button
            type="button"
            className={`menu-cta flex w-full items-center justify-between text-left${isJoinActive ? ' is-active' : ''}`}
            aria-expanded={mobileJoinOpen}
            onClick={() => setMobileJoinOpen((v) => !v)}
          >
            <span className="cs">Zapojit se</span>
            <span className="en">Join us</span>
            <span className="join-dropdown-chevron join-dropdown-chevron-light" aria-hidden="true" />
          </button>
          {mobileJoinOpen && (
            <div className="join-mobile-options">
              {JOIN_OPTIONS.map((option) => (
                <Link
                  key={option.to}
                  to={option.to}
                  className={`join-mobile-option${isActive(option.to) ? ' is-active' : ''}`}
                  onClick={closeAll}
                >
                  <span className="join-mobile-option-title">
                    <JoinOptionLabel option={option} />
                  </span>
                  <span className="join-mobile-option-desc">
                    <JoinOptionLabel option={option} variant="desc" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
