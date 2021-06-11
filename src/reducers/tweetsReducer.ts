import { Action, TweetState } from "./types/tweets";

const initialState: TweetState = {
  isLoading: false,
  items: [],
};

const tweetsReducer = (state: TweetState = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "request_get_tweets":
      return {
        ...state,
        isLoading: true,
      };
    case "get_tweets":
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    default:
      return state;
  }
};

export default tweetsReducer;
