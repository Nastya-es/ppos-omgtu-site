import { getAllNews } from "../../lib/markdown";
import NewsListClient from "../../components/NewsListClient";

export default function NewsPage() {
  const allNews = getAllNews();

  return (
    <section className="py-20 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок — БЕЗ motion, просто div */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
            Все новости
          </h1>
          <p className="text-lg text-[#1A1A1A]/60">
            Актуальные события и объявления профсоюзной жизни
          </p>
        </div>

        {/* Клиентский компонент с анимациями */}
        <NewsListClient news={allNews} />
      </div>
    </section>
  );
}