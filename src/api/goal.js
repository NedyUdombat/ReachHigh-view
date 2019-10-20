import { http } from './client';

export const selectGoalRequest = async credentials =>
  await http.post(`/goal/${credentials}/select`);

export const getUserGoalsRequest = async () => await http.get(`/goal`);
