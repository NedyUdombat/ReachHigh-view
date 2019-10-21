import { combineReducers } from 'redux';

// reducers
import { authReducer } from './modules/auth';
import { goalReducer } from './modules/goal';
import { taskReducer } from './modules/task';

export default combineReducers({
  auth: authReducer,
  goal: goalReducer,
  task: taskReducer,
});
