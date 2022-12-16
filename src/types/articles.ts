export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ArticlesApiSatus = {
  loading: boolean;
  error: string;
  data: Article[];
};

export type ApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
