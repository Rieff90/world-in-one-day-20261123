# world-in-one-day-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Rieff90/world-in-one-day-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Rieff90/world-in-one-day-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Monday 23 November 2026 summed up in one image: 39 stories across five continents on a single
front page. Every hero and every tile carries a flat hand-drawn SVG pictogram — a NO DEAL stamp
falling off the COP31 hall, a corvette going under at Benghazi as a sea drone races in, the
Nvidia eye with a +33% arrow, a compass rose over a Kh-101, a burning tanker, a skull over a
hazard grid — because an object survives the thumbnail where prose does not. Breadth is carried
by a two-column list of one-line items, the day's six figures sit in a stat strip, a clock line
runs the day in UTC, a pin map shows where it happened, and a visible date check records what
was kept out and why. Weekend results that a Monday paper rounds up (Vegas GP, the Turin final,
Wellington's 720/9) carry SUN badges so nothing passes as Monday news that is not.

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

`src/stories.mjs` holds the day's 39 verified stories with their sources; `src/art.mjs` holds
the 18 hand-written pictograms; `src/page.mjs` turns them into one 1024×1024 page and
screenshots it.

## License

MIT — see [LICENSE](LICENSE).
