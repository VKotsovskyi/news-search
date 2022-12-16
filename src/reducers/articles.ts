import { ArticlesApiSatus, Article } from "../types/articles";
import { Action } from "../types/action";

export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_ARTICLES_SUCCESSFULL = "FETCH_ARTICLES_SUCCESSFULL";
export const FETCH_NEXT_ARTICLES_SUCCESSFULL =
  "FETCH_NEXT_ARTICLES_SUCCESSFULL";

const articlesReducer = (
  articles: ArticlesApiSatus,
  action: Action<Article[]>
) => {
  switch (action.type) {
    case FETCH_ARTICLES: {
      return {
        ...articles,
        loading: true,
      };
    }
    case FETCH_ARTICLES_SUCCESSFULL: {
      return {
        ...articles,
        loading: false,
        data: [...action.payload],
      };
    }
    case FETCH_NEXT_ARTICLES_SUCCESSFULL: {
      return {
        ...articles,
        loading: false,
        data: [...articles.data, ...action.payload],
      };
    }
    default:
      throw new Error();
  }
};

export default articlesReducer;
