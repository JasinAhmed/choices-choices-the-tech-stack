"use client";

// Vervanger van lang.svelte.js ($state) — in React delen we state via Context.
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ content, children }) {
  const [lang, setLang] = useState("nl");

  // opgeslagen keuze herstellen na hydration (voorkomt een prerender-mismatch)
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "nl") setLang(saved);
  }, []);

  // opslaan + <html lang> bijwerken wanneer de taal verandert
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, c: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
