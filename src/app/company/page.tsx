import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Company from "@/components/sections/Company";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";

export const metadata: Metadata = {
  title: "会社概要 | フェイスワックス専門店 BELEA",
  description: "株式会社MaVieが運営するフェイスワックス専門店BELEAの会社概要。代表取締役 金剛寺舞。",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <Company />
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
