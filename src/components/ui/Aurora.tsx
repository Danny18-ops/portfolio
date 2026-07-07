/**
 * Soft ember-glow blob, reused across sections at varied positions so
 * the hero's atmosphere carries through the whole page. Parent section
 * must be `relative overflow-hidden`.
 */
export function Aurora({
  className,
  tone = "accent",
}: {
  className: string;
  tone?: "accent" | "gold";
}) {
  const gradient =
    tone === "gold"
      ? "bg-[radial-gradient(closest-side,var(--gold-soft),transparent_70%)]"
      : "bg-[radial-gradient(closest-side,var(--glow),transparent_72%)]";
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${gradient} ${className}`}
      aria-hidden="true"
    />
  );
}
