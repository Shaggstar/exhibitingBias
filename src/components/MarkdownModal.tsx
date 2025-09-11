import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownModal({ open, onClose, item, accent = "#FF6A3D" }) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 md:p-8" onClick={onClose}>
      <div
        className="mx-auto max-w-3xl bg-[color:var(--surface)] border border-white/10 rounded-2xl p-5 md:p-8 overflow-y-auto"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-serif text-2xl text-[color:var(--text)]">{item.data.title}</h3>
            {item.data.summary && <p className="text-sm text-[color:var(--subtext)] mt-1">{item.data.summary}</p>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Close"
          >
            Close
          </button>
        </div>
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} style={{ color: accent, textDecoration: "underline" }} />
              ),
              h2: ({ node, ...props }) => <h2 {...props} style={{ color: "var(--text)" }} />,
            }}
          >
            {item.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
