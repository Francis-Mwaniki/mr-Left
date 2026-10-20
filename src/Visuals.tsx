export function Visual({ kind }: { kind: "meet" | "ledger" | "infra" }) {
  if (kind === "meet")
    return (
      <div className="flex h-full flex-col justify-between p-5" aria-hidden>
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="pulse h-1.5 w-1.5 rounded-full bg-red-500" /> REC · live transcript
        </div>
        <div className="eq flex h-14 items-end gap-1">
          {Array.from({ length: 28 }).map((_, n) => (
            <span key={n} className="w-1 flex-1 rounded-full bg-accent/70" style={{ height: `${30 + ((n * 37) % 70)}%`, animationDelay: `${(n % 9) * 110}ms` }} />
          ))}
        </div>
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-muted">
          <p><span className="text-fg">Amina:</span> let's ship it Friday.</p>
          <p><span className="text-fg">Joe:</span> I'll cut the release<span className="caret text-accent">▍</span></p>
        </div>
      </div>
    );
  if (kind === "ledger")
    return (
      <div className="space-y-2 p-5 font-mono text-[11px]" aria-hidden>
        {[["acme-ltd", "admin", "active"], ["nova-co", "billing", "active"], ["kilimo-io", "viewer", "invited"], ["zuri-labs", "admin", "active"]].map(([a, b, c], n) => (
          <div key={a} className="flex items-center justify-between rounded-md border border-line bg-white/[0.02] px-3 py-2" style={{ opacity: 1 - n * 0.12 }}>
            <span>{a}</span>
            <span className="text-faint">{b}</span>
            <span className={c === "active" ? "text-emerald-400" : "text-amber-400"}>● {c}</span>
          </div>
        ))}
      </div>
    );
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full" aria-hidden>
      {[[60, 30], [60, 75], [60, 120]].map(([x, y], n) => (
        <path key={n} className="flow" d={`M${x + 28} ${y} C 150 ${y}, 150 75, 210 75`} stroke="#ff6a2b" strokeOpacity=".6" fill="none" />
      ))}
      {[30, 75, 120].map((y) => (
        <rect key={y} x="20" y={y - 11} width="40" height="22" rx="5" fill="#18181b" stroke="rgb(255 255 255 / .14)" />
      ))}
      <rect x="210" y="55" width="80" height="40" rx="8" fill="#18181b" stroke="#ff6a2b" strokeOpacity=".6" />
      <text x="250" y="79" textAnchor="middle" fill="#ededef" fontSize="10" fontFamily="monospace">deploy</text>
    </svg>
  );
}
