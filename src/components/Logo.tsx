/**
 * Original "DR" graph monogram — the D drawn as a node-edge hexagon,
 * the R implied by the accent leg kicking out of the bowl.
 * Hand-drawn SVG, not from any icon pack.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Dnyaneshwari Raut logo"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M11 7v18" />
        <path d="M11 7 22 12" />
        <path d="M22 12v6" />
        <path d="M11 25 22 18" />
        <path d="M22 18 27 25.5" stroke="var(--accent)" />
      </g>
      <circle cx="11" cy="7" r="2.25" fill="currentColor" />
      <circle cx="11" cy="25" r="2.25" fill="currentColor" />
      <circle cx="22" cy="12" r="2.25" fill="var(--accent)" />
      <circle cx="22" cy="18" r="2.25" fill="currentColor" />
      <circle cx="27" cy="25.5" r="2.25" fill="var(--accent)" />
    </svg>
  );
}
