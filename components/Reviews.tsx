const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "Fast printing service and very good print quality. Project time par ready mil gaya.",
  },
  {
    name: "Aman Jain",
    review:
      "Affordable price aur staff ka behaviour bhi bahut accha hai. Recommended for students.",
  },
  {
    name: "Mohit Kumar",
    review:
      "Photocopy, colour print aur binding sab ek hi jagah mil jata hai. Service kaafi quick hai.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-500">
            Customer Feedback
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Fast service, quality printing aur affordable prices ke liye
            customers Harsh Photo State par bharosa karte hain.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-xl tracking-wider text-orange-500">
                ★★★★★
              </div>

              <p className="mt-5 leading-8 text-slate-700">
                “{review.review}”
              </p>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Harsh Photo State Customer
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}