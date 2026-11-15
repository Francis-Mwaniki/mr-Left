import { profile } from "../data";
import { Arrow } from "../icons";
import { EmailButton, Magnetic } from "../ui";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line px-5 pb-12 pt-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
        style={{ background: "radial-gradient(50% 60% at 50% 100%, var(--color-glow), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="max-w-[14ch] text-balance text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Have something <span className="font-serif font-normal italic tracking-normal text-accent">hard</span> to build?
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg text-muted">
          Tell me what you're working on: a role, a collaboration, or a technical problem that needs solving.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent shadow-[0_8px_24px_-8px] shadow-accent/50"
          >
            Say hello <Arrow />
          </Magnetic>
          <EmailButton />
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u inline-flex items-center gap-1.5 pb-1 text-muted transition-colors hover:text-fg"
              >
                {s.label} <Arrow />
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-28 flex flex-col gap-2 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} · Press{" "}
            <kbd className="rounded border border-line-2 px-1.5 font-mono text-[11px]">⌘K</kbd> to search
          </p>
          <p>
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
        </footer>
      </div>
    </section>
  );
}
