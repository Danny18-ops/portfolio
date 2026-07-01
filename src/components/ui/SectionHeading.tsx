export function SectionHeading({
  index,
  label,
  title,
  headingId,
}: {
  index: string;
  label: string;
  title: string;
  headingId: string;
}) {
  return (
    <div>
      <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-accent">
        {index} · {label}
      </p>
      <h2
        id={headingId}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
