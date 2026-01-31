import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Menu from "@/components/sections/Menu";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "メニュー・料金 | フェイスワックス専門店 BELEA",
  description: "BELEAのフェイスワックスメニューと料金一覧。ライスフェイスワックス、スーパーフードフェイシャルワックスなど各種メニューをご用意。",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <Menu hotpepperUrl={HOTPEPPER_URL} />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
