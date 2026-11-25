// Logo dat naar de homepage van de huidige taal linkt (in de header en de footer).
export default function SiteLogo({ html, state }) {
  const { lang, content } = state.store

  return html`
    <a href="${lang === 'en' ? '/en' : '/'}">
      <picture>
        <source srcset="/_public/assets/full-logo-white.svg" media="(prefers-color-scheme: dark)">
        <img src="/_public/assets/full-logo.svg" alt="${content.navigation.logoAlt}" width="110" height="50">
      </picture>
    </a>
  `
}
