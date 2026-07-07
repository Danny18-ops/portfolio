/**
 * Original "DR" ligature monogram — D and R fused on one shared stem.
 * The rounded bowl reads as the D; the diagonal leg kicking out of the
 * bowl's base (in accent) completes the R. Hand-drawn SVG, no icon pack.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Dnyaneshwari Raut logo"
    >
      <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 5.5v21" stroke="currentColor" />
        <path
          d="M9.5 5.5H14c7 0 10 3.5 10 8s-3 8-10 8H9.5"
          stroke="currentColor"
        />
        <path d="m16 21.5 8.5 6" stroke="var(--accent)" />
      </g>
    </svg>
  );
}
