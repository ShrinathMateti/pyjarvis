

const features = [
  {
    id: 1,
    icon: "bi-lightbulb",
    title: "Innovative Approach",
    description:
      "As a new institute, we bring fresh, innovative teaching methods tailored to modern educational needs.",
  },
  {
    id: 2,
    icon: "bi-person-check",
    title: "Personalized Learning",
    description:
      "Small class sizes and personalized mentorship ensure every student gets individual attention and support.",
  },
  {
    id: 3,
    icon: "bi-gear",
    title: "Future-Ready Skills",
    description:
      "Our curriculum is designed with a focus on industry trends to equip you with skills for tomorrow's job market.",
  },
  {
    id: 4,
    icon: "bi-heart",
    title: "Commitment to Growth",
    description:
      "We are dedicated to nurturing talent and helping students achieve their goals from day one.",
  },
];

const Card = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 sm:text-2xl">
          Why Choose PyJarvis IT Institute?
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          At PyJarvis Institute, we are reimagining education to empower the
          next generation of leaders and innovators. Here’s why we stand out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className={`bi ${feature.icon}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
