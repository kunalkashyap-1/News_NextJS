import { NewsArticles, Response } from "../../../models/NewsArticles";
import ArticleGrid from "../../components/ArticleGrid";

interface CategoriesPageProps {
  newsArticles: NewsArticles[];
}

export async function generateStaticParams() {
  const categorySlugs = [
    "india",
    "us",
    "uk",
    "mumbai",
    "delhi",
    "varanasi",
    "entertainment",
    "tech",
    "education",
    "cricket",
  ];

  const posts = categorySlugs.map((slug) => {
    return {
      params: { categories: slug },
    };
  });
  return {
    posts,
    fallback: false,
  };
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
