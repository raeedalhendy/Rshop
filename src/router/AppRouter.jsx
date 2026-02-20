import { Routes, Route } from "react-router-dom";
import CandlesLayout from "../stores/candles/layout/CandlesLayout";

import CandlesHome from "../stores/candles/page/CandlesHome";
import CandlesCategories from "../stores/candles/page/CandlesCategories";
import CandlesCategoryPage from "../stores/candles/page/CandlesCategoryPage";
import CartPage from "../stores/candles/page/CartPage";
import CandlesContact from "../stores/candles/page/CandlesContact";

const AppRouter = () => {
  return (
    <Routes>

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