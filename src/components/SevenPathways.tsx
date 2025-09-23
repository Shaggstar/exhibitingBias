import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import MermaidChart from "./MermaidChart";

import pathway1 from "./prose/pathway-1-evolution.md?raw";
import pathway2 from "./prose/pathway-2-semantics.md?raw";
import pathway3 from "./prose/pathway-3-multiple-nulls.md?raw";
import pathway4 from "./prose/pathway-4-narratives.md?raw";
import pathway5 from "./prose/pathway-5-ai-to-tms.md?raw";
import pathway6 from "./prose/pathway-6-dual-modes.md?raw";
import pathway7 from "./prose/pathway-7-simulations.md?raw";

type PathwayChart = {
  id: string;
  title: string;
  markdown: string;
  chart: string;
  tooltips: Record<string, string>;
  hint: string;
};

const PATHWAYS: PathwayChart[] = [
  {
    id: "p-evolution",
    title: "1. Evolution of Identity",
    markdown: pathway1,
    chart: `graph TD\n  Accent["Accent / Shibboleth"] --> Morality["Innate Morality"]\n  Morality --> Culture["Cultural Learning"]\n  Culture --> Governance["Institutions / Governance"]\n  Governance -.-> Culture`,
    tooltips: {
      "Accent / Shibboleth": "Accent bias and shibboleth markers seed group identity.",
      "Innate Morality": "Early moral intuitions stabilize cooperation.",
      "Cultural Learning": "Culture scales shared learning beyond direct contact.",
      "Institutions / Governance": "Institutions coordinate moral and cultural expectations."
    },
    hint: "Evolutionary chain from shibboleth to governance."
  },
  {
    id: "p-semantics",
    title: "2. Semantics: From Cells to Prison Cells",
    markdown: pathway2,
    chart: `graph LR\n  Bio["Biological Meaning"] --> Synchrony["Synchrony"]\n  Synchrony --> Ground["Common Ground"]\n  Ground --> Narrative["Narrative Paradigm"]`,
    tooltips: {
      "Biological Meaning": "Cells manage information through meaningful steady states.",
      "Synchrony": "Shared generative models let us move in synchrony.",
      "Common Ground": "Common ground anchors symbols in a community.",
      "Narrative Paradigm": "Narrative paradigms keep semantic alignment alive."
    },
    hint: "Biological meaning scaffolds cultural narratives."
  },
  {
    id: "p-multiple-nulls",
    title: "3. Multiple Null Hypotheses",
    markdown: pathway3,
    chart: `flowchart LR\n  Null[["Null Hypothesis"]] -->|assumes| Econ["Homo Economicus"]\n  Null --> Gene["Selfish Gene"]\n  Null --> Eq["Single Equilibrium"]\n  Null --> Binary["Structuralism / Binary Opposition"]\n  Binary --> Derrida["Transcendental Signified (WEIRD)"]\n  Econ --> Firms["Firms + 'We' identity"]\n  Econ --> NarrativeSum["Narrative / Scenario Analysis"]\n  Econ --> Coop["Morality = Cooperation"]\n  Gene --> Rel["Biological Relativity"]\n  Eq --> Steady["Non-equilibrium Steady States"]\n  Gene --> Emotion["Emotion as Intervening State"]\n  Emotion --> FeltSelf["Affect → Felt Self"]\n  Binary --> Diff["Différance"]`,
    tooltips: {
      "Null Hypothesis": "Reductionist baselines that over simplify behaviour.",
      "Homo Economicus": "Assumes isolated rational actors.",
      "Selfish Gene": "Frames evolution as lone competition.",
      "Single Equilibrium": "Treats systems as static.",
      "Structuralism / Binary Opposition": "Structuralism constructs meaning through opposing pairs.",
      "Transcendental Signified (WEIRD)": "Derrida critiques a single universal anchor of meaning.",
      "Firms + 'We' identity": "Collective identities emerge even inside firms.",
      "Narrative / Scenario Analysis": "Narrative frames illuminate choices under radical uncertainty.",
      "Morality = Cooperation": "Morality solves recurring cooperation problems (Curry).",
      "Biological Relativity": "Causation flows across biological scales.",
      "Non-equilibrium Steady States": "Keeps organisms adaptive in changing niches.",
      "Emotion as Intervening State": "Internal states flex stimulus-response links.",
      "Affect → Felt Self": "Feelings knit disparate processes into a coherent self.",
      "Différance": "Meaning arises through differences—not fixed binaries."
    },
    hint: "Reductionist baselines challenged by multi-level constraints."
  },
  {
    id: "p-narratives",
    title: "4. Narratives as Shared Reference Frames",
    markdown: pathway4,
    chart: `graph LR\n  Mythic["Mythic Roles"] --> Cosmic["Cosmic Self / Archetypes"]\n  Cosmic --> Selves["Multiplicity of Selves"]\n  Selves --> ModernNarrative["Modern Cultural Narratives"]\n  ModernNarrative --> LivingArchive["Living Archive"]`,
    tooltips: {
      "Mythic Roles": "Mythic roles give timeless scaffolds for identity.",
      "Cosmic Self / Archetypes": "Archetypes stretch the self across time.",
      "Multiplicity of Selves": "Maps the many masks we carry.",
      "Modern Cultural Narratives": "Remix these archetypes in contemporary culture.",
      "Living Archive": "Keeps shared memory in motion."
    },
    hint: "Narratives bind roles across epochs."
  },
  {
    id: "p-tms",
    title: "5. Active Inference toward Shared Selection",
    markdown: pathway5,
    chart: `graph TD\n  SharedModels["Shared Generative Models"] --> LightCone["Computational Self"]\n  LightCone --> Depth["Epistemic Depth"]\n  Depth --> Alpha["α: Cultural Precision"]\n  Alpha --> SharedSelection["Transcendent Selection"]`,
    tooltips: {
      "Shared Generative Models": "Coordination begins with shared generative models.",
      "Computational Self": "The self keeps histories and futures aligned.",
      "Epistemic Depth": "Plans stretch through time.",
      "α: Cultural Precision": "Cultural precision α tunes which scripts we privilege.",
      "Transcendent Selection": "Balances identities across contexts."
    },
    hint: "Active inference extended to social selection."
  },
  {
    id: "p-dual",
    title: "6. Dual Modes of Attention",
    markdown: pathway6,
    chart: `graph LR\n  Analytic["Analytic"] --- Balance["Quality"] --- Gestalt["Gestalt"]\n  Balance --> FourFold["Fourfold Vision"]`,
    tooltips: {
      "Analytic": "Parses parts and procedures.",
      "Quality": "Holds the tension between modes.",
      "Gestalt": "Sees wholes and vibes.",
      "Fourfold Vision": "Keeps analytic and poetic modes in duet."
    },
    hint: "Analytic and gestalt jointly stabilize model choice."
  },
  {
    id: "p-simulations",
    title: "7. Simulations",
    markdown: pathway7,
    chart: `graph TD\n  Levels["s¹ / s² / s³ / sᴸ"] --> States["States & Observations"]\n  States --> AlphaSim["α-weighted Policies"]\n  AlphaSim --> Outcomes["Roles, Symbols, Alignment"]\n  Outcomes --> Future["Hypotheses & Roadmap"]`,
    tooltips: {
      "s¹ / s² / s³ / sᴸ": "Multi level generative models set the playground.",
      "States & Observations": "Defines what agents can sense.",
      "α-weighted Policies": "Policies weight α to choose cultural commitments.",
      "Roles, Symbols, Alignment": "Reveals emerging alignment outcomes.",
      "Hypotheses & Roadmap": "Steers experiments forward."
    },
    hint: "Multi-level active inference experiments."
  }
];

