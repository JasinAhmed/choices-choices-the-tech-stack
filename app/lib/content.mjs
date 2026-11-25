// Leest de markdown-bestanden in app/content en geeft de YAML-frontmatter terug.
// (In de React-versie was dit lib/content.js, in SvelteKit `?raw` imports.)
import { readFileSync } from 'node:fs'
import { parse } from 'yaml'

export const LANGS = ['nl', 'en']

// pak de tekst tussen de twee --- regels en parse het als YAML
const frontmatter = (raw) => parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1])

export function getContent(lang) {
  const file = new URL(`../content/${lang}.md`, import.meta.url)
  return frontmatter(readFileSync(file, 'utf8'))
}
