import { post, getApiUrl, get } from "./config";

interface loginCredentials {
  email: string;
  password: string;
}

const login = (credentials: loginCredentials) => {
  return post(getApiUrl("users/login/"), credentials);
};

const signup = (credentials: any) => {
  return post(getApiUrl("users/signup/"), credentials);
};

const getProfile = () => {
  return get(getApiUrl("users/me/"));
};

const authService = {
  login,
  signup,
  getProfile,
};

export default authService;
