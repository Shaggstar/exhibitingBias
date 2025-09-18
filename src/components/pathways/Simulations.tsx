// src/components/pathways/Simulations.tsx
import React from "react";

export default function Simulations() {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="section-title mb-2">7) Simulations</h3>
      <div className="prose prose-invert max-w-none">
        <p>
          This section links to goals and design. Agents span intimate, shibboleth, and cultural levels with α
          as cultural precision. We test transitions from egalitarian morality to archetypal roles, symbolic
          scaffolding, and moral precision for AI alignment.
        </p>
        <details className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
          <summary className="cursor-pointer text-[color:var(--accent)] font-semibold">View Simulation Goals (inline PDF)</summary>
          <div className="mt-4 rounded-lg border border-white/10 overflow-hidden" style={{height:"70vh"}}>
            <iframe
              title="Simulation Goals"
              src="https://www.dropbox.com/scl/fi/g0fsew7mgtnadk1b9c9sq/Goals-and-POMDP-Elements.pdf?rlkey=sce13exp4cs1mu7f07h9wueof&raw=1"
              width="100%"
              height="100%"
              style={{border:0}}
            />
          </div>
          <p className="mt-3 text-sm text-[#bdb5af]">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--accent)] text-black hover:opacity-90"
              href="https://www.dropbox.com/scl/fi/g0fsew7mgtnadk1b9c9sq/Goals-and-POMDP-Elements.pdf?rlkey=sce13exp4cs1mu7f07h9wueof&dl=0"
              target="_blank" rel="noreferrer"
            >
              Open in new tab
            </a>
          </p>
        </details>
      </div>
    </div>
  );
}
