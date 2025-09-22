// src/components/MermaidChart.tsx
import React from "react";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: false, theme: "dark", securityLevel: "loose" });

type MermaidChartProps = {
  code: string;
  tooltips?: Record<string, string>;
};

export default function MermaidChart({ code, tooltips }: MermaidChartProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let canceled = false;
    (async () => {
      try {
        const id = "mmd-" + Math.random().toString(36).slice(2);
        const { svg } = await mermaid.render(id, code);
        if (canceled || !ref.current) return;
        ref.current.innerHTML = svg;

        if (tooltips) {
          const svgEl = ref.current.querySelector("svg");
          if (!svgEl) return;

          const applyTooltip = (node: Element, text: string) => {
            let title = node.querySelector("title");
            if (!title) {
              title = document.createElementNS("http://www.w3.org/2000/svg", "title");
              node.appendChild(title);
            }
            if (title) title.textContent = text;
          };

          const nodes = Array.from(svgEl.querySelectorAll('g[class*="node"]'));

          Object.entries(tooltips).forEach(([key, value]) => {
            const idMatch = svgEl.querySelector(`#${CSS.escape(key)}`);
            if (idMatch) {
              applyTooltip(idMatch, value);
              return;
            }

            const labelMatch = nodes.find((node) => {
              const label = node.textContent?.replace(/\s+/g, " ").trim();
              return label === key;
            });

            if (labelMatch) applyTooltip(labelMatch, value);
          });
        }
      } catch (e) {
        if (ref.current) ref.current.textContent = "Mermaid render error";
      }
    })();
    return () => {
      canceled = true;
    };
  }, [code, tooltips]);

  return <div className="rounded-lg border border-[#ffffff22] p-3 overflow-auto" ref={ref} />;
}
