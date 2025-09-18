import React from "react";

const proseLinks = [
  {
    title: "Finding Our Place in the Age of Robot Gods",
    href: "https://shaggy.substack.com/p/finding-our-place-in-the-age-of-robot",
  },
  {
    title: "Moral Case for Building AGI with Morality",
    href: "https://shaggy.substack.com/p/case-for-scaling-ai-with-morality",
  },
  {
    title: "Activating the Cultural Perspective",
    href: "https://shaggy.substack.com/p/activating-the-cultural-perspective",
  },
  {
    title: "Thoughts for my Penny (letter for my daughter)",
    href: "https://shaggy.substack.com/p/thoughts-for-my-penny",
  },
];

const poetryLinks = [
  {
    title: "The Old Tavern Sport",
    href: "https://substack.com/@shaggy/note/c-112646238",
  },
  {
    title: "2.0: The Sequel We Deserve",
    href: "https://substack.com/profile/5340479-shaggy/note/c-148055151",
  },
  {
    title: "Blood of the Sun",
    href: "https://substack.com/@shaggy/note/c-148056657",
  },
  {
    title: "Tie Raid",
    href: "https://substack.com/profile/5340479-shaggy/note/c-148059540",
  }
];

const publications = [
  {
    title: "Myth of Objectivity (Frontiers in Sociology)",
    href: "https://www.frontiersin.org/journals/sociology/articles/10.3389/fsoc.2023.1269621/full",
  },
  {
    title: "Transcendental Model Selection Manuscript",
    href: "https://www.dropbox.com/scl/fi/h70bfg0nqsjlrzuh6k4hs/TmS__Frontiers-3.pdf?rlkey=q3624ka2kb8kwzg138az3gsjt&dl=0",
  },
];

const videos = [
  {
    title: "Humanity's Story of an Uncertain Self",
    href: "https://www.youtube.com/watch?v=9v22c92LWHQ",
  },
  {
    title: "Symbolic Cognition + Myth of Objectivity (with Karl Friston)",
    href: "https://www.youtube.com/watch?v=GBDy2BZY97A",
  },
  {
    title: "ActInf GuestStream 061.1",
    href: "https://www.youtube.com/live/vh8Q6Bc-TQA",
  },
];

function LinkList({ title, items }: { title: string; items: { title: string; href: string }[] }) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm uppercase tracking-[0.35em] text-[var(--accentSoft)]">{title}</h4>
      <ul className="space-y-1 text-sm text-[var(--subtext)]">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] hover:text-white transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SubstackShowcase() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 space-y-6">
      <h3 className="text-xl font-semibold text-[var(--text)]">Signal Boost</h3>
      <p className="text-sm text-[var(--subtext)]">
        Essays and notes that expand on the Myth of Objectivity, cultural cognition, and why morality is
        a practical operating system for alignment.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <LinkList title="Prose" items={proseLinks} />
        <LinkList title="Poetry Notes" items={poetryLinks} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <LinkList title="Publications & Manuscripts" items={publications} />
        <LinkList title="Talks & Streams" items={videos} />
      </div>
    </div>
  );
}