const markdownComponents: Components = {
  p: ({ node, ...props }) => (
    <p className="mt-4 first:mt-0 text-[var(--subtext)] leading-relaxed" {...props} />
  ),
  strong: ({ node, ...props }) => <strong className="text-[var(--text)]" {...props} />,
  em: ({ node, ...props }) => <em className="text-[var(--accentSoft)]" {...props} />,
  ul: ({ node, ...props }) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-6 text-[var(--subtext)] leading-relaxed marker:text-[var(--accentSoft)]"
      {...props}
    />
  ),
  ol: ({ node, ...props }) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-[var(--subtext)] leading-relaxed marker:text-[var(--accentSoft)]"
      {...props}
    />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="mt-4 border-l-4 border-[var(--accent)]/35 pl-4 text-[var(--subtext)] italic"
      {...props}
    />
  ),
  a: ({ node, ...props }) => (
    <a className="text-[var(--accent)] underline underline-offset-4" {...props} />
  )
};

const paragraphSplit = /\n\s*\n/;

function buildExcerpt(markdown: string, take = 2) {
  const parts = markdown.trim().split(paragraphSplit);
  return parts.slice(0, take).join("\n\n");
}

function PathwaySection({ id, title, markdown, chart, hint, tooltips }: PathwayChart) {
  const [expanded, setExpanded] = React.useState(false);
  const excerpt = React.useMemo(() => buildExcerpt(markdown), [markdown]);
  const showToggle = excerpt.length < markdown.trim().length;
  const content = expanded || !showToggle ? markdown : excerpt;

  return (
    <section key={id} id={id} className="space-y-6" title={hint}>
      <header className="space-y-2">
        <h3 className="text-2xl font-semibold text-[var(--text)]">{title}</h3>
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accentSoft)]">{hint}</p>
      </header>

      <article className="rounded-2xl border border-white/10 bg-black/25 p-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {content}
        </ReactMarkdown>
        {showToggle && (
          <div className="mt-6">
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D55] px-4 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
            >
              {expanded ? "Show less" : "Expand overview"}
            </button>
          </div>
        )}
      </article>

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <MermaidChart code={chart} tooltips={tooltips} />
      </div>
    </section>
  );
}

export default function SevenPathways() {
  return (
    <div className="space-y-24">
      {PATHWAYS.map(pathway => (
        <PathwaySection key={pathway.id} {...pathway} />
      ))}
    </div>
  );
}
