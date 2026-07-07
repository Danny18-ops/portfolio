import Image from "next/image";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingText } from "@/components/ui/RotatingText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import headshot from "@assets/photos/headshot.png";

const ROLES = ["AI Engineer", "ML Engineer", "AI Software Engineer"];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden"
    >
      <Aurora
        tone="gold"
        className="anim-aurora-alt -right-[18%] -top-[25%] h-[65vmin] w-[65vmin] opacity-60"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            index="01"
            label="about"
            title="The story so far"
            headingId="about-heading"
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-14 md:grid-cols-[minmax(0,350px)_1fr] md:gap-16">
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[350px]">
            {/* offset hairline frame behind the portrait */}
            <span
              className="absolute -inset-0 translate-x-4 translate-y-4 rounded-2xl border border-gold/40"
              aria-hidden="true"
            />
            <Image
              src={headshot}
              alt="Portrait of Dnyaneshwari Raut"
              placeholder="blur"
              sizes="(max-width: 768px) 90vw, 350px"
              className="relative rounded-2xl object-cover"
            />
            <p className="mt-6 text-center font-display text-[15px] italic text-muted">
              San Diego, California
            </p>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.15}>
              <p className="font-display text-2xl leading-snug text-fg sm:text-[1.7rem]">
                I&apos;m an{" "}
                <RotatingText items={ROLES} className="italic text-accent" />
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                For the past two-plus years I&apos;ve built production ML,
                GenAI, and agentic systems for financial services and
                insurance: copilots that plan and call tools, retrieval
                pipelines that stay truthful under pressure, and models that
                make risk decisions with real money attached. The unglamorous
                parts, <span className="text-fg">the evals, the tracing, the
                regression tests</span>, are where I do my best work.
              </p>
            </Reveal>
            <Reveal delay={0.29}>
              <p>
                I hold an M.S. in Computer Science from{" "}
                <span className="text-fg">San Diego State University</span>{" "}
                (May 2026). What excites me most is{" "}
                <span className="text-fg">agentic systems</span>, and the
                question of how you make a system that reasons also a system
                you can trust.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
