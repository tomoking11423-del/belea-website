"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

const effects = [
  {
    number: "01",
    title: "産毛除去",
    description: "細かい産毛まで根元からオフ。\n肌表面がなめらかに。",
  },
  {
    number: "02",
    title: "角質除去",
    description: "古い角質も一緒にすっきり。\nターンオーバーを促進。",
  },
  {
    number: "03",
    title: "トーンアップ",
    description: "肌が明るく、透明感アップ。\n化粧ノリも改善。",
  },
];

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="concept" className="py-20 md:py-28 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="CONCEPT" japaneseTitle="フェイスワックスとは" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/gallery/treatment.jpg"
              alt="フェイスワックス施術"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className="text-xl sm:text-2xl text-[#4A4A4A] mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              ただの産毛処理ではありません。
            </h3>
            <div className="space-y-6 text-[#6B6B6B] leading-loose">
              <p>
                フェイスワックスは、
                <br />
                産毛を除去するだけでなく、
                <br />
                古い角質を一緒に取り除き、
                <br />
                <span className="text-[#C9A962] font-medium">肌の土台から整えるトリートメント</span>です。
              </p>
              <p>
                化粧ノリの改善、
                <br />
                くすみ解消、
                <br />
                スキンケアの浸透力アップ。
              </p>
              <p>
                「肌の土台作り」として、
                <br />
                多くのお客様にご好評いただいています。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three Effects */}
        <div className="grid sm:grid-cols-3 gap-6">
          {effects.map((effect, index) => (
            <motion.div
              key={effect.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <span
                className="text-4xl text-[#C9A962]/40 font-light tracking-wider"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {effect.number}
              </span>
              <div className="w-8 h-px bg-[#C9A962] mx-auto my-4"></div>
              <h4 className="text-lg font-medium text-[#4A4A4A] mb-3">
                {effect.title}
              </h4>
              <p className="text-sm text-[#6B6B6B] whitespace-pre-line leading-relaxed">
                {effect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
