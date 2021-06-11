import { combineReducers } from "redux";

import auth from "./auth";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  auth,
  tweets: tweetsReducer,
});
