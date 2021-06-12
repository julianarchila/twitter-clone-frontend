import { AuthState, Action } from "./types/auth";

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: "",
};
const token = localStorage.getItem("access");
if (token) {
  initialState["token"] = token;
  initialState["isAuthenticated"] = true;
}

const authReducer = (state = initialState, action: Action): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case "register_request":
      return { ...state, isLoading: true };

    case "login_request":
      return { ...state, isLoading: true };

    case "login":
      localStorage.setItem("access", payload.token);
      console.log(payload);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        user: payload.user,
      };
    case "login_error":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
export default authReducer;
