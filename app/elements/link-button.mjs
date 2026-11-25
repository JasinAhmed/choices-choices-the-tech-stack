// <link-button href="..." variant="nav">Tekst</link-button>
// `variant` is een spatie-gescheiden lijst, net als `classes` in de React/Svelte-versie.
// Het slot vult Enhance op de server met de tekst tussen de tags.
import { esc } from '../lib/escape.mjs'

export default function LinkButton({ html, state }) {
  const { href = '#', variant = '' } = state.attrs

  return html`
    <style>
      .button {
        text-decoration: none;
        border-radius: 12px;
        padding: 16px 32px;
        display: flex;
        width: max-content;
        gap: 8px;
        font-size: 14px;
        transition: all 0.2s ease;
      }

      @media (any-pointer: fine) {
        .button:hover { scale: 1.03; }
      }

      /* HERO PRIMARY */
      .hero-primary {
        color: var(--text-color-secondary);
        background-color: var(--color-background-button);
        align-items: center;
      }

      @media (width > 280px) {
        .hero-primary::after {
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 12h16m-7-7l7 7l-7 7'/%3E%3C/svg%3E");
          transform: translateY(2px);
          transition: all 0.2s ease;
        }

        .hero-secondary::after {
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 12h16m-7-7l7 7l-7 7'/%3E%3C/svg%3E");
          transform: rotate(90deg) translateY(2px);
          transition: all 0.2s ease;
        }

        .footer::after {
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.345 1.392-.844c0 0 3.917-3.006 6.107-4.612M3 15.8V8.2c0-1.120 0-1.680.218-2.108c.192-.377.497-.682.874-.874C4.520 5 5.080 5 6.200 5h11.600c1.120 0 1.680 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.118 0 1.676-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 17.480 3 16.920 3 15.800'/%3E%3C/svg%3E");
          transform: translateY(2.5px);
        }
      }

      @media (width > 280px) and (prefers-color-scheme: dark) {
        .hero-primary::after {
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23030C16' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 12h16m-7-7l7 7l-7 7'/%3E%3C/svg%3E");
        }
      }

      @media (any-pointer: fine) and (width > 280px) {
        .hero-primary:hover::after { transform: translate(25%, 2px); }
        .hero-secondary:hover::after { transform: rotate(90deg) translateY(2px) translateX(25%); }
      }

      /* HERO SECONDARY */
      .hero-secondary {
        color: var(--text-color-primary);
        background-color: var(--color-background-button-alt);
      }

      /* NAV */
      .nav {
        padding: 10px 16px;
        font-size: 12px;
        color: var(--text-color-secondary);
        background-color: var(--color-background-button);
      }

      /* FOOTER (mail-icoon) */
      .footer {
        align-items: center;
        justify-content: center;
      }

      /* CTA */
      .cta {
        align-items: center;
        padding: 12px 20px;
        font-weight: 500;
        color: inherit;
        background-color: var(--cta-background, var(--color-background-button-alt));
      }

      .cta::after {
        content: "";
        width: 1em;
        height: 1em;
        background-color: currentColor;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 17L17 7M8 7h9v9'/%3E%3C/svg%3E") center / contain no-repeat;
        transition: transform 0.2s ease;
      }

      @media (any-pointer: fine) {
        .cta:hover::after { transform: translate(2px, -2px); }
      }

      /* DEMO CONTACT */
      .demo-contact {
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 380px;
        min-height: 52px;
        margin: 32px auto 0;
        padding: 12px 16px;
        background-color: var(--color-background-button-light);
        color: #171717;
        font-size: 16px;
        font-weight: 600;
        overflow-wrap: anywhere;
      }

      @media (min-width: 700px) {
        .demo-contact {
          width: fit-content;
          padding-inline: 24px;
        }
      }

      .cta:focus-visible,
      .demo-contact:focus-visible {
        outline: 3px solid #1688ec;
        outline-offset: 4px;
      }
    </style>
    <a href="${esc(href)}" class="button ${esc(variant)}"><slot></slot></a>
  `
}
