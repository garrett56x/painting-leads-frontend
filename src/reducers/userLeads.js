import {
  USER_FETCH_LEADS_REQUEST,
  USER_FETCH_LEADS_SUCCESS,
  USER_FETCH_LEADS_FAILURE
} from '../actions/userLeads';
  
const initialState = {
  loading: false,
  leads: [],
  error: null,
};
  
export function userLeads(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_LEADS_SUCCESS:
      return {
        ...state,
        loading: false,
        leads: action.leads,
      };
    case USER_FETCH_LEADS_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
}

  
  
export const getUserLeads = state => state.leads;
export const getUserLeadsLoading = state => state.loading;
export const getUserLeadsError = state => state.error;
  