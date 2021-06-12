export enum tweetActionTypes {
  REQUEST_GET_TWEETS = "request_get_tweets",
  GET_TWEETS = "get_tweets",
  TWEETS_ERROR = "tweets_error",
}

export interface TweetState {
  isLoading: boolean;
  items: any[];
  error?: string;
}
export interface Action {
  type: tweetActionTypes;
  payload: TweetState | any;
}
