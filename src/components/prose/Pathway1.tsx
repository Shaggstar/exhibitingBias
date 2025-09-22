import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import md from "./pathway-1-evolution.md?raw";

export default function Pathway1() {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
    </article>
  );
}
