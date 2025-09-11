import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

// Levels map to rings & labels
const LEVELS = [
  { key: "family", label: "s^(1) Family/Intimates" },        // Depth 1
  { key: "friends", label: "s^(2) Friends / Small groups" },  // Depth 2
  { key: "professional", label: "s^(3) Professional / Tags" },// Depth 3
  { key: "cultural", label: "s^(L) Cultural / Moral" },       // Depth 4
];

type LevelKey = "family" | "friends" | "professional" | "cultural";

const RING_RADII = [80, 140, 200, 260]; // px from center
const CENTER = { x: 420, y: 320 };      // svg center

export default function IdentityNavigator() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [alpha, setAlpha] = useState(0.5);      // cultural precision
  const [depth, setDepth] = useState(3);        // number of rings (1..4)
  const [active, setActive] = useState<LevelKey>("professional");

  // build node sets from depth
  const nodes = useMemo(() => {
    const out: any[] = [{ id: "agent", label: "Agent", level: "center" }];
    const perLevelCounts = [6, 10, 14, 18]; // # nodes per ring
    for (let i = 0; i < depth; i++) {
      const lvl = LEVELS[i];
      const N = perLevelCounts[i];
      const r = RING_RADII[i];
      for (let k = 0; k < N; k++) {
        out.push({
          id: `${lvl.key}-${k}`,
          level: lvl.key,
          ring: i,
          theta: (2 * Math.PI * k) / N,
          r,
        });
      }
    }
    return out;
  }, [depth]);

  // edges: central to all in active level (strong), plus cross-level based on α
  const links = useMemo(() => {
    const L: any[] = [];
    const activeIdx = LEVELS.findIndex(Lv => Lv.key === active);
    for (const n of nodes) {
      if (n.id === "agent" || n.level === "center") continue;

      // Base: connect to agent. Strength depends on proximity to active and α
      const ringIdx = n.ring ?? 0;
      const ringDistance = Math.abs(ringIdx - activeIdx);
      // Low α + not active → near zero strength (disconnected feel)
      // High α spreads identity → stronger edges even across rings
      const baseWeight = Math.max(0, 1 - (ringDistance * (1 - alpha)) * 0.8);
      // Always keep active ring strongly connected
      const weight = ringIdx === activeIdx ? 1.0 : baseWeight;

      L.push({ source: "agent", target: n.id, weight });
    }
    // Optional: light cross-ring links when α is high (shared identity)
    if (alpha > 0.6) {
      const idsByRing: Record<number, string[]> = {};
      nodes.forEach(n => {
        if (n.level === "center") return;
        idsByRing[n.ring] ??= [];
        idsByRing[n.ring].push(n.id);
      });
      Object.keys(idsByRing).forEach(rk => {
        const ids = idsByRing[+rk];
        for (let i = 0; i < ids.length; i++) {
          const j = (i + 1) % ids.length;
          L.push({ source: ids[i], target: ids[j], weight: 0.35 * alpha });
        }
      });
    }
    return L;
  }, [nodes, alpha, active]);

  // color model:
  //  - Central node is yellow (#ffd54f)
  //  - Outer nodes are blue-ish; higher depth rings tend toward blue.
  //  - α pushes all nodes toward yellow (shared identity).
  const colorForNode = (n: any) => {
    if (n.id === "agent") return "#ffd54f";
    // base hue by ring (deeper ring ⇒ bluer)
    const ringHue = ["#76a9fa", "#5ea3fa", "#3b82f6", "#2563eb"][n.ring] || "#3b82f6";
    const mix = d3.interpolateRgb(ringHue, "#ffd54f");
    // if active ring, nudge further toward yellow
    const toward = n.level === active ? Math.min(1, alpha + 0.25) : alpha;
    return mix(toward);
  };

  // draw
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // rings
    svg.append("g")
      .selectAll("circle")
      .data(RING_RADII.slice(0, depth))
      .enter()
      .append("circle")
      .attr("cx", CENTER.x)
      .attr("cy", CENTER.y)
      .attr("r", d => d)
      .attr("fill", "none")
      .attr("stroke", (d, i) => i === LEVELS.findIndex(L => L.key === active) ? "rgba(255,140,66,.6)" : "rgba(255,140,66,.25)")
      .attr("stroke-dasharray", "3 6");

    // level labels
    svg.append("g")
      .selectAll("text")
      .data(LEVELS.slice(0, depth))
      .enter()
      .append("text")
      .attr("x", CENTER.x)
      .attr("y", (d, i) => CENTER.y - (RING_RADII[i] + 10))
      .attr("fill", "#ff8c42")
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .text(d => d.label);

    // position peripheral nodes on their rings
    const placed = nodes.map(n => {
      if (n.id === "agent") return { ...n, x: CENTER.x, y: CENTER.y };
      const x = CENTER.x + n.r * Math.cos(n.theta);
      const y = CENTER.y + n.r * Math.sin(n.theta);
      return { ...n, x, y };
    });

    // links
    svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("x1", d => placed.find(n => n.id === d.source)!.x)
      .attr("y1", d => placed.find(n => n.id === d.source)!.y)
      .attr("x2", d => placed.find(n => n.id === d.target)!.x)
      .attr("y2", d => placed.find(n => n.id === d.target)!.y)
      .attr("stroke", d => `rgba(255,107,53,${0.15 + 0.6 * d.weight})`)
      .attr("stroke-width", d => 0.5 + 2 * d.weight);

    // nodes
    const g = svg.append("g")
      .selectAll("g.node")
      .data(placed)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    g.append("circle")
      .attr("r", d => d.id === "agent" ? 22 : 10)
      .attr("fill", d => colorForNode(d))
      .attr("stroke", "rgba(0,0,0,.25)")
      .attr("stroke-width", 1.2);

    g.append("text")
      .text(d => (d.id === "agent" ? "You" : ""))
      .attr("y", -28)
      .attr("text-anchor", "middle")
      .attr("fill", "#ff8c42")
      .attr("font-size", 12)
      .attr("font-weight", 700);
  }, [nodes, links, depth, alpha, active]);

  // quick metric to echo your old “coherence” readout
  const coherence = useMemo(() => (alpha * (1 / depth)).toFixed(3), [alpha, depth]);

  return (
    <section className="section" id="identity">
      <h2 className="section-title">Identity Navigator</h2>

      <div className="pathway-container" style={{ overflow: "hidden" }}>
        <svg ref={svgRef} width={840} height={640} />
      </div>

      <div className="simulation-controls">
        <div className="control-group">
          <label>Cultural Precision (α)</label>
          <input
            type="range" min={0} max={1} step={0.01}
            value={alpha}
            onChange={e => setAlpha(parseFloat(e.target.value))}
          />
          <span className="control-value">{alpha.toFixed(2)}</span>
        </div>

        <div className="control-group">
          <label>Contextual Depth</label>
          <input
            type="range" min={1} max={4} step={1}
            value={depth}
            onChange={e => setDepth(parseInt(e.target.value, 10))}
          />
          <span className="control-value">{depth}</span>
        </div>

        <div className="control-group">
          <label>Activated Level</label>
          <select value={active} onChange={e => setActive(e.target.value as LevelKey)}>
            {LEVELS.slice(0, depth).map(L => (
              <option key={L.key} value={L.key}>{L.label}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Identity Coherence</label>
          <span className="control-value">{coherence}</span>
        </div>
      </div>
    </section>
  );
}
