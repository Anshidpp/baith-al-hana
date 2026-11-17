import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Channels from "@/components/Channels";
import Divisions from "@/components/Divisions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Channels />
        <Divisions />
      </main>
      <Footer />
    </>
  );
}
