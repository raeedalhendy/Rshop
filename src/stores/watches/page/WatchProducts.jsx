import React from "react";
import { motion } from "framer-motion";
import { watchProducts } from "../data/products";
import { useCart } from "../../candles/hooks/useCart.jsx";
import { toast } from "react-toastify";

export default function WatchProducts() {
  const { addToCart } = useCart();

  return (
    <div className="text-white bg-[#0b0b0b] py-20 px-6 md:px-20 text-right">

      <h1 className="text-3xl font-bold mb-10">جميع الساعات</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {watchProducts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-xl"
            />

            <h3 className="text-xl font-bold mt-4">{item.title}</h3>

            <p className="text-yellow-400 text-lg font-semibold">
              ${item.price}
            </p>

            <button
              onClick={() => {
                addToCart(item);
                toast.success("تمت الإضافة إلى السلة");
              }}
              className="w-full bg-yellow-500 text-black py-2 rounded-xl mt-4 hover:bg-yellow-600 transition"
            >
              أضف إلى السلة
            </button>
          </motion.div>
        ))}

      </div>
    </div>
  );
}