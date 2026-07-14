import {
  BookOpen,
  CheckCircle2,
  Copy,
  CreditCard,
  Image,
  Layers3,
  MessageCircle,
  Palette,
  Printer,
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "B&W Printing",
    price: "₹2 / Page",
  },
  {
    icon: Palette,
    title: "Colour Printing",
    price: "₹10 / Page",
  },
  {
    icon: Copy,
    title: "Photocopy",
    price: "₹2 / Page",
  },
  {
    icon: Image,
    title: "A4 Photo Printing",
    price: "₹30 / Print",
  },
  {
    icon: BookOpen,
    title: "Project & Thesis",
    price: "Starting ₹80",
  },
  {
    icon: Layers3,
    title: "Spiral Binding",
    price: "Starting ₹40",
  },
  {
    icon: CreditCard,
    title: "PVC Card",
    price: "Starting ₹100",
  },
];

export default function PriceList() {
  return (
    <section id="price" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Affordable Pricing
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 md:text-5xl">
            Price List
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Transparent starting prices for our most popular printing services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-600 sm:text-base">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  {service.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    Affordable price
                  </p>

                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    Fast service
                  </p>

                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    Quality checked
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-10 rounded-3xl bg-gradient-to-r from-blue-50 to-orange-50 p-6 text-center"
          data-aos="fade-up"
        >
          <p className="text-sm leading-6 text-slate-600">
            <strong className="text-slate-900">Note:</strong> Prices are
            indicative. Final price may vary depending on paper quality, size,
            quantity and finishing options.
          </p>

          <a
            href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20exact%20printing%20price%20batayiye."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-700"
          >
            <MessageCircle size={20} />
            Get Exact Price on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}