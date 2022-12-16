import { useCallback, useContext } from "react";
import { SearchDetailsContext } from "../contexts/searchContext";
import { UPDATE_PROP } from "../reducers/searchDetails";
import { SearchDetailsPayload } from "../types/searchDetails";
import { setFilters } from "../utils/filters";

export const useSetSearch = () => {
  const { dispatch } = useContext(SearchDetailsContext);
  const setSerchProp = useCallback(
    (props: SearchDetailsPayload) => {
      dispatch({
        type: UPDATE_PROP,
        payload: props,
      });
      if (props.query) {
        setFilters("topics", [props.query]);
      }
    },
    [dispatch]
  );
  return { setSerchProp };
};
