import Placeholder from "./Placeholder";
import T from "./T";

export default function MapPlaceholder() {
  return (
    <section className="section" aria-labelledby="map-h">
      <div className="wrap">
        <h2 id="map-h"><T>Find us on the map</T></h2>
        <div className="map"><Placeholder label="Map placeholder: embed your Google Map here." /></div>
      </div>
    </section>
  );
}
