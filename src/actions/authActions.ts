import { Action, authActionTypes } from "../reducers/types/auth";

export const login = (loginCredentials: object): Action => {
  return {
    type: authActionTypes.LOGIN,
    payload: {
      token: "some token",
      user: loginCredentials,
    },
  };
};
