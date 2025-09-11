export default function Overview() {
    return (
      <section className="section" id="overview">
        <h2 className="section-title">Simulation Overview</h2>
        <div className="pathway-container" style={{marginTop:"1rem"}}>
          <p style={{lineHeight:1.7, color:"#cfcfcf"}}>
            We simulate hierarchical active inference across social scales (s^(1) → s^(L))
            with a cultural precision parameter (α) that constrains lower levels. The goals:
          </p>
          <ul style={{marginTop:".75rem", lineHeight:1.7}}>
            <li><strong>What are simulations for?</strong> Probe how moral constraints (α) shape cooperation & symbols.</li>
            <li><strong>What can they prove?</strong> Generate falsifiable predictions about role distribution, norm stability, and symbol emergence.</li>
            <li><strong>What is a multi-agent sim (active inference)?</strong> Agents minimize expected free energy using α-weighted preferences and beliefs.</li>
            <li><strong>Core elements:</strong> A/B/C/D matrices, hierarchical state spaces (s^(1), s^(2), s^(3), s^(L)), α modulation, role/archetype emergence.</li>
          </ul>
        </div>
      </section>
    );
  }
  