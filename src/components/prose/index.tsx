import React, { Suspense } from "react";

const P1 = React.lazy(() => import("./Pathway1"));
const P2 = React.lazy(() => import("./Pathway2"));
const P3 = React.lazy(() => import("./Pathway3"));
const P4 = React.lazy(() => import("./Pathway4"));
const P5 = React.lazy(() => import("./Pathway5"));
const P6 = React.lazy(() => import("./Pathway6"));
const P7 = React.lazy(() => import("./Pathway7"));

export function ProseForPathway({ pathway }: { pathway: number }) {
  const View =
    pathway === 1 ? P1 :
    pathway === 2 ? P2 :
    pathway === 3 ? P3 :
    pathway === 4 ? P4 :
    pathway === 5 ? P5 :
    pathway === 6 ? P6 : P7;

  return (
    <Suspense fallback={<div className="text-xs text-[color:var(--accentSoft)]">loading…</div>}>
      <View />
    </Suspense>
  );
}
