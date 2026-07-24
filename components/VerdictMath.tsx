import { scoreFactors } from "@/lib/case-study";

/**
 * A diagram of the decision, not decoration: 8 independently-scored factors
 * on the left, the arithmetic in the middle, the verdict on the right.
 *
 * The numbers below are a worked example using the same real formula the app
 * uses (rounded mean of 8; >=70 GO, >=45 REFINE, else PIVOT) — it is labeled
 * as an example so it is never mistaken for output from a specific run.
 */

const EXAMPLE = [82, 75, 71, 64, 88, 79, 68, 66];

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function VerdictMath() {
  const total = EXAMPLE.reduce((sum, n) => sum + n, 0);
  const overall = Math.round(total / EXAMPLE.length);
  const verdict = overall >= 70 ? "GO" : overall >= 45 ? "REFINE" : "PIVOT";
  const offset = CIRCUMFERENCE * (1 - overall / 100);

  return (
    <div className="overflow-hidden rounded-xl border border-night-line bg-night">
      <div className="border-b border-night-line px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-faint">
          Worked example · the real formula
        </p>
      </div>

      <div className="grid gap-8 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        {/* The 8 inputs */}
        <ul className="space-y-2.5">
          {scoreFactors.map((factor, i) => (
            <li key={factor} className="flex items-center gap-3">
              <span className="w-[9.5rem] shrink-0 text-[12px] leading-tight text-night-soft">
                {factor}
              </span>
              <span
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-night-line"
                aria-hidden
              >
                <span
                  className="block h-full rounded-full bg-accent-soft"
                  style={{ width: `${EXAMPLE[i]}%` }}
                />
              </span>
              <span className="w-7 shrink-0 text-right font-mono text-[12px] text-night-ink">
                {EXAMPLE[i]}
              </span>
            </li>
          ))}
        </ul>

        {/* The arithmetic and the result */}
        <div className="flex flex-col items-center gap-4 md:w-56">
          <p className="text-center font-mono text-[11px] leading-relaxed text-night-faint">
            ({EXAMPLE.join(" + ")})
            <br />÷ 8 = <span className="text-night-ink">{overall}</span>
          </p>

          <div className="relative h-[132px] w-[132px]">
            <svg viewBox="0 0 132 132" className="h-full w-full -rotate-90">
              <circle
                cx="66"
                cy="66"
                r={RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                className="text-night-line"
              />
              <circle
                cx="66"
                cy="66"
                r={RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
                className="text-go"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                style={
                  {
                    "--ring-circumference": CIRCUMFERENCE,
                    "--ring-offset": offset,
                    animation: "sweep 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
                  } as React.CSSProperties
                }
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl leading-none text-go">
                {overall}
              </span>
              <span className="mt-1 font-mono text-[10px] text-night-faint">/ 100</span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-go/40 bg-go/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.12em] text-go">
            ✓ {verdict}
          </span>

          <p className="text-center text-[11px] leading-relaxed text-night-faint">
            ≥70 GO · ≥45 REFINE · else PIVOT
          </p>
        </div>
      </div>

      <p className="border-t border-night-line px-5 py-3.5 text-[12px] leading-relaxed text-night-faint sm:px-7">
        The model fills the eight bars on the left and nothing else. The number
        in the ring is arithmetic — it cannot disagree with its own inputs.
      </p>
    </div>
  );
}
