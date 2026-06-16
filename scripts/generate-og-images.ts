import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import satori from 'satori'
import { html } from 'satori-html'
import sharp from 'sharp'
import { format } from 'date-fns'

const WIDTH = 1200
const HEIGHT = 630
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function buildCard(title: string, category: string, formattedDate: string) {
  // Keep tags adjacent (no whitespace text nodes) — satori requires every
  // multi-child element to declare an explicit display value.
  return html`<div
    style="display: flex; width: ${WIDTH}px; height: ${HEIGHT}px; background-color: #F6F4F4; font-family: 'Source Sans Pro';"
  >
    <div
      style="display: flex; width: 8px; height: 100%; background-color: #695CFF; flex-shrink: 0;"
    ></div>
    <div
      style="display: flex; flex-direction: column; justify-content: space-between; padding: 60px; flex: 1;"
    >
      <div style="display: flex;">
        <span
          style="background-color: #695CFF; color: #FFFFFF; padding: 6px 20px; border-radius: 4px; font-size: 30px; font-weight: 400; text-transform: uppercase; letter-spacing: 3px;"
          >${category}</span
        >
      </div>
      <div style="display: flex; flex-direction: column;">
        <span
          style="font-size: 100px; font-weight: 900; color: #3D3D3D; line-height: 1.2;"
          >${title}</span
        >
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <span style="font-size: 40px; color: #707070; font-weight: 400;"
          >${formattedDate}</span
        ><span style="font-size: 40px; color: #695CFF; font-weight: 600;"
          >mariuzzo.com</span
        >
      </div>
    </div>
  </div>`
}

async function main() {
  const fontsDir = path.join(
    ROOT,
    'node_modules/@fontsource/source-sans-pro/files'
  )
  const fontRegular = fs.readFileSync(
    path.join(fontsDir, 'source-sans-pro-latin-400-normal.woff')
  )
  const fontBold = fs.readFileSync(
    path.join(fontsDir, 'source-sans-pro-latin-900-normal.woff')
  )

  const markdownDir = path.join(ROOT, 'src', 'markdown')

  function collectMdFiles(dir: string): string[] {
    const results: string[] = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        results.push(...collectMdFiles(fullPath))
      } else if (entry.name.endsWith('.md')) {
        results.push(fullPath)
      }
    }
    return results
  }

  const mdFiles = collectMdFiles(markdownDir)
  let generated = 0
  let skipped = 0

  for (const mdFile of mdFiles) {
    const { data } = matter(fs.readFileSync(mdFile, 'utf-8'))

    if (!data.slug || !data.title) {
      skipped++
      continue
    }

    const slug: string = data.slug
    const title: string = data.title
    const date: Date = data.date ? new Date(data.date) : new Date()
    const category: string = slug.split('/').filter(Boolean)[0] ?? ''
    const formattedDate = format(date, 'MMMM d, yyyy')

    const outputPath = path.join(ROOT, 'static', 'images', 'og', `${slug}.png`)
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })

    const svg = await satori(buildCard(title, category, formattedDate), {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: 'Source Sans Pro',
          data: fontRegular,
          weight: 400,
          style: 'normal'
        },
        {
          name: 'Source Sans Pro',
          data: fontBold,
          weight: 900,
          style: 'normal'
        }
      ]
    })

    await sharp(Buffer.from(svg)).png().toFile(outputPath)
    console.log(`[✓] /images/og${slug}.png`)
    generated++
  }

  console.log(`\nDone: ${generated} generated, ${skipped} skipped.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
