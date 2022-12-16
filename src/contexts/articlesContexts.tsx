import { FC, createContext, useReducer, ReactNode } from "react";
import articlesReducer from "../reducers/articles";
import { ArticlesContext as ArticlesContextType } from "../types/contexts";

const articlesInitData = {
  loading: false,
  error: "",
  data: [],
};

export const ArticlesContext = createContext<ArticlesContextType>({
  articles: articlesInitData,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

const ArticlesContextWrapper: FC<Props> = ({ children }) => {
  const [articles, dispatch] = useReducer(articlesReducer, articlesInitData);
  return (
    <ArticlesContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContextWrapper;
