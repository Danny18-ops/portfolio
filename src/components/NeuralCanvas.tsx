"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type NodeP = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { a: number; b: number; t: number };

const EDGE_DIST = 132;
const POINTER_DIST = 190;

/**
 * Animated agent-graph background: drifting nodes, proximity edges,
 * cyan signal pulses traveling between neighbors, cursor-linked halo.
 * Respects prefers-reduced-motion (renders a single static frame),
 * pauses off-screen and on hidden tabs.
 */
export function NeuralCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const light = resolvedTheme === "light";
    const nodeColor = light ? "rgba(15, 23, 42, 0.4)" : "rgba(230, 237, 246, 0.5)";
    const edgeRGB = light ? "15, 23, 42" : "148, 163, 184";
    const edgeAlpha = light ? 0.16 : 0.22;
    const accentRGB = light ? "14, 116, 144" : "34, 211, 238";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes: NodeP[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let running = false;
    let intersecting = true;
    let lastPulse = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const seed = () => {
      const count = Math.min(84, Math.max(28, Math.floor((width * height) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        r: 1 + Math.random() * 1.6,
      }));
      pulses = [];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduceMotion) draw(0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      // edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < EDGE_DIST * EDGE_DIST) {
            const alpha = (1 - Math.sqrt(d2) / EDGE_DIST) * edgeAlpha;
            ctx.strokeStyle = `rgba(${edgeRGB}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // pointer links
      if (pointer.active) {
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < POINTER_DIST * POINTER_DIST) {
            const alpha = (1 - Math.sqrt(d2) / POINTER_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${accentRGB}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // signal pulses along edges
      for (const p of pulses) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx.fillStyle = `rgba(${accentRGB}, ${(0.25 * fade).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${accentRGB}, ${(0.95 * fade).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduceMotion) return;

      // physics
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -8) n.x = width + 8;
        if (n.x > width + 8) n.x = -8;
        if (n.y < -8) n.y = height + 8;
        if (n.y > height + 8) n.y = -8;
      }

      pulses = pulses.filter((p) => (p.t += 0.016) < 1);
      if (now - lastPulse > 1300 && nodes.length > 1) {
        lastPulse = now;
        for (let tries = 0; tries < 12; tries++) {
          const a = Math.floor(Math.random() * nodes.length);
          const b = Math.floor(Math.random() * nodes.length);
          if (a === b) continue;
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          if (dx * dx + dy * dy < EDGE_DIST * EDGE_DIST * 1.4) {
            pulses.push({ a, b, t: 0 });
            break;
          }
        }
      }
    };

    const loop = (now: number) => {
      draw(now);
      if (running) raf = requestAnimationFrame(loop);
    };

    const setRunning = () => {
      const shouldRun = !reduceMotion && intersecting && !document.hidden;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      setRunning();
    });
    io.observe(canvas);
    const onVisibility = () => setRunning();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    resize();
    setRunning();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
