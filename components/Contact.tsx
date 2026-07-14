"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const PHONE = "919012957441";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Photocopy");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendWhatsApp = () => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (cleanPhone.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    if (!message.trim()) {
      setError("Please write your requirement.");
      return;
    }

    setError("");

    const text = `*New Printing Enquiry*

👤 *Name:* ${name}
📱 *Mobile:* ${phone}
🖨️ *Service:* ${service}

📝 *Requirement:*
${message}`;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            Contact Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Fill the form and send your printing requirement directly on
            WhatsApp.
          </p>
        </div>

        <div
          className="mt-12 space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          data-aos="fade-up"
        >
          <input
            type="text"
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="tel"
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            placeholder="Mobile Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option>Photocopy</option>
            <option>Colour Print</option>
            <option>A4 Photo Print</option>
            <option>Project Printing</option>
            <option>Thesis Printing</option>
            <option>PVC Card</option>
            <option>Lamination</option>
            <option>Binding</option>
          </select>

          <textarea
            className="h-36 w-full resize-none rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            placeholder="Write your requirement..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={sendWhatsApp}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 p-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-green-700"
          >
            <MessageCircle size={20} />
            Send on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}