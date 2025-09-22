import React from "react";
import { REF_INDEX } from "../data/references";

export default function PathHumanStory() {
  return (
    <div className="pathway-container">
      <h3 style={{color:"#ff8c42"}}>Path (Humanity’s Story of an Uncertain Self)</h3>
      <div className="pathway-flow">
        <div className="pathway-node" title={`${REF_INDEX.jung.title} • ${REF_INDEX.jung.cite}`}>
          <strong>C. G. Jung</strong><br/><small>Cosmic / Collective Self</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title={`${REF_INDEX.booker.title} • ${REF_INDEX.booker.cite}`}>
          <strong>Christopher Booker</strong><br/><small>Stories align hero to culture</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title={`${REF_INDEX.bloom_shakespeare.title} • ${REF_INDEX.bloom_shakespeare.cite}`}>
          <strong>Harold Bloom</strong><br/><small>Shakespeare → multitudinous selves</small>
        </div>
        <span>→</span>
        <div className="pathway-node" title={`${REF_INDEX.book_proposal.title} • ${REF_INDEX.book_proposal.cite}`}>
          <strong>Your Book Proposal</strong><br/><small>Link: Humanity’s narrative</small>
        </div>
      </div>
    </div>
  );
}
