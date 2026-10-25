# Reusable light / dark toggle with a circular reveal

When the toggle is clicked, the new theme spreads out in a circle from the button. At the same time, the icon morphs between a sun and a moon. You can copy the snippets below into any project.

- **First visit:** the theme follows the OS setting (`prefers-color-scheme`). A choice the visitor makes is saved in `localStorage`.
- **No flash:** an inline script sets the theme before the first paint.
- **Fallback:** browsers without View Transitions, and visitors with reduced motion turned on, get an instant switch.
- **Browser support:** the animation works in Chromium 111+, Safari 18+ and Firefox 144+. Every other browser falls back gracefully.

Files used in the portfolio: `frontend/index.html`, `frontend/src/index.css`, `frontend/src/theme.ts`, `frontend/src/ThemeToggle.tsx`.

---

## 1. No-flash script (in `<head>`, before any CSS)

```html
<meta name="theme-color" content="#0a0a0b" />
<script>
  // Set the theme before first paint so there is no flash.
  (function () {
    try {
      var t = localStorage.getItem("theme");
      if (t !== "light" && t !== "dark") t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      var r = document.documentElement;
      r.dataset.theme = t;
      r.style.colorScheme = t;
      document.querySelector('meta[name="theme-color"]').content = t === "light" ? "#f7f5f0" : "#0a0a0b";
    } catch (e) {}
  })();
</script>
<style>
  /* Paint the right background even before the main CSS loads */
  html { background: #0a0a0b; }
  html[data-theme="light"] { background: #f7f5f0; }
</style>
```

Do not put a hard-coded `background` on `<body>`. It would override this.

## 2. Colour tokens

Every colour comes from a CSS variable. The light theme only overrides those variables.

**Tailwind v4.** Utilities like `bg-bg`, `text-fg`, `border-line` and `bg-fg/10` read the variables, so the overrides re-theme everything:

```css
@import "tailwindcss";

@theme {
  --color-bg: #0a0a0b;
  --color-bg-2: #111113;
  --color-fg: #ededef;
  --color-muted: #9a9aa3;
  --color-line: rgb(255 255 255 / 0.08);
  --color-accent: #ff6a2b;
  --color-on-accent: #0d0c0a; /* text on accent buttons */
  --color-shadow: #000;
}

:root { color-scheme: dark; background: var(--color-bg); color: var(--color-fg); }

:root[data-theme="light"] {
  color-scheme: light;
  --color-bg: #f7f5f0;          /* warm paper, not pure white */
  --color-bg-2: #efebe3;
  --color-fg: #17150f;
  --color-muted: #57534a;
  --color-line: rgb(22 20 15 / 0.09);
  --color-accent: #d4480f;      /* deeper so it keeps contrast on paper */
  --color-shadow: rgb(74 56 30 / 0.45);
}
```

**Plain CSS:** the same idea with `:root { --bg: …; }`, `:root[data-theme="light"] { --bg: …; }` and `background: var(--bg)`.

**Rules that keep it working:**
- Don't hard-code `bg-white/10`, `bg-black/40` or hex colours in components. Use `bg-fg/10`, `bg-[var(--color-scrim)]` or SVG classes like `fill-bg-2 stroke-accent`.
- To keep one area dark in both themes (a terminal, for example), re-declare the dark tokens on a class:

```css
.theme-dark {
  color-scheme: dark;
  --color-bg: #0a0a0b;
  --color-bg-2: #111113;
  --color-fg: #ededef;
  /* …the rest of the dark values… */
  color: var(--color-fg);
}
```

## 3. Reveal CSS (required)

```css
/* Turn off the default crossfade; JS animates a clip-path instead */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

Without this reset, the browser's default crossfade fights the circle and the reveal looks muddy.

## 4. `theme.ts`: logic and React hook

```ts
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
  // radius that reaches the farthest corner
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
```

**Plain JavaScript (no React):**

```html
<button id="theme-btn" aria-label="Toggle theme">◐</button>
<script>
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    document.documentElement.style.colorScheme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  document.getElementById("theme-btn").addEventListener("click", function (e) {
    var next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) return applyTheme(next);
    var b = e.currentTarget.getBoundingClientRect();
    var x = b.left + b.width / 2, y = b.top + b.height / 2;
    var r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(function () { applyTheme(next); }).ready.then(function () {
      document.documentElement.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + r + "px at " + x + "px " + y + "px)"] },
        { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  });
