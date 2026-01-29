"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

const flowSteps = [
  {
    number: "01",
    title: "ご予約",
    description: "ホットペッパービューティーまたはLINEからご予約ください。",
  },
  {
    number: "02",
    title: "ご来店",
    description: "予約時間の5分前までにお越しください。",
  },
  {
    number: "03",
    title: "カウンセリング",
    description: "お肌の状態を確認し、施術内容をご説明します。",
  },
  {
    number: "04",
    title: "施術",
    description: "丁寧に施術いたします。リラックスしてお過ごしください。",
  },
  {
    number: "05",
    title: "お会計・次回予約",
    description: "お会計後、次回のご予約も承ります。",
  },
];

export default function Flow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-[#E8E6E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="FLOW" japaneseTitle="ご利用の流れ" />
        </motion.div>

        {/* Desktop Flow (Horizontal) */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#C9A962]/30"></div>

            {/* Steps */}
            <div className="flex justify-between">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center w-1/5"
                >
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#C9A962] text-white flex items-center justify-center mb-4 relative z-10">
                    <span
                      className="text-xl font-medium"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-medium text-[#4A4A4A] mb-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow (Vertical) */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-[#C9A962]/30"></div>

            {/* Steps */}
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pb-8 last:pb-0"
              >
                {/* Number Badge */}
                <div className="absolute left-[-8px] w-12 h-12 rounded-full bg-[#C9A962] text-white flex items-center justify-center">
                  <span
                    className="text-lg font-medium"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-12">
                  <h4 className="font-medium text-[#4A4A4A] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
