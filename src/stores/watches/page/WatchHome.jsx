import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import heroImgW from "../assets/hero.png";
import Wcat1 from "../assets/cat1.png";
import Wcat2 from "../assets/cat2.png";
import Wcat3 from "../assets/cat3.png";

export default function WatchHome() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0d0d0d] text-white w-full pb-20">

      {/* HERO */}
      <section className="relative w-full h-[650px] md:h-[750px]">

        <motion.img
          src={heroImgW}
          alt="Premium Watch"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/0"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 items-end text-right">
          <motion.span
            className="text-yellow-500 mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            منذ 1982
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            تشكيلة الساعات الفاخرة
          </motion.h1>

          <motion.p
            className="text-gray-300 max-w-xl mb-8 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            اختبر روعة الساعات الفاخرة المصنوعة بإتقان، مع تصاميم عالمية تجمع الدقة والجمال والهيبة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4"
          >
            <button
              onClick={() => navigate("/store/watches/categories")}
              className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-600 transition"
            >
              استعرض الفئات
            </button>
          </motion.div>
        </div>
      </section>

      {/* Luxury Experience */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          تجربة الرفاهية
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          لماذا يختار نخبة العملاء متجرنا للحصول على أجمل الساعات الكلاسيكية والعصرية ذات الجودة العالية؟
        </p>
      </section>

      {/* Categories */}
      <section className="mt-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Cat1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer group relative rounded-3xl overflow-hidden"
          onClick={() => navigate("/watches/category/classic")}
        >
          <img
            src={Wcat1}
            alt="Classic Series"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <h3 className="text-xl font-bold text-right">الساعات الكلاسيكية</h3>
          </div>
        </motion.div>

        {/* Cat2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer group relative rounded-3xl overflow-hidden"
          onClick={() => navigate("/watches/category/minimal")}
        >
          <img
            src={Wcat2}
            alt="Minimal"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <h3 className="text-xl font-bold">الساعات العصرية</h3>
          </div>
        </motion.div>

        {/* Cat3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer group relative rounded-3xl overflow-hidden"
          onClick={() => navigate("/watches/category/aviation")}
        >
          <img
            src={Wcat3}
            alt="Aviation"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <h3 className="text-xl font-bold">ساعات الطيران</h3>
          </div>
        </motion.div>

      </section>

    </div>
  );
}