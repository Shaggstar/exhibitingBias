import * as d3 from "d3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathwaysData } from "../data/usePathwaysData";

type Link = { source: string; target: string };
type Node = {
  id: string;
  label: string;
  quote?: string;
  cite?: string;
  group?: string;
  pathway: number;
};

const PATHWAY_COLORS: Record<number, string> = {
  1: "#ff9f6e",
  2: "#33c3ff",
  3: "#ffd166",
  4: "#a98bff",
  5: "#84fab0",
  6: "#f5b0ff",
  7: "#ff7b6b",
};

const PATHWAY_LABEL: Record<number, string> = {
  0: "All Pathways",
  1: "Evolution of Identity",
  2: "Semantics (Cells → Prison Cells)",
  3: "Multiple Null Hypothesis",
  4: "Narratives as Shared Reference Frame",
  5: "Active Inference → TMS",
  6: "Dual Modes of Attention (Analytic vs Gestalt)",
  7: "Simulations",
};

const PATHWAY_MAP: Record<string, number> = {
  moffett_accent: 1,
  infant_morality: 1,
  curry_cooperation: 1,
  boyd_henrich: 1,
  heyes_gadgets: 1,

  single_equilibrium: 2,
  steady_state: 2,
  meaning_common_ref: 2,
  adolphs_anderson_emotion: 2,
  solms_damasio_affect_self: 2,

  homo_economicus: 3,
  coase_firm: 3,
  simon_we: 3,
  binary_opposition: 3,
  differance: 3,
  skinner_sr: 3,
  noble_relativ: 3,
  greene_dualprocess: 3,

  narrative_paradigm: 4,
  jung_cosmic: 4,
  booker_hero: 4,
  bloom_shakespeare: 4,

  north_institutions: 5,
  moh_core: 5,
  tms_core: 5,

  dual_modes_attention: 6,
  metaphor_vs_analytic: 6,
  pirsig_quality: 6,
  surfaces_essences: 6,
  blake_fourfold: 6,

  echo_chambers: 7,
  mab_scaling: 7,
  sim_goals_pomdp: 7,
};

const LINKS: Link[] = [
  { source: "moffett_accent", target: "boyd_henrich" },
  { source: "boyd_henrich", target: "heyes_gadgets" },
  { source: "heyes_gadgets", target: "infant_morality" },
  { source: "infant_morality", target: "curry_cooperation" },

  { source: "single_equilibrium", target: "steady_state" },
  { source: "adolphs_anderson_emotion", target: "solms_damasio_affect_self" },

  { source: "homo_economicus", target: "coase_firm" },
  { source: "coase_firm", target: "simon_we" },
  { source: "binary_opposition", target: "differance" },
  { source: "skinner_sr", target: "adolphs_anderson_emotion" },
  { source: "homo_economicus", target: "noble_relativ" },
  { source: "greene_dualprocess", target: "curry_cooperation" },

  { source: "narrative_paradigm", target: "booker_hero" },
  { source: "booker_hero", target: "bloom_shakespeare" },
  { source: "jung_cosmic", target: "booker_hero" },

  { source: "north_institutions", target: "moh_core" },
  { source: "moh_core", target: "tms_core" },

  { source: "dual_modes_attention", target: "metaphor_vs_analytic" },
  { source: "metaphor_vs_analytic", target: "pirsig_quality" },
  { source: "pirsig_quality", target: "surfaces_essences" },
  { source: "surfaces_essences", target: "blake_fourfold" },

  { source: "echo_chambers", target: "mab_scaling" },
  { source: "mab_scaling", target: "sim_goals_pomdp" },
];

