import { useCallback, useEffect, useState } from "react";

import { initCaseRouting } from "./case";
import { CaseSheet } from "./CaseSheet";
import { useActiveSection, useScrollDirection } from "./hooks";
import { Logo } from "./icons";
import { MobileMenu } from "./MobileMenu";
import { Palette } from "./Palette";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Platforms } from "./sections/Platforms";
import { Work } from "./sections/Work";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  ["work", "Work"],
  ["platforms", "Platforms"],
  ["experience", "Experience"],
  ["approach", "Approach"],
  ["contact", "Contact"],
] as const;

function Nav({ onPalette }: { onPalette: () => void }) {
  const [menu, setMenu] = useState(false);
  const closeMenu = useCallback(() => setMenu(false), []);
  const hidden = useScrollDirection() && !menu;
  const active = useActiveSection(["top", ...NAV.map((n) => n[0])]);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[var(--ease-out-expo)] ${hidden ? "-translate-y-full" : ""}`}
      >
        <nav
          className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-bg/75 py-2 pl-4 pr-2 backdrop-blur-xl"
          style={{ width: "calc(100% - 1.5rem)" }}
          aria-label="Primary"
        >
          <a href="#top" className="flex items-center gap-2.5 text-sm font-medium" aria-label="Francis Mwaniki, home">
            <Logo />
            <span className="hidden sm:inline">Francis Mwaniki</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${active === id ? "bg-fg/10 text-fg" : "text-muted hover:text-fg"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={onPalette}
              className="hidden items-center gap-2 rounded-full border border-line-2 px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-fg md:flex"
              aria-label="Open command palette"
            >
              Search <kbd className="rounded border border-line-2 px-1.5 font-mono text-[10px]">⌘K</kbd>
            </button>
            <ThemeToggle className="md:h-[34px] md:w-[34px]" />
            <button
              onClick={() => setMenu((v) => !v)}
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label={menu ? "Close menu" : "Open menu"}
              className="burger relative z-[80] flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-full border border-line-2 md:hidden"
            >
              <i />
              <i />
              <i />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menu} onClose={closeMenu} links={NAV} active={active} onSearch={onPalette} />
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => initCaseRouting(), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="progress" aria-hidden />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Nav onPalette={() => setOpen(true)} />
      <main>
        <Hero />
        <Work />
        <Platforms />
        <Experience />
        <Approach />
        <Contact />
      </main>
      <CaseSheet />
      <Palette open={open} onClose={() => setOpen(false)} />
    </>
  );
}
