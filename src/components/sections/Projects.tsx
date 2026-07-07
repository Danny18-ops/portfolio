import type { ReactNode } from "react";
import {
  FineTuneArt,
  GenContractArt,
  HackMatchArt,
  PatientVoiceArt,
  ResearchCrewArt,
} from "@/components/illustrations/ProjectArt";
import { Aurora } from "@/components/ui/Aurora";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  art: ReactNode;
  hook: string;
  prose: string;
  stack: string[];
  live?: string;
  repo?: string;
};

const featured: Project = {
  title: "HackMatch",
  art: <HackMatchArt />,
  hook: "Hackathon discovery, treated as a retrieval problem.",
  prose:
    "Plain-English queries run through RAG semantic search over ChromaDB embeddings, powered by the Anthropic API, so asking for “beginner-friendly AI hackathons” actually returns beginner-friendly AI hackathons. React front end, FastAPI backend, PostgreSQL underneath, live on its own subdomain.",
  stack: ["React", "FastAPI", "PostgreSQL", "ChromaDB", "RAG", "Anthropic API"],
  live: "https://hackmatch.dnyaneshwariraut.com/",
  repo: "https://github.com/Danny18-ops/hackmatch-app",
};

const projects: Project[] = [
  {
    title: "Multi-Agent AI Research System",
    art: <ResearchCrewArt />,
    hook: "Topic in, polished report out. No human in between.",
    prose:
      "Four specialized agents hand work down a pipeline, and a QA agent scores every draft 0–100, routing weak ones back for up to three self-correcting revisions. Runs on LangGraph or CrewAI behind one interface, with SQLite checkpoints so long runs can crash and resume.",
    stack: ["LangGraph", "CrewAI", "OpenAI", "Python", "SQLite"],
    repo: "https://github.com/Danny18-ops/multi-agent-research-system",
  },
  {
    title: "AI Patient Voice",
    art: <PatientVoiceArt />,
    hook: "A voice bot that quality-tests other voice bots.",
    prose:
      "Places real outbound Twilio calls to a healthcare call-center's AI agent, playing one of 18 patient personas over OpenAI's Realtime speech-to-speech API. Every call is recorded, transcribed, and analyzed by a post-call LLM pass that surfaces bugs automatically.",
    stack: ["OpenAI Realtime API", "Twilio", "FastAPI", "WebSockets"],
    repo: "https://github.com/Danny18-ops/AI-Challenge",
  },
  {
    title: "Gen Contract",
    art: <GenContractArt />,
    hook: "Plain-English deal terms in, editable clause-by-clause contracts out.",
    prose:
      "Drafts agreements section by section, covering liability, payment terms, and termination, instead of dumping one wall of legalese. React and TypeScript on Vite with shadcn/ui and a Supabase backend. Deployed and live.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "shadcn/ui"],
    live: "https://gen-contract-18.lovable.app/",
    repo: "https://github.com/Danny18-ops/contract-genesis-ai",
  },
  {
    title: "LLM Fine-Tuning with RL",
    art: <FineTuneArt />,
    hook: "+20% arithmetic reasoning from pure reinforcement learning.",
    prose:
      "Fine-tuned Llama-1B with GRPO in PyTorch using rule-based rewards. No learned reward model, just verifiable checks on the model's arithmetic. A compact study in policy optimization, reward shaping, and where the two disagree.",
    stack: ["PyTorch", "GRPO", "Llama-1B", "RL"],
  },
];

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
          ? "bg-accent text-bg shadow-[0_0_20px_var(--glow)] hover:brightness-110"
          : "border border-fg/20 text-fg hover:border-gold/60 hover:text-gold"
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

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
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

      {/* featured project */}
      <Reveal>
        <article className="mt-14 grid overflow-hidden rounded-3xl border border-gold/30 bg-surface transition-colors duration-300 hover:border-gold/60 md:grid-cols-2">
          <div className="aspect-[400/260] border-b border-line md:aspect-auto md:border-b-0 md:border-r">
            {featured.art}
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-11">
            <p className="font-display text-[15px] italic text-gold">Featured</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-lg font-medium leading-snug text-fg/90">
              {featured.hook}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {featured.prose}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {featured.live && (
                <ActionButton href={featured.live} label="Live" title={featured.title} primary />
              )}
              {featured.repo && (
                <ActionButton href={featured.repo} label="Code" title={featured.title} />
              )}
            </div>
          </div>
        </article>
      </Reveal>

      {/* project grid */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.06 * (i % 2)}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_24px_70px_-40px_var(--glow)]">
              <div className="aspect-[400/230] border-b border-line">{p.art}</div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[17px] font-medium leading-snug text-fg/90">
                  {p.hook}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.prose}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                  {p.live && (
                    <ActionButton href={p.live} label="Live" title={p.title} primary />
                  )}
                  {p.repo && <ActionButton href={p.repo} label="Code" title={p.title} />}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
