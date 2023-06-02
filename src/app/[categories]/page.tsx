import { NewsArticles, Response } from "../../../models/NewsArticles";
import ArticleGrid from "../../components/ArticleGrid";

interface CategoriesPageProps {
  newsArticles: NewsArticles[];
}

export const getDate = async ({
  params,
}: {
  params: { categories: string };
}) => {
  const category = params?.categories?.toString();
  const response: any = await fetch(
    `https://feedparsify.cyclic.app/nyt/feeds/${category}`
  );
  const newsResponse: Response = response.json();
  return {
    props: { newsArticles: newsResponse.Data },
  };
};

const CategoryPage = ({ newsArticles }: CategoriesPageProps) => {
  return (
    <>
      <div>
        <ArticleGrid articles={newsArticles} />
      </div>
    </>
  );
};

export default CategoryPage;
