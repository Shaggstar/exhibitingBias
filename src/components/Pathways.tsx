import React from "react";
import Path1Circular from "./Path1Circular";
import PathAffect from "./PathAffect"; // ⬅️ add this import

export default function Pathways() {
  return (
    <section className="section" id="pathways">
      <h2 className="section-title">Theoretical Pathways (Context)</h2>

      {/* Path 1 (circular, HS → Neoclassical loop) */}
      <Path1Circular />

      {/* Path 2 (Harm-based → MOH) */}
      <div className="pathway-container">
        <h3 style={{ color: "#ff8c42" }}>Path 2: Harm-Based Morality</h3>
        <div className="pathway-flow">
          <div className="pathway-node"><strong>Mark Moffett</strong></div><span>→</span>
          <div className="pathway-node"><strong>Dyadic Morality</strong></div><span>→</span>
          <div className="pathway-node"><strong>Moral Foundations</strong></div><span>→</span>
          <div className="pathway-node"><strong>MOH</strong></div>
        </div>
      </div>

      {/* Path (Affect-first): NEW */}
      <PathAffect />

      {/* Path 4 */}
      <div className="pathway-container">
        <h3 style={{ color: "#ff8c42" }}>Path 4: Cultural Evolution</h3>
        <div className="pathway-flow">
          <div className="pathway-node"><strong>Josh Greene</strong></div><span>→</span>
          <div className="pathway-node"><strong>Boyd &amp; Henrich</strong></div><span>→</span>
          <div className="pathway-node"><strong>Cecilia Heyes</strong></div><span>→</span>
          <div className="pathway-node"><strong>TMS</strong></div>
        </div>
      </div>

      {/* Path 5 */}
      <div className="pathway-container">
        <h3 style={{ color: "#ff8c42" }}>Path 5: Bayesian Belief → Religious Faith</h3>
        <div className="pathway-flow">
          <div className="pathway-node"><strong>Bayes vs Hume</strong></div><span>→</span>
          <div className="pathway-node"><strong>Active Inference</strong></div><span>→</span>
          <div className="pathway-node"><strong>Biological Agency</strong></div><span>→</span>
          <div className="pathway-node"><strong>Cultural Faith</strong></div>
        </div>
      </div>
    </section>
  );
}
  