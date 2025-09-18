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
  
