import { SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A4A4A] text-white py-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div
            className="text-3xl font-semibold tracking-wider text-[#C9A962]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            BELEA
          </div>

          {/* Tagline */}
          <p className="text-sm text-gray-300">Face Wax Salon</p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C9A962] transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gray-600 my-4"></div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            &copy; {currentYear} BELEA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
