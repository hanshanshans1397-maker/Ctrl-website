import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  EASE_PREMIUM,
  prefersReducedMotion,
  shouldUseLiteMotion,
  revealGsapElements,
  applyMotionBodyClass,
} from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const BLOCK_ITEM_SELECTORS = [
  '.what-card',
  '.number-card',
  '.board-grid > *',
  '.val-grid > *',
  '.join-grid > *',
  '.offer-card',
];

const BLOCK_ITEM_QUERY = BLOCK_ITEM_SELECTORS.join(', ');

const GRID_SELECTORS = '.what-grid, .numbers-grid, .board-grid, .val-grid, .join-grid';

const DIRECT_ITEM_SELECTORS = ['.what-card', '.number-card', '.offer-card'];

function findGridContainer(head) {
  const sibling = head.nextElementSibling;
  if (!sibling) return null;
  if (sibling.matches(GRID_SELECTORS)) return sibling;
  if (sibling.querySelector(BLOCK_ITEM_QUERY)) return sibling;
  return null;
}

function prepareGsap(el) {
  el.classList.add('anim-gsap');
}

function collectBlockItems(head) {
  const items = [];
  let sibling = head.nextElementSibling;

  while (sibling) {
    if (sibling.matches('.section-head')) break;

    if (DIRECT_ITEM_SELECTORS.some((sel) => sibling.matches(sel))) {
      items.push(sibling);
    } else {
      sibling.querySelectorAll(BLOCK_ITEM_QUERY).forEach((el) => items.push(el));
    }

    sibling = sibling.nextElementSibling;
  }

  return [...new Set(items)];
}

function getStrokeElements(svg) {
  return [...svg.querySelectorAll('path, circle, rect, line, ellipse, polyline')].filter(
    (el) => el.getAttribute('stroke') || Number(el.getAttribute('stroke-width')) > 0,
  );
}

function prepareSvgIcon(svg) {
  getStrokeElements(svg).forEach((el) => {
    const len = el.getTotalLength?.() ?? 48;
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
  });
  gsap.set(svg, { opacity: 0, scale: 0.88, transformOrigin: 'left center' });
}

function addIconDraw(tl, svg, position) {
  const strokes = getStrokeElements(svg);
  tl.to(svg, { opacity: 1, scale: 1, duration: 0.45, ease: EASE_PREMIUM }, position);
  strokes.forEach((el, i) => {
    tl.to(
      el,
      { strokeDashoffset: 0, duration: 0.65, ease: 'power2.inOut' },
      position + 0.05 + i * 0.025,
    );
  });
}

function collectTrailingSiblings(head, root) {
  if (!root) return [];
  const extras = [];
  let sibling = head.nextElementSibling;
  while (sibling) {
    extras.push(sibling);
    sibling = sibling.nextElementSibling;
  }
  return extras;
}

