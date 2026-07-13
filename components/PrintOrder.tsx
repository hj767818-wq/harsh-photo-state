"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
  MessageCircle,
  Printer,
  Upload,
} from "lucide-react";

const WHATSAPP_NUMBER = "919012957441";

const services = [
  "Document Printing",
  "A4 Photo Printing",
  "Project Printing",
  "Thesis Printing",
  "Photocopy",
  "PVC Card",
  "Spiral Binding",
  "Lamination",
];

export default function PrintOrder() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Document Printing");
  const [printType, setPrintType] = useState("B&W");
  const [copies, setCopies] = useState("1");
  const [binding, setBinding] = useState("No Binding");
  const [instructions, setInstructions] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const sendOrder = () => {
    const cleanMobile = mobile.replace(/\D/g, "");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (cleanMobile.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    if (!fileName) {
      setError("Please select your PDF or document.");
      return;
    }

    setError("");

    const orderMessage = `*New Printing Order*

👤 *Name:* ${name}
📱 *Mobile:* ${mobile}
🖨️ *Service:* ${service}
🎨 *Print Type:* ${printType}
📄 *Copies:* ${copies}
📚 *Binding:* ${binding}
📎 *Selected File:* ${fileName}

📝 *Instructions:*
${instructions.trim() || "No additional instructions"}

Please confirm the price and completion time.

⚠️ I will attach the selected PDF/document in this WhatsApp chat.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      orderMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="print-order" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-aos="fade-right">
            <p className="font-bold uppercase tracking-[0.25em] text-orange-400">
              Quick Print Order
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Send Your Printing Order on WhatsApp
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Apni printing details fill kijiye, PDF select kijiye aur order
              details WhatsApp par bhejiye.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700">
                  <FileText size={24} />
                </div>

                <div>
                  <h3 className="font-bold">Select Your Document</h3>
                  <p className="mt-1 text-slate-400">
                    PDF, JPG, PNG or document file select karein.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500">
                  <Printer size={24} />
                </div>

                <div>
                  <h3 className="font-bold">Choose Printing Details</h3>
                  <p className="mt-1 text-slate-400">
                    Colour/B&amp;W, copies aur binding select karein.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <h3 className="font-bold">Confirm on WhatsApp</h3>
                  <p className="mt-1 text-slate-400">
                    WhatsApp khulne par selected file manually attach karein.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl sm:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <BookOpen size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black">Printing Order Form</h3>
                <p className="text-sm text-slate-500">
                  Fill all important order details.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Your Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Mobile Number
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">Service</span>
                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700"
                >
                  {services.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">Print Type</span>
                <select
                  value={printType}
                  onChange={(event) => setPrintType(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700"
                >
                  <option>B&amp;W</option>
                  <option>Colour</option>
                  <option>Photo Print</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">Copies</span>
                <input
                  type="number"
                  min="1"
                  value={copies}
                  onChange={(event) => setCopies(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">Binding</span>
                <select
                  value={binding}
                  onChange={(event) => setBinding(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700"
                >
                  <option>No Binding</option>
                  <option>Spiral Binding</option>
                  <option>Soft Binding</option>
                  <option>Hard Binding</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold">
                Select PDF or Document
              </span>

              <div className="relative rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-6 text-center transition hover:border-blue-500">
                <Upload className="mx-auto text-blue-700" size={32} />

                <p className="mt-3 font-bold text-blue-800">
                  {fileName || "Click to select your file"}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  PDF, JPG, PNG or DOC file
                </p>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    setFileName(file?.name || "");
                  }}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
              </div>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold">
                Additional Instructions
              </span>

              <textarea
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
                placeholder="Page range, paper size, single/double side or other details..."
                className="min-h-32 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={sendOrder}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-700"
            >
              <MessageCircle size={21} />
              Open WhatsApp &amp; Send Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              WhatsApp open hone ke baad selected PDF/document ko chat me
              manually attach karna hoga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}