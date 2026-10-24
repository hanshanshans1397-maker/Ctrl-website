import { useEffect, useId, useRef, useState } from 'react';
import { useLang } from '../../context/LangContext';

export function ArticleGallery({ items }) {
  const { isEn } = useLang();
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);
  const titleId = useId();
  const photo = active == null ? null : items[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (photo) {
      if (!dialog.open) dialog.showModal();
      return undefined;
    }

    if (dialog.open) dialog.close();
    return undefined;
  }, [photo]);

  useEffect(() => {
    if (active == null) return undefined;

    const onKey = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActive((index) => (index + 1) % items.length);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActive((index) => (index - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items.length]);

  const close = () => setActive(null);
  const step = (delta) => {
    setActive((index) => (index + delta + items.length) % items.length);
  };

  return (
    <figure className="article-gallery">
      <div className="article-gallery__grid">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="article-gallery__shot"
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
            onClick={() => setActive(index)}
            aria-haspopup="dialog"
          >
            <img
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">
              <span className="cs">Zvětšit fotografii: {item.alt.cs}</span>
              <span className="en">Enlarge photo: {item.alt.en}</span>
            </span>
          </button>
        ))}
      </div>
      <figcaption>
        <span className="cs">Kliknutím fotografii zvětšíte</span>
        <span className="en">Click a photo to enlarge it</span>
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
        {photo ? (
          <div className="news-invite-dialog__panel">
            <p id={titleId} className="sr-only">
              <span className="cs">{photo.alt.cs}</span>
              <span className="en">{photo.alt.en}</span>
            </p>
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={isEn ? photo.alt.en : photo.alt.cs}
              className="news-invite-dialog__img"
            />
            <div className="article-gallery__nav">
              <button type="button" className="news-invite-dialog__close" onClick={() => step(-1)}>
                <span className="cs">Předchozí</span>
                <span className="en">Previous</span>
              </button>
              <span className="article-gallery__count">
                {active + 1} / {items.length}
              </span>
              <button type="button" className="news-invite-dialog__close" onClick={() => step(1)}>
                <span className="cs">Další</span>
                <span className="en">Next</span>
              </button>
              <button type="button" className="news-invite-dialog__close" onClick={close}>
                <span className="cs">Zavřít</span>
                <span className="en">Close</span>
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </figure>
  );
}
