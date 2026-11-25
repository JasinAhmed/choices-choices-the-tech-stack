// De hele homepage. Staat in een element zodat de NL-pagina (pages/index.html)
// en de EN-pagina (pages/en.html) dezelfde opbouw delen.
export default function ProloggPage({ html, state }) {
  const skipText = state.store.lang === 'en' ? 'Skip to content' : 'Ga naar de inhoud'

  return html`
    <style>
      .skip-link {
        position: absolute;
        left: 1rem;
        top: -100%;
        z-index: 100;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background-color: var(--background-color-primary);
        color: var(--color-text-primary);
      }

      .skip-link:focus {
        top: 1rem;
      }
    </style>

    <a class="skip-link" href="#main-content">${skipText}</a>

    <site-nav></site-nav>

    <main id="main-content" tabindex="-1">
      <hero-section></hero-section>
      <why-section></why-section>
      <preview-section></preview-section>
      <value-section></value-section>
      <involved-section></involved-section>
      <partners-section></partners-section>
      <demo-section></demo-section>
    </main>

    <site-footer></site-footer>
  `
}
