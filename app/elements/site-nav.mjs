// Navigatie. De HTML komt van de server; het <script> onderaan "enhancet" hem
// in de browser met: menu openen/sluiten en verbergen bij naar beneden scrollen.
// Zonder JS werken de links en de taalwissel gewoon.
import { esc } from '../lib/escape.mjs'

const MAIL = 'mailto:frank.kloos@fonetic.studio'

export default function SiteNav({ html, state }) {
  const { button, links = [], openAlt, closeAlt, logoAlt } = state.store.c.navigation

  const navLinks = links
    .map((l) => `<a href="${esc(l.href)}" class="nav-link">${esc(l.content)}<span class="underline"></span></a>`)
    .join('')

  return html`
    <style>
      :host {
        display: block;
        width: 100%;
        background-color: var(--background-color-primary);
        position: sticky;
        top: 0;
        z-index: 10;
      }

      :host a {
        text-decoration: none;
        color: var(--color-text-primary);
      }

      .nav-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo-link {
        place-items: center;
        padding-left: 10px;
      }

      .mobile-nav {
        display: flex;
        place-items: center;
      }

      @media (prefers-color-scheme: dark) {
        .icon-button img { filter: brightness(0) invert(1); }
      }

      .menu {
        margin: 0;
        border: none;
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        padding: 30px;
        background-color: var(--background-color-primary);
        color: var(--color-text-primary);
      }

      .menu[open] {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .menu-top {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: start;
        width: 100%;
      }

      .close {
        grid-column: 3;
        justify-self: end;
      }

      .links-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .nav-link {
        transition: 0.1s ease-in-out;
      }

      .nav-link:hover {
        text-decoration: underline;
        scale: 1.02;
      }

      .nav-link:focus-visible {
        outline-offset: 6px;
        outline: 2px solid var(--text-color-primary);
        border-radius: 5px;
      }

      .underline {
        display: block;
        width: 0%;
        height: 1px;
        background-color: var(--text-color-primary);
        transition: all 0.3s ease;
      }

      @media (prefers-reduced-motion: no-preference) {
        .nav-link:hover { text-decoration: unset; }
        .nav-link:hover .underline { width: 100%; }
      }

      .desktop-nav {
        display: none;
      }

      @media (width >= 1024px) {
        :host {
          position: fixed;
          left: 0;
          right: 0;
        }

        :host([hidden-on-scroll]) {
          transform: translateY(-100%);
        }

        .logo-link img {
          width: 176px;
          height: 80px;
        }

        .mobile-nav { display: none; }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: end;
          gap: 24px;
          padding: 20px;
          width: 100%;
        }
      }

      @media (width >= 1024px) and (prefers-reduced-motion: no-preference) {
        :host { transition: transform 0.5s ease; }
      }
    </style>

    <header class="nav-bar">
      <a class="logo-link" href="/">
        <picture>
          <source srcset="/_public/assets/full-logo-white.svg" media="(prefers-color-scheme: dark)">
          <img src="/_public/assets/full-logo.svg" alt="${esc(logoAlt)}" width="100" height="70" fetchpriority="high">
        </picture>
      </a>

      <div class="mobile-nav">
        <link-button href="${MAIL}" variant="nav">${esc(button)}</link-button>
        <!-- commandfor/command opent de dialog zonder JavaScript (nieuwe browsers) -->
        <button type="button" class="icon-button" commandfor="mobile-menu" command="show-modal">
          <img src="/_public/assets/hamburger.svg" alt="${esc(openAlt)}" width="50" height="50">
        </button>
      </div>

      <dialog id="mobile-menu" class="menu">
        <div class="menu-top">
          <button type="button" class="icon-button close" commandfor="mobile-menu" command="close" autofocus>
            <img src="/_public/assets/close-icon.svg" alt="${esc(closeAlt)}" width="25" height="25">
          </button>
        </div>
        <nav class="links-nav">
          ${navLinks}
          <lang-toggle></lang-toggle>
          <link-button href="${MAIL}" variant="nav">${esc(button)}</link-button>
        </nav>
      </dialog>

      <nav class="desktop-nav">
        ${navLinks}
        <lang-toggle></lang-toggle>
        <link-button href="${MAIL}" variant="nav">${esc(button)}</link-button>
      </nav>
    </header>

    <script type="module">
      class SiteNav extends HTMLElement {
        connectedCallback() {
          const dialog = this.querySelector('dialog')

          // Fallback voor browsers zonder commandfor-ondersteuning
          if (!('command' in HTMLButtonElement.prototype)) {
            this.querySelectorAll('[commandfor]').forEach((btn) => {
              btn.addEventListener('click', () =>
                btn.getAttribute('command') === 'close' ? dialog.close() : dialog.showModal()
              )
            })
          }

          // Menu sluiten na klikken op een link (naar een sectie)
          dialog.querySelectorAll('a[href^="#"]').forEach((a) =>
            a.addEventListener('click', () => dialog.close())
          )

          // Navbar verbergen bij naar beneden scrollen, tonen bij omhoog scrollen
          let lastY = 0
          let ticking = false
          window.addEventListener('scroll', () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
              const y = window.scrollY
              this.toggleAttribute('hidden-on-scroll', y > 0 && y > lastY)
              lastY = y
              ticking = false
            })
          }, { passive: true })
        }
      }

      customElements.define('site-nav', SiteNav)
    </script>
  `
}
