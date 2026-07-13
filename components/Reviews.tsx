import {
  MessageCircle,
  Star,
} from "lucide-react";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-white to-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Customer Feedback
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            Share Your Experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Harsh Photo State se service lene ke baad apna genuine review
            Google Maps par share kijiye.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12"
          data-aos="zoom-in"
        >
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                size={27}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h3 className="mt-6 text-2xl font-black text-slate-900">
            Customer Reviews Coming Soon
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Real customer reviews milne ke baad unhe yahan website par show
            kiya jayega.
          </p>

          <a
            href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
          >
            <MessageCircle size={20} />
            View or Add Google Review
          </a>
        </div>
      </div>
    </section>
  );
}