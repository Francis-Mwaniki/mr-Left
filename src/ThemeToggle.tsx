import { useId } from "react";

import { toggleTheme, useTheme } from "./theme";

/** Sun/moon morph; the animation lives in index.css (.theme-icon). */
export function ThemeIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  const id = useId();
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
