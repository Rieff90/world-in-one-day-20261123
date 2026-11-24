// The card art: one flat-vector illustration per band, rendered ahead of time
// into art/<band>.png and embedded here as a data URI so the page needs no
// network and no second file at screenshot time.
//
// Each illustration was drawn by an image model from a single locked prompt
// template (flat vector editorial, cream-and-ink two-tone, solid band colour,
// no text or logos), then cropped to the band's aspect ratio: 1020x288 for the
// three heroes, 540x108 for the fifteen tiles. The template is what keeps the
// eighteen panels in one visual language; art.mjs keeps the hand-written SVG
// pictograms as the fallback for any band without a PNG.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ART } from './art.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ART_DIR = join(HERE, '..', 'art');

const cache = new Map();

const dataUri = (name) => {
  if (cache.has(name)) return cache.get(name);
  const file = join(ART_DIR, `${name}.png`);
  const uri = existsSync(file)
    ? `data:image/png;base64,${readFileSync(file).toString('base64')}`
    : null;
  cache.set(name, uri);
  return uri;
};

// Returns the band's markup: the illustration if one was rendered, else the
// hand-written SVG pictogram for that band.
export const band = (name, colour) => {
  const uri = dataUri(name);
  if (!uri) return ART[name](colour);
  return `<img class="band-img" src="${uri}" alt="">`;
};

export default band;
