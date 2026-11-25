import { esc } from '../lib/escape.mjs'

export default function HeroSection({ html, state }) {
  const { title, description, imageWebpFallback, imageWebp, imageAvif, buttons = [] } = state.store.c.hero

  return html`
    <style>
      .hero {
        background-color: var(--background-color-secondary);
        width: 100%;
        display: grid;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        gap: 1rem;
        overflow-y: hidden;
        max-width: var(--max-width);
      }

      @media (width > 709px) {
        .wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 275px);
          padding-inline: var(--space-lg);
        }
      }

      @media (width > 1023px) {
        .wrapper {
          margin-top: var(--space-xxl);
          padding-block: var(--space-xl);
        }
      }

      .info {
        grid-row: span 2;
        height: 100%;
        padding-block: var(--space-md);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .info h1,
      .info p {
        max-width: 50rem;
        text-align: center;
        color: var(--text-color-big);
      }

      .info h1 {
        font-size: clamp(2rem, 0rem + 8vw, 3rem);
        line-height: 0.9;
        text-wrap: balance;
        max-width: 64rem;
      }

      .info p {
        color: inherit;
        font-size: var(--font-size-body);
        margin-block: var(--space-md);
      }

      .buttons {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        margin-bottom: var(--space-md);
      }

      .picture {
        overflow: hidden;
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }

      .picture img {
        width: 100%;
        border-radius: 12px;
      }

      @media (width > 709px) {
        .info h1,
        .info p { text-align: left; }
        .buttons { justify-content: start; }
        .picture { grid-row: span 2; }
        .picture img {
          width: unset;
          height: 100%;
        }
      }
    </style>
    <section class="hero">
      <div class="wrapper">
        <div class="info">
          <h1>${esc(title)}</h1>
          <div>
            <p>${esc(description)}</p>
            <div class="buttons">
              ${buttons.map((b) => `<link-button href="${esc(b.href)}" variant="${esc(b.variant)}">${esc(b.content)}</link-button>`).join('')}
            </div>
          </div>
        </div>
        <picture class="picture">
          <source srcset="${esc(imageAvif)}" type="image/avif" sizes="(max-width: 600px) 400px, 700px">
          <source srcset="${esc(imageWebp)}" type="image/webp" sizes="(max-width: 600px) 400px, 700px">
          <img src="${esc(imageWebpFallback)}" alt="person logging using prologg webapp" fetchpriority="high">
        </picture>
      </div>
    </section>
  `
}
