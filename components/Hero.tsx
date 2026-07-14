import Image from "next/image";
import {
  BadgeCheck,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  Zap,
} from "lucide-react";

const trustItems = [
  {
    icon: Printer,
    title: "8+ Services",
    text: "Complete print solutions",
  },
  {
    icon: Clock3,
    title: "Same Day",
    text: "Fast regular printing",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Easy online enquiry",
  },
  {
    icon: MapPin,
    title: "Budh Bazar",
    text: "Moradabad location",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-orange-100"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-300/40 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur sm:text-base">
              <MapPin size={18} className="shrink-0" />

              <span>Manpur Gali No. 1, Budh Bazar, Moradabad</span>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              <span className="text-blue-700">HARSH</span>

              <br />

              <span className="text-orange-500">PHOTO STATE</span>
            </h1>

            <p className="mt-5 text-xl font-bold text-slate-800 sm:text-2xl">
              Print • Copy • Create
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Fast printing, photocopy, colour printing, project and thesis
              printing, binding, lamination and PVC card services at affordable
              prices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                <FileText size={20} />
                Send PDF on WhatsApp
              </a>

              <a
                href="tel:+919012957441"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-md backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon className="text-orange-500" size={23} />

                    <p className="mt-3 text-sm font-black text-slate-900 sm:text-base">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 p-7 text-white sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
                      Print Before You Reach
                    </p>

                    <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                      Send PDF. Collect Ready Prints.
                    </h2>
                  </div>

                  <div className="hidden rounded-2xl bg-white p-3 shadow-lg sm:block">
                    <Image
                      src="/images/logo.png"
                      alt="Harsh Photo State Logo"
                      width={150}
                      height={60}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-blue-100">
                  WhatsApp par file bhejiye, printing details confirm kijiye aur
                  shop se ready order collect kijiye.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <Clock3 size={22} className="text-orange-300" />

                    <p className="mt-2 font-bold">Same Day Service</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <BadgeCheck size={22} className="text-green-300" />

                    <p className="mt-2 font-bold">Quality Checked</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-blue-50 p-4 sm:p-5">
                  <p className="font-bold text-blue-800">B&amp;W / Colour</p>

                  <p className="mt-1 text-sm text-slate-600">
                    Sharp and clean prints
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-4 sm:p-5">
                  <p className="font-bold text-orange-700">Binding / PVC</p>

                  <p className="mt-1 text-sm text-slate-600">
                    Complete finishing
                  </p>
                </div>
              </div>

              <a
                href="#print-order"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                <Zap size={20} />
                Place Printing Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}