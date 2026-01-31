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
      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1
            className="text-2xl md:text-3xl text-[#4A4A4A] font-bold"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            創業者メッセージ
          </h1>
        </motion.div>

        {/* Content - Photo Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12"
        >
          {/* Photo */}
          <div className="md:w-64 lg:w-72 flex-shrink-0">
            <Image
              src="/images/about/founder.jpg"
              alt="BELEA 創業者 金剛寺舞"
              width={288}
              height={360}
              className="w-full h-auto"
            />
            <div className="mt-4">
              <p className="text-sm text-[#6B6B6B]">株式会社MaVie 代表取締役</p>
              <p
                className="text-lg text-[#4A4A4A] font-medium mt-1"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                金剛寺 舞
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="flex-1 text-[#4A4A4A] leading-loose">
            <p className="mb-6">
              <span
                className="text-lg md:text-xl"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                「通うたび、<span className="text-[#C9A962]">心のトーンも一段上がる。</span>」
              </span>
              <br />
              をモットーに、全ての人へhappyを届けるサロンでありたいと思っています。
            </p>

            <p className="mb-6">
              BELEAを通して老若男女問わず美を追求し、なりたい自分へ近づく為お肌本来の美しさを手に入れ、
              <span className="text-[#C9A962] font-medium">喜びや幸福を感じて欲しい。</span>
              という願いを込めてBELEAと名付けました。
            </p>

            <p className="mb-6">
              私達スタッフ一同は、日々お客様への美のサポートを追求し、
              <span className="text-[#C9A962] font-medium">【時短】</span>且つ
              <span className="text-[#C9A962] font-medium">【満足度】</span>
              をどこよりも意識し、技術やカウンセリングを学んでおります。
              お客様の大切な時間を縛られず、有意義に過ごしていただくために。
            </p>

            <p className="mb-6">
              <span className="text-[#C9A962] font-medium">【時短】</span>
              はただ早くするのではなく、技術はもちろんのこと、無駄な時間を省きながらお客様に満足していただくということです。
            </p>

            <p className="mb-6">
              お肌の土台を創る。
              <span className="text-[#C9A962] font-medium">フェイスワックスを日常へ。</span>
            </p>

            <p>
              是非一度BELEAへご来店下さい。
              <br />
              <span className="text-[#C9A962] font-medium">スタッフ一同心よりお待ちしております。</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
