/**
 * Five original, hand-drawn SVG illustrations — one per project.
 * No stock assets, no icon packs. Animations are pure CSS keyframes
 * (defined in globals.css) and disabled under prefers-reduced-motion.
 * All colors come from theme CSS variables so they adapt to light/dark.
 */

const mono = "var(--font-geist-mono), monospace";

/* ── HackMatch: a query flowing into a vector space, matches lighting up ── */
export function HackMatchArt() {
  const dots: Array<[number, number, number]> = [
    [150, 120, 3], [180, 150, 2.5], [210, 118, 3], [246, 148, 2.5],
    [172, 190, 3], [230, 190, 2.5], [136, 160, 2.5], [262, 116, 3],
    [204, 165, 2.5], [148, 214, 2.5], [250, 214, 3], [284, 180, 2.5],
  ];
  const matches: Array<[number, number]> = [[210, 118], [204, 165], [250, 214]];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* query bar */}
      <rect x="60" y="34" width="280" height="34" rx="8" fill="var(--raised)" stroke="var(--line)" />
      <circle cx="82" cy="51" r="6" fill="none" stroke="var(--muted)" strokeWidth="1.6" />
      <path d="M86.5 55.5 92 61" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round" />
      <text x="102" y="55" fontFamily={mono} fontSize="10.5" fill="var(--muted)">
        find my next hackathon…
      </text>
      <rect className="anim-blink" x="248" y="43" width="5" height="15" fill="var(--accent)" />
      {/* query flowing into embedding space */}
      <path className="anim-dash" d="M200 68v28" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      {/* vector space */}
      {dots.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="var(--muted)" opacity="0.45" />
      ))}
      {/* matched vectors */}
      {matches.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle className="anim-pulse" cx={x} cy={y} r="8" fill="var(--accent)" opacity="0.18" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={x} cy={y} r="3.5" fill="var(--accent)" />
        </g>
      ))}
      <path className="anim-dash-slow" d="M210 118 330 96" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path className="anim-dash-slow" d="M204 165 330 135" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path className="anim-dash-slow" d="M250 214 330 174" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* matched result cards */}
      {[86, 125, 164].map((y, i) => (
        <g key={y}>
          <rect x="330" y={y - 12} width="58" height="30" rx="5" fill="var(--raised)" stroke={i === 0 ? "var(--accent)" : "var(--line)"} />
          <rect x="337" y={y - 5} width="34" height="3.5" rx="1.75" fill="var(--fg)" opacity="0.7" />
          <rect x="337" y={y + 3} width="24" height="3.5" rx="1.75" fill="var(--muted)" opacity="0.5" />
        </g>
      ))}
      <text x="330" y="216" fontFamily={mono} fontSize="9" fill="var(--accent)">
        98% match
      </text>
      <text x="60" y="243" fontFamily={mono} fontSize="9" fill="var(--muted)" opacity="0.7">
        semantic search · chromadb
      </text>
    </svg>
  );
}

