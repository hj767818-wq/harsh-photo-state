import AOSProvider from "../components/AOSProvider";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import Services from "../components/Services";
import PrintOrder from "../components/PrintOrder";
import PriceList from "../components/PriceList";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <AOSProvider />

      <Navbar />

      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <PrintOrder />
        <PriceList />
        <Reviews />
        <FAQ />
        <Contact />
        <Map />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}