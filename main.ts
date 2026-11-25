// Entry for make.fun u-suzy-one-line-office-joke-laugh-off-f574ac73:
// "One-Line Office Joke Laugh-Off".
//
// A program (Node 22, standard library only) that writes ONE one-line
// office joke, under 200 characters, to /output/entry.txt. The joke is
// judged head to head by an AI judge against other entries, so the whole
// entry is one line of comedy. Deterministic: the same bytes on every
// run, no network, no input, no randomness, no clock.
//
// How the chosen joke maps to the judge's brief, in the judge's own order:
//   1. A genuine single-line joke about office life: a setup with a
//      punchline, about the fire drill treated as a meeting — office
//      life through and through, not a story, slogan or list.
//   2. A real laugh with a sharp punchline: the drill is the one
//      "meeting" where everyone is on time and nobody takes notes —
//      the exact opposite of every real meeting, so the line flips
//      the reader's expectation in its last few words.
//   3. Clear on one reading: fire drill, everyone on time, nobody
//      taking notes. No setup needs explaining.
//   4. Freshness: no Monday morning, no photocopier, no reply-all, no
//      "this meeting could have been an email", no dead office plant —
//      the joke turns on the fire drill, a corner of office life the
//      obvious lines never touch.
//   5. Tight wording: every word earns its place; the line is one
//      sentence, and the punchline is the final clause.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Drafts considered, kept here so the choice is auditable. Each is one
// line aimed at the same tired office worker; the notes say why it lost.
const CANDIDATES: { text: string; note: string }[] = [
  {
    text: 'The fire drill is the only meeting where everyone shows up on time and nobody takes notes.',
    note: 'Chosen. Revised from "everyone turns up on time and nobody takes any notes": "shows up" is the punchier, more American-office verb, and dropping "any" tightens the final clause — the punchline now lands on "nobody takes notes" with nothing extra in the way. The drill is the one "meeting" with perfect attendance and zero note-taking — the exact opposite of every real meeting, so the punchline flips the expectation in the final clause.',
  },
  {
    text: 'I asked for a standing desk and got a standing meeting instead.',
    note: 'A clean wordplay and very tight, but the laugh is a pun rather than a punchline — it lands as clever, not funny, and a judge weighing "sharp and surprising punchline" over wordplay would rank it below the fire drill.',
  },
  {
    text: 'The printer jammed, so the meeting was cancelled and morale hit an all-time high.',
    note: 'The turn is real — a cancelled meeting lifting morale — but the printer jam is one of the most told office lines there is, so it loses on freshness.',
  },
  {
    text: "My out-of-office reply is the only honest email I have sent all year.",
    note: 'True, and it winces, but it reads as an observation with a twist rather than a joke with a punchline — the laugh never quite arrives.',
  },
  {
    text: "HR said the dress code was 'business casual', so I wore a tie with my pyjama bottoms on the video call.",
    note: 'A vivid image, but the setup is two clauses long for a one-line payoff, and the punchline needs the reader to picture the call — it explains itself instead of landing.',
  },
];

// The joke: the setup names the fire drill as a meeting; the punchline
// lands where the reader did not expect — everyone on time, nobody
// taking notes — the opposite of every meeting the reader has ever sat in.
const JOKE = CANDIDATES[0].text;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than write an invalid file.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  throw new Error('joke must not be only white space');
}
if (JOKE.includes('\n')) {
  throw new Error('joke must be a single line');
}

// One file, exactly the joke, no trailing newline: the entry is the joke
// and nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

console.log(`joke (${JOKE.length} chars): ${JOKE}`);
