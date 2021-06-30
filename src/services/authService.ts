import axios from "axios";
import { getApiUrl, get, getAccessToken } from "./config";

interface loginCredentials {
  email: string;
  password: string;
}

const login = (credentials: loginCredentials) => {
  return axios.post(getApiUrl("auth/login/"), credentials, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const signup = (credentials: any) => {
  return axios.post(getApiUrl("auth/signup/"), credentials, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getProfile = () => {
  return get(getApiUrl("auth/me/"), {
    "Content-type": "",
    Authorization: `Token ${getAccessToken()}`,
  });
};

const authService = {
  login,
  signup,
  getProfile,
};

export default authService;
