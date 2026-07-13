import {
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_25px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href="tel:+919012957441"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-blue-700 px-2 py-3 text-xs font-bold text-white"
        >
          <Phone size={20} />
          Call
        </a>

        <a
          href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20karwani%20hai."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-green-600 px-2 py-3 text-xs font-bold text-white"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        <a
          href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-orange-500 px-2 py-3 text-xs font-bold text-white"
        >
          <MapPin size={20} />
          Directions
        </a>
      </div>
    </div>
  );
}