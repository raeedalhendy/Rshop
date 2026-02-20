import React from "react";
import { useParams } from "react-router-dom";
import { categories, products } from "../data/productsData";
import { useCart } from "../hooks/useCart.jsx";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function CandlesCategoryPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const category = categories.find((c) => c.id === id);
  const filteredProducts = products.filter((p) => p.category === id);

  if (!category) return <h1 className="text-center py-20">الفئة غير موجودة</h1>;

  return (
    <div className="w-full py-16 px-6 md:px-16">

      {/* Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">{category.title}</h1>
        <p className="text-gray-600 text-sm max-w-xl">
          استعرض مجموعتنا المختارة من الشموع المصنوعة يدوياً بروائح فريدة ولمسة فاخرة.
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex gap-4 mb-10 justify-end">
        <button className="px-4 py-2 border rounded-xl text-sm hover:bg-gray-100">
          الفرز حسب: الأحدث
        </button>
        <button className="px-4 py-2 border rounded-xl text-sm hover:bg-gray-100">
          الفلاتر
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProducts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              {item.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <h3 className="font-bold text-lg">{item.title}</h3>

            {item.scent && (
              <p className="text-gray-500 text-sm mb-1">{item.scent}</p>
            )}

            <p className="text-yellow-600 font-bold text-lg mb-4">
              ${item.price}
            </p>

            {/* Add to Cart */}
            <button
              onClick={() => {
                addToCart(item);
                toast.success(`${item.title} تمت إضافتها للسلة!`);
              }}
              className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition font-semibold shadow-sm"
            >
              أضف إلى السلة
            </button>
          </motion.div>
        ))}

      </div>

    </div>
  );
}