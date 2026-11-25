// Navigatie. Zonder JavaScript staan de links gewoon in de header.
// app/browser/site-nav.mjs maakt er op mobiel een uitklapmenu van
// (progressive enhancement); de CSS daarvoor staat in public/styles.css.
const LANGUAGES = [
  { code: 'nl', label: 'NL', href: '/' },
  { code: 'en', label: 'EN', href: '/en' }
]

export default function SiteNav({ html, state }) {
  const { lang, content } = state.store
  const { button, openAlt, closeAlt } = content.navigation

  // De huidige taal is tekst, de andere taal een link
  const languages = LANGUAGES.map(({ code, label, href }) => code === lang
    ? `<strong>${label}</strong>`
    : `<a href="${href}" hreflang="${code}">${label}</a>`
  ).join('')

  return html`
    <header class="site-nav">
      <site-logo></site-logo>
      <nav>
        <nav-links></nav-links>
        <p>${languages}</p>
      </nav>
      <a class="button" href="mailto:${content.email}">${button}</a>
      <button type="button">
        <img src="/_public/assets/hamburger.svg" alt="${openAlt}" width="32" height="32">
        <img src="/_public/assets/close-icon.svg" alt="${closeAlt}" width="32" height="32" hidden>
      </button>
    </header>
    <script type="module" src="/_public/browser/site-nav.mjs"></script>
  `
}
