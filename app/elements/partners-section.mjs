import { esc } from '../lib/escape.mjs'

export default function PartnersSection({ html, state }) {
  const { subtitle, title, description, partners = [] } = state.store.c.partners

  return html`
    <style>
      .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        margin-block: 1.5rem;
      }

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 36rem;
        text-align: center;
      }

      .cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
        list-style: none;
      }

      .cards li {
        display: flex;
        justify-content: center;
      }

      @media (width >= 768px) {
        .section { padding: 64px 32px; }

        .cards {
          grid-template-columns: repeat(3, 1fr);
          max-width: 960px;
        }
      }
    </style>
    <section id="partners" class="section">
      <header class="header">
        <section-title subtitle="${esc(subtitle)}" heading="${esc(title)}" text="${esc(description)}"></section-title>
      </header>
      <ul class="cards">
        ${partners.map((p) => `<li><partner-card heading="${esc(p.title)}" icon="${esc(p.image)}" text="${esc(p.description)}"></partner-card></li>`).join('')}
      </ul>
    </section>
  `
}
