import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          index="05"
          label="contact"
          title="Let's build something that ships"
          headingId="contact-heading"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m open to AI and ML engineering roles, interesting agentic-systems
          problems, and good conversations about either. My inbox is the fastest
          way in — I read everything, and if you mention evals I&apos;ll probably
          reply the same day.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-[0_0_24px_var(--glow)] transition-transform hover:-translate-y-0.5"
          >
            Say hello
          </a>
          {/* TODO: resume — drop the final PDF at public/assets/resume/resume.pdf; this
              button already points there, no code change needed. */}
          <a
            href={site.resume}
            download="Dnyaneshwari-Raut-Resume.pdf"
            className="rounded-md border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            Download Resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.26}>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-sm">
          <a
            href={`mailto:${site.email}`}
            className="group text-muted transition-colors hover:text-accent"
          >
            <span className="text-accent">mail</span> ·{" "}
            <span className="group-hover:underline group-hover:underline-offset-4">
              {site.email}
            </span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted transition-colors hover:text-accent"
          >
            <span className="text-accent">in</span> ·{" "}
            <span className="group-hover:underline group-hover:underline-offset-4">
              linkedin.com/in/dnyaneshwarii
            </span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted transition-colors hover:text-accent"
          >
            <span className="text-accent">gh</span> ·{" "}
            <span className="group-hover:underline group-hover:underline-offset-4">
              github.com/Danny18-ops
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
