import { useEffect, useRef, useState } from "react";

type Line = { t: "cmd" | "ok" | "info" | "warn"; s: string };

const SCRIPT: Line[] = [
  { t: "cmd", s: "forge plan \"booking page + orders db\"" },
  { t: "info", s: "plan: 3 steps · pages, schema, auth" },
  { t: "ok", s: "sandbox up · docker · 1.8s" },
  { t: "cmd", s: "forge build --parallel 3" },
  { t: "info", s: "agent[ui] writing components…" },
  { t: "info", s: "agent[api] migrating schema…" },
  { t: "warn", s: "tests: 1 failing · self-heal" },
  { t: "ok", s: "patched · 24/24 passing" },
  { t: "cmd", s: "forge checkpoint save" },
  { t: "ok", s: "checkpoint #41 stored" },
  { t: "cmd", s: "deploy --prod" },
  { t: "ok", s: "live · cloudfront invalidated" },
];

const STAGES = ["plan", "build", "test", "ship"];

const SERVICES = [
  { n: "forge", base: 42 },
  { n: "ai-store", base: 61 },
  { n: "kandarasi", base: 38 },
  { n: "talentlens", base: 74 },
  { n: "marketplace", base: 29 },
  { n: "keyguard", base: 18 },
];

const color = { cmd: "text-fg", ok: "text-emerald-400", info: "text-muted", warn: "text-amber-400" };
const prefix = { cmd: "$", ok: "✓", info: "·", warn: "!" };

export function Console() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [stage, setStage] = useState(0);
  const [lat, setLat] = useState(SERVICES.map((s) => s.base));
  const [spark, setSpark] = useState<number[]>(() => Array.from({ length: 32 }, (_, i) => 40 + ((i * 17) % 30)));
  const box = useRef<HTMLDivElement>(null);
  const reduced = useRef(typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);

  // scripted terminal
  useEffect(() => {
    if (reduced.current) {
      setLines(SCRIPT.slice(0, 8));
      setStage(3);
      return;
    }
    let i = 0;
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(() => alive && fn(), ms));
    const step = () => {
      const ln = SCRIPT[i % SCRIPT.length];
      if (i % SCRIPT.length === 0) setLines([]);
      const done = () => {
        setLines((l) => [...l.slice(-9), ln]);
        setTyping("");
        if (ln.t === "ok") setStage((s) => (s + 1) % 4);
        i++;
        later(step, ln.t === "cmd" ? 350 : 650);
      };
      if (ln.t === "cmd") {
        let c = 0;
        const type = () => {
          c++;
          setTyping(ln.s.slice(0, c));
          if (c < ln.s.length) later(type, 28 + Math.random() * 30);
          else later(done, 250);
        };
        type();
      } else done();
    };
    later(step, 700);
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  // live metrics
  useEffect(() => {
    if (reduced.current) return;
    const id = setInterval(() => {
      setLat(SERVICES.map((s) => Math.max(12, Math.round(s.base + (Math.random() - 0.5) * 18))));
      setSpark((a) => [...a.slice(1), 35 + Math.random() * 50]);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    box.current?.scrollTo({ top: box.current.scrollHeight });
  }, [lines, typing]);

  const pts = spark.map((v, i) => `${(i / (spark.length - 1)) * 100},${100 - v}`).join(" ");

  return (
    <div
      className="theme-dark fade-in overflow-hidden rounded-2xl border border-line-2 bg-bg-2 shadow-2xl shadow-shadow/50"
      style={{ ["--d" as string]: "500ms" }}
      role="img"
      aria-label="Animated system console showing an AI agent building, testing and deploying an app"
    >
      <div className="flex items-center justify-between border-b border-line bg-bg-3 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="hidden font-mono text-[11px] text-faint sm:inline">francis@forge ~ ops</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="pulse h-1.5 w-1.5 rounded-full bg-emerald-400" /> nominal
        </span>
      </div>

      {/* pipeline */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        {STAGES.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div className="flex-1">
              <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className={i <= stage ? "text-fg" : "text-faint"}>{s}</span>
                <span className={i < stage ? "text-emerald-400" : i === stage ? "text-accent" : "text-faint"}>
                  {i < stage ? "done" : i === stage ? "run" : "—"}
                </span>
              </div>
              <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${i < stage ? "w-full bg-emerald-400" : i === stage ? "w-2/3 bg-accent" : "w-0"}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* terminal */}
      <div ref={box} className="h-[196px] overflow-hidden px-4 py-3 font-mono text-[12.5px] leading-6" aria-hidden>
        {lines.map((l, i) => (
          <div key={i} className={`flex gap-2.5 ${color[l.t]}`}>
            <span className={l.t === "cmd" ? "text-accent" : ""}>{prefix[l.t]}</span>
            <span className="truncate">{l.s}</span>
          </div>
        ))}
        {typing !== "" || lines.length === 0 ? (
          <div className="flex gap-2.5">
            <span className="text-accent">$</span>
            <span className="truncate">
              {typing}
              <span className="caret text-accent">▍</span>
            </span>
          </div>
        ) : null}
      </div>

      {/* services */}
      <div className="grid grid-cols-3 gap-px border-t border-line bg-line">
        {SERVICES.map((s, i) => (
          <div key={s.n} className="bg-bg-2 px-3 py-2.5">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="truncate">{s.n}</span>
            </div>
            <div className="mt-0.5 font-mono text-sm tabular-nums">
              {lat[i]}
              <span className="text-[10px] text-faint">ms</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-4 py-2.5">
        <div className="mb-1 flex justify-between font-mono text-[10px] text-faint">
          <span>p95 latency · simulated</span>
          <span>demo data</span>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-8 w-full" aria-hidden>
          <polyline points={pts} fill="none" className="stroke-accent" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}
