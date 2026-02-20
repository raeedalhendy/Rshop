import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import catAroma from "../images/4.jpg";
import catSeasonal from "../images/9.jpg";
import catDecor from "../images/8.jpg";

export default function CandlesCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "aroma",
      title: "شموع عطرية",
      img: catAroma,
    },
    {
      id: "seasonal",
      title: "شموع موسمية",
      img: catSeasonal,
    },
    {
      id: "decor",
      title: "شموع ديكور",
      img: catDecor,
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20">

      {/* ------- عنوان القسم ------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-extrabold mb-3">التصنيفات</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          استكشف مجموعاتنا المختارة من الشموع الفاخرة، كل نوع يمنح منزلك طابعاً مختلفاً ولمسة خاصة.
        </p>
      </motion.div>

      {/* ------- البطاقات ------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            onClick={() => navigate(`/candles/category/${cat.id}`)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
          >
            <div className="relative w-full h-72 rounded-3xl overflow-hidden shadow-lg">

              {/* الصورة */}
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* التعتيم + العنوان */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
                  {cat.title}
                </h2>
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}