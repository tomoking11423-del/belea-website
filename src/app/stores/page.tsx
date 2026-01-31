import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import SectionTitle from "@/components/common/SectionTitle";
import { HiLocationMarker, HiClock, HiPhone } from "react-icons/hi";

const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";
const GOOGLE_MAP_URL = "https://maps.app.goo.gl/fhhJuMoWJBU5KQEC7";

export const metadata: Metadata = {
  title: "店舗一覧 | フェイスワックス専門店 BELEA",
  description: "フェイスワックス専門店BELEAの店舗一覧。新宿店のアクセス情報をご案内します。",
};

export default function StoresPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <section className="py-20 md:py-28 bg-[#F9F9F7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionTitle englishTitle="STORES" japaneseTitle="店舗一覧" />

            {/* Shinjuku Store */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
              {/* Store Header */}
              <div className="bg-[#C9A962] text-white p-6">
                <h3
                  className="text-2xl mb-1"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  BELEA 新宿店
                </h3>
                <p className="text-sm opacity-90">Face Wax Salon</p>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Google Map */}
                <div className="aspect-[4/3] md:aspect-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3!2d139.6965!3d35.6945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd57b87fb99%3A0x3e9e36a6d3d0f4b4!2z5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yX5LiB55uu77yW4oiS77yV!5e0!3m2!1sja!2sjp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Store Info */}
                <div className="p-6 md:p-8">
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <HiLocationMarker className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-[#6B6B6B] mb-1">住所</p>
                        <p className="text-[#4A4A4A]">
                          〒160-0023
                          <br />
                          東京都新宿区西新宿7-6-5
                          <br />
                          グローリア初穂生沼ビル801
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <HiClock className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-[#6B6B6B] mb-1">営業時間</p>
                        <p className="text-[#4A4A4A]">
                          平日 11:00〜20:00
                          <br />
                          土日祝 10:00〜19:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <HiPhone className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-[#6B6B6B] mb-1">定休日</p>
                        <p className="text-[#4A4A4A]">不定休</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 space-y-3">
                    <a
                      href={GOOGLE_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 border-2 border-[#C9A962] text-[#C9A962] rounded hover:bg-[#C9A962] hover:text-white transition-colors font-medium"
                    >
                      Googleマップで見る
                    </a>
                    <a
                      href={HOTPEPPER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-[#C9A962] text-white rounded hover:bg-[#B8983F] transition-colors font-medium"
                    >
                      この店舗を予約する
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
