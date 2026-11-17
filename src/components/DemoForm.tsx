"use client";
import { useState, type FormEvent } from "react";
import { usePrefs } from "./Prefs";
import { tr } from "@/data/ar";
import T from "./T";

export interface Field { name: string; label: string; type: "text" | "email" | "tel" | "textarea" | "select"; required?: boolean; options?: string[] }

// Client-side validation only. Connect onSubmit to your API or email service later.
export default function DemoForm({ id, fields, submit }: { id: string; fields: Field[]; submit: string }) {
  const { lang } = usePrefs();
  const t = (s: string) => (lang === "ar" ? tr(s) : s);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = "Please fill in this field.";
      else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) next[f.name] = "Please enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) { form.reset(); setDone(true); } else setDone(false);
  }

  return (
    <form id={id} className="form" noValidate onSubmit={onSubmit}>
      {fields.map((f) => {
        const fid = `${id}-${f.name}`;
        const err = errors[f.name];
        const common = { id: fid, name: f.name, "aria-invalid": err ? true : undefined, "aria-describedby": err ? `${fid}-e` : undefined } as const;
        return (
          <div className="fld" key={f.name}>
            <label htmlFor={fid}><T>{f.label}</T>{f.required ? " *" : ""}</label>
            {f.type === "textarea" ? <textarea {...common} /> :
             f.type === "select" ? (
               <select {...common}>{f.options?.map((o) => <option key={o} value={o}>{t(o)}</option>)}</select>
             ) : <input {...common} type={f.type} />}
            {err && <div className="err" id={`${fid}-e`} role="alert"><T>{err}</T></div>}
          </div>
        );
      })}
      <button type="submit" className="btn"><T>{submit}</T></button>
      {done && <div className="ok" role="status"><T>Thank you! (Demo only: nothing was sent.)</T></div>}
    </form>
  );
}
