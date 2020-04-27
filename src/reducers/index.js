import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { user } from './user';
import { userLeads } from './userLeads';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  user,
  userLeads,
});

export default rootReducer;
