// <partner-card heading="..." icon="/_public/icons/x.svg" text="..."></partner-card>
import { esc } from '../lib/escape.mjs'

export default function PartnerCard({ html, state }) {
  const { heading, icon, text } = state.attrs

  return html`
    <style>
      .card {
        background-color: var(--color-background-card);
        width: 100%;
        max-width: 300px;
        padding: 1rem;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        line-height: 1.5;
        filter: var(--filter-shadow-card);
      }

      @media (width >= 425px) {
        .card { max-width: 280px; }
      }

      .icon {
        width: 24px;
        height: 24px;
        background-color: var(--alert-color);
        mask: var(--icon) center / contain no-repeat;
      }

      .card h3 {
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 700;
      }

      .card p {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        line-height: 1.6;
      }
    </style>
    <article class="card">
      <span class="icon" style="--icon: url(${esc(icon)})"></span>
      <h3>${esc(heading)}</h3>
      <p>${esc(text)}</p>
    </article>
  `
}
