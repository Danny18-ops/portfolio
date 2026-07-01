import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6 text-muted" />
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Dnyaneshwari Raut — designed &amp; built
            from scratch, no templates.
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            github
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            linkedin
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
