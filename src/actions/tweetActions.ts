import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { tweetActionTypes } from "../reducers/types/tweets";
import { get, getApiUrl } from "../services/config";
import { AxiosError } from "axios";

export const getTweets = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch({ type: tweetActionTypes.REQUEST_GET_TWEETS });

    get(getApiUrl("tweets/"))
      .then((response) =>
        dispatch({
          type: tweetActionTypes.GET_TWEETS,
          payload: response.data,
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
