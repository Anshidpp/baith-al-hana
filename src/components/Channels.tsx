import T from "./T";
import Link from "next/link";

export default function Channels() {
  return (
    <section className="section" aria-labelledby="ch-h">
      <div className="wrap">
        <h2 id="ch-h"><T>Two ways to buy</T></h2>
        <div className="ch-grid">
          <div className="ch retail">
            <h3><T>Retail</T></h3>
            <p><T>Browse the online shop, pick what you need and order for your home.</T></p>
            <Link href="/retail" className="btn light"><T>Open the retail shop</T></Link>
          </div>
          <div className="ch">
            <h3><T>Wholesale</T></h3>
            <p><T>Buying for a business? Ask for carton pricing and supply terms.</T></p>
            <Link href="/wholesale" className="btn"><T>Ask for wholesale pricing</T></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
