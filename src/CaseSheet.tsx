import { useEffect, useRef } from "react";

import { closeCase, openCase, plainMount, useCase } from "./case";
import { allProjects } from "./data";
import { Arrow } from "./icons";
import { Shot, Tags } from "./ui";

const Chevron = ({ dir }: { dir: "l" | "r" }) => (
  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
    <path d={dir === "l" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function CaseSheet() {
  const id = useCase();
  const panel = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const idx = allProjects.findIndex((p) => p.id === id);
  const p = idx >= 0 ? allProjects[idx] : null;
  const prev = allProjects[(idx - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(idx + 1) % allProjects.length];
  const open = p !== null;

  // focus, scroll lock, keyboard; focus returns to the tile on close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("[data-close]")?.focus({ preventScroll: true, focusVisible: false } as FocusOptions);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return closeCase();
      if (e.key === "ArrowLeft" && !(e.target instanceof HTMLInputElement)) openCase(prevRef.current);
      if (e.key === "ArrowRight" && !(e.target instanceof HTMLInputElement)) openCase(nextRef.current);
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>("a[href],button");
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", onKey);
      document.querySelector<HTMLElement>(`[data-tile="${lastIdRef.current}"]`)?.focus({ preventScroll: true });
    };
  }, [open]);

  // keep handlers pointed at the current neighbours without re-binding
  const prevRef = useRef(prev.id);
  const nextRef = useRef(next.id);
  const lastIdRef = useRef<string | null>(id);
  useEffect(() => {
    prevRef.current = prev.id;
    nextRef.current = next.id;
    if (id) lastIdRef.current = id;
    scroller.current?.scrollTo({ top: 0 });
  }, [id, prev.id, next.id]);

  if (!p) return null;

  return (
    <div className="fixed inset-0 z-[85]" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button
        aria-label="Close case study"
        tabIndex={-1}
        onClick={closeCase}
        className={`absolute inset-0 h-full w-full cursor-default bg-scrim backdrop-blur-[2px] ${plainMount ? "scrim-in" : ""}`}
      />
      <div
        ref={panel}
        className={`sheet-panel absolute inset-y-0 right-0 flex w-full flex-col bg-bg shadow-[-24px_0_64px_-32px] shadow-shadow/60 sm:w-[min(820px,94vw)] sm:rounded-l-3xl ${plainMount ? "sheet-in" : ""}`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-8">
          <p className="min-w-0 truncate text-sm text-muted">
            <span className="tabular-nums">
              {idx + 1} / {allProjects.length}
            </span>
            <span className="mx-2 text-faint" aria-hidden>
              ·
            </span>
            {p.kind}
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              onClick={() => openCase(prev.id)}
              aria-label={`Previous: ${prev.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/[0.07] hover:text-fg"
            >
              <Chevron dir="l" />
            </button>
            <button
              onClick={() => openCase(next.id)}
              aria-label={`Next: ${next.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/[0.07] hover:text-fg"
            >
              <Chevron dir="r" />
            </button>
            <button
              data-close
              onClick={closeCase}
              aria-label="Close case study"
              className="burger ml-1 flex h-9 w-9 flex-col items-center justify-center gap-[4px] rounded-full border border-line-2"
              aria-expanded="true"
            >
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>

        <div ref={scroller} className="flex-1 overflow-y-auto overscroll-contain px-5 pb-16 pt-6 sm:px-8">
          <div className="sheet-shot overflow-hidden rounded-2xl ring-1 ring-line">
            <Shot p={p} eager sizes="(min-width:640px) 760px, 100vw" className="aspect-[16/10]" />
          </div>

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 id="case-title" className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-none tracking-[-0.035em]">
              {p.name}
            </h2>
            <span className="text-sm tabular-nums text-faint">{p.year}</span>
          </div>
          <p className="mt-3 font-serif text-2xl italic text-muted">{p.tagline}</p>
          <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed">{p.summary}</p>

          {p.highlights.length > 0 && (
            <>
              <h3 className="mt-10 text-sm font-medium text-muted">What I built</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-4 py-4 text-[15px] leading-relaxed">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden />
                    <span className="max-w-[62ch]">{h}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 className="mt-10 text-sm font-medium text-muted">Stack</h3>
          <div className="mt-3">
            <Tags items={p.stack} />
          </div>

          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Visit {p.name} <Arrow />
          </a>

          <button
            onClick={() => openCase(next.id)}
            className="group mt-16 flex w-full items-end justify-between gap-6 border-t border-line pt-8 text-left"
          >
            <span>
              <span className="block text-sm text-muted">Next project</span>
              <span className="mt-1 block text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent">
                {next.name}
              </span>
            </span>
            <span className="mb-2 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
              <Chevron dir="r" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
