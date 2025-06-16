import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About PyJarvis IT</h3>
            <p className="text-gray-400">
              PyJarvis IT is a leading institute offering cutting-edge programs
              in technology, coding, and software development. Our mission is to
              shape the future of tech innovators.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <i className="bi bi-geo-alt mr-2"></i> 1705, Datt Nagar, Solapur
            </p>
            <p className="text-gray-400">
              <i className="bi bi-telephone mr-2"></i> 9834714191
            </p>
            <p className="text-gray-400">
              <i className="bi bi-envelope mr-2"></i> info@pyjarvisit.com
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <i className="bi bi-twitter-x text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <i className="bi bi-whatsapp text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PyJarvis IT Institute. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
