import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Compass, ScrollText, FlaskConical, Network, Wand2, Sparkles, Rocket, Shield, PenTool, Layers, ArrowRight, ExternalLink, Sun, Moon, Feather, Landmark, FileText } from "lucide-react";

// ————————————————————————————————————————————————
// Theme: red/orange minimal with subtle myth motifs
// ————————————————————————————————————————————————
const palette = {
  bg: "#0f0e10",
  surface: "#17151a",
  text: "#f7f4f2",
  subtext: "#bdb5af",
  orange: "#FF6A3D",
  orangeSoft: "#FFB08C",
  red: "#D7263D",
  redSoft: "#FF7A88",
  accent: "#FF6A3D",
};

// Minimal mythic glyphs used in backdrop
const mythGlyphs = [
  (props:any) => (
    <svg viewBox="0 0 64 64" {...props}>
      {/* Torch */}
      <path d="M28 46v10m8-10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="24" y="34" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M32 12c6 0 12 5 12 9 0 4-5 7-12 7s-12-3-12-7c0-4 6-9 12-9z" fill="currentColor" opacity="0.25"/>
    </svg>
  ),
  (props:any) => (
    <svg viewBox="0 0 64 64" {...props}>
      {/* Laurel */}
      <path d="M32 12c-10 8-10 20 0 28 10-8 10-20 0-28z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 20c-6 4-6 10 0 14M44 20c6 4 6 10 0 14" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  (props:any) => (
    <svg viewBox="0 0 64 64" {...props}>
      {/* Constellation */}
      <circle cx="12" cy="20" r="2" fill="currentColor"/>
      <circle cx="30" cy="10" r="2" fill="currentColor"/>
      <circle cx="52" cy="22" r="2" fill="currentColor"/>
      <circle cx="40" cy="40" r="2" fill="currentColor"/>
      <path d="M12 20L30 10L52 22L40 40L12 20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    </svg>
  ),
];

const MythBackdrop = ()=> (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    {/* Gradient wash */}
    <div className="absolute inset-0" style={{
      background: `radial-gradient(800px 400px at 20% -10%, ${palette.orange}10 0%, transparent 60%), radial-gradient(800px 600px at 90% 20%, ${palette.red}12 0%, transparent 60%), linear-gradient(180deg, ${palette.bg}, ${palette.bg})`
    }}/>
    {/* Constellation grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="white"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {/* Floating mythic glyphs */}
    <div className="absolute inset-0">
      {mythGlyphs.map((G, i)=> (
        <motion.div key={i} className="absolute" initial={{opacity:0, y:20}} animate={{opacity:0.12, y:0}} transition={{duration:1.2, delay:i*0.4}} style={{ left: `${15 + i*22}%`, top: `${(i%3)*25 + 10}%`, color: palette.orangeSoft }}>
          <G width={64} height={64} />
        </motion.div>
      ))}
    </div>
  </div>
)

// Generic section + primitives
const Section: React.FC<{ id: string; title: string; subtitle?: string; icon?: any; children: React.ReactNode }>=({id,title,subtitle,icon:Icon,children})=> (
  <section id={id} className="relative scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="flex items-start gap-3 mb-6">
        {Icon && <Icon className="h-6 w-6 text-[color:var(--accent)] mt-1"/>}
        <div>
          <h2 className="font-serif text-2xl md:text-4xl tracking-tight text-[color:var(--text)]">{title}</h2>
          {subtitle && <p className="text-sm md:text-base text-[color:var(--subtext)] mt-2 max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="grid gap-6">{children}</div>
    </div>
  </section>
)

const Chip: React.FC<{children:React.ReactNode}> = ({children}) => (
  <span className="inline-flex items-center gap-2 text-xs tracking-wide uppercase rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[color:var(--subtext)]">{children}</span>
)

const Card: React.FC<{children:React.ReactNode; glow?: boolean; onClick?: ()=>void}> = ({children, glow, onClick}) => (
  <motion.div onClick={onClick} whileHover={{ y: -3 }} className={`relative rounded-2xl p-5 md:p-6 bg-[color:var(--surface)] border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glow?"ring-1 ring-[color:var(--accent)]/40": ""}`}>
    {children}
  </motion.div>
)

const FellowshipBadge = ()=> (
  <div className="flex items-center gap-3">
    <Landmark className="h-5 w-5 text-[color:var(--accent)]"/>
    <div>
      <p className="text-sm text-[color:var(--subtext)]">Fellowship</p>
      <p className="text-sm md:text-base text-[color:var(--text)]">Active Inference Institute Research Fellow</p>
    </div>
  </div>
)

const AlignmentPill = ({label, desc}:{label:string, desc:string})=> (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 bg-white/3 border border-white/10 rounded-xl px-4 py-3">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{background: palette.accent}}/>
      <p className="font-medium text-[color:var(--text)]">{label}</p>
    </div>
    <p className="text-sm text-[color:var(--subtext)] md:max-w-xl">{desc}</p>
  </div>
)

// ————————————————————————————————————————————————
// External links and publications
// ————————————————————————————————————————————————
const PROSE = [
  { title: "Finding Our Place in the Age of Robot Gods", url: "https://shaggy.substack.com/p/finding-our-place-in-the-age-of-robot" },
  { title: "Case for Scaling AI with Morality", url: "https://shaggy.substack.com/p/case-for-scaling-ai-with-morality" },
  { title: "Activating the Cultural Perspective", url: "https://shaggy.substack.com/p/activating-the-cultural-perspective" },
  { title: "Thoughts for My Penny", url: "https://shaggy.substack.com/p/thoughts-for-my-penny" },
]

const FRONTIERS_MOH_URL = "https://www.frontiersin.org/journals/sociology/articles/10.3389/fsoc.2023.1269621/full";
const TMS_URL = "https://www.dropbox.com/scl/fi/wokkcyflsm1yojotsyhey/TmS__Frontiers.pdf?rlkey=3d6my2ggke9bpcna98429bb0x&dl=0"; // public TMS PDF

// Poetry & Notes (Substack notes / drafts)
const POEMS = [
  { kind: "Draft", title: "Blood of the Sun", note: "raw draft", substackUrl: "https://substack.com/@shaggy/note/c-103963792" },
  { kind: "Draft", title: "Hillside Fool", note: "raw draft", substackUrl: "https://substack.com/@shaggy/note/c-112646238" },
  { kind: "Draft", title: "Lost", note: "raw draft", substackUrl: "https://substack.com/profile/5340479-shaggy/note/c-148055151" },
  { kind: "Draft", title: "Tie Raid", note: "raw draft", substackUrl: "https://substack.com/@shaggy/note/c-148056657" },
  { kind: "Draft", title: "The Old Tavern Sport", note: "raw draft", substackUrl: "https://substack.com/profile/5340479-shaggy/note/c-148059540" },
  { kind: "Note", title: "Hospice Humor", note: "misc notes", substackUrl: "" },
  { kind: "Embed", title: "Sensations", note: "Substack embed ready", substackUrl: "" },
]

export default function MythWireframe(){
  const [dark, setDark] = useState(true)
  const [filter, setFilter] = useState("All")
  const filtered = useMemo(()=> filter==="All"? POEMS : POEMS.filter(i=>i.kind===filter), [filter])

  return (
    <div className="min-h-screen" style={{
      ["--bg" as any]: palette.bg,
      ["--surface" as any]: palette.surface,
      ["--text" as any]: palette.text,
      ["--subtext" as any]: palette.subtext,
      ["--accent" as any]: palette.orange,
    } as React.CSSProperties}>
      <MythBackdrop/>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-[color:var(--accent)]"/>
            <span className="font-serif text-lg tracking-tight text-[color:var(--text)]">Myth of Objectivity</span>
            <Chip>MOH × TMS</Chip>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[color:var(--subtext)]">
            <a href="#narrative" className="hover:text-[color:var(--text)]">Narrative</a>
            <a href="#alignment" className="hover:text-[color:var(--text)]">Alignment</a>
            <a href="#poetry" className="hover:text-[color:var(--text)]">Poetry & Notes</a>
            <a href="#projects" className="hover:text-[color:var(--text)]">Projects</a>
            <a href="#research" className="hover:text-[color:var(--text)]">Research</a>
            <a href="#sim" className="hover:text-[color:var(--text)]">Sim Lab</a>
            <a href="#about" className="hover:text-[color:var(--text)]">About</a>
          </div>
          <button onClick={()=>setDark(!dark)} className="inline-flex items-center gap-2 text-sm text-[color:var(--subtext)] hover:text-[color:var(--text)]">
            {dark? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
            <span className="hidden md:inline">Theme</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4"><Chip>New Human Narrative</Chip></div>
              <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-[color:var(--text)]">From <span className="text-[color:var(--accent)]">Morals</span> → Symbols → Culture</h1>
              <p className=\"text-\[color:var\(--subtext\)\] mt-2 italic\">“... to ensure that the robots build better humans ...”<span className=\"opacity-70\"> — <a className=\"underline\" href=\"https://shaggy.substack.com/p/finding-our-place-in-the-age-of-robot\" target=\"_blank\" rel=\"noreferrer\">Finding Our Place in the Age of Robot Gods</a></span></p>
              <p className="text-[color:var(--subtext)] mt-4 max-w-xl">Add the preface: <b>Accent Bias</b> → Morals → Symbols → Culture. Formalize it (TMS), write it (vignettes/poems/essays), then test it (simulations) to steer governance.</p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a href="#poetry" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] text-black px-5 py-2.5 text-sm font-medium">Read drafts <ArrowRight className="h-4 w-4"/></a>
                <a href="#sim" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[color:var(--text)]">Open Sim Lab</a>
              </div>
              <div className="mt-8"><FellowshipBadge/></div>
            </div>
            <Card glow>
              <div className="flex items-center gap-3 mb-3">
                <Brain className="h-5 w-5 text-[color:var(--accent)]"/>
                <h4 className="font-medium text-[color:var(--text)]">Myth motifs, readable UI</h4>
              </div>
              <ul className="text-sm text-[color:var(--subtext)] space-y-2 list-disc pl-5">
                <li>Improved contrast for all cards and labels</li>
                <li>Strict red/orange palette; generous negative space</li>
                <li>Every section framed by <em>story → formalism → simulation</em></li>
              </ul>
            </Card>
          </div>
        </div>
      </header>

      {/* NARRATIVE OVERVIEW */}
      <Section id="narrative" title="The Narrative: Origins & Nature" subtitle="A living manuscript—told in vignettes, poems, and essays—paired with formal notes and runnable sketches." icon={ScrollText}>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Accent Bias → Morals → Symbols → Culture</h4>
            <p className="text-sm text-[color:var(--subtext)]">Perceptual accent biases seed local preferences; aggregated norms stabilize symbols; symbols scale identity and governance.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Regulation by Morality</h4>
            <p className="text-sm text-[color:var(--subtext)]">Treat moral priors as control parameters that regulate populations of agents—predicting cohesion, sanction, forgiveness.</p>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Prose Posts</h4>
            <ul className="text-sm text-[color:var(--subtext)] space-y-2">
              {PROSE.map(p => (
                <li key={p.url}><a className="underline hover:text-[color:var(--text)]" href={p.url} target="_blank" rel="noreferrer">{p.title}</a></li>
              ))}
            </ul>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Publications</h4>
            <div className="text-sm text-[color:var(--subtext)] space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[color:var(--accent)]"/>
                <a className="underline hover:text-[color:var(--text)]" href={FRONTIERS_MOH_URL} target="_blank" rel="noreferrer">MOH (Frontiers in Sociology)</a>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[color:var(--accent)]"/>
                {TMS_URL ? (
                  <a className="underline hover:text-[color:var(--text)]" href={TMS_URL} target="_blank" rel="noreferrer">Transcendental Model Selection (manuscript)</a>
                ) : (
                  <span className="opacity-70">Transcendental Model Selection (manuscript) — <em>link coming soon</em></span>
                )}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ALIGNMENT FRAMING */}
      <Section id="alignment" title="Three Alignments" subtitle="Past, present, and future tech woven into a single thread—individual flourishing to AGI governance." icon={Compass}>
        <div className="grid md:grid-cols-3 gap-4">
          <Card glow>
            <div className="flex items-center gap-3 mb-2"><Rocket className="h-5 w-5 text-[color:var(--accent)]"/><h4 className="font-medium text-[color:var(--text)]">Future Tech</h4></div>
            <p className="text-sm text-[color:var(--subtext)]">Strengthen governance systems to align AGI with human values: normative priors, oversight councils, simulation audits.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><PenTool className="h-5 w-5 text-[color:var(--accent)]"/><h4 className="font-medium text-[color:var(--text)]">Current Tech</h4></div>
            <p className="text-sm text-[color:var(--subtext)]">Tools that optimize our broader Selves: personal narrative tooling, Better Self agents, normative recommender prototypes.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><ScrollText className="h-5 w-5 text-[color:var(--accent)]"/><h4 className="font-medium text-[color:var(--text)]">Past Tech</h4></div>
            <p className="text-sm text-[color:var(--subtext)]">Traditions of wisdom that scaffold identity scaling: myths, epics, ritual—rendered as computable motifs.</p>
          </Card>
        </div>
        <div className="grid gap-3">
          <AlignmentPill label="Accent Bias → Morals → Symbols → Culture" desc="Biases in perception seed moral norms; norms stabilize symbols; symbols scale into cultural governance."/>
          <AlignmentPill label="Story → Formalism → Simulation" desc="Each idea is narrated, expressed in MOH/TMS mathematics, then evaluated in agent-based sims."/>
          <AlignmentPill label="Identity Scaling" desc="Morality as precision that lets agents inhabit larger groups—basis for symbolic cognition and governance."/>
        </div>
      </Section>

      {/* POETRY & NOTES SECTION */}
      <Section id="poetry" title="Poetry & Notes (Raw Drafts)" subtitle="Framed by ‘Finding Our Place in the Age of Robot Gods’: free-form expression first, refinement later. Use AI as a tutor—not a substitute." icon={Feather}>
        <div className="flex items-center justify-between">
          <div className="inline-flex rounded-full bg-white/5 p-1 border border-white/10">
            {['All','Draft','Note','Embed'].map(t=> (
              <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-1.5 text-sm rounded-full transition ${filter===t?"bg-[color:var(--accent)] text-black":"text-[color:var(--subtext)] hover:text-[color:var(--text)]"}`}>{t}</button>
            ))}
          </div>
          <a className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--text)] inline-flex items-center gap-2" href="https://substack.com/@shaggy" target="_blank" rel="noreferrer">All on Substack <ExternalLink className="h-4 w-4"/></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(({kind,title,note,substackUrl})=> (
            <Card key={title}>
              <div className="flex items-start gap-3">
                <ScrollText className="h-5 w-5 text-[color:var(--accent)]"/>
                <div>
                  <div className="flex items-center gap-2 mb-1"><Chip>{kind}</Chip></div>
                  <h4 className="font-medium text-[color:var(--text)]">{title}</h4>
                  <p className="text-sm text-[color:var(--subtext)]">{note}</p>
                  <div className="mt-3 flex gap-3 text-sm">
                    {substackUrl ? (
                      <a className="px-3 py-1.5 rounded-full bg-[color:var(--accent)] text-black" href={substackUrl} target="_blank" rel="noreferrer">Open on Substack</a>
                    ) : (
                      <button className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[color:var(--subtext)] cursor-not-allowed">Substack</button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card>
          <h4 className="font-medium text-[color:var(--text)] mb-2">How to present drafts & Substack embeds</h4>
          <ol className="list-decimal pl-5 text-sm text-[color:var(--subtext)] space-y-2">
            <li><b>Raw drafts</b>: keep the authentic voice. Label clearly as “Draft—unrevised”.</li>
            <li><b>Companion note</b>: add a 1–2 sentence preface: intent, scene, or question.</li>
            <li><b>Substack embeds</b>: for published pieces, link or embed. A simple pattern:
              <pre className="mt-2 p-3 rounded-xl bg-black/40 overflow-auto">{`<iframe src="https://your-substack-domain.substack.com/embed" width="100%" height="320" frameBorder="0"></iframe>`}</pre>
            </li>
            <li><b>Versioning</b>: when you revise, keep the draft card but add a “Read updated on Substack” button.</li>
          </ol>
        </Card>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Active Projects" subtitle="Translating theory into practice." icon={FlaskConical}>
        <div className="grid md:grid-cols-2 gap-4">
          <Card glow>
            <div className="flex items-center gap-3 mb-2"><Brain className="h-5 w-5 text-[color:var(--accent)]"/><h4 className="font-medium text-[color:var(--text)]">Better Self</h4></div>
            <p className="text-sm text-[color:var(--subtext)]">Normative-aware agent that co-authors goals with you; balances personal priors with communal norms.</p>
          </Card>
          <Card glow>
            <div className="flex items-center gap-3 mb-2"><Network className="h-5 w-5 text-[color:var(--accent)]"/><h4 className="font-medium text-[color:var(--text)]">Discovery Engine</h4></div>
            <p className="text-sm text-[color:var(--subtext)]">AI-driven synthesis of scientific fields into computable knowledge—supports hypothesis generation and governance audits.</p>
          </Card>
        </div>
      </Section>

      {/* RESEARCH / PUBLICATIONS (with optional TMS embed) */}
      <Section id="research" title="Research & Publications" subtitle="Formal write‑ups, preprints, and manuscripts." icon={BookOpen}>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">MOH — Frontiers in Sociology</h4>
            <p className="text-sm text-[color:var(--subtext)] mb-3">Peer‑reviewed article outlining the Myth of Objectivity and its cultural implications.</p>
            <a className="inline-flex items-center gap-2 text-sm underline" href={FRONTIERS_MOH_URL} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/>Read on Frontiers</a>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Transcendental Model Selection (Manuscript)</h4>
            <p className="text-sm text-[color:var(--subtext)] mb-3">Draft manuscript connecting MOH to a computational governance formalism.</p>
            {TMS_URL ? (
              <a className="inline-flex items-center gap-2 text-sm underline" href={TMS_URL} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/>Open manuscript</a>
            ) : (
              <span className="text-sm text-[color:var(--subtext)]">Link coming soon — send me the public URL and I’ll wire it.</span>
            )}
          </Card>
        </div>
      </Section>

      {/* SIMULATION LAB */}
      <Section id="sim" title="Simulation Lab" subtitle="Sandbox scenarios for MOH/TMS agents. Explore how narrative templates and moral precision regulate culture." icon={Wand2}>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Identity Scaling</h4>
            <p className="text-sm text-[color:var(--subtext)]">Adjust moral precision; watch groups cohere/fragment.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Narrative Templates</h4>
            <p className="text-sm text-[color:var(--subtext)]">Introduce stories or vignettes as symbolic signals; test norm regulation effects.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Morality as Regulation</h4>
            <p className="text-sm text-[color:var(--subtext)]">Examine how moral priors act as control parameters for agent societies.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Governance Audits</h4>
            <p className="text-sm text-[color:var(--subtext)]">Run exogenous council policies; compare outcomes across cultures.</p>
          </Card>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About the Author" subtitle="Awarded an Active Inference Institute fellowship to formalize MOH/TMS and build simulations." icon={BookOpen}>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Focus</h4>
            <p className="text-sm text-[color:var(--subtext)]">Myth of Objectivity & Origins of Symbols → TMS → Simulated governance.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Writing</h4>
            <p className="text-sm text-[color:var(--subtext)]">Vignettes, poems, and essays that make the formal intuitions tangible.</p>
          </Card>
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-2">Contact</h4>
            <p className="text-sm text-[color:var(--subtext)]">Invite talks, collaborations, and pilots. Newsletter signup fits here.</p>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-[color:var(--accent)]"/>
            <span className="font-serif text-lg text-[color:var(--text)]">Myth of Objectivity</span>
          </div>
          <div className="text-xs text-[color:var(--subtext)]">© {new Date().getFullYear()} • Red/Orange minimal theme • Built with care.</div>
        </div>
      </footer>
    </div>
  )
}

