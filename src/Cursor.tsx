import { useEffect, useRef } from "react";

const INTERACTIVE = "a[href], button, [role='button'], label, summary";
const TEXT = "input, textarea, select, [contenteditable='true']";

/**
 * Dot + trailing ring. Only on fine pointers without reduced motion; touch keeps the native cursor.
 * Everything runs through refs and one rAF loop that stops when the ring has caught up.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ok = matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!ok.matches) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    let x = -100, y = -100, rx = -100, ry = -100;
    let raf = 0;
    const d = dot.current!;
    const r = ring.current!;

    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.2 ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      // derive the state from the element under the pointer on every move (pointerover can be skipped
      // when the element itself moves, e.g. the magnetic button), and only touch the DOM on change
      const t = e.target as Element | null;
      const next = t?.closest(TEXT) ? "text" : t?.closest(INTERACTIVE) ? "hover" : "on";
      if (root.dataset.cursor !== next) root.dataset.cursor = next;
      kick();
    };
    const onDown = () => root.classList.add("cursor-down");
    const onUp = () => root.classList.remove("cursor-down");
    const onLeave = () => delete root.dataset.cursor;

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onDown, { passive: true });
    addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor", "cursor-down");
      delete root.dataset.cursor;
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden>
        <span />
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden>
        <span />
      </div>
    </>
  );
}
