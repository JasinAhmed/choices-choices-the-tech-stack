export default function ValueSection({ html, state }) {
  const { subtitle, title, values, image, imageAlt } = state.store.content.value

  return html`
    <section class="value" id="waarde-levering">
      <section-heading subtitle="${subtitle}" heading="${title}"></section-heading>
      <dl>
        ${values.map(({ title, description }) => `<dt>${title}</dt><dd>${description}</dd>`).join('')}
      </dl>
      <img src="${image}" alt="${imageAlt}" width="1168" height="631" loading="lazy">
    </section>
  `
}
