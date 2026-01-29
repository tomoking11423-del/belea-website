import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FixedCTA from "@/components/common/FixedCTA";
import Hero from "@/components/sections/Hero";
import HeroCTA from "@/components/sections/HeroCTA";
import Problem from "@/components/sections/Problem";
import Concept from "@/components/sections/Concept";
import Menu from "@/components/sections/Menu";
import Flow from "@/components/sections/Flow";
import Voice from "@/components/sections/Voice";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Blog from "@/components/sections/Blog";
import Company from "@/components/sections/Company";
import Access from "@/components/sections/Access";

// Store URLs
const HOTPEPPER_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/?cstt=1";
const LINE_URL = "https://lin.ee/DXNpijD";
const BLOG_URL = "https://beauty.hotpepper.jp/kr/slnH000711699/blog/";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Hero CTA */}
        <HeroCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />

        {/* Problem Section */}
        <Problem />

        {/* Concept Section */}
        <Concept />

        {/* Menu Section */}
        <Menu hotpepperUrl={HOTPEPPER_URL} />

        {/* Flow Section */}
        <Flow />

        {/* Voice Section */}
        <Voice hotpepperUrl={HOTPEPPER_URL} />

        {/* FAQ Section */}
        <FAQ />

        {/* Instagram Section */}
        <Instagram />

        {/* Blog Section */}
        <Blog blogUrl={BLOG_URL} />

        {/* Company Section */}
        <Company />

        {/* Access Section */}
        <Access />
      </main>

      <Footer />

      {/* Fixed CTA Footer */}
      <FixedCTA hotpepperUrl={HOTPEPPER_URL} lineUrl={LINE_URL} />
    </>
  );
}
