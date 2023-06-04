import { Response } from "../../../models/NewsArticles";
import ArticleGrid from "../../components/ArticleGrid";
import { getCategoryData } from "../../api";


const CategoryPage = async ({ params }: { params: { categories: string } }) => {

  const result: Response = await getCategoryData(params.categories);

  return (
      <div>
        <ArticleGrid articles={result.Data} />
      </div>
  );
};


export default CategoryPage;
