import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/productsData";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1 className="text-center py-20">المنتج غير موجود</h1>;

  return (
    <div className="w-full py-16 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row gap-10 justify-center">

        <img
          src={product.img}
          alt={product.title}
          className="w-96 h-96 object-cover rounded-3xl shadow-md"
        />

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

          {product.scent && (
            <p className="text-gray-600 mb-4">{product.scent}</p>
          )}

          <p className="text-blue-600 font-bold text-2xl mb-6">
            ${product.price}
          </p>

          <a
            href={`https://wa.me/963900000000?text=مرحباً، أريد ${product.title}`}
            className="bg-green-600 text-white px-6 py-3 rounded-xl inline-block hover:bg-green-700 transition"
          >
            اطلب عبر واتساب
          </a>
        </div>

      </div>
    </div>
  );
}