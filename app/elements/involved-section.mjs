import { esc } from '../lib/escape.mjs'

export default function InvolvedSection({ html, state }) {
  const { subtitle, title, cards = [] } = state.store.c.getInvolved

  const card = (c) => `
    <li>
      <article class="card">
        <p class="number">${esc(c.number)}</p>
        <h3>${esc(c.title)}</h3>
        <p class="description">${esc(c.description)}</p>
        ${c.button ? `<div class="cta"><link-button href="${esc(c.button.href)}" variant="cta">${esc(c.button.content)}</link-button></div>` : ''}
      </article>
    </li>`

  return html`
    <style>
      .section {
        padding: 1rem;
        color: var(--text-color-primary);
        background-color: var(--background-color-secondary);
        display: grid;
      }

      .inner {
        max-width: var(--max-width);
        justify-self: center;
        color: var(--text-color-primary);
      }

      .list {
        display: grid;
        gap: 2rem;
        list-style: none;
      }

      .list li {
        display: flex;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        filter: var(--filter-shadow-card);
        color: var(--color-text-primary);
      }

      .list li:first-child {
        background-color: var(--color-background-card);
        --cta-background: var(--color-background-card-alt);
      }

      .list li:last-child {
        background-color: var(--color-background-card-alt);
        --cta-background: var(--color-background-card);
      }

      @media (width >= 768px) {
        .section { padding: 3.5rem 3rem; }
        .list { grid-template-columns: 1fr 1fr; }
      }

      .card {
        flex: 1;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
        column-gap: 1.5rem;
      }

      .card h3 {
        font-size: 1.125rem;
        line-height: 1.4;
        grid-column: 2;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }

      .number {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        line-height: 1.4;
        grid-row: 1;
        grid-column: 1;
        font-weight: 700;
        color: var(--alert-color);
      }

      .description {
        grid-column: 2;
        font-size: var(--font-size-body);
        line-height: 1.6;
      }

      .cta {
        grid-column: 2;
        align-self: end;
        justify-self: end;
        margin-top: 1.5rem;
      }
    </style>
    <section id="doe-mee" class="section">
      <div class="inner">
        <section-title subtitle="${esc(subtitle)}" heading="${esc(title)}"></section-title>
        <ol class="list">
          ${cards.map(card).join('')}
        </ol>
      </div>
    </section>
  `
}
