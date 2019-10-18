import { toast } from 'react-toastify';

import { registrationRequest } from '../../api/auth';
import { setToken } from '../../api/helpers';

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const register = userData => async dispatch => {
  try {
    const { data } = await registrationRequest(userData);
    setToken(data.data.token);
    dispatch({ type: REGISTRATION_SUCCESS, payload: data.data });
    toast.success('Account successfully created');
  } catch (error) {
    toast.error(`${error.response.data.errors[0]}`);
    dispatch({ type: REGISTRATION_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  error: {},
  loggedInUser: null,
};

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedInUser: action.user,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
