/**
 * Editorial heading: gold index, letterspaced label, hairline rule,
 * and a large serif display title.
 */
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
      <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.4em] text-muted">
        <span className="text-gold">{index}</span>
        {label}
        <span
          className="h-px min-w-8 max-w-40 flex-1 bg-gradient-to-r from-line to-transparent"
          aria-hidden="true"
        />
      </p>
      <h2
        id={headingId}
        className="mt-5 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}
