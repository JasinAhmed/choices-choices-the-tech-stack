import { esc } from '../lib/escape.mjs'

export default function PreviewSection({ html, state }) {
  const { subtitle, title, description, usps = [] } = state.store.c.preview

  return html`
    <style>
      .preview {
        background-color: var(--background-color-secondary);
        display: grid;
      }

      .info {
        grid-column: span 2;
      }

      .phone {
        display: grid;
        padding: var(--space-lg) var(--space-md);
      }

      .phone img {
        max-width: 20rem;
        width: 100%;
        padding: 0.5rem;
        filter: var(--filter-shadow-card);
        display: flex;
        justify-self: center;
      }

      @media (width > 890px) {
        .grid {
          display: grid;
          grid-template-columns: max-content 1fr;
          justify-self: center;
          max-width: var(--max-width);
        }

        .info { padding: 1rem 1rem 1rem 3.5rem; }

        .phone img {
          margin-inline: 3rem;
          place-self: center;
        }
      }
    </style>
    <section id="hoe-het-werkt" class="preview">
      <div class="grid">
        <div class="info">
          <section-title subtitle="${esc(subtitle)}" heading="${esc(title)}" text="${esc(description)}"></section-title>
        </div>
        <div class="phone">
          <img src="/_public/assets/phone-preview.webp" alt="" loading="lazy">
        </div>
        <div>
          ${usps.map((u) => `<usp-block count="${esc(u.number)}" subtitle="${esc(u.subtitle)}" heading="${esc(u.title)}" text="${esc(u.description)}"></usp-block>`).join('')}
        </div>
        <preview-banner></preview-banner>
      </div>
    </section>
  `
}
