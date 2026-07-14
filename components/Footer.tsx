import Image from "next/image";
import {
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-2xl bg-white p-3">
            <Image
              src="/images/logo.png"
              alt="Harsh Photo State Logo"
              width={1154}
              height={407}
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="mt-6 max-w-sm leading-7 text-slate-300">
            Fast, reliable aur affordable printing services for students,
            offices and local customers in Budh Bazar, Moradabad.
          </p>

          <a
            href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold transition hover:-translate-y-1 hover:bg-green-700"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>

        <div>
          <h3 className="text-lg font-bold text-orange-400">Quick Links</h3>

          <div className="mt-5 space-y-3 text-slate-300">
            <a href="#home" className="block transition hover:text-white">
              Home
            </a>

            <a href="#services" className="block transition hover:text-white">
              Services
            </a>

            <a href="#price" className="block transition hover:text-white">
              Pricing
            </a>

            <a
              href="#print-order"
              className="block transition hover:text-white"
            >
              Order Now
            </a>

            <a href="#reviews" className="block transition hover:text-white">
              Reviews
            </a>

            <a href="#contact" className="block transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-orange-400">Our Services</h3>

          <div className="mt-5 space-y-3 text-slate-300">
            <p>B&amp;W Printing</p>
            <p>Colour Printing</p>
            <p>Photocopy</p>
            <p>A4 Photo Printing</p>
            <p>Project &amp; Thesis Printing</p>
            <p>Binding, Lamination &amp; PVC Cards</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-orange-400">Contact</h3>

          <div className="mt-5 space-y-5 text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin size={21} className="mt-1 shrink-0 text-orange-400" />

              <p>
                Manpur Gali No. 1,
                <br />
                Budh Bazar, Moradabad
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={21} className="mt-1 shrink-0 text-orange-400" />

              <p>
                <a
                  href="tel:+919012957441"
                  className="transition hover:text-white"
                >
                  9012957441
                </a>

                <br />

                <a
                  href="tel:+918171746421"
                  className="transition hover:text-white"
                >
                  8171746421
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={21} className="mt-1 shrink-0 text-orange-400" />

              <a
                href="mailto:harshphotostate@gmail.com"
                className="break-all transition hover:text-white"
              >
                harshphotostate@gmail.com
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              <Navigation size={19} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 Harsh Photo State. All Rights Reserved.
      </div>
    </footer>
  );
}