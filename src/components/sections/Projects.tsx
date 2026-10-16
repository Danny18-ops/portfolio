import type { ReactNode } from "react";
import {
  FineTuneArt,
  GenContractArt,
  HackMatchArt,
  HookRelayArt,
  PatientVoiceArt,
  ResearchCrewArt,
} from "@/components/illustrations/ProjectArt";
import { Aurora } from "@/components/ui/Aurora";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

type Project = {
  title: string;
  art: ReactNode;
  hook: string;
  prose?: string;
  stack: string[];
  live?: string;
  repo?: string;
};

const hackmatch: Project = {
  title: "HackMatch",
  art: <HackMatchArt />,
  hook: "Hackathon discovery, treated as a retrieval problem.",
  prose:
    "Plain-English queries run through RAG semantic search over ChromaDB embeddings, powered by the Anthropic API, so asking for “beginner-friendly AI hackathons” actually returns beginner-friendly AI hackathons. React front end, FastAPI backend, PostgreSQL underneath, live on its own subdomain.",
  stack: ["React", "FastAPI", "PostgreSQL", "ChromaDB", "RAG", "Anthropic API"],
  live: "https://hackmatch.dnyaneshwariraut.com/",
  repo: "https://github.com/Danny18-ops/hackmatch-app",
};

const hookrelay: Project = {
  title: "HookRelay",
  art: <HookRelayArt />,
  hook: "A Hookdeck/Zapier-style relay for every webhook you receive, with retries, replay, and an SSRF guard baked in.",
  stack: ["Node.js", "MongoDB", "Redis", "BullMQ", "React", "SSE"],
  repo: "https://github.com/Danny18-ops/HookRelay",
};

const researchCrew: Project = {
  title: "Multi-Agent Research System",
  art: <ResearchCrewArt />,
  hook: "Topic in, polished report out. No human in between.",
  stack: ["LangGraph", "CrewAI", "Python"],
  repo: "https://github.com/Danny18-ops/multi-agent-research-system",
};

const patientVoice: Project = {
  title: "AI Patient Voice",
  art: <PatientVoiceArt />,
  hook: "A voice bot that quality-tests other voice bots.",
  stack: ["OpenAI Realtime", "Twilio", "FastAPI"],
  repo: "https://github.com/Danny18-ops/AI-Challenge",
};

const genContract: Project = {
  title: "Gen Contract",
  art: <GenContractArt />,
  hook: "Plain-English deal terms in, editable clause-by-clause contracts out.",
  stack: ["React", "TypeScript", "Supabase", "shadcn/ui"],
  live: "https://gen-contract-18.lovable.app/",
  repo: "https://github.com/Danny18-ops/contract-genesis-ai",
};

const fineTune: Project = {
  title: "LLM Fine-Tuning with RL",
  art: <FineTuneArt />,
  hook: "+20% arithmetic reasoning from pure reinforcement learning, no learned reward model.",
  stack: ["PyTorch", "GRPO", "Llama-1B"],
};

function ActionButton({
  href,
  label,
  title,
  primary,
}: {
  href: string;
  label: string;
  title: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${title} (opens in new tab)`}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[transform,filter,color,border-color] hover:-translate-y-0.5 ${
        primary
          ? "bg-gradient-to-r from-accent to-gold text-bg shadow-[0_8px_28px_-10px_var(--glow)] hover:brightness-110"
          : "glass text-fg hover:border-gold/60 hover:text-gold"
      }`}
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  );
}

/** The art panel itself is the GitHub link — hover reveals the cue, click opens the repo. */
function ProjectMedia({
  art,
  repo,
  title,
  className,
}: {
  art: ReactNode;
  repo?: string;
  title: string;
  className: string;
}) {
  const body = (
    <TiltCard className={className}>
      {art}
      {repo && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-bg/55 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
          <span className="translate-y-2 rounded-full border border-accent/50 bg-surface px-4 py-2 text-[13px] font-semibold text-accent opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View on GitHub ↗
          </span>
        </div>
      )}
    </TiltCard>
  );

  if (!repo) return body;

  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} source on GitHub (opens in new tab)`}
      data-cursor="view"
      data-cursor-label="View"
      className="group relative block"
    >
      {body}
    </a>
  );
}

const card =
  "glass flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-[0_24px_70px_-40px_var(--glow)] hover:ring-1 hover:ring-accent/40";

/** The showcase tile — full story: prose, every tag, both buttons. */
function LgCard({ project, kicker }: { project: Project; kicker?: string }) {
  return (
    <article className={`${card} grid md:grid-cols-2`}>
      <ProjectMedia
        art={project.art}
        repo={project.repo}
        title={project.title}
        className="relative aspect-[400/260] border-b border-line md:aspect-auto md:h-full md:border-b-0 md:border-r"
      />
      <div className="flex flex-col justify-center p-8 sm:p-10">
        {kicker && <p className="font-display text-[15px] italic text-gold">{kicker}</p>}
        <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-lg font-medium leading-snug text-fg/90">{project.hook}</p>
        {project.prose && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.prose}</p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.live && (
            <ActionButton href={project.live} label="Live" title={project.title} primary />
          )}
          {project.repo && <ActionButton href={project.repo} label="Code" title={project.title} />}
        </div>
      </div>
    </article>
  );
}

/** A compact horizontal tile — hook + tags + buttons, no long-form prose. */
function WideCard({ project }: { project: Project }) {
  return (
    <article className={`${card} grid sm:grid-cols-[1.1fr_1fr]`}>
      <ProjectMedia
        art={project.art}
        repo={project.repo}
        title={project.title}
        className="relative aspect-[400/230] border-b border-line sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r"
      />
      <div className="flex flex-col justify-center p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
          {project.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-snug text-fg/90">{project.hook}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          {project.live && (
            <ActionButton href={project.live} label="Live" title={project.title} primary />
          )}
          {project.repo && <ActionButton href={project.repo} label="Code" title={project.title} />}
        </div>
      </div>
    </article>
  );
}

/** The quiet tile — just the live visual, title, and hook; click to go deeper. */
function SmCard({ project }: { project: Project }) {
  return (
    <article className={card}>
      <ProjectMedia
        art={project.art}
        repo={project.repo}
        title={project.title}
        className="relative aspect-[400/260] border-b border-line"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold tracking-tight text-fg">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-snug text-muted">{project.hook}</p>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Aurora tone="gold" className="anim-aurora-alt -right-[15%] bottom-[5%] h-[75vmin] w-[75vmin] opacity-60" />

      <Reveal>
        <SectionHeading
          index="03"
          label="selected work"
          title="Things I've built"
          headingId="projects-heading"
        />
      </Reveal>

      {/* bento: big showcase + a stacked column, then two wide tiles below */}
      <Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-[1.6fr_1fr]">
          <LgCard project={hackmatch} kicker="Featured" />
          <div className="grid gap-6 md:grid-rows-[auto_1fr]">
            <WideCard project={hookrelay} />
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <SmCard project={researchCrew} />
              <SmCard project={patientVoice} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <WideCard project={genContract} />
          <WideCard project={fineTune} />
        </div>
      </Reveal>
    </section>
  );
}
