import React from "react";
import { motion } from "framer-motion";

export default function WatchAbout() {
  return (
    <div className="text-white bg-[#0b0b0b] py-20 px-6 md:px-20 text-right">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        من نحن
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-loose text-lg max-w-3xl"
      >
        نحن متجر متخصص بتقديم أرقى الساعات الفاخرة، المصممة بإتقان ومهارة عالية.
        نحرص على اختيار أفضل الساعات العالمية ذات الجودة العالية والتفاصيل الدقيقة.
        رؤيتنا هي توفير تجربة تسوق فاخرة للعملاء الباحثين عن الدقة، الأناقة، والفخامة.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 leading-loose mt-6 max-w-3xl"
      >
        منذ تأسيس متجرنا، عملنا على تقديم مجموعة واسعة من الساعات التي تناسب
        مختلف الأذواق. سواءً كنت تبحث عن ساعة كلاسيكية، رياضية، أو تصميم فاخر،
        سنضمن لك العثور على ما يعكس شخصيتك وأسلوبك.
      </motion.p>

    </div>
  );
}