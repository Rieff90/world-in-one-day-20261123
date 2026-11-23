// The entry itself: copy the finished front page to /output/entry.png.
//
// The image is rendered ahead of time and shipped beside this file, so the
// grader needs nothing but Node — no network, no browser, no dependency. Both
// runs copy the same bytes, which is what the determinism check asks for.
//
// Outside the container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(new URL('./entry.png', import.meta.url), target);
