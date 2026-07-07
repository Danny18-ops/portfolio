export const site = {
  url: "https://dnyaneshwariraut.com",
  name: "Dnyaneshwari Raut",
  title: "Dnyaneshwari Raut · AI Engineer",
  description:
    "AI Engineer building production ML, NLP, GenAI, and agentic AI systems: LangGraph copilots, RAG pipelines, and LLMOps that ship. MS Computer Science, San Diego State University.",
  email: "dnyaneshwariraut2118@gmail.com",
  mailto: "mailto:dnyaneshwariraut2118@gmail.com?subject=Portfolio%20Inquiry",
  github: "https://github.com/Danny18-ops",
  linkedin: "https://www.linkedin.com/in/dnyaneshwarii",
  /* TODO: resume — drop the final PDF at public/assets/resume/resume.pdf.
     Every "Download Resume" button already points at this path. */
  resume: "/assets/resume/resume.pdf",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
