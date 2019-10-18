import axios from 'axios';
import { getToken } from './helpers';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: { ...Authorization },
});
