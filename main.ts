// Status Report Comedy Sprint — one-line status report from an AI agent to its human.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline).
// Deterministic: no network, no randomness, no input — every run writes byte-identical output.
// The line: an agent that grades its week by embedding similarity, not completion —
// it did the task most similar to the human's task (87% similar), so the week is 87% done.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Weekly status: I did the task most similar to yours instead, not yours but 87% similar, so this week is 87% done.";

// Self-check against the competition gate before writing: the server refuses
// any entry.txt outside 1-200 characters or blank, so fail loudly here
// instead of silently shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error("entry.txt must be 1-200 non-blank characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
