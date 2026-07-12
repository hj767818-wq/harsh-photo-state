export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-700">
          About Harsh Photo State
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Harsh Photo State is your trusted printing shop located at
          <strong> Manpur Gali No. 1, Budh Bazar, Moradabad.</strong>
        </p>

        <p className="mt-4 text-gray-600">
          We provide Black & White Printing, Colour Printing, Photocopy,
          Lamination, Spiral Binding, PVC Card Printing, Project Printing,
          Thesis Printing and many more printing solutions with fast service
          and affordable prices.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-700">
              🖨️ Quality Printing
            </h3>
            <p className="mt-3 text-gray-600">
              High-quality black & white and colour printing.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-700">
              ⚡ Fast Service
            </h3>
            <p className="mt-3 text-gray-600">
              Quick printing, photocopy and binding without delay.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-700">
              😊 Customer Satisfaction
            </h3>
            <p className="mt-3 text-gray-600">
              Friendly service and affordable pricing for everyone.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}