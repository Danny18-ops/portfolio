"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CloudShape } from "@/components/ui/CloudShape";
import { Magnetic } from "@/components/ui/Magnetic";
import { RotatingText } from "@/components/ui/RotatingText";

const TITLES = ["AI Engineer", "ML Engineer", "AI Software Engineer"];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const CLOUDS = [
  { top: "4%", left: "0%", w: "50vmin", h: "26vmin", tone: "var(--sky)", anim: "anim-cloud-1", delay: "0s" },
  { top: "11%", left: "52%", w: "42vmin", h: "22vmin", tone: "var(--sky)", anim: "anim-cloud-2", delay: "-6s" },
  { top: "44%", left: "70%", w: "44vmin", h: "23vmin", tone: "var(--accent)", anim: "anim-cloud-3", delay: "-3s" },
  { top: "60%", left: "2%", w: "36vmin", h: "19vmin", tone: "var(--gold)", anim: "anim-cloud-1", delay: "-10s" },
] as const;

const STARS = [
  { top: "8%", left: "18%", delay: "0s" },
  { top: "5%", left: "42%", delay: "0.6s" },
  { top: "12%", left: "67%", delay: "1.3s" },
  { top: "20%", left: "29%", delay: "2s" },
  { top: "6%", left: "85%", delay: "0.9s" },
  { top: "17%", left: "8%", delay: "1.7s" },
] as const;

/**
 * Signature backdrop: a personal dawn sky, not a generic glow. A
 * purple-into-pink wash, four drifting cloud blooms at different
 * depths and speeds, a quiet scatter of stars where the sky is still
 * dark, and a film-grain wash to keep it from feeling flat/digital.
 */
function Backdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="sky-wash absolute inset-0" />

      {STARS.map((s, i) => (
        <span
          key={i}
          className="anim-twinkle absolute h-[3px] w-[3px] rounded-full bg-fg"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      {CLOUDS.map((c, i) => (
        <CloudShape
          key={i}
          tone={c.tone}
          className={c.anim}
          style={{ top: c.top, left: c.left, height: c.h, width: c.w, animationDelay: c.delay }}
        />
      ))}

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
          <RotatingText items={TITLES} className="text-gradient font-display italic" />
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
          <Magnetic>
            <a
              href="#projects"
              className="block rounded-full bg-gradient-to-r from-accent to-gold px-8 py-3.5 text-[15px] font-semibold text-bg shadow-[0_8px_32px_-8px_var(--glow)] transition-[filter] hover:brightness-110"
            >
              View my work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="glass block rounded-full px-8 py-3.5 text-[15px] font-semibold text-fg transition-colors hover:text-gold"
            >
              Get in touch
            </a>
          </Magnetic>
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
