import { toast } from 'react-toastify';

import { authenticationRequest, registrationRequest } from '../../api/auth';
import { encodeUserObject, setToken } from '../../api/helpers';

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

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

export const authenticate = userData => async dispatch => {
  try {
    const { data } = await authenticationRequest(userData);
    setToken(data.data.token);
    encodeUserObject(data.data.authenticatedUser);
    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: data.data.authenticatedUser,
    });
    toast.success('Login successful');
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: AUTHENTICATION_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  error: {},
  loggedInUser: null,
};

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case REGISTRATION_ERROR:
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
