import { useEffect, useId, useRef, useState } from 'react';

function InviteImage({ src, alt, width, height, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-full w-full object-cover ${className}`.trim()}
      decoding="async"
    />
  );
}

export function NewsInvite({ src, width, height, title }) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const labelCs = title?.cs ?? 'Pozvánka';
  const labelEn = title?.en ?? 'Invitation';
  const alt = `${labelCs} — CTRL Europe`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      return undefined;
    }

    if (dialog.open) dialog.close();
    return undefined;
  }, [open]);

  const close = () => setOpen(false);

  return (
    <figure className="news-invite-wrap mb-10 mt-2 w-full">
      <button
        type="button"
        className="news-invite news-invite--article block w-full overflow-hidden"
        style={{ aspectRatio: `${width} / ${height}` }}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <InviteImage src={src} alt="" width={width} height={height} />
        <span className="sr-only">
          <span className="cs">Zvětšit pozvánku: {labelCs}</span>
          <span className="en">Enlarge invitation: {labelEn}</span>
        </span>
      </button>
      <figcaption className="mt-3 font-mono text-[10px] tracking-[1.5px] text-mid uppercase">
        <span className="cs">Kliknutím zvětšíte pozvánku</span>
        <span className="en">Click to enlarge the invitation</span>
      </figcaption>

      <dialog
        ref={dialogRef}
        className="news-invite-dialog"
        aria-labelledby={titleId}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="news-invite-dialog__panel">
          <p id={titleId} className="sr-only">
            <span className="cs">{labelCs}</span>
            <span className="en">{labelEn}</span>
          </p>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="news-invite-dialog__img"
          />
          <button type="button" className="news-invite-dialog__close" onClick={close}>
            <span className="cs">Zavřít</span>
            <span className="en">Close</span>
          </button>
        </div>
      </dialog>
    </figure>
  );
}
