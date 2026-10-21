"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Профсоюзный бал 2025: незабываемый вечер",
    excerpt:
      "Более 500 студентов приняли участие в традиционном профсоюзном бале. Вечер живой музыки, танцев и ярких эмоций.",
    date: "15 марта 2025",
    category: "События",
  },
  {
    id: 2,
    title: "Новая программа лояльности для студентов",
    excerpt:
      "ППОС ОмГТУ запускает программу скидок и бонусов для членов профсоюза в партнёрских организациях города.",
    date: "10 марта 2025",
    category: "Объявления",
  },
  {
    id: 3,
    title: "Спортивный фестиваль «Весна-2025»",
    excerpt:
      "Приглашаем всех студентов принять участие в ежегодном спортивном фестивале. Регистрация уже открыта!",
    date: "5 марта 2025",
    category: "Спорт",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок + кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-2">
              Последние новости
            </h2>
            <p className="text-lg text-[#1A1A1A]/60">
              Будь в курсе событий профсоюзной жизни
            </p>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center gap-2 text-ppos-blue font-semibold hover:gap-3 transition-all duration-300"
          >
            Все новости
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Сетка новостей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#1A1A1A]/5 transition-all duration-500"
            >
              {/* Плейсхолдер изображения */}
              <div className="relative h-48 bg-gradient-to-br from-ppos-blue/20 via-ppos-violet/20 to-ppos-birch/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-ppos-blue" />
                  </div>
                </div>
                {/* Тег категории */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-ppos-birch text-[#1A1A1A] text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <p className="text-xs text-[#1A1A1A]/50 font-medium mb-3">
                  {item.date}
                </p>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-ppos-blue transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Мобильная кнопка */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ppos-blue text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Все новости
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}