export type ReferenceRecord = {
  title: string;
  cite: string;
  link?: string;
};

export const REF_INDEX: Record<string, ReferenceRecord> = {
  moh: {
    title: "Morality scaffolds symbolic cognition in MOH",
    cite: "Rahman, Myth of Objectivity Hypothesis",
  },
  tms: {
    title: "Transcendental Model Selection formalizes cultural model choice",
    cite: "Rahman, TMS Manuscript",
  },
  accent: {
    title: "Accent bias and shibboleths seed group trust",
    cite: "Kinzler 2007; Moffett 2019",
  },
  morality: {
    title: "Innate moral evaluations appear early",
    cite: "Hamlin & Wynn 2016; Curry et al. 2019",
  },
  culture: {
    title: "Cultural learning from the anonymous many",
    cite: "Henrich 2016; Tomasello 2003",
  },
  institutions: {
    title: "Institutions reduce uncertainty and scale cooperation",
    cite: "North 1990; Acemoglu & Robinson 2012",
  },
  governance: {
    title: "Governance as the coordination of norms and culture",
    cite: "North 1990",
  },
  null: {
    title: "Reductionist null hypotheses set baselines to be tested",
    cite: "Various: Friedman, Dawkins, Skinner, Lévi-Strauss",
  },
  singleEq: {
    title: "Single equilibrium thermodynamics (Boltzmann) as baseline",
    cite: "Classical thermodynamics",
  },
  steady: {
    title: "Non-equilibrium steady states explain living resilience",
    cite: "Friston, Free Energy Principle",
  },
  homoEcon: {
    title: "Neoclassical homo economicus and rational self-interest",
    cite: "Edgeworth; Friedman; Jevons; Walras",
  },
  narrativeScenario: {
    title: "Narrative scenario analysis frames radical uncertainty",
    cite: "Kay & King 2020; Fisher 1985",
  },
  selfishGene: {
    title: "Selfish gene doctrine prioritizes molecular causation",
    cite: "Dawkins 1976",
  },
  biorel: {
    title: "Biological Relativity spreads causation across scales",
    cite: "Noble 2017",
  },
  stimulus: {
    title: "Skinnerian stimulus-response reductionism",
    cite: "Skinner 1938",
  },
  emotion: {
    title: "Emotions act as intervening variables (flexible responses)",
    cite: "Anderson 2022; Adolphs",
  },
  structuralism: {
    title: "Structuralism’s binary oppositions",
    cite: "Lévi-Strauss 1963",
  },
  differance: {
    title: "Différance and the transcendental signified",
    cite: "Derrida 1976",
  },
  pseudo: {
    title: "Pseudo-speciation and out-group moral exclusion",
    cite: "Lorenz 1966",
  },
  narrative: {
    title: "Narrative paradigm—probability and fidelity",
    cite: "Fisher 1985",
  },
  cosmic: {
    title: "Cosmic self and archetypes",
    cite: "Booker 2004",
  },
  multiplicity: {
    title: "Multiplicity of selves in literature",
    cite: "Bloom 1994",
  },
  jung: {
    title: "Collective / cosmic self framing",
    cite: "Jung 1959",
  },
  booker: {
    title: "Stories align protagonists with cultural identity",
    cite: "Booker 2004",
  },
  bloom_shakespeare: {
    title: "Shakespeare multiplies selves; Western canon",
    cite: "Bloom 1994",
  },
  book_proposal: {
    title: "Humanity’s Story of an Uncertain Self (proposal)",
    cite: "Rahman, Book Proposal",
  },
  shared: {
    title: "Shared generative models enable coordination",
    cite: "Friston & Frith 2015",
  },
  lightCone: {
    title: "Computational self bounded by light cone",
    cite: "Levin 2019",
  },
  depth: {
    title: "Epistemic depth spans temporal horizons",
    cite: "Laukkonen et al. 2025",
  },
  alpha: {
    title: "α parameter weights cultural precision",
    cite: "Rahman, TMS Manuscript",
  },
};

export default REF_INDEX;
