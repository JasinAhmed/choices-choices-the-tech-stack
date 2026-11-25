// Statische build voor Netlify.
// Rendert de Enhance-elementen naar gewone HTML in build/ (/ = NL, /en/ = EN)
// en kopieert public/ naar build/_public, net als de Enhance dev-server doet.
import { readdirSync, mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import enhance from '@enhance/ssr'
import styleTransform from '@enhance/enhance-style-transform'

import Head from '../app/head.mjs'
import Preflight from '../app/preflight.mjs'
import { getContent } from '../app/lib/content.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'build')

// Alle elementen uit app/elements: bestandsnaam = tagnaam
const elementsDir = join(root, 'app', 'elements')
const elements = {}
for (const file of readdirSync(elementsDir).filter((f) => f.endsWith('.mjs'))) {
  const mod = await import(pathToFileURL(join(elementsDir, file)).href)
  elements[file.replace(/\.mjs$/, '')] = mod.default
}

const pages = [
  { lang: 'nl', file: 'index.html' },
  { lang: 'en', file: join('en', 'index.html') }
]

rmSync(out, { recursive: true, force: true })

for (const { lang, file } of pages) {
  const store = { ...(await Preflight({})), lang, c: getContent(lang) }
  const html = enhance({ elements, styleTransforms: [styleTransform], initialState: store })
  const page = html`${Head({ store })}<prologg-page></prologg-page>`

  mkdirSync(dirname(join(out, file)), { recursive: true })
  writeFileSync(join(out, file), page)
  console.log(`build/${file.replace(/\\/g, '/')}`)
}

cpSync(join(root, 'public'), join(out, '_public'), { recursive: true })
console.log('build/_public/')
