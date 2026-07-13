import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Printer,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white bg-white/90 p-8 text-center shadow-2xl backdrop-blur sm:p-12">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-700 to-blue-950 text-white shadow-xl">
          <Printer size={44} />
        </div>

        <p className="mt-8 text-7xl font-black text-blue-700">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-600">
          Jo page aap open karna chahte hain, woh available nahi hai. Home page
          par wapas jaakar printing services check kijiye.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <a
            href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20help%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-orange-400"
          >
            <ArrowLeft size={20} />
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}