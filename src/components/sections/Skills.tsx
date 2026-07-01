import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  {
    label: "languages",
    items: ["Python", "SQL", "Java", "TypeScript", "C++"],
  },
  {
    label: "ai / genai",
    items: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "Multi-Agent Systems",
      "Fine-Tuning",
      "LoRA/PEFT",
      "RLHF",
    ],
  },
  {
    label: "frameworks",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Scikit-learn",
    ],
  },
  {
    label: "cloud / mlops",
    items: [
      "Azure",
      "AWS",
      "SageMaker",
      "Docker",
      "Kubernetes",
      "MLflow",
      "LangSmith",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    label: "data",
    items: ["PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "FAISS", "Kafka", "Spark"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-line bg-surface/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            index="04"
            label="skills"
            title="The toolbox"
            headingId="skills-heading"
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={0.06 * i}>
              <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
                <p className="pt-1 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Chip key={s}>{s}</Chip>
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
