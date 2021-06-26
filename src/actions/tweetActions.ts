import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { tweetActionTypes } from "../reducers/types/tweets";
import { get, getApiUrl, post, remove } from "../services/config";
import { AxiosError } from "axios";

export const getTweets = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch({ type: tweetActionTypes.REQUEST_GET_TWEETS });

    get(getApiUrl("feed/home/"))
      .then((response) =>
        dispatch({
          type: tweetActionTypes.GET_TWEETS,
          payload: response.data.results,
        })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: tweetActionTypes.TWEETS_ERROR,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
      });
  };
};

export const createTweet = (content: any) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    post(getApiUrl("tweets/"), content)
      .then((response) => {
        dispatch({
          type: tweetActionTypes.CREATE_TWEET,
          payload: response.data,
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type: tweetActionTypes.TWEETS_ERROR,
          payload:
            err.response && err.response.data.detail
              ? err.response.data.detail
              : err.message,
        });
      });
  };
};

export const retweet = (content: any) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    post(getApiUrl("tweets/retweet/"), content)
      .then((response) => {
        dispatch({
          type: tweetActionTypes.CREATE_TWEET,
          payload: response.data,
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type: tweetActionTypes.TWEETS_ERROR,
          payload:
            err.response && err.response.data.detail
              ? err.response.data.detail
              : err.message,
        });
      });
  };
};

export const removeTweet = (id: string) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    remove(getApiUrl(`tweets/${id}/`))
      .then(() => {
        dispatch({
          type: tweetActionTypes.REMOVE_TWEET,
          payload: id,
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type: tweetActionTypes.TWEETS_ERROR,
          payload:
            err.response && err.response.data.detail
              ? err.response.data.detail
              : err.message,
        });
      });
  };
};
