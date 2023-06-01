import ArticleGrid from "../components/ArticleGrid";
import { Response } from "../../models/NewsArticles";
import { getData } from "../api";

export default async function HomePage() {
  const news: Response = await getData(
    "https://feedparsify.cyclic.app/toi/feeds/top_stories"
  );
  return (
    <div>
      <h1 className="text-4xl mx-4 underline">Breaking news</h1>
      <hr/>
      <ArticleGrid articles={news.Data}/>
    </div>
  );
}
