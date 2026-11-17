import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import MapPlaceholder from "@/components/MapPlaceholder";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import T from "@/components/T";
import { branches } from "@/data/content";

export const metadata: Metadata = {
  title: "Branches | Baith Al Hana Trading Center",
  description: "Find a Baith Al Hana Trading Center branch near you.",
};

export default function BranchesPage() {
  return (
    <PageShell>
      <PageHero title={<T>Our Branches</T>} intro="Find a Baith Al Hana branch near you. Branch details below are placeholders." crumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]} />
      <section className="section">
        <div className="wrap bgrid">
          {branches.map((b) => (
            <article key={b} className="bcard">
              <div style={{ height: 160, borderRadius: 20, overflow: "hidden" }}><Placeholder label={`Photo: ${b}`} /></div>
              <h3><T>{b}</T></h3>
              <div className="kv">
                <div><Icon name="pin" /><span><small><T>Address</T></small><T>[Address, placeholder]</T></span></div>
                <div><Icon name="clock" /><span><small><T>Opening hours</T></small><T>[Opening hours, placeholder]</T></span></div>
                <div><Icon name="phone" /><span><small><T>Phone</T></small><T>[Phone, placeholder]</T></span></div>
              </div>
              <Link href="/contact" className="btn sm"><T>Contact this branch</T></Link>
            </article>
          ))}
        </div>
      </section>
      <MapPlaceholder />
    </PageShell>
  );
}
