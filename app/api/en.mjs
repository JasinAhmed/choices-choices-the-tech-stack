// API-route voor de Engelse homepage (/en).
import { getContent } from '../lib/content.mjs'

export async function get() {
  return {
    json: { lang: 'en', c: getContent('en') }
  }
}