/* ── Multi-Agent Research: agent pipeline with self-correcting QA loop ── */
export function ResearchCrewArt() {
  const agents: Array<{ x: number; label: string }> = [
    { x: 70, label: "RES" },
    { x: 160, label: "SUM" },
    { x: 250, label: "WRT" },
    { x: 340, label: "QA" },
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* pipeline edges */}
      <path className="anim-dash" d="M92 110h44" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      <path className="anim-dash" d="M182 110h44" stroke="var(--accent)" strokeWidth="1.5" fill="none" style={{ animationDelay: "0.3s" }} />
      <path className="anim-dash" d="M272 110h44" stroke="var(--accent)" strokeWidth="1.5" fill="none" style={{ animationDelay: "0.6s" }} />
      {/* revision loop: QA back to Writer */}
      <path
        className="anim-dash-slow"
        d="M340 134c0 38-60 44-86 26"
        stroke="var(--muted)"
        strokeWidth="1.3"
        fill="none"
      />
      <path d="m254 163-9-1 6-7z" fill="var(--muted)" />
      <text x="300" y="188" fontFamily={mono} fontSize="9" fill="var(--muted)">
        revise &lt; 70
      </text>
      {/* agent nodes */}
      {agents.map((a, i) => (
        <g key={a.label}>
          <circle className="anim-pulse" cx={a.x} cy="110" r="30" fill="var(--accent)" opacity="0.08" style={{ animationDelay: `${i * 0.5}s` }} />
          <circle cx={a.x} cy="110" r="22" fill="var(--raised)" stroke={a.label === "QA" ? "var(--accent)" : "var(--line)"} strokeWidth="1.4" />
          <text x={a.x} y="114" fontFamily={mono} fontSize="10" fill="var(--fg)" textAnchor="middle">
            {a.label}
          </text>
        </g>
      ))}
      {/* topic in */}
      <text x="70" y="52" fontFamily={mono} fontSize="9.5" fill="var(--muted)" textAnchor="middle">
        topic in
      </text>
      <path className="anim-dash-slow" d="M70 60v24" stroke="var(--muted)" strokeWidth="1.2" fill="none" />
      {/* report out */}
      <rect x="322" y="210" width="36" height="42" rx="4" fill="var(--raised)" stroke="var(--line)" transform="translate(-282 -6)" />
      <g transform="translate(-282 -6)">
        <rect x="328" y="219" width="24" height="3" rx="1.5" fill="var(--accent)" />
        <rect x="328" y="227" width="20" height="2.5" rx="1.25" fill="var(--muted)" opacity="0.6" />
        <rect x="328" y="233" width="22" height="2.5" rx="1.25" fill="var(--muted)" opacity="0.6" />
        <rect x="328" y="239" width="16" height="2.5" rx="1.25" fill="var(--muted)" opacity="0.6" />
      </g>
      <text x="94" y="232" fontFamily={mono} fontSize="9" fill="var(--muted)">
        report.md
      </text>
      {/* score badge */}
      <rect className="anim-pulse-fast" x="310" y="52" width="62" height="20" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="341" y="65" fontFamily={mono} fontSize="9.5" fill="var(--accent)" textAnchor="middle">
        score 86
      </text>
    </svg>
  );
}

/* ── AI Patient Voice: phone call → live waveform → AI under test ── */
export function PatientVoiceArt() {
  const bars = [12, 26, 18, 34, 22, 40, 16, 36, 24, 30, 14, 28, 20, 34];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* phone (the synthetic patient) */}
      <rect x="46" y="70" width="56" height="100" rx="10" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.4" />
      <rect x="64" y="80" width="20" height="4" rx="2" fill="var(--muted)" opacity="0.5" />
      <circle cx="74" cy="152" r="6" fill="none" stroke="var(--muted)" strokeWidth="1.3" />
      <text x="74" y="123" fontFamily={mono} fontSize="9" fill="var(--accent)" textAnchor="middle">
        persona
      </text>
      <text x="74" y="135" fontFamily={mono} fontSize="9" fill="var(--muted)" textAnchor="middle">
        07/18
      </text>
      {/* live audio waveform bridge */}
      {bars.map((h, i) => (
        <rect
          key={i}
          className="anim-eq"
          x={126 + i * 11}
          y={120 - h / 2}
          width="5"
          height={h}
          rx="2.5"
          fill="var(--accent)"
          opacity="0.85"
          style={{ animationDelay: `${(i % 7) * 0.13}s` }}
        />
      ))}
      {/* AI agent under test */}
      <circle className="anim-ring" cx="316" cy="120" r="34" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="10 8" opacity="0.6" />
      <circle cx="316" cy="120" r="24" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.4" />
      <text x="316" y="118" fontFamily={mono} fontSize="9" fill="var(--fg)" textAnchor="middle">
        agent
      </text>
      <text x="316" y="130" fontFamily={mono} fontSize="9" fill="var(--muted)" textAnchor="middle">
        under test
      </text>
      {/* transcript being analyzed */}
      <g>
        <rect className="anim-type" x="92" y="196" width="150" height="5" rx="2.5" fill="var(--muted)" opacity="0.55" />
        <rect className="anim-type" x="92" y="210" width="190" height="5" rx="2.5" fill="var(--muted)" opacity="0.4" style={{ animationDelay: "0.7s" }} />
        <rect className="anim-type" x="92" y="224" width="120" height="5" rx="2.5" fill="var(--muted)" opacity="0.55" style={{ animationDelay: "1.4s" }} />
      </g>
      <rect className="anim-pulse-fast" x="292" y="200" width="66" height="20" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="325" y="213" fontFamily={mono} fontSize="9" fill="var(--accent)" textAnchor="middle">
        bug found
      </text>
      <text x="46" y="46" fontFamily={mono} fontSize="9" fill="var(--muted)" opacity="0.7">
        outbound call · realtime speech ↔ speech
      </text>
    </svg>
  );
}

