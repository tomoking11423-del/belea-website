import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Concept from "@/components/sections/Concept";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "コンセプト | フェイスワックス専門店 BELEA",
  description: "フェイスワックスは、産毛を除去するだけでなく、古い角質を一緒に取り除き、肌の土台から整えるトリートメントです。",
};

export default function ConceptPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <Concept />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
