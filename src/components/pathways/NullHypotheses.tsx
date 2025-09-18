// src/components/pathways/NullHypotheses.tsx
import React from "react";

export default function NullHypotheses() {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="section-title mb-2">3) Multiple Null Hypotheses</h3>
      <div className="prose prose-invert max-w-none">
        <p>
          Modern sciences often start from reductive baselines: the single equilibrium of physics,
          the self-interested agent of economics, the selfish gene of biology. Each became a null
          hypothesis that framed how evidence was gathered and how dissenting cases were dismissed.
          Active inference reframes those reductions by treating agents and institutions as models
          that trade accuracy for complexity in order to remain viable.
        </p>
        <p>
          Thermodynamic metaphors predict that systems flow toward uniformity, yet the phenomena that
          matter are non-equilibrium steady states that resist dispersal. Karl Friston uses the image
          of ink suspended in water to show why organisms must model their environment to survive.
          Stability is not default; it is actively maintained.
        </p>
        <p>
          Economics raises the same tension. Ronald Coase asked why firms exist if rational agents
          can transact freely, and Herbert Simon observed that people slip between "I" and "we"
          depending on institutional context. Douglass North described institutions as self-imposed
          constraints that reduce uncertainty, a view echoed in the cooperative ethics that underwrote
          finance for figures like Rockefeller and Morgan.
        </p>
        <p>
          Structural theories follow the pattern. Claude Lévi-Strauss mapped myths through binary
          opposition, yet Jacques Derrida showed that meaning constantly defers to an absent center.
          Behaviorism cast emotions as outputs, while Ralph Adolphs and David Anderson argued that
          emotions mediate response, opening interior space. Denis Noble’s biological relativity
          likewise spreads causation across scales. Together these revisions show that humans are not
          captured by single-variable accounts; they integrate constraints across levels to stay
          coherent.
        </p>
      </div>
    </div>
  );
}
