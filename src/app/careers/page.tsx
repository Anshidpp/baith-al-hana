import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import T from "@/components/T";
import { careerDivisions, type IconName } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers | Baith Al Hana Trading Center",
  description: "Join the team at Baith Al Hana, House Care or Baith Al Hana Cafeteria.",
};

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "A friendly team", text: "A welcoming place to work and grow." },
  { icon: "grid", title: "Real responsibility", text: "Learn the business across retail and wholesale." },
  { icon: "check", title: "Quality in everything", text: "We care about every detail, and so will you." },
];

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero title={<T>Careers</T>} intro="Join the team behind Baith Al Hana. Choose a division to see its open roles." crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      <section className="section" aria-labelledby="div-h">
        <div className="wrap">
          <h2 id="div-h"><T>Choose a division</T></h2>
          <div className="dcards">
            {careerDivisions.map((d) => (
              <Link key={d.slug} href={`/careers/${d.slug}`} className="dcard">
                <h3><T>{d.name}</T></h3>
                <p><T>Placeholder: add a one-line description.</T></p>
                <span className="btn sm" style={{ alignSelf: "flex-start" }}><T>View roles</T></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint" aria-labelledby="why-h">
        <div className="wrap">
          <h2 id="why-h"><T>Why join us</T></h2>
          <p className="muted note"><T>Demo content. Replace with your real details.</T></p>
          <div className="vals three">
            {why.map((w) => (
              <div key={w.title} className="val"><Icon name={w.icon} /><h3><T>{w.title}</T></h3><p><T>{w.text}</T></p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div><h2><T>Don't see your role?</T></h2><p><T>Send us your details through the contact page.</T></p></div>
            <Link href="/contact" className="btn light"><T>Contact Us</T></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
