export const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={`h-3.5 w-3.5 ${className}`} aria-hidden>
    <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
    <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Copy = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M10.5 3.5v-.2A1.3 1.3 0 0 0 9.2 2H3.8A1.3 1.3 0 0 0 2.5 3.3v5.4A1.3 1.3 0 0 0 3.8 10h.2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const Logo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <rect width="24" height="24" rx="6" fill="#ff6a2b" />
    <path d="M8 6.5h8v2.4h-5.3v2.2h4.2v2.4h-4.2v4H8z" fill="#0a0a0b" />
  </svg>
);
