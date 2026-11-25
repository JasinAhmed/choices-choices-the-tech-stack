import { esc } from '../lib/escape.mjs'

export default function ValueSection({ html, state }) {
  const { subtitle, title, image, values = [] } = state.store.c.value

  return html`
    <style>
      :host {
        justify-self: center;
        max-width: var(--max-width);
        width: 100%;
      }

      .value {
        padding: 2rem 1.5rem 0 1.5rem;
        display: grid;
      }

      .value dl {
        padding-block: 1rem;
      }

      .value dt {
        font-weight: 600;
      }

      .value dd {
        margin-block: 0.5rem 1rem;
        padding-bottom: 0.5rem;
        border-bottom: var(--border-usp);
      }

      .value picture {
        height: 30rem;
        width: 100%;
        overflow: hidden;
        filter: var(--filter-shadow-card);
        border-radius: 1rem 1rem 0 0;
      }

      @media (width > 890px) {
        .value dl {
          display: grid;
          grid-template-columns: 1fr max-content;
        }

        .value dt {
          border-bottom: var(--border-usp);
          margin-block: 0.5rem 1rem;
          padding-bottom: 0.5rem;
        }
      }
    </style>
    <section id="waarde-levering" class="value">
      <section-title subtitle="${esc(subtitle)}" heading="${esc(title)}"></section-title>
      <dl>
        ${values.map((v) => `<dt>${esc(v.title)}</dt><dd>${esc(v.description)}</dd>`).join('')}
      </dl>
      <picture>
        <img src="${esc(image)}" alt="" loading="lazy">
      </picture>
    </section>
  `
}
