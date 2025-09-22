import { useMemo } from "react";
import refsRaw from "./references.md?raw";
import { parseReferencesMD, type RefEntry } from "../lib/refLoader";

export function usePathwaysData() {
  return useMemo<RefEntry[]>(() => parseReferencesMD(refsRaw), []);
}
