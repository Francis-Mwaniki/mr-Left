import { useRef, useState } from "react";

import type { Project } from "./data";
import { profile } from "./data";
import { copy } from "./hooks";
import { Check, Copy } from "./icons";

const fine = () => matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches;

export function SectionHead({ title, sub }: { title: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-12 grid items-end gap-5 md:mb-16 md:grid-cols-12 md:gap-10">
      <h2 className="text-balance text-[clamp(2.25rem,5.2vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em] md:col-span-7">
        {title}
      </h2>
      {sub && <p className="max-w-[46ch] text-pretty text-lg text-muted md:col-span-5 md:justify-self-end">{sub}</p>}
    </header>
  );
}

/** Serif italic accent inside headings */
export const Em = ({ children }: { children: React.ReactNode }) => (
  <span className="font-serif font-normal italic tracking-normal text-muted">{children}</span>
);

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-full bg-fg/[0.06] px-2.5 py-1 font-mono text-[11px] text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

export function Shot({ p, sizes, eager, className = "" }: { p: Project; sizes: string; eager?: boolean; className?: string }) {
  return (
    <img
      src={`${p.image}.webp`}
      srcSet={`${p.image}-sm.webp 720w, ${p.image}.webp 1440w`}
      sizes={sizes}
      width={1440}
      height={900}
      alt={`${p.name} screenshot`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`w-full object-cover object-top ${className}`}
    />
  );
}

/** Follows the pointer a little; springs back on leave. Fine pointers only. */
export function Magnetic({ children, className = "", ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      {...rest}
      onPointerMove={(e) => {
        if (!fine()) return;
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${(e.clientX - r.left - r.width / 2) * 0.28}px`);
        e.currentTarget.style.setProperty("--my", `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--mx", "0px");
        e.currentTarget.style.setProperty("--my", "0px");
      }}
      className={`magnetic ${className}`}
    >
      {children}
    </a>
  );
}

/** Pointer-driven 3D tilt for the hero console. */
export function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`tilt ${className}`}
      onPointerMove={(e) => {
        if (!fine()) return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        e.currentTarget.style.setProperty("--ry", `${x * 7}deg`);
        e.currentTarget.style.setProperty("--rx", `${-y * 5}deg`);
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--ry", "0deg");
        e.currentTarget.style.setProperty("--rx", "0deg");
      }}
    >
      {children}
    </div>
  );
}

export function EmailButton() {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        if (await copy(profile.email)) {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } else window.location.href = `mailto:${profile.email}`;
      }}
      className="group inline-flex items-center gap-2.5 rounded-full border border-line-2 px-5 py-3 text-sm transition-colors hover:border-fg/30"
    >
      {profile.email}
      <span className={done ? "text-ok" : "text-faint transition-colors group-hover:text-fg"}>
        {done ? <Check /> : <Copy />}
      </span>
      <span className="sr-only" aria-live="polite">
        {done ? "Copied" : "Copy email"}
      </span>
    </button>
  );
}
