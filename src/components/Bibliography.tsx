
import React from "react";
import { BIB_ENTRIES } from "../data/bibliography";

export default function Bibliography() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section id="bibliography" className="section">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="section-title sm:mb-0">Bibliography</h2>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#FF6A3D55] px-4 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
            aria-expanded={expanded}
            aria-controls="bibliography-list"
          >
            {expanded ? "Hide bibliography" : "Expand bibliography"}
          </button>
        </div>

        {expanded && (
          <ol
            id="bibliography-list"
            className="space-y-3 list-decimal pl-6 text-[var(--subtext)]"
          >
            {BIB_ENTRIES.map((entry, idx) => (
              <li key={idx}>
                <span className="text-[color:var(--text)]">{entry.citation}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
