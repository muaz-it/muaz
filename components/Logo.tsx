export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="muaz-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6660f3" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#muaz-lg)" />
      {/* Gestileerde M die ook als stijgende grafiek leest */}
      <path d="M12 33V16.5l8 9.5 8-9.5V33" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 33V21" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="33" cy="15" r="2.6" fill="#fff" />
    </svg>
  )
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-night-950'}`}>
          Muaz<span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent"> IT</span>
        </span>
        <span className={`mt-1 block text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${dark ? 'text-night-300' : 'text-night-400'}`}>
          IT &amp; Marketing
        </span>
      </span>
    </span>
  )
}
