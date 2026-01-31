"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { menuCategories, formatPrice } from "@/data/menu";
import { HiStar } from "react-icons/hi";

interface MenuProps {
  hotpepperUrl: string;
}

export default function Menu({ hotpepperUrl }: MenuProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            className="mb-8"
          >
            {/* Category Name */}
            <h3
              className="text-lg font-medium text-[#4A4A4A] mb-4 pb-2 border-b-2 border-[#C9A962]"
            >
              {category.name}
            </h3>

            {/* Menu Items */}
            <div className="bg-[#F9F9F7] rounded-lg overflow-hidden">
              {category.items.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 ${
                    itemIndex !== category.items.length - 1
                      ? "border-b border-[#E8E6E3]"
                      : ""
                  }`}
                >
                  <div className="flex-1 mb-2 sm:mb-0">
                    <div className="flex items-start gap-2 mb-1 flex-wrap">
                      <h4 className="font-medium text-[#4A4A4A] leading-relaxed">{item.name}</h4>
                      {item.isPopular && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#C9A962] text-white text-xs rounded shrink-0">
                          <HiStar className="w-3 h-3" />
                          人気
                        </span>
                      )}
                      {item.condition && (
                        <span className="inline-flex items-center px-2 py-0.5 bg-[#E8E6E3] text-[#4A4A4A] text-xs rounded shrink-0">
                          {item.condition}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm text-[#6B6B6B]">{item.description}</p>
                    )}
                    {item.duration && (
                      <p className="text-xs text-[#6B6B6B] mt-1">
                        施術時間：{item.duration}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
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
        ))}

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-[#6B6B6B] text-center mb-8"
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
