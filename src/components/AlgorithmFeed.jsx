import { useMemo, useState } from "react";
import { useLang } from "../context/LangContext";

const TOPICS = ["climate", "sport", "tech", "food"];

const TOPIC_META = {
  climate: { cs: "Počasí", en: "Weather" },
  sport: { cs: "Sport", en: "Sport" },
  tech: { cs: "Tech", en: "Tech" },
  food: { cs: "Jídlo", en: "Food" },
};

const POOL = {
  climate: [
    {
      id: "c1",
      heat: 1,
      kickerCs: "Počasí",
      kickerEn: "Weather",
      titleCs: "Letošní léto opět láme teplotní rekordy",
      titleEn: "This summer is breaking temperature records again",
    },
    {
      id: "c2",
      heat: 2,
      kickerCs: "Klima",
      kickerEn: "Climate",
      titleCs: "Proč ti o tomhle létě nikdo neřekl pravdu",
      titleEn: "Why nobody told you the truth about this summer",
    },
    {
      id: "c3",
      heat: 3,
      kickerCs: "Exkluzivně",
      kickerEn: "Exclusive",
      titleCs: "Sdílej, než to smažou. Video, které ti zakážou.",
      titleEn: "Share before they delete it. The video they will ban.",
    },
    {
      id: "c4",
      heat: 4,
      kickerCs: "Poslední šance",
      kickerEn: "Last chance",
      titleCs: "Oni vědí, že se bojíš. Proto to tají.",
      titleEn: "They know you are afraid. That is why they hide it.",
    },
  ],
  sport: [
    {
      id: "s1",
      heat: 1,
      kickerCs: "Sport",
      kickerEn: "Sport",
      titleCs: "Sestavy na dnešní derby jsou venku",
      titleEn: "Today's derby line-ups are out",
    },
    {
      id: "s2",
      heat: 2,
      kickerCs: "Liga",
      kickerEn: "League",
      titleCs: "Sudí znovu ukradl zápas. Důkaz uvnitř.",
      titleEn: "The referee stole the match again. Proof inside.",
    },
    {
      id: "s3",
      heat: 3,
      kickerCs: "Exkluzivně",
      kickerEn: "Exclusive",
      titleCs: "Tohle video ti ve zprávách nepustí",
      titleEn: "The news will never air this video",
    },
    {
      id: "s4",
      heat: 4,
      kickerCs: "Poslední šance",
      kickerEn: "Last chance",
      titleCs: "Mafie v lize. Sdílej, než to smažou.",
      titleEn: "The league is rigged. Share before they delete it.",
    },
  ],
  tech: [
    {
      id: "t1",
      heat: 1,
      kickerCs: "Tech",
      kickerEn: "Tech",
      titleCs: "Nový telefon má vydržet tři dny na jedno nabití",
      titleEn: "New phone is said to last three days on one charge",
    },
    {
      id: "t2",
      heat: 2,
      kickerCs: "Soukromí",
      kickerEn: "Privacy",
      titleCs: "Tohle tvoje telefon o tobě tají",
      titleEn: "This is what your phone is hiding about you",
    },
    {
      id: "t3",
      heat: 3,
      kickerCs: "Varování",
      kickerEn: "Warning",
      titleCs: "Zakázané nastavení, které ti schovávají",
      titleEn: "The forbidden setting they are hiding from you",
    },
    {
      id: "t4",
      heat: 4,
      kickerCs: "Okamžitě",
      kickerEn: "Now",
      titleCs: "Vypni to hned. Jinak tě sledují.",
      titleEn: "Turn it off now. Otherwise they are watching you.",
    },
  ],
  food: [
    {
      id: "f1",
      heat: 1,
      kickerCs: "Jídlo",
      kickerEn: "Food",
      titleCs: "Tři ingredience. Jeden chléb.",
      titleEn: "Three ingredients. One loaf.",
    },
    {
      id: "f2",
      heat: 2,
      kickerCs: "Zdraví",
      kickerEn: "Health",
      titleCs: "Tohle v supermarketu nikdy neprodají",
      titleEn: "They will never sell you this in a supermarket",
    },
    {
      id: "f3",
      heat: 3,
      kickerCs: "Odhalení",
      kickerEn: "Exposed",
      titleCs: "Proč ti lžou o tom, co jíš",
      titleEn: "Why they lie to you about what you eat",
    },
    {
      id: "f4",
      heat: 4,
      kickerCs: "Poslední šance",
      kickerEn: "Last chance",
      titleCs: "Sdílej recept, než ho zakážou.",
      titleEn: "Share the recipe before they ban it.",
    },
  ],
};

const INITIAL_FEED = [
  POOL.climate[0],
  POOL.sport[0],
  POOL.tech[0],
  POOL.food[0],
];

