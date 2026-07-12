import AOSProvider from "../components/AOSProvider";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import StudentCorner from "../components/StudentCorner";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Reviews from "../components/Reviews";
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
      <Services />
      <StudentCorner />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
      <Map />
      <Footer />
      <WhatsAppButton />
    </>
  );
}