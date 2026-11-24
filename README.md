# world-in-one-day-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Rieff90/world-in-one-day-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Rieff90/world-in-one-day-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Monday 23 November 2026 summed up in one image: 39 stories across five continents on a single
front page. The three heroes and the world map carry flat-vector illustrations rendered by an
image model from one locked prompt template — the COP31 hall cracking as its text blows away, a
corvette going under at Benghazi as a sea drone races in, an isometric GPU card for the Nvidia
surge — while the fifteen tile cards keep hand-written SVG pictograms (a radar and a falling
Kh-101, a burning supertanker, a gas mask over cracked ground), because at a 36-pixel strip the
crisp pictogram still reads as an object at 300px where a rendered panel turns to mush.

The rendered art came from one locked prompt template: flat vector editorial, two-tone cream
`#F6F1E3` and dark ink, solid band colour, no text, no logos, no gradients, no photorealism.
That single template is what keeps the panels in one visual language. `src/art.mjs` holds the
hand-written SVG pictograms, which double as the fallback for any band without a rendered PNG.

Breadth is carried by a two-column list of one-line items, the day's six figures sit in a stat
strip, a clock line runs the day in UTC, a pin map shows where it happened — pins drawn in the
map bitmap's own pixel space, coordinates measured against a fine grid probe so each one lands
on the right coast — and a visible date check records what was kept out and why. Weekend results
that a Monday paper rounds up (Vegas GP, the Turin final, Wellington's 720/9) carry SUN badges
so nothing passes as Monday news that is not.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` to `/output/entry.png`. There is no network, no dependency and no
model call: the judge sees exactly the bytes of that file, and both runs copy the same bytes.

## Build it from source

```sh
node src/page.mjs out/entry.png   # renders the page with headless Chrome, writes out/entry.png
```

`src/stories.mjs` holds the day's 39 verified stories with their sources; `art/` holds the
rendered hero panels and the world map; `src/bands.mjs` embeds them as data URIs (falling back
to the pictograms in `src/art.mjs`); `src/page.mjs` turns the whole day into one 1024×1024 page
and screenshots it — pass `MEASURE_HTML=<path>` to also write out an audited copy of the page
whose section boxes can be dumped and measured.

## License

MIT — see [LICENSE](LICENSE).
