"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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

function formatDate(dateString: string): string {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const date = new Date(dateString);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default function LatestNewsClient({ news }: Props) {
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Последние новости
              </h2>
              <p className="text-lg text-[#1A1A1A]/60">
                Будь в курсе событий профсоюзной жизни
              </p>
            </div>
            <a
              href="/news"
              className="hidden sm:flex items-center gap-2 text-[#3a95ff] font-semibold hover:gap-3 transition-all"
            >
              Все новости
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Карточки новостей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => openModal(item)}
                  className="group block w-full text-left"
                >
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-500">
                          {formatDate(item.date)}
                        </span>
                        <span className="px-3 py-1 bg-[#5FEFB4] text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#3a95ff] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {item.content.replace(/[#*`]/g, "").substring(0, 150).trim()}...
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Кнопка на мобильных */}
          <div className="sm:hidden text-center mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-[#3a95ff] font-semibold"
            >
              Все новости
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
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