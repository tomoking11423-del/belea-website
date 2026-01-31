import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Access from "@/components/sections/Access";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "アクセス | フェイスワックス専門店 BELEA",
  description: "フェイスワックス専門店BELEAへのアクセス。新宿区西新宿7-6-5 グローリア初穂生沼801。",
};

export default function AccessPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <Access />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
