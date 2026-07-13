"use client";

import { Printer } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 900);

    const removeTimer = window.setTimeout(() => {
      setMounted(false);
    }, 1250);

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 transition-all duration-300 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none scale-105 opacity-0"
      }`}
    >
      <div className="px-6 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-[2rem] bg-blue-500/25" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-2xl shadow-blue-500/30">
            <Printer size={40} strokeWidth={2.2} />
          </div>
        </div>

        <h2 className="mt-7 text-2xl font-black tracking-tight text-white sm:text-3xl">
          HARSH <span className="text-orange-500">PHOTO STATE</span>
        </h2>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Print • Copy • Create
        </p>

        <div className="mx-auto mt-7 h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[loading_0.9s_ease-in-out_forwards] rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
        </div>

        <p className="mt-4 text-sm text-slate-400">
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