import { useContext, useEffect } from "react";
import { ArticlesContext } from "../contexts/articlesContexts";
import { SearchDetailsContext } from "../contexts/searchContext";
import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESSFULL,
  FETCH_NEXT_ARTICLES_SUCCESSFULL,
} from "../reducers/articles";
import { fetchArticles } from "../api/articles";
import { ApiResponse } from "../types/articles";
import { setFilters, getDomains } from "../utils/filters";

export const useFetchArticles = () => {
  const { dispatch } = useContext(ArticlesContext);
  const {
    searchDetails: { query, page, domains },
  } = useContext(SearchDetailsContext);

  useEffect(() => {
    dispatch({
      type: FETCH_ARTICLES,
      payload: null,
    });
    fetchArticles<ApiResponse>(query, page, domains).then((resp) => {
      dispatch({
        type:
          page !== 1
            ? FETCH_NEXT_ARTICLES_SUCCESSFULL
            : FETCH_ARTICLES_SUCCESSFULL,
        payload: resp.articles,
      });
      setFilters("domains", getDomains(resp.articles));
    });
  }, [dispatch, query, page, domains]);
};
