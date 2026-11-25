// De <head> van elke pagina. `store` is wat app/api/index.mjs als json teruggeeft
// (aangevuld met preflight), dus taal en content zijn hier beschikbaar.
import { esc } from './lib/escape.mjs'

export default function Head(state) {
  const { store = {} } = state
  const { pageTitle = 'Prologg for Legal', lang = 'nl', c } = store
  const description = c?.hero?.description || ''

  return `
    <!DOCTYPE html>
    <html lang="${esc(lang)}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="${esc(description)}">
      <title>${esc(pageTitle)}</title>
      <link rel="icon" href="/_public/favicon.svg" type="image/svg+xml">
      <link rel="preload" href="/_public/fonts/Inter-VariableFont_opsz,wght.ttf" as="font" type="font/ttf" crossorigin>
      <link rel="stylesheet" href="/_public/global.css">
    </head>
  `
}
