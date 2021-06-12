export enum authActionTypes {
  LOGIN = "login",
  LOGOUT = "logout",
  SIGNUP = "signup",
  LOGIN_REQUEST = "login_request",
  REGISTER_REQUEST = "register_request",
  LOGIN_ERROR = "login_error",
  SIGNUP_ERROR = "signup_error",
}

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  // refreshToken?: string;
  user?: object;
  isLoading: boolean;
  error?: any;
}

export interface Action {
  type: authActionTypes;
  payload: AuthState | any;
}
