import React from "react";
import { motion } from "framer-motion";
import { FiDroplet, FiFeather, FiStar } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white">

      {/* ------- عنوان القسم ------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-extrabold mb-4">عن حرفتنا</h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          "البساطة الهادئة والحرفية المستدامة. كل شمعة هي قصة من الطبيعة والضوء،
          تُصب بعناية في دفعات صغيرة لضمان أعلى جودة ورائحة نقية تدوم طويلًا."
        </p>
      </motion.div>

      {/* ------- البطاقات الثلاث ------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {/* البطاقة 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 bg-white shadow-md rounded-2xl border border-gray-100"
        >
          <div className="flex justify-center mb-4">
            <FiDroplet className="text-yellow-500 text-4xl" />
          </div>

          <h3 className="font-bold text-lg mb-2">شمع الصويا الطبيعي</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            شمع صديق للبيئة وآمن، يدوم طويلًا ويمنح وهجًا دافئًا ومتساويًا.
          </p>
        </motion.div>

        {/* البطاقة 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="p-8 bg-white shadow-md rounded-2xl border border-gray-100"
        >
          <div className="flex justify-center mb-4">
            <FiFeather className="text-yellow-500 text-4xl" />
          </div>

          <h3 className="font-bold text-lg mb-2">زيوت عطرية نباتية</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            روائح مشتقة من أفضل المصادر الطبيعية لمنحك تجربة حسية نقية.
          </p>
        </motion.div>

        {/* البطاقة 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 bg-white shadow-md rounded-2xl border border-gray-100"
        >
          <div className="flex justify-center mb-4">
            <FiStar className="text-yellow-500 text-4xl" />
          </div>

          <h3 className="font-bold text-lg mb-2">مصبوب يدويًا</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            كل شمعة تُصنع يدوياً بعناية فائقة في مشغلنا الخاص لضمان جودة متفردة.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;