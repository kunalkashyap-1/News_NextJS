export interface NewsArticles {
  title: string;
  imageUrl?: string;
  content: string;
  link: string;
  publishedAt?: string;
}

export interface Response {
  Data: NewsArticles[];
}
