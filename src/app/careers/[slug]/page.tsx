import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import DemoForm, { type Field } from "@/components/DemoForm";
import T from "@/components/T";
import { careerDivisions } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerDivisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = careerDivisions.find((x) => x.slug === slug);
  return { title: `Careers at ${d?.name ?? "Baith Al Hana"} | Baith Al Hana Trading Center` };
}

export default async function DivisionCareersPage({ params }: Props) {
  const { slug } = await params;
  const d = careerDivisions.find((x) => x.slug === slug);
  if (!d) notFound();

  const fields: Field[] = [
    { name: "name", label: "Full name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "role", label: "Role", type: "select", options: [...d.roles, "General application"] },
    { name: "message", label: "Message", type: "textarea" },
  ];

  return (
    <PageShell>
      <PageHero
        title={<><T>Careers at</T> <T>{d.name}</T></>}
        intro="Placeholder: add a one-line description."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: d.name }]}
      />
      <section className="section" aria-labelledby="roles-h">
        <div className="wrap">
          <h2 id="roles-h"><T>Open roles</T></h2>
          <p className="muted note"><T>Demo roles. Replace with real openings.</T></p>
          <div className="roles">
            {d.roles.map((r) => (
              <div key={r} className="role"><h3><T>{r}</T></h3><a href="#apply" className="btn sm"><T>Apply now</T></a></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint" id="apply">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="form-card">
            <h2><T>Apply for this division</T></h2>
            <DemoForm id="apply-form" fields={fields} submit="Submit application" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
