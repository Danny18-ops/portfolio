"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * Wraps a button/link so it gently pulls toward the pointer on
 * approach and snaps back on leave. Strength is intentionally mild —
 * this is a professional portfolio, not a toy.
 *
 * The bounding rect is read once on pointer-enter and cached, not
 * re-read on every pointermove — re-reading it per move forces a
 * synchronous layout and is what was making the cursor feel janky
 * while hovering interactive elements.
 */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 16, stiffness: 180, mass: 0.4 });
  const springY = useSpring(y, { damping: 16, stiffness: 180, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ translateX: springX, translateY: springY, willChange: "transform" }}
      onPointerEnter={() => {
        rect.current = ref.current?.getBoundingClientRect() ?? null;
      }}
      onPointerMove={(e) => {
        const r = rect.current;
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
