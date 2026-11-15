import { openSource, platforms } from "../data";
import { Arrow } from "../icons";
import { Em, SectionHead, Tags } from "../ui";
import { Visual } from "../Visuals";

const LAYOUT = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-12 lg:grid lg:grid-cols-12"];

export function Platforms() {
  return (
    <section id="platforms" className="bg-bg-2/60 px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          title={
            <>
              The unglamorous parts <Em>that make it work.</Em>
            </>
          }
          sub="Internal systems the products depend on. Most are private, so you get a diagram rather than a screenshot."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {platforms.map((p, i) => {
            const wide = i === 2;
            return (
              <article
                key={p.id}
                className={`flex min-w-0 flex-col overflow-hidden rounded-2xl bg-bg ring-1 ring-line ${wide ? "md:col-span-2" : ""} ${LAYOUT[i] ?? "lg:col-span-6"}`}
              >
                <div
                  className={`h-48 bg-[radial-gradient(circle_at_30%_20%,var(--color-glow),transparent_65%)] ${wide ? "lg:col-span-6 lg:h-auto lg:min-h-64" : ""}`}
                >
                  <Visual kind={p.visual} />
                </div>
                <div className={`flex flex-1 flex-col border-t border-line p-7 ${wide ? "lg:col-span-6 lg:justify-center lg:border-l lg:border-t-0 lg:p-10" : ""}`}>
                  <p className="text-sm text-accent">{p.kind}</p>
                  <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em]">{p.name}</h3>
                  <p className="mt-3 max-w-[52ch] flex-1 text-muted">{p.summary}</p>
                  <div className="mt-6">
                    <Tags items={p.points} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-semibold tracking-[-0.02em]">Open source & side projects</h3>
          <ul className="mt-6 border-t border-line">
            {openSource.map((o) => (
              <li key={o.name} className="border-b border-line">
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-baseline gap-x-6 gap-y-1.5 py-6 md:grid-cols-12"
                >
                  <span className="flex items-center gap-2 text-lg font-medium transition-colors group-hover:text-accent md:col-span-4">
                    {o.name}
                    <Arrow className="-translate-x-1 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="text-muted md:col-span-6">{o.desc}</span>
                  <span className="font-mono text-xs text-faint md:col-span-2 md:text-right">{o.stack}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
