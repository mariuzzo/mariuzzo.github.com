import fs from 'fs'
import path from 'path'
import React from 'react'
import matter from 'gray-matter'
import satori from 'satori'
import sharp from 'sharp'
import { format } from 'date-fns'

const WIDTH = 1200
const HEIGHT = 630
const ROOT = path.resolve(__dirname, '..')

function buildCard(title: string, category: string, formattedDate: string) {
  return (
    <div
      style={{
        display: 'flex',
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        backgroundColor: '#F6F4F4',
        fontFamily: 'Source Sans Pro'
      }}
    >
      <div
        style={{
          width: '8px',
          height: '100%',
          backgroundColor: '#695CFF',
          flexShrink: 0
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          flex: 1
        }}
      >
        <div style={{ display: 'flex' }}>
          <span
            style={{
              backgroundColor: '#695CFF',
              color: '#FFFFFF',
              padding: '6px 20px',
              borderRadius: '4px',
              fontSize: '22px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}
          >
            {category}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#3D3D3D',
              lineHeight: 1.2
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span style={{ fontSize: '24px', color: '#707070', fontWeight: 400 }}>
            {formattedDate}
          </span>
          <span style={{ fontSize: '28px', color: '#695CFF', fontWeight: 600 }}>
            mariuzzo.com
          </span>
        </div>
      </div>
    </div>
  )
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

    const outputPath = path.join(ROOT, 'public', 'images', 'og', `${slug}.png`)
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
