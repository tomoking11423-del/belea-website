"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#C9A962] tracking-widest mb-2">FOUNDER MESSAGE</p>
          <h1
            className="text-2xl md:text-3xl text-[#4A4A4A]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            創業者メッセージ
          </h1>
          <div className="w-12 h-px bg-[#C9A962] mx-auto mt-4"></div>
        </motion.div>

        {/* Founder Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          {/* Photo */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
            <Image
              src="/images/about/founder.jpg"
              alt="BELEA 創業者 金剛寺舞"
              width={160}
              height={160}
              className="object-cover object-top w-full h-full"
            />
          </div>
          {/* Name */}
          <p className="text-[#C9A962] text-sm tracking-wide">株式会社MaVie 代表取締役</p>
          <p
            className="text-xl md:text-2xl text-[#4A4A4A] mt-1"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            金剛寺 舞
          </p>
        </motion.div>

        {/* Motto Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <p
            className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed inline-block"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            <span className="text-[#C9A962] text-4xl md:text-5xl leading-none align-top">"</span>
            通うたび、
            <span className="text-[#C9A962]">心のトーンも一段上がる。</span>
            <span className="text-[#C9A962] text-4xl md:text-5xl leading-none align-bottom">"</span>
          </p>
        </motion.div>

        {/* Message Body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-6 md:p-10 shadow-sm"
        >
          <div className="space-y-6 text-[#4A4A4A] leading-loose text-sm md:text-base">
            <p>
              をモットーに、全ての人へhappyを届けるサロンでありたいと思っています。
            </p>

            <p>
              BELEAを通して老若男女問わず美を追求し、なりたい自分へ近づく為お肌本来の美しさを手に入れ、
              <span className="text-[#C9A962] font-medium">喜びや幸福を感じて欲しい。</span>
              という願いを込めてBELEAと名付けました。
            </p>

            <p>
              私達スタッフ一同は、日々お客様への美のサポートを追求し、
              <span className="text-[#C9A962] font-medium">【時短】</span>且つ
              <span className="text-[#C9A962] font-medium">【満足度】</span>
              をどこよりも意識し、技術やカウンセリングを学んでおります。
            </p>

            <p>お客様の大切な時間を縛られず、有意義に過ごしていただくために。</p>

            <p>
              <span className="text-[#C9A962] font-medium">【時短】</span>
              はただ早くするのではなく、技術はもちろんのこと、無駄な時間を省きながらお客様に満足していただくということです。
            </p>

            <div className="text-center py-6 border-t border-b border-[#E8E6E3] my-6">
              <p className="text-[#4A4A4A] mb-2">お肌の土台を創る。</p>
              <p
                className="text-[#C9A962] text-lg md:text-xl"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                フェイスワックスを日常へ
              </p>
            </div>

            <div className="text-center">
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
