// Simple markdown loader that manually imports files
// Simple frontmatter parser for browser compatibility
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return { content: content.trim(), data: {} };
  
  const [, frontmatter, body] = match;
  const data = {};
  
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      data[key] = value.replace(/^["']|["']$/g, '');
    }
  });
  
  return { content: body.trim(), data };
}

// Manual imports for each markdown file
const markdownFiles = {
  // Essays
  "essays/Activating the Cultural Perspective": () => import("../content/essays/Activating the Cultural Perspective.md?raw"),
  "essays/Finding Our Place in the Age of Robot Gods": () => import("../content/essays/Finding Our Place in the Age of Robot Gods.md?raw"),
  "essays/From Bias to Symbols to Natively Aligned AGI": () => import("../content/essays/From Bias to Symbols to Natively Aligned AGI.md?raw"),
  "essays/Moral Case for building AGI with Morality": () => import("../content/essays/Moral Case for building AGI with Morality.md?raw"),
  "essays/Thoughts for my Penny": () => import("../content/essays/Thoughts for my Penny.md?raw"),
  
  // Poetry
  "poetry/2.0 } the Sequel we Deserve": () => import("../content/poetry/2.0 } the Sequel we Deserve.md?raw"),
  "poetry/Blood of the Sun": () => import("../content/poetry/Blood of the Sun.md?raw"),
  "poetry/Hospice Humor": () => import("../content/poetry/Hospice Humor.md?raw"),
  "poetry/Life Sequel": () => import("../content/poetry/Life Sequel.md?raw"),
  "poetry/The Old Tavern Sport": () => import("../content/poetry/The Old Tavern Sport.md?raw"),
  "poetry/Tie Raid": () => import("../content/poetry/Tie Raid.md?raw"),
};

export async function getMarkdownIndex() {
  const results = [];
  
  for (const [slug, importFn] of Object.entries(markdownFiles)) {
    try {
      const raw = await importFn();
      const contentString = raw.default || raw;
      const { content, data } = parseFrontmatter(contentString);
      const [section, file] = slug.split("/");
      const title = data.title || file.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
      const kind = data.kind || (section === "poetry" ? "Draft" : "Note");
      const summary = data.summary || "";
      const date = data.date || "";
      
      const item = {
        path: slug,
        slug,
        section,
        raw,
        content,
        data: { ...data, title, kind, summary, date },
        title,
      };
      
      results.push(item);
    } catch (error) {
      console.error(`Error loading ${slug}:`, error);
    }
  }
  
  return results.sort((a, b) => (b.data.date || "").localeCompare(a.data.date || ""));
}

export function filterBySection(index, section) {
  return index.filter((item) => item.section === section);
}
