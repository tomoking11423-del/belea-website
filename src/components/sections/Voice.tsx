"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { HiStar, HiUser } from "react-icons/hi";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "初めてのフェイスワックスでしたが、痛みも少なく、施術後の肌のツルツル感に感動しました！化粧ノリが全然違います。",
    gender: "female",
    age: "30代",
  },
  {
    id: 2,
    rating: 5,
    text: "男性でも入りやすい雰囲気で安心しました。肌のトーンが明るくなり、清潔感がアップした気がします。リピート確定です。",
    gender: "male",
    age: "20代",
  },
  {
    id: 3,
    rating: 5,
    text: "くすみが気になっていましたが、1回の施術で肌が明るくなりました。定期的に通いたいと思います。スタッフさんも丁寧でした。",
    gender: "female",
    age: "40代",
  },
];

interface VoiceProps {
  hotpepperUrl: string;
}

export default function Voice({ hotpepperUrl }: VoiceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voice" className="py-20 md:py-28 bg-[#FFFBF5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="VOICE" japaneseTitle="お客様の声" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-[#C9A962]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                「{review.text}」
              </p>

              {/* User Info */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#E8E6E3]">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    review.gender === "female"
                      ? "bg-pink-100 text-pink-500"
                      : "bg-blue-100 text-blue-500"
                  }`}
                >
                  <HiUser className="w-4 h-4" />
                </div>
                <span className="text-sm text-[#6B6B6B]">
                  {review.age}
                  {review.gender === "female" ? "女性" : "男性"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={hotpepperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#C9A962] text-[#C9A962] rounded hover:bg-[#C9A962] hover:text-white transition-colors font-medium"
          >
            ホットペッパーで口コミをもっと見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
