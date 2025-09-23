import { useMemo, useState } from "react";
import POMDPMatrix from "../components/POMDPMatrix";

const PDF_SRC = "/docs/Goals-and-POMDP-Elements.pdf";

type GoalsPOMDPProps = {
  embedded?: boolean;
};

export default function GoalsPOMDP({ embedded = false }: GoalsPOMDPProps) {
  const [open, setOpen] = useState(false);

  const brief = useMemo(
    () => (
      <div className="space-y-2 text-sm text-[color:var(--text)]/90">
        <p>
          <strong>What it tests:</strong> MOH under TMS via a cultural-precision (α) control that scales across contexts.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <em>New Human Narrative:</em> egalitarian → archetypes (roles stabilize via sanction / approval).
          </li>
          <li>
            <em>Morals → Symbols:</em> moral modeling scaffolds symbolic / semiotic modeling; depth vs. shallow models.
          </li>
          <li>
            <em>Governance / AGI:</em> α as explicit governance parameter; dynamic, non-reductive control.
          </li>
        </ul>
      </div>
    ),
    []
  );

  const Wrapper = embedded ? "div" : "section";
  const wrapperProps = {
    id: "goals-pomdp",
    className: embedded ? "space-y-4" : "section",
  } as const;

  return (
    <Wrapper {...wrapperProps}>
      {!embedded && <h2 className="section-title">Multi Agent Sim Goals &amp; Core (POMDP) Elements</h2>}

      <div className="rounded-2xl border border-white/12 bg-black/30 p-6 space-y-4">
        {embedded && (
          <header className="space-y-1">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">
              Multi Agent Sim Goals &amp; Core (POMDP) Elements
            </h3>
            <p className="text-xs text-[color:var(--accentSoft)]">
              Expand for the full PDF spec and the ABDE quick-view table.
            </p>
          </header>
        )}

        {brief}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-[var(--accentSoft)] px-3 py-1.5 text-sm text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-black"
            aria-expanded={open}
          >
            {open ? "Hide embedded spec" : "Show full spec (PDF embed)"}
          </button>

          <a
            href={PDF_SRC}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Open PDF in new tab
          </a>
        </div>

        {open && (
          <div className="space-y-4 pt-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <iframe
                src={PDF_SRC}
                title="Goals &amp; POMDP Elements PDF"
                className="h-[70vh] w-full"
              />
            </div>

            <POMDPMatrix />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
