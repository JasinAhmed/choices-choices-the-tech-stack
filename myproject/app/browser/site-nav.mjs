// Progressive enhancement voor <site-nav> (de HTML staat in app/elements/site-nav.mjs).
// Zonder JavaScript staan de navigatielinks gewoon in de header. Zodra dit script
// het element definieert (CSS: site-nav:defined) klapt de navigatie op mobiel in
// achter de menuknop, en verdwijnt de header op desktop bij naar beneden scrollen.
class SiteNav extends HTMLElement {
  connectedCallback() {
    const header = this.querySelector('header')
    const button = header.querySelector('button')
    const [openIcon, closeIcon] = button.querySelectorAll('img')

    const setOpen = (open) => {
      header.toggleAttribute('data-open', open)
      openIcon.hidden = open
      closeIcon.hidden = !open
    }

    button.addEventListener('click', () => setOpen(!header.hasAttribute('data-open')))

    // Menu dicht na het kiezen van een link, met Escape en bij het groter maken van het scherm
    header.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => setOpen(false)))
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.hasAttribute('data-open')) {
        setOpen(false)
        button.focus()
      }
    })
    matchMedia('(min-width: 64em)').addEventListener('change', () => setOpen(false))

    // Header verbergen bij naar beneden scrollen, tonen bij omhoog scrollen
    let lastScroll = scrollY
    addEventListener('scroll', () => {
      header.toggleAttribute('data-hidden', scrollY > lastScroll && scrollY > header.offsetHeight)
      lastScroll = scrollY
    }, { passive: true })
  }
}

customElements.define('site-nav', SiteNav)
