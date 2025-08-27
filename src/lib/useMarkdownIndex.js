// Simple frontmatter parser for browser environment
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { content: content.trim(), data: {} };
  }
  
  const [, frontmatter, markdown] = match;
  const data = {};
  
  // Parse YAML-like frontmatter
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      // Remove quotes if present
      data[key] = value.replace(/^["']|["']$/g, '');
    }
  });
  
  return { content: markdown.trim(), data };
}

// Auto-import ALL .md files as raw text
const files = import.meta.glob("../content/**/*.{md,markdown,mdx}", {
  query: '?raw',
  import: 'default',
  eager: true,
});

function slugFromPath(path) {
  // e.g. "../content/poetry/blood-of-the-sun.md" → "poetry/blood-of-the-sun"
  return path.replace("../content/", "").replace(/\.(md|markdown|mdx)$/i, "");
}

export function getMarkdownIndex() {
  // Returns an array of { slug, raw, content, data(frontmatter), section }
  return Object.entries(files).map(([path, raw]) => {
    const { content, data } = parseFrontmatter(raw ?? "");
    const slug = slugFromPath(path);
    const [section, file] = slug.split("/");
    // derive a title if not provided
    const title = data.title || file.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
    const kind = data.kind || (section === "poetry" ? "Draft" : "Note");
    const summary = data.summary || "";
    const date = data.date || "";
    return { slug, section, raw, content, data: { ...data, title, kind, summary, date } };
  }).sort((a, b) => (b.data.date || "").localeCompare(a.data.date || ""));
}

export function filterBySection(index, section) {
  return index.filter((item) => item.section === section);
}
