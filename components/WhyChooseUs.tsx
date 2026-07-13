import {
  BadgeCheck,
  Clock3,
  IndianRupee,
  MapPin,
  Printer,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "High Quality Printing",
    desc: "Sharp and professional quality prints for every document.",
  },
  {
    icon: Clock3,
    title: "Fast Service",
    desc: "Most printing orders are completed on the same day.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Price",
    desc: "Best quality printing at reasonable prices.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Service",
    desc: "Reliable printing shop trusted by students and offices.",
  },
  {
    icon: Users,
    title: "Friendly Support",
    desc: "We help customers choose the best printing solution.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Conveniently located at Budh Bazar, Moradabad.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24" id="why-us">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            Why Customers Trust Harsh Photo State
          </h2>

          <p className="mt-5 text-slate-600">
            Quality, speed and customer satisfaction are our top priorities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {item.desc}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}