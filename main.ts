// Writes the entry image to /output/entry.png. The image is a newspaper front
// page summing up the world's news of Sunday 22 November 2026; it is copied
// byte for byte, so both runs write identical bytes.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(O, { recursive: true });
const src = join(here, 'entry.png');
const dst = join(O, 'entry.png');
copyFileSync(src, dst);
// Sanity check: the copy must be complete, or the run is not deterministic.
if (statSync(src).size !== statSync(dst).size) throw new Error('entry.png copy incomplete');

