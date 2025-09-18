import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { REF_INDEX } from "../data/references";

type Node = {
  id: string;
  label: string;
  group: string;
  refKey?: keyof typeof REF_INDEX;
};

type Link = {
  source: string;
  target: string;
  type?: "enables" | "extends" | "contradicts" | "parallels" | "informs" | "grounds";
};

const cleanLabel = (label: string) => label.replace(/\[\[|\]\]/g, "").trim();

const nodes: Node[] = [
  { id: "moh", label: "[[Myth of Objectivity]]", group: "core", refKey: "moh" },
  { id: "tms", label: "[[Transcendental Model Selection]]", group: "core", refKey: "tms" },

  // Evolution spine
  { id: "accent", label: "[[Shibboleth / Accent Bias]]", group: "evolution", refKey: "accent" },
  { id: "morality", label: "[[Innate Morality]]", group: "evolution", refKey: "morality" },
  { id: "culture", label: "[[Cultural Evolution]]", group: "evolution", refKey: "culture" },
  { id: "governance", label: "[[Institutions]]", group: "evolution", refKey: "institutions" },

  // Null hypothesis hub + reductive nodes
  { id: "null", label: "[[Null Hypothesis (Reductionism)]]", group: "null", refKey: "null" },
  { id: "singleEq", label: "[[Single Thermodynamic Equilibrium]]", group: "null", refKey: "singleEq" },
  { id: "steady", label: "[[Non-equilibrium Steady States]]", group: "counters", refKey: "steady" },
  { id: "homoEcon", label: "[[Homo Economicus]]", group: "null", refKey: "homoEcon" },
  { id: "narrativeScenario", label: "[[Narrative Scenario Analysis]]", group: "counters", refKey: "narrativeScenario" },
  { id: "institutionsCounter", label: "[[Institutions (North)]]", group: "counters", refKey: "institutions" },
  { id: "selfishGene", label: "[[Selfish Gene]]", group: "null", refKey: "selfishGene" },
  { id: "bioRel", label: "[[Biological Relativity]]", group: "counters", refKey: "biorel" },
  { id: "stimulus", label: "[[Stimulus–Response]]", group: "null", refKey: "stimulus" },
  { id: "emotion", label: "[[Emotion as Intervening Variable]]", group: "counters", refKey: "emotion" },
  { id: "structuralism", label: "[[Structuralism: Binary Opposition]]", group: "null", refKey: "structuralism" },
  { id: "differance", label: "[[Différance / Transcendental Signified]]", group: "counters", refKey: "differance" },
  { id: "pseudo", label: "[[Pseudo-speciation]]", group: "morality", refKey: "pseudo" },

  // Narrative nodes
  { id: "narrative", label: "[[Narrative Paradigm]]", group: "narrative", refKey: "narrative" },
  { id: "cosmic", label: "[[Cosmic Self / Archetypes]]", group: "narrative", refKey: "cosmic" },
  { id: "multiplicity", label: "[[Multiplicity of Selves]]", group: "narrative", refKey: "multiplicity" },

  // TMS detail nodes
  { id: "shared", label: "[[Shared Generative Models]]", group: "tms", refKey: "shared" },
  { id: "lightCone", label: "[[Computational Self (Light Cone)]]", group: "tms", refKey: "lightCone" },
  { id: "depth", label: "[[Epistemic Depth]]", group: "tms", refKey: "depth" },
  { id: "alpha", label: "[[α: Cultural Precision]]", group: "tms", refKey: "alpha" },
];

const links: Link[] = [
  // Evolution
  { source: "accent", target: "morality", type: "enables" },
  { source: "morality", target: "culture", type: "enables" },
  { source: "culture", target: "governance", type: "enables" },
  { source: "culture", target: "moh", type: "enables" },

  // Null hypothesis hub
  { source: "null", target: "singleEq", type: "extends" },
  { source: "null", target: "homoEcon", type: "extends" },
  { source: "null", target: "selfishGene", type: "extends" },
  { source: "null", target: "stimulus", type: "extends" },
  { source: "null", target: "structuralism", type: "extends" },

  // Counter evidence
  { source: "singleEq", target: "steady", type: "contradicts" },
  { source: "homoEcon", target: "narrativeScenario", type: "contradicts" },
  { source: "homoEcon", target: "institutionsCounter", type: "contradicts" },
  { source: "selfishGene", target: "bioRel", type: "contradicts" },
  { source: "stimulus", target: "emotion", type: "contradicts" },
  { source: "structuralism", target: "differance", type: "contradicts" },
  { source: "morality", target: "pseudo", type: "parallels" },

  // Narrative ties
  { source: "narrative", target: "cosmic", type: "extends" },
  { source: "cosmic", target: "multiplicity", type: "extends" },
  { source: "narrative", target: "culture", type: "informs" },

  // TMS chain
  { source: "shared", target: "lightCone", type: "grounds" },
  { source: "lightCone", target: "depth", type: "extends" },
  { source: "depth", target: "alpha", type: "extends" },
  { source: "alpha", target: "tms", type: "enables" },
  { source: "tms", target: "moh", type: "enables" },
  { source: "alpha", target: "morality", type: "enables" },
];

