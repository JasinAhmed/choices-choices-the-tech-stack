export default function PreviewSection({ html, state }) {
  const { subtitle, title, description, imageAlt, usps, banner } = state.store.content.preview

  return html`
    <section class="preview" id="hoe-het-werkt">
      <section-heading subtitle="${subtitle}" heading="${title}" text="${description}"></section-heading>
      <img src="/_public/assets/phone-preview.webp" alt="${imageAlt}" width="340" height="627" loading="lazy">
      <ol>
        ${usps.map((usp) => `
          <li>
            <section-heading subtitle="${usp.subtitle}" heading="${usp.title}" level="3"></section-heading>
            <p>${usp.description}</p>
          </li>
        `).join('')}
      </ol>
      <aside>
        <p>${banner.label}</p>
        <p><strong>${banner.title}</strong> ${banner.text}</p>
      </aside>
    </section>
  `
}