/* ── Gen Contract: clauses drafting themselves onto the page ── */
export function GenContractArt() {
  const lines: Array<[number, number, number]> = [
    [150, 96, 0], [190, 110, 0.5], [170, 124, 1], [200, 138, 1.5],
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* the page */}
      <rect x="112" y="30" width="176" height="204" rx="8" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.4" />
      <text x="132" y="62" fontFamily={mono} fontSize="11" fill="var(--fg)" letterSpacing="2">
        AGREEMENT
      </text>
      <path d="M132 72h136" stroke="var(--accent)" strokeWidth="1.6" />
      {/* generated clause lines */}
      {lines.map(([w, y, d]) => (
        <rect
          key={y}
          className="anim-type"
          x="132"
          y={y}
          width={w}
          height="5"
          rx="2.5"
          fill="var(--muted)"
          opacity="0.55"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
      {/* highlighted clause block */}
      <rect className="anim-pulse" x="126" y="154" width="148" height="44" rx="6" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.1" />
      <text x="136" y="172" fontFamily={mono} fontSize="10" fill="var(--accent)">
        § 4.2 liability
      </text>
      <rect x="136" y="180" width="118" height="4" rx="2" fill="var(--muted)" opacity="0.5" />
      <rect x="136" y="189" width="92" height="4" rx="2" fill="var(--muted)" opacity="0.5" />
      {/* writing caret */}
      <rect className="anim-blink" x="132" y="208" width="5" height="13" fill="var(--accent)" />
      {/* generation sparkle */}
      <g className="anim-pulse-fast">
        <path d="M320 66l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="var(--accent)" />
        <path d="M344 104l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4z" fill="var(--accent)" opacity="0.6" />
      </g>
      <path className="anim-dash-slow" d="M318 96c-14 18-22 26-30 32" stroke="var(--accent)" strokeWidth="1.1" fill="none" opacity="0.6" />
      <text x="60" y="243" fontFamily={mono} fontSize="9" fill="var(--muted)" opacity="0.7">
        plain english in · contract out
      </text>
    </svg>
  );
}

/* ── LLM Fine-Tuning with RL: reward curve climbing past baseline ── */
export function FineTuneArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* axes */}
      <path d="M64 36v176h288" stroke="var(--line)" strokeWidth="1.5" fill="none" />
      <text x="52" y="40" fontFamily={mono} fontSize="9" fill="var(--muted)" textAnchor="end">
        acc
      </text>
      <text x="352" y="228" fontFamily={mono} fontSize="9" fill="var(--muted)">
        steps
      </text>
      {/* gridlines */}
      {[76, 116, 156].map((y) => (
        <path key={y} d={`M64 ${y}h288`} stroke="var(--line)" strokeWidth="0.7" opacity="0.5" />
      ))}
      {/* baseline (pre-GRPO) */}
      <path
        d="M64 172c48-4 96-2 144-6 48-2 96-4 144-6"
        stroke="var(--muted)"
        strokeWidth="1.4"
        strokeDasharray="5 6"
        fill="none"
        opacity="0.7"
      />
      <text x="300" y="150" fontFamily={mono} fontSize="9" fill="var(--muted)">
        base llama-1b
      </text>
      {/* GRPO reward curve, drawing itself */}
      <path
        className="anim-draw"
        d="M64 170c40-6 64-10 92-26s52-38 84-52c28-12 60-20 112-24"
        stroke="var(--accent)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* checkpoints */}
      <circle cx="156" cy="144" r="3.5" fill="var(--accent)" />
      <circle cx="240" cy="92" r="3.5" fill="var(--accent)" />
      <circle className="anim-pulse-fast" cx="352" cy="68" r="6" fill="var(--accent)" opacity="0.3" />
      <circle cx="352" cy="68" r="3.5" fill="var(--accent)" />
      {/* +20% badge */}
      <rect className="anim-pulse" x="296" y="40" width="52" height="20" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="322" y="53" fontFamily={mono} fontSize="10" fill="var(--accent)" textAnchor="middle">
        +20%
      </text>
      {/* policy update loop */}
      <circle className="anim-ring" cx="130" cy="70" r="20" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="8 7" opacity="0.7" />
      <text x="130" y="74" fontFamily={mono} fontSize="8.5" fill="var(--muted)" textAnchor="middle">
        GRPO
      </text>
      <text x="106" y="110" fontFamily={mono} fontSize="8.5" fill="var(--muted)">
        rule-based reward
      </text>
    </svg>
  );
}
