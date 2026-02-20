import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// الصور
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";

const SeasonalSection = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Citrus Bloom", price: "$22.00", scent: "Fresh & Energizing Zest", img: p1 },
    { id: 2, name: "Vanilla Woods", price: "$28.00", scent: "Warm & Earthy Aroma", img: p3, badge: "الأكثر مبيعاً" },
    { id: 3, name: "Lavender Fields", price: "$24.00", scent: "Calming & Soothing Essence", img: p4 },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <button
          onClick={() => navigate("/candles/categories")}
          className="text-yellow-600 text-sm mb-2 flex items-center gap-1 hover:underline"
        >
          <span>→</span> عرض الكل
        </button>

        <h2 className="text-3xl font-bold">المفضلة</h2>
        <p className="text-gray-500 text-sm mt-1">روائح مختارة بعناية لخلق أجواء مثالية.</p>

        <div className="w-24 h-1 bg-yellow-600 rounded-full mt-4"></div>
      </motion.div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => navigate(`/candles/product/${item.id}`)}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition shadow-gray-200 cursor-pointer p-5"
          >
            {/* Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-5">
              {item.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <span className="text-yellow-600 font-semibold">{item.price}</span>
              <h3 className="font-bold text-lg mt-1">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.scent}</p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default SeasonalSection;