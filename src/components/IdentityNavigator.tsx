import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

type ContextKey = "family" | "professional" | "public" | "misc1" | "misc2" | "misc3";

type MiniNode = {
  id: string;
  group: ContextKey;
  orbit: number;
  baseWeight: number;
};

type MiniLink = {
  source: string;
  target: string;
  weight: number;
};

const CONTEXTS: { key: ContextKey; label: string; color: string; icon: string }[] = [
  { key: "family", label: "Family / Intimates", color: "#ffd166", icon: "💍" },
  { key: "professional", label: "Professional", color: "#33c3ff", icon: "👔" },
  { key: "public", label: "Public / Civic", color: "#ff7b6b", icon: "🎒" },
  { key: "misc1", label: "Sⁿ Misc 1", color: "#a98bff", icon: "🧭" },
  { key: "misc2", label: "Sⁿ Misc 2", color: "#84fab0", icon: "🧪" },
  { key: "misc3", label: "Sⁿ Misc 3", color: "#f5b0ff", icon: "🎭" },
];

const LOADOUT = [
  { id: "ring", label: "Family Covenant", icon: "💍", contexts: ["family"] as ContextKey[] },
  { id: "tie", label: "Office Credentials", icon: "👔", contexts: ["professional"] as ContextKey[] },
  { id: "badge", label: "Civic Badge", icon: "🎒", contexts: ["public"] as ContextKey[] },
  { id: "wand", label: "Sⁿ Toolkit", icon: "🪄", contexts: ["misc1", "misc2", "misc3"] as ContextKey[] },
];

type AttentionMap = Record<ContextKey, number>;

const ATTENTION_DEFAULT: AttentionMap = {
  family: 3,
  professional: 2,
  public: 2,
  misc1: 1,
  misc2: 1,
  misc3: 1,
};

const NODE_COUNT_BY_LEVEL = (level: number) => Math.min(120, 6 + level * 4);
const RINGS = (level: number) => Math.max(1, Math.min(30, level));

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function contextDistribution(attention: AttentionMap, keys: ContextKey[]) {
  const seq: ContextKey[] = [];
  keys.forEach((key) => {
    const weight = Math.max(0, Math.round(attention[key] ?? 0));
    for (let i = 0; i < weight; i += 1) {
      seq.push(key);
    }
  });
  return seq.length ? seq : [...keys];
}

function makeNodes(level: number, attention: AttentionMap, keys: ContextKey[]): MiniNode[] {
  const total = NODE_COUNT_BY_LEVEL(level);
  const rings = RINGS(level);
  const sequence = contextDistribution(attention, keys);
  return Array.from({ length: total }, (_, i) => ({
    id: `n${i}`,
    group: sequence[i % sequence.length],
    orbit: 1 + Math.floor((i / total) * rings),
    baseWeight: Math.random() * 0.6 + 0.2,
  }));
}

function makeLinks(nodes: MiniNode[], attention: AttentionMap, level: number, active: ContextKey): MiniLink[] {
  const activeWeight = attention[active] ?? 0;
  return nodes.map((n) => {
    const focusWeight = attention[n.group] ?? 0;
    const same = n.group === active;
    const base = same ? 0.7 : 0.25 + 0.1 * focusWeight;
    const proximity = 1 - (n.orbit - 1) / Math.max(1, RINGS(level) - 1);
    const weight = Math.max(0.05, base * 0.5 + proximity * 0.5) * (0.7 + 0.45 * Math.random());
    const attentionBoost = 0.15 * focusWeight + 0.2 * activeWeight;
    return { source: "self", target: n.id, weight: weight + attentionBoost * 0.05 };
  });
}

function HumanFigure({
  size = 70,
  head = "#ffd166",
  body = "#ffd166",
  glow = 0.5,
  torsoScale = 1,
}: {
  size?: number;
  head?: string;
  body?: string;
  glow?: number;
  torsoScale?: number;
}) {
  const torsoH = 18 * lerp(0.75, 1.35, clamp01(torsoScale));
  const torsoY = 22 - (torsoH - 18) / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="avatar">
      <defs>
        <filter id="avglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={2 + glow * 3} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#avglow)">
        <circle cx="24" cy="14" r="9" fill={head} />
        <rect x="18" y={torsoY} width="12" height={torsoH} rx="4" fill={body} />
        <rect x="10" y="24" width="10" height="3" rx="1.5" transform="rotate(25, 15, 25.5)" fill={body} />
        <rect x="28" y="24" width="10" height="3" rx="1.5" transform="rotate(-25, 33, 25.5)" fill={body} />
      </g>
    </svg>
  );
}

function haloVisual() {
  return (
    <div className="hat halo">
      <span className="hat-label">Zen Angel</span>
    </div>
  );
}

