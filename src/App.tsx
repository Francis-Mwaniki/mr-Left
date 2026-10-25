import { useCallback, useEffect, useState } from "react";

import {
  capabilities,
  experience,
  flagship,
  openSource,
  platforms,
  principles,
  products,
  profile,
  type Project,
} from "./data";
import {
  copy,
  spot,
  useActiveSection,
  useClock,
  useReveal,
  useScrollDirection,
} from "./hooks";
import { Arrow, Check, Copy, Logo } from "./icons";
import { Console } from "./Console";
import { MobileMenu } from "./MobileMenu";
import { Palette } from "./Palette";
import { ThemeToggle } from "./ThemeToggle";
import { Visual } from "./Visuals";

const NAV = [
  ["work", "Work"],
  ["platforms", "Platforms"],
  ["experience", "Experience"],
  ["approach", "Approach"],
  ["contact", "Contact"],
] as const;

function Shot({
  p,
  eager = false,
  sizes,
}: {
  p: Project;
  eager?: boolean;
  sizes: string;
}) {
  return (
    <img
      src={`${p.image}.webp`}
      srcSet={`${p.image}-sm.webp 720w, ${p.image}.webp 1440w`}
      sizes={sizes}
      width={1440}
      height={900}
      alt={`${p.name} homepage screenshot`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
    />
  );
}

function Frame({
  p,
  sizes,
  eager,
}: {
  p: Project;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={spot}
      aria-label={`Open ${p.name}`}
      className="spot group block overflow-hidden rounded-2xl border border-line-2 bg-bg-2 shadow-2xl shadow-shadow/40 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-3 px-4 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <i className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <i className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="ml-3 min-w-0 truncate rounded-md bg-fg/[0.06] px-3 py-0.5 font-mono text-[11px] text-faint">
          {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="overflow-hidden">
        <Shot p={p} sizes={sizes} eager={eager} />
      </div>
    </a>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border border-line-2 px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function SectionHead({
  n,
  title,
  sub,
}: {
  n: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div data-reveal className="mb-12 md:mb-16">
      <p className="mb-4 font-mono text-xs tracking-widest text-accent">{n}</p>
      <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-lg text-muted">{sub}</p>}
    </div>
  );
}

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
          className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-bg/70 py-2 pl-4 pr-2 backdrop-blur-xl"
          style={{ width: "calc(100% - 1.5rem)" }}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-medium"
            aria-label="Francis Mwaniki, home"
          >
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
              className="hidden items-center gap-2 rounded-full md:flex border border-line-2 px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-fg"
              aria-label="Open command palette"
            >
              Search{" "}
              <kbd className="rounded border border-line-2 px-1.5 font-mono text-[10px]">
                ⌘K
              </kbd>
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
      <MobileMenu
        open={menu}
        onClose={closeMenu}
        links={NAV}
        active={active}
        onSearch={onPalette}
      />
    </>
  );
}

function EmailButton() {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        if (await copy(profile.email)) {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } else window.location.href = `mailto:${profile.email}`;
      }}
      className="group inline-flex items-center gap-2.5 rounded-full border border-line-2 px-5 py-3 font-mono text-sm transition-colors hover:border-accent/50"
    >
      {profile.email}
      <span
        className={done ? "text-ok" : "text-faint group-hover:text-fg"}
      >
        {done ? <Check /> : <Copy />}
      </span>
      <span className="sr-only" aria-live="polite">
        {done ? "Copied" : "Copy email"}
      </span>
    </button>
  );
}

function Hero() {
  const time = useClock(profile.timezone);
  const words =
    "I build AI products and the infrastructure that keeps them running.".split(
      " ",
    );
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center px-5 pb-16 pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 30%, var(--color-glow), transparent 70%), linear-gradient(var(--color-grid) 1px, transparent 1px) 0 0 / 56px 56px, linear-gradient(90deg, var(--color-grid) 1px, transparent 1px) 0 0 / 56px 56px",
          maskImage:
            "radial-gradient(80% 70% at 50% 40%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 70% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <div className="fade-in mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="pulse h-1.5 w-1.5 rounded-full bg-ok" />{" "}
              Building AI products in production
            </span>
            <span>
              {profile.location} · {time} EAT
            </span>
          </div>
          <h1 className="text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[3.9rem]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block">
                <span
                  className={`rise ${["AI", "products"].includes(w) ? "font-serif font-normal italic text-accent" : ""}`}
                  style={{ ["--i" as string]: i }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="fade-in mt-6 max-w-lg text-base text-muted md:text-lg"
            style={{ ["--d" as string]: "800ms" }}
          >
            Francis Mwaniki, {profile.role.toLowerCase()}. I design, ship and
            operate AI platforms, marketplaces and the infrastructure under
            them.
          </p>
          <div
            className="fade-in mt-8 flex flex-wrap items-center gap-3"
            style={{ ["--d" as string]: "1000ms" }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              See the work <Arrow />
            </a>
            <EmailButton />
          </div>
        </div>
        <div className="lg:col-span-6">
          <Console />
        </div>
      </div>
    </section>
  );
}

