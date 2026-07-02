import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Cursor } from './Cursor';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PageTransition } from './PageTransition';
import { useLang } from '../context/LangContext';
import {
  useFormI18n,
  useNavSolid,
  useScrollReveal,
  useScrollToTop,
  useTickerClone,
} from '../hooks/usePageEffects';
import { useLenis } from '../hooks/useLenis';
import { usePremiumAnimations } from '../hooks/usePremiumAnimations';
import { prefersReducedMotion } from '../utils/motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useHeroParallax(pathname) {
  useEffect(() => {
    const img = document.querySelector('#hero > img');
    if (!img || window.innerWidth < 641) return;

    const st = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(img, { yPercent: self.progress * 22 });
      },
    });

    return () => st.kill();
  }, [pathname]);
}

function useMagneticButtons(pathname) {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const buttons = document.querySelectorAll('.btn-p, .btn-primary');
    const cleanups = [];

    buttons.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.28;
        gsap.to(btn, { x, y, duration: 0.4, ease: 'power3.out', overwrite: true });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'power3.out', overwrite: true });
      };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);
}

export function Layout() {
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const { isEn } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false);
  const darkHeroRoutes = ['/', '/summit', '/about', '/workshops', '/research', '/join', '/articles', '/apply'];
  const hasDarkHero = darkHeroRoutes.includes(pathname);
  const isNavSolid = useNavSolid(navRef);

  useLenis();
  useScrollToTop();
  useScrollReveal([pathname]);
  usePremiumAnimations(pathname);
  useTickerClone();
  useFormI18n(isEn);
  useHeroParallax(pathname);
  useMagneticButtons(pathname);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || prefersReducedMotion()) {
      navRef.current?.classList.add('is-ready');
      return undefined;
    }

    gsap.fromTo(
      nav,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.05 },
    );
    nav.classList.add('is-ready');
    return undefined;
  }, []);

  useEffect(() => {
    if (!hasDarkHero) {
      setDarkNav(false);
      return undefined;
    }

    const hero = document.getElementById('hero');
    if (!hero) return undefined;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        setDarkNav(window.scrollY <= hero.offsetHeight - 80);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hasDarkHero, pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Cursor />
      <Navbar
        navRef={navRef}
        menuOpen={menuOpen}
        darkNav={darkNav && !isNavSolid}
        isSolid={isNavSolid}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={closeMenu}
      />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
}
