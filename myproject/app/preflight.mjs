// Draait vóór elke pagina; wat hier terugkomt staat in elk element als `state.store`.
// De taal volgt uit de URL (/en = Engels, de rest Nederlands). De teksten staan
// in app/content/<taal>.md, als YAML tussen de twee --- regels bovenaan.
import { readFileSync } from 'node:fs'
import { parse } from 'yaml'

export default async function Preflight({ req }) {
  const lang = req.path.startsWith('/en') ? 'en' : 'nl'
  const markdown = readFileSync(new URL(`./content/${lang}.md`, import.meta.url), 'utf8')
  const content = parse(markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1])

  return { lang, content }
}
