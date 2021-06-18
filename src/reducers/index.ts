import { combineReducers } from "redux";

import auth from "./auth";
import tweetsReducer from "./tweetsReducer";

const appReducer = combineReducers({
  auth: auth,
  tweets: tweetsReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "logout") {
    console.log("fooo");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