const HEAT_META = {
  1: { reach: "2.4k", timeCs: "12 min", timeEn: "12 min" },
  2: { reach: "18k", timeCs: "3 min", timeEn: "3 min" },
  3: { reach: "142k", timeCs: "teď", timeEn: "now" },
  4: { reach: "1.2M", timeCs: "živě", timeEn: "live" },
};

function buildFeed(topic, step) {
  const own = POOL[topic];
  const others = TOPICS.filter((t) => t !== topic).map((t) => POOL[t][0]);

  if (step <= 1) return [own[0], own[1], others[0], others[1]];
  if (step === 2) return [own[0], own[1], own[2], others[0]];
  return [own[0], own[1], own[2], own[3]];
}

function topicOf(item) {
  return TOPICS.find((topic) => POOL[topic].some((entry) => entry.id === item.id));
}

function uniqueTopics(feed) {
  return new Set(feed.map(topicOf)).size;
}

function HeatLabel({ heat }) {
  if (heat <= 1) return null;
  if (heat === 2) {
    return (
      <>
        <span className="cs">silnější háček</span>
        <span className="en">stronger hook</span>
      </>
    );
  }
  if (heat === 3) {
    return (
      <>
        <span className="cs">naléhavost</span>
        <span className="en">urgency</span>
      </>
    );
  }
  return (
    <>
      <span className="cs">panika</span>
      <span className="en">panic</span>
    </>
  );
}

