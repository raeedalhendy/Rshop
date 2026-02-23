import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../hooks/useCart.jsx";
import logo from "../images/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();

  // ✨ منع السكرول عند فتح المينو
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  // ✨ إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }
    if (openMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-10 lg:px-20 py-4">

      <div className="flex items-center justify-between">

        {/* ------------ RIGHT SIDE: CART + SEARCH ------------ */}
        <div className="hidden md:flex gap-4 w-1/2 justify-start">

          {/* Cart */}
          <div
            className="relative bg-gray-100 p-3 rounded-3xl cursor-pointer hover:bg-gray-200 transition"
            onClick={() => navigate("/candles/cart")}
          >
            <FiShoppingCart className="w-6 h-6 text-gray-700" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          
        </div>

        {/* ------------ LEFT SIDE: NAVIGATION ------------ */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700 items-center">

          <NavLink
            to="/candles"
            end
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-semibold" : "hover:text-yellow-600"
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/candles/categories"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-semibold" : "hover:text-yellow-600"
            }
          >
            التصنيفات
          </NavLink>

          <NavLink
            to="/candles/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-semibold" : "hover:text-yellow-600"
            }
          >
            تواصل معنا
          </NavLink>

          <img className="h-10 rounded-lg" src={logo} />
        </nav>

        {/* ------------ MOBILE MENU ICON ------------ */}
        <div className="md:hidden flex justify-between items-center w-full">
          <button
          className=" text-3xl"
          onClick={() => setOpenMenu(true)}
        >
          <FiMenu />
        </button>
          <img src={logo} className="h-14" />
        </div>

      </div>

      {/* ------------ BACKDROP BLUR (يغطي الشاشة) ------------ */}
      {openMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden h-[100vh]"
        />
      )}

      {/* ------------ MOBILE SIDEBAR MENU ------------ */}
      {openMenu && (
        <motion.div
          ref={menuRef}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 right-0 w-72 h-72 bg-white shadow-xl p-6 z-50 md:hidden rounded-l-3xl text-right"
        >
          <div className="flex justify-between mb-6">
            <button onClick={() => setOpenMenu(false)}>
              <FiX className="text-2xl" />
            </button>
          </div>
          

          <nav className="flex flex-col gap-6 text-lg text-gray-800">

            <NavLink
              to="/candles"
              onClick={() => setOpenMenu(false)}
              className="hover:text-yellow-600"
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/candles/categories"
              onClick={() => setOpenMenu(false)}
              className="hover:text-yellow-600"
            >
              التصنيفات
            </NavLink>

            <NavLink
              to="/candles/contact"
              onClick={() => setOpenMenu(false)}
              className="hover:text-yellow-600"
            >
              تواصل معنا
            </NavLink>
            <div
            className="relative bg-gray-100 p-3 rounded-3xl cursor-pointer hover:bg-gray-200 transition w-13"
            onClick={() => navigate("/candles/cart")}
          >
            <FiShoppingCart className="w-6 h-6 text-gray-700" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;