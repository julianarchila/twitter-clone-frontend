import { post, getApiUrl } from "./config";

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

const authService = {
  login,
  signup,
};

export default authService;
