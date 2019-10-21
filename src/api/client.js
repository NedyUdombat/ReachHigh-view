import axios from 'axios';
import { getToken } from './helpers';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  baseURL: 'https://reachhigh-api.herokuapp.com/api/v1',
  headers: { ...Authorization },
});