function ConceptualAtlas() {
  const data = usePathwaysData();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedPathway, setSelectedPathway] = useState<number>(0);

  const nodes: Node[] = useMemo(
    () =>
      data.map((d) => ({
        id: d.id,
        label: d.label,
        quote: d.hover,
        cite: d.cite,
        group: d.group,
        pathway: PATHWAY_MAP[d.id] ?? 0,
      })),
    [data]
  );

  const links = useMemo(() => {
    const ids = new Set(nodes.map((n) => n.id));
    return LINKS.filter((link) => ids.has(link.source) && ids.has(link.target));
  }, [nodes]);

  const nodesByPathway = useMemo(() => {
    const buckets = new Map<number, Node[]>();
    nodes.forEach((node) => {
      const pathway = node.pathway || 0;
      if (!buckets.has(pathway)) buckets.set(pathway, []);
      buckets.get(pathway)!.push(node);
    });
    return buckets;
  }, [nodes]);

  const visibleNodes = useMemo(() => {
    if (selectedPathway === 0) {
      return [...nodes].sort((a, b) => a.label.localeCompare(b.label));
    }
    const bucket = nodesByPathway.get(selectedPathway) || [];
    return [...bucket].sort((a, b) => a.label.localeCompare(b.label));
  }, [nodesByPathway, selectedPathway, nodes]);

  const visibleIds = useMemo(() => new Set(visibleNodes.map((node) => node.id)), [visibleNodes]);

  const graphNodes = useMemo(() => nodes.filter((node) => visibleIds.has(node.id)), [nodes, visibleIds]);

  const graphLinks = useMemo(
    () => links.filter((link) => visibleIds.has(link.source) && visibleIds.has(link.target)),
    [links, visibleIds]
  );

  useEffect(() => {
    if (!selectedId && visibleNodes.length) {
      setSelectedId(visibleNodes[0].id);
      return;
    }
    if (selectedId) {
      const current = nodes.find((node) => node.id === selectedId);
      if (!current || current.pathway !== selectedPathway) {
        setSelectedId(visibleNodes[0]?.id ?? null);
      }
    } else if (!visibleNodes.length) {
      setSelectedId(null);
    }
  }, [selectedPathway, visibleNodes, nodes, selectedId]);

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const width = svgElement.clientWidth || 960;
    const height = 520;

    const svg = d3
      .select(svgElement)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", height)
      .attr("style", "max-width:100%;display:block;background:transparent;");

    svg.selectAll("*").remove();

    if (!graphNodes.length) {
      return;
    }

    const simNodes = graphNodes.map((node) => ({ ...node }));
    const simLinks = graphLinks.map((link) => ({ ...link }));

    const margin = 28;
    const simulation = d3
      .forceSimulation(simNodes as any)
      .force(
        "link",
        d3
          .forceLink(simLinks as any)
          .id((d: any) => d.id)
          .distance(140)
          .strength(0.5)
      )
      .force("charge", d3.forceManyBody().strength(-220))
      .force("collide", d3.forceCollide().radius(24).iterations(2))
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .alphaDecay(0.03);

    const linkSelection = svg
      .append("g")
      .attr("stroke", "rgba(255,255,255,0.18)")
      .attr("stroke-width", 1.1)
      .selectAll("line")
      .data(simLinks)
      .join("line");

    const drag = d3
      .drag<SVGGElement, any>()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    const nodeSelection = svg
      .append("g")
      .selectAll("g")
      .data(simNodes)
      .join("g")
      .style("cursor", "pointer")
      .on("click", (_, d: any) => setSelectedId(d.id))
      .call(drag);

    nodeSelection
      .append("circle")
      .attr("r", 9)
      .attr("fill", (d: any) => PATHWAY_COLORS[d.pathway] || "var(--accent)")
      .append("title")
      .text((d: any) => {
        const quote = d.quote ? `“${d.quote}”` : d.label;
        return d.cite ? `${quote}\n— ${d.cite}` : quote;
      });

    nodeSelection
      .append("text")
      .attr("x", 12)
      .attr("y", 4)
      .attr("fill", "var(--text)")
      .attr("font-size", 12)
      .text((d: any) => d.label);

    const clampX = (value: number) => Math.max(margin, Math.min(width - margin, value));
    const clampY = (value: number) => Math.max(margin, Math.min(height - margin, value));

    simulation.on("tick", () => {
      simNodes.forEach((node: any) => {
        node.x = clampX(node.x ?? width / 2);
        node.y = clampY(node.y ?? height / 2);
      });

      linkSelection
        .attr("x1", (d: any) => clampX((d.source as any).x ?? width / 2))
        .attr("y1", (d: any) => clampY((d.source as any).y ?? height / 2))
        .attr("x2", (d: any) => clampX((d.target as any).x ?? width / 2))
        .attr("y2", (d: any) => clampY((d.target as any).y ?? height / 2));

      nodeSelection.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        simulation.alpha(0.6).restart();
        timers.push(
          window.setTimeout(() => {
            simulation.alphaTarget(0);
          }, 900)
        );
      }, 80)
    );

    return () => {
      simulation.stop();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [graphNodes, graphLinks]);

  const selectedEntry: Node | undefined = selectedId
    ? nodes.find((node) => node.id === selectedId)
    : undefined;

  const activeLabel = PATHWAY_LABEL[selectedPathway] ?? PATHWAY_LABEL[0];
  const headingLabel = selectedPathway === 0 ? activeLabel : `${selectedPathway}: ${activeLabel}`;

  return (
    <section className="section" id="pathways">
      <h2 className="section-title">Conceptual Atlas — {headingLabel}</h2>

      <div className="flex flex-wrap gap-3 mb-4 text-xs">
        {Object.entries(PATHWAY_COLORS).map(([key, color]) => (
          <span
            key={key}
            className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10"
          >
            <span style={{ background: color, width: 10, height: 10, borderRadius: 9999 }} />
            Pathway {key}: {PATHWAY_LABEL[Number(key)] ?? ""}
          </span>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 mb-6">
        <svg ref={svgRef} />
        <div className="px-4 py-2 text-xs text-[color:var(--accentSoft)]">
          Click any node. No hover required. Quote and citation appear below.
        </div>
      </div>
      {/* Outline + Details (grouped by pathway) */}
      <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {["0", ...Object.keys(PATHWAY_COLORS)].map((key) => {
              const p = Number(key);
              const count = p === 0 ? nodes.length : nodesByPathway.get(p)?.length ?? 0;
              return (
                <button
                  key={p}
                  onClick={() => setSelectedPathway(p)}
                  className={`px-2 py-1 rounded-full border text-xs transition ${
                    selectedPathway === p
                      ? "bg-white/10 border-white/20"
                      : "bg-black/20 border-white/10 hover:bg-white/5"
                  }`}
                  title={PATHWAY_LABEL[p] ?? PATHWAY_LABEL[0]}
                  type="button"
                >
                  <span className="inline-flex items-center gap-2">
                    {p === 0 ? (
                      <span
                        className="inline-flex items-center justify-center"
                        style={{ width: 10, height: 10, borderRadius: 9999, background: "linear-gradient(135deg,#ff9f6e,#33c3ff,#ffd166,#a98bff,#84fab0,#f5b0ff,#ff7b6b)" }}
                      />
                    ) : (
                      <span
                        style={{ background: PATHWAY_COLORS[p], width: 10, height: 10, borderRadius: 9999 }}
                      />
                    )}
                    <span>{p === 0 ? "All" : `P${p}`}</span>
                    <span className="opacity-70">({count})</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-2 max-h-[48vh] overflow-auto pr-1">
            {visibleNodes.map((it) => (
              <button
                key={it.id}
                onClick={() => setSelectedId(it.id)}
                className={`w-full text-left px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 ${
                  selectedId === it.id ? "bg-[color:var(--accent)]/15" : "bg-black/10"
                }`}
                type="button"
              >
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      background: PATHWAY_COLORS[it.pathway] || "var(--accent)",
                      width: 10,
                      height: 10,
                      borderRadius: 9999,
                    }}
                  />
                  <span className="text-sm text-[color:var(--text)]">{it.label}</span>
                </div>
                {it.group && (
                  <div className="text-xs text-[color:var(--accentSoft)] mt-0.5">{it.group}</div>
                )}
              </button>
            ))}

            {!visibleNodes.length && (
              <div className="text-xs text-[color:var(--accentSoft)] px-1">
                No nodes tagged to this pathway yet.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-4 bg-black/20 md:sticky md:top-20">
          {selectedId ? (
            (() => {
              const selected = nodes.find((n) => n.id === selectedId);
              if (!selected) {
                return (
                  <p className="text-sm text-[color:var(--accentSoft)]">
                    Select a node to see the quote and citation.
                  </p>
                );
              }
              return (
                <div>
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--accentSoft)]">
                        {selected.pathway ? `Pathway ${selected.pathway}` : "Unassigned"}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[color:var(--text)] leading-tight">
                      {selected.label}
                    </h3>
                  </div>
                  {selected.quote && (
                    <p className="text-sm mb-3 text-[color:var(--text)]">“{selected.quote}”</p>
                  )}
                  {selected.cite && (
                    <p className="text-xs text-[color:var(--accentSoft)] mb-3">— {selected.cite}</p>
                  )}

                  {selected.id === "sim_goals_pomdp" && (
                    <a
                      href="#goals-pomdp"
                      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded border border-white/10 bg-white/5 hover:bg-white/10 mb-3"
                    >
                      Open Goals &amp; POMDP section
                    </a>
                  )}

                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accentSoft)]">
                    {selected.pathway
                      ? `Pathway ${selected.pathway}: ${PATHWAY_LABEL[selected.pathway] ?? ""}`
                      : PATHWAY_LABEL[0]}
                  </p>
                </div>
              );
            })()
          ) : (
            <p className="text-sm text-[color:var(--accentSoft)]">
              Select a node to see its quote & citation.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConceptualAtlas;
