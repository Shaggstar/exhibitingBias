import React, { useMemo, useState } from "react";
import POMDPMatrix from "../components/POMDPMatrix";

const PDF_SRC = "/docs/Goals-and-POMDP-Elements.pdf"; // ensure the PDF lives in public/docs/

export default function GoalsPOMDP() {
  const [open, setOpen] = useState(false);

  const brief = useMemo(
    () => (
      <div className="space-y-2 text-sm text-[color:var(--text)]/90">
        <p>
          <strong>Simulation focus:</strong> Myth of Objectivity under TMS with a cultural-precision (α) control that
          scales across contexts.
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <em>New Human Narrative:</em> egalitarian → archetypes; roles stabilize through sanction / approval cycles.
          </li>
          <li>
            <em>Morals → Symbols:</em> moral modeling scaffolds symbolic/semiotic modeling; depth versus shallow models.
          </li>
          <li>
            <em>Governance / AGI:</em> α acts as an explicit governance parameter; dynamic, non-reductive control.
          </li>
        </ul>
      </div>
    ),
    []
  );

  return (
    <section id="goals-pomdp" className="section">
      <h2 className="section-title">Goals &amp; POMDP Elements</h2>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
        {brief}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-3 px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
          aria-expanded={open}
        >
          {open ? "Hide full spec" : "Show full spec (PDF embed)"}
        </button>

        {open && (
          <div className="mt-4 space-y-4">
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 bg-black/60">
              <object data={PDF_SRC} type="application/pdf" className="w-full h-full">
                <iframe src={PDF_SRC} title="Goals &amp; POMDP Elements" className="w-full h-full" />
              </object>
            </div>

            <POMDPMatrix />
          </div>
        )}
      </div>
    </section>
  );
}
