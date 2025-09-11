import Path1Circular from "./Path1Circular";

export default function Pathways(){
  return (
    <section className="section" id="pathways">
      <h2 className="section-title">Theoretical Pathways (Context)</h2>

      <Path1Circular />

      <div className="pathway-container">
        <h3 style={{color:"#ff8c42"}}>Path 2: Harm-Based Morality</h3>
        <div className="pathway-flow">
          <div className="pathway-node" title="Large-scale identity & harm taboos"><strong>Mark Moffett</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Agent–patient template of harm"><strong>Dyadic Morality</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Partly universal foundations"><strong>Moral Foundations</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Shared norms treated as objective; scaffolds symbols"><strong>MOH</strong></div>
        </div>
      </div>

      <div className="pathway-container">
        <h3 style={{color:"#ff8c42"}}>Path 4: Cultural Evolution</h3>
        <div className="pathway-flow">
          <div className="pathway-node" title="Near vs far morality; tribal conflict"><strong>Josh Greene</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Cultural learning dynamics"><strong>Boyd & Henrich</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Cognitive gadgets built socially"><strong>Cecilia Heyes</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Hierarchical model selection"><strong>TMS</strong></div>
        </div>
      </div>

      <div className="pathway-container">
        <h3 style={{color:"#ff8c42"}}>Path 5: Bayesian Belief → Religious Faith</h3>
        <div className="pathway-flow">
          <div className="pathway-node" title="Weighing priors vs evidence for miracles"><strong>Bayes vs Hume</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Predictive processing/active inference"><strong>Active Inference</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Self-existence priors"><strong>Biological Agency</strong></div>
          <span>→</span>
          <div className="pathway-node" title="Cultural priors crystallize as ‘objective’ beliefs"><strong>Cultural Faith</strong></div>
        </div>
      </div>
    </section>
  );
}
