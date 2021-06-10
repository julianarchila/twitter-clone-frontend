import { post, getApiUrl } from "./config";

interface loginCredentials {
  email: string;
  password: string;
}

const login = (credentials: loginCredentials) => {
  return post(getApiUrl("users/login/"), credentials);
};

const authService = {
  login,
};

export default authService;
