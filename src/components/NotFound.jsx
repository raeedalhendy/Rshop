import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        className="text-6xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        404
      </motion.h1>

      <p className="text-gray-600 text-lg mb-8">
        الصفحة التي تبحث عنها غير موجودة.
      </p>

      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        العودة للرئيسية
      </Link>

    </div>
  );
};

export default NotFound;