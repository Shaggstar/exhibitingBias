import React from "react";

export default function PathAffect() {
  return (
    <div className="pathway-container">
      <h3 style={{ color: "#ff8c42" }}>
        Path (Affect-First): From Behaviorism to Innate Morality
      </h3>
      <div className="pathway-flow">
        <div className="pathway-node" title="Reductive stimulus-response, analogous to neoclassical selfish agent">
          <strong>B. F. Skinner</strong><br/><small>S–R reduction</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title="Emotion as intervening variable that disinter-mediates strict S–R">
          <strong>Adolphs &amp; Anderson</strong><br/><small>Emotion intervenes</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title="Feelings/affect harmonize disparate systems into a felt self">
          <strong>Solms / Damasio</strong><br/><small>Affect → Self</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title="Innate & early moral tendencies (Bloom, Greene, Hamlin, Wynn)">
          <strong>Innate Morality</strong><br/><small>Early moral sense</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title="Morality stabilizes a broader self via shared rules/values/principles">
          <strong>MOH</strong><br/><small>Stabilized shared self</small>
        </div>
      </div>
    </div>
  );
}
