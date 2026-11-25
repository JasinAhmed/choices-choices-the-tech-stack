// De hele pagina. app/pages/index.html (NL) en app/pages/en.html (EN)
// gebruiken allebei dit element; taal en teksten komen uit app/preflight.mjs.
export default function ProloggPage({ html, state }) {
  const { skipLink } = state.store.content

  return html`
    <a class="skip-link" href="#inhoud">${skipLink}</a>
    <site-nav></site-nav>
    <main id="inhoud">
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
