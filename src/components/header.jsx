import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">
            <i className="bi bi-terminal-fill mr-2"></i>PyJarvis IT Institute
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>

        {/* Nav Links & CTA */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-slate-900 md:bg-transparent px-6 py-4 md:p-0 z-40`}
        >
          <div className="flex flex-col md:flex-row md:items-center w-full space-y-3 md:space-y-0 md:space-x-6">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all md:ml-4"
              onClick={() => setIsOpen(false)}
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
