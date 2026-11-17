import T from "./T";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";
import heroImage from "../assets/imges/home-img/hero-img.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1><T>Everything your home and business runs on.</T></h1>
          <p className="lead"><T>Cleaning, plastic, paper and household products. Buy a few for home, or order by the carton for your business.</T></p>
          <div className="row">
            <Link href="/retail" className="btn"><T>Shop retail</T></Link>
            <Link href="/wholesale" className="btn ghost"><T>Wholesale enquiries</T></Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="blob" aria-hidden="true" />
           <Image
            src={heroImage}
            alt="Baith Al Hana store exterior"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
