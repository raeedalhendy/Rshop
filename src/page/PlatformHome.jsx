import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { stores } from "../data/storesData"; // <-- استدعاء المتاجر

export default function PlatformHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans">

      {/* TOP SPACER */}
      <div className="h-20"></div>

      {/* LABEL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center"
      >
        <span className="px-4 py-1 text-xs rounded-full bg-yellow-600/20 border border-yellow-500 tracking-widest">
          فخامة مختارة بعناية
        </span>
      </motion.div>

      {/* HERO TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mt-6 text-4xl md:text-5xl font-bold text-yellow-500"
      >
       R-Shop مرحباً بك في 
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-center text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed"
      >
        اختر المتجر الذي ترغب باستكشافه. حيث الفخامة، الحرفية الدقيقة،
        وتجربة تسوق تُصنع خصيصاً لذوقك الرفيع.
      </motion.p>

      {/* STORES GRID */}
      <div className="mt-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {stores.map((store, index) => (
          <motion.div
            key={store.id}
            whileHover={{ scale: 1.015 }}
            className="bg-[#111] rounded-3xl overflow-hidden border border-yellow-500/10 hover:border-yellow-500/30 transition cursor-pointer"
            onClick={() => navigate(`/${store.id}`)}
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={store.image}
                className="w-full h-80 object-cover"
              />

              
            </div>

            {/* CONTENT */}
            <div className="p-6 text-right">
              <h3 className="text-2xl font-bold">{store.title}</h3>

              <p className="text-gray-400 text-sm mt-2">
                {store.description}
              </p>

              <div className="flex justify-between items-center mt-6">

                <button className="text-yellow-500 hover:underline">
                  تسوق الآن →
                </button>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* EXPERIENCE SECTION */}
      <div className="mt-24 bg-[#141414] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">تجربة فاخرة</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          انضم إلى قائمتنا الذهبية للحصول على عروض حصرية ودعوات خاصة لمجموعات جديدة.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          
          <a href="https://wa.me/963988141718" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold">
            انضم الآن
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-10 text-gray-400 text-sm border-t border-gray-800 mt-10">

        <div className="flex flex-col md:flex-row justify-between mb-6 gap-6">
          <div>
            <h3 className="text-yellow-500 font-semibold">واتساب</h3>
            <a href="https://wa.me/963988141718" className="hover:text-yellow-500">
              +963 988 141 718
            </a>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold">إنستغرام</h3>
            <a href="https://instagram.com/raeed.alhendy" className="hover:text-yellow-500">
              @raeed.alhendy
            </a>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold">بريد الدعم</h3>
            <a href="raeed.alhendy4@gmail.com" className="hover:text-yellow-500">
              raeed.alhendy4@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center text-xs">
          © 2026 R-Shop. جميع الحقوق محفوظة.
          <br />
          <div className="flex justify-center gap-6 mt-2">
            <a className="hover:text-yellow-500">تواصل معنا</a>
          </div>
        </div>
      </footer>

    </div>
  );
}