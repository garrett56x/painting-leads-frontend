import { combineReducers } from 'redux';

import { alert } from './alert';
import { leads } from './leads';
import { modal } from './modal';
import { user } from './user';
import { userLeads } from './userLeads';

const rootReducer = combineReducers({
  alert,
  leads,
  modal,
  user,
  userLeads,
});

export default rootReducer;
