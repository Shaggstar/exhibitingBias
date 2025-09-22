import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import md from "./pathway-3-multiple-nulls.md?raw";

export default function Pathway3() {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
    </article>
  );
}