function Case({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article
      data-reveal
      className="grid min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <Frame p={p} eager={i === 0} sizes="(min-width:1024px) 700px, 100vw" />
      </div>
      <div className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="mb-3 font-mono text-xs text-muted">
          <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>{" "}
          · {p.kind} · {p.year}
        </p>
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {p.name}
        </h3>
        <p className="mt-1 font-serif text-xl italic text-muted">{p.tagline}</p>
        <p className="mt-5 text-muted">{p.summary}</p>
        <ul className="mt-6 space-y-2.5 text-sm">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
              <span className="text-fg/90">{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Tags items={p.stack} />
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-u mt-7 inline-flex items-center gap-2 pb-1 text-sm font-medium"
        >
          Visit {p.name} <Arrow />
        </a>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          n="01 — SELECTED WORK"
          title={
            <>
              Products in production,{" "}
              <span className="font-serif font-normal italic text-muted">
                not mockups.
              </span>
            </>
          }
          sub="Every project below is live. I owned the architecture, the build and the operations."
        />
        <div className="space-y-24 md:space-y-36">
          {flagship.map((p, i) => (
            <Case key={p.id} p={p} i={i} />
          ))}
        </div>

        <div
          data-reveal
          className="mb-8 mt-28 flex items-end justify-between border-t border-line pt-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            More products
          </h3>
          <span className="font-mono text-xs text-faint">
            {products.length} live
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.id}
              data-reveal
              style={{ ["--d" as string]: `${(i % 2) * 100}ms` }}
            >
              <Frame p={p} sizes="(min-width:768px) 560px, 100vw" />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold tracking-tight">
                    {p.name}
                  </h4>
                  <p className="mt-2 max-w-md text-sm text-muted">
                    {p.summary}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-faint">
                  {p.year}
                </span>
              </div>
              <div className="mt-4">
                <Tags items={p.stack} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section
      id="platforms"
      className="border-y border-line bg-bg-2/50 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead
          n="02 — PLATFORMS & INFRA"
          title={
            <>
              The unglamorous parts{" "}
              <span className="font-serif font-normal italic text-muted">
                that make it work.
              </span>
            </>
          }
          sub="Internal systems and infrastructure that the products depend on. Some of these are private, so you get a sketch rather than a screenshot."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {platforms.map((p, i) => (
            <article
              key={p.id}
              data-reveal
              onPointerMove={spot}
              style={{ ["--d" as string]: `${i * 100}ms` }}
              className="spot flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-bg"
            >
              <div className="h-44 border-b border-line bg-[radial-gradient(circle_at_30%_20%,rgb(255_106_43/.08),transparent_60%)]">
                <Visual kind={p.visual} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {p.kind}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted">{p.summary}</p>
                <div className="mt-5">
                  <Tags items={p.points} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-20">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-faint">
            Open source & side projects
          </h3>
          <ul className="divide-y divide-line border-y border-line">
            {openSource.map((o) => (
              <li key={o.name}>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-baseline gap-2 py-5 transition-colors hover:bg-fg/[0.03] md:grid-cols-12 md:gap-6 md:px-3"
                >
                  <span className="flex items-center gap-2 text-lg font-medium md:col-span-3">
                    {o.name}{" "}
                    <Arrow className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="text-sm text-muted md:col-span-7">
                    {o.desc}
                  </span>
                  <span className="font-mono text-xs text-faint md:col-span-2 md:text-right">
                    {o.stack}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              n="03 — EXPERIENCE"
              title={
                <>
                  Where I've{" "}
                  <span className="font-serif font-normal italic text-muted">
                    worked.
                  </span>
                </>
              }
            />
            <div data-reveal className="flex items-center gap-4">
              <img
                src={profile.photo}
                alt={profile.name}
                width={72}
                height={72}
                loading="lazy"
                className="h-[72px] w-[72px] rounded-full border border-line-2 object-cover"
              />
              <p className="text-sm text-muted">
                Self-taught builder turned senior engineer. Based in Nairobi,
                working with teams everywhere.
              </p>
            </div>
          </div>
        </div>
        <ol className="relative space-y-12 border-l border-line pl-8 lg:col-span-8">
          {experience.map((e, i) => (
            <li key={e.company} data-reveal className="relative">
              <span
                className={`absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full ${i === 0 ? "pulse bg-accent" : "bg-line-2"}`}
              />
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                {e.role}
              </h3>
              <p className="text-muted">{e.company}</p>
              <ul className="mt-4 space-y-2 text-[15px] text-fg/85">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-faint" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-t border-line px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          n="04 — CAPABILITIES & APPROACH"
          title={
            <>
              What I bring{" "}
              <span className="font-serif font-normal italic text-muted">
                to a team.
              </span>
            </>
          }
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} data-reveal className="bg-bg p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                {c.title}
              </h3>
              <ul className="space-y-2 text-sm text-fg/85">
                {c.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {principles.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{ ["--d" as string]: `${(i % 2) * 100}ms` }}
            >
              <p className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-5 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full opacity-60"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 100%, var(--color-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p
          data-reveal
          className="mb-4 font-mono text-xs tracking-widest text-accent"
        >
          05 — CONTACT
        </p>
        <h2
          data-reveal
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl"
        >
          Have something{" "}
          <span className="font-serif font-normal italic text-accent">
            hard
          </span>{" "}
          to build?
        </h2>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03]"
          >
            Say hello <Arrow />
          </a>
          <EmailButton />
        </div>
        <ul data-reveal className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u inline-flex items-center gap-1.5 pb-1 text-sm text-muted transition-colors hover:text-fg"
              >
                {s.label} <Arrow />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-24 font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · Press{" "}
          <kbd className="rounded border border-line-2 px-1">⌘K</kbd> to
          navigate
        </p>
        <p className="mt-3 font-mono text-xs text-faint">
          Redesigned by{" "}
          <a
            href="https://mitsumi.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="link-u text-muted transition-colors hover:text-accent"
          >
            Forge AI Builder
          </a>
          , an AI software engineer.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  useReveal();
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
    <div className="grain">
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
      <Palette open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
