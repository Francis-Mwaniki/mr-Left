import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { canMorph, openCase } from "../case";
import { allProjects, AREAS, type Area } from "../data";
import { Arrow } from "../icons";
import { Em, SectionHead, Shot } from "../ui";

type Filter = "All" | Area;

/** Row recipe for the 12-column bento; a short last row is spread evenly. */
const ROWS = [[7, 5], [4, 4, 4], [6, 6]];
function spans(n: number) {
  const out: number[] = [];
  for (let r = 0; out.length < n; r++) {
    let row = ROWS[r % ROWS.length];
    const left = n - out.length;
    // never leave a lonely stretched tile: a short tail is spread evenly
    if (left < row.length || left === 3) row = left === 1 ? [12] : left === 2 ? [6, 6] : [4, 4, 4];
    out.push(...row);
  }
  return out;
}

// Two even columns on tablets; the bento recipe from lg up.
const SPAN: Record<number, string> = {
  12: "md:col-span-12",
  7: "md:col-span-6 lg:col-span-7",
  6: "md:col-span-6",
  5: "md:col-span-6 lg:col-span-5",
  4: "md:col-span-6 lg:col-span-4",
};
const HEIGHT: Record<number, string> = {
  12: "lg:aspect-auto lg:h-[460px]",
  7: "lg:aspect-auto lg:h-[400px]",
  6: "lg:aspect-auto lg:h-[340px]",
  5: "lg:aspect-auto lg:h-[400px]",
  4: "",
};

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const grid = useRef<HTMLUListElement>(null);
  const list = filter === "All" ? allProjects : allProjects.filter((p) => p.areas.includes(filter));
  const sizes = spans(list.length);

  const choose = (f: Filter) => {
    if (f === filter) return;
    const run = () => flushSync(() => setFilter(f));
    if (!canMorph() || !grid.current) return run();
    const root = document.documentElement;
    const g = grid.current;
    g.dataset.vt = "";
    root.classList.add("vt-tiles");
    document.startViewTransition(run).finished.finally(() => {
      delete g.dataset.vt;
      root.classList.remove("vt-tiles");
    });
  };

  const count = (f: Filter) => (f === "All" ? allProjects.length : allProjects.filter((p) => p.areas.includes(f)).length);

  return (
    <section id="work" className="px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          title={
            <>
              Products in production, <Em>not mockups.</Em>
            </>
          }
          sub="Every project here is live. I owned the architecture, the build and the operations. Open one for the full story."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {(["All", ...AREAS] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => choose(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                filter === f ? "bg-fg text-bg" : "bg-fg/[0.05] text-muted hover:bg-fg/10 hover:text-fg"
              }`}
            >
              {f}
              <sup className="ml-1 tabular-nums opacity-60">{count(f)}</sup>
            </button>
          ))}
        </div>

        <ul ref={grid} className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
          {list.map((p, i) => (
            <li key={p.id} className={`tile min-w-0 ${SPAN[sizes[i]]}`} style={{ ["--vtn" as string]: `tile-${p.id}` }}>
              <button
                data-tile={p.id}
                onClick={() => openCase(p.id)}
                className="group block w-full text-left"
                aria-label={`${p.name}: open case study`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-bg-2 ring-1 ring-line transition-[box-shadow] duration-500 group-hover:shadow-[0_24px_48px_-24px] group-hover:shadow-shadow/50">
                  <span data-shot={p.id} className="block">
                    <Shot
                      p={p}
                      eager={i < 2}
                      sizes={sizes[i] >= 7 ? "(min-width:1024px) 680px, 100vw" : "(min-width:768px) 480px, 100vw"}
                      className={`aspect-[16/10] transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03] ${HEIGHT[sizes[i]]}`}
                    />
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-bg px-3.5 py-2 text-xs font-medium opacity-0 shadow-[0_6px_20px_-6px] shadow-shadow/40 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    Case study <Arrow />
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted">{p.kind}</p>
                  </div>
                  <span className="shrink-0 text-sm tabular-nums text-faint">{p.year}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
