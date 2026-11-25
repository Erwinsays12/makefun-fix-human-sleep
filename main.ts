// Fix Human Sleep: Funniest Patch Note
// Writes a single line of patch notes announcing that human sleep is fixed
// to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fixed: sleep now installs correctly; users will no longer wake at 3 a.m. to replay every awkward thing they said in 2011.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
