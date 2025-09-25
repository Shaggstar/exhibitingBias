import { useMemo, useState } from "react";
import POMDPMatrix from "../components/POMDPMatrix";

const PDF_SRC = "/docs/goals-pomdp-elements.pdf";

type GoalsPOMDPProps = {
  embedded?: boolean;
};

export default function GoalsPOMDP({ embedded = false }: GoalsPOMDPProps) {
  const [open, setOpen] = useState(false);

  const brief = useMemo(
    () => (
      <div className="space-y-3 text-sm text-[color:var(--text)]/90">
        <p>
          This will evaluate the Myth of Objectivity hypothesis inside Transcendental Model Selection via a cultural-precision
          (α) control that scales across contexts.
        </p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong>Humanity&apos;s Origin Story:</strong> historical claims of accent bias → egalitarian → archetypes chart a
            trajectory of human social evolution and how it scaffolds symbolic cognition.
          </li>
          <li>
            <strong>Moral Agency &amp; Signal of Model Depth:</strong> moral modeling signals the depth of symbolic / semiotic
            models, contrasting deep versus shallow representational stacks.
          </li>
          <li>
            <strong>Governance / AGI:</strong> treats α as an explicit governance parameter that scales across contexts,
            linking how people regulate symbolic cognition to how AGI can be constrained.
          </li>
        </ol>
        <p className="text-xs text-[color:var(--accentSoft)]">
          Expand for the full spec and the core elements of an active inference simulation—namely the matrices that form the
          foundation for a computational representation of a partially observable Markov decision process (POMDP).
        </p>
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
      {!embedded && (
        <>
          <h2 className="section-title">Multi Agent Simulation of MOH &amp; TMS</h2>
          <p className="mt-2 text-sm text-[color:var(--accentSoft)] text-center">
            The Goals &amp; Core (POMDP) Elements
          </p>
        </>
      )}

      <div className="rounded-2xl border border-white/12 bg-black/30 p-6 space-y-4">
        {embedded && (
          <header className="space-y-1">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">
              Multi Agent Simulation of MOH &amp; TMS
            </h3>
            <p className="text-xs text-[color:var(--accentSoft)]">
              The Goals &amp; Core (POMDP) Elements
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
            {open ? "Hide spec" : "Show Full Spec"}
          </button>

          <a
            href={PDF_SRC}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Open in new tab
          </a>
        </div>

        {open && (
          <div className="space-y-4 pt-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <object data={PDF_SRC} type="application/pdf" className="h-[70vh] w-full">
                <iframe src={PDF_SRC} title="Goals &amp; POMDP Elements PDF" className="h-[70vh] w-full" />
                <p className="p-4 text-sm text-[color:var(--subtext)]">
                  Unable to display the PDF inline.{' '}
                  <a href={PDF_SRC} target="_blank" rel="noreferrer" className="text-[color:var(--accent)] underline">
                    Open it in a new tab
                  </a>
                  .
                </p>
              </object>
            </div>

            <POMDPMatrix />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
