import jwt from 'jsonwebtoken';

import { KEY } from '../utils/config';

export const decodeToken = token => jwt.decode(token);

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => localStorage.getItem('token');

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, KEY, { expiresIn });
  return localStorage.setItem('encodedUser', encodedUser);
};

export const getEncodedUser = () => {
  const encodedUser = localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  localStorage.removeItem('encodedUser');
  return null;
};

export const isAdmin = () => {
  return getEncodedUser().isAdmin === true;
};

export const isIndexPage = () => {
  return window.location.pathname === '/';
};

export const logout = () => {
  destroyEncodedUser();
  destroyToken();
  window.location.assign('/');
};
