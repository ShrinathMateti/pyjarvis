import { useNavigate } from "react-router-dom";
import python from "/src/assets/pythonmastery.jpg";
import web from "/src/assets/webmastery.jpg";
import reactCourse from "/src/assets/reactmastery.png";

const courses = [
  {
    title: "Python Mastery",
    description:
      "Learn Python from basics to advanced, including data analysis and automation.",
    image: { python },
  },
  {
    title: "Web Development Mastery with Django",
    description:
      "Build robust web applications with Python and Django framework.",
    image: { web },
  },
  {
    title: "React Mastery (Coming Soon)",
    description:
      "Master front-end development with React, hooks, and advanced components.",
    image: { reactCourse },
  },
];

export default function Courses() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-white text-gray-900 py-8 text-center">
        <h1 className="text-3xl font-bold">Your Gateway to Expertise</h1>
        <p className="mt-3 text-lg">
          Advance your career with expert-led courses designed to upskill you in
          tech.
        </p>
      </header>

      {/* Courses Section */}
      <section className="py-2 px-6 lg:px-20 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-4">{course.description}</p>
                <button
                  onClick={handleClick}
                  className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Ready to Upskill Yourself?
        </h2>
        <p className="text-gray-600 mt-4">
          Join thousands of learners worldwide in mastering in-demand skills.
        </p>
        <button
          onClick={handleClick}
          className="mt-8 bg-blue-600 text-white px-8 py-2 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
}
