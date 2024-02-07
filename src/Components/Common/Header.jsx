import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">JobHunt</div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/">
            {" "}
            <button className="text-white hover:text-gray-300">Register</button>
          </Link>
          <Link to="/login">
            <button className="text-white hover:text-gray-300">Login</button>
          </Link>
          <Link to="/adminlogin">
            <button className="text-white hover:text-gray-300 bg-purple-600 p-2 rounded-md">Admin Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
