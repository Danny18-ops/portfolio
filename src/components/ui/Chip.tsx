export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent">
      {children}
    </span>
  );
}
