import React, { useState } from "react";
import logo from "../../assets/cover.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white shadow-md rounded-3xl">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo as a hyperlink */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="BookYourVehicle Logo"
            className="w-full h-12 rounded-full" 
          />
        </a>

        {/* Hamburger Button (Small Screens) */}
        <button
          className="md:hidden focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-yellow-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close Icon (X)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger Menu
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen
              ? "fixed top-0 right-0 h-full w-1/3 bg-slate-700 z-20 flex flex-col items-center justify-center space-y-6 transition-transform duration-300"
              : "hidden"
          } md:flex md:space-x-8 md:relative md:top-0 md:right-0 md:w-auto md:h-auto md:items-center`}
        >
          <ul className="text-center md:flex md:space-x-6">
            <li>
              <a
                href="#"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
