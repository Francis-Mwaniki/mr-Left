import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { allProjects, profile } from "./data";

/* ---------- visibility (palette can hide it; remembered) ---------- */
const KEY = "pet";
const listeners = new Set<() => void>();
const read = () => {
  try {
    return localStorage.getItem(KEY) !== "hidden";
  } catch {
    return true;
  }
};
let visible = read();
export const usePetVisible = () =>
  useSyncExternalStore(
    (f) => {
      listeners.add(f);
      return () => listeners.delete(f);
    },
    () => visible,
  );
export function togglePet() {
  visible = !visible;
  try {
    localStorage.setItem(KEY, visible ? "shown" : "hidden");
  } catch {
    /* private mode: still toggles for this visit */
  }
  listeners.forEach((f) => f());
}

/* ---------- what the cat says (one line per click, all from data.ts) ---------- */
const first = profile.name.split(" ")[0];
const LINES = [
  `Meow! I'm ${first}'s cat. Click me again for gossip.`,
  `${first} has ${allProjects.length} products live in production. Not mockups. Real ones.`,
  `${first} built Forge: an AI engineer that plans, writes, tests and ships full-stack apps.`,
  `KeyGuard is ${first}'s too. A leaked API key costs one click, not a bill.`,
  `Self-taught, now a senior engineer in Nairobi. I supervised every commit.`,
  `Agents, marketplaces, escrow payments, infra. ${first} ships the whole stack.`,
  `Kandarasi connects Kenyan artists with brands. Also built by ${first}.`,
  `Want to build something with ${first}? ${profile.email}`,
];

/* ---------- the cat ---------- */
const ORANGE = "#ff8a4c";
const STRIPE = "#e56a2c";
const CREAM = "#fff1e6";
const INK = "#1b1612";
const PINK = "#ff9eb0";

const EYES = { l: { x: 47, y: 52 }, r: { x: 73, y: 52 } };
const MAX_LOOK = 3.6; // how far pupils travel, in SVG units
const NEAR = 170; // px: closer than this and it gets happy
const SLEEP_AFTER = 14_000;

