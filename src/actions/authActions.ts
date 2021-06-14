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
        dispatch({
          type: authActionTypes.LOGIN_ERROR,
          payload: error.response
            ? error.response.data
            : { message: error.message },
        });
      });
  };
};

export const logout = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    localStorage.removeItem("access");
    dispatch({
      type: authActionTypes.LOGOUT,
    });
  };
};

interface signupCredentials {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
}

export const signup = (credentials: signupCredentials) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    authService
      .signup(credentials)
      .then((response) => {
        dispatch({
          type: authActionTypes.SIGNUP,
          payload: response.data,
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type: authActionTypes.SIGNUP_ERROR,
          payload: err.response ? err.response.data : { message: err.message },
        });
      });
  };
};

export const getProfile = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    authService
      .getProfile()
      .then((response) => {
        dispatch({
          type: authActionTypes.GET_PROFILE,
          payload: response.data,
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type: authActionTypes.SIGNUP_ERROR,
          payload: err.response ? err.response.data : { message: err.message },
        });
      });
  };
};
