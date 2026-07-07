export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] leading-none text-muted transition-colors hover:border-gold/50 hover:text-fg">
      {children}
    </span>
  );
}
