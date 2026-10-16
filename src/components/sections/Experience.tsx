import { Aurora } from "@/components/ui/Aurora";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roles = [
  {
    company: "LPL Financial",
    role: "Software Engineer, AI",
    tone: "accent" as const,
    location: "San Diego, CA",
    period: "Aug 2025 – Jun 2026",
    achievements: [
      {
        headline: "Meeting prep: 45 min → under 15",
        detail:
          "Built an AI copilot for financial advisors that researches, plans, and drafts answers in real time, with a human checking in wherever it matters.",
      },
      {
        headline: "92% answer accuracy, continuously proven",
        detail:
          "The system behind it holds 92% accuracy, checked automatically against real evaluation sets, not just at launch.",
      },
      {
        headline: "No change ships without passing review",
        detail:
          "Every update runs through automated testing before it ever reaches an advisor.",
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
    role: "Software Engineer",
    tone: "sage" as const,
    location: "Mumbai, India",
    period: "Aug 2022 – Jun 2024",
    achievements: [
      {
        headline: "76% recall on fraudulent claims",
        detail:
          "Owned machine learning models that flag risky insurance claims, with real money riding on the call.",
      },
      {
        headline: "Analyst review time cut roughly in half",
        detail:
          "Trained a language model to pre-screen claim notes before a human ever reads them.",
      },
      {
        headline: "Sub-300ms inference, end to end",
        detail:
          "Built the pipeline and the services behind it, fast enough to use live, not just in a notebook.",
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

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
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
              <article className="relative border-t-2 pt-10" style={{ borderColor: `var(--${r.tone})` }}>
                <span
                  className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full"
                  style={{ background: `var(--${r.tone})` }}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {r.role}{" "}
                    <span style={{ color: `var(--${r.tone})` }}>·</span>{" "}
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
                        className="mb-4 block h-px w-10"
                        style={{ background: `var(--${r.tone})` }}
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
                    <Chip key={s} tone={r.tone}>
                      {s}
                    </Chip>
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
