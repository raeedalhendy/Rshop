import React from "react";
import { motion } from "framer-motion";
import { useWatchCart } from "../hooks/useWatchCart.jsx";

export default function WatchCart() {
const { cart, increaseQty, decreaseQty, removeFromCart } = useWatchCart();
  const subtotal = cart.reduce((s, p) => s + p.price * p.quantity, 0);

  const message = cart
    .map((p) => `${p.title} × ${p.quantity} = $${p.price * p.quantity}`)
    .join("%0A");

  const whatsappURL = `https://wa.me/963900000000?text=طلب جديد:%0A${message}%0Aالمجموع: $${subtotal}`;

  return (
    <div className="text-white bg-[#0b0b0b] py-20 px-6 md:px-20">

      <h1 className="text-3xl font-bold mb-10 text-right">سلة المشتريات</h1>

      {cart.length === 0 ? (
        <p className="text-center">السلة فارغة</p>
      ) : (
        <>
          <div className="space-y-6 mb-10">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#111] rounded-xl p-4 flex items-center gap-4"
              >
                <img src={item.img} className="w-24 h-24 rounded-xl" />

                <div className="flex-1 text-right">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-yellow-400">${item.price * item.quantity}</p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-sm"
                  >
                    حذف
                  </button>
                </div>

                <div className="flex bg-[#222] rounded-xl px-3 py-1">
                  <button onClick={() => decreaseQty(item.id)}>–</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href={whatsappURL}
            target="_blank"
            className="block w-full bg-green-600 text-white py-3 rounded-xl text-center text-lg"
          >
            تأكيد الطلب عبر واتساب
          </a>
        </>
      )}
    </div>
  );
}