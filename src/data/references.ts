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

export type PathwayNode = {
  id: string;
  label: string;
  group?: string;
  quote?: string;
  cite?: string;
  link?: string;
};

export type PathwayLink = {
  source: string;
  target: string;
  type?: string;
};

export const PATHWAYS_DATA: { nodes: PathwayNode[]; links: PathwayLink[] } = {
  nodes: [
    // --- 1. Evolution / Accents → Morality → Culture → Governance
    {
      id: "moffett_accent",
      label: "[[Accent Bias / Shibboleth]]",
      group: "evolution",
      quote:
        "Accent as anonymous identity marker that scales cooperation beyond intimates.",
      cite: "Moffett, The Human Swarm; Cohen on shibboleth",
    },
    {
      id: "kinzler_accent",
      label: "[[Accent Preference (Ontogeny)]]",
      group: "evolution",
      quote:
        "Preference for mother’s speech in utero; early accent bias extends through infancy and childhood.",
      cite: "Kinzler et al. (accent development)",
    },
    {
      id: "dunbar_gossip",
      label: "[[Dunbar: Gossip → Morality]]",
      group: "morality",
      quote:
        "Morality is central to large-group cohesion; language/gossip scales monitoring and norms.",
      cite: "Dunbar (2004)",
    },
    {
      id: "fehr_fischbacher",
      label: "[[Norm Violation as Rational Bias]]",
      group: "morality",
      quote:
        "Humans enforce norms even at a cost; altruistic punishment isn’t captured by simple utility agents.",
      cite: "Fehr & Fischbacher (2003)",
    },
    {
      id: "infant_morality",
      label: "[[Preverbal Moral Evaluation]]",
      group: "morality",
      quote:
        "Infants show early sociomoral evaluations; prosocial tendencies precede language.",
      cite: "Hamlin, Wynn, Bloom; Wynn & Bloom; Warneken & Tomasello",
    },
    {
      id: "boehm_hierarchy",
      label: "[[Egalitarian Codes]]",
      group: "morality",
      quote:
        "Small-scale societies enforce egalitarian norms; shame and reputation regulate power.",
      cite: "Boehm, Hierarchy in the Forest",
    },
    {
      id: "curry_universals",
      label: "[[Morality = Cooperation]]",
      group: "morality",
      quote:
        "Morality solves recurrent cooperation problems; expect cross-cultural regularities.",
      cite: "Oliver Scott Curry; Schein & Gray; Haidt",
    },
    {
      id: "cultural_evo",
      label: "[[Cultural Evolution / Learning]]",
      group: "culture",
      quote:
        "Cohabiting with many anonymous conspecifics scales culture: imitation, teaching, shared symbols.",
      cite:
        "Tomasello; Heyes; Greenwood; Henrich; Lev & Dediu; Richerson & Christiansen; Steels; Smith; Thompson; Rubio-Fernandez",
    },
    {
      id: "ocher_dye",
      label: "[[Symbolic Identification (Ochre)]]",
      group: "culture",
      quote:
        "Symbolic marks as early shared identity signals.",
      cite: "Henshilwood et al. (2011)",
    },
    {
      id: "institutions_north",
      label: "[[Institutions Reduce Uncertainty]]",
      group: "governance",
      quote:
        "Institutions are constraints we impose to stabilize interactions; not necessarily efficient.",
      cite: "Douglass North (1990)",
    },
    {
      id: "institutions_macro",
      label: "[[Institutions Govern Societies]]",
      group: "governance",
      quote:
        "Institutions shape long-run development and state capacity.",
      cite: "Huntington; Acemoglu & Robinson (2012)",
    },

    // --- 2. Semantics: Cells → Prison Cells
    {
      id: "meaning_common_ref",
      label: "[[Biological Meaning = Common Reference]]",
      group: "semantics",
      quote:
        "Shared valuation / priors form a common reference frame.",
      cite: "Levin & Fields",
    },
    {
      id: "general_synchrony",
      label: "[[Shared Priors → General Synchrony]]",
      group: "semantics",
      quote:
        "Shared generative models coordinate behavior (e.g., birdsong).",
      cite: "Friston & Frith (2015); Isomura, Parr, Friston (2019)",
    },
    {
      id: "common_ground",
      label: "[[Common Ground]]",
      group: "semantics",
      quote:
        "Common ground enables relevance, cooperation, and joint action.",
      cite: "Tomasello (2016)",
    },
    {
      id: "narrative_paradigm",
      label: "[[Narrative Paradigm]]",
      group: "semantics",
      quote:
        "Political discourse builds shared ground via stories; rational when meeting narrative probability and fidelity.",
      cite: "Walter Fisher (1985)",
    },

    // --- 3. Multiple Null Hypothesis (reductive vs parsimonious agents)
    {
      id: "single_equilibrium",
      label: "[[Single Thermodynamic Equilibrium]]",
      group: "null",
      quote:
        "Ink disperses uniformly in solvent — but living systems maintain organized structure.",
      cite: "Friston’s self-organizing systems example",
    },
    {
      id: "steady_state",
      label: "[[Non-Equilibrium Steady States]]",
      group: "null",
      quote:
        "Agents maintain steady states amid changing niches via priors/generative models.",
      cite: "Active Inference & NESS",
    },
    {
      id: "homo_economicus",
      label: "[[Homo Economicus]]",
      group: "null",
      quote:
        "Utility-maximizing agent; reductive sketch of real social decision-making.",
      cite: "Friedman; Edgeworth; Jevons; Walras; Pareto",
    },
    {
      id: "coase_firm",
      label: "[[Why Firms Exist?]]",
      group: "null",
      quote:
        "If prices are sufficient, why bureaucratic firms? Transaction costs and politics matter.",
      cite: "Coase (1937)",
    },
    {
      id: "simon_we",
      label: "[[‘We’ as Decision Frame]]",
      group: "null",
      quote:
        "We/They pronouns define identification; employees adopt org goals as their own.",
      cite: "Herbert Simon (1992)",
    },
    {
      id: "kay_king",
      label: "[[Radical Uncertainty → Narratives]]",
      group: "null",
      quote:
        "Humans are social; strategy under uncertainty is narrated, not computed as neat probabilities.",
      cite: "Kay & King (2020)",
    },
    {
      id: "levi_strauss",
      label: "[[Binary Opposition]]",
      group: "null",
      quote:
        "Structuralist binaries pattern myth and culture.",
      cite: "Claude Lévi-Strauss",
    },
    {
      id: "derrida_diff",
      label: "[[Différance / Transcendental Signified]]",
      group: "null",
      quote:
        "No signs in isolation; the ‘transcendental signified’ is a mirage.",
      cite: "Derrida",
    },
    {
      id: "skinner_sr",
      label: "[[Stimulus → Response]]",
      group: "null",
      quote:
        "Behavior as input→output, bracketing internal state.",
      cite: "B. F. Skinner",
    },
    {
      id: "anderson_intervene",
      label: "[[Emotion as Intervening State]]",
      group: "null",
      quote:
        "Internal states flexibly map many inputs to many outputs.",
      cite: "David J. Anderson; Ralph Adolphs",
    },
    {
      id: "solms_damasio",
      label: "[[Affect → Felt Self]]",
      group: "null",
      quote:
        "Feelings knit processes into a coherent self.",
      cite: "Solms; Damasio",
    },
    {
      id: "cherNow_morgan_rockefeller",
      label: "[[Character > Collateral]]",
      group: "null",
      quote:
        "Pierpont Morgan: the first thing is character. Rockefeller: cooperation over rapacious competition.",
      cite: "Ron Chernow",
    },
    {
      id: "noble_relativ",
      label: "[[Biological Relativity]]",
      group: "null",
      quote:
        "No privileged causal level; higher scales constrain lower ones.",
      cite: "Denis Noble",
    },

    // --- 4. Narratives as Shared Reference Frame
    {
      id: "cosmic_man",
      label: "[[Jung: Cosmic Man]]",
      group: "narrative",
      quote:
        "Narratives bind the individual to a larger, archetypal self.",
      cite: "C. G. Jung",
    },
    {
      id: "booker_plots",
      label: "[[Booker: Seven Plots]]",
      group: "narrative",
      quote:
        "Protagonists align with or defy cultural identity; divided selves at stake in tragedy.",
      cite: "Christopher Booker",
    },
    {
      id: "bloom_shakespeare",
      label: "[[Bloom: Multitudinous Selves]]",
      group: "narrative",
      quote:
        "Shakespeare births modern selves, layered and self-aware.",
      cite: "Harold Bloom",
    },

    // --- 5. Active Inference → TMS
    {
      id: "duet_for_one",
      label: "[[Shared Generative Models]]",
      group: "tms",
      quote:
        "‘Duet for One’: alignment via generative models.",
      cite: "Friston & Frith (2015)",
    },
    {
      id: "levin_lightcone",
      label: "[[Identity Light Cone]]",
      group: "tms",
      quote:
        "Computational boundaries of self across time and scale.",
      cite: "Michael Levin",
    },
    {
      id: "epistemic_depth",
      label: "[[Epistemic Depth]]",
      group: "tms",
      quote:
        "Depth over levels of inference and timescales.",
      cite: "Laukkonen et al. (2025)",
    },
    {
      id: "linguistic_hierarchy",
      label: "[[Linguistic Hierarchy]]",
      group: "tms",
      quote:
        "Hierarchical structure of language supports deep inference.",
      cite: "Sandved-Smith et al. (2021)",
    },
    {
      id: "meta_awareness",
      label: "[[Meta-awareness Precision]]",
      group: "tms",
      quote:
        "Attention control as precision; meditation and prayer as levers.",
      cite: "Sandved-Smith et al. (2021)",
    },
    {
      id: "moh_core",
      label: "[[MOH: Morality → Symbols → Culture]]",
      group: "tms",
      quote:
        "Shared moral constraints scaffold symbolic cognition and culture.",
      cite: "Myth of Objectivity Hypothesis",
    },
    {
      id: "tms_core",
      label: "[[TMS: Model Selection]]",
      group: "tms",
      quote:
        "α-precision trades breadth (levels) and precision; selection across scales.",
      cite: "Transcendental Model Selection",
    },

    // --- 7. Simulations
    {
      id: "echo_chambers",
      label: "[[Echo-Chambers (Active Inference)]]",
      group: "sims",
      quote:
        "Agents sample to confirm prior beliefs; certainty hardens; echo-chambers form.",
      cite: "Albarracin et al. (2022)",
    },
    {
      id: "mab_scaling",
      label: "[[Multi-Arm Bandit Scaling]]",
      group: "sims",
      quote:
        "Scale-invariant promise of active inference across levels.",
      cite: "Thestrup Waade et al. (2025)",
    },
  ],
  links: [
    // Evolution chain
    { source: "moffett_accent", target: "kinzler_accent" },
    { source: "moffett_accent", target: "dunbar_gossip" },
    { source: "dunbar_gossip", target: "fehr_fischbacher" },
    { source: "fehr_fischbacher", target: "infant_morality" },
    { source: "infant_morality", target: "boehm_hierarchy" },
    { source: "boehm_hierarchy", target: "curry_universals" },
    { source: "curry_universals", target: "cultural_evo" },
    { source: "cultural_evo", target: "ocher_dye" },
    { source: "cultural_evo", target: "institutions_north" },
    { source: "institutions_north", target: "institutions_macro" },

    // Semantics chain
    { source: "meaning_common_ref", target: "general_synchrony" },
    { source: "general_synchrony", target: "common_ground" },
    { source: "common_ground", target: "narrative_paradigm" },

    // Null hypothesis contrasts
    { source: "single_equilibrium", target: "steady_state" },
    { source: "homo_economicus", target: "coase_firm" },
    { source: "coase_firm", target: "simon_we" },
    { source: "simon_we", target: "kay_king" },
    { source: "levi_strauss", target: "derrida_diff" },
    { source: "skinner_sr", target: "anderson_intervene" },
    { source: "anderson_intervene", target: "solms_damasio" },
    { source: "homo_economicus", target: "cherNow_morgan_rockefeller" },
    { source: "homo_economicus", target: "noble_relativ" },

    // Narrative
    { source: "cosmic_man", target: "booker_plots" },
    { source: "booker_plots", target: "bloom_shakespeare" },

    // TMS
    { source: "duet_for_one", target: "epistemic_depth" },
    { source: "levin_lightcone", target: "epistemic_depth" },
    { source: "epistemic_depth", target: "linguistic_hierarchy" },
    { source: "linguistic_hierarchy", target: "meta_awareness" },
    { source: "meta_awareness", target: "moh_core" },
    { source: "moh_core", target: "tms_core" },

    // Sims
    { source: "echo_chambers", target: "mab_scaling" },
  ],
};

export default REF_INDEX;