const palette: Record<string, string> = {
  core: "#ff6a3d",
  evolution: "#6aa7ff",
  null: "#ef5350",
  counters: "#66bb6a",
  morality: "#ffcf66",
  narrative: "#ce93d8",
  tms: "#8ecae6",
};

const linkColor: Record<NonNullable<Link["type"]>, string> = {
  enables: "rgba(255,140,66,.75)",
  extends: "rgba(206,147,216,.75)",
  contradicts: "rgba(239,83,80,.8)",
  parallels: "rgba(102,187,106,.75)",
  informs: "rgba(255,190,92,.8)",
  grounds: "rgba(144,202,249,.8)",
};

export default function ConceptualAtlas() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; html: string } | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth || 900;
    const height = svgRef.current.clientHeight || 560;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const simulation = d3
      .forceSimulation(nodes as any)
      .force("link", d3.forceLink(links as any).id((d: any) => d.id).distance(110).strength(0.85))
      .force("charge", d3.forceManyBody().strength(-260))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(24));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", d => linkColor[d.type || "enables"])
      .attr("stroke-width", 1.6)
      .attr("stroke-linecap", "round");

    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .style("cursor", "grab")
      .call(
        d3
          .drag<SVGGElement, Node>()
          .on("start", (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d: any) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node
      .append("circle")
      .attr("r", d => (d.group === "core" ? 20 : 14))
      .attr("fill", d => palette[d.group] || "#9fa8da")
      .attr("stroke", "rgba(255,255,255,.25)")
      .attr("stroke-width", 1.4)
      .on("mousemove", (event, d) => {
        const ref = d.refKey ? REF_INDEX[d.refKey] : undefined;
        const label = cleanLabel(d.label);
        const html = ref
          ? `<strong>${label}</strong><br/>${ref.title}<br/><em>${ref.cite}</em>`
          : `<strong>${label}</strong>`;
        setTooltip({ x: event.offsetX + 14, y: event.offsetY + 14, html });
      })
      .on("mouseleave", () => setTooltip(null));

    node
      .append("text")
      .attr("x", 18)
      .attr("y", 5)
      .attr("fill", "#f7f4f2")
      .attr("font-size", 12)
      .attr("font-weight", 600)
      .text(d => cleanLabel(d.label));

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, []);

  return (
    <div className="pathway-container" style={{ background: "rgba(15,15,20,.85)" }}>
      <h3 className="section-title" style={{ marginBottom: "0.5rem" }}>Conceptual Atlas</h3>
      <p className="text-sm text-[#bdb5af] mb-3">
        Drag nodes to explore; hover a node to see its anchor reference. Scroll the frame if the network extends beyond the initial bounds.
      </p>
      <div
        className="relative rounded-xl border border-[color:var(--accent)]/25 bg-black/20"
        style={{ maxHeight: "620px", overflow: "auto" }}
      >
        <svg ref={svgRef} width="100%" height="560" style={{ minWidth: "720px", minHeight: "560px" }} />
        {tooltip && (
          <div
            style={{
              position: "absolute",
              left: tooltip.x,
              top: tooltip.y,
              background: "#111",
              border: "1px solid rgba(255,107,53,.45)",
              borderRadius: 8,
              padding: "8px 10px",
              color: "#eee",
              fontSize: 12,
              pointerEvents: "none",
              maxWidth: 260,
              boxShadow: "0 12px 24px rgba(0,0,0,.35)",
            }}
            dangerouslySetInnerHTML={{ __html: tooltip.html }}
          />
        )}
      </div>
    </div>
  );
}
