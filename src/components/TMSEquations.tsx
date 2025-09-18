import React from "react";

export default function TMSEquations() {
  return (
    <section className="section">
      <h2 className="section-title">Transcendental Model Selection: Short Overview</h2>

      <details className="pathway-container">
        <summary className="cursor-pointer text-orange-300 font-semibold">
          Show concise equations and explanation
        </summary>
        <div className="mt-3 space-y-3 text-neutral-200">
          <p>
            Transcendental Model Selection extends active inference to describe how cultural priors
            constrain lower levels of inference. It formalizes the balance between accuracy and complexity
            across hierarchical scales s¹..sᴸ, with a precision parameter α.
          </p>
          <pre className="overflow-auto text-sm bg-black/40 p-3 rounded-lg border border-orange-300/25">
{`F = -E_Q[ln P(o|s,m,α)] + D_KL[Q(s,α) || P(s,α|o,m)]
    = Accuracy + Complexity

Hierarchical decomposition:
F = E_Q[-ln P(o|s^(1),α,m)]
  + Σ_n E_Q D_KL[ Q(s^(n)) || P(s^(n) | s^(n+1), α, m) ]
  + E_Q D_KL[ Q(α) || P(α | s^(L), m) ]`}</pre>
          <p>
            α tunes how strongly cultural priors sᴸ bind lower levels. Moral alignment is the felt
            counterpart of this constraint. Model selection compares cultural versus egocentric models
            via differences in free energy.
          </p>
        </div>
      </details>
    </section>
  );
}
