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
