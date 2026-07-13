import AOSProvider from "../components/AOSProvider";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import Services from "../components/Services";
import PhotoPrinting from "../components/PhotoPrinting";
import PrintOrder from "../components/PrintOrder";
import PriceList from "../components/PriceList";
import StudentCorner from "../components/StudentCorner";
import Gallery from "../components/Gallery";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
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
      <Hero />
      <StatsCounter />
      <Services />
      <PhotoPrinting />
      <PrintOrder />
      <PriceList />
      <StudentCorner />
      <Gallery />
      <About />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Contact />
      <Map />
      <Footer />
      <WhatsAppButton />
    </>
  );
}