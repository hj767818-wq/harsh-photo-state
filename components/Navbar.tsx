"use client";

import Image from "next/image";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#price" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
        >
          <Image
  src="/images/logo.png"
  alt="Harsh Photo State Logo"
  width={1154}
  height={407}
  priority
  className="h-12 w-auto object-contain sm:h-14 lg:h-16"
/>
        </a>

        <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 transition duration-300 hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919012957441"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-100"
          >
            <Phone size={18} />
            Call Us
          </a>

          <a
            href="#print-order"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <ShoppingBag size={18} />
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md transition hover:bg-blue-800 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 font-bold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#print-order"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 text-white transition hover:bg-orange-600"
            >
              <ShoppingBag size={19} />
              Order Now
            </a>

            <a
              href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="rounded-xl bg-green-600 px-5 py-4 text-center text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}