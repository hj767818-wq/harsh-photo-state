import {
  BookOpen,
  Copy,
  CreditCard,
  Image,
  Layers3,
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

          <p className="mt-4 text-slate-600">
            Transparent pricing for our most popular services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-2 hover:border-orange-400 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={30} />
                  </div>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600 sm:text-base">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div
          className="mt-10 rounded-2xl bg-blue-50 p-6 text-center"
          data-aos="fade-up"
        >
          <p className="text-sm leading-6 text-slate-600">
            <strong className="text-slate-900">Note:</strong> Prices are
            indicative. Final price may vary depending on paper quality, size,
            quantity and finishing options.
          </p>
        </div>
      </div>
    </section>
  );
}