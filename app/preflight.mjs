// Draait vóór elke pagina. Wat hier terugkomt komt in `state.store`.
// Taal en content komen uit app/api/index.mjs; hier alleen de paginatitel.
export default async function Preflight() {
  return {
    pageTitle: 'Prologg for Legal'
  }
}
