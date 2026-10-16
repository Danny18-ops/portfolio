type Tone = "accent" | "gold" | "sage" | "sand" | "sky";

const toneClass: Record<Tone, string> = {
  accent: "hover:border-accent/50 hover:text-accent",
  gold: "hover:border-gold/50 hover:text-gold",
  sage: "hover:border-sage/50 hover:text-sage",
  sand: "hover:border-sand/50 hover:text-sand",
  sky: "hover:border-sky/50 hover:text-sky",
};

export function Chip({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] leading-none text-muted transition-[transform,color,border-color] hover:-translate-y-0.5 ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}
