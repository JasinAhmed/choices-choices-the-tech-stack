// API-route voor de Nederlandse homepage (/). Wat hier als `json` terugkomt
// staat in elk element beschikbaar als `state.store`.
// De Engelse versie staat op /en (app/api/en.mjs).
import { getContent } from '../lib/content.mjs'

export async function get() {
  return {
    json: { lang: 'nl', c: getContent('nl') }
  }
}
