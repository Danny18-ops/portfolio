"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Variant = "default" | "link" | "view";

const RING_SIZE = 64;
const RING_SCALE_DEFAULT = 30 / RING_SIZE;

/**
 * Replaces the system arrow with a two-part mark: a dot that tracks
 * the pointer exactly, and a ring that trails behind on a spring.
 * Hovering anything interactive swells the ring and swaps its label;
 * project art panels get a "VIEW" cue instead of a generic pointer.
 *
 * The ring is a fixed 64px box animated with `scale`, never `width`/
 * `height` — animating box dimensions forces a layout every spring
 * frame, which is what reads as "janky" while hovering things. Scale
 * is a transform, so it's compositor-only.
 *
 * Native cursor is hidden only after this mounts and confirms a fine
 * pointer (see html.custom-cursor in globals.css) — a visitor with JS
 * off, or on a touch device, always keeps a normal, visible cursor.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 30, stiffness: 500, mass: 0.5 });
  const ringY = useSpring(y, { damping: 30, stiffness: 500, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("custom-cursor");
    // Mount-only flip after confirming a fine pointer; mirrors next-themes'
    // own hydration-safe pattern for client-only state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor], a, button"
      );
      if (!target) {
        setVariant("default");
        setLabel(null);
        return;
      }
      const kind = target.dataset.cursor;
      setVariant(kind === "view" ? "view" : "link");
      setLabel(target.dataset.cursorLabel ?? (kind === "view" ? "View" : null));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const swollen = variant !== "default";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      <motion.div
        style={{ translateX: x, translateY: y, willChange: "transform" }}
        className="fixed left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        animate={{ opacity: swollen ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
          width: RING_SIZE,
          height: RING_SIZE,
          backgroundColor: "var(--accent-soft)",
          willChange: "transform, opacity",
        }}
        className="fixed left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/70"
        animate={{
          scale: swollen ? 1 : RING_SCALE_DEFAULT,
          opacity: swollen ? 1 : 0.45,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 380 }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-accent"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
