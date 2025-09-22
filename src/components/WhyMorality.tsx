// src/components/WhyMorality.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import agiConnectionRaw from "../content/site/agi-connection.md?raw";
import whyMoralityRaw from "../content/site/why morality.md?raw";

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

const { content: WHY_CONTENT } = parseFrontmatter(whyMoralityRaw);
const { content: AGI_CONTENT, data: agiMeta } = parseFrontmatter(agiConnectionRaw);
const PARAGRAPH_SPLIT = /\n\s*\n/;

const whyParagraphs = WHY_CONTENT.split(PARAGRAPH_SPLIT).filter((block) => block.trim().length > 0);
const WHY_PREVIEW_COUNT = 1;
const WHY_PREVIEW = whyParagraphs.slice(0, WHY_PREVIEW_COUNT).join("\n\n");
const WHY_REMAINDER = whyParagraphs.slice(WHY_PREVIEW_COUNT).join("\n\n");

const agiParagraphs = AGI_CONTENT.split(PARAGRAPH_SPLIT).filter((block) => block.trim().length > 0);
const AGI_PREVIEW_COUNT = 3;
const AGI_PREVIEW = agiParagraphs.slice(0, AGI_PREVIEW_COUNT).join("\n\n");
const AGI_REMAINDER = agiParagraphs.slice(AGI_PREVIEW_COUNT).join("\n\n");

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h3 className="mt-6 text-2xl font-semibold text-[var(--text)]" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h4 className="mt-6 text-xl font-semibold text-[var(--text)]" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h5 className="mt-6 text-lg font-semibold text-[var(--text)]" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="leading-relaxed" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-[var(--accent)]/35 pl-4 italic text-[var(--subtext)]" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a className="text-[var(--accent)] underline underline-offset-4" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="ml-6 list-disc space-y-2 text-[var(--subtext)]" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="ml-6 list-decimal space-y-2 text-[var(--subtext)]" {...props} />
  )
};

export default function WhyMorality() {
  const [showFoundations, setShowFoundations] = React.useState(false);
  const [showAgiConnection, setShowAgiConnection] = React.useState(false);

  return (
    <section id="why" className="section">
      <h2 className="section-title">an algorithm for morality??</h2>
      <p className="tagline"> ¯\\_(ツ)_/¯</p>
      <div className="mx-auto max-w-3xl space-y-10 text-lg leading-relaxed text-[var(--subtext)]">
        <article className="space-y-4">
          <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-[var(--accentSoft)]">
            Moral Cognition → Symbols
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {WHY_PREVIEW}
          </ReactMarkdown>
          {showFoundations && WHY_REMAINDER && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {WHY_REMAINDER}
            </ReactMarkdown>
          )}
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
          <h3>{agiMeta.title ?? "The AGI Connection"}</h3>
          <div className="space-y-4 text-[var(--subtext)]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {AGI_PREVIEW}
            </ReactMarkdown>
            {showAgiConnection && AGI_REMAINDER && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {AGI_REMAINDER}
              </ReactMarkdown>
            )}
            {AGI_REMAINDER && (
              <div className="pt-2">
                <button
                  onClick={() => setShowAgiConnection((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D55] px-4 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
                >
                  {showAgiConnection ? "Show less from the AGI connection" : "Expand the AGI connection"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
