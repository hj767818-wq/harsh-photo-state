"use client";

import { useState } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  X,
} from "lucide-react";

const galleryItems = [
  {
    title: "Shop Front",
    description: "Harsh Photo State, Budh Bazar, Moradabad",
  },
  {
    title: "B&W Printing",
    description: "Fast and clear black & white printing",
  },
  {
    title: "Colour Printing",
    description: "Sharp and bright colour prints",
  },
  {
    title: "Project & Thesis",
    description: "Professional project printing and binding",
  },
  {
    title: "PVC Cards",
    description: "Premium quality PVC ID cards",
  },
  {
    title: "Lamination & Binding",
    description: "Neat finishing for documents and projects",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? galleryItems.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === galleryItems.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
              Gallery
            </p>

            <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
              Our Work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Shop aur printing work ki real photos baad me yahan add ki jayengi.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-orange-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />

                  <ImageIcon
                    size={72}
                    className="relative text-blue-700 transition duration-300 group-hover:scale-110"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md">
                    <Camera size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <p className="mt-4 text-sm font-bold text-blue-700">
                    Click to preview
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 py-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg sm:left-8"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-[55vh] items-center justify-center bg-gradient-to-br from-blue-100 via-white to-orange-100">
              <ImageIcon size={110} className="text-blue-700" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-black text-slate-900">
                {galleryItems[activeIndex].title}
              </h3>

              <p className="mt-2 text-slate-600">
                {galleryItems[activeIndex].description}
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Real photo will be added soon.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg sm:right-8"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}