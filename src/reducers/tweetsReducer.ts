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
    case "create_tweet":
      return {
        ...state,
        isLoading: false,
        items: [payload, ...state.items],
      };
    case "tweets_error":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case "create_tweet_error":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case "remove_tweet":
      return {
        ...state,
        isLoading: false,
        error: "",
        items: state.items.filter((i) => i.id !== payload)
      }
    default:
      return state;
  }
};

export default tweetsReducer;
