// Downloadt de sitefoto's van Unsplash (gratis Unsplash-licentie) en zet ze om naar WebP.
// Gebruik: npm run images          (bestaande bestanden worden overgeslagen)
//          npm run images -- --force
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'images')
const force = process.argv.includes('--force')

// [bestandsnaam, Unsplash-foto-id, breedte]
const IMAGES = [
  ['hero', 'photo-1522071820081-009f0129c71c', 1600],
  ['team', 'photo-1519389950473-47ba0277781c', 1600],
  ['meeting', 'photo-1556761175-5973dc0f32e7', 1400],
  ['office', 'photo-1497366216548-37526070297c', 1600],
  ['it-beheer', 'photo-1531297484001-80022131f5a1', 1400],
  ['cloud', 'photo-1558494949-ef010cbdcc31', 1400],
  ['security', 'photo-1550751827-4bd374c3f58b', 1400],
  ['websites', 'photo-1498050108023-c5249f4df085', 1400],
  ['google-ads', 'photo-1460925895917-afdab827c52f', 1400],
  ['social', 'photo-1611162617213-7d7a39e9b1d7', 1400],
  ['seo', 'photo-1551288049-bebda4e38f71', 1400],
  ['branding', 'photo-1561070791-2526d30994b5', 1400],
]

await fs.mkdir(outDir, { recursive: true })
for (const [name, id, width] of IMAGES) {
  const file = path.join(outDir, `${name}.webp`)
  if (!force && (await fs.stat(file).catch(() => null))) { console.log(`overgeslagen ${name}`); continue }
  const res = await fetch(`https://images.unsplash.com/${id}?w=${width}&q=85&fm=jpg&fit=crop`)
  if (!res.ok) { console.error(`MISLUKT ${name} (${res.status})`); process.exitCode = 1; continue }
  const buf = Buffer.from(await res.arrayBuffer())
  await sharp(buf).webp({ quality: 80 }).toFile(file)
  const meta = await sharp(file).metadata()
  console.log(`ok ${name} ${meta.width}x${meta.height}`)
}
