import { NewsArticles } from "../../models/NewsArticles";
import Image from "next/image";
import Placeholder from "/public/placeholder.jpg";

interface ArticleProps {
  article: NewsArticles;
}

const ArticleModel = ({
  article: { title, imageUrl, content, link },
}: ArticleProps) => {
  const validImageUrl =
    imageUrl && imageUrl != "https://static.toiimg.com/photo/25581306.cms"
      ? imageUrl
      : null;
  const truncatedContent =
    content?.length > 100 ? `${content.substring(0, 100)}...` : content;

  return (
    <a href={link} className="max-w-sm overflow-hidden  shadow-lg">
      <Image
        className="w-full h-52 rounded-md"
        src={validImageUrl || Placeholder}
        width={500}
        height={300}
        alt="Article image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{truncatedContent}</p>
      </div>
    </a>
  );
};

export default ArticleModel;
