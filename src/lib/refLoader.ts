<<<<<<< HEAD
export type RefEntry = {
  id: string;
  label: string;
  researchers?: string;
  hover?: string; // quote / summary
  cite?: string; // citation string
  link?: string; // optional url
  axis?: string;
  group?: string;
};

export function parseReferencesMD(md: string): RefEntry[] {
  const blocks = md.split(/\n---\s*\n/).map((s) => s.trim()).filter(Boolean);
  const entries: RefEntry[] = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const obj: Record<string, string> = {};

    for (const line of lines) {
      const match = line.match(/^([a-zA-Z_]+)\s*:\s*(.*)$/);
      if (!match) continue;
      const key = match[1].trim();
      let value = match[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      obj[key] = value;
    }

    if (obj.id && obj.label) {
      entries.push(obj as RefEntry);
    }
  }

  return entries;
}
=======
// src/lib/refLoader.ts
export type RefNode = {
    id: string; label: string; researchers?: string;
    hover?: string; cite?: string; link?: string;
    axis?: "Accent"|"Morality"|"Culture"|"Governance"; group?: string;
  };
  
  export async function loadReferences(): Promise<RefNode[]> {
    const res = await fetch("/src/data/references.md");
    const md = await res.text();
  
    // Split on lines that contain only ---
    const blocks = md.split(/\n---\s*\n/).map(s => s.trim()).filter(Boolean);
  
    const items: RefNode[] = [];
    for (const b of blocks) {
      // Each block should be simple YAML-like key: value pairs
      const obj: any = {};
      b.split(/\n/).forEach(line => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (!m) return;
        const k = m[1].trim();
        let v = m[2].trim();
        // strip surrounding quotes if present
        v = v.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
        obj[k] = v;
      });
      if (obj.id && obj.label) items.push(obj as RefNode);
    }
    return items;
  }
  
>>>>>>> d7a1c7216b4ad06f253d0460a60ce8f224b65cdd
