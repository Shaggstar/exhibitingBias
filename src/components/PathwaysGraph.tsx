<<<<<<< HEAD
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import type { RefEntry } from "../lib/refLoader";

type Link = { source: string; target: string };

type Node = {
  id: string;
  label: string;
  quote?: string;
  cite?: string;
  group?: string;
};

export default function PathwaysGraph({
  data,
  links,
  onSelect,
}: {
  data: RefEntry[];
  links: Link[];
  onSelect: (id: string) => void;
}) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth || 960;
    const height = 520;

    const nodes: Node[] = data.map((entry) => ({
      id: entry.id,
      label: entry.label,
      quote: entry.hover,
      cite: entry.cite,
      group: entry.group,
    }));

    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", height)
      .attr("style", "max-width:100%; display:block; background:transparent;");

    svg.selectAll("*").remove();

    const simulation = d3
      .forceSimulation(nodes as any)
      .force("link", d3.forceLink(links as any).id((d: any) => d.id).distance(90).strength(0.9))
      .force("charge", d3.forceManyBody().strength(-160))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(22));

    const linkSel = svg
      .append("g")
      .attr("stroke", "rgba(255,255,255,0.18)")
      .attr("stroke-width", 1.1)
      .selectAll("line")
      .data(links)
      .join("line");

    const nodeSel = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .style("cursor", "pointer")
      .on("click", (_, d: any) => onSelect(d.id));

    nodeSel
      .append("circle")
      .attr("r", 9)
      .attr("fill", "var(--accent)")
      .append("title")
      .text((d) => {
        const quote = d.quote ? `“${d.quote}”` : d.label;
        return d.cite ? `${quote}\n— ${d.cite}` : quote;
      });

    nodeSel
      .append("text")
      .attr("x", 12)
      .attr("y", 4)
      .attr("fill", "var(--text)")
      .attr("font-size", 12)
      .text((d) => d.label);

    simulation.on("tick", () => {
      linkSel
        .attr("x1", (d: any) => (d.source as any).x)
        .attr("y1", (d: any) => (d.source as any).y)
        .attr("x2", (d: any) => (d.target as any).x)
        .attr("y2", (d: any) => (d.target as any).y);

      nodeSel.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [data, links, onSelect]);

  return <svg ref={ref} />;
=======
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { loadReferences, RefNode } from "../lib/refLoader";

// Relationship types shown as edge labels
type RelType = "enables"|"extends"|"contradicts"|"resolves"|"explains"|"parallels";

type Edge = { source: string; target: string; rel: RelType };

const AXIS_ORDER = ["Accent","Morality","Culture","Governance"] as const;
type Axis = typeof AXIS_ORDER[number];

const axisX: Record<Axis, number> = {
  Accent: 120, Morality: 340, Culture: 560, Governance: 780
};

const NODE_R = 46;

export default function PathwaysGraph(){
  const svgRef = useRef<SVGSVGElement|null>(null);
  const [refs, setRefs] = useState<RefNode[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Load nodes
  useEffect(() => { loadReferences().then(setRefs); }, []);

  // Define relationships once nodes are in (use IDs from references.md)
  useEffect(() => {
    if (!refs.length) return;

    const E: Edge[] = [
      // Thermo paradigm “null → alt”
      { source: "single_equilibrium", target: "steady_state", rel: "contradicts" },

      // Econ → Institutions
      { source: "homo_economicus", target: "coase_firm", rel: "contradicts" },
      { source: "coase_firm", target: "simon_we", rel: "explains" },
      { source: "north_institutions", target: "simon_we", rel: "extends" },

      // Decision/narrative
      { source: "homo_economicus", target: "narrative_paradigm", rel: "contradicts" },

      // Behaviorism → Emotion → Self → Innate morality
      { source: "skinner_sr", target: "adolphs_anderson_emotion", rel: "contradicts" },
      { source: "adolphs_anderson_emotion", target: "solms_damasio_affect_self", rel: "enables" },
      { source: "solms_damasio_affect_self", target: "infant_morality", rel: "explains" },

      // Moral → Cultural evolution → Synthesis
      { source: "moffett_accent", target: "boyd_henrich", rel: "enables" },
      { source: "boyd_henrich", target: "heyes_gadgets", rel: "extends" },
      { source: "curry_cooperation", target: "tms_core", rel: "explains" },
      { source: "boyd_henrich", target: "moh_core", rel: "enables" },

      // Structuralist vs Derrida
      { source: "binary_opposition", target: "differance", rel: "contradicts" },

      // Narrative path
      { source: "jung_cosmic", target: "booker_hero", rel: "extends" },
      { source: "booker_hero", target: "bloom_shakespeare", rel: "extends" },
      { source: "bloom_shakespeare", target: "moh_core", rel: "explains" },

      // Bridge MOH ↔ TMS
      { source: "moh_core", target: "tms_core", rel: "extends" },
    ];
    setEdges(E);
  }, [refs]);

  // Compute layout: x by axis, y by group/index; avoid overlaps
  const placed = useMemo(() => {
    const byAxis: Record<Axis, RefNode[]> = { Accent:[], Morality:[], Culture:[], Governance:[] };
    refs.forEach(n => {
      const a = (AXIS_ORDER.includes(n.axis as Axis) ? n.axis : "Culture") as Axis;
      byAxis[a].push(n);
    });

    const yBase = 80, yGap = 110;
    const coords: Record<string, {x:number;y:number;node:RefNode}> = {};
    (AXIS_ORDER as readonly Axis[]).forEach(a => {
      byAxis[a].forEach((n, i) => {
        coords[n.id] = { x: axisX[a], y: yBase + i*yGap, node: n };
      });
    });

    return coords;
  }, [refs]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 900, height = 660;
    // grid/axis header
    const header = svg.append("g");
    header.selectAll("text.axis").data(AXIS_ORDER).enter()
      .append("text")
      .attr("class","axis")
      .attr("x",(d)=>axisX[d])
      .attr("y",30)
      .attr("text-anchor","middle")
      .attr("fill","#ff8c42")
      .attr("font-weight",700)
      .text((d)=>d);

    // light vertical guides
    header.selectAll("line.v").data(AXIS_ORDER).enter()
      .append("line")
      .attr("x1",(d)=>axisX[d]).attr("x2",(d)=>axisX[d])
      .attr("y1",42).attr("y2",height-20)
      .attr("stroke","rgba(255,140,66,.15)")
      .attr("stroke-dasharray","4 8");

    // Edges first (so they sit under nodes)
    const edgeG = svg.append("g");
    const arrow = svg.append("defs").append("marker")
      .attr("id","arrowHead").attr("markerWidth",10).attr("markerHeight",8).attr("refX",8).attr("refY",4).attr("orient","auto");
    arrow.append("polygon").attr("points","0 0, 10 4, 0 8").attr("fill","#ff6b35");

    edges.forEach(e => {
      const s = placed[e.source], t = placed[e.target];
      if (!s || !t) return;
      const dx = t.x - s.x, dy = t.y - s.y;
      const mx = (s.x + t.x)/2, my = (s.y + t.y)/2;

      // Curve control point to avoid cutting through node circles
      const norm = Math.sqrt(dx*dx + dy*dy) || 1;
      const offX = -dy / norm * 40; // perpendicular offset
      const offY =  dx / norm * 40;
      const c1x = s.x + dx*0.33 + offX;
      const c1y = s.y + dy*0.33 + offY;
      const path = `M ${s.x} ${s.y} C ${c1x} ${c1y}, ${mx} ${my}, ${t.x} ${t.y}`;

      edgeG.append("path")
        .attr("d", path)
        .attr("fill","none")
        .attr("stroke","#ff6b35")
        .attr("stroke-width",2)
        .attr("marker-end","url(#arrowHead)")
        .attr("opacity",0.9);

      // edge label near midpoint
      edgeG.append("text")
        .attr("x", mx + offX*0.35)
        .attr("y", my + offY*0.35 - 6)
        .attr("text-anchor","middle")
        .attr("font-size", 12)
        .attr("fill","#ffb08c")
        .text(e.rel);
    });

    // Nodes
    const nodeG = svg.append("g");
    Object.values(placed).forEach(({x, y, node}) => {
      const g = nodeG.append("g").attr("transform",`translate(${x},${y})`);

      // sphere
      g.append("circle")
        .attr("r", NODE_R)
        .attr("fill","rgba(26,26,26,.88)")
        .attr("stroke","rgba(255,107,53,.35)")
        .attr("stroke-width",2);

      // label (wrap to two lines)
      const main = `${node.label}`;
      const who  = node.researchers ? `(${node.researchers})` : "";
      g.append("text")
        .attr("text-anchor","middle")
        .attr("fill","#eaeaea")
        .attr("font-size",12)
        .attr("font-weight",700)
        .attr("dy",-4)
        .text(main.length>22? main.slice(0,22)+"…" : main);

      g.append("text")
        .attr("text-anchor","middle")
        .attr("fill","#cfcfcf")
        .attr("font-style","italic")
        .attr("font-size",11)
        .attr("dy",14)
        .text(who.length>26? who.slice(0,26)+"…" : who);

      // tooltip (native title works well; we can upgrade later)
      const hover = node.hover ? `${node.hover}\n${node.cite || ""}` : (node.cite || "");
      if (hover) g.append("title").text(hover);
    });

  }, [placed, edges]);

  return (
    <section className="section" id="paths-graph">
      <h2 className="section-title">Theoretical Pathways (Pseudo-Graph)</h2>
      <div className="pathway-container" style={{overflow:"hidden"}}>
        <svg ref={svgRef} width={920} height={680} />
      </div>
      <p style={{color:"#cfcfcf",lineHeight:1.7, marginTop:12}}>
        Axis encodes the categorical trajectory: <strong>Accent Bias → Morality → Culture → Governance</strong>.  
        Edge labels indicate relations (<em>enables, extends, contradicts, resolves, explains, parallels</em>).  
        Hover nodes for quotes/citations (from <code>src/data/references.md</code>).
      </p>
    </section>
  );
>>>>>>> d7a1c7216b4ad06f253d0460a60ce8f224b65cdd
}
