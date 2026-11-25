// <usp-block count="1" subtitle="..." heading="..." text="..."></usp-block>
import { esc } from '../lib/escape.mjs'

export default function UspBlock({ html, state }) {
  const { count, subtitle, heading, text } = state.attrs

  return html`
    <style>
      .count-circle {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        font-family: var(--font-heading);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--alert-color);
        color: var(--text-color-secondary);
      }

      .usp {
        margin: 1rem 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--color-background-card);
        border-radius: 16px;
        max-width: 100%;
        filter: var(--filter-shadow-card);
      }

      @media (prefers-color-scheme: dark) {
        .usp { background-color: var(--color-background-card-alt); }
      }

      @media (width > 486px) {
        .usp {
          display: grid;
          grid-template-columns: min-content 1fr;
          gap: 2rem;
          margin: 1.5rem 0.5rem;
          padding: 2.5rem 2rem;
        }
      }

      .usp h3,
      .usp p {
        font-family: var(--font-heading);
      }

      .usp p {
        max-width: 40rem;
      }

      .usp .sub-title {
        color: var(--alert-color);
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        padding: 0;
      }

      .body h3 {
        max-width: 45rem;
        font-size: clamp(1.5rem, 1.2955rem + 0.9091vw, 2rem);
        line-height: 0.95;
      }
    </style>
    <article class="usp">
      <div class="count-circle">${esc(count)}</div>
      <div class="body">
        <p class="sub-title">${esc(subtitle)}</p>
        <h3>${esc(heading)}</h3>
        <p>${esc(text)}</p>
      </div>
    </article>
  `
}
