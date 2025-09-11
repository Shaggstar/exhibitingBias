export default function Path1Circular() {
    return (
      <div className="pathway-container">
        <h3 style={{color:"#ff8c42"}}>Path 1: Economic Self-Expansion (Circular)</h3>
        <svg viewBox="0 0 800 320" style={{width:"100%",height:"auto",display:"block"}}>
          <defs>
            <marker id="cfArrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
              <polygon points="0 0, 10 4, 0 8" fill="#ff6b35" />
            </marker>
          </defs>
          <g transform="translate(140,160)"><circle r="74" fill="rgba(26,26,26,.9)" stroke="rgba(255,107,53,.35)" strokeWidth="2"/><text textAnchor="middle" dy="-4" fill="#eaeaea" fontWeight="700">Neoclassical</text><text textAnchor="middle" dy="16" fill="#cfcfcf" fontSize="12">Isolated agents</text></g>
          <g transform="translate(400,40)"><circle r="74"  fill="rgba(26,26,26,.9)" stroke="rgba(255,107,53,.35)" strokeWidth="2"/><text textAnchor="middle" dy="-4" fill="#eaeaea" fontWeight="700">Levin &amp; Dennett</text><text textAnchor="middle" dy="16" fill="#cfcfcf" fontSize="12">Gap junctions</text></g>
          <g transform="translate(660,160)"><circle r="74" fill="rgba(26,26,26,.9)" stroke="rgba(255,107,53,.35)" strokeWidth="2"/><text textAnchor="middle" dy="-4" fill="#eaeaea" fontWeight="700">Oliver Scott Curry</text><text textAnchor="middle" dy="16" fill="#cfcfcf" fontSize="12">Morality as cooperation</text></g>
          <g transform="translate(400,280)"><circle r="74" fill="rgba(26,26,26,.9)" stroke="rgba(255,107,53,.35)" strokeWidth="2"/><text textAnchor="middle" dy="-4" fill="#eaeaea" fontWeight="700">Herbert Simon</text><text textAnchor="middle" dy="16" fill="#cfcfcf" fontSize="12">“We” identity</text></g>
          <path d="M140,160 Q220,40 400,40"  stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
          <path d="M400,40 Q580,40 660,160"  stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
          <path d="M660,160 Q580,280 400,280" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
          <path d="M400,280 Q400,336 140,160" stroke="#ff6b35" strokeWidth="2" fill="none" markerEnd="url(#cfArrow)" />
        </svg>
      </div>
    );
  }
  