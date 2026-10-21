import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newsDirectory = path.join(process.cwd(), "content/news");

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  image: string;
  content: string;
}

export function getAllNews(): NewsItem[] {
  // Получаем все файлы из папки content/news
  const fileNames = fs.readdirSync(newsDirectory);

  const allNewsData = fileNames.map((fileName) => {
    // Убираем расширение .md
    const id = fileName.replace(/\.md$/, "");

    // Читаем содержимое файла
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Используем gray-matter для парсинга метаданных
    const matterResult = matter(fileContents);

    return {
      id,
      date: matterResult.data.date,
      category: matterResult.data.category,
      title: matterResult.data.title,
      image: matterResult.data.image,
      content: matterResult.content,
    };
  });

  // Сортируем по дате (новые сверху)
  return allNewsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getNewsBySlug(slug: string): NewsItem {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    id: slug,
    date: matterResult.data.date,
    category: matterResult.data.category,
    title: matterResult.data.title,
    image: matterResult.data.image,
    content: matterResult.content,
  };
}

export async function getNewsContent(slug: string): Promise<string> {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Конвертируем Markdown в HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return processedContent.toString();
}