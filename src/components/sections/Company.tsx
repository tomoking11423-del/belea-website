"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

const companyInfo = [
  { label: "会社名", value: "株式会社MaVie" },
  { label: "代表者", value: "代表取締役 金剛寺舞" },
  { label: "設立", value: "2021年11月1日" },
  { label: "事業内容", value: "フェイスワックス専門サロンの運営" },
  { label: "所在地", value: "〒160-0023 新宿区西新宿7-6-5 グローリア初穂生沼801" },
  { label: "営業時間", value: "平日 11:00〜20:00 / 土日祝 10:00〜19:00" },
  { label: "定休日", value: "不定休" },
  { label: "お問い合わせ", value: "LINE公式アカウントよりお問い合わせください" },
];

export default function Company() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="company" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="COMPANY" japaneseTitle="会社概要" />
        </motion.div>

        {/* Company Info Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F9F9F7] rounded-lg overflow-hidden shadow-sm"
        >
          <table className="w-full">
            <tbody>
              {companyInfo.map((item, index) => (
                <tr
                  key={item.label}
                  className={index !== companyInfo.length - 1 ? "border-b border-[#E8E6E3]" : ""}
                >
                  <th className="py-4 px-6 text-left text-sm font-medium text-[#4A4A4A] bg-[#E8E6E3]/50 w-1/3 sm:w-1/4">
                    {item.label}
                  </th>
                  <td className="py-4 px-6 text-sm text-[#6B6B6B]">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
