// Taalwissel als gewone link naar / (NL) of /en/ (EN): werkt zonder JavaScript,
// en ook op de statische Netlify-build.
// In React was dit een checkbox + useState + localStorage.
export default function LangToggle({ html, state }) {
  const lang = state.store.lang || 'nl'
  const next = lang === 'nl' ? 'en' : 'nl'
  const label = lang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'

  return html`
    <style>
      .toggle {
        display: flex;
        align-items: center;
        width: max-content;
        background-color: var(--white);
        border-radius: 8px;
        text-decoration: none;
        color: var(--text-color-primary);
      }

      .toggle span {
        margin: 0.25rem;
        padding: 0.25rem;
        border-radius: 6px;
        color: var(--text-color-primary);
        transition: all 0.3s ease;
      }

      .toggle .current {
        background-color: var(--background-color-primary);
        color: var(--color-text-primary);
        font-weight: bold;
      }

      .toggle:focus-visible {
        outline: 2px solid var(--text-color-primary);
        outline-offset: 4px;
      }
    </style>
    <a class="toggle" href="${next === 'en' ? '/en/' : '/'}" hreflang="${next}" aria-label="${label}">
      <span class="${lang === 'nl' ? 'current' : ''}">NL</span>
      <span class="${lang === 'en' ? 'current' : ''}">EN</span>
    </a>
  `
}
