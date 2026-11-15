import { experience, profile } from "../data";
import { Em } from "../ui";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
              Where I've <Em>worked.</Em>
            </h2>
            <div className="mt-10 flex items-center gap-5">
              <img
                src={profile.photo}
                alt={profile.name}
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover ring-1 ring-line-2"
              />
              <p className="max-w-[34ch] text-muted">
                Self-taught builder turned senior engineer. Based in Nairobi, working with teams everywhere.
              </p>
            </div>
          </div>
        </div>

        <ol className="timeline relative pl-10 lg:col-span-7">
          <span aria-hidden className="timeline-fill" />
          {experience.map((e, i) => (
            <li key={e.company} className="relative pb-14 last:pb-0">
              <span
                aria-hidden
                className={`absolute -left-10 top-[0.55rem] h-2.5 w-2.5 -translate-x-[4.5px] rounded-full ring-4 ring-bg ${i === 0 ? "pulse bg-accent" : "bg-faint"}`}
              />
              <p className="text-sm tabular-nums text-muted">{e.period}</p>
              <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{e.role}</h3>
              <p className="mt-0.5 text-lg text-muted">{e.company}</p>
              <ul className="mt-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex max-w-[60ch] gap-4 leading-relaxed text-fg/85">
                    <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-faint" />
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
