import {
  Camera,
  FileImage,
  Palette,
  Printer,
  BookOpen,
  CreditCard,
  Layers,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Passport Photos",
    desc: "Instant passport, visa & ID photos.",
  },
  {
    icon: FileImage,
    title: "A4 Photo Printing",
    desc: "High-quality glossy & matte photo prints.",
  },
  {
    icon: Palette,
    title: "Colour Printing",
    desc: "Sharp colour printouts for every need.",
  },
  {
    icon: Printer,
    title: "B&W Printing",
    desc: "Affordable black & white printing.",
  },
  {
    icon: BookOpen,
    title: "Project & Thesis",
    desc: "Complete project printing & binding.",
  },
  {
    icon: Layers,
    title: "Spiral Binding",
    desc: "Professional spiral & soft binding.",
  },
  {
    icon: CreditCard,
    title: "PVC Card",
    desc: "PVC ID cards with premium quality.",
  },
  {
    icon: FileText,
    title: "Lamination",
    desc: "A4, A3 & document lamination service.",
  },
];

export default function PhotoPrinting() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] font-bold text-orange-500">
            Our Services
          </p>

          <h2 className="text-5xl font-black text-blue-700 mt-3">
            Printing Services
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Everything you need for printing, photocopy,
            project work and photo printing at one place.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}