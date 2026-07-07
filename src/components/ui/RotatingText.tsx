"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Vertically sliding word rotator. Reserves the width of the longest
 * item with an invisible placeholder so the surrounding text never
 * reflows while the words change.
 */
export function RotatingText({
  items,
  className,
  intervalMs = 3000,
}: {
  items: readonly string[];
  className?: string;
  intervalMs?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      intervalMs
    );
    return () => clearInterval(timer);
  }, [reduceMotion, items.length, intervalMs]);

  const longest = items.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      className={`relative inline-block overflow-hidden align-bottom ${className ?? ""}`}
    >
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          initial={reduceMotion ? false : { y: "115%" }}
          animate={{ y: 0 }}
          exit={reduceMotion ? undefined : { y: "-115%" }}
          transition={{ duration: 0.5, ease }}
          className="absolute inset-y-0 left-0 whitespace-nowrap"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
