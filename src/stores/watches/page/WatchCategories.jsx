import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";

export default function WatchCategories() {
  const navigate = useNavigate();

  const categories = [
    { id: "classic", title: "الساعات الكلاسيكية", img: cat1 },
    { id: "minimal", title: "الساعات العصرية", img: cat2 },
    { id: "aviation", title: "ساعات الطيران", img: cat3 },
  ];

  return (
    <div className="text-white bg-[#0b0b0b] py-20 px-6 md:px-20 text-right">
      <h1 className="text-3xl font-bold mb-10">الأقسام</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="cursor-pointer group relative rounded-3xl overflow-hidden"
            onClick={() => navigate(`/watches/category/${cat.id}`)}
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}