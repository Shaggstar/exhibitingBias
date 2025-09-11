import { useState } from "react";

export default function IdentityNavigator(){
  const [alpha, setAlpha] = useState(0.5);
  const [depth, setDepth] = useState(5);
  const coherence = (alpha*(1/depth)).toFixed(3);

  return (
    <section className="section" id="identity">
      <h2 className="section-title">Identity Navigator</h2>
      <div className="pathway-container" style={{display:"grid", gap:"1rem"}}>
        <label style={{color:"#ff8c42"}}>Cultural Precision (α)</label>
        <input type="range" min="0" max="1" step="0.01" value={alpha} onChange={e=>setAlpha(parseFloat(e.target.value))}/>
        <div style={{color:"#ff6b35", fontWeight:700}}>{alpha.toFixed(2)}</div>

        <label style={{color:"#ff8c42"}}>Contextual Depth</label>
        <input type="range" min="1" max="20" step="1" value={depth} onChange={e=>setDepth(parseInt(e.target.value,10))}/>
        <div style={{color:"#ff6b35", fontWeight:700}}>{depth}</div>

        <div><strong style={{color:"#ff8c42"}}>Identity Coherence:</strong> <span style={{color:"#ff6b35"}}>{coherence}</span></div>
      </div>
    </section>
  );
}
