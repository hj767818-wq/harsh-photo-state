"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 500);
    };

    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      aria-label="Scroll to top"
      className={`fixed right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 ${
        visible
          ? "pointer-events-auto bottom-24 scale-100 opacity-100 lg:bottom-8"
          : "pointer-events-none bottom-20 scale-75 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}