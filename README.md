# Choices, Choices - The Tech-stack

Onderzoek een andere tech-stack voor het ontwerpen en bouwen van een website voor een opdrachtgever.

De instructie vind je in de [Wiki](https://github.com/fdnd-task/choices-choices-the-tech-stack/wiki)



# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

## Installatie

Prototype van de Prologg-site, nagebouwd met **Next.js (App Router) + React** in plaats van SvelteKit.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # statische export naar /out
```

## Gebruik

| SvelteKit | Next.js / React |
| --- | --- |
| `src/routes/+layout.svelte` / `+page.svelte` | `app/layout.js` / `app/page.js` |
| `src/lib/atoms`, `molecules`, `organisms` | `components/atoms`, `molecules`, `organisms` |
| Scoped `<style>` in `.svelte` | CSS Modules (`*.module.css`) |
| `lang.svelte.js` (`$state`) | `components/LangProvider.js` (React Context) |
| `content.js` met `?raw` imports | `lib/content.js` leest `content/*/content.md` met `fs` tijdens de build |
| `static/` | `public/` |
| `adapter-static` + `prerender` | `output: "export"` in `next.config.mjs` |

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
