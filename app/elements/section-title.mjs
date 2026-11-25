// <section-title subtitle="..." heading="..." text="..."></section-title>
import { esc } from '../lib/escape.mjs'

export default function SectionTitle({ html, state }) {
  const { subtitle, heading, text } = state.attrs

  return html`
    <style>
      hgroup {
        padding-block: 0.5rem;
      }
    </style>
    <hgroup>
      ${subtitle ? `<span>${esc(subtitle)}</span>` : ''}
      ${heading ? `<h2>${esc(heading)}</h2>` : ''}
      ${text ? `<p>${esc(text)}</p>` : ''}
    </hgroup>
  `
}
