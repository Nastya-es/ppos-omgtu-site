import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getAllNews, getNewsContent } from "../../../lib/markdown";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const allNews = getAllNews();
  return allNews.map((news) => ({
    id: news.id,
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = params;

  let news;
  let contentHtml;

  try {
    const allNews = getAllNews();
    news = allNews.find((n) => n.id === id);

    if (!news) {
      notFound();
    }

    contentHtml = await getNewsContent(id);
  } catch (error) {
    notFound();
  }

  return (
    <article className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Кнопка назад */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[#3a95ff] font-semibold mb-8 hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад к новостям
        </Link>

        {/* Изображение */}
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-lg">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Метаданные */}
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5FEFB4] text-[#1A1A1A] text-sm font-semibold rounded-full">
            <Tag className="w-3.5 h-3.5" />
            {news.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-[#1A1A1A]/60">
            <Calendar className="w-4 h-4" />
            {news.date}
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
          {news.title}
        </h1>

        {/* Контент (рендерится из Markdown в HTML) */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-[#1A1A1A] prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-[#1A1A1A]/80 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#3a95ff] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-6
            prose-li:text-[#1A1A1A]/80
            prose-strong:text-[#1A1A1A]
            prose-blockquote:border-l-[#5FEFB4] prose-blockquote:bg-[#F5F7FA] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Кнопка назад внизу */}
        <div className="mt-12 pt-8 border-t border-[#1A1A1A]/10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3a95ff] text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Все новости
          </Link>
        </div>
      </div>
    </article>
  );
}