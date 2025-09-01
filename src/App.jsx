// App.tsx
import React, { useState, useMemo } from 'react';
import { ExternalLink, BookOpen, ScrollText, Brain, Network, FlaskConical, ChevronRight, Scale, User, FileText, ArrowRight } from 'lucide-react';

// Your existing markdown parsing functions (keep these)
const parseFrontmatter = (content) => {
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
};

// Your existing getMarkdownIndex function (keep this too)
const getMarkdownIndex = () => {
  // Your existing implementation
  return []; // Replace with your actual implementation
};

const filterBySection = (index, section) => {
  return index.filter(item => item.section === section);
};

// Site content - easy to edit
const siteContent = {
  hero: {
    title: "From Bias to Symbols to Natively Aligned AGI",
    subtitle: "AGI advancement and governance using design principles inspired by humanity's own cognitive journey to cognition, language, and myth."
  },
  agiConnection: {
    title: "The AGI Connection",
    content: `To make AGI we need to understand intelligence and why any intelligence, at least in biological or cognitive terms, is necessarily "general." What makes intelligence general? The ability to integrate problem solving across scale and contexts towards a broader purpose. This can be thought of as uncertainty minimization or teleology and is the core of selfhood generally.

This is why I'm excited to be part of the Active Inference Institute, because its namesake framework offers a way for us to understand cognition not only in cognitive terms, but to understand that in a very fundamental way cognition is centrally a computational process. The cells in our bodies process information as part of an integrated whole, when they lose this connection, we get cancer.

Morality, for its part, allows humanity to integrate into part of a broader group, or culture. Morality, from a toddler's impulsive desire for fairness. This was Viktor Frankl's insight as he psychologically persevered in a concentration camp, the Jungian thoughts of cosmic Self, and is generally a common thread that weaves through religious, narrative, and aesthetic traditions that emerge as far back as we can currently gaze.`
  }
};

// Orange/Black color scheme
const colors = {
  bg: "#0f0e10",
  surface: "#17151a", 
  text: "#f7f4f2",
  subtext: "#bdb5af",
  accent: "#FF6A3D",
  accentSoft: "#FFB08C"
};

// Components
const Card = ({ children, glow = false, className = "" }) => (
  <div className={`rounded-xl border transition-all duration-300 ${
    glow 
      ? 'border-[color:var(--accent)]/30 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent shadow-lg shadow-[color:var(--accent)]/10' 
      : 'border-white/10 bg-white/5 hover:border-[color:var(--accent)]/20'
  } p-6 ${className}`}>
    {children}
  </div>
);

