import React, { useMemo, useState } from "react";
import { usePathwaysData } from "../data/usePathwaysData";
import PathwaysGraph from "./PathwaysGraph";
import PathwaysOutline from "./PathwaysOutline";
import SevenPathways from "./SevenPathways";

type Link = { source: string; target: string };

const LINKS: Link[] = [
  { source: "single_equilibrium", target: "steady_state" },
  { source: "homo_economicus", target: "coase_firm" },
  { source: "coase_firm", target: "simon_we" },
  { source: "narrative_paradigm", target: "booker_hero" },
  { source: "booker_hero", target: "bloom_shakespeare" },
  { source: "skinner_sr", target: "adolphs_anderson_emotion" },
  { source: "adolphs_anderson_emotion", target: "solms_damasio_affect_self" },
  { source: "moffett_accent", target: "boyd_henrich" },
  { source: "boyd_henrich", target: "heyes_gadgets" },
  { source: "north_institutions", target: "moh_core" },
  { source: "moh_core", target: "tms_core" },
];

export default function Pathways() {
  const data = usePathwaysData();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = useMemo(() => data, [data]);

  return (
    <section className="section" id="pathways">
      <h2 className="section-title">7 Pathways</h2>

      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 mb-6">
        <PathwaysGraph data={items} links={LINKS} onSelect={setSelectedId} />
        <div className="px-4 py-2 text-xs text-[color:var(--accentSoft)]">
          Click any node—no hover required. The quote + citation appears below.
        </div>
      </div>

      <PathwaysOutline items={items} selectedId={selectedId} setSelectedId={setSelectedId} />

      <div className="mt-16">
        <SevenPathways />
      </div>
    </section>
  );
}
