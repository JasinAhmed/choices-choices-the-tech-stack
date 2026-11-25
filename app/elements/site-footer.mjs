import { esc } from '../lib/escape.mjs'

const MAIL = 'frank.kloos@fonetic.studio'

export default function SiteFooter({ html, state }) {
  const { links = [], button } = state.store.c.navigation
  const { title, descriptionFirst, descriptionSecond } = state.store.c.footer

  return html`
    <style>
      .footer {
        container-type: inline-size;
        background-color: var(--background-color-primary);
        color: var(--color-text-primary);
      }

      .footer a {
        text-decoration: none;
      }

      .footer a:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 6px;
        border-radius: 5px;
      }

      .inner,
      .bottom {
        width: 100%;
        max-width: var(--max-width);
        margin-inline: auto;
      }

      .inner {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 1.75rem;
        padding: 1.75rem 1.25rem 1.25rem;
      }

      .logo {
        display: inline-flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .logo img {
        display: block;
        width: 110px;
        max-width: 100%;
        height: auto;
      }

      .brand-title,
      .heading {
        font-family: var(--font-heading);
        font-size: 0.95rem;
        font-weight: 700;
      }

      .brand-title { margin-bottom: 0.35rem; }
      .heading { margin-bottom: 0.9rem; }

      .brand-description {
        display: flex;
        flex-direction: column;
        color: var(--text-color-accent);
        font-size: 0.9rem;
        line-height: 1.5;
      }

      .navigation ul {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        list-style: none;
      }

      .link {
        display: block;
        width: fit-content;
        max-width: 100%;
        color: var(--color-text-primary);
        font-size: 0.9rem;
        transform-origin: left center;
      }

      .link::after {
        display: block;
        width: 100%;
        height: 1px;
        background-color: currentColor;
        content: "";
        transform: scaleX(0);
        transform-origin: left;
      }

      .link:hover::after,
      .link:focus-visible::after {
        transform: scaleX(1);
      }

      @media (prefers-reduced-motion: no-preference) {
        .link { transition: scale 0.1s ease-in-out; }
        .link::after { transition: transform 0.3s ease; }
        .link:hover { scale: 1.02; }
      }

      .contact address {
        margin-bottom: 1.1rem;
        font-style: normal;
        overflow-wrap: anywhere;
      }

      .demo {
        margin-bottom: 1.1rem;
      }

      .bottom {
        padding: 0.9rem 1.25rem;
        border-top: var(--border-usp);
      }

      .bottom p {
        color: var(--text-color-accent);
        font-size: 0.8rem;
      }

      @container (width >= 700px) {
        .inner {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          padding: 2.5rem 2rem 1.5rem;
        }

        .bottom { padding: 1rem 2rem; }
      }

      @container (width >= 1080px) {
        .inner { grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr)); }
      }
    </style>
    <footer class="footer">
      <div class="inner">
        <div>
          <a href="/" class="logo">
            <picture>
              <source srcset="/_public/assets/full-logo-white.svg" media="(prefers-color-scheme: dark)">
              <img src="/_public/assets/full-logo.svg" alt="Prologg logo" width="100" height="70" loading="lazy">
            </picture>
          </a>
          <h2 class="brand-title">${esc(title)}</h2>
          <p class="brand-description">
            <span>${esc(descriptionFirst)}</span>
            <span>${esc(descriptionSecond)}</span>
          </p>
        </div>

        <nav class="navigation">
          <h2 class="heading">Navigatie</h2>
          <ul>
            ${links.map((l) => `<li><a href="${esc(l.href)}" class="link">${esc(l.content)}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="contact">
          <h2 class="heading">Contact</h2>
          <address>
            <a href="mailto:${MAIL}" class="link">${MAIL}</a>
          </address>
          <div class="demo">
            <link-button href="mailto:${MAIL}" variant="nav">${esc(button)}</link-button>
          </div>
        </div>
      </div>

      <div class="bottom">
        <p>&copy; Prologg for Legal</p>
      </div>
    </footer>
  `
}
