import React from "react";
import { Wand2 } from "lucide-react";

export default function TMSBlueprint({ Section, Card }) {
  return (
    <Section
      id="tms-blueprint"
      title="TMS Simulation Blueprint"
      subtitle="What the sim aims to demonstrate and how we’ll visualize it—ready for figures later."
      icon={Wand2}
    >
      <Card glow>
        <h4 className="font-medium text-[color:var(--text)] mb-2">Goals of the Simulation</h4>
        <ul className="text-sm text-[color:var(--subtext)] list-disc pl-5 space-y-1">
          <li><b>Group transitions:</b> Intimates → shibboleth units → cultural/normative → ideological/epistemic communities.</li>
          <li><b>Identity scaling:</b> Moral precision as a control parameter for cohesion/fragmentation.</li>
          <li><b>Narrative templates:</b> Vignettes as signals that modulate priors and role-adoption.</li>
          <li><b>Agency typing:</b> Show how TMS enables moral agency “typing” (egocentric ↔ communal).</li>
        </ul>
      </Card>

      <Card>
        <h4 className="font-medium text-[color:var(--text)] mb-2">A/B/C/D/E Matrices (Placeholder)</h4>
        <p className="text-sm text-[color:var(--subtext)] mb-3">
          Drop your real diagram later. The mock below just shows relationships (edges) between matrices.
        </p>
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <svg viewBox="0 0 820 260" className="w-full h-60">
            {["A","B","C","D","E"].map((m,i)=> (
              <g key={m}>
                <rect x={40 + i*150} y={90} width="100" height="60" rx="10" fill="#FF6A3D22" stroke="#FF6A3D"/>
                <text x={90 + i*150} y={122} textAnchor="middle" fill="#f7f4f2">{m}</text>
              </g>
            ))}
            {[0,1,2,3].map(i=> (
              <line key={i} x1={140 + i*150} y1={120} x2={190 + i*150} y2={120} stroke="#FF6A3D" markerEnd="url(#arrow)"/>
            ))}
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 z" fill="#FF6A3D" />
              </marker>
            </defs>
          </svg>
        </div>
      </Card>

      <Card>
        <h4 className="font-medium text-[color:var(--text)] mb-2">Story → Formalism → Simulation</h4>
        <ol className="list-decimal pl-5 text-sm text-[color:var(--subtext)] space-y-2">
          <li><b>Vignette:</b> Short scene illustrating a norm conflict across scales.</li>
          <li><b>Formal note:</b> Specify priors/likelihoods; precision changes; map to A–E matrices.</li>
          <li><b>Sim sketch:</b> Agent-based run showing predicted transitions and governance interventions.</li>
        </ol>
      </Card>
    </Section>
  );
}
