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
import { addScrambleTween } from '../utils/scramble';

gsap.registerPlugin(ScrollTrigger);

const BLOCK_ITEM_SELECTORS = [
  '.what-card',
  '.number-card',
  '.board-grid > *',
  '.val-grid > *',
  '.join-grid > *',
  '.offer-card',
  '.for-card',
  '.perk-card',
];

const BLOCK_ITEM_QUERY = BLOCK_ITEM_SELECTORS.join(', ');

const GRID_SELECTORS = '.what-grid, .numbers-grid, .board-grid, .val-grid, .join-grid, .perk-grid';

const DIRECT_ITEM_SELECTORS = ['.what-card', '.number-card', '.offer-card', '.for-card', '.perk-card'];

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
  // clearProps: the leftover inline transform would otherwise override
  // CSS hover states (e.g. .what-card:hover .what-icon).
  tl.to(
    svg,
    { opacity: 1, scale: 1, duration: 0.45, ease: EASE_PREMIUM, clearProps: 'transform' },
    position,
  );
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
    // blockquotes with data-scrub-words are revealed word-by-word while scrolling
    const prose = head.querySelector('blockquote:not([data-scrub-words]), .section-lede');
    const grid = findGridContainer(head);
    const trailing = collectTrailingSiblings(head, contentRoot);

    // Page-hero subtitles (.page-sub) sit outside .section-head — fold them
    // into the same entrance so the Join/Apply/News heroes match other pages.
    const heroSubs = head.parentElement
      ? [...head.parentElement.children].filter(
          (el) => el !== head && el.classList.contains('page-sub'),
        )
      : [];

    if (!label && !title && !prose && !items.length && !trailing.length) return;

    const trigger = head.closest('section') || head.closest('[class*="sec-"]') || contentRoot || head.parentElement;
    prepareGsap(head);
    items.forEach(prepareGsap);
    if (contentRoot) prepareGsap(contentRoot);
    trailing.forEach(prepareGsap);
    gsap.set(head, { opacity: 1, y: 0 });
    if (contentRoot) gsap.set(contentRoot, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top 72%',
        once: true,
      },
    });

    if (label) gsap.set(label, { opacity: 0, x: -18 });
    if (title) {
      gsap.set(title, { opacity: 0, y: 64, skewY: 3.5, transformOrigin: 'left top' });
      if (titleEm) gsap.set(titleEm, { opacity: 0, y: 12 });
    }
    if (prose) gsap.set(prose, { opacity: 0, y: 28 });
    if (heroSubs.length) gsap.set(heroSubs, { opacity: 0, y: 24 });

    // sep-grids paint their separator lines via a dark container background —
    // hide it while the cards are still transparent (otherwise the whole grid
    // flashes as solid navy blocks) and draw the lines in after the cards.
    let gridBg = null;
    if (grid) {
      const bg = getComputedStyle(grid).backgroundColor;
      if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') gridBg = bg;
      gsap.set(grid, {
        opacity: 1,
        clipPath: 'inset(0 100% 0 0)',
        ...(gridBg ? { backgroundColor: 'rgba(0, 0, 0, 0)' } : {}),
      });
    }
    trailing.forEach((el) => gsap.set(el, { opacity: 0, y: 24 }));

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 52, scale: 0.97, transformOrigin: '50% 100%' });
      const num = item.querySelector('.what-num');
      if (num) gsap.set(num, { opacity: 0, scale: 0.55, transformOrigin: 'left center' });
      const numberVal = item.querySelector('.number-val');
      if (numberVal) gsap.set(numberVal, { opacity: 0, y: 24, scale: 0.8, transformOrigin: 'left bottom' });
      const avatar = item.querySelector(':scope > .rounded-full');
      if (avatar) gsap.set(avatar, { opacity: 0, scale: 0.4, rotate: -10, transformOrigin: '50% 50%' });
      const icon = item.querySelector('.what-icon, .perk-icon');
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
        { opacity: 1, x: 0, duration: 0.55, ease: EASE_PREMIUM },
        t,
      );
      // Decode effect: label text resolves from random glyphs.
      const langSpans = label.querySelectorAll(':scope > span');
      const scrambleTargets = langSpans.length ? langSpans : [label];
      scrambleTargets.forEach((el) => addScrambleTween(tl, el, t, { duration: 0.75 }));
      tl.add(() => label.classList.add('is-visible'), t);
      t += 0.1;
    }

    if (title) {
      tl.to(
        title,
        { opacity: 1, y: 0, skewY: 0, duration: 0.95, ease: EASE_PREMIUM },
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
        { opacity: 1, y: 0, duration: 0.85, ease: EASE_PREMIUM },
        t + 0.06,
      );
      t += 0.12;
    }

    if (heroSubs.length) {
      tl.to(
        heroSubs,
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: EASE_PREMIUM },
        t + 0.06,
      );
      t += 0.1;
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
          duration: 0.75,
          stagger: 0.1,
          ease: EASE_PREMIUM,
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
      // clearProps + dropping .anim-gsap hand the cards back to CSS after the
      // reveal, so their hover transforms/transitions work again.
      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.88,
          stagger: 0.1,
          ease: EASE_PREMIUM,
          clearProps: 'transform',
          onComplete: () => items.forEach((el) => el.classList.remove('anim-gsap')),
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
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.9)', clearProps: 'transform' },
            offset + 0.08,
          );
        }
        const avatar = item.querySelector(':scope > .rounded-full');
        if (avatar) {
          tl.to(
            avatar,
            { opacity: 1, scale: 1, rotate: 0, duration: 0.75, ease: 'back.out(1.8)' },
            offset + 0.12,
          );
        }
        const icon = item.querySelector('.what-icon, .perk-icon');
        if (icon) addIconDraw(tl, icon, offset + 0.1);
        tl.add(() => item.classList.add('in'), offset);
      });
    }

    // Separator lines draw in last, once the cards are solid.
    if (grid && gridBg) {
      const at = items.length ? cardsStart + items.length * 0.1 + 0.25 : t + 0.5;
      tl.to(
        grid,
        { backgroundColor: gridBg, duration: 0.55, ease: 'power1.inOut', clearProps: 'backgroundColor' },
        at,
      );
    }
  });
}

