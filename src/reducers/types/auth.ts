export enum authActionTypes {
  LOGIN = "login",
  LOGOUT = "logout",
  SIGNUP = "logut",
  LOGIN_REQUEST = "login_request",
  REGISTER_REQUEST = "register_request",
}

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  // refreshToken?: string;
  user?: object;
  isLoading: boolean;
}

export interface Action {
  type: authActionTypes;
  payload: AuthState | any;
}
