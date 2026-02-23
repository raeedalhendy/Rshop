import { Routes, Route } from "react-router-dom";

import PlatformHome from "../page/PlatformHome";

// CANDLES
import CandlesLayout from "../stores/candles/layout/CandlesLayout";
import CandlesHome from "../stores/candles/page/CandlesHome";
import CandlesCategories from "../stores/candles/page/CandlesCategories";
import CandlesCategoryPage from "../stores/candles/page/CandlesCategoryPage";
import CandlesContact from "../stores/candles/page/CandlesContact";
import CartPage from "../stores/candles/page/CartPage";

// WATCHES
import WatchLayout from "../stores/watches/components/WatchLayout";
import WatchHome from "../stores/watches/page/WatchHome";
import WatchCategories from "../stores/watches/page/WatchCategories";
import WatchCategoryPage from "../stores/watches/page/WatchCategoryPage";
import WatchProducts from "../stores/watches/page/WatchProducts";
import WatchAbout from "../stores/watches/page/WatchAbout";

// 🟨 المهم: استيراد الـ Provider الصحيح
import { WatchCartProvider } from "../stores/watches/hooks/useWatchCart.jsx";
import WatchCart from "../stores/watches/page/WatchCart";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<PlatformHome />} />

      {/* WATCHES STORE */}
      <Route
        path="/watches"
        element={
          <WatchCartProvider>
            <WatchLayout />
          </WatchCartProvider>
        }
      >
        <Route index element={<WatchHome />} />
        <Route path="categories" element={<WatchCategories />} />
        <Route path="category/:id" element={<WatchCategoryPage />} />
        <Route path="products" element={<WatchProducts />} />
        <Route path="about" element={<WatchAbout />} />
        <Route path="cart" element={<WatchCart />} />

      </Route>

      {/* CANDLES STORE */}
      <Route path="/candles" element={<CandlesLayout />}>
        <Route index element={<CandlesHome />} />
        <Route path="categories" element={<CandlesCategories />} />
        <Route path="category/:id" element={<CandlesCategoryPage />} />
        <Route path="contact" element={<CandlesContact />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;