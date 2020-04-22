import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_FETCH_LEADS_REQUEST,
  USER_FETCH_LEADS_SUCCESS,
  USER_FETCH_LEADS_FAILURE
} from '../actions/user';

const userId = JSON.parse(localStorage.getItem('userId'));

const initialState = {
  loggingIn: false,
  loggedIn: !!userId,
  userId: userId || null,
  leads: {
    loading: false,
    leads: [],
    error: null,
  },
};

export function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        userId: action.userId,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        userId: null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        userId: null,
      };
    case USER_FETCH_LEADS_REQUEST:
      return {
        ...state,
        leads: {
          ...state.leads,
          loading: true,
        }
      };
    case USER_FETCH_LEADS_SUCCESS:
      return {
        ...state,
        leads: {
          ...state.leads,
          loading: false,
          leads: action.leads,
        }
      };
    case USER_FETCH_LEADS_FAILURE:
      return { 
        ...state,
        leads: {
          ...state.leads,
          loading: false,
          error: action.error,
        }
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

export const getUserId = state => state.userId;
export const getUserLeads = state => state.leads.leads;
export const getUserLeadsLoading = state => state.leads.loading;
export const getUserLeadsError = state => state.leads.error;
