export default function Map() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Find Us
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Visit Our Shop
          </h2>

          <p className="mt-4 text-gray-600">
            Manpur Gali No. 1, Budh Bazar, Moradabad
          </p>

        </div>

        <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d520.4928362674589!2d78.77386179240708!3d28.83492897534458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb780b42d757%3A0x8005834ce1e43377!2sHarsh%20Photo%20State!5e1!3m2!1sen!2sin!4v1783838527894!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

      </div>
    </section>
  );
}