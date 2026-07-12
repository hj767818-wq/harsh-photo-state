import {
  BookOpen,
  Camera,
  Copy,
  FileText,
  IdCard,
  Layers3,
  Palette,
  Printer,
} from "lucide-react";

const services = [
  {
    title: "B&W Printing",
    description:
      "Clear and fast black & white printing for notes, forms and office documents.",
    icon: Printer,
  },
  {
    title: "Colour Printing",
    description:
      "Bright and sharp colour prints for projects, certificates and photos.",
    icon: Palette,
  },
  {
    title: "Photocopy",
    description:
      "Quick photocopy service for students, offices and daily document needs.",
    icon: Copy,
  },
  {
    title: "Project & Thesis",
    description:
      "Professional project and thesis printing with neat finishing.",
    icon: BookOpen,
  },
  {
    title: "Binding",
    description:
      "Spiral and hard binding for assignments, reports, projects and thesis.",
    icon: Layers3,
  },
  {
    title: "Lamination",
    description:
      "Protect certificates, cards and important documents with lamination.",
    icon: FileText,
  },
  {
    title: "PVC Cards",
    description:
      "Quality PVC ID cards for students, offices and personal use.",
    icon: IdCard,
  },
  {
    title: "Document Scanning",
    description:
      "Scan documents clearly and receive them in digital format.",
    icon: Camera,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-500">
            What We Offer
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Complete Printing Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Students, offices aur local customers ke liye fast, affordable aur
            reliable printing services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20service%20ke%20baare%20mein%20jankari%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
          >
            <Printer size={20} />
            Ask About a Service
          </a>
        </div>
      </div>
    </section>
  );
}