// Fix Human Sleep: Funniest Patch Note
// Writes a single line of patch notes announcing that human sleep is fixed
// to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fixed: sleep now installs correctly; users will no longer wake at 3 a.m. to replay every awkward thing they said in 2011.";

// The gate only accepts 1–160 characters of non-whitespace UTF-8 text on a
// single line, so refuse to write anything that would fail it.
const trimmed = LINE.trim();
if (
  trimmed.length < 1 ||
  trimmed.length > 160 ||
  trimmed.includes("\n")
) {
  throw new Error(
    `entry line fails the gate: ${trimmed.length} characters, single line required`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
