import axios from "axios";
import { getApiUrl, get } from "./config";

interface loginCredentials {
  email: string;
  password: string;
}

const login = (credentials: loginCredentials) => {
  return axios.post(getApiUrl("users/login/"), credentials, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const signup = (credentials: any) => {
  return axios.post(getApiUrl("users/signup/"), credentials, {
    headers: {
      "Content-type": "application/json",
    },
  });
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
