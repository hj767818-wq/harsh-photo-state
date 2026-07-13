"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can I send my PDF on WhatsApp?",
    answer:
      "Yes, you can send your PDF or documents on WhatsApp and collect the printed copies from our shop.",
  },
  {
    question: "Do you provide project and thesis printing?",
    answer:
      "Yes, we print projects, assignments, dissertations and thesis with spiral or hard binding.",
  },
  {
    question: "Do you offer colour printing?",
    answer:
      "Yes, high-quality colour printing is available on different paper sizes.",
  },
  {
    question: "How much time does printing take?",
    answer:
      "Most regular print jobs are completed on the same day depending on quantity.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24" id="faq">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left font-bold"
              >
                {faq.question}

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}