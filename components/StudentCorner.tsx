import { GraduationCap, MessageCircle } from "lucide-react";

const courses = [
  "BA",
  "B.Com",
  "B.Sc",
  "BCA",
  "LLB",
  "MBA",
  "Nursing",
  "Diploma",
];

export default function StudentCorner() {
  return (
    <section id="student-corner" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Students
          </p>

          <h2 className="mt-3 text-4xl font-black text-blue-700 sm:text-5xl">
            Student Corner
          </h2>

          <p className="mt-4 text-gray-600">
            Project Printing • Assignment • Thesis • Spiral Binding
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {courses.map((course, index) => (
            <a
              key={course}
              href={`https://wa.me/919012957441?text=Hello%20Harsh%20Photo%20State%2C%20mujhe%20${encodeURIComponent(
                course
              )}%20project%20printing%20karwani%20hai.`}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className="group rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-orange-400 group-hover:text-white">
                <GraduationCap size={30} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-white">
                {course}
              </h3>

              <p className="mt-2 text-sm text-slate-600 transition group-hover:text-blue-100">
                All Semester Projects
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-orange-300">
                <MessageCircle size={17} />
                Order on WhatsApp
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}