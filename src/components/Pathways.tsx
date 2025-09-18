import React from "react";
import Mermaid from "./Mermaid";

const mermaidChart = `
%% Pathways overview
flowchart TB
  %% Lanes (categories shown as headers)
  subgraph lane0["Evolution → Semantics → Governance"]
    direction TB

    %% Evolution
    subgraph P1["1. Evolution"]
      direction TB
      A1["Accent bias / shibboleth (Kinzler 2007; Moffett 2019)"]
      A2["Moral control of norms (Dunbar 2004; Hamlin & Wynn 2016; Curry 2019)"]
      A3["Cultural learning at scale (Henrich 2016; Tomasello 2003)"]
      A4["Symbolic markers (ochre) (Henshilwood 2011)"]
      A5["Institutions and governance (North 1990; Acemoglu & Robinson 2012)"]
      A1 --> A2 --> A3 --> A4 --> A5
    end

    %% Semantics
    subgraph P2["2. Semantics: from cells to prison cells"]
      direction TB
      B1["Biological valuation / steady states (Levin & Fields 2021)"]
      B2["Shared generative models and synchrony (Friston & Frith 2015)"]
      B3["Common ground and shared intentionality (Tomasello 2016)"]
      B4["Narrative paradigm as shared frame (Fisher 1985)"]
      B1 --> B2 --> B3 --> B4
    end

    %% Multiple Null Hypotheses
    subgraph P3["3. Multiple Null Hypotheses"]
      direction TB
      C1["Single equilibrium → Non-equilibrium steady states (Friston)"]
      C2["Homo economicus → Firms, 'we' identity (Coase; Simon 1992)"]
      C3["Institutions constrain uncertainty (North 1990)"]
      C4["Binary opposition → différance, transcendental signified (Derrida 1976)"]
      C5["Stimulus-response → Emotions as intervening variable (Anderson 2022)"]
      C6["Selfish gene → Biological relativity across scales (Noble 2017)"]
      C1 --> C2 --> C3
      C1 --> C4
      C2 --> C5
      C6 -. supports .- C3
    end

    %% Narratives
    subgraph P4["4. Narratives as shared reference frames"]
      direction TB
      D1["Narrative probability and fidelity (Fisher 1985)"]
      D2["Archetypes and the cosmic self (Booker 2004)"]
      D3["Multiplicity of selves in literature (Bloom 1994)"]
      D1 --> D2 --> D3
    end

    %% Active Inference → TMS
    subgraph P5["5. Active Inference toward Shared Selection"]
      direction TB
      E1["Shared generative models for coordination (Friston & Frith 2015)"]
      E2["Self as information light cone (Levin 2019)"]
      E3["Epistemic depth across time (Laukkonen et al. 2025)"]
      E4["α weighs model choice across contexts"]
      E1 --> E2 --> E3 --> E4
    end

    %% Dual modes of attention
    subgraph P6["6. Dual modes of attention"]
      direction TB
      F1["Analytic and metaphorical reasoning (Vervaeke & Kennedy)"]
      F2["Classic and romantic stance, quality beyond both (Pirsig 1974)"]
      F3["Essence and surface (Hofstadter & Sanders 2013)"]
      F4["Left-leaning analytic bias in the West (McGilchrist 2009; Henrich 2020)"]
      F5["Fourfold vision pointer (Higgs on Blake 2021)"]
      F1 --> F2 --> F3 --> F4 --> F5
    end

    %% Simulations
    subgraph P7["7. Simulations"]
      direction TB
      G1["Echo chambers and selective sampling (Albarracin et al. 2022)"]
      G2["Active-inference bandits across levels (Waade et al. 2025)"]
      G3["Planned multi-level agents with α for cultural precision"]
      G1 --> G3
      G2 --> G3
    end
  end

  %% Cross-links to show causal or thematic ties
  A2 -. moral constraints .- E4
  B4 --> D1
  D2 -. archetypes support .- A5
  C3 --> A5
  F1 --> E4
  F2 -. context integration .- E4
  F4 -. motivates .- P5
`;