/**
 * Editorial row stacks — /about "Co děláme", /summit "Hlavní témata".
 *
 * These used to fade in as one lump (every row carried the same `d1` delay), which
 * is what made them read as filler. Here the row frame is already in place and the
 * *content* typesets into it: the index rail slides in from the rule, the heading
 * wipes up behind a mask, body copy settles last. Rows overlap tightly so the block
 * resolves as a single gesture instead of five separate pops.
 */
function stackRowReveal() {
  document.querySelectorAll('.sep-stack, .area-stack').forEach((stack) => {
    // Only the editorial stacks — their rows carry `.rev`. The compact fact
    // stacks (e.g. the About "Založeno / Studentů" rail) reveal as one block.
    const rows = [...stack.children].filter((el) => el.classList.contains('rev'));
    if (!rows.length) return;

    rows.forEach(prepareGsap);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: stack, start: 'top 82%', once: true },
    });

    rows.forEach((row, i) => {
      const at = i * 0.09;
      const [rail, body] = row.children;
      const headings = body?.querySelectorAll('h3');
      const copy = body?.querySelectorAll('p');
      const icon = rail?.querySelector('svg');

      // The row itself never travels — only what sits inside it.
      gsap.set(row, { opacity: 1, y: 0 });
      tl.add(() => row.classList.add('in'), at);

      if (icon) prepareSvgIcon(icon);

      if (rail) {
        gsap.set(rail, { opacity: 0, x: -14 });
        tl.to(rail, { opacity: 1, x: 0, duration: 0.7, ease: EASE_PREMIUM }, at);
        if (icon) addIconDraw(tl, icon, at + 0.08);
      }

      if (headings?.length) {
        gsap.set(headings, { clipPath: 'inset(0 0 100% 0)', y: 16 });
        tl.to(
          headings,
          {
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            duration: 0.8,
            ease: EASE_PREMIUM,
            clearProps: 'clipPath',
          },
          at + 0.06,
        );
      }

      if (copy?.length) {
        gsap.set(copy, { opacity: 0, y: 12 });
        tl.to(
          copy,
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.04, ease: EASE_PREMIUM },
          at + 0.16,
        );
      }
    });
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
        { y, x, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          stagger,
          ease: EASE_PREMIUM,
          onComplete: () => group.forEach((el) => el.classList.add('in')),
          scrollTrigger: { trigger: section, start, once: true },
        },
      );
    });
  }

  return gsap.fromTo(
    els,
    { y, x, opacity: 0 },
    {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      stagger,
      ease: EASE_PREMIUM,
      onComplete: () => els.forEach((el) => el.classList.add('in')),
      scrollTrigger: { trigger: trigger || els[0], start, once: true },
    },
  );
}

/**
 * Gentle scrub parallax inside photo frames, sitewide. Images need vertical
 * headroom in the markup (taller than their frame) so the drift never shows
 * a gap — e.g. `top-[-7%] h-[114%]` inside an overflow-hidden parent.
 */
function photoParallax() {
  document.querySelectorAll('.photo-strip img, [data-plx]').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}

/**
 * Fast scrolling shears the photos slightly (Locomotive-style velocity skew);
 * they spring back upright as the scroll settles.
 */
function velocitySkew() {
  const imgs = gsap.utils.toArray('.photo-strip img, [data-plx]');
  if (!imgs.length) return;

  const proxy = { skew: 0 };
  const clampSkew = gsap.utils.clamp(-3.5, 3.5);

  ScrollTrigger.create({
    onUpdate(self) {
      const skew = clampSkew(self.getVelocity() / -350);
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true,
          onUpdate: () => gsap.set(imgs, { skewY: proxy.skew }),
        });
      }
    },
  });
}

/**
 * The footer unveils itself: its content sits shifted down inside the
 * overflow-hidden footer and parallaxes into place as the page bottoms out.
 */
function footerReveal() {
  const inner = document.querySelector('[data-footer-inner]');
  const footer = inner?.closest('footer');
  if (!inner || !footer) return;

  gsap.fromTo(
    inner,
    { yPercent: 26, opacity: 0.35 },
    {
      yPercent: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    },
  );
}

function imageReveal() {
  const strips = document.querySelectorAll('.photo-strip > *');
  if (!strips.length) return [];

  // Cinematic: each frame expands open from a smaller window while the
  // photo inside zooms out to fit.
  return [...strips].map((cell, i) => {
    const img = cell.querySelector('img');
    if (!img) return null;

    const tl = gsap.timeline({
      delay: i * 0.14,
      scrollTrigger: { trigger: cell, start: 'top 85%', once: true },
    });
    tl.fromTo(
      cell,
      { clipPath: 'inset(16% 11% 16% 11%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: EASE_PREMIUM },
      0,
    );
    tl.fromTo(
      img,
      { scale: 1.22, opacity: 0.55 },
      { scale: 1, opacity: 1, duration: 1.3, ease: EASE_PREMIUM },
      0,
    );
    return tl;
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
      stackRowReveal();
      staggerReveal('.join-criterion', { trigger: '.join-criteria', x: -20, y: 0, stagger: 0.06, duration: 0.7 });
      imageReveal();
      photoParallax();
      velocitySkew();
      footerReveal();
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [pathname]);
}
