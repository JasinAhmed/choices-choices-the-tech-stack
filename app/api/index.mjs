// API-route voor de homepage (/). Wat hier als `json` terugkomt staat
// in elk element beschikbaar als `state.store`.
//
// Taalkeuze: ?lang=en of ?lang=nl in de URL. De keuze wordt in de sessie
// (cookie) bewaard, zodat hij blijft staan bij een volgend bezoek.
// Dit vervangt de LangProvider (React Context + localStorage).
import { getContent, LANGS } from '../lib/content.mjs'

export async function get(req) {
  const asked = req.query?.lang
  const lang = LANGS.includes(asked) ? asked : (LANGS.includes(req.session?.lang) ? req.session.lang : 'nl')

  return {
    session: { ...req.session, lang },
    json: { lang, c: getContent(lang) }
  }
}
