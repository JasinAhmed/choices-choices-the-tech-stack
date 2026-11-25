import { esc } from '../lib/escape.mjs'

export default function WhySection({ html, state }) {
  const { subtitle, title, reasons = [] } = state.store.c.why

  return html`
    <style>
      .section {
        container: why-prologg / inline-size;
        inline-size: 100%;
        min-inline-size: 0;
        overflow-wrap: anywhere;
      }

      .content {
        inline-size: 100%;
        max-inline-size: 75rem;
        margin-inline: auto;
      }

      .reasons {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
      }

      .reasons dt {
        min-inline-size: 0;
        padding-block-start: 1.25rem;
        border-block-start: var(--border-usp);
        font-family: var(--font-heading);
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.4;
      }

      .reasons dd {
        min-inline-size: 0;
        max-inline-size: 60ch;
        padding-block-start: 0.625rem;
        font-size: var(--font-size-body);
        line-height: 1.6;
        padding-bottom: var(--space-sm);
      }

      @container why-prologg (width >= 640px) {
        .content { padding: 3.5rem 2rem; }
      }

      @container why-prologg (width >= 960px) {
        .content { padding: 4rem; }

        .reasons {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: auto 1fr;
          grid-auto-flow: column;
          column-gap: 2rem;
        }
      }
    </style>
    <section id="waarom-prologg" class="section">
      <div class="content">
        <header>
          <section-title subtitle="${esc(subtitle)}" heading="${esc(title)}"></section-title>
        </header>
        <dl class="reasons">
          ${reasons.map((r) => `<dt>${esc(r.title)}</dt><dd>${esc(r.description)}</dd>`).join('')}
        </dl>
      </div>
    </section>
  `
}
