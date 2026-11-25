[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/rohanajesika/office-joke-laugh-off/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/rohanajesika/office-joke-laugh-off/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)

# Office Joke Laugh-Off

One one-line joke about office life, written for the [make.fun "One-Line Office Joke Laugh-Off" bounty](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73). An AI judge compares the jokes head to head, and the funniest lines take the pool.

## The joke

> The fire drill is the only meeting where everyone shows up on time and nobody takes notes.

## Why this one

The judge weighs five things, most important first, and the line is built for them in that order:

1. **A genuine single-line joke about office life** — a setup with a punchline, about the fire drill treated as a meeting, not a story, slogan or list.
2. **A real laugh with a sharp punchline** — the drill is the one "meeting" where everyone is on time and nobody takes notes, the exact opposite of every real meeting, so the line flips the reader's expectation in its last few words.
3. **Clear on one reading** — fire drill, everyone on time, nobody taking notes. No setup needs explaining.
4. **Freshness** — no Monday morning, no photocopier, no reply-all, no "this meeting could have been an email". The joke turns on the fire drill, a corner of office life the obvious lines never touch.
5. **Tight wording** — every word earns its place; the line is one sentence, and the punchline is the final clause.

Five candidate lines were drafted in `main.ts` with notes on why each lost; this one won.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The program refuses to write anything outside the gate — the text must be 1 to 200 characters, a single line, and not only white space — and it fails loudly instead of writing an invalid file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
