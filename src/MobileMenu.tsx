import { useEffect, useRef } from "react";

import { profile } from "./data";
import { Arrow } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  open: boolean;
  onClose: () => void;
  links: readonly (readonly [string, string])[];
  active: string;
  onSearch: () => void;
};

export function MobileMenu({ open, onClose, links, active, onSearch }: Props) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>("a,button");
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
    // close if the viewport grows to desktop
    const mq = matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && onClose();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      prev?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[75] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-scrim backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={panel}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col border-l border-line-2 bg-bg-2 px-6 pb-8 pt-24 shadow-2xl shadow-shadow/60 transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="burger absolute right-4 top-[18px] flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-full border border-line-2"
          aria-expanded="true"
        >
          <i />
          <i />
          <i />
        </button>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-faint">Navigate</p>
        <ul className="flex-1">
          {links.map(([id, label], i) => (
            <li
              key={id}
              className="menu-item border-b border-line"
              style={{ ["--i" as string]: i, ["--open" as string]: open ? 1 : 0 }}
            >
              <a
                href={`#${id}`}
                onClick={onClose}
                aria-current={active === id ? "true" : undefined}
                className={`flex items-center justify-between py-4 text-3xl font-semibold tracking-tight transition-colors ${active === id ? "text-accent" : "text-fg"}`}
              >
                <span>
                  <span className="mr-3 font-mono text-xs font-normal text-faint">{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </span>
                <Arrow className="h-4 w-4 text-faint" />
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-item space-y-3" style={{ ["--i" as string]: links.length, ["--open" as string]: open ? 1 : 0 }}>
          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
                onSearch();
              }}
              className="flex flex-1 items-center justify-between rounded-xl border border-line-2 px-4 py-3 text-sm text-muted"
            >
              Search projects <kbd className="rounded border border-line-2 px-1.5 font-mono text-[10px]">⌘K</kbd>
            </button>
            <ThemeToggle className="h-auto w-12 rounded-xl" />
          </div>
          <a href={`mailto:${profile.email}`} className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-on-accent">
            Say hello
          </a>
          <div className="flex gap-5 pt-2 font-mono text-xs text-faint">
            {profile.socials.filter((x) => !x.label.includes("work")).map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
