import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  EASE_PREMIUM,
  prefersReducedMotion,
  shouldUseLiteMotion,
  shouldUseScrollMotion,
  revealGsapElements,
  applyMotionBodyClass,
} from '../utils/motion';
import { addScrambleTween } from '../utils/scramble';
import { flythroughPass } from '../utils/flythroughMotion';

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

const GRID_SELECTORS = '.what-grid, .how-grid, .offer-grid, .for-grid, .numbers-grid, .board-grid, .val-grid, .join-grid, .perk-grid';

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

    const items = collectBlockItems(head).filter((el) => !el.hasAttribute('data-enter'));
    const label = head.querySelector('.section-label, .page-label, .sec-label');
    const title = head.querySelector('.section-title, .sec-title, .page-title, h2');
    const titleEm = title?.querySelector('em');
    // blockquotes with data-scrub-words are revealed word-by-word while scrolling
    const prose = head.querySelector('blockquote:not([data-scrub-words]), .section-lede');
    const grid = findGridContainer(head);
    const skipGridWipe = grid?.classList.contains('board-grid--custom') || shouldUseScrollMotion();
    const scrubOwnsTransform = shouldUseScrollMotion();
    const trailing = collectTrailingSiblings(head, contentRoot).filter(
      (el) =>
        !el.classList.contains('board-grid--custom') &&
        !el.hasAttribute('data-enter') &&
        !el.querySelector?.('[data-enter]') &&
        !el.querySelector?.('.fake-news-quiz, .algo-feed, .disinfo-chart'),
    );

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

    if (label) {
      if (scrubOwnsTransform) gsap.set(label, { opacity: 0 });
      else gsap.set(label, { opacity: 0, x: -18 });
    }
    if (title) {
      if (scrubOwnsTransform) {
        gsap.set(title, { opacity: 0 });
        if (titleEm) gsap.set(titleEm, { opacity: 0 });
      } else {
        gsap.set(title, { opacity: 0, y: 64, skewY: 3.5, transformOrigin: 'left top' });
        if (titleEm) gsap.set(titleEm, { opacity: 0, y: 12 });
      }
    }
    if (prose) {
      if (scrubOwnsTransform) gsap.set(prose, { opacity: 0 });
      else gsap.set(prose, { opacity: 0, y: 28 });
    }
    if (heroSubs.length) {
      if (scrubOwnsTransform) gsap.set(heroSubs, { opacity: 0 });
      else gsap.set(heroSubs, { opacity: 0, y: 24 });
    }

    // sep-grids paint their separator lines via a dark container background —
    // hide it while the cards are still transparent (otherwise the whole grid
    // flashes as solid navy blocks) and draw the lines in after the cards.
    let gridBg = null;
    if (grid && !skipGridWipe) {
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
      if (scrubOwnsTransform) {
        gsap.set(item, { opacity: 0 });
      } else {
        gsap.set(item, { opacity: 0, y: 52, scale: 0.97, transformOrigin: '50% 100%' });
      }
      const num = item.querySelector('.what-num, .how-num');
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
        scrubOwnsTransform
          ? { opacity: 1, duration: 0.55, ease: EASE_PREMIUM }
          : { opacity: 1, x: 0, duration: 0.55, ease: EASE_PREMIUM },
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
        scrubOwnsTransform
          ? { opacity: 1, duration: 0.7, ease: EASE_PREMIUM }
          : { opacity: 1, y: 0, skewY: 0, duration: 0.95, ease: EASE_PREMIUM },
        t,
      );
      if (titleEm) {
        tl.to(
          titleEm,
          scrubOwnsTransform
            ? { opacity: 1, duration: 0.55, ease: EASE_PREMIUM }
            : { opacity: 1, y: 0, duration: 0.7, ease: EASE_PREMIUM },
          t + 0.22,
        );
      }
      t += 0.14;
    }

    if (prose) {
      tl.to(
        prose,
        scrubOwnsTransform
          ? { opacity: 1, duration: 0.85, ease: EASE_PREMIUM }
          : { opacity: 1, y: 0, duration: 0.85, ease: EASE_PREMIUM },
        t + 0.06,
      );
      t += 0.12;
    }

    if (heroSubs.length) {
      tl.to(
        heroSubs,
        scrubOwnsTransform
          ? { opacity: 1, duration: 0.8, stagger: 0.05, ease: EASE_PREMIUM }
          : { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: EASE_PREMIUM },
        t + 0.06,
      );
      t += 0.1;
    }

    if (grid && !skipGridWipe) {
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
      tl.to(
        items,
        scrubOwnsTransform
          ? {
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: EASE_PREMIUM,
              onComplete: () => items.forEach((el) => el.classList.remove('anim-gsap')),
            }
          : {
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
        const num = item.querySelector('.what-num, .how-num');
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
    if (grid && gridBg && !skipGridWipe) {
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

    rows.forEach((row) => {
      prepareGsap(row);
      // Keep the row frame (and its separator) painted from the first frame.
      // A leftover GSAP transform would composite the row and eat the 1px rule.
      row.classList.add('in');
      gsap.set(row, { opacity: 1, clearProps: 'transform' });
    });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: stack, start: 'top 82%', once: true },
    });

    rows.forEach((row, i) => {
      const at = i * 0.09;
      const [rail, body] = row.children;
      const headings = body?.querySelectorAll('h3');
      const copy = body?.querySelectorAll('p');
      const icon = rail?.querySelector('svg');

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
  document.querySelectorAll('.photo-strip img, [data-plx]:not([data-rotate-scrub])').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -12 },
      {
        yPercent: 12,
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
  const clampSkew = gsap.utils.clamp(-8, 8);

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

function scrubFromTo(el, from, to, trigger = el, extra = {}) {
  gsap.fromTo(el, from, {
    ...to,
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.6,
      ...extra,
    },
  });
}

function setScene(el, perspective = 1400) {
  gsap.set(el, {
    transformPerspective: perspective,
    transformStyle: 'preserve-3d',
  });
}

function scrollChoreography() {
  // Motion that finishes while the element is still on screen — readable, not a 2px drift.
  const arrive = { start: 'top 90%', end: 'top 38%', scrub: 0.55 };

  function wall(grid, selector, fromFor, { scene = true } = {}) {
    if (scene) setScene(grid);
    const items = gsap.utils.toArray(grid.querySelectorAll(selector));
    items.forEach((el, i) => {
      const rest = { x: 0, y: -10, z: 0, rotationX: 0, rotationY: 0 };
      scrubFromTo(el, fromFor(i, items.length), rest, el, {
        start: 'top 92%',
        end: 'top 36%',
        scrub: 0.65,
      });
    });
  }

  // —— Copy on every section (this is the frequency: something moves at each heading) ——
  gsap.utils.toArray('.section-label, .page-label, .sec-label').forEach((el) => {
    if (el.closest('.page-hero, #hero')) return;
    scrubFromTo(el, { x: -52 }, { x: 0 }, el, arrive);
  });

  gsap.utils.toArray('.section-title, .sec-title').forEach((title) => {
    if (title.closest('.page-hero, #hero, #join')) return;
    // Wrapping / italic headings cannot use preserve-3d: Chrome stacks the
    // line boxes on top of each other until a later scroll recomposites them.
    scrubFromTo(title, { y: 48, opacity: 0.15 }, { y: 0, opacity: 1 }, title, arrive);
  });

  gsap.utils.toArray('.section-lede, .page-sub').forEach((el) => {
    if (el.closest('.page-hero, #hero')) return;
    scrubFromTo(el, { y: 40, x: 28, opacity: 0.4 }, { y: -4, x: 0, opacity: 1 }, el, arrive);
  });

  // —— Homepage dead zones between the big grids ——
  gsap.utils.toArray('#aktuality-promo p').forEach((el) => {
    scrubFromTo(el, { x: -64, y: 20 }, { x: 0, y: 0 }, el, arrive);
  });
  gsap.utils.toArray('#aktuality-promo .rev.d1').forEach((el) => {
    scrubFromTo(el, { x: 80, z: -36 }, { x: 0, z: 0 }, el, arrive);
  });

  gsap.utils.toArray('#join p').forEach((el) => {
    setScene(el, 900);
    scrubFromTo(el, { y: 48, z: -32 }, { y: -6, z: 0 }, '#join', {
      start: 'top 82%',
      end: 'center 42%',
      scrub: 0.45,
    });
  });
  gsap.utils.toArray('#join .rev.d2').forEach((el) => {
    setScene(el, 900);
    scrubFromTo(el, { y: 36, z: -48 }, { y: -8, z: 0 }, '#join', {
      start: 'top 72%',
      end: 'center 32%',
      scrub: 0.5,
    });
  });

  gsap.utils.toArray('.why-facts > *').forEach((el, i) => {
    setScene(el.parentElement, 1000);
    scrubFromTo(el, { y: 36 + i * 18, z: -64 }, { y: 0, z: 0 }, el, {
      start: 'top 90%',
      end: 'top 48%',
      scrub: 0.5,
    });
  });
  gsap.utils.toArray('#why .rev.d2').forEach((el) => {
    setScene(el, 1400);
    scrubFromTo(
      el,
      { x: 72, z: -80, rotationY: -14 },
      { x: 0, z: 0, rotationY: 0 },
      '#why',
      { start: 'top 85%', end: 'center 30%', scrub: 0.6 },
    );
  });

  // —— About columns, fact rails, accordion ——
  gsap.utils.toArray('.about-2col > :first-child').forEach((el) => {
    setScene(el, 1000);
    scrubFromTo(el, { x: -72, z: -36 }, { x: 0, z: 0 }, el, arrive);
  });
  gsap.utils.toArray('.about-2col .sep-stack > *').forEach((el, i) => {
    scrubFromTo(el, { x: 56, y: 12 }, { x: 0, y: 0 }, el, {
      start: `top+=${i * 28} 88%`,
      end: 'top 42%',
      scrub: 0.45,
    });
  });

  // —— Grids: each card is its own beat, so the row doesn't fire as one lump ——
  gsap.utils.toArray('.what-grid').forEach((grid) => {
    wall(grid, '.what-card', (i, n) => {
      const fromCenter = i - (n - 1) / 2;
      return { y: 56, z: -120, rotationY: fromCenter * -9, x: fromCenter * 36 };
    });
  });

  gsap.utils.toArray('.how-grid').forEach((grid) => {
    // Flatten the grid so separator rules stay a 2D layer behind the tiles.
    // preserve-3d would let translateZ send a card under the overlay lines.
    wall(
      grid,
      '.what-card',
      (i) => {
        const col = i % 2;
        return { y: 48, z: -90, x: col === 0 ? -32 : 32, rotationY: col === 0 ? 7 : -7 };
      },
      { scene: false },
    );
  });

  // Stats are a 2D sep-grid — overlay rules stay put, so cards cannot scrub
  // on themselves. A self-triggered y/rotationX tween never reached identity
  // (fast Lenis skip *and* slow read in the middle of the range), which left
  // the four tiles stuck at different heights.
  gsap.utils.toArray('.numbers-grid').forEach((grid) => {
    const cards = gsap.utils.toArray(grid.querySelectorAll('.number-card'));
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { y: 32, z: 0, rotationX: 0, force3D: true },
      {
        y: 0,
        z: 0,
        rotationX: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: EASE_PREMIUM,
        overwrite: 'auto',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          once: true,
        },
      },
    );
  });

  gsap.utils.toArray('.photo-strip').forEach((strip) => {
    gsap.utils.toArray(strip.children).forEach((cell, i) => {
      scrubFromTo(
        cell,
        { y: 56, z: -48, rotate: i === 1 ? 0 : 2.5 },
        { y: -16, z: 0, rotate: 0 },
        cell,
        { start: 'top 94%', end: 'top 40%', scrub: 0.5 },
      );
    });
  });

  gsap.utils.toArray('.board-grid').forEach((grid) => {
    wall(grid, '.exec-card', (i, n) => {
      const fromCenter = i - (n - 1) / 2;
      return { x: fromCenter * 64, z: -110, rotationY: fromCenter * -11, y: 32 };
    });
  });

  gsap.utils.toArray('.board-mini').forEach((grid) => {
    const cols = Math.max(
      1,
      getComputedStyle(grid)
        .gridTemplateColumns.split(' ')
        .filter(Boolean).length,
    );
    wall(grid, '.exec-card', (i) => {
      const col = i % cols;
      const fromCenter = col - (cols - 1) / 2;
      return {
        x: fromCenter * 72,
        y: 24,
        z: cols === 1 ? -80 : -56,
        rotationY: fromCenter * -10,
      };
    });
  });

  gsap.utils.toArray('.val-grid').forEach((grid) => {
    wall(grid, '.val-card', (i) => ({ x: i % 2 === 0 ? -52 : 52, z: -44, rotationY: i % 2 === 0 ? 8 : -8, y: 20 }));
  });

  gsap.utils.toArray('.join-grid > *, .area-item').forEach((el, i) => {
    const side = i % 2 === 0 ? -1 : 1;
    setScene(el.parentElement || el);
    scrubFromTo(el, { x: side * 48, z: -40, y: 24 }, { x: 0, z: 0, y: -6 }, el, arrive);
  });

  gsap.utils.toArray('.perk-card').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 48, z: -56, clipPath: 'inset(0 0 24% 0)' },
      {
        y: -10,
        z: 0,
        clipPath: 'inset(0 0 0% 0%)',
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          end: 'top 40%',
          scrub: 0.55,
        },
      },
    );
  });

  gsap.utils.toArray('.partner-card').forEach((el, i) => {
    const side = i % 2 === 0 ? -1 : 1;
    scrubFromTo(el, { x: side * 40, y: 28, opacity: 0.55 }, { x: 0, y: -8, opacity: 1 }, el, arrive);
  });

  gsap.utils.toArray('.council-rail').forEach((el, i) => {
    setScene(el);
    scrubFromTo(
      el,
      { x: i === 0 ? -72 : 72, z: -40 },
      { x: 0, z: 0 },
      el,
      arrive,
    );
  });

  gsap.utils.toArray('.org-chart-frame').forEach((frame) => {
    setScene(frame.parentElement || frame);
    scrubFromTo(frame, { y: 48, z: -90, rotationX: 10 }, { y: -10, z: 0, rotationX: 0 }, frame, {
      start: 'top 90%',
      end: 'top 40%',
      scrub: 0.6,
    });
  });

  gsap.utils.toArray('[data-rotate-scrub]').forEach((el) => {
    scrubFromTo(
      el,
      { rotationY: -16, yPercent: 6, scale: 1.06 },
      { rotationY: 10, yPercent: -4, scale: 1 },
      el.closest('section') || el.parentElement,
      { scrub: true },
    );
  });

  gsap.utils.toArray('#about-advisor [data-slide-from]').forEach((el) => {
    const fromLeft = el.getAttribute('data-slide-from') === 'left';
    scrubFromTo(
      el,
      { x: fromLeft ? -88 : 88, z: -48 },
      { x: fromLeft ? 10 : -10, z: 0 },
      '#about-advisor',
      { start: 'top 88%', end: 'center 35%', scrub: 0.55 },
    );
  });
}

export function usePremiumAnimations(pathname) {
  useEffect(() => {
    applyMotionBodyClass();

    if (prefersReducedMotion()) {
      revealGsapElements();
      return undefined;
    }

    const ctx = gsap.context(() => {
      if (shouldUseLiteMotion()) {
        revealGsapElements();
      } else {
        sectionBlockReveal();
        stackRowReveal();
        staggerReveal('.join-criterion', {
          trigger: '.join-criteria',
          x: -56,
          y: 0,
          stagger: 0.07,
          duration: 0.75,
        });
        imageReveal();
        photoParallax();
        velocitySkew();
        footerReveal();
      }

      if (shouldUseScrollMotion()) {
        scrollChoreography();
        if (!shouldUseLiteMotion()) flythroughPass();
      }
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [pathname]);
}
