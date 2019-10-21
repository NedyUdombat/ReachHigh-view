import { toast } from 'react-toastify';

import { getUsersTasksRequest } from '../../api/task';

const GET_ALL_USERS_TASKS_SUCCESS = 'GET_ALL_USERS_TASKS_SUCCESS';
const GET_ALL_USERS_TASKS_FAILURE = 'GET_ALL_USERS_TASKS_FAILURE';

export const getUsersTasks = () => async dispatch => {
  try {
    const {
      data: { data },
    } = await getUsersTasksRequest();
    dispatch({ type: GET_ALL_USERS_TASKS_SUCCESS, payload: data.userTasks });
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: GET_ALL_USERS_TASKS_FAILURE });
  }
};

const DEFAULT_STATE = {
  error: false,
  tasks: [],
};

export const taskReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
      };
    case GET_ALL_USERS_TASKS_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
