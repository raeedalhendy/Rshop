import React from "react";
import { useCart } from "../hooks/useCart.jsx";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const subtotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const whatsappMsg = cart
    .map((p) => `${p.title} × ${p.quantity} = $${p.price * p.quantity}`)
    .join("\n");

  const whatsappURL = `https://wa.me/963900000000?text=مرحباً، أريد الطلب التالي:\n\n${whatsappMsg}\n\nالمجموع: $${subtotal}`;

  return (
    <div className="w-full py-16 px-6 md:px-20 flex flex-col lg:flex-row gap-12">

      {/* ---------------- LEFT SIDE — PRODUCT LIST ---------------- */}
      <div className="flex-1">

        <h1 className="text-3xl font-bold mb-6">سلة المشتريات</h1>
        <p className="text-gray-500 mb-8">راجع المنتجات قبل متابعة الطلب عبر واتساب.</p>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            السلة فارغة حالياً
          </div>
        ) : (
          <div className="space-y-6">

            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4"
              >
                {/* image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                {/* info */}
                <div className="flex-1 text-right">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.scent || ""}</p>

                  {/* remove link */}
                  <button
                    className="text-red-500 text-sm mt-1 hover:underline"
                    onClick={() => {
                      removeFromCart(item.id);
                      toast.error("تم حذف المنتج من السلة");
                    }}
                  >
                    حذف المنتج
                  </button>
                </div>

                {/* price */}
                <div className="font-bold text-gray-700 text-lg">
                  ${item.price * item.quantity}
                </div>

                {/* quantity buttons */}
                <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-xl px-2 hover:text-blue-600"
                  >
                    -
                  </button>

                  <span className="px-3">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="text-xl px-2 hover:text-blue-600"
                  >
                    +
                  </button>
                </div>

              </motion.div>
            ))}

          </div>
        )}
      </div>

      {/* ---------------- RIGHT SIDE — ORDER SUMMARY ---------------- */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full lg:w-80 bg-white shadow-lg rounded-3xl p-6 h-fit"
        >
          <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-600">المجموع</span>
            <span className="font-bold">${subtotal}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between mb-4 text-lg font-bold text-yellow-600">
            <span>الإجمالي</span>
            <span>${subtotal}</span>
          </div>

          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold"
          >
            تأكيد الطلب عبر واتساب
          </a>

        </motion.div>
      )}

    </div>
  );
}