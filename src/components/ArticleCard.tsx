import { FC } from "react";
import styled from "styled-components";
import { Article } from "../types/articles";

const StyledCard = styled.a`
  display: flex;
  flex-direction: row;
  box-shadow: -4px 6px 16px -7px darkgray;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  img {
    max-width: 170px;
    margin-right: 20px;
  }
`;

type Props = {
  data: Article;
};

const ArticleCard: FC<Props> = ({ data }) => {
  return (
    <StyledCard href={data.url} target="_blank" rel="noreferrer">
      <img src={data.urlToImage} alt={data.title} />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </StyledCard>
  );
};

export default ArticleCard;
