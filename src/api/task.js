import { http } from './client';

export const getUsersTasksRequest = async () => await http.get('/task');
