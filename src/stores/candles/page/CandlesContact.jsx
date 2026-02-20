import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import igCover from "../images/insta.png"; // 🔥 ضع غلاف الإنستا هنا

export default function CandlesContact() {
  return (
    <section className="w-full py-20 px-6 md:px-20">

      {/* ------- عنوان الصفحة ------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold mb-3">تواصل معنا</h1>
        <p className="text-gray-600 text-lg">
          يسعدنا أن نسمع منك! يمكنك التواصل معنا عبر واتساب أو متابعتنا على إنستغرام.
        </p>
      </motion.div>

      {/* ------- غلاف الإنستغرام ------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto mb-12"
      >
        <img
          src={igCover}
          alt="Instagram Cover"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ------- روابط التواصل ------- */}
      <div className="flex flex-col md:flex-row justify-center gap-10 text-center">

        {/* ---------- واتساب ---------- */}
        <motion.a
          href="https://wa.me/123456789" // ضع رقمك هنا
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
        >
          <FaWhatsapp className="text-2xl" />
          الدردشة عبر واتساب
        </motion.a>

        {/* ---------- إنستغرام ---------- */}
        <motion.a
          href="https://instagram.com/youraccount" // حط حسابك هنا
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
        >
          <FaInstagram className="text-2xl" />
          تابعنا على إنستغرام
        </motion.a>

      </div>

    </section>
  );
}