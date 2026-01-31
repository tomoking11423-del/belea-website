import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import FAQ from "@/components/sections/FAQ";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "よくある質問 | フェイスワックス専門店 BELEA",
  description: "フェイスワックスに関するよくある質問と回答。痛み、施術時間、敏感肌の方への対応など、疑問にお答えします。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <FAQ />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
