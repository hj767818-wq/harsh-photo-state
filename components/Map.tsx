import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d520.4928362674589!2d78.77386179240708!3d28.83492897534458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb780b42d757%3A0x8005834ce1e43377!2sHarsh%20Photo%20State!5e1!3m2!1sen!2sin!4v1783838527894!5m2!1sen!2sin";

export default function Map() {
  return (
    <section id="location" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Visit Our Shop
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            Find Harsh Photo State
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Manpur Gali No. 1, Budh Bazar, Moradabad
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
            data-aos="fade-right"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="540"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Harsh Photo State Google Map"
              className="block w-full"
            />
          </div>

          <div
            className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8 text-white shadow-2xl"
            data-aos="fade-left"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="text-xl font-black">Shop Address</h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Manpur Gali No. 1,
                  <br />
                  Budh Bazar, Moradabad,
                  <br />
                  Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700">
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="text-xl font-black">Business Hours</h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Monday–Saturday
                  <br />
                  9:00 AM – 8:30 PM
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Sunday
                  <br />
                  10:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600">
                <Phone size={24} />
              </div>

              <div>
                <h3 className="text-xl font-black">Call Us</h3>

                <div className="mt-2 space-y-2 text-slate-300">
                  <a
                    href="tel:+919012957441"
                    className="block transition hover:text-white"
                  >
                    9012957441
                  </a>

                  <a
                    href="tel:+918171746421"
                    className="block transition hover:text-white"
                  >
                    8171746421
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500">
                <Mail size={24} />
              </div>

              <div>
                <h3 className="text-xl font-black">Email</h3>

                <a
                  href="mailto:harshphotostate@gmail.com"
                  className="mt-2 block break-all text-slate-300 transition hover:text-white"
                >
                  harshphotostate@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-3">
              <a
                href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                <Navigation size={20} />
                Get Directions
              </a>

              <a
                href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20shop%20location%20chahiye."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Ask Location on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}