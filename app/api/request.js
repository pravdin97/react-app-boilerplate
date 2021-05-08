import axios from 'axios';

const baseURL = process.env.API_BASE_URL;

const instance = axios({
  baseURL,
  withCredentials: true,
});

export default (params) => instance
  .request(params)
  .catch((err) => {
    throw err;
  });
