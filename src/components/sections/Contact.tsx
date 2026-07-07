import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-line"
    >
      {/* soft ember echo of the hero backdrop */}
      <div
        className="anim-aurora-alt absolute -bottom-[40%] left-1/2 h-[70vmin] w-[90vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_70%)] opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              <span className="text-muted">05</span> · get in touch
            </p>
            <h2
              id="contact-heading"
              className="mt-6 font-display text-4xl font-semibold tracking-tight text-fg sm:text-6xl"
            >
              Let&apos;s build something
              <br />
              that <span className="italic text-accent">ships</span>.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m open to AI and ML engineering roles, interesting
              agentic-systems problems, and good conversations about either.
              Mention evals and I&apos;ll probably reply the same day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.mailto}
              className="rounded-full bg-accent px-8 py-3.5 text-[15px] font-semibold text-bg shadow-[0_0_32px_var(--glow)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-110"
            >
              Say hello
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px]">
            <a
              href={site.mailto}
              className="text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
