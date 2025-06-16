import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert("Your message has been submitted!"); // Show a confirmation message (optional)
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h1 className="text-2xl  font-extrabold sm:text-3xl">
            Get in Touch with PyJarvis IT Institute
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            We're here to assist you with all your queries and guide you toward
            a bright IT career.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-2 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Reach out to us for any information about our courses, admissions,
              or career counseling.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.72 11.06a11.09 11.09 0 01-.3 2.09c-.17.66-.57 1.34-1.13 1.93a16.09 16.09 0 01-7.6 4.63 5.07 5.07 0 01-2.4.29c-.67-.1-1.26-.35-1.74-.8a5.18 5.18 0 01-1.1-1.22 5.68 5.68 0 01-.86-2.2c-.05-.69.07-1.42.37-2.22a11.21 11.21 0 011.92-3.3c.7-.77 1.52-1.47 2.42-2.13"
                  />
                </svg>
                <span>9834714191</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h14a2 2 0 012 2v16l-7-3.5L3 21V5z"
                  />
                </svg>
                <span>info@pyjarvisit.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16c-1.33 0-4-1.33-4-4s2.67-4 4-4 4 1.33 4 4-2.67 4-4 4z"
                  />
                </svg>
                <span>1705, Datt Nagar, Solapur</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  required
                  className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  required
                  className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
