import student1 from "/src/assets/Agarwal.jpeg";
import student2 from "/src/assets/Sherla.jpeg";
import student3 from "/src/assets/Manisha.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mohit Agarwal",
      feedback:
        "PyJarvis is a fantastic institute for learning python. The course content is explained in a very simple and easy-to-understand way, making it perfect for beginners. It helps build strong python basics step by step with clear guidance",
      image: student1,
    },
    {
      id: 2,
      name: "Bhargavi Sherla",
      feedback:
        "I began this course with zero knowledge of python, but thanks to sir’s excellent teaching. From basics to advanced topics, his guidance made learning enjoyable and effective.Pyjarvis Institute is best for beginners",
      image: student2,
    },
    {
      id: 3,
      name: "Manisha Varma",
      feedback:
      "I had an excellent experience learning Python at PyJarvis Institute, where instructor explained concepts clearly with examples. Their hands-on teaching boosted my confidence and built a solid programming foundation",
      image:student3,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Students Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              {/* Testimonial Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>

              {/* Feedback */}
              <p className="text-gray-600 italic mt-3">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
