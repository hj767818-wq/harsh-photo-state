import {
  CheckCircle2,
  MessageCircle,
  Printer,
  ShoppingBag,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Send Your File",
    description:
      "PDF, photo ya document WhatsApp par bhejiye aur printing details bataiye.",
  },
  {
    number: "02",
    icon: Printer,
    title: "We Prepare Your Order",
    description:
      "Hum printing, binding, lamination ya PVC card work ready karenge.",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Collect from Shop",
    description:
      "Order ready hone ke baad shop se collect kijiye aur payment kijiye.",
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-white py-24" id="how-to-order">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Simple Process
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            How to Order
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Sirf 3 simple steps me apna printing order ready karwaiye.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
                  <Icon size={30} />
                </div>

                <div className="mx-auto mt-5 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-600">
                  Step {step.number}
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                <CheckCircle2
                  size={22}
                  className="mx-auto mt-6 text-green-600"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20printing%20order%20karna%20hai."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            <MessageCircle size={21} />
            Start Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}