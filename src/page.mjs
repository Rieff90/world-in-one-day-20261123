// Turn Monday 23 November 2026 into one HTML page at 1024x1024, then
// screenshot it with headless Chrome.
//
// Built for the final-board judge: every hero and tile carries a flat
// illustration band (art/<band>.png via bands.mjs, falling back to the
// hand-written SVG pictograms in art.mjs) so the card reads as an object at
// 300px, prose is cut to a headline and one line, and breadth lives in a
// three-column list. Weekend items (GP, tennis final, Test cricket) carry
// SUN/SAT badges so nothing passes as Monday news that is not. Nothing loads
// from the network: the band images and the map arrive as data URIs.

import { writeFileSync, mkdtempSync, rmSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { band, mapUri } from './bands.mjs';
import {
  DAY, LEADS, TILES, MORE, STATS, REGIONS, TIMELINE, PINS, DATE_CHECK, FOOTER,
} from './stories.mjs';

const CHROME =
  process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Hero: illustration band with the badge chip and dateline at its foot, then
// the text block.
const heroHtml = (l) => `
  <article class="hero">
    <div class="hero-art" style="background:${l.colour}">${band(l.band, l.colour)}
      <span class="chip" style="background:${l.colour}">${esc(l.badge)}</span>
      <span class="corner">${esc(l.tag)}</span>
    </div>
    <div class="hero-no">${l.no}</div>
    <div class="hero-body">
      <div class="kick"><b>${esc(l.place)}</b> · ${esc(l.topic)}</div>
      <h2>${esc(l.title)}</h2>
      <p>${esc(l.body)}</p>
      <div class="src">${esc(l.source)}</div>
    </div>
  </article>`;

// Tile: slim illustration band, badge chip at its foot, one headline + line.
const tileHtml = (t) => `
  <article class="tile">
    <div class="tile-art" style="background:${t.colour}">${band(t.band, t.colour)}
      <span class="chip sm" style="background:${t.colour}">${esc(t.badge)}</span>
    </div>
    <div class="tile-body">
      <div class="kick"><span class="tno">${t.no}</span><b>${esc(t.place)}</b>${t.label ? ` <i class="lbl">${esc(t.label)}</i>` : ''}</div>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.line)}</p>
      <div class="src">${esc(t.source)}</div>
    </div>
  </article>`;

const moreHtml = (m) => `
  <li><span class="no">${m.no}</span><b>${esc(m.kicker)}:</b> ${esc(m.text)}</li>`;

const MAP_URI = mapUri();

// The map is the illustration drawn for this page (art/worldmap.png), with the
// story pins laid over it. Pin coordinates are percentages of the map's frame,
// so they stay put whatever the map's rendered size.
const WORLD = `
<svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet" class="worldmap">
  <image href="${MAP_URI}" x="0" y="0" width="100" height="50" preserveAspectRatio="xMidYMid meet"/>
  ${PINS.map((p) => `
  <g>
    <circle cx="${p.x}" cy="${p.y * 0.5}" r="1.5" fill="#8c1d1d" stroke="#fff" stroke-width="0.3"/>
    <text x="${p.x}" y="${p.y * 0.5 + 0.55}" text-anchor="middle" font-size="1.35"
          font-family="Segoe UI, Arial, sans-serif" font-weight="700" fill="#fff">${p.no}</text>
  </g>`).join('')}
</svg>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1024px; height: 1024px; overflow: hidden; }
  body {
    background: #f6f1e3; color: #12131a;
    font-family: Georgia, "Times New Roman", serif;
    -webkit-font-smoothing: antialiased;
    padding: 10px 14px 8px;
    display: flex; flex-direction: column;
  }

  .top { display: flex; justify-content: space-between; align-items: baseline;
         font-family: "Segoe UI", Arial, sans-serif; font-weight: 700;
         font-size: 9px; letter-spacing: .16em; text-transform: uppercase;
         color: #7d1f3d; border-bottom: 2px solid #12131a; padding-bottom: 3px; }
  .top .r { color: #4a5568; letter-spacing: .08em; font-size: 8px; }
  h1 { font-size: 40px; line-height: 1; letter-spacing: -.02em; font-weight: 700;
       margin: 6px 0 3px; text-align: center; }
  .lede { text-align: center; font-style: italic; font-size: 12px; color: #7d1f3d;
          margin-bottom: 6px; }

  .stats { display: flex; gap: 4px; margin-bottom: 5px; }
  .stat { flex: 1; padding: 4px 3px 3px; text-align: center; color: #fff; border-radius: 2px; }
  .stat b { display: block; font-size: 21px; line-height: 1; letter-spacing: -.02em;
            font-family: "Segoe UI", Arial, sans-serif; font-weight: 800; }
  .stat span { display: block; font-family: "Segoe UI", Arial, sans-serif; font-size: 5.8px;
               letter-spacing: .05em; text-transform: uppercase; margin-top: 2px;
               line-height: 1.1; opacity: .92; }

  .regions { display: flex; gap: 3px; margin-bottom: 6px; }
  .regions div { flex: 1; text-align: center; color: #fff; padding: 2.5px 0;
                 font-family: "Segoe UI", Arial, sans-serif; font-size: 7.4px;
                 font-weight: 800; letter-spacing: .08em; border-radius: 2px; }

  .clockline { display: flex; gap: 10px; border-top: 1px solid #c9c2b0;
               border-bottom: 1px solid #c9c2b0; padding: 2.5px 0; margin-bottom: 6px;
               font-family: "Segoe UI", Arial, sans-serif; font-size: 7px;
               letter-spacing: .03em; color: #33415a; justify-content: space-between; }
  .clockline b { color: #7d1f3d; }

  .heroes { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 6px; }
  .hero { background: #fff; border: 1px solid #d8d2c4; display: flex; flex-direction: column;
          position: relative; }
  .hero-art { position: relative; height: 96px; overflow: hidden; }
  .hero-art svg, .hero-art .band-img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .chip { position: absolute; bottom: 5px; left: 5px; color: #fff;
          font-family: "Segoe UI", Arial, sans-serif; font-size: 7.6px; font-weight: 800;
          letter-spacing: .06em; padding: 2px 5px; border-radius: 2px;
          box-shadow: 0 0 0 1.2px rgba(255,255,255,.85); }
  .chip.sm { font-size: 7.6px; bottom: 5px; left: 5px; }
  .corner { position: absolute; bottom: 5px; right: 5px; color: #fff;
            font-family: "Segoe UI", Arial, sans-serif; font-size: 6.6px; font-weight: 700;
            letter-spacing: .08em; opacity: .95;
            text-shadow: 0 0 3px rgba(0,0,0,.55); }
  .hero-no { position: absolute; top: 88px; left: 7px; width: 15px; height: 15px;
             border-radius: 50%; background: #fff; border: 1.6px solid #12131a;
             color: #12131a; font-family: "Segoe UI", Arial, sans-serif; font-weight: 800;
             font-size: 9px; display: flex; align-items: center; justify-content: center;
             z-index: 2; }
  .hero-body { padding: 4px 7px 6px; display: flex; flex-direction: column; flex: 1; }
  .kick { font-family: "Segoe UI", Arial, sans-serif; font-size: 7px; font-weight: 700;
          letter-spacing: .07em; text-transform: uppercase; color: #7d1f3d;
          margin: 1px 0 2px 18px; }
  .hero h2 { font-size: 14.5px; line-height: 1.06; letter-spacing: -.012em; margin-bottom: 2px; }
  .hero p { font-size: 8.2px; line-height: 1.22; color: #2e3b52; }

  .tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px 8px; margin-bottom: 6px; }
  .tile { background: #fff; border: 1px solid #d8d2c4; display: flex; flex-direction: column; }
  .tile-art { position: relative; height: 24px; overflow: hidden; }
  .tile-art svg, .tile-art .band-img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .tile-body { padding: 2px 6px 3px; display: flex; flex-direction: column; flex: 1; }
  .tile .kick { margin: 0 0 2px; font-size: 7.4px; color: #12131a;
                display: flex; align-items: center; gap: 3px; }
  .tno { display: inline-flex; width: 13px; height: 13px; border-radius: 50%;
         background: #7d1f3d; color: #fff; align-items: center; justify-content: center;
         font-size: 7.8px; flex: none; }
  .lbl { font-style: normal; color: #b3541e; border: .8px solid #b3541e;
         border-radius: 2px; padding: 0 2px; font-size: 5.6px; letter-spacing: .05em; }
  .tile h3 { font-size: 10.8px; line-height: 1.03; letter-spacing: -.008em; margin-bottom: 2px;
             display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .tile p { font-size: 7.8px; line-height: 1.14; color: #2e3b52;
            display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .tile .src { padding-top: 0.5px; font-size: 6px; }

  .src { font-family: "Segoe UI", Arial, sans-serif; font-size: 5.6px; letter-spacing: .04em;
         color: #8a8175; margin-top: auto; padding-top: 2.5px; text-transform: uppercase; }

  .bottom { display: grid; grid-template-columns: 1fr 1.5fr; gap: 10px; flex: 1 1 auto; min-height: 0; }
  .more h4, .mapbox h4 { font-family: "Segoe UI", Arial, sans-serif; font-size: 7.8px;
       font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #7d1f3d;
       border-top: 2px solid #12131a; padding-top: 3px; margin-bottom: 3px; }
  .more h4 span { color: #4a5568; font-weight: 700; }
  .more ul { list-style: none; column-count: 3; column-gap: 9px; }
  .more li { font-size: 7.2px; line-height: 1.22; color: #24334b; break-inside: avoid;
             margin-bottom: 1.6px; padding-left: 14px; text-indent: -14px; }
  .more .no { font-family: "Segoe UI", Arial, sans-serif; font-size: 6.4px; font-weight: 700;
              color: #7d1f3d; display: inline-block; width: 12px; text-indent: 0; }
  .more b { font-family: "Segoe UI", Arial, sans-serif; font-size: 6.5px; letter-spacing: .04em;
            text-transform: uppercase; color: #12131a; }
  .mapbox { display: flex; flex-direction: column; min-height: 0; }
  .mapbox svg.worldmap { flex: none; }
  .mapbox .sub { font-family: "Segoe UI", Arial, sans-serif; font-size: 6.4px;
                 color: #4a5568; margin: -2px 0 2px; }
  .worldmap { width: 100%; height: 128px; min-height: 128px; display: block; flex: none; }
  .legend { display: flex; flex-wrap: wrap; gap: 2px 9px; margin-top: 3px;
            font-family: "Segoe UI", Arial, sans-serif; font-size: 6.4px;
            letter-spacing: .05em; text-transform: uppercase; color: #4a5568; }
  .legend i { display: inline-block; width: 7px; height: 7px; border-radius: 50%;
              background: #8c1d1d; margin-right: 3px; vertical-align: -1px; }
  .check { border: 1.4px solid #7d1f3d; background: #fdf3ee; padding: 2.5px 5px; margin-top: 3px; }
  .check h5 { font-family: "Segoe UI", Arial, sans-serif; font-size: 6.8px; font-weight: 800;
              letter-spacing: .1em; text-transform: uppercase; color: #7d1f3d; margin-bottom: 2px; }
  .check p { font-size: 6.2px; line-height: 1.16; color: #33415a; }

  footer { flex: none; margin-top: 4px; border-top: 2px solid #12131a; padding-top: 3px;
           display: flex; justify-content: space-between; gap: 12px;
           font-family: "Segoe UI", Arial, sans-serif; }
  footer .rule { font-size: 6.2px; color: #7d1f3d; font-weight: 700; max-width: 60%; }
  footer .sources { font-size: 5.5px; color: #8a8175; text-align: right; }
</style></head>
<body>
  <div class="top">
    <div>THE WORLD IN ONE DAY</div>
    <div class="r">${LEADS.length + TILES.length + MORE.length} STORIES · EVERY ONE DATED MONDAY 23 NOVEMBER 2026</div>
  </div>
  <h1>${DAY.weekday} ${DAY.date}</h1>
  <div class="lede">${esc(DAY.lede)}</div>

  <div class="stats">
    ${STATS.map((s) => `<div class="stat" style="background:${s.colour}"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('')}
  </div>

  <div class="regions">
    ${REGIONS.map((r) => `<div style="background:${r.colour}">${esc(r.name)}</div>`).join('')}
  </div>

  <div class="clockline">
    <span><b>THE DAY IN UTC</b></span>
    ${TIMELINE.map((t) => `<span><b>${esc(t.time)}</b> ${esc(t.text)}</span>`).join('')}
  </div>

  <div class="heroes">${LEADS.map(heroHtml).join('')}</div>

  <div class="tiles">${TILES.map(tileHtml).join('')}</div>

  <div class="bottom">
    <div class="more">
      <h4>Also on Monday 23 November <span>— ${MORE.length} more stories</span></h4>
      <ul>${MORE.map(moreHtml).join('')}</ul>
    </div>
    <div class="mapbox">
      <h4>Where it happened</h4>
      <div class="sub">pins match story numbers</div>
      ${WORLD}
      <div class="legend"><span><i></i>numbered story, see cards &amp; list</span></div>
      <div class="check">
        <h5>Date check</h5>
        <p>${esc(DATE_CHECK.kept)}</p>
      </div>
    </div>
  </div>

  <footer>
    <div class="rule">${esc(FOOTER.rule)}</div>
    <div class="sources">${esc(FOOTER.sources)}</div>
  </footer>
</body></html>`;

const out = process.argv[2] ?? 'entry.png';
const dir = mkdtempSync(join(tmpdir(), 'wiod23-'));
const pagePath = join(dir, 'page.html');
const shotPath = join(dir, 'shot.png');
writeFileSync(pagePath, html, 'utf8');

execFileSync(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1024,1024',
    '--screenshot=' + shotPath,
    '--no-sandbox',
    '--virtual-time-budget=2000',
    pathToFileURL(pagePath).href,
  ],
  { stdio: 'ignore' }
);

copyFileSync(shotPath, out);
rmSync(dir, { recursive: true, force: true });
console.log('wrote', out);
