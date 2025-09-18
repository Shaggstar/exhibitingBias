import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Shagor</h2>
      <div className="mx-auto max-w-3xl space-y-6 text-[var(--subtext)] leading-relaxed">
        <p>
          I'm a researcher passionate about the promise of active inference and its ability to help us
          understand humanity in the age of AI and the coming generation of generally intelligent
          synthetic systems. The Myth of Objectivity weaves anthropology, cognitive science, and systems
          engineering to better understand our nature and origins. Transcendent Inference and Model
          Selection extends active inference as a specific form of general intelligence that offers a
          framework for alignment.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <a
            href="mailto:Shagor@activeinference.institute"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-center transition hover:border-[var(--accent)] hover:text-white"
          >
            Shagor@activeinference.institute
          </a>
          <a
            href="https://www.linkedin.com/in/rahmanshagor/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-center transition hover:border-[var(--accent)] hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://shaggy.substack.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-center transition hover:border-[var(--accent)] hover:text-white"
          >
            shaggy.substack.com
          </a>
        </div>
      </div>
    </section>
  );
}
