import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import BrandStory from "@/components/sections/BrandStory";
import Concept from "@/components/sections/Concept";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "BELEAについて | フェイスワックス専門店 BELEA",
  description: "通うたび、心のトーンも一段上がる。全ての人へhappyを届けるサロン、BELEAの想いとフェイスワックスについてご紹介します。",
};

export default function ConceptPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <BrandStory />
        <Concept />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
