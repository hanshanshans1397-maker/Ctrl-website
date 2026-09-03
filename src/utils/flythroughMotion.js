import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXIT_AT = 0.86;
const EXIT_DUR = 0.14;

function scrubTimeline(section) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.15,
      invalidateOnRefresh: true,
    },
  });
}

/** Deterministic 0..1 noise so refreshes never reshuffle the picture. */
function noise(i) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/* Logo rides a rail; the tagline surfaces as it crosses centre. */
function rail(section, tl, rtl) {
  const mark = section.querySelector('.flythrough__mark');
  const track = section.querySelector('.flythrough__rail');
  const tag = section.querySelector('.flythrough__tag');
  if (!mark) return;

  const from = rtl ? '75vw' : '-75vw';
  const to = rtl ? '-75vw' : '75vw';

  if (track) {
    gsap.set(track, { transformOrigin: rtl ? 'right center' : 'left center' });
    tl.fromTo(track, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 0.35, duration: 0.3, ease: 'none' }, 0);
    tl.to(track, { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
  }

  tl.fromTo(mark, { x: from, force3D: true }, { x: to, duration: 1, ease: 'none' }, 0);
  tl.fromTo(mark, { opacity: 0 }, { opacity: 1, duration: 0.14, ease: 'none' }, 0.08);
  tl.to(mark, { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);

  if (tag) {
    tl.fromTo(tag, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.16, ease: 'none' }, 0.36);
    tl.to(tag, { opacity: 0, y: -6, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
  }
}

/* CTRL + ALT + DEL: keys drop in, get pressed one after another, lift away. */
function keys(section, tl) {
  const caps = gsap.utils.toArray(section.querySelectorAll('.flythrough__key'));
  const pluses = gsap.utils.toArray(section.querySelectorAll('.flythrough__plus'));
  const tag = section.querySelector('.flythrough__tag');
  if (!caps.length) return;

  caps.forEach((cap, i) => {
    const at = 0.04 + i * 0.07;
    tl.fromTo(cap, { y: -44, opacity: 0, force3D: true }, { y: 0, opacity: 1, duration: 0.14, ease: 'none' }, at);
  });
  pluses.forEach((plus, i) => {
    tl.fromTo(plus, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.08, ease: 'none' }, 0.14 + i * 0.07);
  });

  // Press CTRL, ALT, DEL in turn — finished by mid-pass so the caption
  // lands while the combo is still in front of the reader.
  caps.forEach((cap, i) => {
    const at = 0.3 + i * 0.09;
    tl.to(cap, { y: 4, boxShadow: '0 0 0 0 var(--color-separator)', duration: 0.045, ease: 'none' }, at);
    tl.to(cap, { y: 0, boxShadow: '0 4px 0 0 var(--color-separator)', duration: 0.06, ease: 'none' }, at + 0.045);
  });

  if (tag) {
    tl.fromTo(tag, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.12, ease: 'none' }, 0.56);
    tl.to(tag, { opacity: 0, y: -6, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
  }

  tl.to([...caps, ...pluses], { y: -24, opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Noise settles into a flat signal, calming outward from the centre. */
function signal(section, tl) {
  const bars = gsap.utils.toArray(section.querySelectorAll('.flythrough__bar'));
  if (!bars.length) return;

  const mid = (bars.length - 1) / 2;
  bars.forEach((bar, i) => {
    const jitter = 0.18 + 0.82 * noise(i + 1);
    const dist = Math.abs(i - mid) / mid;
    gsap.set(bar, { scaleY: jitter, opacity: 0, transformOrigin: 'center center' });
    tl.to(bar, { opacity: 0.85, duration: 0.08, ease: 'none' }, 0.02 + dist * 0.06);
    tl.to(bar, { scaleY: 0.06, opacity: 0.55, duration: 0.22, ease: 'none' }, 0.3 + dist * 0.34);
  });

  tl.to(bars, { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Nodes wake, then link up across the region; the net drifts with the scroll. */
function network(section, tl, rtl) {
  const svg = section.querySelector('.flythrough__net');
  const nodes = gsap.utils.toArray(section.querySelectorAll('.flythrough__node'));
  const edges = gsap.utils.toArray(section.querySelectorAll('.flythrough__edge'));
  if (!svg || !nodes.length) return;

  tl.fromTo(svg, { x: rtl ? 40 : -40, force3D: true }, { x: rtl ? -40 : 40, duration: 1, ease: 'none' }, 0);

  nodes.forEach((node, i) => {
    tl.fromTo(
      node,
      { scale: 0.4, opacity: 0, transformOrigin: '50% 50%' },
      { scale: 1, opacity: 1, duration: 0.12, ease: 'none' },
      0.04 + i * 0.045,
    );
  });

  edges.forEach((edge, i) => {
    tl.fromTo(
      edge,
      { strokeDashoffset: 1, opacity: 0 },
      { strokeDashoffset: 0, opacity: 0.6, duration: 0.18, ease: 'none' },
      0.18 + i * 0.05,
    );
  });

  tl.to(svg, { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Two counter-running rows of the countries CTRL works in. */
function ticker(section, tl) {
  const a = section.querySelector('.flythrough__row--a');
  const b = section.querySelector('.flythrough__row--b');
  if (!a || !b) return;

  tl.fromTo(a, { xPercent: 0, force3D: true }, { xPercent: -22, duration: 1, ease: 'none' }, 0);
  tl.fromTo(b, { xPercent: -22, force3D: true }, { xPercent: 0, duration: 1, ease: 'none' }, 0);
  tl.fromTo([a, b], { opacity: 0 }, { opacity: 1, duration: 0.14, ease: 'none' }, 0.04);
  tl.to([a, b], { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Reels spin and land on 2026, last digit settling last. */
function odometer(section, tl) {
  const digits = gsap.utils.toArray(section.querySelectorAll('.flythrough__digit'));
  const tag = section.querySelector('.flythrough__tag');
  if (!digits.length) return;

  // Land by the time the gap sits mid-viewport (≈0.5), so the year is
  // readable while it is still in front of the reader, not on its way out.
  digits.forEach((digit, i) => {
    const reel = digit.querySelector('.flythrough__reel');
    const target = Number(digit.dataset.digit) || 0;
    const landing = -((10 + target) / 20) * 100;
    tl.fromTo(reel, { yPercent: 0, force3D: true }, { yPercent: landing, duration: 0.26 + i * 0.05, ease: 'none' }, 0.02);
  });
  tl.fromTo(digits, { opacity: 0 }, { opacity: 1, duration: 0.1, ease: 'none' }, 0.02);

  if (tag) {
    tl.fromTo(tag, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.12, ease: 'none' }, 0.44);
    tl.to(tag, { opacity: 0, y: -6, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
  }
  tl.to(digits, { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* A lens sweeps a row of data; whatever it has looked at turns clear. */
function scan(section, tl, rtl) {
  const track = section.querySelector('.flythrough__lenstrack');
  const lens = section.querySelector('.flythrough__lens');
  const cells = gsap.utils.toArray(section.querySelectorAll('.flythrough__cell'));
  if (!track || !lens || !cells.length) return;

  const sweepStart = 0.08;
  const sweepDur = 0.72;
  const startX = () => (rtl ? track.offsetWidth + 28 : -28);
  const endX = () => (rtl ? -28 : track.offsetWidth + 28);

  tl.fromTo(lens, { x: startX, opacity: 0, force3D: true }, { opacity: 1, duration: 0.06, ease: 'none' }, sweepStart - 0.04);
  tl.fromTo(lens, { x: startX }, { x: endX, duration: sweepDur, ease: 'none' }, sweepStart);

  tl.fromTo(cells, { opacity: 0 }, { opacity: 0.45, duration: 0.08, ease: 'none' }, 0.02);

  const n = cells.length;
  cells.forEach((cell, i) => {
    const p = rtl ? 1 - i / (n - 1) : i / (n - 1);
    const at = sweepStart + p * sweepDur;
    tl.to(cell, { backgroundColor: 'var(--color-accent)', opacity: 1, scaleY: 2.2, duration: 0.03, ease: 'none' }, at);
    tl.to(cell, { scaleY: 1, duration: 0.05, ease: 'none' }, at + 0.03);
  });

  tl.to([lens, ...cells], { opacity: 0, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Pixel noise resolves into a checkmark — the fact checks out. */
function verify(section, tl) {
  const pix = gsap.utils.toArray(section.querySelectorAll('.flythrough__pix'));
  if (!pix.length) return;

  pix.forEach((p, i) => {
    const on = p.hasAttribute('data-on');
    gsap.set(p, { opacity: 0.12 + 0.75 * noise(i + 7), scale: 0.7 + 0.5 * noise(i + 31), transformOrigin: 'center center' });
    tl.to(p, { opacity: on ? 1 : 0.06, scale: on ? 1 : 0.55, backgroundColor: on ? 'var(--color-accent)' : 'var(--color-mid)', duration: 0.12, ease: 'none' }, 0.22 + noise(i + 3) * 0.3);
  });

  tl.fromTo(section.querySelector('.flythrough__grid'), { opacity: 0 }, { opacity: 1, duration: 0.1, ease: 'none' }, 0.02);
  tl.to(section.querySelector('.flythrough__grid'), { opacity: 0, y: -16, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

/* Scattered points from both sides gather into one ring, then turn together. */
function gather(section, tl) {
  const wrap = section.querySelector('.flythrough__ringwrap');
  const pts = gsap.utils.toArray(section.querySelectorAll('.flythrough__pt'));
  const core = section.querySelector('.flythrough__core');
  if (!wrap || !pts.length) return;

  const radius = 46;
  pts.forEach((pt, i) => {
    const side = i % 2 === 0 ? -1 : 1;
    const startX = side * (22 + noise(i + 11) * 26);
    const startY = (noise(i + 17) - 0.5) * 120;
    const angle = (i / pts.length) * Math.PI * 2;
    tl.fromTo(
      pt,
      { x: `${startX}vw`, y: startY, opacity: 0, force3D: true },
      { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, opacity: 1, duration: 0.36, ease: 'none' },
      0.06 + noise(i + 5) * 0.1,
    );
  });

  if (core) {
    tl.fromTo(core, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, ease: 'none' }, 0.5);
  }

  tl.fromTo(wrap, { rotation: 0 }, { rotation: 42, duration: 0.36, ease: 'none' }, 0.5);
  tl.to([wrap], { opacity: 0, scale: 1.25, duration: EXIT_DUR, ease: 'none' }, EXIT_AT);
}

const VARIANTS = { rail, keys, signal, network, ticker, odometer, scan, verify, gather };

export function flythroughPass() {
  gsap.utils.toArray('.flythrough').forEach((section, i) => {
    const variant = section.getAttribute('data-fly') || 'rail';
    const run = VARIANTS[variant] ?? rail;
    run(section, scrubTimeline(section), i % 2 === 1);
  });
}