function hornVisual() {
  return (
    <div className="hat horns">
      <span />
      <span />
      <span className="hat-label">Deviant Nave</span>
    </div>
  );
}

function handsVisual() {
  return (
    <div className="hat hands">
      <span />
      <span />
      <span className="hat-label">Myopic Tool</span>
    </div>
  );
}

function triangleWeights(t_p: number, t_l: number, spread: number) {
  const angel = t_p * t_l * (0.6 + 0.4 * spread) + 1e-3;
  const tool = t_p * (1 - t_l) * (0.8 - 0.5 * spread) + 1e-3;
  const nave = (1 - t_p) * (1 - t_l) * (0.7 + 0.3 * spread) + 1e-3;
  const sum = angel + tool + nave || 1;
  return { a: angel / sum, b: tool / sum, c: nave / sum };
}

function spreadFromAttention(attention: AttentionMap, keys: ContextKey[]) {
  const values = keys.map((key) => Math.max(0, attention[key] ?? 0));
  const total = values.reduce((sum, v) => sum + v, 0);
  if (!total) return 0;
  const entropy = -values
    .map((v) => (v ? (v / total) * Math.log(v / total) : 0))
    .reduce((sum, v) => sum + v, 0);
  const maxEntropy = Math.log(values.length || 1);
  return clamp01(maxEntropy ? entropy / maxEntropy : 0);
}

