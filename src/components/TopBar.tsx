"use client";
import { usePrefs } from "./Prefs";
import T from "./T";

const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export default function TopBar() {
  const { lang, theme, toggleLang, toggleTheme } = usePrefs();
  const dark = theme === "dark";
  const ar = lang === "ar";
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="mini-contact">
          <span><svg {...svg}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg><T>[Email, placeholder]</T></span>
          <span><svg {...svg}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg><T>[Phone, placeholder]</T></span>
        </div>
        <div className="tools">
          <button type="button" role="switch" aria-checked={dark} aria-label={ar ? "الوضع الداكن" : "Dark mode"} className="tg" onClick={toggleTheme}>
            <span className="th" />
            <span className={`o${!dark ? " on" : ""}`}><svg {...svg}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg></span>
            <span className={`o${dark ? " on" : ""}`}><svg {...svg}><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" /></svg></span>
          </button>
          <button type="button" role="switch" aria-checked={ar} aria-label={ar ? "التبديل إلى الإنجليزية" : "Switch to Arabic"} className="tg" onClick={toggleLang}>
            <span className="th" />
            <span className={`o${!ar ? " on" : ""}`}>EN</span>
            <span className={`o${ar ? " on" : ""}`}>ع</span>
          </button>
        </div>
      </div>
    </div>
  );
}
