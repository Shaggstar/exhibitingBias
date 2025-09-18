// src/components/WhyMorality.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import agiConnectionRaw from "../content/site/agi-connection.md?raw";

function parseFrontmatter(md: string) {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(md);
  if (!match) {
    return { content: md.trim(), data: {} as Record<string, string> };
  }
  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  frontmatter.split(/\n/).forEach(line => {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim().toLowerCase();
      const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });
  return { content: body.trim(), data };
}

const { content: AGI_CONTENT } = parseFrontmatter(agiConnectionRaw);

const FOUNDATIONS_INTRO = `As we race through this age of narrow AI toward generally intelligent systems, it helps to map the nature of human intelligence itself. We need language for how we spin symbols, art, and stories that latch onto nearly any phenomenon. We also need native governance: a way for synthetic agents to care about our interests because they grow inside our moral frame. In some sense this is a new problem; in another it is the oldest human drama, learning how to live with capable strangers.`;

const FOUNDATIONS_EXTENDED = [
  `Morality lets humans scale. We can sit with countless people beyond our intimates and learn from voices we may never meet. It binds strangers, softens the static between the roles we carry, and cues shared expectations for behavior and interpretation. Before we ever played with written symbols we tuned our ears to accents and shibboleths. From accent to custom to culture to institution, symbolic cognition climbs those layers.`,
  `Across development and history, moral intuitions arrive early, stir the emotions that drive social life, and nudge us to rationalize our feelings in ways both ancient and oddly new. They steady expectations when incentives alone would fracture the comfort of prediction. Symbols begin with social valuation. That was our doorway into what the ancient Greeks called the logos, our doorway into the word.`
];

export default function WhyMorality() {
  const [showFoundations, setShowFoundations] = React.useState(false);

  return (
    <section id="why" className="section">
      <h2 className="section-title">The Algorithm of Morality and Human Symbolic and General Intelligence</h2>
      <p className="tagline">But...Why ¯\\_(ツ)_/¯ ??</p>

      <div className="mx-auto max-w-3xl space-y-10 text-lg leading-relaxed text-[var(--subtext)]">
        <article className="space-y-4">
          <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--accentSoft)]">
            Morality is the operating system for symbolic cognition
          </p>
          <p>{FOUNDATIONS_INTRO}</p>
          {showFoundations && FOUNDATIONS_EXTENDED.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pt-2">
            <button
              onClick={() => setShowFoundations((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D55] px-4 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
            >
              {showFoundations ? "Show less context" : "Expand why morality scales symbols"}
            </button>
          </div>
        </article>

        <div className="agi-connection">
          <h3>The AGI Connection</h3>
          <div className="space-y-4 text-[var(--subtext)]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{AGI_CONTENT}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
