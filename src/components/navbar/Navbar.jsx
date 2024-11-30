import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-600 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <a href="#" className="text-lg font-bold text-green-200">
        BookYourVehicle
      </a>

      {/* Hamburger button for small screen */}
      <button
        className="block md:hidden text-yellow-200 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
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
                ? "M6 18L18 6M6 6l12 12" // Close icon (X)
                : "M4 6h16M4 12h16M4 18h16" // Hamburger menu
            }
          />
        </svg>
      </button>

      {/* Navigations Link */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4 md:justify-between md:items-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-2 md:mt-0">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}; 

export default Navbar;
