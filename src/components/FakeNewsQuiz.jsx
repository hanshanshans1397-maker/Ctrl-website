import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import { prefersReducedMotion } from "../utils/motion";

const CARDS = [
  {
    id: "wasabi",
    isFake: true,
    parts: [
      {
        cs: "Nová studie: čokoláda s wasabi ",
        en: "New study: wasabi chocolate ",
      },
      {
        cs: "prý",
        en: "supposedly",
        flag: {
          reasonCs:
            "Slovo „prý“ distancuje autora od tvrzení — nikdo za ním nestojí.",
          reasonEn:
            "“Supposedly” distances the author from the claim — nobody stands behind it.",
        },
      },
      {
        cs: " zvyšuje IQ dětí o 15 bodů, tvrdí ",
        en: " raises children's IQ by 15 points, say ",
      },
      {
        cs: "„vědci z Bruselu“",
        en: "“scientists in Brussels”",
        flag: {
          reasonCs:
            "Žádné jméno, instituce ani odkaz na studii. Klasický varovný signál.",
          reasonEn:
            "No name, institution or link to a study. A classic red flag.",
        },
      },
      { cs: ".", en: "." },
    ],
    explanationCs:
      "Mlhavá autorita + silné číslo + žádný zdroj. Přesně ten vzorec, který na workshopech trénujeme poznat na první pohled.",
    explanationEn:
      "Vague authority + a strong number + no source. Exactly the pattern we train students to spot at a glance.",
  },
  {
    id: "zebra",
    isFake: false,
    parts: [
      {
        cs: "Pruhy zebry jsou jedinečné jako otisky prstů — žádní dva jedinci nemají stejný vzor.",
        en: "Zebra stripes are as unique as fingerprints — no two individuals share the same pattern.",
      },
    ],
    explanationCs:
      "Ověřený biologický fakt. Žádný tlak na sdílení, žádná mlhavá autorita. Někdy je pravda překvapivější než výmysl.",
    explanationEn:
      "A verified biological fact. No pressure to share, no vague authority. Sometimes the truth is stranger than fiction.",
  },
  {
    id: "forward",
    isFake: true,
    parts: [
      {
        cs: "Pokud tuhle zprávu ",
        en: "If you don't forward this message ",
      },
      {
        cs: "nepřeposleš do 10 minut",
        en: "within 10 minutes",
        flag: {
          reasonCs:
            "Umělý deadline. Má vypnout přemýšlení a spustit rychlé sdílení.",
          reasonEn:
            "A fake deadline. It is meant to shut down thinking and trigger a fast share.",
        },
      },
      {
        cs: ", ",
        en: ", ",
      },
      {
        cs: "tvůj účet bude smazán",
        en: "your account will be deleted",
        flag: {
          reasonCs:
            "Platformy takhle účty nemažou. Výhrůžka osobní ztrátou je manipulační trik.",
          reasonEn:
            "Platforms do not delete accounts this way. Threatening a personal loss is a manipulation trick.",
        },
      },
      {
        cs: " kvůli „nové aktualizaci“.",
        en: " due to a “new update”.",
      },
    ],
    explanationCs:
      "Řetězová zpráva: urgency, strach, žádný oficiální odesílatel. Čím víc se přeposílá, tím víc působí jako pravda.",
    explanationEn:
      "A chain message: urgency, fear, no official sender. The more it is forwarded, the more true it feels.",
  },
  {
    id: "octopus",
    isFake: false,
    parts: [
      {
        cs: "Chobotnice mají tři srdce a modrou krev.",
        en: "Octopuses have three hearts and blue blood.",
      },
    ],
    explanationCs:
      "Opravdu. Jejich krev obsahuje měď místo železa — proto je modrá. Krátké, konkrétní, bez výzvy k akci.",
    explanationEn:
      "Really true. Their blood uses copper instead of iron, which is why it is blue. Short, specific, no call to action.",
  },
];

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function StatusIcons() {
  return (
    <span className="flex items-center gap-[4px]" aria-hidden="true">
      <svg width="13" height="9" viewBox="0 0 15 10" fill="none">
        <rect x="0" y="6" width="2.5" height="4" rx="0.4" fill="currentColor" />
        <rect x="4" y="4" width="2.5" height="6" rx="0.4" fill="currentColor" />
        <rect x="8" y="2" width="2.5" height="8" rx="0.4" fill="currentColor" />
        <rect x="12" y="0" width="2.5" height="10" rx="0.4" fill="currentColor" opacity="0.35" />
      </svg>
      <svg width="19" height="10" viewBox="0 0 22 11" fill="none">
        <rect x="0.6" y="0.6" width="18" height="9.8" rx="2.2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2.2" y="2.2" width="13.4" height="6.6" rx="1" fill="currentColor" />
        <path d="M20.2 3.4v4.2c.8-.4.8-1.4 0-1.8V3.4Z" fill="currentColor" opacity="0.55" />
      </svg>
    </span>
  );
}

