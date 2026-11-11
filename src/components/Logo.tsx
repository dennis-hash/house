export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="size-9" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={dark ? "#0b1530" : "#ffffff"} fillOpacity={dark ? 1 : 0.08} />
        <path d="M20 16h8v32h-8z" fill={dark ? "#ffffff" : "#ffffff"} />
        <path d="M34 16l14 16-14 16h-9l14-16-14-16z" fill="#34d9b0" />
      </svg>
      <span className={`text-xl font-extrabold tracking-tight ${dark ? "text-ink-900" : "text-white"}`}>
        Inkred<span className="text-brand-400">Tech</span>
      </span>
    </span>
  );
}
