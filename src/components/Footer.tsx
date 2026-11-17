import T from "./T";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div><strong><T>Baith Al Hana Trading Center</T></strong><p><T>Retail and wholesale household supplies.</T></p></div>
        <ul>
          <li><Link href="/about"><T>About</T></Link></li>
          <li><Link href="/branches"><T>Branches</T></Link></li>
          <li><Link href="/careers"><T>Careers</T></Link></li>
          <li><Link href="/retail"><T>Retail</T></Link></li>
          <li><Link href="/wholesale"><T>Wholesale</T></Link></li>
        </ul>
        <ul>
          <li><T>[Address, placeholder]</T></li>
          <li><T>[Phone, placeholder]</T></li>
          <li><T>[Email, placeholder]</T></li>
        </ul>
      </div>
      <p className="wrap copy"><T>© 2026 Baith Al Hana Trading Center</T></p>
    </footer>
  );
}
