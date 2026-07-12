import {
  BadgeCheck,
  Clock3,
  FileText,
  MapPin,
  Phone,
  Printer,
  Star,
  Users,
  Zap,
} from "lucide-react";

const trustItems = [
  {
    icon: Star,
    title: "4.9 Rating",
    text: "Google Customers",
  },
  {
    icon: Users,
    title: "1000+",
    text: "Happy Customers",
  },
  {
    icon: Zap,
    title: "Fast Service",
    text: "Quick Turnaround",
  },
  {
    icon: BadgeCheck,
    title: "Trusted",
    text: "Local Print Shop",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
    >
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 font-semibold text-orange-600 shadow-sm backdrop-blur">
              <MapPin size={18} />
              <span>Manpur Gali No. 1, Budh Bazar, Moradabad</span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-blue-700">HARSH</span>
              <br />
              <span className="text-orange-500">PHOTO STATE</span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-slate-800">
              Print • Copy • Create
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Fast printing, photocopy, project and thesis printing, spiral
              binding, lamination and PVC card services at affordable prices.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
              >
                <FileText size={20} />
                Send PDF on WhatsApp
              </a>

              <a
                href="tel:+919012957441"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon className="text-orange-500" size={24} />
                    <p className="mt-3 font-black text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Print Before You Reach
                    </p>

                    <h2 className="mt-3 text-3xl font-black">
                      Send PDF. Collect Ready Prints.
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <Printer size={46} />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-blue-100">
                  WhatsApp par file bhejiye, printing details confirm kijiye aur
                  shop se ready order collect kijiye.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <Clock3 size={22} className="text-orange-300" />
                    <p className="mt-2 font-bold">Same Day Service</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <BadgeCheck size={22} className="text-green-300" />
                    <p className="mt-2 font-bold">Quality Checked</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="font-bold text-blue-800">B&amp;W / Colour</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Sharp and clean prints
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="font-bold text-orange-700">Binding / PVC</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Complete finishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}