const Section = ({ id, title, subtitle, icon: Icon, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {title && (
        <div className="flex items-center gap-3 mb-4">
          <Icon className="h-6 w-6 text-[color:var(--accent)]" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-[color:var(--text)]">
            {title}
          </h2>
        </div>
      )}
      {subtitle && (
        <p className="text-[color:var(--subtext)] mb-8 max-w-3xl text-lg">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] text-sm border border-[color:var(--accent)]/20">
    {children}
  </span>
);

// Enhanced MOH Atlas
const MOHAtlasVisual = () => (
  <div className="relative w-full max-w-5xl mx-auto mb-12" style={{ height: '400px' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent rounded-2xl"></div>
    
    {[
      { 
        icon: <Brain className="h-10 w-10" />, 
        label: "Cognitive Accent Bias", 
        desc: "Neural preferences shape interpretation",
        pos: { top: '15%', left: '5%' }
      },
      { 
        icon: <Scale className="h-10 w-10" />, 
        label: "Moral Frameworks", 
        desc: "Shared biases become norms",
        pos: { top: '35%', left: '35%' }
      },
      { 
        icon: <User className="h-10 w-10" />, 
        label: "Cultural Symbols", 
        desc: "Artifacts carry shared meaning",
        pos: { top: '55%', left: '65%' }
      },
      { 
        icon: <Network className="h-10 w-10" />, 
        label: "Governance Systems", 
        desc: "Large-scale coordination",
        pos: { top: '75%', left: '85%' }
      }
    ].map((stage, index) => (
      <div key={stage.label} className="absolute group" style={{ top: stage.pos.top, left: stage.pos.left }}>
        {index < 3 && (
          <div className="absolute top-1/2 left-full ml-4 transform -translate-y-1/2 rotate-12 text-[color:var(--accent)] opacity-60 hidden lg:block">
            <div className="flex items-center">
              <div className="w-16 h-0.5 bg-[color:var(--accent)] mr-2"></div>
              <ChevronRight className="h-6 w-6" />
            </div>
          </div>
        )}
        
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-3 border-[color:var(--accent)] bg-[color:var(--accent)]/10 flex items-center justify-center text-[color:var(--accent)] transition-all duration-300 group-hover:bg-[color:var(--accent)]/20 group-hover:scale-110">
            {stage.icon}
          </div>
          
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center min-w-48">
            <h4 className="font-medium text-[color:var(--text)] mb-1 text-sm">{stage.label}</h4>
            <p className="text-xs text-[color:var(--subtext)] leading-tight">{stage.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function App() {
  const index = useMemo(() => getMarkdownIndex(), []);
  const poetryItems = useMemo(() => filterBySection(index, "poetry"), [index]);
  const essayItems = useMemo(() => filterBySection(index, "essays"), [index]);

  return (
    <div 
      className="min-h-screen"
      style={{
        '--bg': colors.bg,
        '--surface': colors.surface,
        '--text': colors.text,
        '--subtext': colors.subtext,
        '--accent': colors.accent
      }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--bg)]/80 border-b border-[color:var(--accent)]/20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-[color:var(--accent)]" />
            <span className="font-serif text-xl tracking-tight text-[color:var(--text)]">
              Myth of Objectivity
            </span>
            <Badge>MOH × TMS</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[color:var(--subtext)]">
            <a href="#atlas" className="hover:text-[color:var(--accent)] transition-colors">Atlas</a>
            <a href="#writing" className="hover:text-[color:var(--accent)] transition-colors">Writing</a>
            <a href="#products" className="hover:text-[color:var(--accent)] transition-colors">Products</a>
            <a href="#about" className="hover:text-[color:var(--accent)] transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6">The Beautiful Illusion</Badge>
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-[color:var(--text)] mb-6">
              {siteContent.hero.title}
            </h1>
            <p className="text-[color:var(--subtext)] text-lg md:text-xl mb-8 leading-relaxed">
              {siteContent.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('atlas').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] text-black px-6 py-3 font-medium hover:bg-[color:var(--accent)]/90 transition-colors"
              >
                Explore the Atlas <ArrowRight className="h-4 w-4" />
              </button>
              <a 
                href="https://shaggy.substack.com/p/finding-our-place-in-the-age-of-robot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-6 py-3 text-[color:var(--accent)] hover:bg-[color:var(--accent)]/20 transition-colors"
              >
                Read the Essay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MOH Atlas Section */}
      <Section id="atlas" title="The MOH Atlas" subtitle="How individual neural biases become the foundation for both human culture and AGI alignment" icon={Brain}>
        <MOHAtlasVisual />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card glow>
            <h3 className="text-xl font-medium text-[color:var(--text)] mb-4">{siteContent.agiConnection.title}</h3>
            <div className="text-[color:var(--subtext)] space-y-4 leading-relaxed">
              {siteContent.agiConnection.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-medium text-[color:var(--text)] mb-4">Transcendental Model Selection</h3>
            <div className="bg-black/40 rounded-lg p-4 mb-4 font-mono text-sm border-l-4 border-[color:var(--accent)]">
              <div className="text-[color:var(--accent)] mb-2">τ = f(precision, context, scale)</div>
              <div className="text-[color:var(--text)]">argmax Σ P(M_i | D, τ)</div>
            </div>
            <p className="text-[color:var(--subtext)] leading-relaxed">
              Moral precision (τ) enables both humans and AI systems to select appropriate behavioral models across scales. From personal decisions to collective governance, this is the computational basis for genuine value alignment.
            </p>
          </Card>
        </div>
      </Section>

      {/* Products Section */}
      <Section id="products" title="Theory in Practice" subtitle="Product management expertise applied to MOH/TMS frameworks" icon={FlaskConical}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card glow>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-[color:var(--accent)]" />
              <div>
                <h4 className="font-medium text-[color:var(--text)]">Better Self</h4>
                <div className="text-sm text-[color:var(--subtext)]">AI-Powered Task Management</div>
              </div>
            </div>
            <p className="text-[color:var(--subtext)] mb-4 leading-relaxed">
              Intelligent task management platform that helps individuals reclaim control by aligning daily actions with explicit goals. Unlike productivity apps that exploit psychology for engagement, Better Self applies science-backed methods to serve human potential.
            </p>
            <a 
              href="https://forms.gle/vWQjArczhN5U4K167" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-[color:var(--accent)] text-black hover:bg-[color:var(--accent)]/90 transition-colors"
            >
              Join Beta <ExternalLink className="h-3 w-3" />
            </a>
          </Card>

          <Card glow>
            <div className="flex items-center gap-3 mb-4">
              <Network className="h-6 w-6 text-[color:var(--accent)]" />
              <div>
                <h4 className="font-medium text-[color:var(--text)]">Discovery Engine</h4>
                <div className="text-sm text-[color:var(--subtext)]">AI-Powered Research Platform</div>
              </div>
            </div>
            <p className="text-[color:var(--subtext)] mb-4 leading-relaxed">
              Knowledge graph platform applying Active Inference and probabilistic modeling to surface research insights. Integrates LLMs with structured topic modeling, reducing literature review time by 50% across four research institutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://discovery.synthetix.institute/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-[color:var(--accent)] text-black hover:bg-[color:var(--accent)]/90 transition-colors"
              >
                Platform <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://synthetix.institute/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-full border border-[color:var(--accent)]/30 text-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 transition-colors"
              >
                Learn More <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="h-6 w-6 text-[color:var(--accent)]" />
              <div>
                <h4 className="font-medium text-[color:var(--text)]">FinTech Portfolio</h4>
                <div className="text-sm text-[color:var(--subtext)]">10+ Years Leadership</div>
              </div>
            </div>
            <p className="text-[color:var(--subtext)] mb-4 leading-relaxed">
              Led AI-powered financial solutions at Ridgeline Apps, Orion, FactSet. Real-time performance engines, ML-based risk models, portfolio analytics for $8B+ AUM.
            </p>
          </Card>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About" subtitle="Active Inference Institute fellow formalizing MOH/TMS through theory and practice" icon={User}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-3">Current Focus</h4>
            <p className="text-[color:var(--subtext)] leading-relaxed">
              Integrating 10+ years of product management experience with research on symbolic cognition and moral reasoning to build systems that help both humans and AI navigate complex decisions.
            </p>
          </Card>
          
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-3">Research Approach</h4>
            <p className="text-[color:var(--subtext)] leading-relaxed">
              Every insight moves through three phases: narrative exploration (poetry/essays), formal specification (mathematical models), and practical testing (simulations and products).
            </p>
          </Card>
          
          <Card>
            <h4 className="font-medium text-[color:var(--text)] mb-3">Connect</h4>
            <p className="text-[color:var(--subtext)] mb-4 leading-relaxed">
              Open to collaborations on AI alignment, cultural governance, and products that help humans flourish in technological environments.
            </p>
            <div className="text-sm text-[color:var(--accent)]">
              shagor@activeinference.institute
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}