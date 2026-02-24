import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useWatchCart } from "../hooks/useWatchCart.jsx";
import logow from "../image/logow.png";

export default function WatchLayout() {
  const navigate = useNavigate();
const { cart } = useWatchCart();
  const [menuOpen, setMenuOpen] = useState(false);

  // منع السحب وقت فتح القائمة
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white relative">

      {/* NAVBAR */}
      <header className="w-full bg-[#111] border-b border-[#222] px-6 md:px-16 py-4 flex items-center justify-between">

        {/* LEFT — LOGO + LINKS */}
        <div className="flex items-center gap-10">
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Logo */}
          <div
            className="hidden md:flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/watches")}
          >
            <img src={logow} className="h-10" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <NavLink to="/watches" className="hover:text-yellow-500">
              الرئيسية
            </NavLink>
            <NavLink to="/watches/categories" className="hover:text-yellow-500">
              المجموعات
            </NavLink>
            <NavLink to="/watches/about" className="hover:text-yellow-500">
              نحن
            </NavLink>
            
          </nav>
        </div>

        {/* RIGHT — CART ONLY */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/watches/cart")}
            className="relative px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg flex items-center gap-2 font-semibold"
          >
            <FiShoppingBag />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-yellow-400 rounded-full text-xs px-2 py-1">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* 🌙 MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* 🌙 MOBILE SIDE MENU */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 w-64 h-full bg-[#111] z-50 p-6 shadow-xl md:hidden"
      >
        <div className="flex justify-between mb-8">
          <img src={logow} className="h-10" />
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg text-gray-300">
          <NavLink to="/watches" className="hover:text-yellow-500">
              الرئيسية
            </NavLink>
          <NavLink to="/watches/categories" onClick={() => setMenuOpen(false)}>
            المجموعات
          </NavLink>
          <NavLink to="/watches/about" onClick={() => setMenuOpen(false)}>
          نحن
          </NavLink>

          
        </nav>
      </motion.div>

      {/* OUTLET */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}