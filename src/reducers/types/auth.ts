export enum authActionTypes {
  LOGIN = "login",
  LOGOUT = "logout",
  SIGNUP = "signup",
  LOGIN_REQUEST = "login_request",
  SINGUP_REQUEST = "signup_request",
  LOGIN_ERROR = "login_error",
  SIGNUP_ERROR = "signup_error",
  GET_PROFILE = "get_profile",
  GET_PROFILE_REQUEST = "get_profile_request",
}

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  // refreshToken?: string;
  user?: any;
  isLoading: boolean;
  error?: any;
}

export interface Action {
  type: authActionTypes;
  payload: AuthState | any;
}
