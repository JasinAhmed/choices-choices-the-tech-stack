// Server-only: leest de markdown-bestanden tijdens de build.
// In SvelteKit gebeurde dit met `?raw` imports, in Next lezen we ze met fs.
import { readFileSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";

// pak de tekst tussen de twee --- regels en parse het als YAML
const frontmatter = (raw) =>
  parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);

const read = (lang) =>
  frontmatter(
    readFileSync(path.join(process.cwd(), "content", lang, "content.md"), "utf8")
  );

export function getContent() {
  return { nl: read("nl"), en: read("en") };
}
