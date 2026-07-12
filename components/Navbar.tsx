"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white text-2xl">
            🖨️
          </div>

          <div>
            <h1 className="font-extrabold text-lg md:text-xl text-blue-700">
              HARSH
              <span className="text-orange-500"> PHOTO STATE</span>
            </h1>

            <p className="text-xs text-gray-500 tracking-widest">
              PRINT • COPY • CREATE
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">

          <a href="#home" className="hover:text-orange-500">
            Home
          </a>

          <a href="#services" className="hover:text-orange-500">
            Services
          </a>

          <a href="#student-corner" className="hover:text-orange-500">
            Student Corner
          </a>

          <a href="#gallery" className="hover:text-orange-500">
            Gallery
          </a>

          <a href="#reviews" className="hover:text-orange-500">
            Reviews
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>

          <a
            href="tel:+919012957441"
            className="bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800"
          >
            📞 Call Us
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">

          <a
            href="#home"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="#services"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>

          <a
            href="#student-corner"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Student Corner
          </a>

          <a
            href="#gallery"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>

          <a
            href="#reviews"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <a
            href="tel:+919012957441"
            className="block m-4 bg-blue-700 text-white text-center py-3 rounded-xl"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919012957441"
            target="_blank"
            className="block mx-4 mb-4 bg-green-500 text-white text-center py-3 rounded-xl"
          >
            📲 WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}