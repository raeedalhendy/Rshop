import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const GlobalHeader = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-16 py-4 flex justify-between items-center">

      {/* Logo or Brand Name */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        Lumina Stores
      </Link>

      {/* Home Icon */}
      <Link 
        to="/" 
        className="text-gray-700 hover:text-blue-600 transition"
        title="العودة للرئيسية"
      >
        <FiHome className="w-6 h-6" />
      </Link>

    </header>
  );
};

export default GlobalHeader;