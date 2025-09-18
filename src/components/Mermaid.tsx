import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import mermaid from "mermaid";

type MermaidProps = {
  chart: string;
  className?: string;
  theme?: "dark" | "default";
};

export default function Mermaid({ chart, className = "", theme = "dark" }: MermaidProps) {
  const elId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [svg, setSvg] = useState<string>("");

  // Stable chart value so mermaid does not re-init on every keystroke
  const chartMemo = useMemo(() => chart.trim(), [chart]);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
      securityLevel: "loose",
      flowchart: { curve: "basis" }
    });

    let mounted = true;
    async function render() {
      try {
        const { svg } = await mermaid.render(elId.replace(/:/g, "_"), chartMemo);
        if (mounted) setSvg(svg);
      } catch (err) {
        setSvg(`<pre style="color:#f66;white-space:pre-wrap;">Mermaid error:\n${String(err)}</pre>`);
      }
    }
    render();
    return () => { mounted = false; };
  }, [chartMemo, elId, theme]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
