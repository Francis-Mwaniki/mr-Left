import { useEffect, useState } from "react";

import { Console } from "../Console";
import { allProjects, profile } from "../data";
import { useClock } from "../hooks";
import { Arrow } from "../icons";
import { EmailButton, Magnetic, Tilt } from "../ui";

const WORDS = ["AI products", "marketplaces", "platforms"];

/** Cycles the accent phrase; every word shares one grid cell so the line never reflows. */
function Kinetic() {
  const [k, setK] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setK((v) => (v + 1) % WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);
  const prev = (k + WORDS.length - 1) % WORDS.length;
  return (
    <span className="kinetic">
      {WORDS.map((w, i) => (
        <span key={w} className={i === k ? "is-in" : i === prev ? "is-out" : ""}>
          {w}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const time = useClock(profile.timezone);
  const line = "the infrastructure that keeps them running.".split(" ");
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(45% 55% at 78% 38%, var(--color-glow), transparent 70%)" }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-6">
          <p className="fade-in mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="pulse h-2 w-2 rounded-full bg-ok" aria-hidden />
            <span className="text-fg">{profile.role}</span>
            <span aria-hidden className="hidden h-3 w-px bg-line-2 sm:block" />
            <span className="tabular-nums">
              {profile.location} · {time} EAT
            </span>
          </p>

          <h1 className="text-[clamp(2.6rem,6.4vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            <span className="sr-only">I build AI products, marketplaces and platforms, and the infrastructure that keeps them running.</span>
            <span aria-hidden>
              <span className="rise mr-[0.22em] inline-block" style={{ ["--i" as string]: 0 }}>
                I
              </span>
              <span className="rise mr-[0.22em] inline-block" style={{ ["--i" as string]: 1 }}>
                build
              </span>
              {/* the rotating phrase gets its own line, so swapping words never reflows the sentence */}
              <span className="rise" style={{ ["--i" as string]: 2, display: "block" }}>
                <Kinetic />
              </span>
              <span className="rise mr-[0.22em] inline-block" style={{ ["--i" as string]: 3 }}>
                and
              </span>
              {line.map((w, i) => (
                <span key={i} className="rise mr-[0.22em] inline-block" style={{ ["--i" as string]: i + 4 }}>
                  {w}
                </span>
              ))}
            </span>
          </h1>

          <p className="fade-in mt-7 max-w-[52ch] text-pretty text-lg text-muted" style={{ ["--d" as string]: "700ms" }}>
            I'm {profile.name.split(" ")[0]}. I design, ship and operate AI platforms, marketplaces and the systems under
            them. {allProjects.length} of them are live in production right now.
          </p>

          <div className="fade-in mt-9 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "850ms" }}>
            <Magnetic
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_24px_-8px] shadow-accent/50"
            >
              See the work <Arrow />
            </Magnetic>
            <EmailButton />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <Tilt>
            <Console />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
