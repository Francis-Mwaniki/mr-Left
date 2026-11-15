import { capabilities, principles } from "../data";
import { Em, SectionHead } from "../ui";

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // content is doubled so the -50% loop is seamless
  return (
    <div className="marquee-mask overflow-hidden" aria-hidden>
      <ul
        className={`marquee flex w-max gap-10 py-3 ${reverse ? "marquee-rev" : ""}`}
      >
        {[...items, ...items].map((x, i) => (
          <li
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-[clamp(1.25rem,2.2vw,1.875rem)] font-semibold tracking-[-0.03em] text-fg/80"
          >
            {x}
            <span className="h-2 w-2 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Approach() {
  const all = capabilities.flatMap((c) => c.items);
  const half = Math.ceil(all.length / 2);
  return (
    <section id="approach" className="border-t border-line py-28 md:py-36">
      <div className="px-5">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            title={
              <>
                What I bring <Em>to a team.</Em>
              </>
            }
            sub="Range across the stack, from agent orchestration to the deploy pipeline, and the habits that keep it shippable."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>

      <div className="px-5">
        <div className="mx-auto max-w-6xl">
          <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-line pt-5">
                <h3 className="text-sm font-medium text-accent">{c.title}</h3>
                <ul className="mt-3 space-y-1.5 text-[15px] text-fg/85">
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold tracking-[-0.025em]">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-lg text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
