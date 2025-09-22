// src/App.tsx
import React from "react";
import { Eye, Microscope, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import WhyMorality from "./components/WhyMorality";
import TMSDetails from "./components/TMSDetails";
import IdentityNavigator from "./components/IdentityNavigator";
import ConceptualAtlas from "./components/ConceptualAtlas";
import GoalsPOMDP from "./sections/GoalsPOMDP";
import SevenPathways from "./components/SevenPathways";
import AboutSection from "./components/AboutSection";
import SubstackShowcase from "./components/SubstackShowcase";
import ProductsSection from "./components/ProductsSection";
import Bibliography from "./components/Bibliography";
import { getMarkdownIndex, filterBySection } from "./lib/simpleMarkdownLoader.js";
import "./index.css";


function MythSigil() {
  return (
    <span className="sigil">
      <span className="sigil-triangle">
        <Eye className="sigil-eye" />
      </span>
      <span className="sigil-scope">
        <Microscope className="sigil-scope-icon" />
      </span>
    </span>
  );
}

function ExhibitingBiasMark() {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-[0.6em] text-[#FFB08C]">Exhibiting Bias</span>
      <span className="font-serif text-lg text-[#f7f4f2]">Myth of Objectivity</span>
    </div>
  );
}

export default function App() {
  const [index, setIndex] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string|null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const md = await getMarkdownIndex();
        setIndex(md);
      } catch (e:any) {
        setError(e?.message || "Failed to load content");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const essays = React.useMemo(() => filterBySection(index, "essays"), [index]);
  const poetry = React.useMemo(() => filterBySection(index, "poetry"), [index]);
  const drama = React.useMemo(() => filterBySection(index, "drama"), [index]);

  return (
    <div style={{ background: "#0f0e10", color: "#f7f4f2", minHeight: "100vh" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-[#0f0e10cc] border-b border-[#FF6A3D33]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MythSigil />
            <ExhibitingBiasMark />
          </div>
          <div className="hidden md:flex gap-6 text-[#bdb5af]">
            <a href="#pathways" className="hover:text-[#FF6A3D]">Atlas · Pathways</a>
            <a href="#why" className="hover:text-[#FF6A3D]">Why Morality</a>
            <a href="#tms" className="hover:text-[#FF6A3D]">TMS</a>
            <a href="#about" className="hover:text-[#FF6A3D]">About</a>
            <a href="#writing" className="hover:text-[#FF6A3D]">Writing</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FF6A3D55] text-[#FF6A3D]">
            Cognitive Bias → Morality & Culture → AGI Aligned to People 🤞
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">
            Humanity's Journey to Symbolic Intelligence
          </h1>
          <p className="text-[#bdb5af] max-w-3xl mx-auto mb-6">
            A framework for how accent, morality, culture, and governance scaffold symbolic cognition and what that means for alignment.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="#pathways" className="inline-flex items-center gap-2 bg-[#FF6A3D] text-black px-5 py-3 rounded-full font-medium">
              Explore the Atlas <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://shaggy.substack.com" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 border border-[#FF6A3D55] text-[#FF6A3D] px-5 py-3 rounded-full">
              Substack <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Morality */}
      <WhyMorality />

      {/* TMS expandable details */}
      <TMSDetails />

      <GoalsPOMDP />

      {/* Identity navigator visual */}
      <IdentityNavigator />

      

      <ConceptualAtlas />

      <section className="section" id="seven-pathways">
        <h2 className="section-title">Seven Pathways</h2>
        <SevenPathways />
      </section>

      <Bibliography />

      {/* Writing (restored) */}
      <section id="writing" className="section">
        <h2 className="section-title">Writings</h2>
        <div className="space-y-10">
          <SubstackShowcase />
          {loading && <p className="text-center text-[#bdb5af]">Loading…</p>}
          {error && <p className="text-center text-[#FF6A3D]">Error: {error}</p>}

          {!!essays.length && (
            <>
              <h3 className="text-xl font-semibold">Essays</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {essays.map((it:any) => (
                  <a
                    key={it.slug}
                    href={(it?.data?.URL || it?.data?.url || it?.data?.link || it?.data?.href) ?? undefined}
                    target={it?.data?.URL || it?.data?.url ? '_blank' : undefined}
                    rel="noreferrer"
                    className="block rounded-xl border border-[#ffffff1a] p-5 transition hover:border-[#FF6A3D55] hover:-translate-y-0.5"
                  >
                    <h4 className="text-lg mb-1">{it.title}</h4>
                    {it?.data?.summary && <p className="text-sm text-[#bdb5af] mb-2">{it.data.summary}</p>}
                    {it?.data?.date && <div className="text-xs text-[#bdb5af99]">
                      {new Date(it.data.date).toLocaleDateString()}
                    </div>}
                  </a>
                ))}
              </div>
            </>
          )}

          {!!poetry.length && (
            <>
              <h3 className="text-xl font-semibold">Poetry</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {poetry.map((it:any) => (
                  <a
                    key={it.slug}
                    href={(it?.data?.URL || it?.data?.url || it?.data?.link || it?.data?.href) ?? undefined}
                    target={it?.data?.URL || it?.data?.url ? '_blank' : undefined}
                    rel="noreferrer"
                    className="block rounded-xl border border-[#ffffff1a] p-5 transition hover:border-[#FF6A3D55] hover:-translate-y-0.5"
                  >
                    <h4 className="text-lg mb-1">{it.title}</h4>
                    {it?.data?.summary && <p className="text-sm text-[#bdb5af] mb-2">{it.data.summary}</p>}
                    {it?.data?.date && <div className="text-xs text-[#bdb5af99]">
                      {new Date(it.data.date).toLocaleDateString()}
                    </div>}
                  </a>
                ))}
              </div>
            </>
          )}

          {!!drama.length && (
            <>
              <h3 className="text-xl font-semibold">Drama</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {drama.map((it:any) => (
                  <a
                    key={it.slug}
                    href={(it?.data?.URL || it?.data?.url || it?.data?.link || it?.data?.href) ?? undefined}
                    target={it?.data?.URL || it?.data?.url ? '_blank' : undefined}
                    rel="noreferrer"
                    className="block rounded-xl border border-[#ffffff1a] p-5 transition hover:border-[#FF6A3D55] hover:-translate-y-0.5"
                  >
                    <h4 className="text-lg mb-1">{it.title}</h4>
                    {it?.data?.summary && <p className="text-sm text-[#bdb5af] mb-2">{it.data.summary}</p>}
                    {it?.data?.date && <div className="text-xs text-[#bdb5af99]">
                      {new Date(it.data.date).toLocaleDateString()}
                    </div>}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* About */}
      <AboutSection />

      <ProductsSection />

      {/* Footer */}
      <footer className="section pt-0">
        <p className="text-center text-[#bdb5af] text-sm">
          © {new Date().getFullYear()} Myth of Objectivity · MOH × TMS
        </p>
      </footer>

      <footer className="border-t border-white/10 py-10">
  <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div className="flex items-center gap-3">
      <Sparkles className="h-5 w-5 text-[color:var(--accent)]" />
      <span className="font-serif text-lg text-[color:var(--text)]">Myth of Objectivity</span>
    </div>

    <a
      href="https://ko-fi.com/exhibitingbias_shaggy"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--accent)] text-black hover:opacity-90"
    >
      ☕ Buy me a coffee
    </a>
  </div>
</footer>

    </div>
  );
}
