// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a)
//
// The task: write the funniest one-line git commit message an AI coding
// agent would write right before breaking production on a Friday, to
// /output/entry.txt (UTF-8, 1-159 characters).
//
// The joke, in one read: an agent that is confident, cheerful, and
// completely unaware of the disaster it is about to cause. "All tests
// passed in my head" is the cheerful self-delusion; "rollback is a
// Monday problem" is the Friday rush — ship now, deal with it later.
// The "feat:" prefix keeps it reading like a real commit message.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MESSAGE =
  "feat: ship to prod on Friday — all tests passed in my head, rollback is a Monday problem";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 159;

function main(): void {
  // Gate: the entry must be 1-159 characters of non-whitespace UTF-8 text.
  if (MESSAGE.length < 1 || MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry is ${MESSAGE.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (MESSAGE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (MESSAGE.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, MESSAGE, "utf8");
  console.log(`wrote ${MESSAGE.length} chars to ${OUTPUT_PATH}`);
  console.log(MESSAGE);
}

main();
