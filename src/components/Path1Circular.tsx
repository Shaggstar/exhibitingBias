import React from "react";

export default function Path1Circular() {
  return (
    <div className="pathway-container">
      <h3 style={{color:"#ff8c42"}}>Path 1: Economic Self-Expansion (Circular)</h3>
      <svg viewBox="0 0 840 360" style={{width:"100%",height:"auto",display:"block"}}>
        <defs>
          <marker id="cfArrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#ff6b35" />
          </marker>
        </defs>

        {/* Circular nodes */}
        {[
          { x:140, y:180, label:"Neoclassical", sub:"Isolated agents" },
          { x:420, y:60,  label:"Levin & Dennett", sub:"Gap junctions" },
          { x:700, y:180, label:"Oliver Scott Curry", sub:"Morality = cooperation" },
          { x:420, y:300, label:"Herbert Simon", sub:"“We” identity" }
        ].map((n,i)=>(
          <g key={i} transform={`translate(${n.x},${n.y})`}>
            <circle r="74" fill="rgba(26,26,26,.9)" stroke="rgba(255,107,53,.35)" strokeWidth="2"/>
            <text textAnchor="middle" dy="-4" fill="#eaeaea" fontWeight="700">{n.label}</text>
            <text textAnchor="middle" dy="16" fill="#cfcfcf" fontSize="12">{n.sub}</text>
          </g>
        ))}

        {/* Curves that skirt node edges (avoid overlaps) */}
        {/* NEO -> L&D (arc above nodes) */}
        <path d="M 140 180 C 210 70, 330 60, 400 60" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
        {/* L&D -> Curry (arc above) */}
        <path d="M 440 60 C 510 60, 630 70, 700 180" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
        {/* Curry -> Simon (arc right) */}
        <path d="M 700 180 C 660 250, 520 300, 440 300" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
        {/* Simon -> Neoclassical (non-linear loop back; arc left) */}
        <path d="M 400 300 C 300 300, 200 250, 140 180" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
      </svg>
    </div>
  );
}
