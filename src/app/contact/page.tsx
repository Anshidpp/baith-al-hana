import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import MapPlaceholder from "@/components/MapPlaceholder";
import DemoForm, { type Field } from "@/components/DemoForm";
import Icon from "@/components/Icon";
import T from "@/components/T";
import type { IconName } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us | Baith Al Hana Trading Center",
  description: "Get in touch with Baith Al Hana Trading Center for retail, wholesale and general enquiries.",
};

const info: { icon: IconName; label: string; value: string }[] = [
  { icon: "mail", label: "Email", value: "[Email, placeholder]" },
  { icon: "phone", label: "Phone", value: "[Phone, placeholder]" },
  { icon: "pin", label: "Address", value: "[Address, placeholder]" },
  { icon: "clock", label: "Opening hours", value: "[Opening hours, placeholder]" },
];

const fields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "subject", label: "Subject", type: "text" },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero title={<T>Contact Us</T>} intro="We would love to hear from you. Send a message or use the details below." crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="info-stack">
            {info.map((i) => (
              <div key={i.label} className="info"><Icon name={i.icon} /><div><small><T>{i.label}</T></small><T>{i.value}</T></div></div>
            ))}
          </div>
          <div className="form-card">
            <h2><T>Send us a message</T></h2>
            <DemoForm id="contact-form" fields={fields} submit="Send message" />
          </div>
        </div>
      </section>
      <MapPlaceholder />
    </PageShell>
  );
}
