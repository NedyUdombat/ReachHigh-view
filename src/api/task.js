import { http } from './client';

export const getUsersTasksRequest = async () => await http.get('/task');

export const getSingleTaskRequest = async id => await http.get(`/task/${id}`);
