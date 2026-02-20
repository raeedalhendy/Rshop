import React from "react";
import { FiInstagram, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0f1c] text-gray-300 pt-16 pb-10 px-6 md:px-20 mt-20">

      {/* ------- المحتوى العلوي ------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-right">

        {/* ---- القسم الأول ---- */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">كاندلز ستور</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            نضيء أجواءك منذ عام 2018.  
            كل شمعة هي وعد بالجودة والتميز والرائحة الفاخرة.
          </p>

          {/* Icons */}
          <div className="flex justify-end gap-4 mt-6 text-lg">
            <FiInstagram className="hover:text-white cursor-pointer" />
            <FiFacebook className="hover:text-white cursor-pointer" />
            <FiMail className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* ---- Shop ---- */}
        <div>
          <h4 className="text-white font-semibold mb-4">المتجر</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">جميع المنتجات</li>
            <li className="hover:text-white cursor-pointer">الأكثر مبيعًا</li>
            <li className="hover:text-white cursor-pointer">مجموعات الروائح</li>
            <li className="hover:text-white cursor-pointer">طلبات خاصة</li>
          </ul>
        </div>

        {/* ---- Support ---- */}
        <div>
          <h4 className="text-white font-semibold mb-4">الدعم</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">معلومات الشحن</li>
            <li className="hover:text-white cursor-pointer">دليل العناية</li>
            <li className="hover:text-white cursor-pointer">الأسئلة الشائعة</li>
            <li className="hover:text-white cursor-pointer">تواصل معنا</li>
          </ul>
        </div>

        {/* ---- WhatsApp Box ---- */}
        <div className="flex flex-col items-end">
          <div className="bg-white rounded-2xl p-6 shadow-lg w-full text-right">
            <h4 className="text-gray-700 font-semibold mb-2">الدردشة عبر واتساب</h4>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              أكمل طلبك بسهولة عبر دردشة واتساب الآمنة.
            </p>

            <a
              href="https://wa.me/123456789"
              className="bg-green-500 hover:bg-green-600 text-white w-full flex justify-center items-center gap-2 py-3 rounded-xl transition"
            >
              <FaWhatsapp className="text-xl" />
              ابدأ الدردشة
            </a>
          </div>
        </div>

      </div>

      {/* ------- الخط السفلي ------- */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

        <p>© 2024 كاندلز ستور — جميع الحقوق محفوظة.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
          <span className="hover:text-white cursor-pointer">شروط الاستخدام</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;