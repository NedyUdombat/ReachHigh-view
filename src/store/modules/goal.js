import { toast } from 'react-toastify';

import { selectGoalRequest, getUserGoalsRequest } from '../../api/goal';

const GET_ALL_GOALS_SUCCESS = 'GET_ALL_GOALS_SUCCESS';
const GET_ALL_GOALS_FAILURE = 'GET_ALL_GOALS_FAILURE';
const SELECT_GOAL_FAILURE = 'SELECT_GOAL_FAILURE';

export const selectGoal = goalId => async dispatch => {
  try {
    const {
      data: { message },
    } = await selectGoalRequest(goalId);
    toast.success(message);
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: SELECT_GOAL_FAILURE });
  }
};

export const getUserGoals = () => async dispatch => {
  try {
    const { data } = await getUserGoalsRequest();
    dispatch({ type: GET_ALL_GOALS_SUCCESS, payload: data.data.goals });
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: GET_ALL_GOALS_FAILURE });
  }
};

const DEFAULT_STATE = {
  error: false,
  goals: [],
};

export const goalReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_GOALS_SUCCESS:
      return {
        ...state,
        goals: payload,
      };
    case SELECT_GOAL_FAILURE:
    case GET_ALL_GOALS_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
