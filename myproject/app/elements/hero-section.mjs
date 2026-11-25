export default function HeroSection({ html, state }) {
  const { title, description, buttons, image, imageWebp, imageAvif, imageAlt } = state.store.content.hero
  const sizes = '(min-width: 48em) 50vw, 100vw'

  // fetchpriority is nog niet breed ondersteund (Baseline 2024). Browsers die het
  // niet kennen negeren het attribuut en laden de afbeelding gewoon.
  return html`
    <section class="hero">
      <h1>${title}</h1>
      <p>${description}</p>
      <p>${buttons.map(({ content, href }) => `<a class="button" href="${href}">${content}</a>`).join('')}</p>
      <picture>
        <source srcset="${imageAvif}" sizes="${sizes}" type="image/avif">
        <source srcset="${imageWebp}" sizes="${sizes}" type="image/webp">
        <img src="${image}" alt="${imageAlt}" width="710" height="568" fetchpriority="high">
      </picture>
    </section>
  `
}