export default function Pathways() {
  return (
    <section id="paths" className="section">
      <h2 className="section-title">Seven Pathways</h2>

      {/* Diagram */}
      <div className="max-w-5xl mx-auto mb-10 rounded-xl border border-[color:var(--accent)]/25 p-4 bg-black/20">
        <Mermaid chart={mermaidChart} />
      </div>

      {/* Prose */}
      <div className="prose prose-invert max-w-3xl mx-auto">
        <h3>1. Evolution</h3>
        <p>
          The Myth of Objectivity tells humanity&apos;s journey to symbols beginning in the building
          blocks of social life. Infants prefer the sound of their mother’s voice before birth and
          soon after show preference for the accents of their home environment (Kinzler 2007).
          Shibboleth, or accents bias as a marker of group identity, becomes the first foundation of
          trust among strangers (Moffett 2019). From this origin point, cooperation scales outward.
        </p>
        <p>
          From an active inference point of view, accents suggest a common normative pattern. What
          happens when social norms become complex and deviations start to follow. What happens when
          people choose not to follow a norm for their own or some other motive. Morality follows as
          the second foundation.
        </p>
        <p>
          Robin Dunbar observed that gossip functions as a mechanism of social control, enforcing
          norms within larger groups (Dunbar 2004). Moral judgments and norm violations become the
          levers through which cooperation is secured. Infants as young as a few months evaluate
          others according to sociomoral behavior (Hamlin and Wynn 2016). Joshua Greene, Paul Bloom,
          and Christopher Boehm each argue in different ways that morality is both innate and
          parsimonious, establishing codes that balance fairness, reciprocity, and harm avoidance.
          Oliver Scott Curry’s cross-cultural study confirms the universality of these principles
          (Curry et al. 2019).
        </p>
        <p>
          Culture grows from these foundations. Humans are unique in the way they learn from
          individuals they will never meet, building an archive of anonymous experience. Joseph
          Henrich calls this the secret of our success (Henrich 2016). Michael Tomasello has shown
          how teaching and imitation scaffold these capacities (Tomasello 2003). Symbolic markers
          such as ochre, appearing more than seventy thousand years ago, suggest that identity and
          symbolic cognition were bound together from the start (Henshilwood et al. 2011).
        </p>
        <p>
          Governance emerges as the coordination of moral and cultural structures at scale, captured
          in the contested concept of institutions. Douglass North defined institutions as the
          constraints humans place on themselves to reduce uncertainty (North 1990). Acemoglu and
          Robinson emphasized that institutions, not individual rationality, determine whether
          societies thrive or collapse (Acemoglu and Robinson 2012). The trajectory from accent to
          morality to culture to governance shows that each layer scaffolds the next. Symbolic
          cognition grows out of these nested levels rather than appearing in isolation.
        </p>

        <hr />

        <h3>2. Semantics: From Cells to Prison Cells</h3>
        <p>
          Meaning begins in biology as shared priors and generative models. Robert Pirsig argued for
          what he called Quality in Zen and the Art of Motorcycle Maintenance, an atavistic motive
          force of life that precedes and may give rise to subject and object distinctions
          (Pirsig 1974). Michael Levin formalizes this view when demonstrating that cells themselves
          maintain a kind of valuation, holding to steady states that reflect shared information
          across tissues (Levin and Fields 2021). Karl Friston and Chris Frith described how shared
          generative models allow synchrony between agents, whether in birdsong or human conversation
          (Friston and Frith 2015). Synchrony allows expectations to be coordinated.
        </p>
        <p>
          Meaning expands into the linguistic notion of common ground. Michael Tomasello showed that
          human communication is uniquely structured around shared intentionality (Tomasello 2016).
          Communication requires a horizon of relevance, maintained by establishing what each
          participant can reasonably assume. Walter Fisher named this expansion of common ground the
          narrative paradigm. He described narration as a theory of symbolic actions, words and deeds
          that have sequence and meaning for those who live, create, or interpret them (Fisher 1985).
          Biological meaning becomes cultural meaning through the same demand: the necessity of a
          shared reference frame.
        </p>

        <hr />

        <h3>3. Multiple Null Hypotheses</h3>
        <p>
          Modern sciences often begin from reductive hypotheses. Economists assumed the
          self-interested agent, physicists modeled single equilibrium systems, and biologists argued
          for selfish genes (Noble 2017). Each of these claims became a kind of null hypothesis.
          Human beings and living systems are more complex, yet not without bounds. We are stable
          systems that, in active inference, can be viewed as parsimonious models of our
          environment. To understand the nature of our models, and what factors we emphasize or
          suppress, we can look to work that tested these reductive theories.
        </p>
        <p>
          The single equilibrium of thermodynamics, as taught by Boltzmann, predicts that ink
          disperses through water until it reaches uniform concentration. Yet the systems that matter
          are those that resist this outcome, finding non-equilibrium steady states that hold
          together in changing conditions. Friston uses this example to explain why active inference
          offers a better account of persistence in living systems.
        </p>
        <p>
          Economics is shaped by the same paradox. The homo economicus of the neoclassical view
          is contradicted by Ronald Coase, who asked why firms exist at all if rational agents could
          coordinate through markets (Coase 1937). Herbert Simon argued that the pronouns we and they
          reveal how individuals identify with organizational goals and suspend selfish calculation
          (Simon 1992). Douglass North defined institutions as the constraints humans impose on
          themselves to stabilize cooperation, specifically by contrasting the view of agents as
          self-utility maximizers (North 1990). John D. Rockefeller and J. P. Morgan, described by
          Ron Chernow, recognized the importance of cooperation and moral trust as the basis of
          finance, rather than price signals alone (Chernow 1990).
        </p>
        <p>
          Claude Lévi-Strauss described binary oppositions as the grammar of myth, but Jacques
          Derrida argued that oppositions are dynamic, always deferring to what he called the
          transcendental signified (Derrida 1976). B. F. Skinner modeled behavior as stimulus and
          response, but Ralph Adolphs and David Anderson showed that emotions act as intervening
          variables, creating an inner space that allows for flexibility (Anderson 2022). Richard
          Dawkins’ selfish gene was countered by Denis Noble’s biological relativity, which argues
          that causation runs across scales, not from a privileged molecular level (Noble 2017).
        </p>
        <p>
          These contradictions converge on a theme. Human beings and their societies are not captured
          by single-variable reduction, yet they do not require an infinite catalogue. Active
          inference offers a parsimonious balance. Agents are models that trade accuracy for
          complexity, and minimize future uncertainty through constraint. For humanity these are the
          constraints that we feel, moral constraints that go with our ability to identify within
          groups and scale our goals.
        </p>

        <hr />

        <h3>4. Narratives as Shared Reference Frames</h3>
        <p>
          Narrative allows humans to construct common reference frames. Fisher argued that stories
          are rational when they satisfy narrative probability and fidelity (Fisher 1985). Narratives
          bind facts into a sequence and make them intelligible. Neither the facts nor our experience
          come to us as disconnected packets. They stand in need of a narrative that can bind them
          into a coherent pattern.
        </p>
        <p>
          Christopher Booker, drawing from Jung, described stories as the alignment of the
          protagonist with the cosmic self. The tragic hero is divided against himself, tempted to
          transgress law and convention, wavering between duty and desire (Booker 2004). Stories show
          how individuals align or misalign with cultural archetypes.
        </p>
        <p>
          Harold Bloom argued that Shakespeare invented the human by proliferating selves. Chaucer,
          Shakespeare, Jane Austen, and Emily Dickinson became canonical in part by dramatizing the
          mutability of identity and the struggle of self-discovery (Bloom 1994). These literary
          shifts coincided with the decline of shared religious mythologies and the rise of
          individual hermeneutics, as Joseph Henrich traces in the roots of Western individualism.
        </p>

        <hr />

        <h3>5. Active Inference to Transcendental Model Selection</h3>
        <p>
          Active inference generalizes the view of the brain as a prediction engine to living
          systems. Organisms persist by modeling their environment and minimizing uncertainty about
          the future. This framework extends to culture.
        </p>
        <p>
          Frith and Friston argued that shared generative models allow agents to coordinate (Friston
          and Frith 2015). Levin described identity in computational terms, noting that the self is
          bounded by a light cone of information processing (Levin 2019). Ruben Laukkonen and
          colleagues introduced epistemic depth, describing how models extend across temporal scales
          (Laukkonen et al. 2025).
        </p>
        <p>
          Transcendental Model Selection builds on these ideas. The parameter α, defined as a
          function of precision, context, and scale, governs the choice between competing models.
          Morality functions as a computational parameter. It weights which model of behavior should
          be followed when multiple contexts compete. Norms diverge in family life, friendship, work,
          or anonymous society, but morality integrates them. What Jung intuited as the cosmic self
          and what Viktor Frankl described as the meaning that sustains life can here be given
          computational form.
        </p>

        <hr />

        <h3>6. Dual Modes of Attention</h3>
        <p>
          Cognition unfolds through two modes. The analytic mode parses information in sequence. The
          gestalt mode sees wholes, analogies, and patterns. Each is indispensable, and each by
          itself is incomplete.
        </p>
        <p>
          John Vervaeke and John Kennedy contrasted analytic and metaphorical reasoning. Robert
          Pirsig described the same polarity as the classic versus romantic stance, and observed that
          quality lies beyond either mode (Pirsig 1974). Douglas Hofstadter and Emmanuel Sanders used
          the terms essence and surface to capture the same duality (Hofstadter and Sanders 2013).
          Iain McGilchrist, similar to Henrich, argued that Western culture privileges the analytic
          through left-brain dominance at the expense of holistic attention (McGilchrist 2009;
          Henrich 2020). William Blake criticized Newton’s singular vision and urged a return to what
          he called fourfold vision (Higgs 2021). In these terms, transcendental model selection
          requires both. The analytic mode deepens epistemic hierarchy. The gestalt mode enables
          cross-context integration.
        </p>

        <hr />

        <h3>7. Simulations</h3>
        <p>
          The final step is to test these ideas in silico. Albarracin and colleagues modeled echo
          chambers using active inference and showed how agents reinforce beliefs through selective
          sampling of evidence (Albarracin et al. 2022). Thestrup Waade and others applied active
          inference to multi-arm bandit problems and showed how uncertainty minimization scales
          across levels (Waade et al. 2025).
        </p>
        <p>
          My own simulation goals extend this work. Agents can be modeled at intimate, shibboleth,
          and cultural levels, each with distinct states, observations, and actions. The α parameter
          captures cultural precision, constraining beliefs and shaping cooperation. From there we
          can ask questions about the transition from egalitarian morality to archetypal roles, the
          emergence of symbolic scaffolding, and the possibility of using moral precision as a
          principle for AI alignment.
        </p>
      </div>
    </section>
  );
}
