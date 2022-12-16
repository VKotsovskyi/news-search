import { Dispatch } from "react";
import { ArticlesApiSatus } from "./articles";
import { SearchDetails } from "./searchDetails";

export type ArticlesContext = {
  articles: ArticlesApiSatus;
  dispatch: Dispatch<any>;
};

export type SearchContext = {
  searchDetails: SearchDetails;
  dispatch: Dispatch<any>;
};
