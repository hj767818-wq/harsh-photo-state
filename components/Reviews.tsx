"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aman Sharma",
    review:
      "Very fast printing service. Project printing aur spiral binding bahut achi quality ki thi.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Verma",
    review:
      "Colour print quality amazing thi. Staff bhi bahut polite tha.",
    date: "1 month ago",
  },
  {
    name: "Rohit Kumar",
    review:
      "PVC Card same day bana diya. Highly recommended.",
    date: "3 weeks ago",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="uppercase tracking-[4px] text-orange-500 font-bold">
            Google Reviews
          </p>

          <h2 className="text-4xl font-black mt-3 text-blue-700">
            What Customers Say
          </h2>

          <div className="flex justify-center items-center gap-1 mt-5">
            {[1,2,3,4,5].map((i)=>(
              <Star
                key={i}
                className="text-yellow-500 fill-yellow-500"
                size={24}
              />
            ))}
          </div>

          <p className="mt-2 text-xl font-bold">
            4.9 / 5 Rating
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((item,index)=>(

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index*100}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
            >

              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>

                </div>

              </div>

              <div className="flex mt-5 mb-4">
                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                {item.review}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}