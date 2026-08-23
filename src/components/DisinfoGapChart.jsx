import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import { prefersReducedMotion, shouldUseLiteMotion } from "../utils/motion";

const SOURCE_URL =
  "https://www.europarl.europa.eu/news/en/press-room/20250210IPR26795/cost-of-living-and-environment-are-the-main-concerns-of-young-people-in-the-eu";

const BARS = [
  {
    id: "encountered",
    value: 76,
    labelCs: "Setkali se s dezinformacemi",
    labelEn: "Have encountered disinformation",
    accent: true,
  },
  {
    id: "confident",
    value: 70,
    labelCs: "Věří, že je dokážou rozpoznat",
    labelEn: "Feel confident they can recognise it",
    accent: false,
  },
];

/** Fires once when the element first scrolls into view. */
function useInViewOnce() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return { ref, seen };
}

/**
 * Counts to `target` on a rAF ramp. Kept separate from the bar geometry so the
 * bar itself is a single CSS transition — the numerals are the only thing
 * React re-renders per frame.
 */
function useRamp(target, active, duration = 1100) {
  const [n, setN] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    if (prefersReducedMotion() || shouldUseLiteMotion()) {
      setN(target);
      return undefined;
    }

    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round((1 - (1 - p) ** 3) * target));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, active, duration]);

  return n;
}

function GapBar({ bar, active, index }) {
  const { isEn } = useLang();
  const shown = useRamp(bar.value, active);
  const delay = `${index * 140}ms`;

  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="text-[13.5px] leading-snug text-dark">
          {isEn ? bar.labelEn : bar.labelCs}
        </span>
        <span
          className={`shrink-0 font-mono text-[17px] font-bold tabular-nums ${
            bar.accent ? "text-accent" : "text-dark"
          }`}
        >
          {shown}%
        </span>
      </div>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-[rgba(11,16,32,0.07)]"
        role="img"
        aria-label={`${isEn ? bar.labelEn : bar.labelCs}: ${bar.value}%`}
      >
        <div
          className={`disinfo-bar h-full rounded-full ${
            bar.accent ? "bg-accent" : "bg-[rgba(11,16,32,0.3)]"
          }`}
          style={{
            width: active ? `${bar.value}%` : "0%",
            transitionDelay: delay,
          }}
        />
      </div>
    </div>
  );
}

export function DisinfoGapChart() {
  const { ref, seen } = useInViewOnce();

  return (
    <figure ref={ref} className="disinfo-gap-chart m-0 w-full max-w-[420px]">
      <figcaption className="mb-6 font-mono text-[10px] uppercase tracking-[2px] text-mid">
        <span className="cs">Mladí lidé 16–30 let v EU</span>
        <span className="en">Young people aged 16–30 in the EU</span>
      </figcaption>

      {BARS.map((bar, i) => (
        <GapBar key={bar.id} bar={bar} active={seen} index={i} />
      ))}

      <p className="mt-6 font-mono text-[10px] leading-relaxed text-mid opacity-60">
        <span className="cs">Zdroj: </span>
        <span className="en">Source: </span>
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 transition-opacity hover:text-accent"
        >
          <span className="cs">
            Eurobarometr — Průzkum mládeže 2024, Evropský parlament
          </span>
          <span className="en">
            Eurobarometer — Youth Survey 2024, European Parliament
          </span>
        </a>
      </p>
    </figure>
  );
}