function sectionBlockReveal() {
  const heads = document.querySelectorAll('.section-head');
  const processedRoots = new Set();

  heads.forEach((head) => {
    const contentRoot =
      head.parentElement?.classList.contains('rev') && head.parentElement !== head
        ? head.parentElement
        : null;

    if (contentRoot && processedRoots.has(contentRoot)) return;
    if (contentRoot) processedRoots.add(contentRoot);

    const items = collectBlockItems(head);
    const label = head.querySelector('.section-label, .page-label, .sec-label');
    const title = head.querySelector('.section-title, .sec-title, .page-title, h2');
    const titleEm = title?.querySelector('em');
    const prose = head.querySelector('blockquote, .section-lede');
    const grid = findGridContainer(head);
    const trailing = collectTrailingSiblings(head, contentRoot);

    if (!label && !title && !prose && !items.length && !trailing.length) return;

    const trigger = head.closest('section') || head.closest('[class*="sec-"]') || contentRoot || head.parentElement;
    prepareGsap(head);
    items.forEach(prepareGsap);
    if (contentRoot) prepareGsap(contentRoot);
    trailing.forEach(prepareGsap);
    gsap.set(head, { opacity: 1, y: 0, filter: 'blur(0px)' });
    if (contentRoot) gsap.set(contentRoot, { opacity: 1, y: 0, filter: 'blur(0px)' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top 72%',
        once: true,
      },
    });

    if (label) gsap.set(label, { opacity: 0, x: -18, filter: 'blur(4px)' });
    if (title) {
      gsap.set(title, { opacity: 0, y: 36, filter: 'blur(8px)' });
      if (titleEm) gsap.set(titleEm, { opacity: 0, y: 12 });
    }
    if (prose) gsap.set(prose, { opacity: 0, y: 28, filter: 'blur(6px)' });
    if (grid) gsap.set(grid, { opacity: 1, clipPath: 'inset(0 100% 0 0)' });
    trailing.forEach((el) => gsap.set(el, { opacity: 0, y: 24, filter: 'blur(4px)' }));

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 52, filter: 'blur(5px)' });
      const num = item.querySelector('.what-num');
      if (num) gsap.set(num, { opacity: 0, scale: 0.55, transformOrigin: 'left center' });
      const numberVal = item.querySelector('.number-val');
      if (numberVal) gsap.set(numberVal, { opacity: 0, y: 20, scale: 0.92, transformOrigin: 'left bottom' });
      const icon = item.querySelector('.what-icon');
      if (icon) prepareSvgIcon(icon);
    });

    let t = 0;

    tl.add(() => {
      head.classList.add('in');
      contentRoot?.classList.add('in');
    }, 0);

    if (label) {
      tl.to(
        label,
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.55, ease: EASE_PREMIUM },
        t,
      );
      tl.add(() => label.classList.add('is-visible'), t);
      t += 0.1;
    }

    if (title) {
      tl.to(
        title,
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.82, ease: EASE_PREMIUM },
        t,
      );
      if (titleEm) {
        tl.to(titleEm, { opacity: 1, y: 0, duration: 0.7, ease: EASE_PREMIUM }, t + 0.22);
      }
      t += 0.14;
    }

    if (prose) {
      tl.to(
        prose,
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: EASE_PREMIUM },
        t + 0.06,
      );
      t += 0.12;
    }

    if (grid) {
      tl.to(
        grid,
        { clipPath: 'inset(0 0% 0 0)', duration: 0.95, ease: EASE_PREMIUM },
        t + 0.06,
      );
    }

    if (trailing.length) {
      tl.to(
        trailing,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.75,
          stagger: 0.1,
          ease: EASE_PREMIUM,
          clearProps: 'filter',
        },
        t + 0.1,
      );
      trailing.forEach((el, i) => {
        tl.add(() => el.classList.add('in'), t + 0.1 + i * 0.1);
      });
      t += 0.14;
    }

    const cardsStart = t + 0.22;

    if (items.length) {
      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.88,
          stagger: 0.1,
          ease: EASE_PREMIUM,
          clearProps: 'filter',
        },
        cardsStart,
      );

      items.forEach((item, i) => {
        const offset = cardsStart + i * 0.1;
        const num = item.querySelector('.what-num');
        if (num) {
          tl.to(num, { opacity: 1, scale: 1, duration: 0.5, ease: EASE_PREMIUM }, offset + 0.05);
        }
        const numberVal = item.querySelector('.number-val');
        if (numberVal) {
          tl.to(
            numberVal,
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: EASE_PREMIUM },
            offset + 0.08,
          );
        }
        const icon = item.querySelector('.what-icon');
        if (icon) addIconDraw(tl, icon, offset + 0.1);
        tl.add(() => item.classList.add('in'), offset);
      });
    }
  });
}

function staggerReveal(selector, options = {}) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return null;

  const {
    y = 36,
    x = 0,
    duration = 0.85,
    stagger = 0.08,
    trigger,
    start = 'top 78%',
    groupBySection = false,
  } = options;

  els.forEach(prepareGsap);

  if (groupBySection) {
    const sections = new Set();
    els.forEach((el) => sections.add(el.closest('section') || el.parentElement));

    return [...sections].map((section) => {
      const group = section.querySelectorAll(selector);
      if (!group.length) return null;
      return gsap.fromTo(
        group,
        { y, x, opacity: 0, filter: 'blur(4px)' },
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          stagger,
          ease: EASE_PREMIUM,
          clearProps: 'filter',
          onComplete: () => group.forEach((el) => el.classList.add('in')),
          scrollTrigger: { trigger: section, start, once: true },
        },
      );
    });
  }

  return gsap.fromTo(
    els,
    { y, x, opacity: 0, filter: 'blur(4px)' },
    {
      y: 0,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease: EASE_PREMIUM,
      clearProps: 'filter',
      onComplete: () => els.forEach((el) => el.classList.add('in')),
      scrollTrigger: { trigger: trigger || els[0], start, once: true },
    },
  );
}

function imageReveal() {
  const strips = document.querySelectorAll('.photo-strip > *');
  if (!strips.length) return [];

  return [...strips].map((cell, i) => {
    const img = cell.querySelector('img');
    if (!img) return null;
    return gsap.fromTo(
      img,
      { scale: 1.12, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        delay: i * 0.12,
        ease: EASE_PREMIUM,
        scrollTrigger: { trigger: cell, start: 'top 85%', once: true },
      },
    );
  });
}

export function usePremiumAnimations(pathname) {
  useEffect(() => {
    applyMotionBodyClass();

    if (shouldUseLiteMotion()) {
      // Reduced motion: show everything immediately. Other lite devices
      // (mobile, low-end) get the cheap CSS .rev reveals from useScrollReveal.
      if (prefersReducedMotion()) revealGsapElements();
      return undefined;
    }

    const ctx = gsap.context(() => {
      sectionBlockReveal();
      staggerReveal('.join-criterion', { trigger: '.join-criteria', x: -20, y: 0, stagger: 0.06, duration: 0.7 });
      imageReveal();
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [pathname]);
}
