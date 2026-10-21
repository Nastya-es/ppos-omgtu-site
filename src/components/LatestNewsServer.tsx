import { getAllNews } from "../lib/markdown";
import LatestNewsClient from "./LatestNewsClient";

export default function LatestNewsServer() {
  // Этот код выполняется на сервере, поэтому fs работает
  const allNews = getAllNews();
  const latestNews = allNews.slice(0, 3);

  return <LatestNewsClient news={latestNews} />;
}