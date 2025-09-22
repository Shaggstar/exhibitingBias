import React from "react";

type MatrixRow = {
  key: string;
  name: string;
  def: string;
  intimates: string;
  shibboleth: string;
  culture: string;
};

const ROWS: MatrixRow[] = [
  {
    key: "A",
    name: "A — Likelihood P(O|S)",
    def: "Observation given latent state.",
    intimates:
      "Affect ↔ emotion; partner action observed given type; payoff given (partner, action).",
    shibboleth:
      "Token/badge given signal status; feedback (approval / sanction) given (ingroup belief, action).",
    culture:
      "Broadcast & reputation given (norm, action, context); payoff given (action, partner type). α tightens approval / sanction.",
  },
  {
    key: "B",
    name: "B — Transitions P(Sₜ|Sₜ₋₁,Uₜ₋₁)",
    def: "How latent states evolve after actions.",
    intimates:
      "Trust falls after defect / hit; emotion drifts toward anger after sanction; partner type slowly inferred.",
    shibboleth:
      "ingroup belief → in after consistent pass + cooperation; failed signals push toward out; type updated via actions.",
    culture:
      "Norm → aligned with approval of cooperation & sanction of defection; role shifts (warrior / sage); α rises with reliable, low-entropy feedback.",
  },
  {
    key: "D",
    name: "D — Priors over Initial States",
    def: "Starting beliefs before evidence.",
    intimates:
      "trust: high; emotion: happy; partner type: cooperative (benign prior among intimates).",
    shibboleth:
      "Weak ingroup prior; modest prior that signals will pass.",
    culture:
      "role: egalitarian; norm alignment ≈ 0.6; context mixes ingroup-unknown / anonymous; moderate α prior.",
  },
  {
    key: "E",
    name: "E — Priors over Policies",
    def: "Habitual action preferences.",
    intimates:
      "Habit: cooperate; avoid if trust collapses.",
    shibboleth:
      "Habit: light signal_ingroup prior to cooperation.",
    culture:
      "Habit: cooperate + approve; sanction clear defection in anonymous contexts.",
  },
];

export default function POMDPMatrix() {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold mb-2">ABDE matrices (quick view)</h3>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-[color:var(--accentSoft)]">
            <tr>
              <th className="p-2 text-left w-[12%]">Matrix</th>
              <th className="p-2 text-left w-[20%]">Definition</th>
              <th className="p-2 text-left w-[22%]">Intimates</th>
              <th className="p-2 text-left w-[22%]">Shibboleth</th>
              <th className="p-2 text-left w-[24%]">Moral / Cultural</th>
            </tr>
          </thead>
          <tbody className="[&_tr:nth-child(odd)]:bg-black/20">
            {ROWS.map((row) => (
              <tr key={row.key} className="align-top">
                <td className="p-2 font-medium text-[color:var(--text)]">{row.name}</td>
                <td className="p-2 text-[color:var(--subtext)]">{row.def}</td>
                <td className="p-2 text-[color:var(--subtext)]">{row.intimates}</td>
                <td className="p-2 text-[color:var(--subtext)]">{row.shibboleth}</td>
                <td className="p-2 text-[color:var(--subtext)]">{row.culture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-xs text-[color:var(--accentSoft)]">
        Summarized from your Goals &amp; POMDP notes (ABDE portions). See the embedded PDF for full context and the C-matrix preferences.
      </p>
    </div>
  );
}
