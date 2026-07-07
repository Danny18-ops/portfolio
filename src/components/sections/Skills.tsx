import { Fragment } from "react";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Skill = { name: string; core?: boolean };

const groups: { label: string; items: Skill[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", core: true },
      { name: "SQL", core: true },
      { name: "Java" },
      { name: "TypeScript" },
      { name: "C++" },
    ],
  },
  {
    label: "AI & GenAI",
    items: [
      { name: "LLMs", core: true },
      { name: "RAG", core: true },
      { name: "Agentic AI", core: true },
      { name: "Multi-Agent Systems", core: true },
      { name: "Fine-Tuning" },
      { name: "LoRA/PEFT" },
      { name: "RLHF" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "LangChain", core: true },
      { name: "LangGraph", core: true },
      { name: "CrewAI", core: true },
      { name: "PyTorch", core: true },
      { name: "Hugging Face", core: true },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
    ],
  },
  {
    label: "Cloud & MLOps",
    items: [
      { name: "Azure", core: true },
      { name: "AWS", core: true },
      { name: "Docker", core: true },
      { name: "LangSmith", core: true },
      { name: "CI/CD", core: true },
      { name: "SageMaker" },
      { name: "Kubernetes" },
      { name: "MLflow" },
      { name: "Terraform" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "ChromaDB", core: true },
      { name: "MongoDB" },
      { name: "Pinecone" },
      { name: "FAISS" },
      { name: "Spark" },
      { name: "Kafka" },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-y border-line bg-surface/40"
    >
      <Aurora className="anim-aurora -top-[30%] right-[10%] h-[60vmin] w-[60vmin] opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            index="04"
            label="skills"
            title="What I work with"
            headingId="skills-heading"
          />
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={0.05 * i}>
              <div className="grid gap-3 py-9 sm:grid-cols-[230px_1fr] sm:gap-10">
                <h3 className="font-display text-xl italic text-gold">{g.label}</h3>
                <p className="text-[17px] leading-loose">
                  {g.items.map((s, j) => (
                    <Fragment key={s.name}>
                      {j > 0 && (
                        <span className="mx-3 text-gold/60" aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span
                        className={
                          s.core
                            ? "font-medium text-fg"
                            : "text-muted"
                        }
                      >
                        {s.name}
                      </span>
                    </Fragment>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          <span className="text-fg">Bold</span> marks the tools I reach for daily
          in production work.
        </p>
      </div>
    </section>
  );
}
