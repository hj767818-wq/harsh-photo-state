import { Gift } from "lucide-react";

export default function OfferButton() {
  return (
    <a
      href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20aaj%20ka%20printing%20offer%20batayiye."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-6 z-40 hidden items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 font-bold text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-orange-500/30 lg:inline-flex"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
        <Gift size={22} />
      </span>

      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-orange-100">
          Special Deal
        </span>

        <span className="block">Today&apos;s Offer</span>
      </span>
    </a>
  );
}