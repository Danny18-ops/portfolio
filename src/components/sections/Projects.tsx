import type { ReactNode } from "react";
import {
  FineTuneArt,
  GenContractArt,
  HackMatchArt,
  PatientVoiceArt,
  ResearchCrewArt,
} from "@/components/illustrations/ProjectArt";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  filename: string;
  art: ReactNode;
  prose: string;
  stack: string[];
  live?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "HackMatch",
    filename: "hackmatch.app",
    art: <HackMatchArt />,
    prose:
      "A hackathon discovery platform that treats finding your next event like a retrieval problem. Plain-English queries run through RAG semantic search over ChromaDB embeddings, powered by the Anthropic API, so asking for beginner-friendly AI hackathons actually returns beginner-friendly AI hackathons — not a keyword soup. A React front end talks to a FastAPI backend with PostgreSQL underneath, and the whole thing is live on its own subdomain.",
    stack: ["React", "FastAPI", "PostgreSQL", "ChromaDB", "RAG", "Anthropic API"],
    live: "https://hackmatch.dnyaneshwariraut.com/",
  },
  {
    title: "Multi-Agent AI Research System",
    filename: "research_crew.py",
    art: <ResearchCrewArt />,
    prose:
      "Topic in, polished Markdown report out — no human steps in between. Four specialized agents (researcher, summarizer, writer, and a quality checker) hand work down a pipeline, and the QA agent scores every draft from 0–100, routing anything below threshold back to the writer for up to three self-correcting revision cycles. It runs on either a LangGraph or CrewAI backend behind the same interface, with SQLite checkpoints so long research runs can crash and resume.",
    stack: ["LangGraph", "CrewAI", "OpenAI", "Python", "Pydantic", "SQLite"],
    repo: "https://github.com/Danny18-ops/multi-agent-research-system",
  },
  {
    title: "AI Patient Voice",
    filename: "patient_voice.py",
    art: <PatientVoiceArt />,
    prose:
      "A voice bot that quality-tests other voice bots. It places real outbound calls through Twilio to a healthcare call-center's AI agent, then plays one of 18 patient personas — from routine refill requests to deliberately adversarial edge cases — using OpenAI's Realtime speech-to-speech API bridged over FastAPI WebSockets. Every call is recorded and transcribed, and a post-call LLM analysis pass surfaces bugs and latency issues automatically, turning agent QA from a manual chore into a repeatable test suite.",
    stack: ["OpenAI Realtime API", "Twilio", "FastAPI", "WebSockets", "Python"],
    repo: "https://github.com/Danny18-ops/AI-Challenge",
  },
  {
    title: "Gen Contract",
    filename: "gen-contract.tsx",
    art: <GenContractArt />,
    prose:
      "An AI contract generator that turns plain-English deal terms into structured, clause-by-clause agreements you can actually edit. Built as a React and TypeScript app on Vite with shadcn/ui components and a Supabase backend, it drafts the document section by section — liability, payment terms, termination — instead of dumping one long wall of legalese. Deployed and live, with the full source on GitHub.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "shadcn/ui"],
    live: "https://gen-contract-18.lovable.app/",
    repo: "https://github.com/Danny18-ops/contract-genesis-ai",
  },
  {
    title: "LLM Fine-Tuning with Reinforcement Learning",
    filename: "grpo_train.py",
    art: <FineTuneArt />,
    prose:
      "How far can reinforcement learning push a small model when the reward signal is exact? I fine-tuned Llama-1B with GRPO in PyTorch using rule-based rewards — no learned reward model, just verifiable checks on the model's arithmetic — and lifted accuracy on arithmetic reasoning by 20%. A compact study in the mechanics behind reasoning models: policy optimization, reward shaping, and the failure modes that appear when the two disagree.",
    stack: ["PyTorch", "GRPO", "Llama-1B", "Reinforcement Learning"],
  },
];

function ExternalLink({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${title} (opens in new tab)`}
      className="group inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-accent-strong"
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
      className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          index="03"
          label="projects"
          title="Things I've built"
          headingId="projects-heading"
        />
      </Reveal>

      <div className="mt-14 space-y-20 sm:space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              {/* illustration panel with terminal chrome */}
              <div
                className={`overflow-hidden rounded-xl border border-line bg-surface shadow-[0_18px_50px_-30px_rgba(0,0,0,0.6)] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/60" aria-hidden="true" />
                  <span className="ml-2 font-mono text-[11px] text-muted">
                    {p.filename}
                  </span>
                </div>
                <div className="aspect-[400/260]">{p.art}</div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-mono text-xs tracking-[0.25em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{p.prose}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                {(p.live || p.repo) && (
                  <div className="mt-6 flex items-center gap-6">
                    {p.live && (
                      <ExternalLink href={p.live} label="live" title={p.title} />
                    )}
                    {p.repo && (
                      <ExternalLink href={p.repo} label="code" title={p.title} />
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
