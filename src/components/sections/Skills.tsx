import type { CSSProperties } from "react";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Tone = "accent" | "gold" | "sage" | "sand" | "sky";
type Skill = { name: string; pct: number };

const groups: { label: string; tone: Tone; items: Skill[] }[] = [
  {
    label: "Languages",
    tone: "sky",
    items: [
      { name: "Python", pct: 95 },
      { name: "SQL", pct: 90 },
      { name: "TypeScript", pct: 78 },
      { name: "Java", pct: 68 },
      { name: "C++", pct: 60 },
    ],
  },
  {
    label: "AI & GenAI",
    tone: "accent",
    items: [
      { name: "LLMs", pct: 94 },
      { name: "RAG", pct: 92 },
      { name: "Agentic AI", pct: 90 },
      { name: "Multi-Agent", pct: 88 },
      { name: "Fine-Tuning", pct: 74 },
      { name: "LoRA/PEFT", pct: 70 },
      { name: "RLHF", pct: 65 },
    ],
  },
  {
    label: "Frameworks",
    tone: "gold",
    items: [
      { name: "LangGraph", pct: 93 },
      { name: "LangChain", pct: 90 },
      { name: "PyTorch", pct: 88 },
      { name: "CrewAI", pct: 85 },
      { name: "Hugging Face", pct: 82 },
      { name: "TensorFlow", pct: 66 },
      { name: "Scikit-learn", pct: 72 },
    ],
  },
  {
    label: "Cloud & MLOps",
    tone: "sage",
    items: [
      { name: "Azure", pct: 90 },
      { name: "AWS", pct: 85 },
      { name: "Docker", pct: 88 },
      { name: "LangSmith", pct: 86 },
      { name: "CI/CD", pct: 84 },
      { name: "Kubernetes", pct: 62 },
      { name: "SageMaker", pct: 64 },
      { name: "MLflow", pct: 70 },
      { name: "Terraform", pct: 55 },
    ],
  },
  {
    label: "Data",
    tone: "sand",
    items: [
      { name: "PostgreSQL", pct: 90 },
      { name: "ChromaDB", pct: 86 },
      { name: "MongoDB", pct: 68 },
      { name: "Pinecone", pct: 64 },
      { name: "FAISS", pct: 66 },
      { name: "Spark", pct: 58 },
      { name: "Kafka", pct: 55 },
    ],
  },
];

function SkillTile({ skill, tone }: { skill: Skill; tone: Tone }) {
  return (
    <div
      className="group relative aspect-square cursor-default overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-200 hover:border-[var(--tone)]"
      style={{ "--tone": `var(--${tone})` } as CSSProperties}
    >
      <div className="absolute inset-0 flex items-center justify-center p-2 text-center transition-opacity duration-200 group-hover:opacity-0">
        <span className="text-[12.5px] font-semibold leading-tight text-fg">{skill.name}</span>
      </div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: `var(--${tone}-soft)` }}
      >
        <span className="font-display text-2xl font-semibold" style={{ color: `var(--${tone})` }}>
          {skill.pct}%
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
          proficiency
        </span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-y border-line bg-surface/40"
    >
      <Aurora className="anim-aurora -top-[30%] right-[10%] h-[60vmin] w-[60vmin] opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            index="04"
            label="skills"
            title="What I work with"
            headingId="skills-heading"
          />
          <p className="mt-4 text-sm text-muted">Hover over a skill for current proficiency.</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={0.05 * i}>
              <div>
                <h3 className="flex items-center gap-2.5 font-display text-lg italic text-fg">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: `var(--${g.tone})` }}
                    aria-hidden="true"
                  />
                  {g.label}
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
                  {g.items.map((s) => (
                    <SkillTile key={s.name} skill={s} tone={g.tone} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
