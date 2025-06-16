import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <main className="container mx-auto">
        <section className="bg-white p-10 shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              About PyJarvis
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              PyJarvis is a platform dedicated to empowering developers with
              top-notch Python resources, tools, and tutorials. Whether you're a
              beginner or an expert, PyJarvis has something for you.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to simplify Python learning and development
                through high-quality tutorials, innovative tools, and real-world
                projects that push boundaries.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                PyJarvis aims to be the go-to platform for Python enthusiasts
                worldwide, fostering a community of innovative thinkers and
                developers.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white p-10  shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-blue-500 text-5xl mb-4">📘</div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Comprehensive Tutorials
                </h4>
                <p className="text-gray-600 mt-2">
                  Step-by-step guides to master Python and its ecosystem.
                </p>
              </div>
              <div className="text-center">
                <div className="text-green-500 text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Project-Based Learning
                </h4>
                <p className="text-gray-600 mt-2">
                  Hands-on projects to strengthen your skills.
                </p>
              </div>
              <div className="text-center">
                <div className="text-purple-500 text-5xl mb-4">🌐</div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Community Support
                </h4>
                <p className="text-gray-600 mt-2">
                  Connect with like-minded Python enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white text-gray-900 py-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Join the PyJarvis Community
          </h3>
          <p className="text-gray-900 mb-6">
            Be a part of a thriving community of Python developers and take your
            skills to the next level.
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </section>
      </main>
    </div>
  );
}
