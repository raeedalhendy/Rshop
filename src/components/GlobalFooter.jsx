import React from "react";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const GlobalFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">

      <div className="flex flex-col items-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-pink-400 transition">
            <FiInstagram />
          </a>
          <a href="mailto:info@lumina.com" className="hover:text-blue-400 transition">
            <FiMail />
          </a>
          <a href="tel:+0000000" className="hover:text-green-400 transition">
            <FiPhone />
          </a>
        </div>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gray-700 rounded-full"></div>

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} جميع الحقوق محفوظة – منصة لوميـنا للمتاجر المتخصصة
        </p>
      </div>

    </footer>
  );
};

export default GlobalFooter;