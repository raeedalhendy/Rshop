import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "../images/p1.jpg"; // ضع صورة الغلاف هنا

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full mt-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* ----------- LEFT CONTENT ----------- */}
        <motion.div
          className="space-y-6 text-right"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* الشارة الصغيرة */}
          <span className="bg-yellow-200 text-yellow-700 font-semibold px-4 py-1 rounded-full text-sm">
            CandlesGlow
          </span>

          {/* العنوان الكبير */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            أضيئــي  
            <span className="text-yellow-500"> لحظاتك </span>
            الفريدة
          </h1>

          {/* الوصف */}
          <p className="text-gray-600 text-lg max-w-md ml-auto">
            شموع فاخرة مصبوبة يدويًا باستخدام شمع الصويا الطبيعي والزيوت النباتية
            لضمان وهجٍ ناعم ورائحة تدوم طويلًا.
          </p>

          {/* الأزرار */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={() => navigate("/candles/categories")}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 transition text-white rounded-xl font-semibold shadow-md"
            >
              تسوق المجموعات
            </button>

            
          </div>

        </motion.div>

        {/* ----------- RIGHT IMAGE ----------- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={heroImg}
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* الـ Badge الصغيرة على الصورة */}
          <div className="absolute bottom-6 right-6 bg-white shadow-xl px-4 py-2 rounded-xl text-sm">
            <span className="text-yellow-500 font-bold">الأكثر مبيعًا</span>
            <p className="text-gray-500">“شمعة الياسمين تملأ المكان برائحة مذهلة”</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;