"use client";
import { usePrefs } from "./Prefs";
import { tr } from "@/data/ar";

// Usage: <T>English text</T>. Renders the Arabic version when the language is Arabic.
export default function T({ children }: { children: string }) {
  const { lang } = usePrefs();
  return <>{lang === "ar" ? tr(children) : children}</>;
}
