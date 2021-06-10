import { authActionTypes } from "../reducers/types/auth";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import authService from "../services/authService";

interface loginCredentials {
  email: string;
  password: string;
}

export const login = (loginCredentials: loginCredentials) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      dispatch({ type: authActionTypes.LOGIN_REQUEST });

      const data = await authService.login(loginCredentials);
      dispatch({
        type: authActionTypes.LOGIN,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
