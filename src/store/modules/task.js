import { toast } from 'react-toastify';

import { getUsersTasksRequest, getSingleTaskRequest } from '../../api/task';

const GET_ALL_USERS_TASKS_SUCCESS = 'GET_ALL_USERS_TASKS_SUCCESS';
const GET_SINGLE_TASK_SUCCESS = 'GET_SINGLE_TASK_SUCCESS';
const GET_ALL_USERS_TASKS_FAILURE = 'GET_ALL_USERS_TASKS_FAILURE';
const GET_SINGLE_TASK_FAILURE = 'GET_SINGLE_TASK_FAILURE';

export const getUsersTasks = () => async dispatch => {
  try {
    const {
      data: { data },
    } = await getUsersTasksRequest();
    dispatch({ type: GET_ALL_USERS_TASKS_SUCCESS, payload: data.userTasks });
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: GET_SINGLE_TASK_FAILURE });
  }
};

export const getSingleTask = id => async dispatch => {
  try {
    const {
      data: { data },
    } = await getSingleTaskRequest(id);
    dispatch({ type: GET_SINGLE_TASK_SUCCESS, payload: data.task });
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: GET_ALL_USERS_TASKS_FAILURE });
  }
};

const DEFAULT_STATE = {
  error: false,
  tasks: [],
  task: {},
};

export const taskReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
      };
    case GET_SINGLE_TASK_SUCCESS:
      return {
        ...state,
        task: payload,
      };
    case GET_ALL_USERS_TASKS_FAILURE:
    case GET_SINGLE_TASK_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
