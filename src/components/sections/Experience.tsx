import { Aurora } from "@/components/ui/Aurora";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roles = [
  {
    company: "LPL Financial",
    role: "AI Engineer",
    location: "San Diego, CA",
    period: "Aug 2025 – Jun 2026",
    achievements: [
      {
        headline: "Meeting prep: 45 min → under 15",
        detail:
          "Built an agentic copilot for financial advisors: LangGraph wired into Azure OpenAI, Azure AI Search, and MCP connectors, with human-in-the-loop checkpoints wherever the stakes demanded one.",
      },
      {
        headline: "92% answer accuracy, continuously proven",
        detail:
          "The RAG framework underneath held 92% accuracy against evaluation sets, with every agent run traced in LangSmith and scored by LLM-as-judge evaluators.",
      },
      {
        headline: "No change ships without passing review",
        detail:
          "Prompt and retrieval changes had to clear CI/CD regression suites before reaching an advisor. The system ran containerized on AKS and shipped through Azure DevOps.",
      },
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
    role: "Software Engineer, ML",
    location: "Mumbai, India",
    period: "Aug 2022 – Jun 2024",
    achievements: [
      {
        headline: "76% recall on fraudulent claims",
        detail:
          "Owned the full ML lifecycle for insurance clients, building fraud-detection and claims risk-scoring models on XGBoost and LightGBM with real money riding on the decisions.",
      },
      {
        headline: "Analyst review time cut roughly in half",
        detail:
          "Fine-tuned BERT classifiers with Hugging Face to automatically triage claim notes before a human ever saw them.",
      },
      {
        headline: "Sub-300ms inference, end to end",
        detail:
          "PySpark ETL on AWS fed the training data; FastAPI services on SageMaker and Kubernetes served it back, with MLflow tracking every experiment and model.",
      },
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
      className="relative overflow-hidden border-y border-line bg-surface/40"
    >
      <Aurora className="anim-aurora -left-[22%] top-[35%] h-[70vmin] w-[70vmin] opacity-50" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            index="02"
            label="experience"
            title="Where I've shipped"
            headingId="experience-heading"
          />
        </Reveal>

        <div className="mt-16 space-y-16">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={0.08 * i}>
              <article className="border-t border-line pt-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {r.role} <span className="text-accent">·</span>{" "}
                    <span className="italic">{r.company}</span>
                  </h3>
                  <p className="text-sm text-muted">
                    {r.location} · {r.period}
                  </p>
                </div>

                <ul className="mt-10 grid gap-8 md:grid-cols-3">
                  {r.achievements.map((a) => (
                    <li key={a.headline}>
                      <span
                        className="mb-4 block h-px w-10 bg-gold"
                        aria-hidden="true"
                      />
                      <p className="text-[17px] font-semibold leading-snug text-fg">
                        {a.headline}
                      </p>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                        {a.detail}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
