"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Tag } from "lucide-react";
import NewsModal from "./NewsModal";

interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  image: string;
  images: string[];
  content: string;
}

interface Props {
  news: NewsItem[];
}

// Функция для красивого форматирования даты
function formatDate(dateString: string): string {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function NewsListClient({ news }: Props) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: NewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-[#F5F7FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
              Все новости
            </h1>
            <p className="text-lg text-[#1A1A1A]/60">
              Актуальные события и объявления профсоюзной жизни
            </p>
          </motion.div>

          {/* Сетка новостей */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#1A1A1A]/5 transition-all duration-500"
              >
                {/* Изображение */}
                <div className="relative h-48 bg-gradient-to-br from-[#3a95ff]/20 via-[#bc76ff]/20 to-[#5fefb4]/20 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Тег категории */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5FEFB4] text-[#1A1A1A] text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6">
                  <p className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A]/50 font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(item.date)}
                  </p>
                  <h2 className="text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-[#3a95ff] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#1A1A1A]/60 line-clamp-3 leading-relaxed">
                    {item.content
                      .substring(0, 150)
                      .replace(/[#*`]/g, "")
                      .trim()}
                    ...
                  </p>
                  <button
                    onClick={() => openModal(item)}
                    className="inline-flex items-center gap-2 mt-4 text-[#3a95ff] text-sm font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Читать далее
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Если новостей нет */}
          {news.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-[#1A1A1A]/60">
                Пока нет новостей. Загляните позже!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Модальное окно */}
      <NewsModal
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}