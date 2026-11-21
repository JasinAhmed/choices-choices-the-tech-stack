"use client";

import { useId } from "react";
import { useLang } from "@/components/LangProvider";
import styles from "./LanguageToggle.module.css";

// Opslaan in localStorage en <html lang> bijwerken gebeurt in LangProvider,
// zodat de mobiele en desktop-toggle altijd synchroon lopen.
export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  const id = useId(); // de toggle staat 2x op de pagina, dus geen vaste id

  return (
    <>
      <label htmlFor={id} className={styles.visuallyHidden}>
        Switch language
      </label>
      <input
        id={id}
        type="checkbox"
        className={styles.toggle}
        checked={lang === "en"}
        onChange={(e) => setLang(e.currentTarget.checked ? "en" : "nl")}
      />
    </>
  );
}
