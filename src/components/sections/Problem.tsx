"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "メイクノリが悪い\n崩れやすい",
  "繰り返しニキビが\nできやすい",
  "お肌のざらつき\nごわつき",
  "毛穴の黒ずみが\n気になる",
  "肌のトーンが\n暗くなった",
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-[#4A4A4A] mb-4"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            こんな<span className="text-[#C9A962]">お悩み</span>ありませんか？
          </h2>
        </motion.div>

        {/* Problem Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#4A4A4A]/80 border-2 border-[#C9A962] flex items-center justify-center p-4"
            >
              <p className="text-white text-xs sm:text-sm text-center whitespace-pre-line leading-relaxed">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-[#C9A962] text-white px-8 py-4 rounded">
            <p className="text-lg sm:text-xl font-medium">
              その悩み、フェイスワックスで解決できます
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
