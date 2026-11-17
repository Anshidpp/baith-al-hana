"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { nav } from "@/data/content";
import { tr } from "@/data/ar";
import { usePrefs } from "./Prefs";
import T from "./T";

const CART_DEMO_COUNT = 2; // demo badge only; replace with real cart state

const ico = { viewBox: "0 0 24 24", "aria-hidden": true } as const;
const Chevron = () => <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { lang } = usePrefs();
  const t = (s: string) => (lang === "ar" ? tr(s) : s);
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => { if (listRef.current && !listRef.current.contains(e.target as Node)) setSub(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setSub(null); setMenu(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const close = () => { setMenu(false); setSub(null); };
  const active = (h: string) => (h === "/" ? path === "/" : path === h || path.startsWith(h + "/"));
  const search = (e: FormEvent) => { e.preventDefault(); close(); router.push(`/retail?q=${encodeURIComponent(q.trim())}`); };

  return (
    <header className="site-header">
      <div className="wrap wide bar">
        <Link href="/" className="logo" onClick={close} aria-label="Baith Al Hana, home">
          <span className="mark">LOGO</span>
          <span><span className="ar">بيت الهنا</span><b>Baith Al Hana</b></span>
        </Link>

        <nav id="main-nav" className={menu ? "open" : ""} aria-label={t("Main")}>
          <ul ref={listRef}>
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="has-sub">
                  <button type="button" className={`nl${active(item.href) ? " active" : ""}`} aria-expanded={sub === item.label} aria-haspopup="true" onClick={() => setSub(sub === item.label ? null : item.label)}>
                    <T>{item.label}</T><Chevron />
                  </button>
                  {sub === item.label && (
                    <ul className="sub">
                      {item.children.map((c) => (<li key={c.href}><Link href={c.href} onClick={close}><T>{c.label}</T></Link></li>))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className={`nl${active(item.href) ? " active" : ""}`} aria-current={active(item.href) ? "page" : undefined} onClick={close}><T>{item.label}</T></Link>
                </li>
              )
            )}
          </ul>

          <div className="actions">
            <Link href="/retail" className="btn" onClick={close}>
              <svg {...ico}><path d="M6 8h12l1 12H5zM9 8a3 3 0 0 1 6 0" /></svg><T>Shop Now</T>
            </Link>
            <Link href="/wholesale" className="btn ghost" onClick={close}>
              <svg {...ico}><path d="M3 11l4-4 4 2 3-2 4 3 3 2M7 7l-4 4 6 6a2 2 0 0 0 3 0l1-1M12 17l2 2a2 2 0 0 0 3 0l4-4" /></svg><T>Wholesale (B2B)</T>
            </Link>
            <form className="search" role="search" onSubmit={search}>
              <svg {...ico}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("Search products...")} aria-label={t("Search")} />
            </form>
          </div>
        </nav>

        <div className="quick">
          <Link href="/account" className="ib" aria-label={t("Account")}><svg {...ico}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg></Link>
          <Link href="/cart" className="ib" aria-label={t("Cart")}>
            <svg {...ico}><path d="M3 4h2l2.5 11h10l2-8H7M10 20a1 1 0 1 0 .01 0M17 20a1 1 0 1 0 .01 0" /></svg>
            {CART_DEMO_COUNT > 0 && <i>{CART_DEMO_COUNT}</i>}
          </Link>
        </div>

        <button
          className={`burger${menu ? " is-open" : ""}`}
          aria-label={t("Toggle menu")}
          aria-expanded={menu}
          aria-controls="main-nav"
          onClick={() => setMenu(!menu)}
        >
          <span className="bars" aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
    </header>
  );
}
