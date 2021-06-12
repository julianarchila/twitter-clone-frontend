import { authActionTypes } from "../reducers/types/auth";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import authService from "../services/authService";
import { AxiosError } from "axios";

interface loginCredentials {
  email: string;
  password: string;
}

export const login = (loginCredentials: loginCredentials) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });

    authService
      .login(loginCredentials)
      .then((response) => {
        dispatch({
          type: authActionTypes.LOGIN,
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        console.log(error.response);
        console.log(error.message, "foooo");

        dispatch({
          type: authActionTypes.LOGIN_ERROR,
          payload: error.response
            ? error.response.data
            : { message: error.message },
        });
      });
  };
};
