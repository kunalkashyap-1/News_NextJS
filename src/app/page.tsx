import ArticleGrid from "../components/ArticleGrid";
import { Response } from "../../models/NewsArticles";
import { getData } from "../api";

export default async function HomePage() {
  const news: Response = await getData(
    "https://feedparsify.cyclic.app/toi/feeds/top_stories"
  );
  return (
    <div>
      <h1 className="text-xl">Breaking news</h1>
      <ArticleGrid articles={news.Data}/>
    </div>
  );
}
