import { useEffect, useId, useRef, useState } from "react";

// Space the panel needs below the trigger before it flips upward (px).
const FLIP_THRESHOLD = 360;
// Fixed site nav height — the panel must not open underneath it.
const NAV_OFFSET = 72;

function Chevron({ open }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 text-mid transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 1.5l5 5 5-5" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      <path d="M1 5.2 4.3 8.5 11 1.5" />
    </svg>
  );
}

/**
 * Listbox select that matches the site's dropdowns instead of the browser's
 * native popup. `options` is [{ value, label, hint? }]; `hint` is a quiet
 * secondary label shown at the right of each row.
 */
export function FormSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  invalid = false,
  triggerRef,
}) {
  const listId = useId();
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const innerTriggerRef = useRef(null);
  const buttonRef = triggerRef ?? innerTriggerRef;
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [active, setActive] = useState(0);

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  function openList(index) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const below = window.innerHeight - rect.bottom;
      setDropUp(below < FLIP_THRESHOLD && rect.top - NAV_OFFSET > below);
    }
    setActive(index ?? (selectedIndex >= 0 ? selectedIndex : 0));
    setOpen(true);
  }

  function closeList({ restoreFocus = true } = {}) {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }

  function choose(index) {
    const option = options[index];
    if (option) onChange(option.value);
    closeList();
  }

  useEffect(() => {
    if (!open) return undefined;
    listRef.current?.focus({ preventScroll: true });

    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        closeList({ restoreFocus: false });
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function onTriggerKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openList();
    }
  }

  function onListKeyDown(event) {
    const last = options.length - 1;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActive((index) => Math.min(index + 1, last));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        event.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(active);
        break;
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        closeList();
        break;
      case "Tab":
        closeList({ restoreFocus: false });
        break;
      default:
        break;
    }
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        id={id}
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-invalid={invalid || undefined}
        className={`group flex min-h-[46px] w-full cursor-pointer items-center justify-between gap-3 border-0 border-b bg-transparent py-3 text-left font-sans text-[14.5px] outline-none transition-colors duration-200 max-lg:text-[16px] ${
          invalid || open
            ? "border-b-dark"
            : "border-b-separator hover:border-b-mid focus-visible:border-b-dark"
        } ${selected ? "text-dark" : "text-mid"}`}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <Chevron open={open} />
      </button>

      {open ? (
        <ul
          id={listId}
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={id}
          aria-activedescendant={`${listId}-${active}`}
          onKeyDown={onListKeyDown}
          className={`absolute right-0 z-30 m-0 w-max max-w-[calc(100vw-2.5rem)] min-w-full max-h-[min(480px,60vh)] list-none overflow-y-auto overscroll-contain border border-dark/10 bg-card/95 p-1.5 shadow-[0_28px_64px_-16px_rgba(11,16,32,0.28),0_2px_6px_rgba(11,16,32,0.06)] backdrop-blur-xl outline-none [scrollbar-color:rgba(11,16,32,0.22)_transparent] [scrollbar-width:thin] animate-[panelIn_0.3s_var(--ease-out-expo)_both] motion-reduce:animate-none ${
            dropUp ? "bottom-[calc(100%+6px)] origin-bottom" : "top-[calc(100%+6px)] origin-top"
          }`}
        >
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const isActive = index === active;
            return (
              <li
                key={option.value}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={isSelected}
                data-index={index}
                className={`relative flex min-h-[44px] cursor-pointer items-center gap-3 px-4 py-2 text-dark transition-colors duration-150 before:absolute before:top-2 before:bottom-2 before:left-0 before:w-0.5 before:origin-center before:bg-accent before:transition-transform before:duration-200 before:content-[''] sm:min-h-[40px] ${
                  isActive ? "bg-dark/[0.05] before:scale-y-100" : "before:scale-y-0"
                }`}
                onPointerEnter={() => setActive(index)}
                onClick={() => choose(index)}
              >
                <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span
                    className={`text-[13px] leading-[1.35] tracking-[0.3px] whitespace-nowrap ${isSelected ? "font-semibold" : "font-medium"}`}
                  >
                    {option.label}
                  </span>
                  {option.hint ? (
                    <span className="font-mono text-[10px] leading-none tracking-[1.6px] whitespace-nowrap text-mid uppercase">
                      {option.hint}
                    </span>
                  ) : null}
                </span>
                <span className="flex w-3 shrink-0 justify-end">
                  {isSelected ? <Check /> : null}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
