"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F9F9F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-3xl md:text-4xl text-[#C9A962] tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            BRAND STORY
          </h1>
          <p className="text-lg text-[#4A4A4A]">BELEAの想い</p>
        </motion.div>

        {/* Motto - Main Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-[#C9A962]/30"></div>
            <p
              className="text-2xl md:text-3xl text-[#4A4A4A] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              通うたび、
              <br />
              <span className="text-[#C9A962]">心のトーンも一段上がる。</span>
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              をモットーに、
              <br />
              全ての人へhappyを届けるサロンでありたいと思っています。
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-[#C9A962]/30"></div>
          </div>
        </motion.div>

        {/* Brand Name Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-[#4A4A4A] leading-loose text-center">
            BELEAを通して、
            <br className="md:hidden" />
            老若男女問わず美を追求し、
            <br />
            なりたい自分へ近づくため、
            <br className="md:hidden" />
            お肌本来の美しさを手に入れ、
            <br />
            <span className="text-[#C9A962] font-medium">喜びや幸福を感じて欲しい。</span>
            <br />
            <br />
            という願いを込めて、
            <br className="md:hidden" />
            BELEAと名付けました。
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center mb-16"
        >
          <div className="w-16 h-px bg-[#C9A962]"></div>
        </motion.div>

        {/* Staff Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-[#4A4A4A] leading-loose text-center">
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
        </motion.div>

        {/* Time Efficiency Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E8E6E3] mb-16"
        >
          <h3
            className="text-xl text-[#C9A962] text-center mb-6 tracking-wider"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            【 時短 】
          </h3>
          <p className="text-[#4A4A4A] leading-loose text-center">
            ただ早くするのではなく、
            <br />
            技術はもちろんのこと、
            <br />
            無駄な時間を省きながら
            <br />
            お客様に満足していただくこと。
          </p>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p
            className="text-lg text-[#4A4A4A] mb-4"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            是非一度ご来店ください。
          </p>
          <p className="text-[#C9A962] font-medium">
            スタッフ一同、心よりお待ちしております。
          </p>
        </motion.div>

      </div>
    </section>
  );
}
