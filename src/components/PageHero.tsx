import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import T from "./T";

export interface Crumb { label: string; href?: string }

export default function PageHero({ title, intro, crumbs }: { title: ReactNode; intro?: string; crumbs: Crumb[] }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <Fragment key={c.label}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? <Link href={c.href}><T>{c.label}</T></Link> : <span aria-current="page"><T>{c.label}</T></span>}
            </Fragment>
          ))}
        </nav>
        <h1>{title}</h1>
        {intro && <p><T>{intro}</T></p>}
      </div>
    </section>
  );
}
