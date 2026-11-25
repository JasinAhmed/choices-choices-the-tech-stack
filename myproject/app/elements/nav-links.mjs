// De links naar de secties van de pagina (in de header en de footer).
export default function NavLinks({ html, state }) {
  const { links } = state.store.content.navigation

  return html`
    <ul>
      ${links.map(({ content, href }) => `<li><a href="${href}">${content}</a></li>`).join('')}
    </ul>
  `
}