</script>
```

## 5. `ThemeToggle.tsx` and the sun/moon morph

```tsx
import { useId } from "react";

import { toggleTheme, useTheme } from "./theme";

/** Sun/moon morph; the animation lives in CSS (.theme-icon). */
export function ThemeIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  const id = useId(); // unique mask id per instance
  return (
    <svg viewBox="0 0 24 24" className={`theme-icon ${className}`} aria-hidden>
      <mask id={id}>
        <rect width="24" height="24" fill="white" />
        <circle className="cut" cx="18" cy="6" r="7" fill="black" />
      </mask>
      <circle className="core" cx="12" cy="12" fill="currentColor" mask={`url(#${id})`} />
      <g className="rays" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M4.6 19.4L6 18M18 6l1.4-1.4" />
      </g>
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const next = theme === "light" ? "dark" : "light";
  return (
    <button
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line-2 text-muted transition-colors hover:text-fg ${className}`}
    >
      <ThemeIcon />
    </button>
  );
}
```

```css
/* Dark = moon (big core with a bite), light = small sun with rays */
.theme-icon .core { transition: r 0.6s cubic-bezier(0.16, 1, 0.3, 1); r: 9px; }
.theme-icon .cut { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.theme-icon .rays {
  transform-origin: center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
  opacity: 0;
  transform: rotate(-45deg) scale(0.5);
}
[data-theme="light"] .theme-icon .core { r: 5px; }
[data-theme="light"] .theme-icon .cut { transform: translate(9px, -9px); }
[data-theme="light"] .theme-icon .rays { opacity: 1; transform: none; }
```

To add a theme switch to a command palette or menu, call `toggleTheme()` with no origin. The reveal then grows from the centre of the screen.

## 6. Tuning

- **Speed and feel:** use `duration` 500–800 ms. `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) starts fast and lands softly. `ease-in-out` feels more mechanical.
- **Reveal from the cursor:** pass `{ x: e.clientX, y: e.clientY }` as the origin instead of the button centre.
- **Shrink back when going dark** (light page closes into the button):

  ```ts
  const toDark = t === "dark";
  root.classList.toggle("vt-reverse", toDark);
  root.animate(
    { clipPath: toDark ? [`circle(${r}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
                       : [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
    { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      pseudoElement: toDark ? "::view-transition-old(root)" : "::view-transition-new(root)" },
  );
  ```
  ```css
  .vt-reverse::view-transition-old(root) { z-index: 1; }   /* old view on top while it shrinks */
  .vt-reverse::view-transition-new(root) { z-index: 0; }
  ```
- **Diagonal wipe:** animate `clipPath` from `polygon(0 0, 0 0, 0 0, 0 0)` to `polygon(0 0, 200% 0, 0 200%, 0 0)` instead of the circle.

## 7. Gotchas

- **The `in` check:** use `"startViewTransition" in document`, not `!document.startViewTransition`. TypeScript's DOM types say the method always exists, so the plain check raises TS2774.
- **`flushSync` matters:** the browser takes the "new" snapshot right after the callback. React state, such as the toggle icon, has to be committed synchronously or the snapshot shows the old icon.
- **Reduced motion:** always respect `prefers-reduced-motion` and switch instantly.
- **Fixed elements:** headers and other fixed elements are part of the root snapshot. They're revealed with the page, which is the intended effect.
- **One mask id per icon:** with two toggles on a page, use `useId` (or unique ids) for the SVG mask, or both icons share one.
- **Images:** screenshots and photos don't change with the theme. Give them a border or frame that uses the tokens so they sit well in both themes.

## 8. Checklist for a new project

- [ ] Inline script in `<head>`, with no hard-coded body background
- [ ] All colours are tokens, and `[data-theme="light"]` overrides them
- [ ] The view-transition reset CSS is present
- [ ] `theme.ts` and `ThemeToggle.tsx` added, with the toggle placed in the nav (and the mobile menu)
- [ ] An OS in light mode loads light; an OS in dark mode loads dark
- [ ] The choice survives a reload with no flash
- [ ] Reduced motion switches instantly
- [ ] Text contrast is checked in both themes (muted text ≥ 4.5:1)
