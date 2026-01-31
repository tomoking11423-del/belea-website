"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="BRAND STORY" japaneseTitle="BELEAの想い" />
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p
            className="text-2xl md:text-3xl text-[#C9A962] mb-6 leading-relaxed"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            通うたび、
            <br />
            心のトーンも一段上がる。
          </p>
          <p className="text-[#6B6B6B] leading-loose">
            をモットーに、
            <br />
            全ての人へhappyを届けるサロンでありたいと思っています。
          </p>
        </motion.div>

        {/* Brand Name Origin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#F9F9F7] rounded-lg p-8 md:p-10 mb-12"
        >
          <h3
            className="text-xl text-[#4A4A4A] mb-6 text-center"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            BELEAという名前に込めた想い
          </h3>
          <p className="text-[#6B6B6B] leading-loose text-center">
            BELEAを通して、
            <br />
            老若男女問わず美を追求し、
            <br />
            なりたい自分へ近づくため、
            <br />
            お肌本来の美しさを手に入れ、
            <br />
            <span className="text-[#C9A962] font-medium">喜びや幸福を感じて欲しい。</span>
            <br />
            <br />
            という願いを込めて
            <br />
            BELEAと名付けました。
          </p>
        </motion.div>

        {/* Staff Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3
              className="text-xl text-[#4A4A4A] mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              私たちのこだわり
            </h3>
            <p className="text-[#6B6B6B] leading-loose">
              私たちスタッフ一同は、
              <br />
              日々お客様への美のサポートを追求し、
              <br />
              <span className="text-[#C9A962] font-medium">【時短】</span>かつ<span className="text-[#C9A962] font-medium">【満足度】</span>を
              <br />
              どこよりも意識し、
              <br />
              技術やカウンセリングを学んでおります。
            </p>
          </div>

          {/* Time Efficiency */}
          <div className="bg-[#C9A962]/10 rounded-lg p-6 md:p-8">
            <p className="text-[#4A4A4A] leading-loose text-center">
              <span className="font-medium">【時短】</span>はただ早くするのではなく、
              <br />
              技術はもちろんのこと、
              <br />
              無駄な時間を省きながら
              <br />
              お客様に満足していただく。
              <br />
              <br />
              お客様の大切な時間を、
              <br />
              最高の体験に変えていきます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
