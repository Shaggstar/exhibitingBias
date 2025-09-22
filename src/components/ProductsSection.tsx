import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import productsRaw from "../content/site/products.md?raw";

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

const { content, data } = parseFrontmatter(productsRaw);
const title = data.title || "Products";

export default function ProductsSection() {
  return (
    <section id="products" className="section">
      <h2 className="section-title">{title}</h2>
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/25 p-6 text-[var(--subtext)]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="mt-6 text-2xl font-semibold text-[var(--text)]" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="mt-6 text-xl font-semibold text-[var(--text)]" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="mt-6 text-lg font-semibold text-[var(--text)]" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mt-4 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="mt-4 list-disc space-y-2 pl-6" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="mt-4 list-decimal space-y-2 pl-6" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="mt-4 border-l-4 border-[var(--accent)]/35 pl-4 italic" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-[var(--accent)] underline underline-offset-4" {...props} />
            )
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