function Cat() {
  const root = useRef<HTMLButtonElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const head = useRef<SVGGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const [line, setLine] = useState(-1);
  const [say, setSay] = useState(false);
  const hush = useRef(0);

  useEffect(() => {
    const el = root.current!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let px = innerWidth / 2,
      py = innerHeight / 2; // pointer
    let lx = 0,
      ly = 0,
      tx = 0,
      ty = 0; // pupil offset: current, target
    let tilt = 0,
      tiltT = 0;
    let raf = 0;
    let idle = 0;

    const center = () => {
      const r = svg.current!.getBoundingClientRect();
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.42 };
    };

    const aim = () => {
      const c = center();
      const dx = px - c.x;
      const dy = py - c.y;
      const dist = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, dist / 220);
      tx = (dx / dist) * MAX_LOOK * k;
      ty = (dy / dist) * MAX_LOOK * k;
      tiltT = Math.max(-1, Math.min(1, dx / 700)) * 9;
      el.dataset.want = dist < NEAR ? "happy" : "watch"; // remembered so "love" can settle back correctly
      if (el.dataset.mood !== "love") el.dataset.mood = el.dataset.want;
    };

    const loop = () => {
      const s = reduced ? 1 : 0.16;
      lx += (tx - lx) * s;
      ly += (ty - ly) * s;
      tilt += (tiltT - tilt) * s;
      pupils.current!.setAttribute(
        "transform",
        `translate(${lx.toFixed(2)} ${ly.toFixed(2)})`,
      );
      head.current!.setAttribute(
        "transform",
        `rotate(${tilt.toFixed(2)} 60 72)`,
      );
      raf =
        Math.abs(tx - lx) + Math.abs(ty - ly) + Math.abs(tiltT - tilt) > 0.02
          ? requestAnimationFrame(loop)
          : 0;
    };

    const nap = () => {
      clearTimeout(idle);
      idle = window.setTimeout(() => {
        el.dataset.mood = "sleep";
        tx = ty = 0;
        tiltT = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      }, SLEEP_AFTER);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      aim();
      nap();
      if (!raf) raf = requestAnimationFrame(loop);
    };

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onMove, { passive: true });
    el.dataset.mood = "watch";
    nap();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onMove);
    };
  }, []);

  const pet = () => {
    const el = root.current!;
    el.classList.remove("pet-hop");
    void el.offsetWidth; // restart the hop if clicked again mid-air
    el.classList.add("pet-hop");
    el.dataset.mood = "love";
    setTimeout(() => {
      if (el.dataset.mood === "love")
        el.dataset.mood = el.dataset.want ?? "watch";
    }, 1400);
    setLine((n) => (n + 1) % LINES.length);
    setSay(true);
    clearTimeout(hush.current);
    hush.current = window.setTimeout(() => setSay(false), 6000);
  };

  return (
    <>
      <p
        className={`pet-bubble ${say ? "is-on" : ""}`}
        role="status"
        aria-live="polite"
      >
        {line >= 0 && <span key={line}>{LINES[line]}</span>}
      </p>
      <button
        ref={root}
        onClick={pet}
        className="pet"
        aria-label="Pet the cat, it tells you about Francis"
        title="Pet me"
        data-cursor="hover"
      >
        <svg
          ref={svg}
          viewBox="0 0 120 112"
          className="h-full w-full overflow-visible"
          aria-hidden
        >
          {/* tail, behind the body */}
          <g className="pet-tail">
            <path
              d="M86 94 C112 92 118 66 104 54"
              fill="none"
              stroke={INK}
              strokeWidth="13"
              strokeLinecap="round"
            />
            <path
              d="M86 94 C112 92 118 66 104 54"
              fill="none"
              stroke={ORANGE}
              strokeWidth="7.5"
              strokeLinecap="round"
            />
          </g>

          {/* body + paws */}
          <ellipse
            cx="60"
            cy="98"
            rx="33"
            ry="25"
            fill={ORANGE}
            stroke={INK}
            strokeWidth="3"
          />
          <ellipse cx="60" cy="102" rx="17" ry="13" fill={CREAM} />
          <ellipse
            cx="47"
            cy="110"
            rx="8"
            ry="5.5"
            fill={CREAM}
            stroke={INK}
            strokeWidth="2.5"
          />
          <ellipse
            cx="73"
            cy="110"
            rx="8"
            ry="5.5"
            fill={CREAM}
            stroke={INK}
            strokeWidth="2.5"
          />

          {/* love heart */}
          <path
            className="pet-heart"
            d="M60 14 C56 6 44 8 46 17 C47 22 60 29 60 29 C60 29 73 22 74 17 C76 8 64 6 60 14 Z"
            fill={PINK}
            stroke={INK}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* zzz */}
          <g
            className="pet-zzz"
            fill="currentColor"
            fontFamily="var(--font-sans)"
            fontWeight="700"
          >
            <text x="92" y="22" fontSize="11">
              z
            </text>
            <text x="101" y="12" fontSize="8">
              z
            </text>
          </g>

          <g ref={head}>
            {/* ears */}
            <path
              d="M29 44 L35 13 L56 33 Z"
              fill={ORANGE}
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M91 44 L85 13 L64 33 Z"
              fill={ORANGE}
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M35 36 L38 21 L48 31 Z" fill={PINK} />
            <path d="M85 36 L82 21 L72 31 Z" fill={PINK} />

            {/* head */}
            <ellipse
              cx="60"
              cy="54"
              rx="35"
              ry="28"
              fill={ORANGE}
              stroke={INK}
              strokeWidth="3"
            />
            <path
              d="M60 27 v7 M52 28 l1.5 6 M68 28 l-1.5 6"
              stroke={STRIPE}
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* eyes: open (watch) */}
            <g className="pet-eyes-open">
              <g className="pet-blink">
                <ellipse
                  cx={EYES.l.x}
                  cy={EYES.l.y}
                  rx="8"
                  ry="9"
                  fill="#fff"
                  stroke={INK}
                  strokeWidth="2.5"
                />
                <ellipse
                  cx={EYES.r.x}
                  cy={EYES.r.y}
                  rx="8"
                  ry="9"
                  fill="#fff"
                  stroke={INK}
                  strokeWidth="2.5"
                />
                <g ref={pupils}>
                  <circle cx={EYES.l.x} cy={EYES.l.y} r="4.6" fill={INK} />
                  <circle cx={EYES.r.x} cy={EYES.r.y} r="4.6" fill={INK} />
                  <circle
                    cx={EYES.l.x - 1.6}
                    cy={EYES.l.y - 2}
                    r="1.5"
                    fill="#fff"
                  />
                  <circle
                    cx={EYES.r.x - 1.6}
                    cy={EYES.r.y - 2}
                    r="1.5"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            {/* eyes: happy ^ ^ */}
            <g
              className="pet-eyes-happy"
              fill="none"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M40 55 q7 -9 14 0" />
              <path d="M66 55 q7 -9 14 0" />
            </g>
            {/* eyes: asleep */}
            <g
              className="pet-eyes-sleep"
              fill="none"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M40 52 q7 6 14 0" />
              <path d="M66 52 q7 6 14 0" />
            </g>

            {/* cheeks, nose, mouth, whiskers */}
            <circle className="pet-cheek" cx="37" cy="64" r="5" fill={PINK} />
            <circle className="pet-cheek" cx="83" cy="64" r="5" fill={PINK} />
            <path
              d="M56.5 61 h7 l-3.5 4 Z"
              fill={PINK}
              stroke={INK}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              className="pet-mouth"
              d="M54 67 q3 3.5 6 0 q3 3.5 6 0"
              fill="none"
              stroke={INK}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <g stroke={INK} strokeWidth="1.6" strokeLinecap="round">
              <path d="M30 60 L15 57 M30 65 L15 66" />
              <path d="M90 60 L105 57 M90 65 L105 66" />
            </g>
          </g>
        </svg>
      </button>
    </>
  );
}

export function Pet() {
  const show = usePetVisible();
  return show ? <Cat /> : null;
}
