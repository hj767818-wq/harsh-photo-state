"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1000);

    const removeTimer = window.setTimeout(() => {
      setMounted(false);
    }, 1350);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 transition-all duration-300 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none scale-105 opacity-0"
      }`}
    >
      <div className="w-full max-w-lg px-6 text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white p-5 shadow-2xl sm:p-7">
          <Image
            src="/images/logo.png"
            alt="Harsh Photo State Logo"
            width={1154}
            height={407}
            priority
            className="mx-auto h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[loading_1s_ease-in-out_forwards] rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-300">
          Preparing your printing experience...
        </p>
      </div>

      <style jsx>{`
        @keyframes loading {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}