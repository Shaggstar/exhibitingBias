import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import md from "./pathway-4-narratives.md?raw";

export default function Pathway4() {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
    </article>
  );
}
