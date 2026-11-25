export default function WhySection({ html, state }) {
  const { subtitle, title, reasons } = state.store.content.why

  return html`
    <section class="why" id="waarom-prologg">
      <section-heading subtitle="${subtitle}" heading="${title}"></section-heading>
      <dl>
        ${reasons.map(({ title, description }) => `<dt>${title}</dt><dd>${description}</dd>`).join('')}
      </dl>
    </section>
  `
}
