import { combineReducers } from 'redux';

import counterReducer from './counter';
import userReducer from './user';
import requestReducer from './request';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  request: requestReducer,
});

export default rootReducer;