export function AlgorithmFeed() {
  const { isEn } = useLang();
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState(null);
  const [feed, setFeed] = useState(INITIAL_FEED);
  const [pulse, setPulse] = useState(0);

  const done = step >= 3;
  const diversity = uniqueTopics(feed);
  const diversityPct = (diversity / TOPICS.length) * 100;
  const clicksLeft = 3 - step;
  const mix = useMemo(
    () =>
      TOPICS.map((t) => ({
        id: t,
        count: feed.filter((item) => topicOf(item) === t).length,
      })),
    [feed],
  );

  const handlePick = (item) => {
    if (done) return;

    const nextTopic = topic ?? topicOf(item);
    const nextStep = step + 1;
    setTopic(nextTopic);
    setStep(nextStep);
    setFeed(buildFeed(nextTopic, nextStep));
    setPulse((n) => n + 1);
  };

  const handleReset = () => {
    setStep(0);
    setTopic(null);
    setFeed(INITIAL_FEED);
    setPulse((n) => n + 1);
  };

  const hint = useMemo(() => {
    if (done) {
      return isEn ? "Feed collapsed to one topic." : "Feed se zúžil na jedno téma.";
    }
    if (step === 0) {
      return isEn
        ? "Tap any post. The ranking will shift."
        : "Klepněte na příspěvek. Pořadí se změní.";
    }
    return isEn
      ? `${clicksLeft} tap${clicksLeft === 1 ? "" : "s"} left`
      : clicksLeft === 1
        ? "Zbývá 1 kliknutí"
        : `Zbývají ${clicksLeft} kliknutí`;
  }, [done, step, clicksLeft, isEn]);

  return (
    <div className="algo-feed w-full">
      <div className="algo-feed__shell overflow-hidden border border-[rgba(11,16,32,0.1)] bg-card">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(11,16,32,0.08)] bg-[#f7f6f3] px-5 py-3.5 max-sm:px-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[2px] text-accent">
              <span className="cs">Pro tebe</span>
              <span className="en">For you</span>
            </span>
            <span className="hidden h-3 w-px bg-[rgba(11,16,32,0.12)] sm:block" aria-hidden="true" />
            <p className="hidden text-[12px] text-mid sm:block">{hint}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i < step ? "bg-accent" : "bg-[rgba(11,16,32,0.14)]"
                  }`}
                />
              ))}
            </div>
            <div className="min-w-[132px]">
              <div className="mb-1 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[1.3px] text-mid">
                <span className="cs">Rozmanitost</span>
                <span className="en">Diversity</span>
                <span className="tabular-nums text-dark">
                  {diversity}/{TOPICS.length}
                </span>
              </div>
              <div
                className="h-1 overflow-hidden bg-[rgba(11,16,32,0.08)]"
                role="img"
                aria-label={
                  isEn
                    ? `Feed diversity: ${diversity} of ${TOPICS.length} topics`
                    : `Rozmanitost feedu: ${diversity} z ${TOPICS.length} témat`
                }
              >
                <div
                  className="algo-feed__meter h-full w-full bg-accent"
                  style={{ transform: `translateX(${diversityPct - 100}%)` }}
                />
              </div>
            </div>
          </div>
        </header>

        <p className="px-5 pt-3 text-[12px] text-mid sm:hidden">{hint}</p>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px]">
          <div
            key={pulse}
            className="algo-feed__grid divide-y divide-[rgba(11,16,32,0.07)]"
            aria-live="polite"
          >
            {feed.map((item, index) => {
              const meta = HEAT_META[item.heat];
              const locked = topic && topicOf(item) === topic;
              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={done}
                  onClick={() => handlePick(item)}
                  className="algo-feed__card w-full cursor-pointer bg-card px-5 py-3.5 text-left disabled:cursor-default max-sm:px-4"
                  data-heat={item.heat}
                >
                  <span
                    className={`algo-feed__card-in block${item.heat >= 3 ? " is-hot" : ""}`}
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <span className="mb-1.5 flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-accent">
                        {isEn ? item.kickerEn : item.kickerCs}
                      </span>
                      {locked && step > 0 && (
                        <span className="bg-accent-dim px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[1.2px] text-accent">
                          <span className="cs">doporučeno</span>
                          <span className="en">recommended</span>
                        </span>
                      )}
                      <span className="ml-auto font-mono text-[9px] uppercase tracking-[1.2px] text-mid">
                        <HeatLabel heat={item.heat} />
                      </span>
                    </span>
                    <span className="block text-[15px] leading-snug font-semibold tracking-[-0.2px] text-dark">
                      {isEn ? item.titleEn : item.titleCs}
                    </span>
                    <span className="mt-2 flex items-center gap-3 font-mono text-[10px] tabular-nums tracking-[0.4px] text-mid">
                      <span>{isEn ? meta.timeEn : meta.timeCs}</span>
                      <span aria-hidden="true">·</span>
                      <span>{meta.reach}</span>
                      <span
                        className="algo-feed__heat ml-auto flex gap-[3px]"
                        aria-hidden="true"
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <i
                            key={n}
                            className={`block h-[7px] w-[3px] ${
                              n <= item.heat ? "bg-accent" : "bg-[rgba(11,16,32,0.12)]"
                            }`}
                          />
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <aside className="border-t border-[rgba(11,16,32,0.08)] bg-[#f7f6f3] px-5 py-5 lg:border-t-0 lg:border-l max-sm:px-4">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[1.6px] text-mid">
              <span className="cs">Co algoritmus vidí</span>
              <span className="en">What the algorithm sees</span>
            </p>

            <dl className="mb-5 grid grid-cols-2 gap-3">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[1.3px] text-mid">
                  <span className="cs">Kliknutí</span>
                  <span className="en">Taps</span>
                </dt>
                <dd className="mt-1 text-[22px] font-extrabold tracking-[-1px] text-dark">
                  {step}/3
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[1.3px] text-mid">
                  <span className="cs">Zámek</span>
                  <span className="en">Lock</span>
                </dt>
                <dd className="mt-1 text-[15px] font-semibold tracking-[-0.3px] text-dark">
                  {topic ? (
                    isEn ? TOPIC_META[topic].en : TOPIC_META[topic].cs
                  ) : (
                    <span className="font-normal text-mid">
                      <span className="cs">otevřený</span>
                      <span className="en">open</span>
                    </span>
                  )}
                </dd>
              </div>
            </dl>

            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {mix.map((row) => (
                <li key={row.id} className="grid grid-cols-[4.2rem_1fr_1.1rem] items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-mid">
                    {isEn ? TOPIC_META[row.id].en : TOPIC_META[row.id].cs}
                  </span>
                  <div className="h-[5px] overflow-hidden bg-[rgba(11,16,32,0.08)]">
                    <div
                      className="algo-feed__mix h-full bg-accent"
                      style={{ "--mix": row.count / 4 }}
                    />
                  </div>
                  <span className="text-right font-mono text-[10px] tabular-nums text-dark">
                    {row.count}
                  </span>
                </li>
              ))}
            </ul>

            {done && (
              <div className="algo-feed__result mt-5 border-t border-[rgba(11,16,32,0.08)] pt-4">
                <p className="text-[13px] leading-[1.65] text-dark">
                  <span className="cs">
                    Tři kliknutí. Feed už není okno do světa — je to zrcadlo
                    toho, na co jste klikli. Algoritmus neukazuje, co je pravda.
                    Ukazuje, co vás udrží.
                  </span>
                  <span className="en">
                    Three taps. The feed is no longer a window on the world — it
                    is a mirror of what you clicked. The algorithm does not show
                    what is true. It shows what keeps you there.
                  </span>
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="algo-feed__reset mt-3 font-mono text-[11px] uppercase tracking-[1.5px] text-accent"
                >
                  <span className="cs">Zkusit znovu</span>
                  <span className="en">Try again</span>
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
