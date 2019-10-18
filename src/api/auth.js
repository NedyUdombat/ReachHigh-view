import { http } from './client';

export const registrationRequest = async credentials =>
  await http.post('/auth/register', credentials);

export const authenticationRequest = async credentials =>
  await http.post('/auth/login', credentials);
