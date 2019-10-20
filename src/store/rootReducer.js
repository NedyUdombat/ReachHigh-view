import { combineReducers } from 'redux';

// reducers
import { authReducer } from './modules/auth';
import { goalReducer } from './modules/goal';

export default combineReducers({
  auth: authReducer,
  goal: goalReducer,
});
