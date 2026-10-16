"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * Subtle 3D tilt toward the pointer, used for project preview panels.
 * Bounding rect is cached on pointer-enter rather than re-read every
 * pointermove, which would otherwise force a layout on every pixel of
 * mouse movement and stall the main thread (visible as cursor jank).
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sx = useSpring(rotateX, { damping: 20, stiffness: 220 });
  const sy = useSpring(rotateY, { damping: 20, stiffness: 220 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 800, willChange: "transform" }}
      onPointerEnter={() => {
        rect.current = ref.current?.getBoundingClientRect() ?? null;
      }}
      onPointerMove={(e) => {
        const r = rect.current;
        if (!r) return;
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rotateY.set(px * 8);
        rotateX.set(py * -8);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
