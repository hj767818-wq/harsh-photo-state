"use client";

import { useState } from "react";

const PHONE = "919012957441"; // <-- Apna WhatsApp number yahan dalna

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Photocopy");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `*New Printing Enquiry*

👤 Name: ${name}
📱 Mobile: ${phone}
🖨️ Service: ${service}

📝 Message:
${message}`;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">
          Contact Us
        </h2>

        <p className="text-center text-slate-600 mb-10">
          Fill the form and send your printing requirement directly on WhatsApp.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5">

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="w-full border rounded-xl p-4"
            value={service}
            onChange={(e) => setService(e.target.value)}
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
            className="w-full border rounded-xl p-4 h-36"
            placeholder="Write your requirement..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 font-semibold transition"
          >
            Send on WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}