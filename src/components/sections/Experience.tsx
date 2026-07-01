import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roles = [
  {
    company: "LPL Financial",
    role: "AI Engineer",
    meta: "San Diego, CA · Aug 2025 – Jun 2026",
    paragraphs: [
      "At LPL Financial I built an agentic copilot for financial advisors — a LangGraph system wired into Azure OpenAI, Azure AI Search, and MCP connectors, with human-in-the-loop checkpoints wherever the stakes demanded a person in the chain. It compressed advisor meeting prep from 45 minutes to under 15, and the RAG framework underneath it held 92% answer accuracy against our evaluation sets.",
      "Shipping it mattered as much as building it. Every agent run was traced in LangSmith, answer quality was scored continuously by LLM-as-judge evaluators, and prompt or retrieval changes had to pass CI/CD regression suites before they went anywhere near an advisor. The whole system ran containerized on AKS, built with Docker and delivered through Azure DevOps.",
    ],
    stack: [
      "LangGraph",
      "Azure OpenAI",
      "Azure AI Search",
      "MCP",
      "LangSmith",
      "Docker",
      "AKS",
      "Azure DevOps",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Machine Learning Engineer",
    meta: "Mumbai, India · Aug 2022 – Jun 2024",
    paragraphs: [
      "At Cognizant I owned the full ML lifecycle for insurance clients. I built fraud-detection and claims risk-scoring models on XGBoost and LightGBM that reached 76% recall on fraudulent cases, and fine-tuned BERT classifiers with Hugging Face to automatically triage claim notes — cutting analyst review time roughly in half.",
      "The engineering behind those models was mine too: PySpark ETL pipelines on AWS feeding the training data, FastAPI inference services deployed through SageMaker and Kubernetes that kept latency under 300 milliseconds, and MLflow tying the whole practice together with experiment tracking and a proper model registry.",
    ],
    stack: [
      "XGBoost",
      "LightGBM",
      "BERT",
      "Hugging Face",
      "PySpark",
      "AWS",
      "FastAPI",
      "SageMaker",
      "Kubernetes",
      "MLflow",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-line bg-surface/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            index="02"
            label="experience"
            title="Where I've shipped"
            headingId="experience-heading"
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={0.08 * i}>
              <article className="relative grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="md:pt-1">
                  <p className="font-mono text-xs leading-relaxed tracking-wide text-muted">
                    {r.meta}
                  </p>
                </div>
                <div className="relative border-l border-line pl-6 md:pl-8">
                  <span
                    className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_var(--glow)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">
                    {r.role}{" "}
                    <span className="text-accent">@ {r.company}</span>
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                    {r.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {r.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
