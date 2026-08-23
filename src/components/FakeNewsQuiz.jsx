import { useMemo, useState } from "react";
import { useLang } from "../context/LangContext";

const CARDS = [
  {
    id: "wasabi",
    emoji: "🍫",
    isFake: true,
    messageCs:
      "Studie: Čokoláda s příchutí wasabi prý zvyšuje IQ dětí o 15 bodů, tvrdí „vědci z Bruselu“.",
    messageEn:
      "Study claims wasabi-flavoured chocolate raises children's IQ by 15 points, say 'scientists in Brussels'.",
    explanationCs:
      "Žádná konkrétní studie, instituce ani jméno vědce — jen mlhavé „vědci tvrdí“. To je klasický varovný signál.",
    explanationEn:
      "No named study, institution or scientist — just a vague 'scientists say'. That's a classic red flag.",
  },
  {
    id: "zebra",
    emoji: "🦓",
    isFake: false,
    messageCs:
      "Pruhy zebry jsou jedinečné jako otisky prstů — žádní dva jedinci nemají stejný vzor.",
    messageEn:
      "Zebra stripes are as unique as fingerprints — no two individuals share the same pattern.",
    explanationCs:
      "Ověřený biologický fakt popsaný zoology. Někdy je pravda překvapivější než výmysl.",
    explanationEn:
      "A verified biological fact documented by zoologists. Sometimes the truth is stranger than fiction.",
  },
  {
    id: "delete-account",
    emoji: "📵",
    isFake: true,
    messageCs:
      "Pokud tuhle zprávu nepřepošleš do 10 minut, tvůj účet bude kvůli „nové aktualizaci“ smazán.",
    messageEn:
      "If you don't forward this message within 10 minutes, your account will be deleted due to a 'new update'.",
    explanationCs:
      "Tlak na rychlé sdílení bez přemýšlení je typický manipulační trik — platformy takhle účty nemažou.",
    explanationEn:
      "Pressure to share fast without thinking is a classic manipulation trick — platforms don't delete accounts this way.",
  },
  {
    id: "octopus",
    emoji: "🐙",
    isFake: false,
    messageCs: "Chobotnice mají tři srdce a modrou krev.",
    messageEn: "Octopuses have three hearts and blue blood.",
    explanationCs:
      "Ano, opravdu — jejich krev obsahuje měď místo železa, proto je modrá.",
    explanationEn:
      "Really true — their blood uses copper instead of iron, which is why it's blue.",
  },
];

export function FakeNewsQuiz() {
  const { isEn } = useLang();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState({ correct: 0, answered: 0 });

  const card = CARDS[index];
  const isCorrect = answer !== null && answer === card.isFake;

  const handleAnswer = (guessFake) => {
    if (answer !== null) return;
    setAnswer(guessFake);
    setScore((s) => ({
      correct: s.correct + (guessFake === card.isFake ? 1 : 0),
      answered: s.answered + 1,
    }));
  };

  const handleNext = () => {
    setAnswer(null);
    setIndex((i) => (i + 1) % CARDS.length);
  };

  const explanation = useMemo(
    () => (isEn ? card.explanationEn : card.explanationCs),
    [card, isEn],
  );

  return (
    <div className="fake-news-quiz w-full max-w-[360px]">
      <div className="fake-news-quiz__frame relative rounded-[28px] border border-[rgba(11,16,32,0.1)] bg-bg2 p-3 shadow-[0_20px_60px_rgba(11,16,32,0.08)]">
        <div className="flex items-center justify-between px-2 pb-2.5">
          <span className="font-mono text-[10px] tracking-[2px] uppercase text-mid">
            <span className="cs">Přeposlaná zpráva</span>
            <span className="en">Forwarded message</span>
          </span>
          <span className="font-mono text-[10px] tracking-[1px] text-mid">
            {score.correct}/{score.answered || 0}
          </span>
        </div>

        <div
          key={card.id}
          className="fake-news-quiz__bubble rounded-[18px] rounded-tl-[4px] bg-bg px-4 py-4 border border-[rgba(11,16,32,0.06)]"
        >
          <div className="mb-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[1.5px] text-mid opacity-70">
            <span aria-hidden="true">&#8618;</span>
            <span className="cs">Přeposláno vícekrát</span>
            <span className="en">Forwarded many times</span>
          </div>
          <p className="text-[15px] leading-[1.55] text-dark">
            <span className="mr-1.5" aria-hidden="true">
              {card.emoji}
            </span>
            {isEn ? card.messageEn : card.messageCs}
          </p>
        </div>

        {answer === null ? (
          <div className="mt-3 px-1">
            <p className="mb-2.5 text-center font-mono text-[10px] uppercase tracking-[2px] text-mid">
              <span className="cs">Je to fake news?</span>
              <span className="en">Is this fake news?</span>
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleAnswer(true)}
                className="flex-1 border border-[rgba(11,16,32,0.15)] py-2.5 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-dark transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <span className="cs">Ano, fake</span>
                <span className="en">Yes, fake</span>
              </button>
              <button
                type="button"
                onClick={() => handleAnswer(false)}
                className="flex-1 border border-[rgba(11,16,32,0.15)] py-2.5 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-dark transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <span className="cs">Ne, pravda</span>
                <span className="en">No, true</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="fake-news-quiz__result mt-3 px-1">
            <div
              className={`flex items-center gap-2 rounded-[10px] px-3 py-2.5 ${
                isCorrect
                  ? "bg-[rgba(46,163,99,0.1)] text-[#2ea363]"
                  : "bg-[rgba(224,73,73,0.08)] text-[#c94545]"
              }`}
            >
              <span className="text-[15px]" aria-hidden="true">
                {isCorrect ? "✓" : "✕"}
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[1.5px]">
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
              </span>
            </div>
            <p className="mt-2.5 text-[13px] leading-[1.65] text-mid">
              {explanation}
            </p>
            <button
              type="button"
              onClick={handleNext}
              className="mt-3 w-full border border-dark bg-dark py-2.5 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-bg transition-colors duration-200 hover:bg-accent hover:border-accent"
            >
              <span className="cs">Další zpráva &rarr;</span>
              <span className="en">Next message &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
