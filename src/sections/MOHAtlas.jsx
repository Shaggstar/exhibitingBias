import React from "react";
import { Compass } from "lucide-react";

export default function MOHAtlas({ Section, Card }) {
  return (
    <Section
      id="moh-visuals"
      title="MOH Visual Atlas"
      subtitle="Sketchpads to visualize the Myth of Objectivity: from intimates → accent bias → morality → symbols → culture."
      icon={Compass}
    >
      <Card glow>
        <h4 className="font-medium text-[color:var(--text)] mb-2">
          Flow: Intimates → Accent Bias → Morality → Symbols → Culture
        </h4>
        <p className="text-sm text-[color:var(--subtext)] mb-3">
          Replace the placeholder with a real SVG/PNG export later (Figma/Excalidraw).
        </p>
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <svg viewBox="0 0 800 200" className="w-full h-40">
            <rect x="10" y="40" width="140" height="60" rx="10" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="80" y="75" textAnchor="middle" fill="#f7f4f2" fontSize="12">Intimates</text>

            <path d="M150,70 L210,70" stroke="#FF6A3D" markerEnd="url(#arrow)"/>

            <rect x="210" y="40" width="140" height="60" rx="10" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="280" y="75" textAnchor="middle" fill="#f7f4f2" fontSize="12">Accent Bias</text>

            <path d="M350,70 L410,70" stroke="#FF6A3D" markerEnd="url(#arrow)"/>

            <rect x="410" y="40" width="140" height="60" rx="10" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="480" y="75" textAnchor="middle" fill="#f7f4f2" fontSize="12">Morality</text>

            <path d="M550,70 L610,70" stroke="#FF6A3D" markerEnd="url(#arrow)"/>

            <rect x="610" y="40" width="140" height="60" rx="10" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="680" y="75" textAnchor="middle" fill="#f7f4f2" fontSize="12">Symbols → Culture</text>

            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 z" fill="#FF6A3D" />
              </marker>
            </defs>
          </svg>
        </div>
      </Card>

      <Card>
        <h4 className="font-medium text-[color:var(--text)] mb-2">
          Cross-Disciplinary Map (Economics × Linguistics × Physics → Active Inference)
        </h4>
        <p className="text-sm text-[color:var(--subtext)]">
          Pseudo knowledge-graph linking neoclassical equilibrium, Derrida’s transcendental signifier,
          and static-equilibrium physics — contrasted with Active Inference.
        </p>
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <svg viewBox="0 0 820 260" className="w-full h-60">
            <circle cx="150" cy="130" r="48" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="150" y="130" textAnchor="middle" dy="4" fill="#f7f4f2" fontSize="11">Neoclassical{"\n"}Equilibrium</text>

            <circle cx="410" cy="80" r="48" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="410" y="80" textAnchor="middle" dy="4" fill="#f7f4f2" fontSize="11">Transcendental{"\n"}Signifier</text>

            <circle cx="410" cy="200" r="48" fill="#FF6A3D22" stroke="#FF6A3D"/>
            <text x="410" y="200" textAnchor="middle" dy="4" fill="#f7f4f2" fontSize="11">Static{"\n"}Physics</text>

            <circle cx="670" cy="130" r="58" fill="#FF6A3D33" stroke="#FF6A3D"/>
            <text x="670" y="125" textAnchor="middle" fill="#f7f4f2" fontSize="12">Active{"\n"}Inference</text>
            <text x="670" y="142" textAnchor="middle" fill="#bdb5af" fontSize="10">(non-equilibrium, hierarchical)</text>

            <line x1="198" y1="118" x2="362" y2="90" stroke="#FF6A3D"/>
            <line x1="198" y1="142" x2="362" y2="190" stroke="#FF6A3D"/>
            <line x1="458" y1="80" x2="612" y2="120" stroke="#FF6A3D"/>
            <line x1="458" y1="200" x2="612" y2="140" stroke="#FF6A3D"/>
          </svg>
        </div>
      </Card>
    </Section>
  );
}
