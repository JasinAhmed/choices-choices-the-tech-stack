export default function PartnersSection({ html, state }) {
  const { subtitle, title, description, partners } = state.store.content.partners

  // Het icoon is decoratie: de CSS tekent het via de custom property --icon
  return html`
    <section class="partners" id="partners">
      <section-heading subtitle="${subtitle}" heading="${title}" text="${description}"></section-heading>
      <ul>
        ${partners.map(({ title, description, image }) => `
          <li style="--icon: url(${image})">
            <h3>${title}</h3>
            <p>${description}</p>
          </li>
        `).join('')}
      </ul>
    </section>
  `
}
