import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import GoalsPOMDP from "../sections/GoalsPOMDP";

function KaTeXBlock({ expression, display = true }: { expression: string; display?: boolean }) {
  const html = React.useMemo(
    () =>
      katex.renderToString(expression, {
        throwOnError: false,
        displayMode: display,
      }),
    [expression, display]
  );

  return (
    <div
      className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const INTRO_PARAGRAPHS = [
  "Transcendental Model Selection proposes an extension of active inference to culture. Prior treatments described a computational frame that set language beneath higher level narrative and semantics (Friston et al. 2020).",
  "Other writers point to a control parameter α at higher levels of the hierarchy that signals meta awareness or self consciousness (Sandved Smith et al. 2021). This account stitches those ideas by letting the same α carry into the level that subordinates narrative and semantic layers.",
  "It ties the drive for story to a distinct identity, so the models we share become the bridge between cultural morality and the symbols we trade."
];

const EQUATIONS = [
  {
    label: "Free energy decomposition",
    tex: "F = -\\mathbb{E}_{Q} [\\ln P(o \\mid s, m, \\alpha)] + D_{\\mathrm{KL}}\\big[ Q(s, \\alpha) \\| P(s, \\alpha \\mid o, m) \\big]",
  },
  {
    label: "Hierarchical form",
    tex: "\\begin{aligned} F = {} & \\mathbb{E}_{Q}\\big[-\\ln P(o \\mid s^{(1)}, \\alpha, m)\\big] \\ \\ &+ \\mathbb{E}_{Q(o)} D_{\\mathrm{KL}}\\big[ Q(s^{(1)}) \\| P(s^{(1)} \\mid s^{(2)}, \\alpha, m) \\big] \\ \\ &+ \\cdots + \\mathbb{E}_{Q(o)} D_{\\mathrm{KL}}\\big[ Q(s^{(L)}) \\| P(s^{(L)} \\mid m) \\big] \\ \\ &+ \\mathbb{E}_{Q(o)} D_{\\mathrm{KL}}\\big[ Q(\\alpha) \\| P(\\alpha \\mid s^{(L)}, m) \\big]. \\end{aligned}",
  },
  {
    label: "Model comparison",
    tex: "\\begin{aligned} \\ln P(m \\mid o) - \\ln P(m' \\mid o) &= \\Delta F + \\Delta G \\ \\ \\Delta F &= \\ln P(o \\mid m) - \\ln P(o \\mid m') \\ \\ \\Delta G &= \\ln P(m) - \\ln P(m'). \\end{aligned}",
  },
];

export default function TMSDetails() {
  const [introExpanded, setIntroExpanded] = React.useState(false);
  const [manuscriptOpen, setManuscriptOpen] = React.useState(false);

  return (
    <section className="section" id="tms">
      <h2 className="section-title">Transcendental Model Selection</h2>

      <div className="space-y-8">
        <div className="rounded-2xl border border-white/12 bg-black/35 p-6 shadow-lg">
          <header className="mb-4 space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--accentSoft)]">Deepening and Integrating our Cosmic (Cultural) Self</p>
            <h3 className="text-xl font-semibold text-[var(--text)]">A view of Morality, Cultural Evolution, Symbology, and Narrative aligned with active inference</h3>
          </header>

          <div className="space-y-4 text-[var(--subtext)] leading-relaxed">
            <p>{INTRO_PARAGRAPHS[0]}</p>
            {introExpanded && INTRO_PARAGRAPHS.slice(1).map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {introExpanded && (
              <div className="space-y-6 pt-2">
                {EQUATIONS.map(eq => (
                  <div key={eq.label} className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accentSoft)]">
                      {eq.label}
                    </p>
                    <KaTeXBlock expression={eq.tex} />
                  </div>
                ))}
                <p>
                  Alignment then becomes a question of which models we privilege and how sharply we penalise
                  deviations, the cultural analogue of setting precision in an inference machine.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={() => setIntroExpanded(prev => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D55] px-5 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
            >
              {introExpanded ? "Collapse overview" : "Expand full overview"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black/25 p-6">
          <header className="mb-3 space-y-1">
            <h3 className="text-lg font-semibold text-[var(--text)]">Frontiers manuscript</h3>
            <p className="text-sm text-[var(--subtext)]">
              Submitted as part of special issue re understanding AGI through human cognition.
            </p>
          </header>

          {manuscriptOpen && (
            <div className="mb-4 h-[65vh] overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="TMS manuscript"
                width="100%"
                height="100%"
                src="https://www.dropbox.com/scl/fi/h70bfg0nqsjlrzuh6k4hs/TmS__Frontiers-3.pdf?rlkey=q3624ka2kb8kwzg138az3gsjt&raw=1"
                style={{ border: 0 }}
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setManuscriptOpen(prev => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D55] px-5 py-2 text-sm font-medium text-[#FF6A3D] transition hover:bg-[#FF6A3D] hover:text-black"
            >
              {manuscriptOpen ? "Hide inline preview" : "Show inline preview"}
            </button>
            <a
              href="https://www.dropbox.com/scl/fi/h70bfg0nqsjlrzuh6k4hs/TmS__Frontiers-3.pdf?rlkey=q3624ka2kb8kwzg138az3gsjt&dl=0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6A3D] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#ff824f]"
            >
              Open in new tab
            </a>
          </div>
        </div>
        <GoalsPOMDP embedded />
      </div>
    </section>
  );
}
