import { NewsArticles } from "../../models/NewsArticles";
import Image from "next/image";

interface ArticleProps {
  article: NewsArticles;
}

const ArticleModel = ({
  article: { title, imageUrl, content, link },
}: ArticleProps) => {
  const validImageUrl = imageUrl ? imageUrl : "custom link to a default image";
  return (
    <a className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={validImageUrl}
        width={200}
        height={200}
        alt="Article image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </a>
  );
};

export default ArticleModel;
