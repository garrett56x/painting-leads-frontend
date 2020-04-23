import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { user } from './user';
import { userLeads } from './userLeads';
import { alert } from './alert';

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  userLeads,
  alert,
});

export default rootReducer;
