export default function InvolvedSection({ html, state }) {
  const { subtitle, title, cards } = state.store.content.getInvolved

  return html`
    <section class="involved" id="doe-mee">
      <section-heading subtitle="${subtitle}" heading="${title}"></section-heading>
      <ol>
        ${cards.map(({ title, description, button }) => `
          <li>
            <h3>${title}</h3>
            <p>${description}</p>
            <a class="button" href="${button.href}">${button.content}</a>
          </li>
        `).join('')}
      </ol>
    </section>
  `
}
