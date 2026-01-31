import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Voice from "@/components/sections/Voice";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "お客様の声 | フェイスワックス専門店 BELEA",
  description: "BELEAをご利用いただいたお客様の声をご紹介。実際に施術を受けた方々の感想をご覧ください。",
};

export default function VoicePage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <Voice hotpepperUrl={HOTPEPPER_URL} />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
