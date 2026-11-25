// Kop van een sectie: een kleine bovenkop, de titel en eventueel een intro.
// <section-heading subtitle="..." heading="..." text="..." level="3"></section-heading>
export default function SectionHeading({ html, state }) {
  const { subtitle, heading, text, level = '2' } = state.attrs

  return html`
    <hgroup>
      <p>${subtitle}</p>
      <h${level}>${heading}</h${level}>
      ${text ? `<p>${text}</p>` : ''}
    </hgroup>
  `
}
