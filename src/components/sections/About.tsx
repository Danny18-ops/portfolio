import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import headshot from "@assets/photos/headshot.png";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          index="01"
          label="about"
          title="Models are easy. Products are hard."
          headingId="about-heading"
        />
      </Reveal>

      <div className="mt-12 grid items-start gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[340px]">
          {/* corner brackets — on-theme frame, pure CSS */}
          <span
            className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-accent"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-accent"
            aria-hidden="true"
          />
          <Image
            src={headshot}
            alt="Portrait of Dnyaneshwari Raut"
            placeholder="blur"
            sizes="(max-width: 768px) 90vw, 340px"
            className="rounded-lg border border-line object-cover"
          />
          <p className="mt-4 text-center font-mono text-xs tracking-[0.2em] text-muted">
            san diego, ca
          </p>
        </Reveal>

        <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
          <Reveal delay={0.15}>
            <p>
              I&apos;m an AI engineer drawn to the unglamorous parts of machine
              learning — the evals, the tracing, the regression tests — because
              that&apos;s where a promising demo turns into something people
              actually rely on. Over the past two-plus years I&apos;ve built
              production ML, NLP, GenAI, and agentic AI systems across financial
              services and insurance: copilots that plan and call tools,
              retrieval pipelines that stay truthful under pressure, and models
              that make risk decisions with real money attached.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p>
              I hold an M.S. in Computer Science from{" "}
              <span className="text-fg">San Diego State University</span> (May
              2026) and a B.E. in Computer Science from{" "}
              <span className="text-fg">Dr. D. Y. Patil University, Pune</span>.
              The degree work sharpened the theory; the years at LPL Financial
              and Cognizant taught me what the theory looks like at 2 a.m. when
              a pipeline breaks.
            </p>
          </Reveal>
          <Reveal delay={0.29}>
            <p>
              What keeps me up at night — in the good way — is agentic systems:
              multi-agent orchestration, human-in-the-loop design, and the
              question of how you make a system that reasons also a system you
              can trust. If it involves LangGraph state machines, retrieval
              evals, or an LLM grading another LLM, I&apos;m probably already
              tinkering with it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
