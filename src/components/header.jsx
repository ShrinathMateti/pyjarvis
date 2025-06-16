import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">
            {" "}
            <i className="bi bi-terminal-fill"></i> PyJarvis IT Institute
          </Link>
        </div>

        {/* Hamburger Menu (for small screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-6`}
        >
          <Link to="/" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="block px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className={`${isOpen ? "block" : "hidden"} mt-2 md:mt-0 md:block`}>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Start Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
