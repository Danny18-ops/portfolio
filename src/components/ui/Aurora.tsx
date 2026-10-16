/**
 * Soft pastel bloom, reused across sections at varied positions so the
 * hero's atmosphere carries through the whole page. Parent section
 * must be `relative overflow-hidden`. `className` carries position,
 * size, and the drift animation; the tone picks the gradient color.
 */
export function Aurora({
  className,
  tone = "accent",
}: {
  className: string;
  tone?: "accent" | "gold" | "sage" | "sand" | "sky";
}) {
  const soft: Record<string, string> = {
    accent: "var(--glow)",
    gold: "var(--gold-soft)",
    sage: "var(--sage-soft)",
    sand: "var(--sand-soft)",
    sky: "var(--sky-soft)",
  };
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(closest-side, ${soft[tone]}, transparent 72%)`,
      }}
      aria-hidden="true"
    />
  );
}
