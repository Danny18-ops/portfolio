/**
 * Five original SVG diagrams, one per project. Each is drawn as a
 * plain-English flow (input, process, output) with readable labels so
 * a visitor understands the project at a glance. No stock assets.
 * Animations are CSS keyframes from globals.css and are disabled
 * under prefers-reduced-motion. Colors come from theme variables.
 */

const sans = "var(--font-geist-sans), sans-serif";
const mono = "var(--font-geist-mono), monospace";

function ResultRow({
  y,
  title,
  match,
  top,
}: {
  y: number;
  title: string;
  match: string;
  top?: boolean;
}) {
  return (
    <g>
      <rect
        x="96"
        y={y}
        width="248"
        height="38"
        rx="8"
        fill="var(--raised)"
        stroke={top ? "var(--accent)" : "var(--line)"}
        strokeWidth={top ? 1.4 : 1}
      />
      <text x="112" y={y + 24} fontFamily={sans} fontSize="12.5" fill="var(--fg)">
        {title}
      </text>
      <text
        x="330"
        y={y + 24}
        fontFamily={mono}
        fontSize="11"
        fill={top ? "var(--accent)" : "var(--muted)"}
        textAnchor="end"
      >
        {match}
      </text>
    </g>
  );
}

/* ── HackMatch: type a plain-English search, get ranked hackathons ── */
export function HackMatchArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* search bar */}
      <rect x="56" y="28" width="288" height="40" rx="20" fill="var(--raised)" stroke="var(--accent)" strokeWidth="1.2" />
      <circle cx="80" cy="48" r="7" fill="none" stroke="var(--muted)" strokeWidth="1.7" />
      <path d="M85 53.5 91 60" stroke="var(--muted)" strokeWidth="1.7" strokeLinecap="round" />
      <text x="102" y="53" fontFamily={sans} fontSize="12.5" fill="var(--fg)">
        beginner-friendly AI hackathons
      </text>
      <rect className="anim-blink" x="312" y="38" width="2.5" height="20" fill="var(--accent)" />

      {/* flow down */}
      <path className="anim-dash" d="M200 68v22" stroke="var(--accent)" strokeWidth="1.6" fill="none" />
      <text x="212" y="86" fontFamily={mono} fontSize="10" fill="var(--muted)">
        AI understands the meaning
      </text>

      {/* ranked results */}
      <ResultRow y={100} title="GenAI Beginners Jam · online" match="96% match" top />
      <ResultRow y={146} title="AI Weekend · San Diego" match="91% match" />
      <ResultRow y={192} title="First-Timers Build Night" match="87% match" />
    </svg>
  );
}

/* ── Multi-Agent Research: four agents pass work along, QA loops back ── */
export function ResearchCrewArt() {
  const agents = [
    { x: 24, label: "Research" },
    { x: 118, label: "Summarize" },
    { x: 212, label: "Write" },
    { x: 306, label: "Review" },
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* input */}
      <text x="24" y="46" fontFamily={sans} fontSize="12.5" fill="var(--fg)">
        Give it any topic…
      </text>
      <path className="anim-dash-slow" d="M59 56v30" stroke="var(--muted)" strokeWidth="1.3" fill="none" />

      {/* agent pipeline */}
      {agents.map((a, i) => (
        <g key={a.label}>
          <rect
            x={a.x}
            y="96"
            width="70"
            height="36"
            rx="9"
            fill="var(--raised)"
            stroke={a.label === "Review" ? "var(--accent)" : "var(--line)"}
            strokeWidth="1.3"
          />
          <text
            x={a.x + 35}
            y="118"
            fontFamily={sans}
            fontSize="11.5"
            fill="var(--fg)"
            textAnchor="middle"
          >
            {a.label}
          </text>
          {i < 3 && (
            <path
              className="anim-dash"
              d={`M${a.x + 72} 114h20`}
              stroke="var(--accent)"
              strokeWidth="1.5"
              fill="none"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          )}
        </g>
      ))}

      {/* revision loop: Review sends weak drafts back to Write */}
      <path
        className="anim-dash-slow"
        d="M341 134c0 34-64 42-90 22"
        stroke="var(--muted)"
        strokeWidth="1.3"
        fill="none"
      />
      <path d="m249 158-9-.5 5.5-7z" fill="var(--muted)" />
      <text x="278" y="182" fontFamily={sans} fontSize="10.5" fill="var(--muted)" textAnchor="middle">
        low score? rewrite it
      </text>

      {/* output */}
      <path className="anim-dash-slow" d="M59 214h56" stroke="var(--accent)" strokeWidth="1.4" fill="none" />
      <path d="m118 214-8-4v8z" fill="var(--accent)" />
      <rect x="24" y="196" width="28" height="36" rx="4" fill="var(--raised)" stroke="var(--line)" />
      <rect x="29" y="204" width="18" height="2.5" rx="1.25" fill="var(--accent)" />
      <rect x="29" y="210" width="14" height="2.5" rx="1.25" fill="var(--muted)" opacity="0.6" />
      <rect x="29" y="216" width="16" height="2.5" rx="1.25" fill="var(--muted)" opacity="0.6" />
      <text x="130" y="218" fontFamily={sans} fontSize="12" fill="var(--fg)">
        …get a finished, quality-checked report
      </text>
    </svg>
  );
}

