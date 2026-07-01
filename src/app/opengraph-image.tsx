import { ImageResponse } from "next/og";

export const alt = "Dnyaneshwari Raut — AI Engineer · ML Engineer · AI Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0a0e14";
const fg = "#e6edf6";
const muted = "#94a3b8";
const cyan = "#22d3ee";

function Node({ x, y, r, glow }: { x: number; y: number; r: number; glow?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: r * 2,
        height: r * 2,
        borderRadius: 9999,
        background: glow ? cyan : "rgba(230, 237, 246, 0.35)",
        boxShadow: glow ? `0 0 24px 6px rgba(34, 211, 238, 0.45)` : "none",
        display: "flex",
      }}
    />
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: ink,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(34, 211, 238, 0.10)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <Node x={860} y={110} r={5} glow />
        <Node x={980} y={200} r={4} />
        <Node x={1080} y={130} r={6} />
        <Node x={920} y={330} r={4} glow />
        <Node x={1050} y={420} r={5} />
        <Node x={840} y={480} r={4} />
        <Node x={1120} y={300} r={4} glow />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: cyan,
            fontSize: 26,
            letterSpacing: 8,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: `16px solid ${cyan}`,
              display: "flex",
            }}
          />
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: fg,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Dnyaneshwari Raut
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: muted,
          }}
        >
          AI Engineer · ML Engineer · AI Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 24,
            color: cyan,
            letterSpacing: 2,
          }}
        >
          dnyaneshwariraut.com
        </div>
      </div>
    ),
    { ...size }
  );
}
