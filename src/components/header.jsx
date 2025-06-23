import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold flex items-center gap-2">
          <i className="bi bi-terminal-fill text-blue-500 text-2xl"></i>
          <span className="tracking-wide">PyJarvis IT Institute</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Nav Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-slate-900 md:bg-transparent md:static md:flex md:items-center md:space-x-8 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto md:space-x-6 py-4 md:py-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-blue-700"
                      : "hover:bg-blue-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 md:mt-0">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-200 md:ml-4 text-center"
              >
                Start Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
