export default function DemoSection({ html, state }) {
  const { email, demo } = state.store.content
  const { subtitle, title, description, items, note } = demo

  return html`
    <section class="demo">
      <section-heading subtitle="${subtitle}" heading="${title}"></section-heading>
      <p>${description}</p>
      <ul>
        ${items.map(({ title }) => `<li>${title}</li>`).join('')}
      </ul>
      <a class="button" href="mailto:${email}">${email}</a>
      <p>${note}</p>
    </section>
  `
}
