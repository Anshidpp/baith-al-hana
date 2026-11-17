import Image from "next/image";
import T from "./T";
import Link from "next/link";
import type { Product } from "@/data/content";

export default function ProductCard({ p }: { p: Product }) {
  const retail = p.channels.includes("retail");
  const wholesale = p.channels.includes("wholesale");
  return (
    <article className="pcard">
      <div className="pimg">
        <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="pbody">
        <span className="tags">
          {retail && <b><T>Retail</T></b>}
          {wholesale && <b className="w"><T>Wholesale</T></b>}
        </span>
        <h3><T>{p.name}</T></h3>
        <p className="muted"><T>{p.category}</T></p>
        <div className="prow">
          <span className="price"><T>{p.demoPriceSar ? `SAR ${p.demoPriceSar} (demo)` : "Bulk quote"}</T></span>
          <Link href={retail && p.demoPriceSar ? "/retail" : "/wholesale"} className="btn sm"><T>{retail && p.demoPriceSar ? "View in shop" : "Request quote"}</T></Link>
        </div>
      </div>
    </article>
  );
}
