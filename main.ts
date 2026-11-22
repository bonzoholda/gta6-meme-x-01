// Entry program untuk bounty make.fun "Post a GTA 6 meme on X" (gta6-meme-x-01).
// Node 22, standard library only, tanpa network: memvalidasi POST.json dari root
// repository, lalu menyalinnya ke /output/POST.json, tempat gate membacanya.
// Entry-nya adalah post X itu sendiri: meme GTA 6 diposting dari akun X publik
// dengan make.fun (link atau tertulis) dan/atau tag @makefunai plus play code
// di teksnya. Di luar container grader, MAKEFUN_BOT_DIR dan MAKEFUN_OUTPUT_DIR
// menggantikan /bot dan /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Alamat post X yang valid: https://x.com/<handle>/status/<id-numerik>.
// Gate membaca URL ini dari POST.json, jadi URL placeholder atau salah format
// harus gagal di sini dengan pesan yang jelas, bukan lolos diam-diam.
const POST_URL_PATTERN = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const postPath = join(BOT_DIR, 'POST.json');
  const raw = readFileSync(postPath, 'utf8');
  let url: unknown;
  try {
    url = (JSON.parse(raw) as { url?: unknown }).url;
  } catch {
    throw new Error(`POST.json is not valid JSON: ${postPath}`);
  }
  if (typeof url !== 'string' || !POST_URL_PATTERN.test(url)) {
    throw new Error(
      `POST.json does not name a valid X post URL (expected https://x.com/<handle>/status/<id>): ${JSON.stringify(url)}`,
    );
  }
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
  console.log(`Entry post verified and copied: ${url}`);
} catch (err) {
  console.error(`POST.json could not be submitted from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
