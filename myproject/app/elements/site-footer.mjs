export default function SiteFooter({ html, state }) {
  const { email, navigation, footer } = state.store.content

  return html`
    <footer class="site-footer">
      <section>
        <site-logo></site-logo>
        <h2>${footer.title}</h2>
        <p>${footer.description.join('<br>')}</p>
      </section>
      <nav>
        <h2>${footer.navigationTitle}</h2>
        <nav-links></nav-links>
      </nav>
      <section>
        <h2>${footer.contactTitle}</h2>
        <address><a href="mailto:${email}">${email}</a></address>
        <a class="button" href="mailto:${email}">${navigation.button}</a>
      </section>
      <p><small>&copy; ${footer.title}</small></p>
    </footer>
  `
}
