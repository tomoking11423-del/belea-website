"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { faqItems } from "@/data/faq";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F2ED]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="FAQ" japaneseTitle="よくある質問" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F2ED] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[#C9A962] font-bold">Q.</span>
                  <span className="text-[#4A4A4A] font-medium">{item.question}</span>
                </span>
                <span className="flex-shrink-0 ml-4">
                  {openItems.includes(item.id) ? (
                    <HiMinus className="w-5 h-5 text-[#C9A962]" />
                  ) : (
                    <HiPlus className="w-5 h-5 text-[#C9A962]" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(item.id) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 border-t border-[#E8E6E3]">
                  <div className="flex gap-3 pt-4">
                    <span className="text-[#6B6B6B] font-bold">A.</span>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
