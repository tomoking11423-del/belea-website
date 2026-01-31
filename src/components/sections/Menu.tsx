"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { menuCategories, formatPrice } from "@/data/menu";

interface MenuProps {
  hotpepperUrl: string;
}

export default function Menu({ hotpepperUrl }: MenuProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="MENU" japaneseTitle="メニュー・料金" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-[#F9F9F7] rounded-lg p-1">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#C9A962] text-white shadow-md"
                    : "text-[#6B6B6B] hover:text-[#4A4A4A]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#F9F9F7] rounded-lg overflow-hidden">
            {menuCategories[activeTab].items.map((item, itemIndex) => (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 ${
                  itemIndex !== menuCategories[activeTab].items.length - 1
                    ? "border-b border-[#E8E6E3]"
                    : ""
                }`}
              >
                <div className="flex-1 mb-2 sm:mb-0">
                  <h4 className="font-medium text-[#4A4A4A] leading-relaxed">
                    {item.name}
                  </h4>
                </div>
                <div className="text-right shrink-0">
                  {item.originalPrice && (
                    <span className="text-sm text-[#999] line-through mr-2">
                      ¥{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-lg font-bold text-[#C9A962]">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-[#6B6B6B] text-center mt-8 mb-8"
        >
          ※ 料金は全て税込表示です
          <br />
          ※ その他のメニューはホットペッパービューティーをご確認ください
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={hotpepperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            メニュー詳細を見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
