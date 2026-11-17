"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type Theme = "light" | "dark";
interface Ctx { lang: Lang; theme: Theme; toggleLang: () => void; toggleTheme: () => void }

const PrefsCtx = createContext<Ctx>({ lang: "en", theme: "light", toggleLang: () => {}, toggleTheme: () => {} });
export const usePrefs = () => useContext(PrefsCtx);

export default function Prefs({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("bah-lang") === "ar") setLang("ar");
      const t = localStorage.getItem("bah-theme");
      setTheme(t === "dark" || (!t && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light");
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const d = document.documentElement;
    d.lang = lang;
    d.dir = lang === "ar" ? "rtl" : "ltr";
    d.dataset.theme = theme;
    try { localStorage.setItem("bah-lang", lang); localStorage.setItem("bah-theme", theme); } catch {}
  }, [lang, theme, ready]);

  return (
    <PrefsCtx.Provider value={{ lang, theme, toggleLang: () => setLang(lang === "ar" ? "en" : "ar"), toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark") }}>
      {children}
    </PrefsCtx.Provider>
  );
}
