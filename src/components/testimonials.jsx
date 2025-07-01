import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "PyJarvis IT has transformed my career. The courses are in-depth, and the instructors are incredibly knowledgeable.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3cyE-AVTlfLvFuhsfhWlq3TaYQNeS-I7Yg&s", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "I loved the hands-on projects! They gave me the confidence to apply what I learned in real-world scenarios.",
      image: "https://m.media-amazon.com/images/M/MV5BNWJjYzFiZGEtZTI5Yi00ZDExLTk0MmEtZjM2ZjA0NzdhZGQ3XkEyXkFqcGc@._V1_.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Sam Wilson",
      feedback:
        "The community and support at PyJarvis IT are amazing. Highly recommend their programs to anyone.",
      image: "https://s2.r29static.com/bin/entry/307/x,80/2174240/image.jpg", // Replace with actual image URL
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          What Our Students Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              {/* Testimonial Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-blue-500 mb-4">{testimonial.role}</p>

              {/* Feedback */}
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
