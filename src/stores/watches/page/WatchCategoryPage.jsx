import React from "react";
import { useParams } from "react-router-dom";
import { watchProducts } from "../data/products";
import { motion } from "framer-motion";
import { useWatchCart } from "../hooks/useWatchCart.jsx";
import { toast } from "react-toastify";

export default function WatchCategoryPage() {
  const { id } = useParams();
const { addToCart } = useWatchCart();
  const filtered = watchProducts.filter((p) => p.category === id);

  if (filtered.length === 0)
    return <h1 className="text-white text-center py-20">لا يوجد منتجات حالياً</h1>;

  return (
    <div className="text-white bg-[#0b0b0b] py-20 px-6 md:px-20 text-right">
      <h1 className="text-3xl font-bold mb-10">منتجات القسم</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#111] rounded-2xl p-4 shadow-lg"
          >
            <img src={item.img} className="w-full h-64 object-cover rounded-xl" />

            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-yellow-400 text-lg font-bold">${item.price}</p>

            <button
              onClick={() => {
                addToCart(item);
                toast.success("تمت الإضافة إلى السلة");
              }}
              className="w-full bg-yellow-500 text-black py-2 rounded-xl mt-4 hover:bg-yellow-600"
            >
              أضف إلى السلة
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}