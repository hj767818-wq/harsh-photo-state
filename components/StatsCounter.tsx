"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  MapPin,
  MessageCircle,
  Printer,
} from "lucide-react";

type CounterProps = {
  target: number;
  suffix?: string;
};

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.floor(current));
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Printer,
    value: <Counter target={8} suffix="+" />,
    title: "Printing Services",
    description: "Printing, binding, PVC, lamination and more",
  },
  {
    icon: Clock3,
    value: "Same Day",
    title: "Fast Service",
    description: "Most regular orders completed quickly",
  },
  {
    icon: MessageCircle,
    value: "1 Click",
    title: "WhatsApp Order",
    description: "Send requirements directly on WhatsApp",
  },
  {
    icon: MapPin,
    value: "Budh Bazar",
    title: "Moradabad Location",
    description: "Easy-to-reach local printing shop",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative z-10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className={`group p-7 text-center transition duration-300 hover:bg-blue-50 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                  <Icon size={27} />
                </div>

                <p className="mt-5 text-2xl font-black text-blue-700">
                  {stat.value}
                </p>

                <h3 className="mt-2 font-black text-slate-900">
                  {stat.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}