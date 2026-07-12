import { ImageIcon } from "lucide-react";

const gallery = [
  "Shop Front",
  "Colour Printing",
  "Photocopy",
  "Project Printing",
  "Binding",
  "PVC Card",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="text-center"
          data-aos="fade-up"
        >
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Gallery
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Our Work
          </h2>

          <p className="mt-4 text-slate-600">
            Some of our printing services and work samples.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (

            <div
              key={item}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-60 items-center justify-center bg-gradient-to-br from-blue-100 to-orange-100">

                <ImageIcon
                  size={70}
                  className="text-blue-700 transition group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {item}
                </h3>

                <p className="mt-2 text-slate-600">
                  Real images will be added soon.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}