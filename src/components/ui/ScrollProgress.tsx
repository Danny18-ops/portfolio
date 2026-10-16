"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin pastel gradient bar across the very top of the viewport, tracking scroll depth. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-gold to-sand"
      aria-hidden="true"
    />
  );
}
