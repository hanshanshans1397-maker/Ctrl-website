const ITEM =
  "ticker-item font-mono text-[11px] font-normal tracking-[2px] uppercase text-mid px-12 max-sm:px-5 whitespace-nowrap shrink-0 flex items-center gap-12";

export function TickerBar({ wrapId = "ticker" }) {
  return (
    <div className="ticker border-t border-b border-separator overflow-hidden py-3.5 bg-bg">
      <div className="ticker-wrap flex" id={wrapId}>
        <div className={ITEM}>CTRL Europe</div>
        <div className={`cs ${ITEM}`}>Digitální odolnost</div>
        <div className={`en ${ITEM}`}>Digital Resilience</div>
        <div className={ITEM}>jihomoravský kraj</div>
        <div className={ITEM}>CTRL Summit 2026</div>
        <div className="ticker-item px-12 max-sm:px-5 shrink-0 flex items-center gap-12">
          <img
            src="/cichnovabrnofull.png"
            alt="Cichnova Brno"
            className="h-[28px] w-auto opacity-50 grayscale"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={`cs ${ITEM}`}>Mediální gramotnost</div>
        <div className={`en ${ITEM}`}>Media Literacy</div>
        <div className={`cs ${ITEM}`}>AI povědomí</div>
        <div className={`en ${ITEM}`}>AI Awareness</div>
      </div>
    </div>
  );
}
