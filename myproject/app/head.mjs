// De <head> van elke pagina. Taal en teksten komen uit app/preflight.mjs.
export default function Head({ store = {} }) {
  const { lang = 'nl', content = {} } = store

  return `
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${content.footer?.title ?? 'Prologg for Legal'}</title>
      <meta name="description" content="${content.hero?.description ?? ''}">
      <link rel="alternate" hreflang="nl" href="/">
      <link rel="alternate" hreflang="en" href="/en">
      <link rel="icon" href="/_public/favicon.svg" type="image/svg+xml">
      <link rel="stylesheet" href="/_public/styles.css">
    </head>
  `
}
