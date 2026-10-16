"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard permissions can fail silently; the mailto button still works
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-line"
    >
      {/* soft pastel echo of the hero backdrop */}
      <div
        className="anim-aurora-alt absolute -bottom-[40%] left-1/2 h-[70vmin] w-[90vmin] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-gold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              open to new builds
            </p>
            <h2
              id="contact-heading"
              className="mt-6 font-display text-4xl font-semibold tracking-tight text-fg sm:text-6xl"
            >
              Let&apos;s open a
              <br />
              <span className="italic text-accent">channel</span>.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m open to AI and ML engineering roles, interesting
              agentic-systems problems, and good conversations about either.
              Mention evals and I&apos;ll probably reply the same day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={site.mailto}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-gold px-8 py-3.5 text-[15px] font-semibold text-bg shadow-[0_8px_32px_-8px_var(--glow)] transition-[filter] hover:brightness-110"
              >
                Send a signal
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 11l18-8-8 18-2-8-8-2Z" />
                </svg>
              </a>
            </Magnetic>

            <Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
                className="glass relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-[15px] font-semibold text-fg transition-colors hover:text-gold"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "copy"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex items-center gap-2.5"
                  >
                    {copied ? "Copied ✓" : "Copy email"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px]">
            <a
              href={site.mailto}
              className="text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-sage hover:underline"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
