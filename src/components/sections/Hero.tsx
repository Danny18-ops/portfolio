"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { site } from "@/lib/site";

const TITLES = ["AI Engineer", "ML Engineer", "AI Software Engineer"];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function RotatingTitle() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % TITLES.length), 2800);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <span className="inline-flex items-baseline gap-3 font-mono">
      <span className="text-accent" aria-hidden="true">
        ▸
      </span>
      <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={TITLES[index]}
            initial={reduceMotion ? false : { y: "115%" }}
            animate={{ y: 0 }}
            exit={reduceMotion ? undefined : { y: "-115%" }}
            transition={{ duration: 0.45, ease }}
            className="block whitespace-nowrap"
          >
            {TITLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="anim-blink -ml-1 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.15em] bg-accent" aria-hidden="true" />
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <NeuralCanvas className="absolute inset-0 h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          {...fadeUp(0.05)}
          className="font-mono text-sm tracking-[0.2em] text-accent"
        >
          hello world — I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-5 font-display text-5xl font-bold tracking-tight text-fg sm:text-7xl"
        >
          Dnyaneshwari Raut
        </motion.h1>

        <motion.p
          {...fadeUp(0.28)}
          className="mt-5 text-2xl font-medium text-muted sm:text-4xl"
        >
          <RotatingTitle />
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I build AI that survives contact with production — agentic copilots,
          RAG systems that stay accurate, and the LLMOps discipline that keeps
          them honest. Most recently: an advisor copilot at LPL Financial that
          cut meeting prep from 45 minutes to under 15.
        </motion.p>

        <motion.div {...fadeUp(0.52)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-[0_0_24px_var(--glow)] transition-transform hover:-translate-y-0.5"
          >
            View Work
          </a>
          {/* TODO: resume — drop the final PDF at public/assets/resume/resume.pdf; this
              button already points there, no code change needed. */}
          <a
            href={site.resume}
            download="Dnyaneshwari-Raut-Resume.pdf"
            className="rounded-md border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="group px-2 py-3 font-mono text-sm text-muted transition-colors hover:text-fg"
          >
            contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-muted transition-colors hover:text-accent sm:flex"
      >
        scroll
        <span className="anim-float block h-8 w-px bg-gradient-to-b from-accent to-transparent" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
