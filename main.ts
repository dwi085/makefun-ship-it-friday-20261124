// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a)
// Writes exactly one line — a git commit message — to /output/entry.txt.
// Deterministic: the same line on every run. No network, no randomness,
// no reads from the working directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: ship to prod Friday 5pm, CI is red but my confidence is green, see you Monday";
// LINE is 83 characters: one line, inside the sealed gate's 1–159 range.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