/* ── AI Patient Voice: fake patient calls the AI, bugs get flagged ── */
export function PatientVoiceArt() {
  const bars = [10, 22, 15, 30, 18, 34, 14, 30, 20, 26, 12, 24];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* left: the synthetic patient */}
      <rect x="36" y="66" width="60" height="104" rx="11" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.4" />
      <rect x="56" y="76" width="20" height="4" rx="2" fill="var(--muted)" opacity="0.5" />
      <circle cx="66" cy="152" r="6" fill="none" stroke="var(--muted)" strokeWidth="1.3" />
      <text x="66" y="112" fontFamily={sans} fontSize="10.5" fill="var(--fg)" textAnchor="middle">
        AI plays a
      </text>
      <text x="66" y="126" fontFamily={sans} fontSize="10.5" fill="var(--fg)" textAnchor="middle">
        patient
      </text>
      <text x="66" y="186" fontFamily={mono} fontSize="9.5" fill="var(--muted)" textAnchor="middle">
        persona 7 of 18
      </text>

      {/* live call waveform */}
      <text x="200" y="84" fontFamily={sans} fontSize="10.5" fill="var(--muted)" textAnchor="middle">
        real phone call
      </text>
      {bars.map((h, i) => (
        <rect
          key={i}
          className="anim-eq"
          x={126 + i * 12.5}
          y={118 - h / 2}
          width="5.5"
          height={h}
          rx="2.75"
          fill="var(--accent)"
          opacity="0.85"
          style={{ animationDelay: `${(i % 6) * 0.14}s` }}
        />
      ))}

      {/* right: the AI being tested */}
      <circle cx="330" cy="118" r="28" fill="var(--raised)" stroke="var(--accent)" strokeWidth="1.3" />
      <text x="330" y="114" fontFamily={sans} fontSize="10.5" fill="var(--fg)" textAnchor="middle">
        clinic&apos;s AI
      </text>
      <text x="330" y="128" fontFamily={sans} fontSize="10.5" fill="var(--muted)" textAnchor="middle">
        being tested
      </text>

      {/* result: transcript reviewed, bug flagged */}
      <path className="anim-dash-slow" d="M200 138v34" stroke="var(--muted)" strokeWidth="1.3" fill="none" />
      <rect x="82" y="182" width="236" height="52" rx="9" fill="var(--raised)" stroke="var(--line)" />
      <text x="98" y="203" fontFamily={sans} fontSize="11" fill="var(--muted)">
        call recorded &amp; reviewed automatically
      </text>
      <rect className="anim-pulse-fast" x="98" y="211" width="76" height="16" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="136" y="222.5" fontFamily={mono} fontSize="9.5" fill="var(--accent)" textAnchor="middle">
        bug found ✓
      </text>
    </svg>
  );
}

