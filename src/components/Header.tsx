"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/news", label: "Новости" },
  { href: "/projects", label: "Проекты" },
  { href: "/departments", label: "Структура" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип в круглом контейнере */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#3a95ff] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform duration-200">          <img
            src="/logo.png"
            alt="ППОС ОмГТУ"
            className="w-full h-full object-contain"
           />
          </div>
          <span className="text-xl font-bold text-[#3a95ff] hidden sm:block">
            ППОС ОмГТУ
          </span>
          </Link>

          {/* Навигация (десктоп) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#3a95ff]"
                    : "text-[#1A1A1A]/70 hover:text-[#3a95ff]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Кнопка «Вступить» */}
          <div className="hidden lg:block">
            <Link
              href="/contacts"
              className="bg-[#3a95ff] text-white text-sm px-6 py-3 rounded-full font-bold hover:bg-[#2a7de8] transition-colors"            >
              Вступить
            </Link>
          </div>

          {/* Бургер */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#F5F7FA] rounded-lg transition-colors"
            aria-label="Меню"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#3a95ff]/10 text-[#3a95ff]"
                      : "text-[#1A1A1A]/70 hover:bg-[#F5F7FA]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacts"
                className="block w-full text-center px-6 py-3 mt-4 bg-gradient-to-r from-[#3a95ff] to-[#bc76ff] text-white text-sm font-semibold rounded-full"
              >
                Вступить в профсоюз
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}