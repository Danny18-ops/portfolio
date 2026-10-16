/**
 * Original "app screenshot" mockups, one live per project — browser
 * chrome around an abstract, animated rendition of each product's UI.
 * No real screenshots, no stock assets, no third-party art: every
 * pixel here is CSS/SVG authored for this page, so there's nothing to
 * license and nothing that can go stale when a real UI changes.
 * Animations are CSS keyframes from globals.css and are disabled
 * under prefers-reduced-motion.
 */

import type { ReactNode } from "react";

function Chrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-br from-[var(--raised)] to-[var(--surface-alt)]">
      <div className="flex items-center gap-2 border-b border-line/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-sand/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-sage/70" />
        <div className="ml-2 flex-1 truncate rounded-full bg-bg/70 px-3 py-1 font-mono text-[10px] text-muted">
          {url}
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden p-5">
        {children}
        {/* glossy sheen sweep — makes the "live" motion obvious at a glance */}
        <div className="anim-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-overlay" />
      </div>
    </div>
  );
}

function Dot({ tone, pulse = false }: { tone: string; pulse?: boolean }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {pulse && (
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
          style={{ background: tone }}
        />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: tone }} />
    </span>
  );
}

/* ── HackMatch: a live, ranked search experience ── */
export function HackMatchArt() {
  const results = [
    { w: "88%", label: "GenAI Beginners Jam", hot: true },
    { w: "74%", label: "AI Weekend · San Diego" },
    { w: "61%", label: "First-Timers Build Night" },
  ];
  return (
    <Chrome url="hackmatch.app/search">
      <div className="flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-4 py-2.5 shadow-[0_8px_24px_-16px_var(--glow)]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m20 20-4.3-4.3" />
        </svg>
        <span className="truncate text-[12px] text-fg">beginner-friendly AI hackathons</span>
        <span className="anim-blink ml-auto h-3.5 w-[2px] shrink-0 bg-accent" />
      </div>

      <div className="mt-4 space-y-2.5">
        {results.map((r, i) => (
          <div
            key={r.label}
            className="anim-float flex items-center gap-3 rounded-xl border px-3.5 py-2.5"
            style={{
              borderColor: r.hot ? "var(--accent)" : "var(--line)",
              background: r.hot ? "var(--accent-soft)" : "var(--surface)",
              animationDelay: `${i * 0.4}s`,
              animationDuration: "5s",
            }}
          >
            <span className="truncate text-[11.5px] font-medium text-fg">{r.label}</span>
            <span
              className="ml-auto shrink-0 font-mono text-[10px] font-semibold"
              style={{ color: r.hot ? "var(--accent)" : "var(--muted)" }}
            >
              {r.w}
            </span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

/* ── HookRelay: a live delivery dashboard ── */
export function HookRelayArt() {
  const providers = [
    { label: "GitHub", tone: "var(--accent)" },
    { label: "Stripe", tone: "var(--gold)" },
    { label: "Shopify", tone: "var(--sage)" },
  ];
  const rows = [
    { tone: "var(--sage)", w: "86%" },
    { tone: "var(--accent)", w: "64%" },
    { tone: "var(--gold)", w: "92%" },
    { tone: "var(--sand)", w: "48%" },
  ];
  return (
    <Chrome url="hookrelay.io/dashboard">
      <div className="flex items-center gap-2">
        {providers.map((p, i) => (
          <span
            key={p.label}
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] font-medium text-muted"
          >
            <Dot tone={p.tone} pulse={i === 0} />
            {p.label}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-sage/40 bg-sage-soft px-2.5 py-1 text-[10px] font-semibold text-sage">
          <Dot tone="var(--sage)" pulse />
          live
        </span>
      </div>

      <div className="mt-4 space-y-2 rounded-xl border border-line bg-surface/80 p-3">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="h-5 w-[3px] shrink-0 rounded-full" style={{ background: r.tone }} />
            <span
              className="anim-skeleton h-2 rounded-full"
              style={{ width: r.w, background: "var(--raised)", animationDelay: `${i * 0.2}s` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-raised">
        <div className="anim-shimmer h-full w-1/3 rounded-full bg-gradient-to-r from-accent via-gold to-sage" />
      </div>
    </Chrome>
  );
}

/* ── Multi-Agent Research: a pipeline that drafts, then grades itself ── */
export function ResearchCrewArt() {
  const agents = [
    { tone: "var(--accent)" },
    { tone: "var(--sky)" },
    { tone: "var(--gold)" },
    { tone: "var(--sage)" },
  ];
  return (
    <Chrome url="research.ai/run">
      <div className="flex items-center justify-between">
        {agents.map((a, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span
              className="anim-pulse flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold"
              style={{
                borderColor: a.tone,
                background: "var(--surface)",
                color: a.tone,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-2 h-1 w-full overflow-hidden rounded-full bg-raised">
        <div className="anim-shimmer h-full w-1/4 rounded-full bg-gradient-to-r from-accent via-sky to-sage" />
      </div>

      <div className="anim-float absolute inset-x-5 bottom-5 rounded-xl border border-line bg-surface/90 p-4 shadow-[0_18px_40px_-24px_var(--glow)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sage" />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-sage">
            quality-checked
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <span className="anim-skeleton block h-2 w-[92%] rounded-full bg-raised" />
          <span className="anim-skeleton block h-2 w-[78%] rounded-full bg-raised" style={{ animationDelay: "0.2s" }} />
          <span className="anim-skeleton block h-2 w-[85%] rounded-full bg-raised" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </Chrome>
  );
}

/* ── AI Patient Voice: a live call between two voices ── */
export function PatientVoiceArt() {
  const bars = [10, 22, 15, 30, 18, 34, 14, 30, 20, 26, 12, 24, 16, 28];
  return (
    <Chrome url="patientvoice.app/call">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-medium text-fg">
          <Dot tone="var(--accent)" /> persona 07
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft px-3 py-1.5 text-[10px] font-semibold text-gold">
          <Dot tone="var(--gold)" pulse /> recording
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-medium text-fg">
          <Dot tone="var(--sky)" /> clinic AI
        </span>
      </div>

      <div className="mt-6 flex h-20 items-center justify-center gap-[3px]">
        {bars.map((h, i) => (
          <span
            key={i}
            className="anim-eq w-[5px] rounded-full bg-gradient-to-t from-accent to-sky"
            style={{ height: `${h * 2}px`, animationDelay: `${(i % 6) * 0.12}s` }}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-surface/80 px-3.5 py-2.5">
        <span className="h-2 w-2 shrink-0 rounded-full bg-sage" />
        <span className="text-[11px] text-muted">call reviewed automatically</span>
        <span className="ml-auto rounded-full bg-sage-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-sage">
          bug found
        </span>
      </div>
    </Chrome>
  );
}

/* ── Gen Contract: an agreement drafting itself, clause by clause ── */
export function GenContractArt() {
  return (
    <Chrome url="gencontract.app/draft">
      <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-2 text-[11px] font-medium text-accent">
        <span className="anim-pulse-fast h-2 w-2 rounded-full bg-accent" />
        drafting “2-year NDA, mutual liability cap”…
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <span className="font-display text-[12px] font-semibold tracking-wide text-fg">
            AGREEMENT
          </span>
          <span className="rounded-full bg-sage-soft px-2 py-0.5 text-[9.5px] font-semibold text-sage">
            4 / 4 clauses
          </span>
        </div>
        <div className="space-y-3 p-4">
          {[1, 0.86, 0.94, 0.72].map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                style={{ background: "var(--gold-soft)", color: "var(--gold)" }}
              >
                ✓
              </span>
              <span
                className="anim-skeleton h-2 rounded-full bg-raised"
                style={{ width: `${w * 100}%`, animationDelay: `${i * 0.18}s` }}
              />
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* ── LLM Fine-Tuning: a training run climbing above baseline ── */
export function FineTuneArt() {
  return (
    <Chrome url="training/run-214">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted">reward / accuracy</span>
        <span className="anim-pulse rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-[10px] font-semibold text-accent">
          +20% vs. base
        </span>
      </div>

      <svg viewBox="0 0 300 130" className="mt-3 h-[calc(100%-2.5rem)] w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ft-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M4 110c26-3 46-8 66-20s36-30 60-42c22-11 46-16 86-19v94H4Z"
          fill="url(#ft-area)"
        />
        <path
          d="M4 112c34-10 50-24 76-44s46-38 70-48c20-8 42-12 66-13"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          fill="none"
          opacity="0.7"
        />
        <path
          className="anim-draw"
          d="M4 110c26-3 46-8 66-20s36-30 60-42c22-11 46-16 86-19"
          stroke="var(--accent)"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="216" cy="29" r="4.5" fill="var(--accent)" />
        <circle className="anim-pulse-fast" cx="216" cy="29" r="9" fill="var(--accent)" opacity="0.25" />
      </svg>
    </Chrome>
  );
}
