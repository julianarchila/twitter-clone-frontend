import axios from "axios";

import store from "../store";

const getAccessToken = () => store.getState().auth.token;

export const apiEndpointURL =
  process.env.REACT_APP_API_ENDPOINT || "https://apitwitterclone.herokuapp.com";

export const getApiUrl = (path: string) => `${apiEndpointURL}/${path}`;

const pullData = (request: Promise<any>) => request.then(({ data }) => data);

export const get = (url: string) =>
  axios.get(url, {
    headers: {
      "Content-type": "application/json",
      Authorization: `token ${getAccessToken()}`,
    },
  });

export const post = (url: string, payload: object) =>
  axios.post(url, payload, {
    headers: {
      "Content-type": "application/json",
      Authorization: `token ${getAccessToken()}`,
    },
  });

export const patch = (url: string, payload: object) =>
  pullData(
    axios.patch(url, payload, {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${getAccessToken()}`,
      },
    })
  );

export const put = (url: string, payload: object) =>
  pullData(
    axios.put(url, payload, {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${getAccessToken()}`,
      },
    })
  );

export const remove = (url: string) =>
  pullData(
    axios.delete(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${getAccessToken()}`,
      },
    })
  );
