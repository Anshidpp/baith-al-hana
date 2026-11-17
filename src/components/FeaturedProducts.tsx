import T from "./T";
import { products } from "@/data/content";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="section tint" id="products" aria-labelledby="prod-h">
      <div className="wrap">
        <h2 id="prod-h"><T>Popular products</T></h2>
        <p className="muted note"><T>Demo products and prices. Replace with your real catalogue.</T></p>
        <div className="prod-grid">{products.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </div>
    </section>
  );
}
