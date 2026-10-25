import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const KEY = "theme";
const root = document.documentElement;
const listeners = new Set<() => void>();
const osLight = matchMedia("(prefers-color-scheme: light)");

/** The inline script in index.html sets data-theme before paint; this reads it. */
export const getTheme = (): Theme => (root.dataset.theme === "light" ? "light" : "dark");

function stored(): Theme | null {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

function apply(t: Theme) {
  root.dataset.theme = t;
  root.style.colorScheme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "light" ? "#f7f5f0" : "#0a0a0b");
  flushSync(() => listeners.forEach((f) => f()));
}

// Follow the OS until the visitor picks a theme themselves.
osLight.addEventListener("change", (e) => {
  if (!stored()) apply(e.matches ? "light" : "dark");
});

/** Switch theme with a circular reveal from `origin` (falls back to an instant switch). */
export function setTheme(t: Theme, origin?: { x: number; y: number }) {
  try {
    localStorage.setItem(KEY, t);
  } catch {
    /* private mode: still switch for this visit */
  }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("startViewTransition" in document) || reduced) return apply(t);

  const x = origin?.x ?? innerWidth / 2;
  const y = origin?.y ?? innerHeight / 2;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(() => apply(t)).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
}

export function toggleTheme(origin?: { x: number; y: number }) {
  setTheme(getTheme() === "light" ? "dark" : "light", origin);
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    (f) => {
      listeners.add(f);
      return () => listeners.delete(f);
    },
    getTheme,
  );
}
