import { NewsArticles } from "../../models/NewsArticles";
import ArticleModel from "./ArticleModel";

interface NewsArticlesProps {
  articles: NewsArticles[];
}

const ArticleGrid = ({ articles }: NewsArticlesProps) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        {articles.map((article) => {
          return <div key={article.link} className="col-span-6 sm:col-span-1">
            <ArticleModel article={article}/>
          </div>;
        })}
      </div>
    </div>
  );
};

export default ArticleGrid;
