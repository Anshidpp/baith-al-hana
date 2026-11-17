import T from "./T";
import Link from "next/link";
import { categories } from "@/data/content";
import Icon from "./Icon";

export default function Categories() {
  return (
    <section className="section" id="categories" aria-labelledby="cat-h">
      <div className="wrap">
        <h2 id="cat-h"><T>Shop by category</T></h2>
        <div className="cat-grid">
          {categories.map((c) => (
            <Link key={c.slug} href={`/retail?category=${c.slug}`} className="cat">
              <Icon name={c.icon} />
              <h3><T>{c.name}</T></h3>
              <p><T>{c.blurb}</T></p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
