"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { HiExternalLink } from "react-icons/hi";

interface BlogProps {
  blogUrl: string;
}

export default function Blog({ blogUrl }: BlogProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#F5F2ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="BLOG" japaneseTitle="ブログ" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-[#6B6B6B] mb-8 leading-relaxed">
            サロンの最新情報やお役立ち情報を発信しています。
            <br />
            施術のビフォーアフターやキャンペーン情報もチェック！
          </p>

          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-white font-bold rounded hover:bg-[#D4BA7A] transition-colors shadow-md"
          >
            <span>ブログを見る</span>
            <HiExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
