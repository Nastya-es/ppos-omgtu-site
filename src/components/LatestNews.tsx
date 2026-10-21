"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { getAllNews } from "../lib/markdown";

export default function LatestNews() {
  const allNews = getAllNews();
  const latestNews = allNews.slice(0, 3);

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
            className="hidden sm:inline-flex items-center gap-2 text-[#3a95ff] font-semibold hover:gap-3 transition-all duration-300"
          >
            Все новости
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Сетка новостей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news, i) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#1A1A1A]/5 transition-all duration-500"
            >
              {/* Изображение */}
              <div className="relative h-48 bg-gradient-to-br from-[#3a95ff]/20 via-[#bc76ff]/20 to-[#5fefb4]/20 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Тег категории */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#5FEFB4] text-[#1A1A1A] text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <p className="text-xs text-[#1A1A1A]/50 font-medium mb-3">
                  {news.date}
                </p>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-[#3a95ff] transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 line-clamp-3 leading-relaxed">
                  {news.content.substring(0, 150).replace(/[#*`]/g, "").trim()}...
                </p>
                <Link
                  href={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 mt-4 text-[#3a95ff] text-sm font-semibold hover:gap-3 transition-all duration-300"
                >
                  Читать далее
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Мобильная кнопка */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3a95ff] text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Все новости
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}