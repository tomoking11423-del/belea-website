"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
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

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FFFBF5] rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="grid md:grid-cols-5">

            {/* Founder Image - Left Side */}
            <div className="md:col-span-2 relative">
              <div className="aspect-[3/4] md:aspect-auto md:h-full relative">
                <Image
                  src="/images/about/founder.jpg"
                  alt="BELEA 創業者 金剛寺舞"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Overlay gradient for text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Founder Name - Mobile: overlay on image, Desktop: below */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                <p className="text-white/90 text-sm">株式会社MaVie 代表取締役</p>
                <p
                  className="text-white text-xl mt-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  金剛寺 舞
                </p>
              </div>
            </div>

            {/* Message Content - Right Side */}
            <div className="md:col-span-3 p-6 md:p-10 lg:p-12">

              {/* Founder Name - Desktop only */}
              <div className="hidden md:block mb-8 pb-6 border-b border-[#E8E6E3]">
                <p className="text-[#C9A962] text-sm tracking-wide">株式会社MaVie 代表取締役</p>
                <p
                  className="text-2xl text-[#4A4A4A] mt-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  金剛寺 舞
                </p>
              </div>

              {/* Motto - Hero Quote */}
              <div className="mb-8">
                <p
                  className="text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] leading-relaxed"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  <span className="text-[#C9A962] text-3xl md:text-4xl lg:text-5xl">"</span>
                  通うたび、
                  <br />
                  <span className="text-[#C9A962]">心のトーンも一段上がる。</span>
                  <span className="text-[#C9A962] text-3xl md:text-4xl lg:text-5xl">"</span>
                </p>
              </div>

              {/* Message Body */}
              <div className="space-y-5 text-[#4A4A4A] leading-relaxed text-sm md:text-base">
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

                {/* Time Efficiency */}
                <div className="bg-white rounded-lg p-5 my-6 border-l-4 border-[#C9A962]">
                  <p className="text-[#C9A962] font-medium text-sm mb-2">【 時短 】とは</p>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    ただ早くするのではなく、技術はもちろんのこと、無駄な時間を省きながらお客様に満足していただくということです。
                  </p>
                </div>

                <p className="text-center py-4">
                  <span className="block text-[#4A4A4A]">お肌の土台を創る。</span>
                  <span
                    className="block text-[#C9A962] text-lg md:text-xl mt-2"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    フェイスワックスを日常へ
                  </span>
                </p>

                {/* Closing */}
                <div className="text-center pt-6 mt-6 border-t border-[#E8E6E3]">
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

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
