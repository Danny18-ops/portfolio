"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RotatingText } from "@/components/ui/RotatingText";

const TITLES = ["AI Engineer", "ML Engineer", "AI Software Engineer"];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Signature backdrop: two drifting ember-glow auroras, a film-grain
 * wash, and slow hairline orbits — original, no particle-network cliché.
 */
function Backdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* ember auroras */}
      <div className="anim-aurora absolute -top-[30%] left-[8%] h-[75vmin] w-[75vmin] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_72%)] opacity-70 blur-3xl" />
      <div className="anim-aurora-alt absolute -bottom-[25%] right-[-12%] h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(closest-side,var(--gold-soft),transparent_70%)] blur-3xl" />

      {/* hairline orbits, anchored off the right edge */}
      <svg
        viewBox="0 0 800 800"
        className="absolute -right-[22vmin] top-1/2 h-[110vmin] w-[110vmin] -translate-y-1/2"
        fill="none"
      >
        <g className="anim-orbit">
          <circle cx="400" cy="400" r="330" stroke="var(--line)" strokeWidth="1" />
          <circle cx="400" cy="70" r="4" fill="var(--gold)" />
        </g>
        <g className="anim-orbit-reverse">
          <circle
            cx="400"
            cy="400"
            r="238"
            stroke="var(--line)"
            strokeWidth="1"
            strokeDasharray="1 7"
          />
          <circle cx="638" cy="400" r="3" fill="var(--accent)" />
        </g>
        <circle cx="400" cy="400" r="146" stroke="var(--line)" strokeWidth="1" />
      </svg>

      {/* film grain + fade into the page */}
      <div className="texture-grain absolute inset-0 opacity-[0.05] dark:opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Backdrop />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          {...fadeUp(0.05)}
          className="text-sm font-medium uppercase tracking-[0.4em] text-gold"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-6 font-display text-[3.2rem] font-semibold leading-[1.04] tracking-tight text-fg sm:text-7xl lg:text-[5.5rem]"
        >
          Dnyaneshwari
          <br />
          Raut<span className="text-accent">.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="mt-6 text-3xl text-muted sm:text-4xl">
          <RotatingText items={TITLES} className="font-display italic text-fg" />
        </motion.p>

        <motion.p
          {...fadeUp(0.42)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          I build AI that survives contact with production: agentic copilots,
          RAG systems that stay accurate, and the LLMOps discipline that keeps
          them honest.
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-8 py-3.5 text-[15px] font-semibold text-bg shadow-[0_0_32px_var(--glow)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-110"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-fg/20 px-8 py-3.5 text-[15px] font-semibold text-fg transition-colors hover:border-gold/60 hover:text-gold"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-muted transition-colors hover:text-gold sm:flex"
      >
        scroll
        <span
          className="anim-float block h-9 w-px bg-gradient-to-b from-gold to-transparent"
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}
