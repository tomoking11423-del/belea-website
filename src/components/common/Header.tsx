"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "BELEA", href: "/concept" },
  { label: "料金・メニュー", href: "/menu" },
  { label: "お客様の声", href: "/voice" },
  { label: "よくある質問", href: "/faq" },
  { label: "店舗一覧", href: "/stores" },
  { label: "会社概要", href: "/company" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span
              className={`text-2xl font-semibold tracking-wider transition-colors duration-300`}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: isScrolled ? "#C9A962" : "#C9A962",
              }}
            >
              BELEA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A962] ${
                  isScrolled ? "text-[#4A4A4A]" : "text-white"
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
                className={`w-6 h-6 ${isScrolled ? "text-[#4A4A4A]" : "text-white"}`}
              />
            ) : (
              <HiMenu
                className={`w-6 h-6 ${isScrolled ? "text-[#4A4A4A]" : "text-white"}`}
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
