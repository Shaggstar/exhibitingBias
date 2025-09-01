import matter from "gray-matter";

// Grab ALL markdown files under /src/content/** as raw text:
const files = import.meta.glob("../content/**/*.{md,markdown,mdx}", {
  as: "raw",
  eager: true,
});

function slugFromPath(path) {
  // "../content/poetry/blood-of-the-sun.md" -> "poetry/blood-of-the-sun"
  return path.replace("../content/", "").replace(/\.(md|markdown|mdx)$/i, "");
}

export function getMarkdownIndex() {
  // Returns array of { slug, section, raw, content, data: {title,kind,summary,date}, path, title }
  return Object.entries(files)
    .map(([path, raw]) => {
      const { content, data } = matter(raw || "");
      const slug = slugFromPath(path);
      const [section, file] = slug.split("/");
      const title = data.title || file.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
      const kind = data.kind || (section === "poetry" ? "Draft" : "Note");
      const summary = data.summary || "";
      const date = data.date || "";
      return {
        path,
        slug,
        section,
        raw,
        content,
        data: { ...data, title, kind, summary, date },
        title,
      };
    })
    .sort((a, b) => (b.data.date || "").localeCompare(a.data.date || ""));
}

export function filterBySection(index, section) {
  return index.filter((item) => item.section === section);
}
