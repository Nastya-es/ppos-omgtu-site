"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";

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
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export default function NewsModal({ news, isOpen, onClose }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Сброс индекса при открытии новой новости
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden"; // блокируем прокрутку фона
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, news]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!news) return null;

  const images = news.images && news.images.length > 0 ? news.images : [news.image];

  const goNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose} // закрытие по клику на фон
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
          >
            {/* Кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5 text-[#1A1A1A]" />
            </button>

            {/* Галерея фото */}
            {images.length > 0 && (
              <div className="relative bg-gradient-to-br from-[#3a95ff]/20 via-[#bc76ff]/20 to-[#5fefb4]/20 rounded-t-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={images[currentImageIndex]}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Стрелки листания (если фото больше 1) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Индикаторы (точки) */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-white w-6"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Контент */}
            <div className="p-6 sm:p-8">
              {/* Мета-информация */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-[#1A1A1A]/60">
                  <Calendar className="w-4 h-4" />
                  {formatDate(news.date)}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5FEFB4] text-[#1A1A1A] text-xs font-semibold rounded-full">
                  <Tag className="w-3 h-3" />
                  {news.category}
                </span>
              </div>

              {/* Заголовок */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
                {news.title}
              </h2>

              {/* Текст новости */}
              <div
                className="prose prose-lg max-w-none text-[#1A1A1A]/80"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}