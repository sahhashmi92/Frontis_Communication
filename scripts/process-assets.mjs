/**
 * Brand asset pipeline for Frontis Communications.
 *
 * Source of truth: assets/logo-horizontal.png (transparent, tightly cropped).
 * Regenerates every derived asset the site serves:
 *   public/brand/logo-horizontal.png  navbar + footer wordmark
 *   public/brand/mark.png             symbol only (hero tile)
 *   public/brand/og.png               1200x630 social share card
 *   app/icon.png, app/apple-icon.png  favicons
 *
 * Run: node scripts/process-assets.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("assets/logo-horizontal.png");
const OUT = path.resolve("public/brand");
const APP = path.resolve("app");

/** Symbol/wordmark boundary in the source, measured from alpha columns. */
const SYMBOL_WIDTH = 274;

const NAVY = "#0f2660";
const SURFACE = "#f5f7fa";

await mkdir(OUT, { recursive: true });

async function report(file) {
  const m = await sharp(file).metadata();
  console.log(`${path.relative(process.cwd(), file)}  ${m.width}x${m.height}`);
}

// ---- Horizontal wordmark (canonical, served to the browser) ----
const wordmark = path.join(OUT, "logo-horizontal.png");
await sharp(SRC).trim({ threshold: 10 }).png({ compressionLevel: 9 }).toFile(wordmark);
await report(wordmark);

// ---- Symbol only ----
const meta = await sharp(SRC).metadata();
const symbolBuf = await sharp(SRC)
  .extract({ left: 0, top: 0, width: SYMBOL_WIDTH, height: meta.height })
  .trim({ threshold: 10 })
  .png()
  .toBuffer();
const mark = path.join(OUT, "mark.png");
await sharp(symbolBuf).png({ compressionLevel: 9 }).toFile(mark);
await report(mark);

// ---- Favicons: symbol centred on a square transparent canvas ----
async function icon(size, dest) {
  const inner = Math.round(size * 0.82);
  const buf = await sharp(symbolBuf)
    .resize(inner, inner, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: buf, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(dest);
  await report(dest);
}
await icon(512, path.join(APP, "icon.png"));
await icon(180, path.join(APP, "apple-icon.png"));

// ---- Open Graph card: logo + tagline on brand surface ----
const OG_W = 1200;
const OG_H = 630;
const logoOnCard = await sharp(SRC).trim({ threshold: 10 }).resize({ width: 840 }).png().toBuffer();
const tagline = Buffer.from(
  `<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
     <text x="${OG_W / 2}" y="378" text-anchor="middle"
           font-family="Poppins, Avenir Next, Segoe UI, Helvetica, Arial, sans-serif"
           font-size="34" font-weight="600" letter-spacing="0.02em" fill="${NAVY}">
       Communication That Connects
     </text>
     <rect x="${OG_W / 2 - 44}" y="412" width="88" height="4" rx="2" fill="#ff751f"/>
   </svg>`,
);
const og = path.join(OUT, "og.png");
await sharp({ create: { width: OG_W, height: OG_H, channels: 4, background: SURFACE } })
  .composite([
    { input: logoOnCard, top: 210, left: Math.round((OG_W - 840) / 2) },
    { input: tagline, top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(og);
await report(og);
