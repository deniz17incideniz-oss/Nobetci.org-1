export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo-lockup">
      <svg className="logo-symbol" viewBox="0 0 48 48" role="img" aria-label="Nobetci.org harita pini ve saat logosu">
        <path d="M24 3C13.5 3 5 11.4 5 21.8 5 35 24 45 24 45s19-10 19-23.2C43 11.4 34.5 3 24 3Z" fill="currentColor" />
        <circle cx="24" cy="21" r="11.5" fill="white" opacity=".98" />
        <path d="M24 12.5v9l6 3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M32.5 13.5a10.8 10.8 0 0 0-13.7-1.7 9.6 9.6 0 0 1 13.7 1.7Z" fill="#16a34a" />
      </svg>
      {!compact && <span>Nobetci.org</span>}
    </span>
  );
}
