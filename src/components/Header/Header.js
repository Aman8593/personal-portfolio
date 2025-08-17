import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Adjust the import path as needed

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 font-mono bg-slate-200 dark:bg-slate-900">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Aman Wadgaonkar
        </div>
      </div>

      <div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/mywork"
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
