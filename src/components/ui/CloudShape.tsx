/**
 * An actual cloud silhouette — overlapping lobes forming the classic
 * cumulus outline — not a border-radius blob pretending to be one.
 * A blurred glow copy sits behind a crisper, tinted copy on top, so
 * it reads as a soft cloud instead of flattening into a generic glow.
 *
 * The whole thing fades out via a radial mask toward its own edges.
 * Without that, a flat SVG fill stays near-opaque across its entire
 * (large) silhouette — unlike the soft radial-gradient glow it
 * replaced, which faded to fully transparent well inside its box.
 * That fuller coverage was what made it wash out the muted body text
 * sitting on the glass cards in front of it. The mask keeps the
 * recognizable cloud shape in the center while restoring that falloff.
 *
 * No hooks, so it stays safe to use from server components.
 */
import type { CSSProperties } from "react";

const LOBES = (
  <>
    <ellipse cx="120" cy="88" rx="96" ry="24" />
    <circle cx="52" cy="64" r="32" />
    <circle cx="92" cy="42" r="40" />
    <circle cx="144" cy="36" r="46" />
    <circle cx="190" cy="56" r="34" />
    <circle cx="216" cy="76" r="24" />
  </>
);

const FADE = "radial-gradient(closest-side, #000 45%, transparent 85%)";

export function CloudShape({
  className,
  tone = "var(--accent)",
  style,
}: {
  className?: string;
  tone?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{ ...style, maskImage: FADE, WebkitMaskImage: FADE }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 120" className="absolute inset-0 h-full w-full scale-110 opacity-30 blur-2xl">
        <g fill={tone}>{LOBES}</g>
      </svg>
      <svg viewBox="0 0 240 120" className="relative h-full w-full opacity-55 blur-[1px]">
        <g fill={`color-mix(in srgb, var(--surface) 72%, ${tone})`}>{LOBES}</g>
      </svg>
    </div>
  );
}
