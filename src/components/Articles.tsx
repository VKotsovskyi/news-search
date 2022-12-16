import { useContext } from "react";
import styled from "styled-components";
import { ArticlesContext } from "../contexts/articlesContexts";
import { SearchDetailsContext } from "../contexts/searchContext";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { useSetSearch } from "../hooks/useSetSearch";
import { Article } from "../types/articles";
import ArticleCard from "./ArticleCard";

const Button = styled.button`
  display: block;
  width: 200px;
  padding: 10px 20px;
  color: white;
  background: #05825a;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
`;

const Articles = () => {
  useFetchArticles();
  const { setSerchProp } = useSetSearch();
  const { articles } = useContext(ArticlesContext);
  const { searchDetails } = useContext(SearchDetailsContext);
  const handleLoadMore = () => {
    setSerchProp({ page: searchDetails.page + 1 });
  };
  return (
    <>
      {articles.data.length ? (
        <>
          {articles.data.map((article: Article) => (
            <ArticleCard key={article.url} data={article} />
          ))}
          <Button onClick={handleLoadMore}>Load More</Button>
        </>
      ) : (
        <div>Please search for articles</div>
      )}
    </>
  );
};

export default Articles;
