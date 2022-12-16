import { SearchDetails, SearchDetailsPayload } from "../types/searchDetails";
import { Action } from "../types/action";

export const UPDATE_PROP = "UPDATE_PROP";

const searchDetailsReducer = (
  searchDetails: SearchDetails,
  action: Action<SearchDetailsPayload>
) => {
  switch (action.type) {
    case UPDATE_PROP: {
      return {
        ...searchDetails,
        ...action.payload,
      };
    }
    default:
      throw new Error();
  }
};

export default searchDetailsReducer;