function previewText(card, isEn) {
  const full = card.parts.map((part) => (isEn ? part.en : part.cs)).join("");
  return full.length > 72 ? `${full.slice(0, 71)}…` : full;
}

function MessageBody({ parts, reveal, activeFlag, onFlag, isEn }) {
  return parts.map((part, i) => {
    const text = isEn ? part.en : part.cs;
    if (!part.flag || !reveal) {
      return <span key={i}>{text}</span>;
    }
    const isActive = activeFlag === i;
    return (
      <button
        key={i}
        type="button"
        className={`fake-news-flag ${isActive ? "is-active" : ""}`}
        onClick={() => onFlag(i)}
        aria-pressed={isActive}
      >
        {text}
      </button>
    );
  });
}

export function FakeNewsQuiz() {
  const { isEn } = useLang();
  const rootRef = useRef(null);
  const phoneRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [activeFlag, setActiveFlag] = useState(null);
  const [score, setScore] = useState({ correct: 0, answered: 0 });
  const [clock, setClock] = useState(() => formatTime(new Date()));
  const [typing, setTyping] = useState(false);
  const [arrived, setArrived] = useState(false);
  const [open, setOpen] = useState(false);

  const card = CARDS[index];
  const isCorrect = answer !== null && answer === card.isFake;
  const flagIndexes = card.parts
    .map((part, i) => (part.flag ? i : null))
    .filter((i) => i !== null);
  const activePart =
    activeFlag !== null ? card.parts[activeFlag] : card.parts[flagIndexes[0]];
  const reduce = prefersReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => {
      setClock(formatTime(new Date()));
    }, 15000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setArrived(true);
          io.disconnect();
        }
      },
      { threshold: 0.28 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const phone = phoneRef.current;
    if (!root || !phone || prefersReducedMotion()) return undefined;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return undefined;
    }

    const onMove = (event) => {
      const r = root.getBoundingClientRect();
      const px = (event.clientX - r.left) / r.width - 0.5;
      const py = (event.clientY - r.top) / r.height - 0.5;
      phone.style.setProperty("--ty", `${(px * 14).toFixed(2)}deg`);
      phone.style.setProperty("--tx", `${(py * -9).toFixed(2)}deg`);
    };
    const onEnter = () => phone.classList.add("is-tracking");
    const onLeave = () => {
      phone.classList.remove("is-tracking");
      phone.style.setProperty("--ty", "0deg");
      phone.style.setProperty("--tx", "0deg");
    };

    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!arrived) return undefined;
    if (reduce) {
      setOpen(true);
      return undefined;
    }
    setOpen(false);
    const id = window.setTimeout(() => setOpen(true), 1600);
    return () => window.clearTimeout(id);
  }, [arrived, card.id, reduce]);

  useEffect(() => {
    if (!open) return undefined;
    setTyping(true);
    const delay = reduce ? 0 : 480;
    const id = window.setTimeout(() => setTyping(false), delay);
    return () => window.clearTimeout(id);
  }, [open, card.id, reduce]);

  const handleAnswer = (guessFake) => {
    if (answer !== null) return;
    setAnswer(guessFake);
    setScore((s) => ({
      correct: s.correct + (guessFake === card.isFake ? 1 : 0),
      answered: s.answered + 1,
    }));
    if (flagIndexes.length) setActiveFlag(flagIndexes[0]);
  };

  const handleNext = () => {
    setAnswer(null);
    setActiveFlag(null);
    setTyping(false);
    setOpen(reduce);
    setIndex((i) => (i + 1) % CARDS.length);
  };

  const handleOpen = () => setOpen(true);

  return (
    <div
      ref={rootRef}
      className="fake-news-quiz relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[360px]"
    >
      <div className="fake-news-phone" ref={phoneRef}>
        <div className="fake-news-phone__shell" aria-hidden="true">
          <span className="fake-news-phone__back">
            <span className="fake-news-phone__cam">
              <span className="fake-news-phone__lens" />
              <span className="fake-news-phone__lens" />
              <span className="fake-news-phone__flash" />
            </span>
          </span>
          <span className="fake-news-phone__btn fake-news-phone__btn--action" />
          <span className="fake-news-phone__btn fake-news-phone__btn--vol-up" />
          <span className="fake-news-phone__btn fake-news-phone__btn--vol-down" />
          <span className="fake-news-phone__btn fake-news-phone__btn--power" />
          <span className="fake-news-phone__btn fake-news-phone__btn--camera" />
        </div>

        <div className="fake-news-phone__glass">
          <div className="fake-news-phone__bezel">
          <div className="fake-news-phone__shine" aria-hidden="true" />
          <div className={`fake-news-phone__screen${open ? " is-open" : ""}`}>
          <div className="fake-news-phone__island" aria-hidden="true" />

          <div
            className={`fake-news-lock${arrived ? " is-arrived" : ""}${open ? " is-open" : ""}`}
            aria-hidden={open}
          >
            <div className="fake-news-lock__status">
              <span>{clock}</span>
              <StatusIcons />
            </div>
            <div className="fake-news-lock__clock">{clock}</div>
            {arrived && (
              <button
                type="button"
                key={card.id}
                className="fake-news-banner"
                onClick={handleOpen}
              >
                <span className="fake-news-banner__avatar" aria-hidden="true">
                  TH
                </span>
                <span className="fake-news-banner__copy">
                  <span className="fake-news-banner__row">
                    <span className="fake-news-banner__name">
                      <span className="cs">Teta Hana</span>
                      <span className="en">Aunt Hana</span>
                    </span>
                    <span className="fake-news-banner__when">
                      <span className="cs">teď</span>
                      <span className="en">now</span>
                    </span>
                  </span>
                  <span className="fake-news-banner__app">
                    <span className="cs">Zprávy</span>
                    <span className="en">Messages</span>
                  </span>
                  <span className="fake-news-banner__text">
                    {previewText(card, isEn)}
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className={`fake-news-chat${open ? " is-open" : ""}`} aria-hidden={!open}>
            <div className="fake-news-phone__status">
              <span>{clock}</span>
              <StatusIcons />
            </div>

            <div className="flex shrink-0 items-center gap-2.5 border-b border-[rgba(11,16,32,0.06)] bg-card/70 px-3.5 py-2.5 backdrop-blur-md">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-dim font-mono text-[10px] font-semibold tracking-[0.5px] text-accent"
              aria-hidden="true"
            >
              TH
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-semibold leading-tight text-dark">
                <span className="cs">Teta Hana</span>
                <span className="en">Aunt Hana</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[1.4px] text-mid">
                <span className="cs">přeposláno vícekrát</span>
                <span className="en">forwarded many times</span>
              </div>
            </div>
            <div className="font-mono text-[10px] tabular-nums tracking-[1px] text-mid">
              {score.correct}/{score.answered || 0}
            </div>
          </div>

          <div className="fake-news-phone__thread">
            <p className="mb-2.5 text-center font-mono text-[9px] uppercase tracking-[1.6px] text-mid opacity-70">
              <span className="cs">Dnes</span>
              <span className="en">Today</span>
            </p>

            {typing ? (
              <div
                className="fake-news-quiz__bubble fake-news-quiz__typing max-w-[94%] rounded-[20px] rounded-tl-[6px] bg-card px-3.5 py-3 shadow-[0_8px_24px_rgba(11,16,32,0.06)]"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
            ) : (
              <div
                key={card.id}
                className="fake-news-quiz__bubble max-w-[94%] rounded-[20px] rounded-tl-[6px] bg-card px-3.5 py-3 shadow-[0_8px_24px_rgba(11,16,32,0.06)]"
              >
                <div className="mb-1.5 flex items-center gap-1 font-mono text-[9px] uppercase tracking-[1.4px] text-mid opacity-70">
                  <span aria-hidden="true">&#8618;</span>
                  <span className="cs">Přeposláno</span>
                  <span className="en">Forwarded</span>
                </div>
                <p className="text-[14px] leading-[1.5] text-dark">
                  <MessageBody
                    parts={card.parts}
                    reveal={answer !== null}
                    activeFlag={activeFlag}
                    onFlag={setActiveFlag}
                    isEn={isEn}
                  />
                </p>
              </div>
            )}

            {answer !== null && (
              <div className="fake-news-quiz__result mt-2.5 max-w-[94%] rounded-[16px] bg-card px-3.5 py-3 shadow-[0_8px_24px_rgba(11,16,32,0.06)]">
                <div
                  className={`mb-2 font-mono text-[10px] font-semibold uppercase tracking-[1.4px] ${
                    isCorrect ? "text-[#2ea363]" : "text-[#c94545]"
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <span className="cs">Správně</span>
                      <span className="en">Correct</span>
                    </>
                  ) : (
                    <>
                      <span className="cs">Špatně</span>
                      <span className="en">Not quite</span>
                    </>
                  )}
                  {" — "}
                  {card.isFake ? (
                    <>
                      <span className="cs">je to fake</span>
                      <span className="en">it's fake</span>
                    </>
                  ) : (
                    <>
                      <span className="cs">je to pravda</span>
                      <span className="en">it's true</span>
                    </>
                  )}
                </div>
                <p className="text-[12.5px] leading-[1.55] text-mid">
                  {activePart?.flag
                    ? isEn
                      ? activePart.flag.reasonEn
                      : activePart.flag.reasonCs
                    : isEn
                      ? card.explanationEn
                      : card.explanationCs}
                </p>
                {flagIndexes.length > 0 && (
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[1.3px] text-mid opacity-70">
                    <span className="cs">Klepněte na podtržený text</span>
                    <span className="en">Tap the underlined text</span>
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="fake-news-phone__dock">
            {answer === null && !typing ? (
              <>
                <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[2px] text-mid">
                  <span className="cs">Je to fake news?</span>
                  <span className="en">Is this fake news?</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(true)}
                    className="fake-news-action border border-[rgba(11,16,32,0.12)] bg-card py-2.5 font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-dark"
                  >
                    <span className="cs">Ano, fake</span>
                    <span className="en">Yes, fake</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(false)}
                    className="fake-news-action border border-[rgba(11,16,32,0.12)] bg-card py-2.5 font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-dark"
                  >
                    <span className="cs">Ne, pravda</span>
                    <span className="en">No, true</span>
                  </button>
                </div>
              </>
            ) : answer !== null ? (
              <button
                type="button"
                onClick={handleNext}
                className="fake-news-action fake-news-action--next"
              >
                <span className="cs">Další zpráva</span>
                <span className="en">Next message</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            ) : null}
            <div className="fake-news-phone__home flex justify-center py-2.5" aria-hidden="true">
              <div className="h-[4px] w-[108px] rounded-full bg-dark/18" />
            </div>
          </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