/* ── Gen Contract: plain-English request becomes a structured contract ── */
export function GenContractArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* left: the plain-English ask */}
      <rect x="28" y="58" width="132" height="66" rx="12" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.3" />
      <path d="M56 124l8 14 4-14z" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.3" />
      <text x="42" y="82" fontFamily={sans} fontSize="11" fill="var(--fg)">
        “I need an NDA
      </text>
      <text x="42" y="98" fontFamily={sans} fontSize="11" fill="var(--fg)">
        with a 2-year term”
      </text>
      <text x="42" y="160" fontFamily={sans} fontSize="10.5" fill="var(--muted)">
        you type this…
      </text>

      {/* arrow */}
      <path className="anim-dash" d="M166 108h44" stroke="var(--accent)" strokeWidth="1.6" fill="none" />
      <path d="m214 108-9-4.5v9z" fill="var(--accent)" />

      {/* right: the generated contract */}
      <rect x="228" y="26" width="146" height="210" rx="9" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.4" />
      <text x="244" y="52" fontFamily={sans} fontSize="12" fill="var(--fg)" letterSpacing="1.5" fontWeight="600">
        AGREEMENT
      </text>
      <path d="M244 60h114" stroke="var(--accent)" strokeWidth="1.5" />
      {[
        { y: 84, label: "1. Confidentiality" },
        { y: 122, label: "2. Term (2 years)", hot: true },
        { y: 160, label: "3. Liability" },
        { y: 198, label: "4. Termination" },
      ].map((c) => (
        <g key={c.label}>
          <rect
            x="238"
            y={c.y - 15}
            width="126"
            height="30"
            rx="6"
            fill={c.hot ? "var(--accent-soft)" : "none"}
            stroke={c.hot ? "var(--accent)" : "var(--line)"}
            strokeWidth="1"
            className={c.hot ? "anim-pulse" : undefined}
          />
          <text
            x="248"
            y={c.y + 4}
            fontFamily={sans}
            fontSize="10.5"
            fill={c.hot ? "var(--accent)" : "var(--muted)"}
          >
            {c.label}
          </text>
        </g>
      ))}
      <text x="228" y="254" fontFamily={sans} fontSize="10.5" fill="var(--muted)">
        …and get this, clause by clause
      </text>
    </svg>
  );
}

/* ── LLM Fine-Tuning: accuracy climbs 20% above the untrained model ── */
export function FineTuneArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      {/* axes */}
      <path d="M56 32v182h300" stroke="var(--line)" strokeWidth="1.5" fill="none" />
      <text x="62" y="44" fontFamily={sans} fontSize="10.5" fill="var(--muted)">
        accuracy on math problems
      </text>
      <text x="356" y="230" fontFamily={sans} fontSize="10.5" fill="var(--muted)" textAnchor="end">
        training time →
      </text>
      {/* gridlines */}
      {[74, 116, 158].map((y) => (
        <path key={y} d={`M56 ${y}h300`} stroke="var(--line)" strokeWidth="0.7" opacity="0.5" />
      ))}

      {/* baseline: model before training */}
      <path
        d="M56 176c50-3 100-2 150-5 50-2 100-3 150-5"
        stroke="var(--muted)"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        fill="none"
        opacity="0.8"
      />
      <text x="230" y="196" fontFamily={sans} fontSize="10.5" fill="var(--muted)">
        model before training
      </text>

      {/* curve: model after RL training */}
      <path
        className="anim-draw"
        d="M56 174c42-6 66-12 94-28s54-36 86-50c28-12 62-18 116-22"
        stroke="var(--accent)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="352" cy="74" r="4" fill="var(--accent)" />
      <circle className="anim-pulse-fast" cx="352" cy="74" r="8" fill="var(--accent)" opacity="0.25" />
      <text x="196" y="106" fontFamily={sans} fontSize="10.5" fill="var(--fg)">
        same model after RL training
      </text>

      {/* +20% badge */}
      <rect className="anim-pulse" x="296" y="36" width="72" height="22" rx="11" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="332" y="51" fontFamily={sans} fontSize="11" fill="var(--accent)" textAnchor="middle" fontWeight="600">
        +20% better
      </text>
    </svg>
  );
}
