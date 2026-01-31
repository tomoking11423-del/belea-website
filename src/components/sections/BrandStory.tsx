"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F9F9F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>

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
            FOUNDER MESSAGE
          </h1>
          <p className="text-lg text-[#4A4A4A]">創業者メッセージ</p>
        </motion.div>

        {/* Founder Section - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          {/* Founder Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/founder.jpg"
                alt="BELEA 創業者 金剛寺舞"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#C9A962] font-medium">株式会社MaVie 代表取締役</p>
              <p
                className="text-xl text-[#4A4A4A] mt-1"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                金剛寺 舞
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-8">
            {/* Motto */}
            <div className="border-l-2 border-[#C9A962] pl-6">
              <p
                className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                通うたび
                <br />
                <span className="text-[#C9A962]">心のトーンも一段上がる。</span>
              </p>
            </div>

            <p className="text-[#6B6B6B] leading-loose">
              をモットーに全ての人へhappyを届けるサロンでありたいと思っています。
            </p>

            <p className="text-[#4A4A4A] leading-loose">
              BELEAを通して老若男女問わず美を追求し、なりたい自分へ近づく為お肌本来の美しさを手に入れ、
              <span className="text-[#C9A962] font-medium">喜びや幸福を感じて欲しい。</span>
              という願いを込めてBELEAを付けました。
            </p>

            <p className="text-[#4A4A4A] leading-loose">
              私達スタッフ一同は、日々お客様への美のサポートを追求し、
              <span className="text-[#C9A962] font-medium">【時短】</span>且つ
              <span className="text-[#C9A962] font-medium">【満足度】</span>
              をどこよりも意識し技術やカウンセリングを学んでおります。
            </p>

            <p className="text-[#4A4A4A] leading-loose">
              お客様の大切な時間を縛られず有意義に過ごしていただくために。
            </p>

            {/* Time Efficiency Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E6E3]">
              <h3 className="text-[#C9A962] font-medium mb-3">【 時短 】</h3>
              <p className="text-[#4A4A4A] leading-loose text-sm">
                ただ早くするのではなく、技術はもちろんのこと、無駄な時間を省きながらお客様に満足していただくということです。
              </p>
            </div>

            <p className="text-[#4A4A4A] leading-loose">
              お肌の土台を創る。
              <br />
              <span className="text-[#C9A962] font-medium text-lg">フェイスワックスを日常へ</span>
            </p>

            {/* Closing */}
            <div className="pt-4 border-t border-[#E8E6E3]">
              <p
                className="text-[#4A4A4A]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                是非一度BELEAへご来店下さい。
              </p>
              <p className="text-[#C9A962] font-medium mt-2">
                スタッフ一同心よりお待ちしております。
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
