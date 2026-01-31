"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "BELEAの想い", href: "/concept" },
  { label: "料金・メニュー", href: "/menu" },
  { label: "お客様の声", href: "/voice" },
  { label: "店舗一覧", href: "/stores" },
  { label: "会社概要", href: "/company" },
  { label: "よくある質問", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // On sub-pages, always show the solid background
  const showSolidBg = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/common/logo.png"
              alt="BELEA"
              width={160}
              height={53}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A962] ${
                  showSolidBg ? "text-[#4A4A4A]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? (
              <HiX
                className={`w-6 h-6 ${showSolidBg ? "text-[#4A4A4A]" : "text-white"}`}
              />
            ) : (
              <HiMenu
                className={`w-6 h-6 ${showSolidBg ? "text-[#4A4A4A]" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-sm border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMobileMenuClick}
              className="block px-6 py-4 text-[#4A4A4A] hover:bg-[#F9F9F7] hover:text-[#C9A962] transition-colors border-b border-gray-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
