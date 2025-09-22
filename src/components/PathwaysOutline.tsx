import React from "react";
import type { RefEntry } from "../lib/refLoader";

export default function PathwaysOutline({
  items,
  selectedId,
  setSelectedId,
}: {
  items: RefEntry[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}) {
  return (
    <div className="grid md:grid-cols-[1fr,2fr] gap-6">
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition ${
              selectedId === item.id ? "bg-[color:var(--accent)]/15" : "bg-black/10"
            }`}
          >
            <div className="text-sm text-[color:var(--text)]">{item.label}</div>
            {item.researchers && (
              <div className="text-xs text-[color:var(--accentSoft)] mt-0.5">{item.researchers}</div>
            )}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 p-4 bg-black/20 min-h-[180px]">
        {selectedId ? (
          (() => {
            const selected = items.find((i) => i.id === selectedId);
            if (!selected) return null;
            return (
              <div>
                <h4 className="text-lg font-serif mb-2">{selected.label}</h4>
                {selected.hover && (
                  <p className="text-sm mb-3 text-[color:var(--text)]">“{selected.hover}”</p>
                )}
                {selected.cite && (
                  <p className="text-xs text-[color:var(--accentSoft)]">— {selected.cite}</p>
                )}
                {selected.link && (
                  <p className="text-xs mt-2">
                    <a
                      className="underline text-[color:var(--accent)]"
                      href={selected.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      source
                    </a>
                  </p>
                )}
              </div>
            );
          })()
        ) : (
          <p className="text-sm text-[color:var(--accentSoft)]">
            Select a node or list item to read the quote and citation.
          </p>
        )}
      </div>
    </div>
  );
}
