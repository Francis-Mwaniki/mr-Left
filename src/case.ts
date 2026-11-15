import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

import { allProjects } from "./data";

/** Which case study is open. A tiny external store so the palette, tiles and sheet share it. */
let current: string | null = null;
let pushed = false;
const listeners = new Set<() => void>();
const set = (id: string | null) => {
  current = id;
  listeners.forEach((f) => f());
};

export const useCase = () =>
  useSyncExternalStore(
    (f) => {
      listeners.add(f);
      return () => listeners.delete(f);
    },
    () => current,
  );

export const canMorph = () =>
  "startViewTransition" in document && !matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True while the last open/close ran without a view transition (the sheet then animates itself). */
export let plainMount = true;

const tileShot = (id: string) => document.querySelector<HTMLElement>(`[data-shot="${id}"]`);
const onScreen = (el: HTMLElement) => {
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < innerHeight;
};

/**
 * Run a DOM update as a shared-element morph: the tile screenshot and the sheet screenshot
 * both carry `view-transition-name: case-shot`, but never at the same time.
 */
function morph(update: () => void, tileId: string | null, opening: boolean) {
  const root = document.documentElement;
  const src = tileId ? tileShot(tileId) : null;
  const tile = src && onScreen(src) ? src : null;
  if (!canMorph()) {
    plainMount = true;
    flushSync(update);
    return;
  }
  plainMount = false;
  root.classList.add("vt-case");
  if (opening && tile) tile.style.viewTransitionName = "case-shot";
  const vt = document.startViewTransition(() => {
    if (tile) tile.style.viewTransitionName = opening ? "" : "case-shot";
    flushSync(update);
  });
  vt.finished.finally(() => {
    root.classList.remove("vt-case");
    if (tile) tile.style.viewTransitionName = "";
  });
}

export function openCase(id: string) {
  if (!allProjects.some((p) => p.id === id) || current === id) return;
  if (current) {
    // switching inside the sheet (prev/next): swap content, keep history clean
    history.replaceState({ case: id }, "", `#work/${id}`);
    flushSync(() => set(id));
    return;
  }
  history.pushState({ case: id }, "", `#work/${id}`);
  pushed = true;
  morph(() => set(id), id, true);
}

export function closeCase() {
  if (!current) return;
  if (pushed && history.state?.case) {
    history.back(); // popstate does the close, so the back button and this stay in sync
    return;
  }
  history.replaceState(null, "", "#work");
  const id = current;
  morph(() => set(null), id, false);
}

const fromHash = () => {
  const m = /^#work\/([\w-]+)$/.exec(location.hash);
  return m && allProjects.some((p) => p.id === m[1]) ? m[1] : null;
};

/** Deep links (#work/<id>) and the browser back/forward buttons. Call once. */
export function initCaseRouting() {
  const id = fromHash();
  if (id) {
    history.replaceState({ case: id }, "", `#work/${id}`);
    pushed = false;
    plainMount = true;
    set(id);
  }
  const onPop = () => {
    const next = fromHash();
    if (next === current) return;
    if (next) {
      pushed = false;
      morph(() => set(next), next, true);
    } else {
      const was = current;
      pushed = false;
      morph(() => set(null), was, false);
    }
  };
  addEventListener("popstate", onPop);
  return () => removeEventListener("popstate", onPop);
}
