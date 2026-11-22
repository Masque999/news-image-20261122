// Writes the entry image to /output/entry.png. The image is a newspaper front
// page summing up the world's news of Sunday 22 November 2026; it is copied
// byte for byte, so both runs write identical bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(O, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(O, 'entry.png'));
