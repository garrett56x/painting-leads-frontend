import { combineReducers } from 'redux';

import { alert } from './alert';
import { user } from './user';
import { userLeads } from './userLeads';
import { leads } from './leads';

const rootReducer = combineReducers({
  alert,
  user,
  userLeads,
  leads,
});

export default rootReducer;
