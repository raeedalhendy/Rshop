// 📁 src/stores/watches/data/products.js

// استيراد الصور (استبدل الروابط حسب ملفاتك)
import classic1 from "../image/cat1.png";
import classic2 from "../image/cat2.png";
import minimal1 from "../image/cat3.png";
import minimal2 from "../image/cat1.png";
import aviation1 from "../image/cat2.png";
import aviation2 from "../image/cat3.png";

export const watchProducts = [
  // ---------------- CLASSIC ----------------
  {
    id: 1,
    category: "classic",
    title: "ساعة التراث الكلاسيكية",
    price: 250,
    img: classic1,
  },
  {
    id: 2,
    category: "classic",
    title: "رويال غولد كلاسيك",
    price: 320,
    img: classic2,
  },

  // ---------------- MINIMAL ----------------
  {
    id: 3,
    category: "minimal",
    title: "مودرن مينيمال",
    price: 180,
    img: minimal1,
  },
  {
    id: 4,
    category: "minimal",
    title: "ساعة ستايل بسيط",
    price: 210,
    img: minimal2,
  },

  // ---------------- AVIATION ----------------
  {
    id: 5,
    category: "aviation",
    title: "أفييشن برو ماستر",
    price: 420,
    img: aviation1,
  },
  {
    id: 6,
    category: "aviation",
    title: "أفييشن نايت ستيل",
    price: 390,
    img: aviation2,
  },
];