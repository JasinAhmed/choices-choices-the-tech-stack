import { esc } from '../lib/escape.mjs'

const MAIL = 'frank.kloos@fonetic.studio'

export default function DemoSection({ html, state }) {
  const { subtitle, title, description, items = [] } = state.store.c.demo

  return html`
    <style>
      .section {
        background-color: var(--color-background-dark);
        color: var(--white);
        font-family: var(--font-heading), sans-serif;
      }

      .content {
        max-width: 900px;
        margin-inline: auto;
        padding: 72px 24px 56px;
        text-align: center;
      }

      .content li {
        list-style: none;
      }

      .content h2 {
        max-width: 700px;
        margin-inline: auto;
        font-size: clamp(32px, 8vw, 48px);
        line-height: 1.15;
        text-wrap: balance;
        color: var(--white);
      }

      .label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        color: var(--alert-color);
        font-weight: 500;
      }

      .description {
        text-wrap: balance;
        font-weight: bold;
      }

      .note {
        margin-top: 40px;
        font-size: 16px;
        line-height: 1.6;
      }

      @media (min-width: 700px) {
        .content { padding-block: 100px 80px; }

        .description {
          margin-top: 28px;
          font-size: 18px;
        }
      }
    </style>
    <section class="section">
      <div class="content">
        <span class="label">${esc(subtitle)}</span>
        <h2>${esc(title)}</h2>
        <p class="description">${esc(description)}</p>
        <ol>
          ${items.map((i) => `<li>${esc(i.title)}</li>`).join('')}
        </ol>
        <link-button href="mailto:${MAIL}" variant="footer demo-contact">${MAIL}</link-button>
        <p class="note">
          Prologg for Legal · Forensische Keten van Bewijs · Ontwikkeld voor
          gespecialiseerde rechtspraktijken
        </p>
      </div>
    </section>
  `
}
