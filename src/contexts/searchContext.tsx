import { FC, createContext, useReducer, ReactNode } from "react";
import searchDetailsReducer from "../reducers/searchDetails";
import { SearchContext as SearchContextType } from "../types/contexts";
import { getParsedLocalstorageItem } from "../utils/filters";

const searchInitData = {
  query: getParsedLocalstorageItem("topics").active,
  page: 1,
  domains: getParsedLocalstorageItem("domains").active,
};

export const SearchDetailsContext = createContext<SearchContextType>({
  searchDetails: searchInitData,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

const SearchDetailsContextWrapper: FC<Props> = ({ children }) => {
  const [searchDetails, dispatch] = useReducer(
    searchDetailsReducer,
    searchInitData
  );
  return (
    <SearchDetailsContext.Provider value={{ searchDetails, dispatch }}>
      {children}
    </SearchDetailsContext.Provider>
  );
};

export default SearchDetailsContextWrapper;
