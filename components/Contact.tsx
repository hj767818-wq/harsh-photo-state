export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Get Your Print Ready
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            PDF WhatsApp par bhejiye, printing details confirm kijiye aur order
            shop se collect kijiye.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-blue-50 p-8">
            <div className="text-4xl">📍</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Shop Address
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Manpur Gali No. 1,
              <br />
              Budh Bazar,
              <br />
              Moradabad, Uttar Pradesh
            </p>

            <a
              href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Get Directions
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-orange-50 p-8">
            <div className="text-4xl">📞</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Call or WhatsApp
            </h3>

            <div className="mt-4 space-y-3 text-slate-700">
              <a
                href="tel:+919012957441"
                className="block font-semibold hover:text-blue-700"
              >
                9012957441
              </a>

              <a
                href="tel:+918171746421"
                className="block font-semibold hover:text-blue-700"
              >
                8171746421
              </a>

              <a
                href="mailto:harshphotostate@gmail.com"
                className="block break-all font-semibold hover:text-blue-700"
              >
                harshphotostate@gmail.com
              </a>
            </div>

            <a
              href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-600"
            >
              Send PDF on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <div className="text-4xl">🕒</div>

            <h3 className="mt-5 text-2xl font-bold">
              Shop Timing
            </h3>

            <div className="mt-5 space-y-4 text-slate-300">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                <span>Monday – Saturday</span>
                <span className="font-bold text-white">
                  9:00 AM – 8:30 PM
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="font-bold text-white">
                  10:00 AM – 2:00 PM
                </span>
              </div>
            </div>

            <p className="mt-7 rounded-xl bg-white/10 p-4 text-sm leading-6 text-slate-200">
              Urgent printing ke liye pehle WhatsApp ya call karke confirm kar
              sakte hain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}