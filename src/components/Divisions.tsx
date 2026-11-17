import T from "./T";
import { divisions } from "@/data/content";

export default function Divisions() {
  return (
    <section className="section tint" aria-labelledby="div-h">
      <div className="wrap">
        <h2 id="div-h"><T>Our divisions</T></h2>
        <div className="div-grid">
          {divisions.map((d) => (<div key={d.name} className="div"><h3><T>{d.name}</T></h3><p><T>{d.note}</T></p></div>))}
        </div>
      </div>
    </section>
  );
}
