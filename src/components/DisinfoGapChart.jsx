import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { prefersReducedMotion, shouldUseLiteMotion } from "../utils/motion";

const SOURCE_URL =
  "https://www.europarl.europa.eu/news/en/press-room/20250210IPR26795/cost-of-living-and-environment-are-the-main-concerns-of-young-people-in-the-eu";

/** Eurobarometer Youth Survey 2024 (EU27, ages 16–30, past 7 days). */
const BARS = [
  { id: "never", value: 5, labelCs: "Nikdy", labelEn: "Never", exposed: false },
  { id: "rarely", value: 14, labelCs: "Zřídka", labelEn: "Rarely", exposed: false },
  { id: "sometimes", value: 32, labelCs: "Někdy", labelEn: "Sometimes", exposed: true },
  { id: "often", value: 29, labelCs: "Často", labelEn: "Often", exposed: true },
  { id: "very", value: 15, labelCs: "Velmi často", labelEn: "Very often", exposed: true },
];

const EXPOSED = BARS.filter((b) => b.exposed).reduce((s, b) => s + b.value, 0);
const MAX_VALUE = Math.max(...BARS.map((b) => b.value));

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
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setSeen(true), 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [seen]);

  return { ref, seen };
}

export function DisinfoGapChart() {
  const { ref, seen } = useInViewOnce();
  const reduce =
    typeof window !== "undefined" &&
    (prefersReducedMotion() || shouldUseLiteMotion());
  const live = seen || reduce;

  return (
    <figure
      ref={ref}
      className="disinfo-chart m-0 w-full border border-[rgba(11,16,32,0.08)] bg-card p-8 max-sm:p-6"
    >
      <div className="mb-8 flex items-end justify-between gap-6 max-sm:mb-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-mid">
            <span className="cs">Mladí 16–30 · EU27 · 7 dní</span>
            <span className="en">Ages 16–30 · EU27 · 7 days</span>
          </p>
          <p
            className="mt-2 font-extrabold leading-none tracking-[-4px] text-dark"
            style={{ fontSize: "clamp(64px, 8vw, 92px)" }}
          >
            <AnimatedCounter value={EXPOSED} />%
          </p>
        </div>
        <p className="max-w-[180px] pb-1.5 text-right text-[13px] leading-[1.5] font-light text-mid max-sm:hidden">
          <span className="cs">
            se s dezinformací setkalo alespoň občas.
          </span>
          <span className="en">
            encountered disinformation at least sometimes.
          </span>
        </p>
      </div>

      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
        {BARS.map((bar, i) => (
          <li key={bar.id} className="grid grid-cols-[7.5rem_1fr_2.6rem] items-center gap-3 max-[480px]:grid-cols-[5.5rem_1fr_2.4rem] max-[480px]:gap-2">
            <span className="text-[13px] font-medium text-dark max-[480px]:text-[12px]">
              <span className="cs">{bar.labelCs}</span>
              <span className="en">{bar.labelEn}</span>
            </span>
            <div className="disinfo-chart__track h-[7px] overflow-hidden bg-[rgba(11,16,32,0.06)]">
              <div
                className={`disinfo-chart__fill ${live ? "is-in" : ""} ${
                  bar.exposed ? "is-exposed" : ""
                }`}
                style={{
                  "--w": `${(bar.value / MAX_VALUE) * 100}%`,
                  "--i": i,
                }}
              />
            </div>
            <span className="text-right font-mono text-[12px] tabular-nums text-mid">
              {bar.value}%
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-7 font-mono text-[10px] leading-relaxed text-mid opacity-55">
        <span className="cs">Zdroj: </span>
        <span className="en">Source: </span>
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 transition-colors hover:text-accent"
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
