import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Categories from "@/components/Categories";
import Divisions from "@/components/Divisions";
import Channels from "@/components/Channels";
import T from "@/components/T";
import { founders, type IconName } from "@/data/content";
import storefrontImage from "../../assets/imges/about-img/367A6699.jpg";
import storeInteriorImage from "../../assets/imges/about-img/367A6571.jpg";
import teamImage from "../../assets/imges/about-img/367A6332.jpg";
import shelvesImage from "../../assets/imges/about-img/367A6594.jpg";
import customerImage from "../../assets/imges/about-img/367A6600.jpg";
import warehouseImage from "../../assets/imges/about-img/367A6680.jpg";
import founderOneImage from "../../assets/imges/founders/founder1.jpg";
import founderTwoImage from "../../assets/imges/founders/founder2.png";
import founderThreeImage from "../../assets/imges/founders/founder3.png";
import founderFourImage from "../../assets/imges/founders/founder4.jpg";


export const metadata: Metadata = {
  title: "About Us | Baith Al Hana Trading Center",
  description: "Learn about Baith Al Hana Trading Center: retail and wholesale cleaning, plastic, paper and household products.",
};

const highlights = ["Carefully Selected Products", "Fair and Friendly Service", "Attention to Every Detail"];
const founderImages = [founderOneImage, founderTwoImage, founderThreeImage, founderFourImage];
const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "check", title: "Quality First", text: "Carefully selected items you can rely on." },
  { icon: "heart", title: "Friendly Service", text: "A welcoming experience for every customer." },
  { icon: "grid", title: "Wide Range", text: "Cleaning, plastic, paper and household in one place." },
  { icon: "users", title: "Made for Everyone", text: "Options for homes and for businesses buying in bulk." },
];

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <h1><T>About Baith Al Hana Trading Center</T></h1>
            <p><T>Cleaning, plastic, paper and household products for homes and businesses, available through retail and wholesale.</T></p>
          </div>
        </section>

        <section className="section">
          <div className="wrap story">
            <div>
              <h2><T>Quality and Passion in Every Detail.</T></h2>
              <p><T>At Baith Al Hana, we believe that great experiences begin with quality, care, and attention to every detail. Discover products selected with passion and prepared to make every moment special.</T></p>
              <p className="muted"><T>Placeholder: add your company story here.</T></p>
              <div className="hl">
                {highlights.map((h) => (<div key={h}><Icon name="check" /><T>{h}</T></div>))}
              </div>
            </div>
            <div className="pics">
              <div className="a"><Image src={storefrontImage} alt="Baith Al Hana store exterior" fill sizes="(max-width: 1024px) 100vw, 50vw" /></div>
              <div className="b"><Image src={storeInteriorImage} alt="Inside the Baith Al Hana store" fill sizes="(max-width: 1024px) 50vw, 25vw" /></div>
              <div className="c"><Image src={teamImage} alt="Baith Al Hana team" fill sizes="(max-width: 1024px) 50vw, 25vw" /></div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="founders-h">
          <div className="wrap">
            <h2 id="founders-h"><T>Meet the Founders</T></h2>
            <p className="muted note"><T>The people behind Baith Al Hana.</T></p>
            <div className="founders">
              {founders.map((f, index) => (
                <figure key={f.name} className="founder">
                  <div className="portrait">
                    <Image src={founderImages[index]} alt={f.name} fill sizes="180px" />
                  </div>
                  <figcaption>
                    <h3><T>{f.name}</T></h3>
                    <p><T>{f.role}</T></p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section tint" aria-labelledby="val-h">
          <div className="wrap">
            <h2 id="val-h"><T>What we stand for</T></h2>
            <div className="vals">
              {values.map((v) => (
                <div key={v.title} className="val">
                  <Icon name={v.icon} />
                  <h3><T>{v.title}</T></h3>
                  <p><T>{v.text}</T></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Categories />

        <section className="section tint" aria-labelledby="look-h">
          <div className="wrap">
            <h2 id="look-h"><T>A look inside</T></h2>
            <div className="strip">
              <div><Image src={shelvesImage} alt="Product shelves inside the store" fill sizes="(max-width: 640px) 100vw, 33vw" /></div>
              <div><Image src={warehouseImage} alt="Baith Al Hana warehouse" fill sizes="(max-width: 640px) 100vw, 33vw" /></div>
              <div><Image src={customerImage} alt="Customer being assisted in the store" fill sizes="(max-width: 640px) 100vw, 33vw" /></div>
            </div>
          </div>
        </section>

        <Channels />
        <Divisions />

        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <div>
                <h2><T>Want to work with us?</T></h2>
                <p><T>Get in touch for supply enquiries, or see the roles open in our divisions.</T></p>
              </div>
              <div className="row">
                <Link href="/contact" className="btn light"><T>Contact Us</T></Link>
                <Link href="/careers" className="btn ghost"><T>View Careers</T></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
