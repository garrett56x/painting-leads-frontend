import { userConstants } from '../constants/user';
import {
  FETCH_USER_LEADS_REQUEST,
  FETCH_USER_LEADS_SUCCESS,
  FETCH_USER_LEADS_FAILURE
} from '../actions/user';

const initialState = {
  loading: false,
  leads: [],
  error: null,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_LEADS_SUCCESS:
      return {
        ...state,
        loading: false,
        leads: action.leads
      };
    case FETCH_USER_LEADS_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    // case userConstants.DELETE_REQUEST:
    //   // add 'deleting:true' property to user being deleted
    //   return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };
    // case userConstants.DELETE_SUCCESS:
    //   // remove deleted user from state
    //   return {
    //     items: state.items.filter(user => user.id !== action.id)
    //   };
    // case userConstants.DELETE_FAILURE:
    //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    //   return {
    //     ...state,
    //     items: state.items.map(user => {
    //       if (user.id === action.id) {
    //         // make copy of user without 'deleting:true' property
    //         const { deleting, ...userCopy } = user;
    //         // return copy of user with 'deleteError:[error]' property
    //         return { ...userCopy, deleteError: action.error };
    //       }

    //       return user;
    //     })
    //   };
    default:
      return state
  }
}

export const getUserLeads = state => state.leads;
export const getUserLeadsLoading = state => state.loading;
export const getUserLeadsError = state => state.error;
