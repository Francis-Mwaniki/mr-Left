import { useEffect, useMemo, useRef, useState } from "react";

import { allProjects, profile } from "./data";
import { copy } from "./hooks";
import { toggleTheme, useTheme } from "./theme";

type Item = { id: string; label: string; hint: string; group: string; run: () => void };

const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Palette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const [toast, setToast] = useState("");
  const theme = useTheme();

  const items: Item[] = useMemo(
    () => [
      ...["work", "platforms", "experience", "approach", "contact"].map((s) => ({
        id: `go-${s}`,
        label: `Go to ${s}`,
        hint: "Section",
        group: "Navigate",
        run: go(s),
      })),
      ...allProjects.map((p) => ({
        id: p.id,
        label: p.name,
        hint: p.kind,
        group: "Open project",
        run: () => window.open(p.url, "_blank", "noopener"),
      })),
      {
        id: "copy",
        label: "Copy email address",
        hint: profile.email,
        group: "Actions",
        run: async () => {
          await copy(profile.email);
          setToast("Email copied");
        },
      },
      {
        id: "theme",
        label: `Switch to ${theme === "light" ? "dark" : "light"} theme`,
        hint: "Appearance",
        group: "Actions",
        run: () => toggleTheme(),
      },
      ...profile.socials.map((s) => ({
        id: s.label,
        label: s.label,
        hint: s.handle,
        group: "Elsewhere",
        run: () => window.open(s.href, "_blank", "noopener"),
      })),
    ],
    [theme],
  );

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return n ? items.filter((x) => `${x.label} ${x.hint}`.toLowerCase().includes(n)) : items;
  }, [q, items]);

  useEffect(() => {
    if (open) {
      setQ("");
      setI(0);
      setToast("");
      requestAnimationFrame(() => input.current?.focus());
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => setI(0), [q]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  if (!open) return null;

  const choose = (it?: Item) => {
    if (!it) return;
    it.run();
    if (it.id !== "copy") onClose();
  };

  let last = "";
  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-scrim px-4 pt-[14vh] backdrop-blur-sm"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="palette-in w-full max-w-xl overflow-hidden rounded-2xl border border-line-2 bg-bg-2 shadow-2xl shadow-shadow/60"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
          else if (e.key === "ArrowDown") {
            e.preventDefault();
            setI((v) => Math.min(v + 1, list.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setI((v) => Math.max(v - 1, 0));
          } else if (e.key === "Enter") choose(list[i]);
        }}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects, sections, links…"
          className="w-full border-b border-line bg-transparent px-5 py-4 text-[15px] outline-none placeholder:text-faint"
          aria-label="Search"
        />
        <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {list.length === 0 && <li className="px-4 py-8 text-center text-sm text-muted">No results for “{q}”</li>}
          {list.map((it, idx) => {
            const head = it.group !== last ? ((last = it.group), true) : false;
            return (
              <li key={it.id} role="option" aria-selected={idx === i}>
                {head && <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-faint">{it.group}</div>}
                <button
                  onMouseMove={() => setI(idx)}
                  onClick={() => choose(it)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${idx === i ? "bg-fg/[0.07]" : ""}`}
                >
                  <span>{it.label}</span>
                  <span className="truncate pl-4 font-mono text-xs text-faint">{it.hint}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[11px] text-faint">
          <span>↑↓ navigate · ↵ select · esc close</span>
          <span className="text-accent" aria-live="polite">{toast}</span>
        </div>
      </div>
    </div>
  );
}
