import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { tweetActionTypes } from "../reducers/types/tweets";
import { get, getApiUrl } from "../services/config";

export const listTweets = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      dispatch({ type: tweetActionTypes.REQUEST_GET_TWEETS });

      const data = await get(getApiUrl("tweets/"));
      dispatch({
        type: tweetActionTypes.GET_TWEETS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
