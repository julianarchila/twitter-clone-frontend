import { authActionTypes } from "./types/auth";

interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  refreshToken?: string;
  user?: object | string;
  isLoading: boolean;
}
interface Action {
  type: authActionTypes;
  payload: object | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
};

const authReducer = (state = initialState, action: Action): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