export default function IdentityNavigator() {
  const [level, setLevel] = useState<number>(8);
  const [precision, setPrecision] = useState<number>(0.55);
  const [attention, setAttention] = useState<AttentionMap>(ATTENTION_DEFAULT);
  const [myopia, setMyopia] = useState<boolean>(false);
  const [savedAttention, setSavedAttention] = useState<AttentionMap | null>(null);
  const [focusKey, setFocusKey] = useState<ContextKey>("family");

  const contextKeys = useMemo(() => CONTEXTS.map((ctx) => ctx.key), []);

  const active = useMemo(() => {
    let bestKey: ContextKey = focusKey;
    let bestValue = -Infinity;
    contextKeys.forEach((key) => {
      const value = attention[key] ?? 0;
      if (value > bestValue || (value === bestValue && key === focusKey)) {
        bestValue = value;
        bestKey = key;
      }
    });
    return bestKey;
  }, [attention, contextKeys, focusKey]);

  const nodes = useMemo(() => makeNodes(level, attention, contextKeys), [level, attention, contextKeys]);
  const links = useMemo(() => makeLinks(nodes, attention, level, active), [nodes, attention, level, active]);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 620;
  const height = 360;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const defs = svg.append("defs");
    const glow = defs.append("filter").attr("id", "glow");
    glow.append("feGaussianBlur").attr("stdDeviation", 3.6).attr("result", "coloredBlur");
    const merge = glow.append("feMerge");
    merge.append("feMergeNode").attr("in", "coloredBlur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    type SimNode = d3.SimulationNodeDatum & MiniNode & { isSelf?: boolean };
    const simNodes: SimNode[] = [{ id: "self", group: active, orbit: 0, baseWeight: 1, isSelf: true }, ...nodes];
    const simLinks = links.map((l) => ({ ...l })) as any[];

    const simulation = d3
      .forceSimulation(simNodes as any)
      .force("link", d3.forceLink(simLinks).id((d: any) => d.id).strength((d: any) => d.weight * 0.8))
      .force("charge", d3.forceManyBody().strength((d: any) => (d.isSelf ? -180 : -35)))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(16))
      .stop();

    for (let i = 0; i < 200; i += 1) simulation.tick();

    const link = svg
      .append("g")
      .attr("stroke-linecap", "round")
      .selectAll("line")
      .data(simLinks)
      .enter()
      .append("line")
      .attr("stroke", (d: any) => `rgba(255,140,66,${0.25 + 0.5 * d.weight})`)
      .attr("stroke-width", (d: any) => 0.6 + d.weight * 2);

    const node = svg
      .append("g")
      .selectAll("g")
      .data(simNodes)
      .enter()
      .append("g")
      .attr("transform", (d: any) => `translate(${d.x},${d.y})`);

    node
      .append("circle")
      .attr("r", (d: any) => (d.isSelf ? 34 : 9))
      .attr("fill", (d: any) => {
        if (d.isSelf) return "#ffd166";
        const focusWeight = attention[d.group] ?? 0;
        const mixBase = d.baseWeight;
        const mix = lerp(mixBase, (mixBase + focusWeight / 3) / 2, precision);
        return d3.interpolateRgb("#5aa0ff", CONTEXTS.find((ctx) => ctx.key === d.group)?.color || "#ffd166")(clamp01(mix));
      })
      .attr("stroke", (d: any) => (d.isSelf ? "#ffb703" : "rgba(255,255,255,.22)"))
      .attr("stroke-width", (d: any) => (d.isSelf ? 2.5 : 1))
      .style("filter", (d: any) => (d.isSelf ? "url(#glow)" : "none"))
      .append("title")
      .text((d: any) => (d.isSelf ? "Target agent" : `${d.group} • orbit ${d.orbit}`));

    node
      .filter((d: any) => !d.isSelf)
      .append("text")
      .attr("y", 4)
      .attr("text-anchor", "middle")
      .attr("fill", "#f7f4f2")
      .attr("font-size", 12)
      .text((d: any) => CONTEXTS.find((ctx) => ctx.key === d.group)?.icon ?? "•");

    link
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y);
  }, [nodes, links, level, precision, attention, active]);

  const t_p = clamp01(precision);
  const t_l = clamp01((level - 1) / 29);
  const spread = spreadFromAttention(attention, contextKeys);
  const triWeights = triangleWeights(t_p, t_l, myopia ? 0 : spread);
  const lassoLoops = Math.max(1, Math.min(6, Math.round(level / 5)));
  const lassoBaseWidth = Math.max(1.2, 4.6 * precision - lassoLoops * 0.35);

  const archetypes = useMemo(() => {
    return (
      [
        { key: "angel", label: "Zen Angel", weight: triWeights.a },
        { key: "tool", label: "Myopic Tool", weight: triWeights.b },
        { key: "nave", label: "Deviant Nave", weight: triWeights.c },
      ] as const
    ).sort((a, b) => b.weight - a.weight);
  }, [triWeights]);

  const topArchetype = archetypes[0];

  const handleAttentionChange = (key: ContextKey, value: number) => {
    setAttention((prev) => {
      const next: AttentionMap = { ...prev };
      if (myopia) {
        contextKeys.forEach((ctx) => {
          next[ctx] = ctx === key ? value : 0;
        });
      } else {
        next[key] = value;
      }
      return next;
    });
    if (value > 0) setFocusKey(key);
  };

  const toggleMyopia = (checked: boolean) => {
    if (checked) {
      setSavedAttention(attention);
      const target = focusKey;
      const next: AttentionMap = {} as AttentionMap;
      contextKeys.forEach((ctx) => {
        next[ctx] = ctx === target ? 3 : 0;
      });
      setAttention(next);
    } else {
      setAttention(savedAttention ?? ATTENTION_DEFAULT);
      setSavedAttention(null);
    }
    setMyopia(checked);
  };

  return (
    <section className="section" id="identity">
      <h2 className="section-title">Identity Navigator</h2>
      <p className="text-[#bdb5af] max-w-3xl mx-auto mb-6 text-center">
        Adjust Levels and Precision α, then steer attention across S¹ to Sⁿ contexts and watch the
        avatar swap between halo, horns, or worry hands as the trade off shifts.
      </p>

      <div className="grid xl:grid-cols-[minmax(480px,1fr)_360px] gap-6 items-start">
        <div className="pathway-container space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="control-group" style={{ minWidth: 0 }}>
              <label>Levels</label>
              <input
                type="range"
                min={1}
                max={30}
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value, 10))}
              />
              <div className="control-value">{level}</div>
            </div>

            <div className="control-group" style={{ minWidth: 0 }}>
              <label>Precision α</label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={precision}
                onChange={(e) => setPrecision(parseFloat(e.target.value))}
              />
              <div className="control-value">{precision.toFixed(2)}</div>
            </div>

            <div className="control-group" style={{ minWidth: 0 }}>
              <label>Myopia</label>
              <div className="flex items-center gap-2">
                <input
                  id="myopia"
                  type="checkbox"
                  checked={myopia}
                  onChange={(e) => toggleMyopia(e.target.checked)}
                />
                <label htmlFor="myopia" className="text-sm text-[#bdb5af]">
                  Focus one context only
                </label>
              </div>
            </div>
          </div>

          <div className="control-group" style={{ minWidth: 0 }}>
            <label>Presets</label>
            <div className="flex gap-2 flex-wrap">
              <button
                className="pill"
                onClick={() => {
                  setAttention({ family: 3, professional: 2, public: 2, misc1: 1, misc2: 1, misc3: 1 });
                  setPrecision(0.92);
                  setLevel(28);
                  setFocusKey("family");
                  setMyopia(false);
                  setSavedAttention(null);
                }}
              >
                🜂 Zen Angel
              </button>
              <button
                className="pill"
                onClick={() => {
                  setAttention({ family: 0, professional: 3, public: 0, misc1: 0, misc2: 0, misc3: 0 });
                  setPrecision(0.93);
                  setLevel(5);
                  setFocusKey("professional");
                  setMyopia(true);
                  setSavedAttention({ family: 3, professional: 2, public: 2, misc1: 1, misc2: 1, misc3: 1 });
                }}
              >
                🛠️ Myopic Tool
              </button>
              <button
                className="pill"
                onClick={() => {
                  setAttention({ family: 1, professional: 1, public: 1, misc1: 3, misc2: 3, misc3: 3 });
                  setPrecision(0.18);
                  setLevel(4);
                  setFocusKey("misc1");
                  setMyopia(false);
                  setSavedAttention(null);
                }}
              >
                🜃 Deviant Nave
              </button>
            </div>
          </div>

          <details className="simulation-controls" open style={{ padding: "0.75rem", gap: "0.75rem" }}>
            <summary className="text-sm uppercase tracking-[0.25em] text-[var(--accentSoft)] cursor-pointer">
              Active attention by context
            </summary>
            <div className="space-y-3 pt-3">
              {CONTEXTS.map((ctx) => {
                const value = attention[ctx.key] ?? 0;
                return (
                  <div
                    key={ctx.key}
                    className={`rounded-lg border border-white/10 px-3 py-2 ${ctx.key === active ? "bg-black/30" : "bg-black/10"}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-sm text-[#f7f4f2]">
                        <span aria-hidden>{ctx.icon}</span>
                        {ctx.label}
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3].map((n) => (
                          <button
                            key={n}
                            className={`attention-button ${value === n ? "attention-button--active" : ""}`}
                            onClick={() => handleAttentionChange(ctx.key, n)}
                            type="button"
                          >
                            {n}
                          </button>
                        ))}
                        {value === 0 && <span className="text-xs text-[#bdb5af]">0</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-[#bdb5af] pt-2">
              S¹ keeps ego and intimacy, S² holds the tight circle of trust, S³ covers shibboleth and signal,
              and Sⁿ collects the miscellaneous settings you are still mapping.
            </div>
          </details>

          <div className="rounded-xl overflow-hidden border border-orange-300/25" style={{ maxHeight: 380 }}>
            <svg ref={svgRef} width="100%" height={height} viewBox={`0 0 ${width} ${height}`} />
          </div>
        </div>

        <aside className="pathway-container" style={{ background: "rgba(15,15,20,.85)" }}>
          <h3 className="text-lg font-semibold text-[color:var(--accent)] mb-3">Avatar signal</h3>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {(topArchetype.key === "angel" && haloVisual()) ||
                (topArchetype.key === "nave" && hornVisual()) ||
                (topArchetype.key === "tool" && handsVisual())}
              <svg viewBox="0 0 120 120" className="absolute inset-0" aria-hidden>
                {Array.from({ length: lassoLoops }).map((_, idx) => {
                  const radius = 32 + idx * 8;
                  const width = Math.max(0.9, lassoBaseWidth - idx * 0.3);
                  const opacity = Math.max(0.2, 0.8 - idx * 0.1);
                  return (
                    <circle
                      key={`lasso-${idx}`}
                      cx={60}
                      cy={60}
                      r={radius}
                      fill="none"
                      stroke={`rgba(255,176,140,${opacity.toFixed(2)})`}
                      strokeWidth={width}
                      strokeDasharray={idx % 2 === 0 ? "14 6" : "6 10"}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              <div
                className="absolute inset-0 rounded-full border border-[color:var(--accent)]/35"
                style={{ opacity: precision * 0.75 }}
                aria-hidden
              />
              <HumanFigure glow={precision} torsoScale={(level - 1) / 29} head="#ffd166" body="#ffd166" />
              <div className="absolute -bottom-2 right-2 text-2xl" title="Attention focus">
                {CONTEXTS.find((c) => c.key === active)?.icon}
              </div>
            </div>

            <div className="w-full space-y-2">
              {LOADOUT.map((item) => {
                const live = item.contexts.some((ctx) => (attention[ctx] ?? 0) > 0);
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 ${
                      live ? "bg-[color:var(--accent)]/20" : "bg-white/5"
                    }`}
                  >
                    <span className="text-lg" aria-hidden>{item.icon}</span>
                    <div className="text-sm text-[#f7f4f2] flex-1 ml-2">{item.label}</div>
                    <span className="text-xs text-[#bdb5af]">{live ? "equipped" : "stored"}</span>
                  </div>
                );
              })}
            </div>

            <div className="w-full text-sm text-[#bdb5af] space-y-1">
              <div>Leading mode: <strong>{topArchetype.label}</strong> · {(topArchetype.weight * 100).toFixed(0)}%</div>
              <div>
                Angel {(triWeights.a * 100).toFixed(0)}% · Tool {(triWeights.b * 100).toFixed(0)}% · Nave {(triWeights.c * 100).toFixed(0)}%
              </div>
              <div>Precision α: <strong>{precision.toFixed(2)}</strong></div>
              <div>Levels: <strong>{level}</strong></div>
              <div>Myopia: <strong>{myopia ? "on" : "off"}</strong></div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
