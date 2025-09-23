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
}
